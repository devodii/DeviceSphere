import styled from "styled-components";

const LeftFooter = () => (
   <Container aria-describedby="DeviceSphere">
      <div>
         <p>&copy; 2023 Devicesphere - All rights reserved.</p>
         <p> </p>
      </div>
   </Container>
);
const Container = styled.div`
   div {
      display: flex;
      justify-content: space-around;
      p {
         @media (max-width: 768px) {
            font-size: 15.5px;
         }
      }
   }
`;

export default LeftFooter;
