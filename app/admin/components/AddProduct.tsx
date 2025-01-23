"use client";

import React, { useState } from "react";
import ImageUpload from '@/components/ImageUpload';
import CloseIcon from '@mui/icons-material/Close';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number | "">("");
  const [comparedAtPrice, setComparedAtPrice] = useState<number | "">("");
  const [status, setStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle image upload completion
  const handleUploadComplete = (urls: string[]) => {
    setImageUrls((prevUrls) => [...prevUrls, ...urls]);
  };

  // Remove image by index
  const handleRemove = (indexToRemove: number) => {
    const newUrls = imageUrls.filter((_, index) => index !== indexToRemove);
    setImageUrls(newUrls);
    console.log("Removed image at index:", indexToRemove);
    console.log("Updated URLs:", newUrls);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    if (!name || !price || imageUrls.length === 0 || quantity === "" || comparedAtPrice === "") {
      setMessage("Please fill all required fields and add at least one image.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch("/api/addproduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          price: parseFloat(price),
          imageUrls,
          quantity: quantity === "" ? 0 : quantity, // Ensure quantity is always a number
          status,
          comparedAtPrice: comparedAtPrice === "" ? 0 : parseFloat(comparedAtPrice),
        }),
      });
  
      if (response.ok) {
        setMessage("Product added successfully!");
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setComparedAtPrice("");
        setStatus(false);
        setImageUrls([]);
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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      
      {message && <p className="mb-4 text-red-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <div className="grid grid-cols-2 gap-5">
          <Input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

          <Input
            type="number"
            placeholder="Compared At Price"
            value={comparedAtPrice}
            onChange={(e) => setComparedAtPrice(e.target.value === "" ? "" : Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Product Images</label>
          <ImageUpload onUploadComplete={handleUploadComplete} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {imageUrls.map((url, index) => (
              <div key={index} className="relative">
                <img
                  src={url}
                  alt={`Product Image ${index + 1}`}
                  className="w-full aspect-square object-cover rounded"
                />
                <CloseIcon
                  onClick={() => handleRemove(index)}
                  className="cursor-pointer absolute top-1 right-1 text-red-500 bg-white rounded-full p-1 hover:bg-red-100"
                  title="Remove image"
                />
              </div>
            ))}
          </div>
        </div>

        <Input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value === "" ? "" : Number(e.target.value))}
        />

        <Select onValueChange={(value) => setStatus(value === "true")}>
          <p>Status</p>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Draft" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="true">Active</SelectItem>
            <SelectItem value="false">Draft</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Adding..." : "Add Product"}
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;