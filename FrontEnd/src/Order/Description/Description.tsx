import { useId, useState, useTransition } from "react";
import styled from "styled-components";
import Modal from "./Components/Modal";

const Description = () => {
   const ProductId = useId();
   const [description, setDescription] = useState<string>("")
   const [isPending, startTransition] = useTransition();

   const [openModal, setOpenModal] = useState<boolean>(false);

   const HandleSubmit = (e: any) => {
      startTransition(() => {
         e.preventDefault();
         setOpenModal(true);
      });
   };

   return (
      <>
         <Container>
            <figure>
               <img src="/assets/ds.png" alt="DeviceSphere" />
               <figcaption>
                  <h1>
                     Please provide a description of your ideal device in the
                     input field provided below.
                  </h1>
               </figcaption>
            </figure>
            <form action="" onSubmit={HandleSubmit}>
               <textarea
                  name={"Your Ideal Product"}
                  id={ProductId}
                  cols={10}
                  rows={12}
                  placeholder="I desire to have the iPhone 14 Pro Max."
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
               ></textarea>

               <div className="submit-container">
                  <button type="submit" role="submit">
                     Place order
                  </button>
               </div>
            </form>
         </Container>

         {openModal && <Modal closeModal={setOpenModal} />}
      </>
   );
};

const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: calc(var(--flex-gap) * 4);
   align-items: center;

   form {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      justify-content: center;
   }
   figure {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: calc(var(--flex-gap) * 1.2);

      img {
         height: 120px;
      }
   }
   h1 {
      font-size: 25px;
   }

   textarea {
      width: min(100%, 505px);
      border: 1.4px solid var(--weak-orange);
      font-size: 18px;
      padding: 20px 30px;
      background-color: #fff;
      color: #000;
      outline: none;
      &:focus {
         border: 1.4px solid var(--dark-blue);
      }
   }

   div.submit-container {
      width: 100%;
      display: flex;
      align-items: flex-end;
      margin-top: 10px;

      button {
         margin-left: auto;
         width: min(100%, 160px);
         color: #fff;
         background-color: var(--primary-pink);
         font-size: 16px;
         border: none;
         text-transform: uppercase;
         outline: none;
         border-radius: 8px;
         padding: 10px 20px;
         transition: all 250ms;
         cursor: pointer;
         &:hover {
            box-shadow: 0 2px 32px 4px var(--depreciated-pink);
         }
      }
   }

   .disabled {
      opacity: 0.6;
      background-color: var(--primary-pink);

      &:hover {
         box-shadow: none;
      }
   }
`;
export default Description;
