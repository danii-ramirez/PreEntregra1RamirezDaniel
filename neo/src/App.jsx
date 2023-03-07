import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="container-fluid">
      <NavBar />
      <ItemListContainer greeting="Bienevidos a Neo" />
    </main>
  );
}

export default App;
