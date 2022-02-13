import React from "react";
import {Link} from 'react-router-dom'

function NoMatch(){
  return (
    <div className="noM-div">
      <h1 className="white-text text-center">Oops something went wrong...</h1>
    
      <Link to='/' className='col-md-4 col-sm-12' style={{textDecoration: 'none'}}>
        <h3 className="text-center noM-Link">Here Lets take you home</h3>
      </Link>
    </div>
  )
}

export default NoMatch