import styled from "styled-components";
import { useEffect, useRef } from "react";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useMediaQuery } from "@material-ui/core";
import { MathsFunctions } from "../utils";
import { Button } from "../Components/wrapper";
import { Link, useSearchParams } from "react-router-dom";
interface Props {
   description?: any;
   onClose: () => void;
   state: boolean;
}
const ProductDescription: React.FC<Props> = ({
   description,
   onClose,
}) => {
   const ModalRef = useRef<HTMLDivElement>(null);
   const Match = useMediaQuery("(min-width: 600px)");
   const [, setSearchParam] = useSearchParams();


   const descriptionText =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint tempore, laborum pariatur dolorem aliquam natus dolores magni vero earum neque saepe sunt laboriosam animi placeat, a aspernatur, nihil quam voluptate necessitatibus enim odit nulla fuga! Maiores, modi cupiditate. Cumque, repudiandae.";

   useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
         if (ModalRef.current && !ModalRef.current.contains(e.target as Node)) {
            onClose();
            setSearchParam({})
            
         }
      };

      const handleEscapeKey = (e: KeyboardEvent) => {
         if (e.key === "Escape" || e.key === "Backspace") {
            onClose();
         }
      };
     
     

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
         document.removeEventListener("keydown", handleEscapeKey);
      };
   }, []);

   return (
      <Container>
         <section key={description.productId.seconds} ref={ModalRef}>
            <div className="starter">
               <h1>{description.name}</h1>
               {/* <p>id: {description.productId.seconds}</p> */}
               <figure>
                  <img src={description?.ImgUrl} alt="" height={200} />
                  <figcaption>Test caption</figcaption>
               </figure>

               <article>{ descriptionText }</article>

               <div className="price-block">
                  <em>Price: </em>
                  <s>{ MathsFunctions.convertCurrency(description.normalPrice) }</s>
                  <strong>{ MathsFunctions.convertCurrency(description.price) }</strong>
               </div>
            </div>

            <aside>
               <em>Subtotal</em>
               <div className="price-container">
                  <strong>
                     {MathsFunctions.convertCurrency(description.price)}
                  </strong>
               </div>
               <Button className="order"><Link to='?skal'>Get Now</Link></Button>
            </aside>
         </section>

         {Match && (
            <div className="close">
               <button onClick={() => onClose()}>
                  <IoMdClose />
               </button>
            </div>
         )}
      </Container>
   );
};

const Container = styled.div`
   position: fixed;
   inset: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   backdrop-filter: blur(10px);
   z-index: 100;
   overflow: scroll;

   section {
      background-color: #fff;
      border: 2px solid red;
      width: 80%;
      max-width: 1300px;
      overflow-y: scroll;
      display: flex;
      height: 90vh;
      max-height: 700px;
      position: relative;
      animation: Slide 0.5s alternate;
      padding: 15px 30px;
      @media (max-width: 600px) {
         padding: 5px 10px;
      }

      @keyframes Slide {
         from {
            transform: translateY(-100%);
         }
         to {
            transform: translateY(0%);
         }
      }

      h1 {
         font-size: 35px;
         margin-top: 20px;
         @media (max-width: 600px) {
            font-size: 30px;
         }
      }

      figure {
         display: flex;
         align-items: flex-start;
         margin-top: 20px;
         padding-bottom: 20px;
         max-height: 300px;
         img {
            height: 100%;
            transition: all 300ms;
            user-select: none;
            object-fit: contain;
         }

         figcaption {
            font-weight: 300;
            font-size: 20px;
         }
      }

      article {
         margin-top: 10px;
         max-width: 640px;
      }

      div.price-block {
         margin-top: 20px;
         display: flex;
         gap: 10px;
         align-content: center;

         strong {
            color: rgb(187, 85, 44);
         }
      }

      aside {
         display: flex;
         padding-top: 2rem;
         height: auto;
         position: sticky;
         top: 0;
         width: 30%;
         flex-direction: column;
         align-items: center;

         em {
            font-size: 18px;
         }
         strong {
            font-size: 22px;
            letter-spacing: 0.4px;
            color: rgb(187, 85, 44);
         }
         .order {
            margin-top: 15px;
            width: min(100%, 200px);
         }
      }
   }

   .overflow-hidden {
      overflow: hidden;
   }

   div.starter {
      align-items: start;
      height: 90vh;
      width: 70%;
      margin-left: -2px;
      transition: all 0.05s;
      animation: Slide 0.5s alternate;

      @keyframes Slide {
         from {
            transform: translateY(-100%);
         }
         to {
            transform: translateY(0%);
         }
      }
   }

   div.close {
      position: fixed;
      top: 22px;
      left: 90%;
      button {
         padding: 5px 8px 3px;
         outline: none;
         border: none;
         font-size: 23px;
         background-color: #000000c1;
         border-radius: 0 5px 5px 0;
         cursor: pointer;
      }
   }
`;

export default ProductDescription;
