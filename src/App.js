import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";

import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav />
      <Welcome nome="EpiBooks" subName="The Best Books Ever!!!" />
      <BookList />

      <MyFooter />
    </>
  );
}

export default App;
