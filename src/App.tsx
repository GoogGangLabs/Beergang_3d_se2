import { GlobalLayout, Home, Second } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Second />} />
      </Route>
    </Routes>
  );
}

export default App;
