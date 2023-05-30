import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const SocialFollow= ()=>{
    return(
        <div>
            <div>
                <a href="https://www.facebook.com/" 
                ><FontAwesomeIcon icon={faFacebook} className='icon' /></a>
                <a href="https://www.twitter.com/" 
                ><FontAwesomeIcon icon={faTwitter} className='icon'/></a>
                <a href="https://www.instagram.com/" 
                ><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
            </div>
            <div>
                <button className="button">Login</button>
                <button className="button signUp">Sign Up</button>
            </div>
        </div>
    )
  }
  export default SocialFollow