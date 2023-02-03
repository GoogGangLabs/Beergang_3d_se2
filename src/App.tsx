import { GlobalLayout, Home } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
