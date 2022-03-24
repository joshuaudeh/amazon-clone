import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import ProductFeed from "./components/productfeed/ProductFeed";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Banner />
        <ProductFeed />
      </main>
    </div>
  );
}

export default App;
