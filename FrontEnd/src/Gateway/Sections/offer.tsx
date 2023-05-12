import styled from "styled-components";
import Allproducts from "./Products/Allproducts";
import { Product } from "../..";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

const Offer = () => {
   const [item, setItem] = useState<Product[] | null | any>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<any>(null);
   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         (async () => {
            try {
               const querySnapshot = await getDocs(
                  collection(db, "AvailableProducts")
               );
               const documents = querySnapshot.docs.map((doc) => doc.data());
               setItem(documents);
               console.log(documents);
            } catch (error) {
               setError(error);
               console.error("Error retrieving data:", error);
            } finally {
               setLoading(false);
            }
         })();
      }, 500);
   }, []);

   return (
      <Container>
         <h2>Top Weekly Offers 🔥</h2>
         {loading && <div>Loading...</div>}
         {item && <Allproducts item={[...item]} />}
         {error && (
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
   margin-top: 5rem;
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
