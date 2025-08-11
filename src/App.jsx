import { Home } from "./Pages/Home";
import { CreateNotes } from "./Pages/CreateNotes";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Pages/Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="notes/create" element={<CreateNotes />} />
      </Route>
    </Routes>
  );
};
