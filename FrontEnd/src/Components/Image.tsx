import React, { useState } from "react";
import { Add, Edit } from "@material-ui/icons";
import styled from "styled-components";
interface Props {
   label: string,
   productName?: string
}

const ImageUploader: React.FC<Props> = ({ label, productName }) => {
   const [imageUrl, setImageUrl] = useState<string | null>(null);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
         const reader = new FileReader();

         reader.onload = () => {
            const result = reader.result as string;
            setImageUrl(result);
         };

         reader.readAsDataURL(file);
      } else {
         setImageUrl(null);
      }
   };

   return (
      <Container>
         <span>{label}</span>
         <label htmlFor="image">
            <div>
               {imageUrl == null ? "Add" : "Edit"}
               {imageUrl == null ? (
                  <Add style={{ fontSize: "16px", marginLeft: "7px" }} />
               ) : (
                  <Edit style={{ fontSize: "16px", marginLeft: "7px" }} />
               )}
            </div>
         </label>
         <input
            type="file"
            onChange={handleChange}
            id="image"
            required
            hidden
            accept="image/*"
         />
         {imageUrl && (
            <img
               src={imageUrl}
               width={200}
               alt={productName}
               aria-hidden={ true }
              
            />
         )}
      </Container>
   );
};


const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
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
