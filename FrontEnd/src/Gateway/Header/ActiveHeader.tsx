import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../Components/wrapper";


const HeaderOverlay = () => {
   return (
      <Container>
         <img src="/assets/ds.png" alt="DeviceSphere" />

         <Order >
            <Link to={"order"}>
               <em>Order now, it's on us</em>
            </Link>
         </Order>
      </Container>
   );
};
const Order = styled(Button)`
   @media (max-width: 600px) {
      font-size: 15px;
   }
`
const Container = styled.header`
   position: fixed;
   left: 0;
   right: 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: #fff;
   z-index: 10;
   top: 0;
   padding: 10px 20px;
   transition: all 2s;
   animation: Slidein 1s;

   @keyframes Slidein {
      from {
         transform: translateY(-100%);
      }
      to {
         transform: translateY(0%);
      }
   }

   img {
      height: 100px;
   }
`;

export default HeaderOverlay;
