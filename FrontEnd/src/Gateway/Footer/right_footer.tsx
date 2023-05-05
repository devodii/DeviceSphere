import styled from "styled-components";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const RightFooter = () => (
   <Container aria-describedby="Connect with us on social media">
      <div className="footer__mid__container">
         <div className="flex__social">
            <h5>Be our friend</h5>

            <ul>
               <li>
                  <a href="" aria-describedby="DeviceSphere on Facebook">
                     {" "}
                     <FaFacebookF className="fa_social" />{" "}
                  </a>
               </li>
               <li>
                  <a href="" aria-describedby="DeviceSphere on Instagram">
                     {" "}
                     <BsInstagram className="fa_social" />{" "}
                  </a>
               </li>
               <li>
                  <a href="" aria-describedby="DeviceSphere on Twitter">
                     {" "}
                     <FaTwitter className="fa_social" />{" "}
                  </a>
               </li>
            </ul>
         </div>

         <div className="terms__container">
            <div>
               {" "}
               <Link to="privacy">
                  <span>Privacy policy</span>
               </Link>
               <Link to="terms">
                  <span>Terms and condition</span>
               </Link>
                </div>
                <p>{ }</p>
         </div>
      </div>
   </Container>
);

const Container = styled.div`
   display: flex;

   div.footer__mid__container {
      display: flex;
      gap: var(--flex-gap * 2);
      justify-content: center;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      width: 100%;

      @media (max-width: 900px) {
         flex-direction: column;
         gap: 10px;
         align-items: center;
         justify-content: center;
      }

      .flex__social {
         display: flex;
         align-items: center;
         @media (max-width: 900px) {
            justify-content: space-around;
         }

         h5 {
            font-size: 25px;
            text-transform: uppercase;
            
            @media (max-width: 900px) {
                font-size: 20px;
            }
         }

         width: 100%;
         ul {
            display: flex;
            align-items: center;
            gap: 4px;
            margin-left: 15px;

            li {
               list-style-type: none;
               display: flex;
               width: auto;
               justify-content: center;
               align-items: center;
               width: 30px;
               padding-top: 4px;
               &:hover {
                  background-color: var(--burnt-orange);
                  border-radius: 50%;
                  
                  color: var(--dark-blue);
               }

               a {
                  color: inherit;
                  text-decoration: none;
                  margin-top: 2px;

                  .fa_social {
                     font-size: 18px;
                  }
               }
            }
         }
      }

      div.terms__container {
         display: flex;
         width: 100%;
         gap: 5px;
         align-items: center;
         @media (max-width: 900px) {
            align-items: center;
            justify-content: space-around;
         }
         a {
            color: inherit;
            text-decoration: none;

            span {
               font-size: 14px;
            }
         }
         & > div {
            display: flex;
            gap: 10px;
         }
      }

   }
`;

export default RightFooter;
