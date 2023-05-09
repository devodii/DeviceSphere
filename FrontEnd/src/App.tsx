import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import DeviceSphere from "./Gateway";
import NotFound from "./Components/404";
import Form from "./Order/UserInfo/Form";
import Description from "./Order/Description/Description";
const App = () => {
   return (
      <>
         <Container>
            <Routes>
               <Route path="/">
                  <Route index element={<DeviceSphere />} />
                  <Route path="order" element={<Form />} />
                  <Route path="description" element={<Description />} />
                  <Route path="*" element={<NotFound />} />
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
