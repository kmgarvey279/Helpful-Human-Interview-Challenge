import React from 'react';
import ColorList from '../color-list/ColorList';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import ColorDetail from '../color-detail/ColorDetail';
import './App.css';
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import colorList from '../../masterColorList.jsx'

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      selectedColor: null,
      selectedCategory: null,
      currentPage: 1
    }
    this.changeSelectedColor = this.changeSelectedColor.bind(this);
    this.changeSelectedCategory = this.changeSelectedCategory.bind(this);
    this.changePage = this.changePage.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }
  
  changeSelectedColor(hex){
    this.setState({selectedColor: hex});
  }
  
  changeSelectedCategory(category){
    this.setState({selectedCategory: category});
  }
  
  changePage(newPage){
    this.setState({currentPage: newPage});
  }
  
  getRandom(){
    let num = Math.floor(Math.random() * colorList.length);
    return colorList[num].hex;
  }
  
  render() {  
    return (
      <div>
        <Router>
          <Header/>
          <Sidebar colorSelect={this.changeSelectedColor}
          categorySelect={this.changeSelectedCategory} 
          colorList={colorList}
          getRandom={this.getRandom}/>
          <Route path='/' render={(props)=><ColorList colorList={colorList}
          currentRouterpath={props.location.pathname}
          selectedColor={this.state.selectedColor}
          colorSelect={this.changeSelectedColor}
          currentPage={this.state.currentPage}
          changePage={this.changePage}/>} />
          <Route path='/details' render={(props)=><ColorDetail colorList={colorList}
          currentRouterpath={props.location.pathname}
          selectedColor={props.selectedColor}
          colorSelect={this.changeSelectedColor}/>} />
        </Router>
      </div>
    );
  }
}

export default App;
