import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Body from "./components/Body";
import Footer from "./components/Footer";
import List from "./components/List";
import { getNotes } from "./redux/notes/notesSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes !== null) {
      dispatch(getNotes(notes));
    }
  }, [dispatch]);

  return (
    <>
    <main className="min-h-screen bg-gray-100">
      <div className="container flex flex-col justify-center items-center m-auto w-full h-full">
        <div className="lg:w-1/2 md:w-5/6 sm:w-full p-4">
          <Body />
        </div>
        <div className="lg:w-11/12 md:w-5/6 sm:w-full my-4">
          <List />
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}

export default App;
