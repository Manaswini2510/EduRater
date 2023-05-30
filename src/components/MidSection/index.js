import react, { Component } from 'react'
import './index.css'
import { useHistory } from "react-router-dom";
import SocialFollow from '../SocialFollow'
// import UniversityProfessors from '../UniversityProfessors'

import UniversityProfessors from '../UniversityProfessors';


const MidSection = props=>{
  const {uni,img,professors,departments,ratings} = props
const history = useHistory();

  const navigateToProfessorsPage = () => {
    // 👇️ navigate to /contacts
    history.push('/universityprofessors',{propOne:props})
  };
  return(
    <div>
      <button className='button-image'>
        <img src={img} className='images' onClick={navigateToProfessorsPage}/>
      </button>
    </div>
  )
  
    
}
export default MidSection