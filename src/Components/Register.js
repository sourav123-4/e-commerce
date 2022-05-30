import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
function Register() {
    const [formErrors, setFormErrors] = React.useState({});
    const [details,setDetails]=React.useState({
        firstname:"",
        lastname:"",
        email:[],
        password:[],
        confirmpassword:[],
    })
  return (
    <div>
        <Form >
        <Form.Field inline>
          <label>Firstname : </label>
          <Input 
            placeholder='enter your firstName'
            onChange={e => setDetails({...details, firstname: e.target.value})} value={details.firstname}
          />
          <p> {formErrors.firstname} </p>
        </Form.Field>
        <Form.Field inline>
          <label>Lasttname : </label>
          <Input 
            placeholder='enter your lastname'
            onChange={e => setDetails({...details, lasttname: e.target.value})} value={details.lasttname}
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
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default Register