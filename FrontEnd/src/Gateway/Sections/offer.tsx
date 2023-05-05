import { useEffect, useState } from "react";
import styled from "styled-components";
import Allproducts from "./Products/Allproducts";
import { Product } from "../..";

const Offer = () => {
   const [item, setItem] = useState<Product[] | null>(null);
   useEffect(() => {
      const Fetch = async (): Promise<Product[]> => {
         const response = await fetch("http://localhost:3001/items", {
            headers: {
               "Content-Type": "application/json",
            },
         });
         const data = await response.json();
         setItem(data);
         return data;
      };
      Fetch();
   }, []);

   return (
      <Container>
         <h2>Top Weekly Offers 🔥</h2>
         {item ? (
            <Allproducts item={[...item]} />
         ) : (
            <div>Products currently unavailable, please check again later.</div>
         )}
      </Container>
   );
};

const Container = styled.section`
   display: flex;
   flex-direction: column;
   gap: calc(var(--flex-gap) * 3);
   align-items: center;
   margin-top: 20px;
   justify-content: center;

   h2 {
      font-size: 35px;
      word-spacing: 2px;
      text-align: center;
      @media (max-width: 768px) {
         font-size: 30px;
      }
   }
   div {
      text-align: center;
      font-size: 23px;
      @media (max-width: 768px) {
         font-size: 20px;
      }
   }
`;
export default Offer;
