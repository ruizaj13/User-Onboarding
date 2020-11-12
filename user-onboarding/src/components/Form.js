import React from 'react'

export default function Form() {
    return(
      <form className='App'>
          <h1>User Onboarding</h1>
          <label>
              Name: <input type='text'/>
          </label>
            <br/>
            <br/>
          <label>
              Email: <input type='text'/>
          </label>
            <br/>
            <br/>
          <label>
              Password: <input type='text'/>
          </label>
            <br/>
            <br/>
          <label>
              Terms of Service: <input type='checkbox'/>
          </label>
            <br/>
          <button>Submit</button> 
      </form>
    )
}
