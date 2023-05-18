import { useRef, useState } from "react";
import styled from "styled-components";
import ImageUploader from "../Components/Image";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
   const nameRef = useRef<HTMLInputElement>(null);
   const [productState, setProductState] = useState({
      Name: "",
      Category: "",
      NormalPrice: "",
      DsPrice: "",
      Description: "",
   });


   const [imageUrl, setImageUrl] = useState<string | null>(null);

   const handleImageUrl = (data: string | null) => {
      setImageUrl(data)
   }

   const handleChange = (
      e: React.ChangeEvent<
         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
   ) => {
      const { value, name } = e.target;
      setProductState((prev) => ({ ...prev, [name]: value }));
   };


    const db = firebase.firestore();
   const handleSubmit = (e: any) => {
      e.preventDefault()

      db.collection('AvailableProducts').add({
         name: productState.Name,
         imgUrl: imageUrl as string,
         description: productState.Description,
         category: productState.Category,
         id: new Date().getTime(),
         normalPrice: productState.NormalPrice,
         price: productState.DsPrice,
         productId: new Date().getTime()
      }).then(docRef => {
         const docId = docRef.id;
         console.log(docId)
      }).catch(error => console.log(`Error ${error.message}`))
     

   }

  
   return (
      <Container>
         <h1>Add a product to DeviceSphere </h1>

         <form action="" onSubmit={handleSubmit}>
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
                     required
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
                     required
                  >
                     <option value=""></option>
                     <option value="iPhone">iPhones</option>
                     <option value="Androids">Androids</option>
                  </select>
               </label>

               <label htmlFor="nprice">
                  <p> Normal Product Price:</p>
                  <input
                     type="number"
                     id="nprice"
                     name="NormalPrice"
                     required
                     onChange={handleChange}
                  />
               </label>

               <label htmlFor="price">
                  <p>Your Price:</p>
                  <input
                     type="number"
                     id="price"
                     name="DsPrice"
                     required
                     onChange={handleChange}
                     value={productState.DsPrice}
                  />
               </label>
            </div>

            <div className="image-container">
               <h2>Product Image</h2>
               <ImageUploader
                  label={nameRef.current?.value as string}
                  productName={ productState.Name }
                  sendToParent = {handleImageUrl}
               />
            </div>

            <div className="description">
               <h2>Descrbe Your Product</h2>
               <label htmlFor="description">
                  <textarea
                     name="Description"
                     id="description"
                     cols={30}
                     rows={ 10 }
                     required
                     value={productState.Description}
                     onChange={handleChange}
                  ></textarea>
               </label>
            </div>

            <div className="submit">
               {" "}
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
