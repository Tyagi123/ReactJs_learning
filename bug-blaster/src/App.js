import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import ticketReducer from "./Reducers/ticketReducer";
import TicketForm from "./Component/TicketForm";

function App() {
  const initialStates = { tickets: [] };

  const [state, dispatch] = useReducer(ticketReducer, initialStates);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} state={state} />
      </div>
    </div>
  );
}

export default App;
