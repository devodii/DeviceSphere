import styled from "styled-components";
import { Button } from "../../Components/wrapper";
import Header from "../Components/Header";
import DeliveryAddress from "./Address";
import PrimaryData from "./PrimaryData";
import { Link } from "react-router-dom";
import MetaTags from "../../Components/useSEO";

function HandleSubmit(e: any) {
    e.preventDefault()
}
const Form = () => {
   const SEO = MetaTags({
      title: "Devicesphere | Order",
      keywords: "iPhone, Laptops, Gadget, Androids",
      description: "Order now to avail the benefits of devicesphere"
   })

   return (
      <>
         { SEO }
         <Container>
            <Header title={"Purchaser Information"} />
            <form onSubmit={HandleSubmit}>
               <PrimaryData />
               <DeliveryAddress />
               <div className="next">
                  <Link to={"/description"}>
                     <Button role="submit">Next</Button>
                  </Link>
               </div>
            </form>
         </Container>
      </>
   );
};

const Container = styled.div`
   div.next {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 2rem;

      button {
        width: min(100%, 150px);
      }
   }
`;

export default Form;
