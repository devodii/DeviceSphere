import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { Button } from "../Components/wrapper";
import { Benefits } from "../..";

const AdvantageDs: Benefits[] = [
   { title: "High-Quality Products" },
   { title: "Unbeatable deals that won't break the bank!" },
   { title: "An abundance of options to choose from" },
   { title: "Experience transactions you can trust" },
   { title: "Swift and dependable delivery" },
];

const InitialDescriptor = () => (
   <Container>
      <h1>One destination to find the most up-to-date gadgets</h1>
      <div />
      <div className="secondary__description">
         <p>Ready to power up for the season? </p>
         <p>Join our plan and get featured!</p>
      </div>
      <div>
         <ul>
            {AdvantageDs.map(({ title }: Benefits, index: number) => (
               <li key={index}>
                  <BsCheckLg className="verified__benefits" />
                  <span>{title}</span>
               </li>
            ))}
         </ul>
      </div>

      <Button>
         <Link to={"/"}>
            <em>Order now, it's on us!</em>
         </Link>
      </Button>
   </Container>
);
const Container = styled.section`
   display: flex;
   flex-direction: column;
   gap: calc(var(--flex-gap) + 10px);
   margin-top: 10px;

   h1 {
      width: min(100%, 500px);
      line-height: 1.4;
      margin-top: 5px;
      @media (max-width: 768px) {
         font-size: 27px;
      }
   }
   div.secondary__description {
      p {
         font-size: 27px;
         line-height: 1.35;
         @media (max-width: 768px) {
            font-size: 23px;
         }
      }
   }

   ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: calc(var(--flex-gap) + 5px);

      li {
         display: flex;
         list-style-type: none;
         gap: var(--flex-gap);
      }

      span {
         font-size: 20px;
      }
   }
   .verified__benefits {
      color: var(--weak-green);
      font-size: 30px;
      @media (max-width: 768px) {
         font-size: 25px;
      }
   }
`;

export default InitialDescriptor;
