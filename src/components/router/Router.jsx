import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from "../pages/Users";
import { DefaultLayout } from "../templates/DefaultLayout";
import { HeaderOnly } from "../templates/HeaderOnly";
import { Top } from "../pages/Top";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
        <Route
          path="users"
          element={
            <HeaderOnly>
              <Users />
            </HeaderOnly>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
