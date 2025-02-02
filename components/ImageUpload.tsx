"use client";
import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "@/app/utils/uploadthing";
import "@uploadthing/react/styles.css";

type ImageUploadProps = {
  onUploadComplete: (urls: string[]) => void;
};

export default function ImageUpload({ onUploadComplete }: ImageUploadProps) {
  return (
    <div>
      <UploadDropzone<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          const urls = res.map((file) => file.url);
          onUploadComplete(urls);
        }}
        onUploadError={(error) => {
          console.error("Upload error:", error);
          alert("Upload failed!");
        }}
      />
    </div>
  );
}