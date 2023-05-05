import React from "react"
import phoneIcon from './assets/phone-icon.png'
import emailIcon from './assets/mail-icon.png'


function Contact(props) {
    
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneIcon} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={emailIcon} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}


export default Contact