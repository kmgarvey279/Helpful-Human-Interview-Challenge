import React from 'react';
import ColorList from '../color-list/ColorList';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import ColorDetail from '../color-detail/ColorDetail';
import './App.css';
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      selectedColor: null,
      selectedCategory: null,
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
           hex: '#9400d3',
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
    this.changeSelectedColor = this.changeSelectedColor.bind(this);
    this.changeSelectedCategory = this.changeSelectedCategory.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }
  
  changeSelectedColor(hex){
    this.setState({selectedColor: hex});
  }
  
  changeSelectedCategory(category){
    this.setState({selectedCategory: category});
  }
  
  getRandom(){
    let num = Math.floor(Math.random() * this.state.colorList.length);
    return this.state.colorList[num].hex;
  }
  
  render() {  
    return (
      <div>
        <Router>
          <Header/>
          <Sidebar colorSelect={this.changeSelectedColor}
          categorySelect={this.changeSelectedCategory} 
          colorList={this.state.colorList}
          getRandom={this.getRandom}/>
          <Route path='/' render={(props)=><ColorList colorList={this.state.colorList}
          currentRouterpath={props.location.pathname}
          selectedColor={this.state.selectedColor}
          colorSelect={this.changeSelectedColor}/>} />
          <Route path='/details' render={(props)=><ColorDetail colorList={this.state.colorList}
          currentRouterpath={props.location.pathname}
          selectedColor={props.selectedColor}
          colorSelect={this.changeSelectedColor}/>} />
        </Router>
      </div>
    );
  }
}

export default App;
