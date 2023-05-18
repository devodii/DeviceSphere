import React, { useState } from "react";
import { Add, Edit } from "@material-ui/icons";
import styled from "styled-components";

interface Props {
  label: string;
  productName?: string;
  sendToParent: (data: string) => void;
}

const ImageUploader: React.FC<Props> = ({ label, productName, sendToParent }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        setImageUrl(result);
        sendToParent(result);
      };

      // Resize the image before reading it as data URL
      resizeImage(file, 400) // Specify the maximum size for the resized image
        .then((resizedFile) => reader.readAsDataURL(resizedFile))
        .catch((error) => console.error("Error resizing image:", error));
    } else {
      setImageUrl(null);
      sendToParent("");
    }
  };

  const resizeImage = (file: File, maxSize: number): Promise<File> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Calculate the new dimensions to fit within the maxSize
        if (width > height && width > maxSize) {
          height *= maxSize / width;
          width = maxSize;
        } else if (height > width && height > maxSize) {
          width *= maxSize / height;
          height = maxSize;
        }

        canvas.width = width;
        canvas.height = height;

        ctx?.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              const resizedFile = new File([blob], file.name, {
                type: file.type,
                lastModified: Date.now(),
              });
              resolve(resizedFile);
            } else {
              reject(new Error("Unable to resize image"));
            }
          },
          file.type,
          0.8 // Specify the desired image quality (0.0 to 1.0)
        );
      };

      img.onerror = () => {
        reject(new Error("Unable to load image"));
      };

      img.src = URL.createObjectURL(file);
    });
  };

  console.log(imageUrl);

  return (
    <Container>
      <span>{ label }</span>
      <label htmlFor="image">
        <div>
          { imageUrl == null ? "Add" : "Edit" }
          { imageUrl == null ? (
            <Add style={ { fontSize: "16px", marginLeft: "7px" } } />
          ) : (
            <Edit style={ { fontSize: "16px", marginLeft: "7px" } } />
          ) }
        </div>
      </label>
      <input type="file" onChange={ handleChange } id="image" accept="image/*" hidden />
      { imageUrl && (
        <img src={ imageUrl } width={ 200 } alt={ productName } aria-hidden={ true } />
      ) }
    </Container>
  );
};


const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
overflow: auto;
gap: 15px;
img {
   display: flex;
   align-items: center;
   filter: drop-shadow(0 2px 4px );

}

div {
   background-color: #000;
   color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 5px 15px;
   font-size: 14px;
   border-radius: 20px;
   cursor: pointer;
   &:hover {
      opacity: 0.8;
   }
}
span {
   text-transform: capitalize;
}

`
export default ImageUploader;
