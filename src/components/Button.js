import React from 'react'

const Button = ({ onButtonClick}) => {
    return (
        <div className="d-flex justify-content-center">
             <button type="button" className="btn btn-primary" onClick={onButtonClick}>Random User</button>
        </div>
    )
}

export default Button;
