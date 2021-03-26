import React from 'react';
import './App.css'
import BindParent from './components/BindParent';





function App() {
  return (
    <div className="App">
    <div className="navbar navbar-dark  bg-dark navbar-expand-sm">
      <a href="/" className="navbar-brand">Checkbox Example..</a>
    </div>
     {/* <UserList/> */}
      {/* <CustomerDetails/> */}
      {/* <UserDetails/> */}
      {/* <PropsExample text="i am from parent" time="morning"/> */}
      {/* <DigitalWatch/> */}
      {/* <ParentComponent/> */}
      {/* <ParentCard/> */}
      <React.Fragment>
                <div className="card mt-4 m-4">
                    <div className="card">
                      <div className="card-header">
                        <p className="h5"> App Component </p>
                      </div>
                      <div className="card-body">
                        <BindParent/>
                      </div>
                      
                    </div>
                </div>
            </React.Fragment>
    </div>
  );
}

export default App;

