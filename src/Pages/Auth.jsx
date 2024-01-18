import React from 'react'
import { Link } from 'react-router-dom';
import login from '../assets/login.png'
import Form from 'react-bootstrap/Form';



function Auth({insideRegister}) {
  console.log(insideRegister);
  return (
    <div style={{width:"100%",height:"100vh"}} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75'>
<Link to={'/'}> <i className='fa-solid fa-arrow-left'></i>Back To Home</Link>
<div className="card shadow p-5" style={{backgroundColor:"#9f71f5"}}>
  <div className='row align-items-center'>
<div className='col-lg-4'>
<img className='w-100' src={login} alt="Authentication" />
</div>
<div className='col-lg-6'>
<h1 className='fw-bolder text-light mt-2 ms-2'>
<i style={{height:'41px'}} className='fa-solid fa-hands-holding-circle '><span className='ms-3'>Project Fair</span></i>
</h1>
<h5 className='fw-bolder text-light mt-2 t'> Sign {insideRegister?'Up':'In'}to your Account
</h5>

<Form>
  {
insideRegister&&

<Form.Group className="mb-3" controlId="formBasicName">
       
<Form.Control type="text" placeholder="Enter Name" />

</Form.Group>
}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>

      {
        insideRegister?
        <div>
          <button className='btn btn-light mb-2'>Register</button>
          <p>Already Have a Account? <Link to={'/login'} className='text-light'>Register</Link> </p>
        </div>:
        <div>
          <button className='btn btn-light mb-2'>Login</button>
          <p>New User? Click here to  <Link to={'/register'} className='text-light'>Register</Link></p>
        </div>
      }
         </Form>
</div>
  </div>
</div>
      </div>
    </div>
  )
}
export default Auth