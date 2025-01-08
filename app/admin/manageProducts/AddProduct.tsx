"use client";

import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([""]); // Array for multiple images
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...imageUrls];
    updatedImages[index] = value;
    setImageUrls(updatedImages);
  };

  const addImageField = () => {
    setImageUrls([...imageUrls, ""]);
  };

  const removeImageField = (index: number) => {
    const updatedImages = imageUrls.filter((_, i) => i !== index);
    setImageUrls(updatedImages);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!name || !price || imageUrls.length === 0 || imageUrls.some(url => !url.trim())) {
      setMessage("Please fill all required fields and add at least one image.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/addproduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price: parseFloat(price), imageUrls }),
      });

      if (response.ok) {
        setMessage("Product added successfully!");
        setName("");
        setDescription("");
        setPrice("");
        setImageUrls([""]); // Reset images field
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error}`);
      }
    } catch (error) {
      setMessage("An error occurred while adding the product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      
      {message && <p className="mb-4 text-red-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <div className="space-y-2">
          <label className="font-medium">Product Images</label>
          {imageUrls.map((url, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                placeholder={`Image URL ${index + 1}`}
                value={url}
                onChange={(e) => handleImageChange(index, e.target.value)}
                className="w-full p-2 border rounded"
              />
              {index > 0 && (
                <button type="button" onClick={() => removeImageField(index)} className="px-2 bg-red-500 text-white rounded">
                  ✖
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addImageField} className="text-blue-500">
            + Add More Images
          </button>
        </div>

        <button type="submit" disabled={loading} className="w-full p-2 bg-blue-600 text-white rounded">
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
