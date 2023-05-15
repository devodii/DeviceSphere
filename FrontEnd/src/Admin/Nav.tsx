import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Add } from "@material-ui/icons";

const Nav = () => {
   const Active = { textDecoration: "underline" };
   return (
      <Container>
         <ul>
            <li>
               <NavLink
                  to={"add"}
                  style={({ isActive }) => (isActive ? Active : {})}
               >
                  Add products
               </NavLink>
               <Add />
            </li>

            <li>
               <NavLink
                  to="view"
                  style={({ isActive }) => (isActive ? Active : {})}
               >
                  View Products
               </NavLink>
            </li>
         </ul>
      </Container>
   );
};

const Container = styled.nav`
   grid-area: "Nav";
   display: flex;
   flex-direction: column;
   gap: 20px;
   max-width: 220px;
   margin-top: 20px;
   align-items: center;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
   justify-content: center;
   position: sticky;
   min-height: 180px;
   max-height: 180px;
   top: 22px;
   a {
      color: #000;
      text-decoration: none;
   }
   ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
   }
   li {
    list-style: none;
    display: flex;
    gap: 10px;
    align-items: center;
   }
`;

export default Nav;
