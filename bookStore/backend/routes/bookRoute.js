import {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
} from "../controllers/bookStore.controllers.js";

import express from "express";
const router = express.Router();

router.post("/new", createBook);
router.get("/all", getAllBooks);
router.get("/:id", getBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

export default router;
