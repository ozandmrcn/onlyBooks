import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Novel from "./pages/Novel";
import Story from "./pages/Story";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/category" element={<Category />}>
          <Route path="story" element={<Story />} />
          <Route path="novel" element={<Novel />} />
        </Route>
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
