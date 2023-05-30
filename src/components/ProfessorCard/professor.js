import './professor.css'
import {useHistory} from 'react-router-dom'
const ProfessorCard = propFive =>{
    const {departments,eachProf,universityName,ratings} = propFive
    console.log(universityName)
    const history = useHistory();

  const knowProfessor = () => {
    // 👇️ navigate to /contacts
    history.push('/knowProfessor',{propSix: propFive})
  };
    
    return(
        <div className='card-bg'>
            {/* <h1>{departments[eachProf]} {eachProf}</h1> */}
            <button className='card-button' onClick={knowProfessor}>
            <div className="eachProfessorCard">
                
                    <div className='rating-box'>
                        <h4 className='quality-heading'>QUALITY</h4>
                        <div className='rating'>
                            <h1>{ratings[eachProf]}</h1>
                        </div>
                        <p>6 ratings</p>
                    </div>
                    <div className='profDetails'>
                        <h1 className='profName'>{eachProf}</h1>
                        <p>{departments[eachProf]}</p>
                        <h3 className='profUni'>{universityName}</h3>
                    </div>
                    
            </div>
            </button>
        </div>
    )
}
export default ProfessorCard