import logo from './logo.svg';
import './App.css';
import College from './College'
import Student from './Student'

let stud = {
  sid: 101337015,
  fnm: "Elizaveta",
  lnm: "Vygovskaia"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h1>React JS Programming Week09 Lab exercise</h1>
        <Student student = {stud}/>
        <College city="Toronto" />
      </header>
    </div>
  );
}

export default App;
