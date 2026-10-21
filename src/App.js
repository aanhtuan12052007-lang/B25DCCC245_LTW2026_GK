import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TaskList from "./pages/TaskList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tasks" element={<TaskList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;