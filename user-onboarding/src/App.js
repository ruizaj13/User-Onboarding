import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import * as yup from 'yup';
import axios from 'axios';
import schema from './Validation/schema';
import './App.css';

const initialFormValues = {
  name:'',
  email:'',
  password:'',
  tos: false,
}

const initialFormErrors ={
  email: '',
  password: '',
}

const initialUsers = []
const initialDisable = true


function App() {

    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [buttonDisable, setButtonDisable] = useState(initialDisable);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

  //start event handlers

    const onSubmit = event => {

      event.preventDefault()

      axios
        .post('https://reqres.in/api/users', formValues)

        .then( res => {
          setUsers(res.data);
        })

        .catch(err=>console.log('peepee poopoo'))

        .finally(() => {
          setFormValues(initialFormValues)
        })
    };

    const inputChange = (name, value) => {
      setFormValues({
        ...formValues,
        [name]: value
      })
    }

    useEffect(() => {
      schema.isValid(formValues)
        .then(valid => {
          setButtonDisable(!valid)
        })
    }, [formValues])




  //end event handlers

   

   





  return (
    <div className="App">
      <Form users={users} disable={buttonDisable} inputValues={formValues} change={inputChange} onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
