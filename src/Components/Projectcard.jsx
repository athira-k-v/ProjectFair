import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';

function Projectcard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className='shadow mb-5 btn' style={{ width: '25rem' }} onClick={handleShow}>
        <Card.Img variant="top" src="https://i.postimg.cc/t4ZxBbZz/Top-6-Project-Management-Trends-in-2021.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img className='img-fluid' src="https://i.postimg.cc/t4ZxBbZz/Top-6-Project-Management-Trends-in-2021.png" alt="" />
            </Col>
            <Col sm={12} md={6}>
              <h2 className='fw-bolder text-warning'>Title</h2>
              <p><b>Project Overview  :</b> <span >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quaerat similique voluptates alias aliquam fugiat illo ullam eaque rem ipsa, cum facere iure soluta eligendi, odit quidem commodi. Beatae, assumenda.</span></p>
              <p><b>Language Used :</b>  <span className='text-danger'><b>HTML,CSS,JS</b></span></p>
            </Col>
          </Row>
          <div className='mt-3'>
            <a href="https://github.com/athira-k-v/navbar" target='_blank' style={{cursor:'pointer',color:"black"}} ><i style={{height:'35px'}} className="fa-brands fa-github fa-2x"></i></a>
            <a href="https://counter-app-bydn.vercel.app/" target='_blank' style={{cursor:'pointer',color:"black"}} className='ms-5'><i class="fa-solid fa-link fa-2x"></i></a>

          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Projectcard