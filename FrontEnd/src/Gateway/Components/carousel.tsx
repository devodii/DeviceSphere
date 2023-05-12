import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testifier } from "../..";
import { BsTwitter } from "react-icons/bs";
import { MdWork, MdVerified } from "react-icons/md";

const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 2,
   slidesToScroll: 2,
   autoplay: true,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
         },
      },
      {
         breakpoint: 700,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
         },
      },
   ],
};

interface Prop {
   item: Testifier[];
   text?: string;
}

const ReactCarousel = ({ item }: Prop) => {
   return (
      <Container {...settings} key={Math.random() * 400}>
         {item &&
            item.map((each, index: number) => (
               <>
                  <div key={index} className="parent__flag">
                     <figure>
                        <img
                           src={each.ImgUrl}
                           alt={`${each.name} from DeviceSphere`}
                           loading="lazy"
                        />
                     </figure>

                     <div className="user__description">
                        <div className="user__description__header">
                           <img
                              src="/assets/quote.svg"
                              alt={undefined}
                              height={25}
                           />
                           <div className="user__name__verified">
                              <h3 className="name__of__testifier">
                                 {each.name}
                              </h3>
                              {each.verified && (
                                 <>
                                    <MdVerified className="fa__verified"
                                    />
                                  
                                 </>
                              )}
                           </div>
                           {each.position && (
                              <div className="testifier__position">
                                 <MdWork className="fa__work" />
                                 <p>{each.position}</p>
                              </div>
                           )}
                           <span className="testimony">{each.testimony}</span>
                        </div>

                        <div className="user__description__footer">
                           <button
                              aria-label={`Visit ${each.name} Twitter page to learn more about the testimonial`}
                           >
                              <a
                                 className="twitter__redirect"
                                 target="blank"
                                 href={each.tweetUrl}
                              >
                                 <BsTwitter className="fa-twitter" />
                                 <em>View tweet</em>
                              </a>
                           </button>
                        </div>
                     </div>
                  </div>
               </>
            ))}
      </Container>
   );
};

const Container = styled(Slider)`
   margin: 0 auto;
   width: 100%;
   max-width: 1200px;
   background-color: #fff;
   box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
   border-radius: 20px;
   padding: -20px 0;

   &::-webkit-scrollbar {
      display: none;
   }
   .slick-list {
      overflow: hidden;
      margin-top: 0rem;
   }
   ul li {
      margin-left: 10px;
      margin-bottom: 20px;
   }
   ul li button {
      &::before {
         color: transparent;
         margin-top: 2rem;
         background-color: rgb(204, 204, 204);
      }
   }
   .slick-dots li.slick-active button:before {
      color: transparent;
      background-color: var(--primary-pink);
      height: 10px;
      width: 10px;
   }
   .slick-dots li button:before {
      color: transparent;
      background-color: rgb(204, 204, 204);
      height: 10px;
      width: 10px;
   }

   div.parent__flag {
      display: flex;
      gap: calc(var(--flex-gap) * 2);
      width: 100%;
      cursor: grab;
      height: 350px;
      padding: 10px 0px 10px 20px;

      figure {
         width: 40%;
         height: 100%;
         img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            object-fit: cover;
         }
      }
      @media (max-width: 500px) {
         flex-direction: column;
         figure {
            width: 95%;
            height: 50%;
         }
         height: auto;
      }

      div.user__description {
         display: flex;
         width: 60%;
         flex-direction: column;
         justify-content: space-between;
         align-items: flex-start;
         gap: calc(var(--flex-gap) * 2);
         padding: 10px 15px 10px 10px;

         @media (max-width: 600px) {
            width: 100%;
         }

         div.user__description__header {
            display: flex;
            flex-direction: column;
            gap: calc(var(--flex-gap) * 1.2);
            align-items: flex-start;
            width: 100%;

            div.user__name__verified {
               display: flex;
               align-items: center;
               width: 100%;
               justify-content: space-between;

               h3.name__of__testifier {
                  font-size: 25px;
                  font-weight: 600;
                  margin-top: -5px;
               }
               .fa__verified {
                  font-size: 23px;
                  color: #1da1f2;
                  cursor: pointer;
               }

               .custom-tooltip {
                  background-color: var(--dark-blue);
                  color: #f9f0f0;
               }
            }

            span {
               width: min(100%, 250px);
               line-height: 1.5;

               &:before,
               &:after {
                  content: '"';
               }
               @media (max-width: 600px) {
                  min-width: 100%;
               }
            }

            div.testifier__position {
               display: flex;
               gap: 4px;
               align-items: center;

               .fa__work {
                  color: #f4e1e0;
                  font-size: 20px;
               }
            }
         }

         div.user__description__footer {
            width: 100%;
            display: flex;

            button {
               border: none;
               outline: none;
               background-color: transparent;
               cursor: pointer;

               a {
                  text-decoration: none;
                  display: flex;
                  align-items: center;
                  gap: 5px;

                  em {
                     font-size: 15px;
                     font-style: normal;
                     color: rgba(96, 96, 96);
                     transition: all 300ms;
                     &:hover {
                        color: #000;
                     }
                  }
                  .fa-twitter {
                     color: #1da1f2;
                     font-size: 18px;
                     transition: all 0.25s;
                     &:hover {
                        transform: scale(1.4);
                     }
                  }
               }
            }
         }
      }
   }
`;

export default ReactCarousel;
