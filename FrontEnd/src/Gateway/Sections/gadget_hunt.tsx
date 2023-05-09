import styled from "styled-components";
import { Link } from "react-router-dom";
import { GetStarted } from "../../Components/wrapper";
import { BsArrowDownShort } from "react-icons/bs";

const GadgetHunt = () => (
   <Container>
      <div className="gadget__hunt">
         <img src="/assets/find-gadget.png" alt="Find your gadget" />
         <span>Gadget hunt!</span>
      </div>
      <h3>System for researching gadgets</h3>
      <p>
         Easily compare millions of products with our curated selection in just
         one click.
      </p>
      <p>
         Simplify your shopping experience and make informed decisions quickly
         and efficiently with our system.
      </p>

      <GetStarted>
         <Link to={""}>
            <span>Get started</span>
            <BsArrowDownShort className="get__started__icon" />
         </Link>
      </GetStarted>
   </Container>
);
const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: calc(var(--flex-gap) + 5px);
   margin-top: calc(2rem + 35px);

   div.gadget__hunt {
      display: flex;
      align-items: center;
      gap: var(--flex-gap);
      span {
         font-size: 25px;
         line-height: 1.3;
      }
   }
   h3 {
      font-size: 25px;
   }
   p {
      font-size: 27px;
      line-height: 1.45;
      @media (max-width: 768px) {
         font-size: 20px;
      }
   }
`;

export default GadgetHunt;
