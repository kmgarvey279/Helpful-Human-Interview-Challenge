import React from 'react';
import ColorList from '../color-list/ColorList';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      colorList: [
         {
           category: 'green',
           hex: '#275d06',
         },
         {
           category: 'blue',
           hex: '#6495ed',
         },
         {
           category: 'red',
           hex: '#8b0000',
         },
         {
           category: 'purple',
           hex: '#8b0000',
         },
         {
           category: 'brown',
           hex: '#a0522d',
         },
         {
           category: 'gray',
           hex: '#778899',
         },
         {
           category: 'orange',
           hex: '#ff4500',
         },
         {
           category: 'yellow',
           hex: '#ffd700',
         },
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
