import './index.css'
import ProfessorCard from '../ProfessorCard/professor'
const AllProfessors = allProf =>{
    const propFour = allProf.location.state.propFour
    const universityName = allProf.location.state.universityName
    const departments = allProf.location.state.departments
    const ratings = allProf.location.state.ratings
    console.log(departments)
    const allDepartments = [
        "Computer Science","Electronics and Communication Engineering","Electrical and Electronic Engineering","Civil Engineering","Mechanical Engineering","BioTechnology"
    ]
    return(
        <div className="allProfessors">
            <h1>{propFour.length} professors at {universityName}</h1>
            <h1 className='department'>Departments</h1>
            <select>
                {allDepartments.map((eachDepartment)=>(
                    <option>{eachDepartment}</option>
                ))}
            </select>
            {
                propFour.map((eachProf)=>(
                    <ProfessorCard eachProf={eachProf} departments={departments} universityName={universityName} ratings={ratings}/>
                ))
            }
            
            
           {/* <select>
                {propFour.map((eachProf)=>(
                    <option>{eachProf}</option>
                ))}
           </select> */}
        </div>
    )
}
export default AllProfessors