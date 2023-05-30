import './index.css'
const RateSchool = propSix =>{
    const universityName = propSix.location.state.propSix
    console.log(propSix)
    return(
        <div className='bg-rate'>
            <h1>Rate : <span className="universityName">{universityName}</span></h1>
            <form className='uni-form'>
                <div className='input-elements'>
                    <label id="reputation">Reputation</label>
                    <input for="reputation" className='input' required/>
                </div>
                <div className='input-elements'>
                    <label id="location">Location</label>
                    <input for="location" className='input' required/>
                </div>
                <div className='input-elements'>
                    <label id="opportunity">Opportunities</label>
                    <input for="opportunity" className='input' required/>
                </div>
                <div className='input-elements'>
                    <label id="facility">Facilities and common Areas</label>
                    <input for="facility" className='input' required/>
                </div>
                <div className='input-elements'>
                    <label id="internet">Internet</label>
                    <input for="internet" className='input' required/>
                </div>
                <div className='input-elements'>
                    <label id="food">Food</label>
                    <input for="food" className='input' required/>
                </div>
                <div className='input-elements'>
                    <label id="safety">Safety</label>
                    <input for="safety" className='input' required/>
                </div>
                <div>
                    <button type='submit' className='submit-button'>Submit Rating</button>
                    </div>
            </form>
        </div>
    )
}
export default RateSchool