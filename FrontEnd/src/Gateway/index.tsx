import styled from "styled-components";
import Header from "./Header/Header";
import InitialDescriptor from "./Sections/initial_descriptor";
import GadgetHunt from "./Sections/gadget_hunt";
import Helped from "./Sections/helped";
import Offer from "./Sections/offer";
import FreqentlyAskedQuestions from "./Components/Faq";
import Newsletter from "./Sections/newsletter";
import MainFooter from "./Footer/main_footer";
import { useEffect, useState } from "react";
import HeaderOverlay from "./Header/ActiveHeader";

const DeviceSphere = () => {
   const [showHeader, setShowHeader] = useState<boolean>(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 100) setShowHeader(true);
         else {
            setShowHeader(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [showHeader]);
   return (
      <Container>
         <Header />
         {showHeader && <HeaderOverlay />}
         <InitialDescriptor />
         <GadgetHunt />
         <Helped />
         <Offer />
         <FreqentlyAskedQuestions />
         <Newsletter />
         <MainFooter />
         
      </Container>
   );
};

const Container = styled.div`
   width: 100%;
`;

export default DeviceSphere;
