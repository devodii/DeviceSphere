import { Navigate, Outlet } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

const Dashboard = () => {
 
  return localStorage.getItem("loggedIn") ? (
    <Container>
      <Nav />
      <Outlet />
    </Container>
  ) : (
    <Navigate to={{pathname: '../login', search: 'You must log in first'}} state={{message: "You must log in first"}}/>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-columns: minmax(250px, 0.4fr) 2fr;
  max-width: 1500px;
  place-content: center;
  margin: 0 auto;
  grid-template-areas: "Nav", "Dashboard";
`;

export default Dashboard;
