import { Link } from "react-router-dom";
import Allproducts from "../Gateway/Sections/Products/Allproducts";
import useProduct from "../Hooks/useProduct";
import styled from "styled-components";

const ViewProducts = () => {
   const { item, loading } = useProduct();
   return (
      <Redirect>
         <h1>Listed Products</h1>
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
                     <p>You currently do not have any product listed</p>
                     <p>When you list a product, they will show up here.</p>
                     <p>
                        Feel this is an error? <span onClick={() => window.location.reload()} className="refresh">refresh</span>
                     </p>
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
   .refresh {
      text-decoration: underline;
   }
`;

export default ViewProducts;
