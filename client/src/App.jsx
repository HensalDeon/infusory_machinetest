import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="app bg-primary">
      <Routes>
        <Route path="/" element={<Main location={"home"}/>} />
        <Route path="/dashboard" element={<Main location={"dashboard"}/>} />
      </Routes>
    </div>
  );
};

export default App;
