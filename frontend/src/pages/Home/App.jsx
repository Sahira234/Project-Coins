import Categories from "../../assets/components/Categories/Categories";
import Search from "../../assets/components/Search/Search";
import "./App.css"

function App() {
  return (
    <div className="home">
      <h1>HomePage</h1>
      <Search/>
      <Categories/>
    </div>
  );
}

export default App;
