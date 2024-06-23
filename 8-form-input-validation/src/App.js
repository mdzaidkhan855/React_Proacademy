import logo from './logo.svg';
import './App.css';
import UserFormUsingState from './Components/UserFormUsingState';
import UserFormUsingRef from './Components/UserFormUsingRef';
import FormWithoutYup from './Components/FormWithoutYup';
import FormWithYup from './Components/FormWithYup';

function App() {

  
  return (
    <div className="App">
      {/* using state approach */}
      {/* <UserFormUsingState ></UserFormUsingState> */}

      {/* using ref approach */}
      {/* <UserFormUsingRef></UserFormUsingRef> */}
      {/* <FormWithoutYup></FormWithoutYup> */}
      <FormWithYup></FormWithYup>
    </div>
  );
}

export default App;
