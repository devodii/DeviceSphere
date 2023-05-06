import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import DeviceSphere from "./Gateway";
import UserInfo from "./UserInfo";

const App = () => {
   return (
      <>
         <Container>
            <Routes>
               <Route path="/">
                  <Route index element={<DeviceSphere />} />
                  <Route path="order" element={<UserInfo />} />
               </Route>
            </Routes>
         </Container>
      </>
   );
};

const Container = styled.div`
   width: 100%;
   max-width: 1700px;
   margin: 0 auto;
`;

export default App;
