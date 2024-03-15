import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      default: "Self help",
    },
    publishedYear: {
      type: Number,
      default: 2001,
    },
  },
  { timestamps: true }
);

export const Book = new mongoose.model("Book", bookSchema);
