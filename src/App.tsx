import Buttons from "./components/navbar";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardTitle from "./components/dashboardTitle";

const Backlog = React.lazy(() => import("./components/backlog"));
const Board = React.lazy(() => import("./components/board"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading Ho rhi ruk jao</div>}>
        <Routes>
          <Route path="/" element={<Buttons />}>
            <Route index element={<DashboardTitle />} />
            <Route path="backlog" element={<Backlog />} />
            <Route path="board" element={<Board />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
