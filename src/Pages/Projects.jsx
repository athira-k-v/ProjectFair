import React from 'react'
import Header from '../Components/Header'
import Projectcard from '../Components/Projectcard'
import { Col, Row } from 'react-bootstrap'

function Projects() {
  return (
   
    <>
       <Header></Header>

     <div style={{marginTop:'100px'}} className='container-fluid'> 
      <div className='d-flex justify-content-center-between'>
         <h1 className='ms-5'>All Projects</h1>
         <input style={{width:'300px'}} className='rounded p-2 ms-auto' type="text" placeholder='Search Projects by Language  Used' />
      </div>
<Row className='mt-5'>
  <Col sm={12} md={6} lg={4}>
    <Projectcard></Projectcard>
  </Col>
</Row>

     </div>
       </>
  )
}

export default Projects