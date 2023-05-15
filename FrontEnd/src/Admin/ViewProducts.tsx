import { Link } from "react-router-dom";
import Allproducts from "../Gateway/Sections/Products/Allproducts";
import useProduct from "../Hooks/useProduct";
import styled from "styled-components";

const ViewProducts = () => {
   const { item, loading } = useProduct();
   console.log(window.location.href);
   return (
      <Redirect>
         {!item ? <h1>Listed Products</h1> : <h1>No Listed Products</h1>}
         {loading ? (
            <div>Loading</div>
         ) : (
            <>
               {item && (
                  <>
                     <Allproducts item={[...item]} />
                  </>
               )}
               {item !== null && item.length < 1 && (
                  <>
                     <p>When you list a product, they will show up here.</p>
                     <Link to={"../add"}>Add Product</Link>
                  </>
               )}
            </>
         )}
      </Redirect>
   );
};

const Redirect = styled.div`
   a {
      color: #000;
      margin-top: 10px;
   }
`;

export default ViewProducts;
