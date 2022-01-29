import logo from "../logo.svg";

function Main(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.temp ? <p>{props.temp}</p> : <p>Learn React</p>}
      </a>
    </header>
  );
}

export default Main;
