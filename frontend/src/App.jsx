import "reset-css";
import SearchBar from "@components/SearchBar/SearchBar";
import Style from "./style";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Style>
      <SearchBar />
      <Home />
    </Style>
  );
}

export default App;
