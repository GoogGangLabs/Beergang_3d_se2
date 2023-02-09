import { ExamplePage, GlobalLayout, Home, Second, TestPage } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<ExamplePage />} /> */}
        {/* <Route path="/" element={<Second />} /> */}
        {/* <Route path="/" element={<TestPage />} /> */}

      </Route>
    </Routes>
  );
}

export default App;
