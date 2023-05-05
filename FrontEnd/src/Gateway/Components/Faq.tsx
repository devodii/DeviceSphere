import styled from "styled-components";
import { Faq } from "../..";
import IteratedFaq from "../Sections/iteratedFaq";

const primaryFaq: Faq[] = [
   {
      question: "Website gadget types available",
      answer: "Discover the latest iPhone, Android gadgets, and accessories!",
      id: 1,
      state: false,
   },
   {
      question: "Latest gadgets on your platform",
      answer:
         "Certainly, gain entry to fresh arrivals and keep yourself up-to-date with the current ones.",
      id: 2,
      state: false,
   },
   {
      question: "Spot your gadget easily: Tips!",
      answer:
         "To access the list of all available gadgets, simply place an order and we will ensure that you receive exactly what you're looking for.",
      precision: "Purchase today",
      url: "/order",
      id: 3,
      state: false,
   },

   {
      question: "Gadgets: new or refurbished?",
      answer:
         "Choose from new or refurbished. Quality guaranteed. Shop now and save!",
      id: 5,
      state: false,
   },

   {
      question: "Any gadget deals available today",
      answer:
         "Take advantage of free delivery on discounted products and more with our exclusive offer!",
      id: 7,
      state: false,
   },

   // Secondary Faqs

   {
      question: "Do you offer free shipping on all orders",
      answer:
         "Take advantage of free delivery on discounted products and more with our exclusive offer!",
      id: 6,
      state: false,
   },

   {
      question: "Gadget warranty: do you offer?",
      answer:
         "Rest assured with our 14-day full warranty from date of purchase - eliminating any uncertainties.",
      id: 4,
      state: false,
   },
   {
      question: "Order issue? Contact us now!",
      answer:
         "Without a doubt, you may contact us immediately. Our aim is to streamline your experience.",
      precision: "Contact Us",
      url: "/",
      id: 8,
      state: false,
   },
];

const FreqentlyAskedQuestions = () => {
    
   return (
      <Container>
         <h2>Frequently Asked Questions</h2>
         <IteratedFaq values={primaryFaq}   />
      </Container>
   );
};

const Container = styled.section`
   background-color: #fff3f2;
   display: flex;
   flex-direction: column;
   margin-top: calc(var(--flex-gap) * 5);
   padding-block: calc(var(--flex-gap) * 5);
   align-items: center;
   justify-content: center;
   padding-inline: calc(var(--flex-gap) * 3);
   

   @media (max-width: 600px) {
      padding-inline: 15px;
   }

   h2 {
      font-size: 30px;
      word-spacing: 2px;
      text-align: center;
   }
`;
export default FreqentlyAskedQuestions;
