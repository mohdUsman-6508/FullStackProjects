import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books/all")
      .then((response) => {
        setBooks(response.data.books);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 font-bold">Books List</h1>
        <Link
          to="/books/new"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition-colors duration-300"
        >
          <MdOutlineAddBox className="text-3xl" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <thead className="bg-gray-200">
              <tr>
                <th className="w-1/12 py-2 text-center">No.</th>
                <th className="w-3/12 py-2 text-start">Title</th>
                <th className="w-2/12 py-2 text-start hidden md:table-cell">
                  Author
                </th>
                <th className="w-1/12 py-2 hidden md:table-cell">Price(₹)</th>
                <th className="w-2/12 py-2 hidden  md:table-cell">
                  Publish Year
                </th>
                <th className="w-3/12 py-2">Operations</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id} className="border-b border-gray-300">
                  <td className="py-2 text-center">{index + 1}</td>
                  <td className="py-2">{book.title}</td>
                  <td className="py-2 hidden md:table-cell">
                    {book.authorName}
                  </td>
                  <td className="py-2 hidden md:table-cell text-center">
                    {book.price}
                  </td>
                  <td className="py-2 hidden md:table-cell text-center">
                    {book.publishedYear}
                  </td>
                  <td className="py-2 text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link
                        to={`/books/${book._id}`}
                        className="text-green-600 hover:text-green-800 transition-colors duration-300"
                      >
                        <BsInfoCircle className="text-2xl" />
                      </Link>
                      <Link
                        to={`/books/update/${book._id}`}
                        className="text-yellow-600 hover:text-yellow-800 transition-colors duration-300"
                      >
                        <AiOutlineEdit className="text-2xl" />
                      </Link>
                      <Link
                        to={`/books/delete/${book._id}`}
                        className="text-red-600 hover:text-red-800 transition-colors duration-300"
                      >
                        <MdOutlineDelete className="text-2xl" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Home;
