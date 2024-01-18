import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({insideDashBoard}) {
  return (
    <div >
 <Navbar style={{width:"100%",backgroundColor:'#9f71f5',position:'fixed',top:"0px",zIndex:5}}  >
        <Container>
          <Navbar.Brand >
         <Link to={'/'}style={{textDecoration:'none',color:"white"}} >
            <i className="fa-brands fa-stack-overflow fa-bounce fa-2xl "></i>{' '}
             <b style={{fontSize:"35px",fontFamily:'Georgia, serif'}}> Project Fair</b>
         </Link>
          </Navbar.Brand> 
{
insideDashBoard&&

<div className='ms-auto'>
  <button style={{textDecoration:'none'}} className='btn btn-link text-light fw-bolder'><i className='fa-solid fa-sign-out me-2'></i>LogOUt</button>
</div>


}

        </Container>
      </Navbar>

    </div>
  )
}

export default Header