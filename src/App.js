import React from "react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import BaseLayout from "./Layouts/BaseLayout";
import Home from "./Pages/Home";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
