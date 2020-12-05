import React, { Component } from 'react'

class Additems extends Component{
    state = {
        name:'',
        age:''
    }
    handelchange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        // console.log(this.state)
    }
    handelsubmit = (e) => {
   e.preventDefault();
   this.props.addItem(this.state)
   this.setState({
       name:"",
       age:''
   })
    }
    render(){
        return(
            <div>
              
              <form onSubmit={this.handelsubmit}>
                  <input type='text' placeholder='enter name' id='name' onChange={this.handelchange} value={this.state.name}  />
                  <input type='number' placeholder='enter age' id='age' onChange={this.handelchange} value={this.state.age}  />
                  <input type='submit' value='submit' />
              </form>
            </div>
        )
    }
}
export default Additems