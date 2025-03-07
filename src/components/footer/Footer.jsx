import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
   <div className="footer">
    <div className="waves">
        <div className="wave" id='wave'></div>
        <div className="wave" id='wave'></div>
        <div className="wave" id='wave'></div>
        <div className="wave" id='wave'></div>
    </div>
    <div className="row">
        <div className="col">
            <div className="logo-footer">
                <Link >
                CristalInox
                </Link>
            </div>
        </div>
        <div className="col"></div>
        <div className="col"></div>
    </div>
   </div>
  )
}

export default Footer