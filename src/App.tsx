import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/chat";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
