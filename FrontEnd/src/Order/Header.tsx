import styled from "styled-components";

interface Props {
   title: string
}
const Header = ({ title }: Props) => (
   <Container aria-label="Header for begining the ordering process">
      <img
         src="/assets/ds.png"
         alt="DevicSphere"
         title="DeviceSphere"
         loading="eager"
         height={150}
      />
      <h1>Begin the Ordering Process</h1>
      <div>
         <span>{title}</span>
      </div>
   </Container>
);

const Container = styled.header`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: calc(var(--flex-gap) * 2);
   flex-direction: column;

   h1 {
      font-size: 30px;
   }

   div {
      background-color: var(--dark-blue);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--burnt-orange);
      padding-block: 10px;

      span {
         font-size: 20px;
      }
   }
`;

export default Header;
