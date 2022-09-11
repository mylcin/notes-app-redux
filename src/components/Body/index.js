import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNote,
  getNotes,
  selectColors,
  selectNotes,
} from "../../redux/notes/notesSlice";

function Body() {
  const notes = useSelector(selectNotes);
  const colors = useSelector(selectColors);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedColor, setSelectedColor] = useState("#fca5a5");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (e.target.value !== "") {
      let filtered = notes.filter((note) =>
        note.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      dispatch(getNotes(filtered));
    } else {
      dispatch(getNotes(JSON.parse(localStorage.getItem("notes"))));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedColor !== undefined) {
      if (title.length >= 3 && content.length >= 3) {
        dispatch(
          addNote({ id: nanoid(), title, content, color: selectedColor })
        );
        setTitle("");
        setContent("");
      } else {
        alert("Title and content must be at least 3 characters.");
      }
    } else {
      alert("Pick a color.");
    }
  };

  return (
    <div className="flex flex-wrap justify-start items-center lg:flex-nowrap mb-2 font-mono relative">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="text-5xl font-extrabold text-gray-600 text-center">
          Notes App
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          <input
            className="w-full max-w-xs text-black font-mono rounded-xl m-2 p-2 bg-white border outline-gray-200 border-gray-500"
            type="search"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>
        <div className="w-full">
          <form className="flex-col flex m-auto p-2 justify-center items-center ">
            <input
              id="title"
              value={title}
              type="text"
              className="mb-2 w-full h-12 border outline-gray-200 border-gray-500 rounded-xl p-2"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              id="note"
              value={content}
              className="h-4 border w-full outline-gray-200 border-gray-500 min-h-[160px] max-h-80 p-2 rounded-xl"
              placeholder="Enter your note here..."
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </form>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-2">
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                onClick={(e) => setSelectedColor(e.target.value)}
                value={color.code}
                className={"w-8 h-8 rounded-full m-1 hover:scale-110"}
                style={{ backgroundColor: color.code }}
              >
                {selectedColor === color.code && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto w-5 h-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
          <button
            className="bg-green-600 px-4 py-4 rounded-xl text-white hover:bg-green-800 self-end m-3"
            onClick={handleSubmit}
          >
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
