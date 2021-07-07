import React, { Component } from "react";
import Main from "./Main";
import Header from "./Header";

class App extends Component {
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({
        intervalIsSet: interval
      });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({
        intervalIsSet: null
      });
    }
  }

  getDataFromDb = () => {
    fetch("/recipes")
      .then(res => res.json())
      .then(res => {
        //       console.log(res);
        this.setState({ data: res });
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main value={this.state.data}/>
      </div>
    );
  }
}

export default App;
