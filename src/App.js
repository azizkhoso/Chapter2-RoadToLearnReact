import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.onDismiss = this.onDismiss.bind(this);
    this.state = {
        // ES5
        //list: list,

        //ES6
        list,
    };
  }
  onDismiss(id){
      const updatedList = this.state.list.filter(function isNotId(item){
        return item.objectID != id;
      });
      this.setState({list: updatedList});
  }

  render() {
    return (
      <div className="App">
        {this.state.list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
                <button onClick={()=>this.onDismiss(item.objectID)} type="button">Dismiss</button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default App;