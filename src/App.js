// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import "./App.css";
import LoggerComponent from "./Components/LoggerComponent";
import UserProfile from "./Components/UserProfile";
import ProductCard from "./Components/ProductCard";
import ItemList from "./Components/ItemList";

function App() {
const laiArray=["ladybug","lady","lai-mokah","laï"]

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
    <LoggerComponent message="hello,Lai your a coder!"/>
    <UserProfile name="lai luv" age="26" location="NewYork" />
    <UserProfile name="Donte hart" age="34" location="New Jersey" />
    <UserProfile name="sue lopez" age="30" location="cali" />

    <ProductCard  title="title:dog- dog " price="price: $30" description=" Description: dog letter make a dog  " />

    <ProductCard  title="title: Love Bug" price="price: $25" description="description:lady bug with heart wings  " />

    <ProductCard  title="title: CheckMate " price="price: $80" description="description: letter OF chess pieces" />


    < ItemList data={laiArray}/>
    </div>
  );
}

export default App;
