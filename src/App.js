import React, { Component } from 'react';
import './App.css'
import names from './names';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      indent: 0,
      indentM: 0,
      num: 0
    }
  }
  render(){
    const {indent, indentM, num} = this.state;
  return (
    <div className="App">
      <div className="mini-list">
      <ul style={{marginLeft: -indentM + `px`}}>{names.map((name, i) => <li key={i} className={num === i ? 'active' : ''} onClick={e =>{
if(num !== i){
  this.setState({
    indent: 100 * i,
    indentM: i < num ? indentM - 112 : indentM + 112,
    num: i
  })
}

        
}}><img src={require(`./img/${name}.jpg`)} alt={name}/></li>)}</ul>
      </div>
      <div className="big-list">
      <div className="big-img">
      <div className="left" onClick={()=>{
        if(indent > 99){
          this.setState({
            indent: indent - 100,
            indentM: indentM - 112
          })
        }
  }}>	&#8592;</div>
     <div className="content">
     <ul style={{marginLeft: -indent+ `%`}}>{names.map((name, i) => <li key={i} >
     <div className="container"><img src={require(`./img/${name}-b.jpg`)} alt={name}/></div></li>)}
     </ul></div>
      <div className="right" onClick={()=>{
        if(indent < (100 * (names.length - 1))){
          this.setState({
            indent: indent + 100,
            indentM: indentM + 112
          })
        }
}}>&#8594;</div>
      </div>
      </div>
    </div>
  );
}
}

export default App;
