"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const id = params?.id;

  console.log("Fetched ID:", id);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("No ID provided");
      return;
    }

    async function fetchCategory() {
      try {
        const res = await fetch(`/api/category/${id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch category. Status: ${res.status}`);
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching category:", err);
        setError(err);
      }
    }

    fetchCategory();
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Category Details</h1>
      <div>
        <form className="flex">
          <label>Category Title</label>
          <input placeholder="Category Name" value={data.category.name}></input>
        </form>
      </div>
    </div>
  );
};

export default Page;
