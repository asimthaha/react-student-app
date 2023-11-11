import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddStudent from "./components/AddStudent";
import DeleteStudent from "./components/DeleteStudent";
import SearchStudent from "./components/SearchStudent";
import ViewAllStudent from "./components/ViewAllStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AddStudent />} />
        <Route path="search" element={<SearchStudent />} />
        <Route path="view" element={<ViewAllStudent />} />
        <Route path="delete" element={<DeleteStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
