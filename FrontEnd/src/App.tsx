import {
   Route,
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
   Outlet,
} from "react-router-dom";
import DeviceSphere from "./Gateway";
import NotFound from "./Components/404";
import Form from "./Order/Form";
import Description from "./Order/Description";
import Error from "./Components/Error";
import AddFirestore from "./Components/AddFirestore";
import Login from "./Admin/Login";
import { Loader } from "./utils";
import Dashboard from "./Admin/Dashboard";
import AddProduct from "./Admin/AddProduct";
import ViewProducts from "./Admin/ViewProducts";
const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/">
         <Route index element={<DeviceSphere />} errorElement={<Error />} />
         <Route path="order" element={<Form />} />
         <Route path="description" element={<Description />} />

         <Route path="test" element={<AddFirestore />} />
         <Route
            path="chacho"
            element={<Outlet />}
            loader={async () => await Loader.checkAdmin()}
         >
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />}>
               <Route index element={<h1>Welcome, Chacho</h1>} />
               <Route path="view" element={<ViewProducts />} />
               <Route path="add" element={<AddProduct />} />
            </Route>
         </Route>
         <Route path="*" element={<NotFound />} />
      </Route>
   )
);
const App = () => {
   return <RouterProvider router={router} />;
};

export default App;
