"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type ProductCategory = {
  category: {
    name: string
  }
}

const Page = () => {
  const params = useParams();
  const id = params?.id;

  const [data, setData] = useState<ProductCategory | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Product Id Not Found!!");
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
        setError(err instanceof Error ? err.message : "unknown error occured");
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
