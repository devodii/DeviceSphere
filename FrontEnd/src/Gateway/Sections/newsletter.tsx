import { useId, useState } from "react";
import styled from "styled-components";

const Newsletter = () => {
   const id = useId();
   const [email, setEmail] = useState<string>("");

   return (
      <Container>
         <div>
            <h2>Newsletter</h2>
            <strong>
               Subscribe to our newsletter for updates, news, insights, and
               promotions
            </strong>
         </div>
         <form action="/">
            <input
               type="email"
               placeholder="Your Email Adress"
               id={id}
               value={email}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
               }
            />
            <button type="submit" role="submit" aria-describedby="subscribe">
               Subscribe
            </button>
         </form>
      </Container>
   );
};

const Container = styled.section`
   background-color: #f7f7f7;
   width: 100%;
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   padding: 30px 20px;
   margin-top: 10px;
   @media (max-width: 900px) {
      flex-direction: column;
      gap: calc(var(--flex-gap) * 2);
   }

   h2 {
      font-size: 40px;
      margin-bottom: 5px;
   }

   strong {
      font-size: 20px;
      font-weight: 400;

      @media (max-width: 1300px) {
         font-size: 18px;
      }
   }

   form {
      width: auto;
      flex: 1;
      display: flex;
      gap: 5px;
      max-width: 500px;
      width: 100%;

      @media (max-width: 1500px) {
         flex-direction: column;
      }

      input {
         width: 100%;
         outline: none;
         flex-grow: 1;
         height: 40px;
         border-radius: 5px;
         border: 1.5px solid var(--burnt-orange);
         font-size: 16px;
         padding: 5px 15px;
         background-color: #f7f7f7;
         color: #000;
         &:focus {
            border: 1px solid var(--primary-pink);
         }
      }
      button {
         transition: all 250ms;
         background-color: var(--weak-orange);
         border: none;
         border-radius: 5px;
         outline: none;
         width: 100%;
         font-size: 18px;
         height: 45px;
         font-weight: 500;
         padding: 10px 20px;
         text-align: center;
         text-transform: capitalize;
         cursor: pointer;

         &:hover {
            background-color: var(--burnt-orange);
         }
      }
   }
`;

export default Newsletter;
