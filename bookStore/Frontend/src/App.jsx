import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Home,
  ShowBooks,
  DeleteBook,
  UpdateBook,
  CreateBook,
} from "./index.js";
import { SnackbarProvider } from "notistack";
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <SnackbarProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/:id" element={<ShowBooks />} />
            <Route path="/books/delete/:id" element={<DeleteBook />} />
            <Route path="/books/update/:id" element={<UpdateBook />} />
            <Route path="/books/new" element={<CreateBook />} />
          </Routes>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
