import { useState, useEffect } from "react";
import styled from "styled-components";


const Helped = () => {
   const [deliveredProducts, setDeliveredProducts] = useState<number>(0);
   const [empowered, setEmpowered] = useState<number>(0);
   const [discounts, setDiscounts] = useState<number>(0);

   useEffect(() => {
      const intervalId: number = setTimeout((): void => {
         setDeliveredProducts((prevCount: number) => {
            if (prevCount === 12000) {
               clearTimeout(intervalId);
               return prevCount;
            }
            return prevCount + 200;
         });
      }, 25);

      const empowered_count: number = setTimeout(() => {
         setEmpowered((prev: number) => {
            if (prev === 1520) {
               clearTimeout(empowered_count);
               return prev;
            }
            return prev + 20;
         });
      }, 25);

      const discountedSale: number = setTimeout((): void => {
         setDiscounts((prevCount: number) => {
            if (prevCount == 100000) {
               clearTimeout(discountedSale);
               return prevCount;
            }
            return prevCount + 1000;
         });
      }, 25);

      return () => {
         clearTimeout(intervalId);
         clearTimeout(empowered_count);
         clearTimeout(discountedSale);
      };
   });

   interface Values {
      amount: string | number;
      title: string;
   }

   const values: Values[] = [
      { amount: `${deliveredProducts}`, title: "Product Launched!" },
      { amount: `${empowered}`, title: "Empowered by DeviceSphere" },
      { amount: `${discounts}`, title: "Yearly savings on assisted discounts" },
   ];

   return (
      <Container>
         <h2>Raising the Bar: Elevating Lives with Our Product</h2>
         <div className="product__count">
            {values.map(({ amount, title }, index) => (
               <div className="product__description" key={index}>
                  <strong data-max-number={amount}>{amount}</strong>
                  <span>{title}</span>
               </div>
            ))}
         </div>
      </Container>
   );
};

const Container = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   background-image: url("/src/assets/helped.png");
   margin-top: 30px;
   padding: 50px 10px;
   gap: calc(var(--flex-gap) * 3 + 5px);

   h2 {
      font-size: 30px;
      word-spacing: 2px;
   }

   div.product__count {
      display: flex;
      justify-content: space-evenly;
      width: 100%;

      @media (max-width: 768px) {
         flex-direction: column;
      }

      div.product__description {
         display: flex;
         flex-direction: column;
         align-items: center;
         width: 100%;
         @media (max-width: 768px) {
            gap: calc(var(--flex-gap) * 3)
         }

         strong {
            font-size: 80px;
            font-weight: 900;
            color: var(--burnt-orange);
            &:after {
               content: "+";
               margin-left: -2px;
            }

            @media (max-width: 900px) {
               font-size: 50px;
            }
         }
         span {
            font-size: 25px;
            text-align: center;

            @media (max-width: 768px) {
               font-size: 20px;
               margin-top: -30px;
            }
         }
      }
   }
`;

export default Helped;
