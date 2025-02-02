"use client";

import React, { useState, useEffect } from "react";
import ImageUpload from '@/components/ImageUpload';
import CloseIcon from '@mui/icons-material/Close';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ProductDetails = {
  name: string;
  description: string;
  price: number;
  imageUrls: string[];
  quantity: number;
  status: boolean;
  comparedAtPrice: number;
};

const Page = () => {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null);
  const [productState, setProductState] = useState<ProductDetails>({
    name: "",
    description: "",
    price: 0,
    imageUrls: [],
    quantity: 0,
    comparedAtPrice: 0,
    status: false,
  });

  const param = useParams();
  const productId = param.id;

  // Fetch product details on component mount
  async function fetchProductsDetails() {
    const res = await fetch(`/api/product/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const productData = await res.json();
    setProductDetails(productData);
  }

  useEffect(() => {
    if (productId) {
      fetchProductsDetails();
    }
  }, [productId]);

  useEffect(() => {
    if (productDetails) {
      setProductState({
        name: productDetails.name,
        description: productDetails.description,
        price: productDetails.price,
        comparedAtPrice: productDetails.comparedAtPrice,
        quantity: productDetails.quantity,
        imageUrls: productDetails.imageUrls,
        status: productDetails.status,
      });
    }
  }, [productDetails]);

  function handleRemove(indexToRemove: number) {
    const newUrls = productState.imageUrls.filter((_, index) => index !== indexToRemove);
    setProductState((prevState) => ({
      ...prevState,
      imageUrls: newUrls,
    }));
  }

  function handleUploadComplete(urls: string[]) {
    setProductState((prevState) => ({
      ...prevState,
      imageUrls: [...prevState.imageUrls, ...urls], // Updating imageUrls correctly
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const updateProduct = async () => {
        const res = await fetch(`/api/product/${productId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: productState.name,
            description: productState.description,
            price: productState.price,
            quantity: productState.quantity,
            comparedAtPrice: productState.comparedAtPrice,
            status: productState.status,
            imageUrls: productState.imageUrls,
          }),
        });

        if (!res.ok) {
          console.log("response", res)
          return console.log(res);
        }

        return res;
      };
      updateProduct();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Product Name"
          value={productState.name}
          onChange={(e) => setProductState((prevState) => ({
              ...prevState,
              name: e.target.value,
          }))}
          className="w-full p-2 border rounded"
          required
        />

        <Textarea
          placeholder="Description"
          value={productState.description}
          onChange={(e) => setProductState((prevState) => ({
            ...prevState,
            description: e.target.value,
          }))}
          className="w-full p-2 border rounded"
        />

        <div className="grid grid-cols-2 gap-5">
          <Input
            type="number"
            placeholder="Price"
            value={productState.price}
            onChange={(e) => setProductState((prevState) => ({
              ...prevState,
              price: parseFloat(e.target.value),
            }))}
            className="w-full p-2 border rounded"
            required
          />

          <Input
            type="number"
            placeholder="Compared At Price"
            value={productState.comparedAtPrice}
            onChange={(e) => setProductState((prevState) => ({
              ...prevState,
              comparedAtPrice: parseFloat(e.target.value),
            }))}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Product Images</label>
          <ImageUpload onUploadComplete={handleUploadComplete} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {productState.imageUrls.map((url, index) => (
              <div key={index} className="relative">
                <img
                  src={url}
                  alt={`Product Image ${index + 1}`}
                  className="w-full aspect-square object-cover rounded"
                />
                <CloseIcon
                  onClick={() => handleRemove(index)}
                  className="cursor-pointer absolute top-1 right-1 text-red-500 bg-white rounded-full p-1 hover:bg-red-100"
                />
              </div>
            ))}
          </div>
        </div>

        <Input
          type="number"
          placeholder="Quantity"
          value={productState.quantity}
          onChange={(e) => setProductState((prevState) => ({
            ...prevState,
            quantity: parseInt(e.target.value),
          }))}
        />

        <Select value={productState.status ? "true" : "false"} onValueChange={(value) => setProductState((prevState) => ({
          ...prevState,
          status: value === "true",
        }))}>
          <p>Status</p>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Draft" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="true">Active</SelectItem>
            <SelectItem value="false">Draft</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit" className="w-full">
          Save
        </Button>
      </form>
    </div>
  );
};

export default Page;
