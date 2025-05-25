import React from 'react'
import { FiExternalLink } from 'react-icons/fi';
 const Footer = () => {
  return (
    <div className='w-100 mb-3'>
            <hr style={{height:'1px',background:'white',border:'none'}}/>
            <div className='d-flex flex-column flex-md-row justify-content-between'>
              <div>
                <p style={{color:'gray',textAlign:"center",marginBottom:'0px'}} className='mb-4 mb-md-0'>&copy; 2025 Deepshik M.</p>
              </div>
              <div className='d-flex gap-4 flex-column flex-md-row'>
                <div className='d-flex align-items-center justify-content-center gap-2'>
                  <a href="https://www.linkedin.com/in/deepshik-m/" target='_blank' style={{textDecoration:'none',color:"white",fontSize:"16px",textAlign:"center"}}>Linkedin</a>
                  <FiExternalLink size={16} />
                </div>
                <div className='d-flex align-items-center justify-content-center gap-2'>
                  <a href="https://github.com/Deepshik11?tab=repositories" target='_blank' style={{textDecoration:'none',color:"white",fontSize:"16px",textAlign:"center"}}>Github</a>
                  <FiExternalLink size={16} />
                </div>
                <div className='d-flex align-items-center justify-content-center gap-2'>
                  <a href="https://www.figma.com/@deepshikm" target='_blank' style={{textDecoration:'none',color:"white",fontSize:"16px",textAlign:"center"}}>Figma</a>
                  <FiExternalLink size={16} />
                </div>
                <div className='d-flex align-items-center justify-content-center gap-2'>
                  <a href="https://www.instagram.com/_deepshik.17_/?next=%2F" target='_blank' style={{textDecoration:'none',color:"white",fontSize:"16px",textAlign:"center"}}>Instagram</a>
                  <FiExternalLink size={16} />
                </div>
              </div>
            </div>
          </div>
  )
}
export default Footer;
