import "./App.css";
import { BrowserRouter, Routes, Outlet, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./pages/Main";
import ItemList from "./pages/ItemList";
import BookmarkList from "./pages/BookmarkList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/itemlist" Component={ItemList} />
          <Route path="/bookmark" Component={BookmarkList} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
