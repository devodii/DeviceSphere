import styled from "styled-components";

export const Button = styled.button`
   width: min(100%, 250px);
   text-transform: uppercase;
   color: #fff;
   background-color: var(--primary-pink);
   font-size: 16px;
   border: none;
   outline: none;
   border-radius: 8px;
   padding: 10px 20px;
   transition: all 250ms;
   cursor: pointer;
   &:hover {
      box-shadow: 0 2px 32px 0 rgba(0,0,0, 0.4);
   }

   a {
      color: #fff;
      text-decoration: none;

      em {
         font-style: normal;
      }
   }
`;

export const GetStarted = styled.div`
   max-width: 250px;
   display: flex;
   align-items: center;
   a {
      color: var(--burnt-orange);
      font-size: 20px;
      display: flex;
      align-items: center;
      text-rendering: optimizeSpeed;

      span {
         font-size: 20px;
      }
      .get__started__icon {
         transform: rotate(270deg);
         font-size: 30px;
         transition: all 250ms;
         margin-left: -2px;
         margin-top: 5px;
      }
      &:hover {
         .get__started__icon {
            margin-left: 10px;
         }
      }
   }
`;
