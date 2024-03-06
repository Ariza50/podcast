import './App.css';
import Router from "./routes";
import {BrowserRouter} from "react-router-dom";
import NotistackProvider from "./components/NotistackProvider";


function App() {
  return (
    <BrowserRouter>
      <NotistackProvider>
        <Router />
      </NotistackProvider>
    </BrowserRouter>
  );
}

export default App;
