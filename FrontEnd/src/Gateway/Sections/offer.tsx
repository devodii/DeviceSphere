import styled from "styled-components";
import Allproducts from "./Products/Allproducts";
import useProduct from "../../Hooks/useProduct";

const Offer = () => {
   const { item, loading } = useProduct();
   const firstThree = item?.slice(0, 3)
 console.log(item)  
   return (
      <Container>
         <h2>Top Daily Offers 🔥</h2>
         {loading && <div className="loading">Loading...</div>}
         {firstThree && <Allproducts item={[...firstThree]} />}
         {item?.length < 1 && (
            <div className="error">Products currently unavailable, please check again later.</div>
         ) }
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
   div.loading, div.error {
      text-align: center;
      font-size: 23px;
      @media (max-width: 768px) {
         font-size: 20px;
      }
      margin-top: -1rem;
   }
   div.error {
      margin-top: -2rem;
   }
`;
export { Offer as default}
