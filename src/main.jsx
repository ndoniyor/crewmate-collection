import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Layout from "../routes/Layout";
import DetailView from "../routes/DetailView";
import CreateView from "../routes/CreateView";
import SimpleView from "../routes/SimpleView";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/gallery/*">
            <Route index={true} element={<SimpleView />} />
            <Route path=":name" element={<DetailView />} />
          </Route>
          <Route index={false} path="/create/" element={<CreateView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
