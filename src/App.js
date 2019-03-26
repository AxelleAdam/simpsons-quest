import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  };
    handleClick = () => {     
      this.setState({ working: !this.state.working });
    };
  render() {
    const work = this.state.working ? 'Working' : 'Sleeping';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={ this.state.working ? 'App-logo-working' : 'App-logo-sleeping'} alt="logo"  />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <div className="working">
          <button
          onClick={this.handleClick}  
          className={work}
          >
            {work.toUpperCase()}
          </button>        
          <figure className={work} />
      </div>
      </div>
    );
  }
}

export default App;
