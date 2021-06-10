import React from "react";

class App extends React.Component{
  constructor(props){
    super(props)
    console.log("1. mount-constructor");
  }
  state = {
    count: 0
  };
  add = ()=>{
    this.setState(current=>({ count: current.count + 1 }))
  }
  minus = ()=>{
    this.setState(current=>({ count: current.count - 1 }))
  }
  componentDidMount(){
    console.log("3. mount-component rendered");
  }
  componentDidUpdate(){
    console.log("4. update-component update");
  }
  componentWillUnmount(){
    console.log("5. unMount-component upmount");
  }
    render() { // react 는 자동으로 이 render method 를 실행하려 함
      console.log("2. mount-render");
      return <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;

