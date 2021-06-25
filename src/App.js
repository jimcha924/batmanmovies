import React, { Component } from 'react';
import './App.css';
import Batman from './data/Batman';
import 'bootstrap/dist/css/bootstrap.min.css';

// import moduleName from 'module'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount = async() => {

    let url = `http://www.omdbapi.com/?s=batman&apikey=46ed4d89`;

    let results = await fetch(url);

    let data = await results.json();

    console.log(data);

    this.setState({items: data.Search})
  }



  render() {
    // const {results} = this.state;

      return (
        <> 
        <div>

        <Batman data={this.state.items} />
        </div>
        </>
      );
    }
  }


export default App;
