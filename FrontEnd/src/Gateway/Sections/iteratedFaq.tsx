import { useEffect, useState } from "react";
import styled from "styled-components";
import { Faq } from "../..";
import { Link } from "react-router-dom";
import { RxMinus, RxPlus } from "react-icons/rx";
import { useMediaQuery } from "@material-ui/core";
interface Prop {
   values: Faq[];
}

const IteratedFaq = ({ values }: Prop) => {
   const PrimaryFaq: Faq[] = values.slice(0, 5);
   const SecondaryFaq: Faq[] = values.slice(5, 9);
   const [showSecondary, setShowSecondary] = useState<boolean>(false);
   const [activeIndex, setActiveIndex] = useState<number>(-1);
   const [loadMore, setLoadMore] = useState<boolean>(true);
   const mediaMatches = useMediaQuery("(max-width: 936px)");

   const HandleToggle = (index: number) => {
      if (activeIndex === index) {
         setActiveIndex(-1)
      }
      else {
         setActiveIndex(index)
      }
   }


   useEffect(() => {
      !mediaMatches ? setShowSecondary(true) : setShowSecondary(false);
   }, [mediaMatches]);

   return (
      <Container>
         <div className="flex__primary__faq">
            
            {PrimaryFaq.map((faq, index: number) => {
               return (
                  <>
                     <div
                        className="full__"
                        key={index}
                        onClick={() => HandleToggle(index)}
                     >
                        <div className="full__question_container">
                           <p>{faq.question}</p>
                           {activeIndex === index ? (
                              <RxMinus className="fa-add" />
                           ) : (
                              <RxPlus className="fa-add" />
                           )}
                        </div>

                        {activeIndex === index && (
                           <div className={"full__response__container"}>
                              <p>{faq.answer}</p>
                              <Link to={"/contact"}> 
                                 <span>{faq.precision}</span>
                              </Link>
                           </div>
                        )}
                     </div>
                  </>
               );
            })}
         </div>

         {mediaMatches && loadMore ? (
            <button
               className="load_more"
               onClick={() => {
                  setShowSecondary(true);
                  setLoadMore(false);
               }}
            >
               Load More
            </button>
         ) : null}

         {showSecondary ? (
            <div className="flex__secondary__faq">
               { SecondaryFaq.map((faq, secondaryIndex: number) => {
                  const index = secondaryIndex + 5
                  return (
                     <>
                        <div
                           className="full__"
                           key={index}
                           onClick={() => HandleToggle(index)}
                        >
                           <div className="full__question_container">
                              <p>{faq.question}</p>
                              <RxPlus className="fa-add" />
                           </div>

                           {activeIndex === index && (
                              <div className={"full__response__container"}>
                                 <p>{faq.answer}</p>
                                 <span>{faq.precision}</span>
                              </div>
                           )}
                        </div>
                     </>
                  );
               })}
            </div>
         ) : null}
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
   overflow: hidden;

   @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
   }
   div.flex__primary__faq,
   div.flex__secondary__faq {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
   }
   .load_more {
      padding: 8px 15px;
      width: min(100%, 250px);
      font-size: 17px;
      margin: 0 auto;
      transition: all 300ms;
      border-radius: 5px;
      text-transform: uppercase;
      background-color: var(--weak-orange);
      border: none;
      cursor: pointer;
      outline: none;
      &:hover {
         background-color: var(--burnt-orange);
      }
   }

   .full__ {
      background-color: #fff;
      padding: 35px 35px 0;
      height: auto;
      width: 100%;
      @media (max-width: 600px) {
         width: 100%;
         padding: 30px 35px 20px;
      }
      color: var(--dark-blue);
      border-radius: 20px;
      cursor: pointer;

      div.full__question_container {
         display: flex;
         align-items: center;
         width: 100%;
         height: 50%;
         max-height: 50px;
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
            transition: all 2s;
            @media (max-width: 600px) {
               font-size: 30px;
            }
         }
      }

      div.full__response__container {
         cursor: auto;
         padding-top: calc(var(--flex-gap) + 4px);
         padding-bottom: 20px;
         height: auto;
         margin-top: 0;
         animation: 0.2s Translator ease-in-out 0s forwards;
         transition: 0.3s ease-in-out;

         @keyframes Translator {
            from {
               transform: translateY(-20%);
               opacity: 0;
            }
            to {
               transform: translateY(0);
               opacity: 1;
            }
         }

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
