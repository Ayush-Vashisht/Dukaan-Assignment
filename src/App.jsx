import { Route, Routes } from "react-router-dom";
import IndexPage from "./IndexPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
