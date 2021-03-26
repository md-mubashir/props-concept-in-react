import React from 'react';
import InnerComponent from './InnerComponent';

class OuterComponent extends React.Component{
    constructor(props){
        super();
        this.state={
            username : '',
            fromChild : ''
        }
    }
    updateInput=(event)=>{
        this.setState({
            username : event.target.value
        })
    }
    receiveData=(data)=>{
        this.setState({
            fromChild : data
        })
    }
  
    render(){
        return(
            <React.Fragment>
               <div className="container mt-3">
                   <div className="row">
                       <div className="card">
                           {/* <pre>{ JSON.stringify(this.state) }</pre> */}
                           <div className="card-header bg-dark text-white shadow">
                               <p className="h4">Parent Component</p>
                           </div>
                           <div className="card-body">
                               <div className="form-group">
                                   <form>
                                       <div>
                                           <input type="text" value={this.state.username} onChange={this.updateInput} />
                                           <p>
                                               From Child :  { this.state.fromChild }</p>
                                       </div>
                                   </form>
                               </div>
                           </div>
                           <InnerComponent userinfo={ this.state.username } pullData={ this.receiveData }/>
                       </div>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}
export default OuterComponent;