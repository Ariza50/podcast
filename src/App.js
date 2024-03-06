import './App.css';
import Router from "./routes";
import NotistackProvider from "./components/infrastructure/NotistackProvider";


function App() {
  return (
    <NotistackProvider>
      <Router />
    </NotistackProvider>
  );
}

export default App;
