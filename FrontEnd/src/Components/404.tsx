import { Link } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";
import { Button } from "./wrapper";
import MainFooter from "../Gateway/Footer/main_footer";

const HomeButton: AnyStyledComponent = styled(Button)`
   width: min(100%, 200px);
   text-transform: none;
   margin-top: 5px;
`;

const NotFound = () => {
   return (
      <>
         <Container>
            <p>The page you requested for was not found</p>
            <Link to={"/"}>
               <HomeButton>Go Home</HomeButton>
            </Link>
         </Container>
      </>
   );
};

const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 90vh;
   justify-content: center;
   overflow: hidden;

   p {
      font-size: 20px;
      width: 100%;
      text-align: center;
      word-wrap: break-word;
   }

   a {
      width: 50%;
      display: flex;
      align-content: center;
      justify-content: center;
      text-decoration: none;
      margin-top: 10px;
   }
`;

export default NotFound;
