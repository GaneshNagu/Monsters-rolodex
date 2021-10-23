import React, { Component } from 'react';
import './App.css';
import { Cardlist } from './Components/Card-list/Card-list.component';
import { SearchBox} from './Components/Search-box/Search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchin:""
    }

  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(users=>this.setState({monsters:users}))
 }

  render() {

    const { monsters, searchin } = this.state;
    console.log("monsters:"+monsters);
    console.log("searchin:"+searchin);

    const filteredMonsters = monsters.filter(monster =>
      monster.title.toLowerCase().includes(searchin.toLowerCase())
      
    );

    return (
      <div className="App">
        <SearchBox handleChange={e => this.setState({ searchin: e.target.value })} value={this.state.searchin}/>
               <Cardlist monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
