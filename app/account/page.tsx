"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CreateAccount from "./AccountComponents/account";

type User = {
  name: string;
  email: string;
};

const Page = () => {
  const router = useRouter();

  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.error("No token found!");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setLogin(true);
          setUserData(data.user);
          console.log("User data:", data);
        } else {
          console.error("Failed to fetch user:", await response.json());
          localStorage.removeItem("authToken");
          router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (!isClient) {
    return null;
  }


  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push('/');
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : login ? (
        <div className="max-w-[800px] m-auto w-full">
          <h2 className="text-5xl">Account</h2>
          <h4 className="capitalize">Hii {userData?.name}</h4>
          <h4>Email: {userData?.email}</h4>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <CreateAccount />
      )}
    </>
  );
};

export default Page;
