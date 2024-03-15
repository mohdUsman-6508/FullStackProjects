import { Book } from "../models/book.models.js";

export const createBook = async (req, res) => {
  try {
    const { title, authorName, price } = req.body;
    console.log(title, authorName, price);

    if (!title || !authorName || !price) {
      return res.status(404).json({
        success: false,
        message: "All Fields require!!",
      });
    }

    let book = await Book.create(req.body);
    res.status(200).json({
      success: true,
      book,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    let books = await Book.find();
    if (books) {
      res.status(200).json({
        totalBook: books.length,
        success: true,
        books,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Books unavailable",
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
};

export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    let book = await Book.findById(id);
    if (book) {
      res.status(200).json({
        success: true,
        book,
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    let book = await Book.findByIdAndUpdate(id, req.body);

    if (book) {
      res.status(200).json({
        success: true,
        book,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found!",
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    let book = await Book.findByIdAndDelete(id);
    if (book) {
      res.status(201).json({
        success: true,
        message: "Book deleted!",
        book,
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
};
