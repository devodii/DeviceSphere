import React, { useState, ChangeEvent } from "react";

const ImageUploader: React.FC = () => {
   const [selectedImages, setSelectedImages] = useState<string[]>([]);

   const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
         const imageUrls = Array.from(files).map((file) =>
            URL.createObjectURL(file)
         );
         setSelectedImages((prevImages) => [...prevImages, ...imageUrls]);
      }
   };

   return (
      <div>
         <h1>Image Uploader</h1>
         <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
         />
         {selectedImages.length > 0 && (
            <div>
               <h2>Selected Images:</h2>
               {selectedImages.map((imageUrl) => (
                  <img
                     key={imageUrl}
                     src={imageUrl}
                     alt="Selected"
                     style={{ width: "300px" }}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default ImageUploader;
