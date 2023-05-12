import {
   Route,
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
} from "react-router-dom";
import DeviceSphere from "./Gateway";
import NotFound from "./Components/404";
import Form from "./Order/UserInfo/Form";
import Description from "./Order/Description/Description";
// import { loader as ProductLoader} from "./utils";
import Error from "./Components/Error";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/">
         <Route
            index
            element={<DeviceSphere />}
            errorElement={ <Error /> }
            // loader={ProductLoader}
         />
         <Route path="order" element={<Form />} />
         <Route path="description" element={<Description />} />
         <Route path="*" element={<NotFound />} />
      </Route>
   )
);
const App = () => {
   return <RouterProvider router={router} />;
};

export default App;
