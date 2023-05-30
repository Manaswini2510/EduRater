import './index.css'
import { useHistory } from 'react-router-dom'
import FindUniProfessors from '../FindUniProfessors'
const UniversityProfessors = propOne =>{
    const {properties} = propOne
    console.log(propOne)
    const professors = propOne.location.state.propOne.professors
    const uni = propOne.location.state.propOne.uni
    const departments = propOne.location.state.propOne.departments
    const ratings = propOne.location.state.propOne.ratings
    const result = Object.keys(professors).map((key) => professors[key]);
   console.log(ratings)
    const history = useHistory();
  // console.log(professors)
  const findUniversity = () => {
    // 👇️ navigate to /contacts
    history.push('/findUniProfessors',{propThree : professors,university : uni,departments:departments,ratings:ratings})
  };
    // console.log(propOne.location.state.propOne.professors)
    return(
        <div>
            
            <div className='total-page'>
            <div className='top-section-proff top-section d-flex'>
              <h3 className='top-text'>Find a Professor at <a className="anchor-uni" onClick={findUniversity}>{uni}</a></h3>
              <select className="drop-down">
            {result.map((eachProfessor)=>(
                <option>{eachProfessor}</option>
            ))}
            </select>
              <h3 className='down-text'>I want a professor at a different school</h3>
            </div>
            </div>
            {/* </select> */}
        </div>
    )
}
export default UniversityProfessors