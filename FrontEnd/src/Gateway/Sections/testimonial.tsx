import styled from "styled-components";
import { Testifier } from "../..";
import ReactCarousel from "../Components/carousel";

const values: Testifier[] = [
   {
      name: "Emmanuel odii",
      ImgUrl: "/assets/emmanuelodii.jpg",
      position: "software engineer",
      testimony:
         "DeviceSphere: Reliable source for latest gadgets, top recommendation for purchasing technology.",
      tweetUrl: "",
      verified: true,
   },
   {
      name: "Jeff Bezos",
      ImgUrl: "assets/User.jpeg",
      testimony:
         "Innovation at its finest! DeviceSphere has revolutionized the way I work and play. I'm never going back!",
      tweetUrl: "",
      position: "CEO at Amazon",
      verified: true,
   },
   {
      name: "Mario Luigi",
      position: "CEO at Klas",
      ImgUrl: "assets/User.jpeg",
      testimony:
         "I never knew a gadget could bring so much joy to my life until I got DeviceSphere. It's the best thing I've bought in years!",
      tweetUrl: "",
      verified: true,
   },

   {
      name: "devodii_",
      ImgUrl: "/assets/emmanuelodii.jpg",
      position: "software engineer",
      testimony:
         "I've tried countless gadgets over the years, but DeviceSphere takes the cake. It's intuitive, reliable, and simply amazing!",
      tweetUrl: "",
      verified: true,
   },
];
const Testimonial = () => {
   return (
      <Container>
         <h2>
            Hear It From Our Satisfied Customers: Discover Their Stories and
            Experiences
         </h2>
         <ReactCarousel item={values} />
      </Container>
   );
};

const Container = styled.section`
   width: 100%;
   margin: 0 auto;
   display: flex;
   gap: calc(var(--flex-gap) * 4);
   align-items: center;
   flex-direction: column;
   justify-content: center;
   margin-bottom: 40px;
   margin-top: 40px;

   h2 {
      font-size: 30px;
      word-spacing: 2px;
      text-align: center;
   }
`;
export default Testimonial;


