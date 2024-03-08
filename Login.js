import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export class Login extends Component {
  render() {
    return (
      <div className='row' >
        <div className='col-12'>
          menu bar
        </div>
        
        <div className ='col-6 border-success rounded border border-succes'>
        <form action=''>
        <h4 className='mt-5 d-flex ms-3 color:success text-success'>LOGIN TO YOUR ACCOUNT</h4>
        
         <div className='mt-4'>
           
            <input type='username'className='border-success p-2 m-2 bg-light rounded' placeholder='Username' />
         </div>
         <div className='m-3'>
            <input type='Password' className='border-success p-2 mb-3 bg-light rounded text-dark' placeholder='Password' />
         </div>
          <button className='p-2 rounded m-2 text-success'>Login</button>
          <p className='p-2 m-2 text-success'>No account? <a href='https://www.figma.com/file/fUKHjEWKdeoZByL94wCH3q/SmartMavuno-UI?type=design&node-id=764-775&mode=design&t=qkfr93b8qPh1Pt2r-0'> Create a new Account</a> </p>
          </form>
          </div>
          <div className=' col-6  rounded border border-succes'>
          <h3>Trending</h3>
        </div>
        <div className='col-12 h-25'>
       <h1>storyline smartmavuno</h1>
        </div>
        <div className='col-12 bg-color-success h-25'>
          <div >
            <div>
            <h1>footer part one</h1>
            </div>
            <div >
              <h1> footer part 2</h1>
            </div>
          </div>
          
        </div>
           </div>
         
    )
  }
}

export default Login