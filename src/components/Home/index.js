
import { Link,useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Login from '../Login'

const Home = () =>{
  const history = useHistory();

  const handleNavigation = (path) => {
    if (path === '/' && history.location.pathname === '/') {
      // If current route is already the home route, do nothing
      return;
    }
    history.push(path);
  };


  return(
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <button onClick={() => handleNavigation('/')}>Home</button>
        </li>
        <li class="nav-item">
        <button onClick={() => handleNavigation('/initialPage')}>InitialPage</button>
        </li>
      </ul>
    </div>
  </nav>
  </div>

  )
}
export default Home