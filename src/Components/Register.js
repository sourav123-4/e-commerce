import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Image } from 'semantic-ui-react'
import { addUser } from '../Redux/Actions/usersAction';
import logo from '../images/logo.jpg';
function Register() {
    const [formErrors, setFormErrors] = React.useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSubmit, setIsSubmit] = React.useState(false);
    const [details,setDetails]=React.useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:"",
    })
    const validate = (values) => {
        const errors = {};
        if (!values.firstname) {
            errors.firstname = "firstname is required!";
          }
        else if (!values.lastname) {
            errors.lastname = "lastname is required!";
          } 
        else if (!values.email) {
            errors.email = "Email is required!";
          } 
        else if (values.password.length <=4) {
            errors.password = "Password is required";
          }
        else if (values.confirmpassword.length <=4) {
            errors.confirmpassword = "Password is required";
          }
          return errors;
    };

    React.useEffect(() => {
        localStorage.setItem("details", JSON.stringify(details));
      }, [details]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(details));
        setIsSubmit(true);
        dispatch(addUser(details));
    }
  return (
    <div>
        <Link to="/"><Image src={logo} size="small"/></Link>
        <hr/>
        <Form >
        <Form.Field inline>
          <label>FirstName : </label>
          <Input 
            placeholder='enter your firstName'
            onChange={e => setDetails({...details, firstname: e.target.value})} value={details.firstname}
          />
          <p> {formErrors.firstname} </p>
        </Form.Field>
        <Form.Field inline>
          <label>LastName : </label>
          <Input 
            placeholder='enter your lastname'
            onChange={e => setDetails({...details, lastname: e.target.value})} value={details.lastname}
          />
          <p> {formErrors.lastname} </p>
        </Form.Field>

        <Form.Field inline>
          <label>Email : </label>
          <Input 
            placeholder='enter your email'
            onChange={e => setDetails({...details, email: e.target.value})} value={details.email}
          />
          <p> {formErrors.email} </p>
        </Form.Field>
        <Form.Field inline>
          <label>Password : </label>
          <Input 
            placeholder='enter your Password'
            onChange={e => setDetails({...details, password: e.target.value})} value={details.password}
          />
          <p> {formErrors.password} </p>
        </Form.Field>
        <Form.Field inline>
          <label>confirm Password : </label>
          <Input 
            placeholder='confirm Password'
            onChange={e => setDetails({...details, confirmpassword: e.target.value})} value={details.confirmpassword}
          />
          <p> {formErrors.confirmpassword} </p>
        </Form.Field>
        <Link to="/"><Button type='submit' onClick={handleSubmit} primary content="Submit" /></Link>
      </Form>
    </div>
  )
}

export default Register