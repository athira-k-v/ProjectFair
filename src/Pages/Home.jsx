import React from 'react'
import fp from '../assets/fp.png'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/Projectcard'
function Home() {

  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate('/projects')
  }
  return (
    <>
      <div style={{height:'100vh',backgroundColor:'#9f71f5'}} className='w-100 d-flex justify-content-center align-items-center rounded'>
        <div className='container'>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 style={{fontSize:'80px'}} className='fw-bolder text-light mb-3'>
                  <i style={{height:'85px',marginRight:"30px"}} className='fa-solid fa-hands-holding-circle'></i>
                  Project Fair
                </h1>
                <p style={{textAlign:'justify'}}> 
                    One stop destination for all software development projects. Where user can add and manage their projects. As well as access all projects available in our website... what are you waiting for!!!
                </p>
                <Link className='btn btn-warning mt-3' to={'/login'} style={{textTransform:' none'}}>Starts To Explore
                <i className='fa-solid fa-arrow-right'></i>
                </Link>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <img className='img-fluid' src={fp} alt="" /></div>  
            </div>
        </div>
      </div>
      <div className='mt-5'>
        <h1 className='text-center' >Explore Our Project</h1>
        <marquee behavior="" direction="">
          <div className='d-flex justify-content-between'>
            <div className='project me-5'>
             <ProjectCard></ProjectCard>
            </div>
          </div>
        </marquee>
        <div className='text-center'>
              <button className='btn btn-link' onClick={handleNavigate} style={{textDecoration:'none',textTransform:' none'}}>View More Project</button>
            </div>
      </div>
    </>
  )
}

export default Home