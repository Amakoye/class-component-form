import React from "react";
import "./App.css";
import Form from "./Form";

class App extends React.Component {
  render(): React.ReactNode {
    console.log("Render app");

    return (
      <div className="App">
        <header className="App-header">
          <Form />
        </header>
      </div>
    );
  }
}

export default App;
