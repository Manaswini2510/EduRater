import { useImperativeHandle } from 'react'
import './index.css'
import {useHistory} from 'react-router-dom'
const KnowProfessor = propSix =>{
    const {givenProps} = propSix
    console.log(propSix)
    const profName = propSix.location.state.propSix.eachProf
    const profRating = propSix.location.state.propSix.ratings[profName]
    const profDepartment = propSix.location.state.propSix.departments[profName]
    const universityName =propSix.location.state.propSix.universityName
    console.log(givenProps)

    const history = useHistory()
    const rateProfessor = () =>{
        history.push('/rateProfessor',{profName : profName,profDepartment:profDepartment , universityName: universityName})
    }

    return(
        <div className='profInfoCard'>
            <div className='profInfo'>
                <h1 className="heading"><span className="prof-rating">{profRating}</span>/5</h1>
                <h1 className='heading'>{profName}</h1>
                <p>{5-profRating} level of Difficulty</p>
                <p>professor in the {profDepartment} department at {universityName}</p>
                <button className='rateProf' onClick={rateProfessor}>Rate Professor {profName}</button>
            </div>
        </div>
    )
}
export default KnowProfessor