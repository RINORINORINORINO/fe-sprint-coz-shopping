import "./App.css";
import { BrowserRouter, Routes, Outlet, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/MainPage";
import ItemList from "./pages/ItemListPage";
import BookmarkList from "./pages/BookmarkListPage";
import Hub from "./pages/Hub";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hub />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: "/item/list", element: <ItemList /> },
      { path: "/bookmark", element: <BookmarkList /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

/* <BrowserRouter>
<Header />
<main>
  <Routes>
    <Route path="/" Component={Main} />
    <Route path="/itemlist" Component={ItemList} />
    <Route path="/bookmark" Component={BookmarkList} />
  </Routes>
</main>
<Footer />
</BrowserRouter> */
