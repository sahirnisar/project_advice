import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      advice : ''
    }
  }



  fetchAdvice =()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((res) =>
      {
       this.setState({advice : res.data.slip.advice})
      })
     .catch((error)=> {
      console.log(error);
     })
  }
  render(){
    const {advice} =this.state;
  return (
    
       <div className='app'>
          <div className='card'>
             <h1 className='header'>{advice}</h1>
             <button className='button' onClick={this.fetchAdvice}>
              <span>Give me Advice</span>

             </button>
          </div>

       </div>

  );
}
}
export default App;
