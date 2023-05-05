import { useState } from "react";
import styled from "styled-components";
import { Faq } from "../..";
import { RxPlus } from "react-icons/rx";

interface Prop {
   values: Faq[];
}

const IteratedFaq = ({ values }: Prop) => {
   const PrimaryFaq: Faq[] = values.slice(0, 5);
   const SecondaryFaq: Faq[] = values.slice(5, 9);
   const [activeIndex, setActiveIndex] = useState<number | null>(null);

   function handleToggle(index: number) {
      setActiveIndex(activeIndex === index ? null : index);
   }

   return (
      <Container>
         <div className="flex__primary__faq">
            {PrimaryFaq.map((faq, index: number) => {
               return (
                  <>
                     <div
                        className="full__"
                        key={index}
                        onClick={() => handleToggle(index)}
                     >
                        <div className="full__question_container">
                           <p>{faq.question}</p>
                           <RxPlus className="fa-add" />
                        </div>

                        <div className={"full__response__container"}>
                           <p>{faq.answer}</p>
                           <span>{faq.precision}</span>
                        </div>
                     </div>
                  </>
               );
            })}
         </div>

         <div className="flex__primary__faq">
            {SecondaryFaq.map((faq, index: number) => {
               return (
                  <>
                     <div
                        className="full__"
                        key={index}
                        onClick={() => handleToggle(index)}
                     >
                        <div className="full__question_container">
                           <p>{faq.question}</p>
                           <RxPlus className="fa-add" />
                        </div>

                        <div className={"full__response__container"}>
                           <p>{faq.answer}</p>
                           <span>{faq.precision}</span>
                        </div>
                     </div>
                  </>
               );
            })}
         </div>
      </Container>
   );
};

const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
   grid-gap: calc(var(--flex-gap) * 4);
   row-gap: 30px;
   width: min(100%, 1200px);
   padding-top: 50px;
   margin: 0 auto;
   overflow-x: hidden;

   @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
   }
   div.flex__primary__faq {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
   }

   .full__ {
      background-color: #fff;
      padding: 30px 35px;
      height: auto;
      width: 100%;
      @media (max-width: 600px) {
         width: 100%;
      }
      color: var(--dark-blue);
      border-radius: 20px;
      cursor: pointer;

      div.full__question_container {
         display: flex;
         align-items: center;
         width: 100%;
         height: 50%;
         justify-content: space-between;
         p {
            font-size: 25px;
            font-weight: 600;
            padding-bottom: 10px;
            text-align: center;

            @media (max-width: 600px) {
               font-size: 20px;
               text-align: start;
            }
         }

         .fa-add {
            font-size: 24px;
            @media (max-width: 600px) {
               font-size: 30px;
            }
         }
      }

      div.full__response__container {
         cursor: auto;
         margin-top: var(--flex-gap);
         padding-bottom: 20px;
         height: auto;
         margin-top: 0;
         transform: translateY(0);
         transition: 0.3s ease-in-out;

         p {
            line-height: 1.4;
            font-size: 17px;
         }
         span {
            color: var(--burnt-orange);
            text-decoration: underline;
            font-weight: 600;
            cursor: pointer;
            line-height: 1.5;
            letter-spacing: 0.5px;
         }
      }
   }

   .hidden {
      transform: translateY(-10%);
      transition: 0.3s ease-in-out;
      opacity: 0;
   }
`;

export default IteratedFaq;
