import React from 'react'



export default function Form(props) {

    const {onSubmit, change, inputValues, disable, users} = props

    const onChange = evt => {
        const {name, type, value, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return(
    <div>
      <form onSubmit={onSubmit}>
          <h1>User Onboarding</h1>
          <label>
              Name: <input onChange={onChange} value={inputValues.name} type='text' name='name' />
          </label>
            <br/>
            <br/>
          <label>
              Email: <input onChange={onChange} value={inputValues.email} type='text' name='email' />
          </label>
            <br/>
            <br/>
          <label>
              Password: <input onChange={onChange} value={inputValues.password} type='password' name= 'password' />
          </label>
            <br/>
            <br/>
          <label>
              Terms of Service: <input onChange={onChange} checked={inputValues.tos} type='checkbox' name='tos'/>
          </label>
            <br/>
          <button disabled={disable}>Submit</button> 
      </form>
          <div>
            {users.map((item) => (
              <div>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.password}</p>
              </div>
            ))}
          </div>
    </div>
    )
}
