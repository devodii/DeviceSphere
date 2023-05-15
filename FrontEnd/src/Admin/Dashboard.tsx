import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
const Dashboard = () => {
   return (
      <Container>
         <Nav />
         <Outlet />
      </Container>
   );
};

const Container = styled.main`
   display: grid;
   grid-template-columns: minmax(250px, .4fr) 2fr;
   max-width: 1500px;
   place-content: center;
   margin: 0 auto;
   grid-template-areas: "Nav", 'Dashboard';
`

export default Dashboard;
