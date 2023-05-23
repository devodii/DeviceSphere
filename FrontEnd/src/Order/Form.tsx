import styled from "styled-components";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import MetaTags from "../Components/useSEO";
import { Button } from "../Components/wrapper";
import Header from "./Header";
import { FormValues } from "..";
import { useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const SEO = MetaTags({
   title: "Devicesphere | Order",
   keywords: "iPhone, Laptops, Gadget, Androids",
   description: "Order now to avail the benefits of devicesphere",
});

const PrimaryData = () => {
   const form = useForm<FormValues>();
   const { register, control, handleSubmit, formState } = form;
   const { errors } = formState;
   const [, setSearchParam] = useSearchParams();

   const [SubmittedData, setSubmittedData] = useState<FormValues | null>(null);

   function Submit(data: FormValues) {
      console.log("Submit", data);
      setSubmittedData(data);
      console.log({ SubmittedData });
   }

   const ButtonRef = useRef<HTMLButtonElement>(null)
   if (!SubmittedData) {
      ButtonRef.current?.disabled == true
   }
   console.log(SubmittedData);
   return (
      <>
         {SEO}
         <form onSubmit={handleSubmit(Submit)} noValidate>
            <Container>
               <Header title={"Purchaser Information"} />
               <div className="wrapper" aria-labelledby="Your Name">
                  <label htmlFor={"Name"}>Your Name</label>
                  <div className="input-fields" id={"Name"}>
                     <div className="input-section column">
                        <input
                           type="text"
                           {...register("FirstName", {
                              required: {
                                 value: true,
                                 message: "firstname is required",
                              },
                           })}
                        />
                        <span>
                           {errors.FirstName ? (
                              <em>{errors.FirstName.message}</em>
                           ) : (
                              "First Name"
                           )}
                        </span>
                     </div>

                     <div className="input-section column">
                        <input
                           type="text"
                           {...register("LastName", {
                              required: "lastname is require",
                           })}
                        />
                        <span>
                           {errors.LastName ? (
                              <em>Last name is required</em>
                           ) : (
                              "Last Name"
                           )}
                        </span>
                     </div>
                  </div>
               </div>

               <div className="wrapper" aria-labelledby="Phone Number">
                  <label htmlFor={"Tel"}>Phone Number</label>
                  <div className="input-fields" id={"Tel"}>
                     <div
                        className="input-section column"
                        style={{ width: "min(100%, 300px)" }}
                     >
                        <input
                           max={11}
                           type="number"
                           {...register("Tel", {
                              required: "Please, provide a phone number",
                              minLength: {
                                 value: 11,
                                 message: "Must be 11 chaer",
                              },
                              maxLength: {
                                 value: 15,
                                 message: "Must not exceed 13",
                              },
                           })}
                        />
                        <span>
                           {errors.Tel ? (
                              <em>{errors.Tel.message}</em>
                           ) : (
                              "Phone Number"
                           )}
                        </span>
                     </div>
                  </div>
               </div>

               <div className="wrapper" aria-labelledby="Email Address">
                  <label htmlFor={"Email"}>Email Address</label>
                  <div className="input-fields" id={"Email"}>
                     <div
                        className="input-section column"
                        style={{ width: "min(100%, 505px)" }}
                     >
                        <input
                           type="text"
                           {...register("email", {
                              required: "email address is required",
                              pattern: {
                                 value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                 message: "Invalid email format",
                              },
                              validate: (fieldValue) => {
                                 return (
                                    fieldValue !== "chacho@gmail.com" ||
                                    "Enter a different email address"
                                 );
                              },
                           })}
                        />
                        <span>
                           {errors.email ? (
                              <em>{errors.email.message}</em>
                           ) : (
                              "example@gmail.com"
                           )}{" "}
                        </span>
                     </div>
                  </div>
               </div>

               <div className="next">
                  {/* <Link to={"/description"} state={{ name: "SubmittedData", data: SubmittedData, }}> */}
                  <Button
                     role="submit"
                     ref={ButtonRef}
                     disabled={false}
                     onClick={() =>
                        setSearchParam({
                           f: SubmittedData?.FirstName as string,
                           l: SubmittedData?.LastName as string,
                           e: SubmittedData?.email as string,
                           t: SubmittedData?.Tel as unknown as string,
                        })
                     }
                  >
                     { (SubmittedData !== null) && <Link to={ "/description" }>Next</Link> }
                     { (SubmittedData == null) && <span>Null</span>}
                  </Button>
                  { SubmittedData !== null && <Button>Next</Button>}
                  {/* </Link> */}
               </div>

               <DevTool control={control} />
            </Container>
         </form>
      </>
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

   div.next {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 2rem;

      button {
         width: min(100%, 150px);
      }
   }

   em {
      font-size: 14px;
      color: red;
   }
`;
export default PrimaryData;
