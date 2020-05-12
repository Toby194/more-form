import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
        if(event.target.value < 2) {
            setFirstNameError("First Name must be 2 characters or more!");

        }
        else {
            setFirstNameError("");
        }
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
        if(event.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or more!");

        }
        else {
            setLastNameError("");
        }
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
        if(event.target.value.length < 5) {
            setEmailError("Email must be 5 characters or more!");
        }
        else {
            setEmailError("");
        }
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
        if(event.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or more!");
        }
        else {
            setPasswordError("");
        }
    }
    
    const handleConfirmpassword = (event) => {
        setConfirmPassword(event.target.value);
        if(event.target.value !== password) {
            setPasswordError("Password don't match");
        }
        else {
            setPasswordError("");
        }
    }
    return (
        <form onSubmit={ (event) => event.preventDefault()}>
        <div>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" onChange={ handleFirstName } />
        {
            firstNameError ?
            <p>{ firstNameError }></p>:
            ''
        }
        </div>
        <div>
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" onChange={ handleLastName } />
            {
                lastNameError ?
                <p> { lastNameError }</p> :
                ''
            }
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" onChange={ handleEmail } />
            {
                emailError ?
                <p>{ emailError }</p> :
                ''
            }
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="text" onChange={ handlePassword } />
            {
                passwordError ?
                <p>{ passwordError }</p> :
                ''
            }
        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="text" onChange={ handleConfirmpassword } />
           
        </div>

        </form>

    );

};

    
export default UserForm;