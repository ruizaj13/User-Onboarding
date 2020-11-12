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
  
}

function App() {








  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
