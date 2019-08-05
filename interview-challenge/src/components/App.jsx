import React from 'react';
import ColorList from './ColorList';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      colorList: [
         {
           category: 'green',
           hex: '#275d06' 
         },
         {
           category: 'blue',
           hex: '#6495ed'
         },
         {
           category: 'red',
           hex: '#8b0000'
         }
      ]
    };
  }
  
  render() {  
    return (
      <div>
        <Router>
          <Header/>
          <Sidebar/>
          <Route path='/' render={()=><ColorList colorList={this.state.colorList} />} />
        </Router>
      </div>
    );
  }
}

export default App;
