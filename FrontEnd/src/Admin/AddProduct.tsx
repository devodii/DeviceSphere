import { useRef, useState } from "react";
import styled from "styled-components";
import ImageUploader from "../Components/Image";

const AddProduct = () => {
   const nameRef = useRef<HTMLInputElement>(null);
   const [productState, setProductState] = useState({
      Name: "",
      Category: "",
      NormalPrice: "",
      DsPrice: "",
      Description: "",
   });
   const handleChange = (
      e: React.ChangeEvent<
         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
   ) => {
      const { value, name } = e.target;
      setProductState((prev) => ({ ...prev, [name]: value }));
   };

   const [preview, setPreview] = useState<boolean>(false);
   return (
      <Container>
         <h1>Add a product to DeviceSphere </h1>

         <form action="">
            <div className="primary">
               <h2>Primary Information</h2>

               <label htmlFor="name">
                  <p> Product Name:</p>
                  <input
                     type="text"
                     id="name"
                     name="Name"
                     value={productState.Name}
                     ref={nameRef}
                     onChange={handleChange}
                  />
               </label>

               <label htmlFor="category">
                  <p>Product Category:</p>
                  <select
                     name="Category"
                     id="category"
                     value={productState.Category}
                     onChange={handleChange}
                  >
                     <option value=""></option>
                     <option value="iPhone">iPhones</option>
                     <option value="Androids">Androids</option>
                  </select>
               </label>

               <label htmlFor="nprice">
                  <p> Normal Product Price:</p>
                  <input
                     type="text"
                     id="nprice"
                     name="NormalPrice"
                     onChange={handleChange}
                  />
               </label>

               <label htmlFor="price">
                  <p>Your Price:</p>
                  <input
                     type="text"
                     id="price"
                     name="DsPrice"
                     onChange={handleChange}
                     value={productState.DsPrice}
                  />
               </label>
            </div>

            <div className="image-container">
               <h2>Product Image</h2>
               <ImageUploader label={nameRef.current?.value as string} productName={productState.Name} />
            </div>

            <div className="description">
               <h2>Descrbe Your Product</h2>
               <label htmlFor="description">
                  <textarea
                     name="Description"
                     id="description"
                     cols={30}
                     rows={10}
                     value={productState.Description}
                     onChange={handleChange}
                  ></textarea>
               </label>
            </div>
            <div>
               <label htmlFor="sendAsMail" className="subscribers">
                  <input type="checkbox" id="sendAsMail" />
                  <span>Send this to all Newsletter subscribers </span>
               </label>{" "}
            </div>

            <div className="submit">
               {" "}
               <Button
                  onClick={(e) => {
                     setPreview(true);
                     e.preventDefault();
                  }}
               >
                  Preview
               </Button>
               <Button role="submit">Submit!</Button>
            </div>
         </form>
      </Container>
   );
};

const Container = styled.div`
   margin-top: 10px;

   form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: calc(var(--flex-gap) * 3.5);
      width: 100%;
   }

   select {
      writing-mode: vertical-rl;
      margin-left: 10px;
      border-radius: 5px;
      background-color: black;
      padding: 5px 10px;
      border: none;
      cursor: pointer;
      outline: none;
   }

   label {
      font-size: 18px;
      width: 100%;
      display: flex;
      p {
         min-width: 25%;
      }
      input {
         width: min(80%, 400px);
         padding: 5px 10px;
         outline: none;
         border-radius: 5px;
         outline: none;
         border: 0.2px solid #000;
         padding: 5px 10px;
         &:focus {
            border: 1.4px solid black;
         }
      }
   }
   h2 {
      font-size: 25px;
      margin-bottom: 10px;
   }

   div.primary {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-top: 2rem;
      width: 100%;
      gap: 15px;
   }

   div.description {
      width: 100%;
      textarea {
         background-color: #fff;
         width: min(100%, 600px);
         padding: 5px 10px;
         outline: none;
         border-radius: 5px;
         outline: none;
         border: 0.2px solid #000;
         padding: 5px 10px;
         color: #000;
         &:focus {
            border: 1.4px solid black;
         }
      }
   }

   label.subscribers {
      display: flex;
      margin-top: -20px;
      align-items: center;
      span {
         font-size: 16px;
         user-select: none;
      }
      input {
         width: 25px;
         background-color: #fff;
         outline: none;
         border: 2px solid red;
      }
   }

   div.submit {
      width: 100%;
      display: flex;
      align-items: center;
      gap: calc(var(--flex-gap) * 1.2);
      justify-content: flex-end;
      max-width: 600px;
   }
`;

const Button = styled.button`
   padding: 7px 20px;
   color: #fff;
   background-color: #000;
   border: none;
   outline: none;
   border-radius: 5px;
   cursor: pointer;

   &:hover {
      opacity: 0.8;
      transform: scale(1.2);
   }
`;

export default AddProduct;
