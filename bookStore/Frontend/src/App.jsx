import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Home,
  ShowBooks,
  DeleteBook,
  UpdateBook,
  CreateBook,
} from "./index.js";
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<ShowBooks />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
          <Route path="/books/update/:id" element={<UpdateBook />} />
          <Route path="/books/new" element={<CreateBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
