import "./App.css";
import { BrowserRouter, Routes, Outlet, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./pages/MainPage";
import ItemList from "./pages/ItemListPage";
import BookmarkList from "./pages/BookmarkListPage";

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
