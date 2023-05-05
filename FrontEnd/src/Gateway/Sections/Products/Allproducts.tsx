import styled from "styled-components";
import { Product } from "../../..";
import EachProduct from "./Eachproduct";

interface Props {
   item: Product[];
}

const Allproducts = ({ item }: Props) => {
   const isArray = Array.isArray(item);
   return (
      <Container>
         {isArray && item.map((product) => <EachProduct product={product} />)}
      </Container>
   );
};

const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-gap: calc(var(--flex-gap) * 4);
   grid-gap: 20px;
   width: min(100%, 1200px);
   grid-auto-rows: 400px;
   padding: 10px 20px;
   margin: 0 auto;
`;
export default Allproducts;
