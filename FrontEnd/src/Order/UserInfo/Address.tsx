import { useId } from "react";
import styled from "styled-components";

const DeliveryAddress = () => {
   const AddressId = useId();
   return (
      <>
         <Container>
            <label htmlFor={AddressId}>Delivery Addresses: </label>
            <div className="delivery-container">Loading...</div>
         </Container>
      </>
   );
};

const Container = styled.div`
   display: flex;
   gap: calc(var(--flex-gap) * 3.5);
   width: 100%;
   margin-top: 20px;

   input {
      background-color: #fff;
      max-width: 100%;
   }

   label {
      width: max-content;
      min-width: max-content;
   }
   div.delivery-container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: var(--flex-gap);
      width: 100%;
   }

   .state {
      display: flex;
      gap: var(--flex-gap);
      width: min (100%, 505px);
   }
   .full {
      width: min(100%, 505px);
   }

   .input-section {
      input {
         &:focus {
            border: 1.4px solid var(--dark-blue);
         }
      }
   }

   form {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 10px 5px;
      gap: calc(var(--flex-gap) * 4);
   }

   form label {
      font-weight: 500;
      font-size: 18px;
      min-width: 150px;
   }

   .wrapper {
      display: flex;
      gap: calc(var(--flex-gap) * 4);
      flex-wrap: wrap;
   }

   div.input-fields {
      display: flex;
      flex: 1;
      gap: var(--flex-gap);
      flex-wrap: wrap;
   }

   div.input-section {
      display: flex;
      flex-direction: column;
      gap: calc(var(--flex-gap) / 3);
      width: min(100%, 250px);
   }

   div.input-section input {
      min-height: 30px;
      border: 1.4px solid var(--weak-orange);
      border-radius: 2px;
      outline: none;
      padding: 0 10px;

      caret-color: var(--dark-blue);
   }

   div.input-first input:focus {
      border: 1.4px solid var(--dark-blue);
   }

   span {
      font-size: 14px;
      margin-top: 5px;
   }
`;

export default DeliveryAddress;
