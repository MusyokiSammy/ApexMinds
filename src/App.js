import React from "react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import BaseLayout from "./Layouts/BaseLayout";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import TeamPage from "./Pages/TeamPage";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/team" element={<TeamPage/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
