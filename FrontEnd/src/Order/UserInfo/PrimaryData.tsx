import React, { useState, useId } from "react";
import styled from "styled-components";

const PrimaryData = () => {
   const [person, setPerson] = useState<{name: string | null, PhoneNo: string | null}>({
      name: "",
      PhoneNo: null,
   });

   const NameId = useId();
   const NumberId = useId();
   const EmailId = useId();

   const active = React.useRef<HTMLInputElement>(null);

   React.useEffect(() => {
      if (active.current) {
         active.current.focus();
      }
   }, []);
   return (
      <Container>
         <div className="wrapper" aria-labelledby="Your Name">
            <label htmlFor={NameId}>Your Name</label>
            <div className="input-fields" id={NameId}>
               <div className="input-section column">
                  <input type="text" ref={active} />
                  <span>First Name</span>
               </div>

               <div className="input-section column">
                  <input type="text" />
                  <span>Last Name</span>
               </div>
            </div>
         </div>

         <div className="wrapper" aria-labelledby="Phone Number">
            <label htmlFor={NumberId}>Phone Number</label>
            <div className="input-fields" id={NumberId}>
               <div
                  className="input-section column"
                  style={{ width: "min(100%, 100px)" }}
               >
                  <input type="text" />
                  <span>Area Code</span>
               </div>

               <span style={{ fontSize: "20px" }}> &#183; </span>

               <div
                  className="input-section column"
                  style={{ width: "min(100%, 300px)" }}
               >
                  <input type="tel" />
                  <span>Phone Number</span>
               </div>
            </div>
         </div>

         <div className="wrapper" aria-labelledby="Email Address">
            <label htmlFor={EmailId}>Email Address</label>
            <div className="input-fields" id={EmailId}>
               <div
                  className="input-section column"
                  style={{ width: "min(100%, 505px)" }}
               >
                  <input type="text" />
                  <span>example@gmail.com</span>
               </div>
            </div>
         </div>
      </Container>
   );
};

const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: calc(var(--flex-gap) * 3.5);
   margin-top: 3rem;

   input {
      background-color: #fff;
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
      font-weight: 600;
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
export default PrimaryData;
