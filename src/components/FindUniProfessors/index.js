import { useHistory } from "react-router-dom";
import './index.css'
const FindUniProfessors = professors =>{
    const propThree = professors
    console.log(professors)
    const allProffInUni = propThree.location.state.propThree
    const universityName = propThree.location.state.university
    const departments = propThree.location.state.departments
    const ratings = propThree.location.state.ratings
    // console.log(departments)
    const history = useHistory();
  // console.log(professors)
  const viewAllProfessors = () => {
    // 👇️ navigate to /contacts
    history.push('/allProfessors',{propFour : allProffInUni,universityName:universityName,departments:departments,ratings:ratings})
  };
  const RateSchool = () =>{
    history.push('/rateSchool',{propSix:universityName})
  }
    return(
        <div className="FindUniProfBg">
          <h1 className="heading">{universityName}</h1>
            <p className="viewProfLink"><a onClick={viewAllProfessors}>View all professors</a></p>
            <button className="rateSchool button" onClick={RateSchool}>Rate this school</button>
        </div>
    )
}
export default FindUniProfessors