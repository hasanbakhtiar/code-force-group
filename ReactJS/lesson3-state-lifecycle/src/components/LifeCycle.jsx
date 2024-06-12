import React, { Component } from 'react'

class Box  extends Component{
    componentWillUnmount(){
        alert('im deleted')
    }
    
    render(){
        return(
            <div style={{width:"100px",height:"100px",backgroundColor:"red"}}></div>
        )
    }
}




class LifeCycle extends Component {
    constructor(){
        super();
        this.state={
            text:"Hello React",
            display:true
        }
    }
    // componentDidMount(){
    //     this.setState({text:"Im learn React JS"})
    // }
    componentDidUpdate(){
        // console.log('start');
        document.querySelector('h1').style.color = 'red';
    }
    
  render() {
    let info;
    if (this.state.display) {
        info = <Box />
    }
    return (
      <div>
        {info}
        <h1>{this.state.text}</h1>
        <button className={`btn btn-warning`} onClick={()=>{this.setState({text:"Im learn React JS"})}}>change</button>
        <button className='btn btn-danger ms-3' onClick={()=>{this.setState({display:false})}}>delete</button>
      </div>
    )
  }
}

export default LifeCycle