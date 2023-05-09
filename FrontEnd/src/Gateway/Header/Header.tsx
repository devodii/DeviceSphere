import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => (
   <>
      <Container>
         <img src="/assets/ds.png" alt="DeviceSphere" loading="eager" />

         <button>
            <em>
               <Link to={"order"}>Order Now</Link>
            </em>
         </button>
      </Container>
   </>
);

const Container = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;

   img {
      height: 100px;
   }

   button {
      background: transparent;
      border: none;
      outline: none;
      em {
         font-style: normal;

         a {
            color: #000;
            text-decoration: none;
            text-transform: uppercase;
            position: relative;
            font-size: 18px;
            font-weight: 500;

            &:after {
               content: "";
               position: absolute;
               background-color: var(--primary-pink);
               left: 0px;
               right: 0px;
               bottom: -8px;
               opacity: 0;
               transform: scaleX(0);
               transition: all 300ms;
               transform-origin: center;
               height: 2px;
               border-radius: 8px;
            }
            &:hover {
               &::after {
                  transform: scaleX(1);
                  opacity: 1;
               }
            }
         }
      }
      &:hover {
      }
   }
`;

export default Header;
