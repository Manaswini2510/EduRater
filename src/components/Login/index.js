import { Link,useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Login = () =>{

  const noAccount = () =>{
    alert("Create an Account on EduRater")
  }
  const changePassword = () =>{
    alert("If you've forgot your change the Password")
  }

  const history = useHistory();

  const navigateToInitialPage = () => {
    // 👇️ navigate to /contacts
    history.push('/initialPage')
  };


  return(
    <div className="total-page-login">
    <div className="bg">
        <h1>EduRater</h1>
        <h1>Good to see you again</h1>
        <div className="loginBox">
          <div className="inputs">
            <label id="email">Your Email</label>
            <input placeholder="Enter your Email" for="email" type="email" className="input" required/>
          </div>
          <div className="inputs">
            <label id="password">Your Password</label>
            <input placeholder="Enter the Password" type="password" for="password" className="input" required/>
            </div>
            <button className="signIn" onClick={navigateToInitialPage}>Sign In</button>
            <div className="anchors">
              <div>
                <a href="#" className="anchor" onClick={noAccount}>Don't have an account</a>
                </div>
              <div>
                <a href="#" onClick={changePassword}>Forgot Password</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )

}
export default Login