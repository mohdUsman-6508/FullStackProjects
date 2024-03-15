import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";

export default function ShowBooks() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data.book);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 font-bold text-gray-800">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className=" border border-2 border-sky-600 rounded-lg shadow-md p-6 w-[600px] p-8 mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-600 font-semibold">Id:</span>
            <span className="text-lg text-gray-800">{book._id}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-600 font-semibold">Title:</span>
            <span className="text-lg text-gray-800">{book.title}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-600 font-semibold">Author:</span>
            <span className="text-lg text-gray-800">{book.authorName}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-600 font-semibold">Price:</span>
            <span className="text-lg text-gray-800">{book.price}₹</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-600 font-semibold">
              Published Year:
            </span>
            <span className="text-lg text-gray-800">{book.publishedYear}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-600 font-semibold">Genre:</span>
            <span className="text-lg text-gray-800">{book.genre}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-600 font-semibold">
              Create Time:
            </span>
            <span className="text-lg text-gray-800">
              {new Date(book.createdAt).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">
              Last Update Time:
            </span>
            <span className="text-lg text-gray-800">
              {new Date(book.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
