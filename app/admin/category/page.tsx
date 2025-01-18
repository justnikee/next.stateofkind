"use client";
import React, { useState } from "react";

const Page = () => {
  const [collection, setCollection] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!collection.trim()) {
      setMessage("Category name is required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Fixed Content-Type
        body: JSON.stringify({ collection }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message || "Category created successfully!");
        setCollection(""); // Clear input field
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.message}`);
      }
    } catch (error) {
      setMessage("An error occurred while adding the category.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Category</h2>
      {message && (
        <p
          className={`mb-4 ${
            message.startsWith("Error") ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create category"
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="p-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          {loading ? "Adding Category..." : "Add Category"}
        </button>
      </form>
    </div>
  );
};







export default Page;
