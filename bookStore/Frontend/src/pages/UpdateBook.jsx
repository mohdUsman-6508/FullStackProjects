import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

function UpdateBook() {
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthorName(response.data.book.authorName);
        setTitle(response.data.book.title);
        setPrice(response.data.book.price);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdateBook = () => {
    const data = {
      title,
      authorName,
      price,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/update/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Updated!", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : " "}
      <div className="flex flex-col border border-sky-400 rounded-xl w-96 p-4 mx-auto">
        <div className="my-4">
          <label className="text-lg text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-lg text-gray-500">Author</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-lg text-gray-500">Price ₹</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <button
          className="bg-sky-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-sky-600"
          onClick={handleUpdateBook}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default UpdateBook;
