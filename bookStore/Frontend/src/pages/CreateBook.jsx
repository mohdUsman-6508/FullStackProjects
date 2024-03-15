import React, { useState } from "react";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      authorName,
      price,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books/new", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : " "}
      <div className="flex flex-col border-2 border-sky-400 rounded-t-xl w-[650px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="border-2 border-gray-500 px-4"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Price ₹</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-gray-500 px-4"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBook;
