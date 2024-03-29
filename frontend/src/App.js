// data
import { expenses } from "./expenses.js";

// components
import "./App.css";
import Bills from './components/Widgets/Bills.js'

const App = () => {
  return(
    <div className="app">
      <Bills expenses={expenses} /> 
    </div>
  );
};

export default App;
