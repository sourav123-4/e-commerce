import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { Form, Button, Checkbox, Input } from 'semantic-ui-react'
import {fetchAllUsers} from '../Redux/Actions/usersAction';
function Login() {
  const [details, setdetails] = useState({email: "", password: ""});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const state = useSelector(state => state.user.users)
  let navigate = useNavigate();
  let dispatch=useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required!";
      } 
    else if (values.password.length <=4) {
        errors.password = "Password is required";
      }
      return errors;
  };

  React.useEffect(()=>{
    dispatch(fetchAllUsers());
  },[])

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
  }, [details]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setFormErrors(validate(details));
    setIsSubmit(true);
    console.log(details);    
    state.map((item)=>{
      if(item.email === details.email && item.password === details.password){
        console.log("email====",details.email);
        navigate("/main");
      }
    })
  }

  return (
    <div>
      <Form >
        <Form.Field inline>
          <label>Email : </label>
          <Input 
            placeholder='enter your email'
            onChange={e => setdetails({...details, email: e.target.value})} value={details.email}
          />
          <p> {formErrors.email} </p>
        </Form.Field>
        <Form.Field inline>
          <label>Password : </label>
          <Input 
            placeholder='enter your Password'
            onChange={e => setdetails({...details, password: e.target.value})} value={details.password}
          />
          <p> {formErrors.password} </p>
        </Form.Field>
        <Button type='submit' onClick={handleSubmit}>Submit</Button>
        <p>Not a user ? <Link to="/register">Register Now</Link></p>
      </Form>
    </div>
  )
}

export default Login