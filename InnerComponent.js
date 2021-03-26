import React from 'react';

class InnerComponent extends React.Component{
    constructor(props){
        super();
        this.state={
            text : ''
        }
    }
    updateChange=(event)=>{
        this.setState({
            text : event.target.value
        });
        this.props.pullData(this.state.text);
    }
    render(){
        return(
            <React.Fragment>
                <div className="container m-1">
                    <div className="row">
                        <div className="card m-2">
                            <div className="card-header bg-dark text-white">
                                <p className="h4">Child Component</p>
                            </div>
                            <div className="form-group m-2">
                                <form>
                                    <input type="text" value={this.state.text} onChange={this.updateChange} />
                                    <p>
                                        From Parent : { this.props.userinfo }
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default InnerComponent;