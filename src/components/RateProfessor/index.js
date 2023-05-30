import './index.css'
const RateProfessor = propSeven =>{
    const profName = propSeven.location.state.profName
    const profDepartment = propSeven.location.state.profDepartment
    const universityName = propSeven.location.state.universityName
    console.log(propSeven)
    return(
        <div className='entire-prof-form'>
            <h1>Rate : {profName}</h1>
            <h3>{profDepartment} <a href="/initialpage">{universityName}</a></h3>
            <div className='complete-form'>
                <div className='prof-inputs'>
                <form>
                        <div className='prof-input'>
                            <label className='label'>Select Course Code</label>
                            <input className='input input-prof' placeholder='Enter Course Code' required/>
                        </div>
                        <div className='input-elements'>
                            <label className='label'>Rate Your Professor</label>
                            <input placeholder="Out of 5" className='input input-prof' required/>
                        </div>
                        <div className='input-elements'>
                            <label className='label'>How difficult was this Professor</label>
                            <input placeholder="Out of 5" className='input input-prof' required/>
                        </div>
                        <div className='input-elements'>
                            <label className='label'>Write a Review</label>
                            <textarea className='input-text-area'></textarea>
                        </div>
                        <button type="submit" className='button button-submit'>Submit Rating</button>
                </form>
                </div>
            </div>
        </div>
    )
}
export default RateProfessor