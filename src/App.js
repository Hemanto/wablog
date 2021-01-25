import './App.css';
import Routes from './Routes'
import { createStore } from "redux";
import RootReducer from "./store/Reducer";
import { Provider } from "react-redux";

const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
