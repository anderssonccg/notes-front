import { Home } from "./Pages/Home";
import { CreateNotes } from "./Pages/CreateNotes";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { NavBar } from "./Components/NavBar/NavBar";
import { Error } from "./Pages/Error/Error";
import { useState } from "react";

export const App = () => {
  const [filters, setFilters] = useState({});
  return (
    <>
      <NavBar onFilterChange={setFilters} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home filters={filters} />} />
          <Route path="notes/create" element={<CreateNotes />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
