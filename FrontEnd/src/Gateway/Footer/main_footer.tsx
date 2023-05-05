import styled from "styled-components";
import LeftFooter from "./left_footer";
import RightFooter from "./right_footer";

const MainFooter = () => (
   <Container aria-describedby="MainFooter section">
        <LeftFooter />
        
      <RightFooter />
   </Container>
);

const Container = styled.footer`
   display: grid;
   grid-template-columns: minmax(300px, 0.7fr) minmax(400px, 1fr);
   background-color: var(--dark-blue);
   padding: 20px;
   color: var(--burnt-orange);
   place-content: center;

   @media (max-width: 900px) {
      display: flex;
      flex-direction: column-reverse;
      gap: calc(var(--flex-gap) * 2);
   }
`;
export default MainFooter;
