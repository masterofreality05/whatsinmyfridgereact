import React, { useState, useContext } from 'react';
import {useFormik} from 'formik';
import basicLoginSchema from '../schemas/loginSchema';
import axios from 'axios';
import AppContext from '../AppContext';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../helpers/config';
import '../App.css';
const inputs = ["username", "password"]
const initalializers =  {
    username:"",
    password:"",
}

function LoginForm(){
    const navigate = useNavigate();
    let {setUser} = useContext(AppContext) 
    let [failedValidation, setFailedValidation] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (Object.keys(errors).length > 0){
            alert("please fill out all fields")
            setFailedValidation(true)
        } else {
            setFailedValidation(false)
            let loggedIn = await axios.post(
                `${baseURL}auth/token`
                ,  
                    {
                        ...values
                    },    
            )
            console.log(loggedIn.data)
            let user = await axios.get(`${baseURL}users/${values.username}`)
            console.log(user.data.user.id)
            setUser({username: values.username,
                id: user.data.user.id,
                token :loggedIn.data.token})
        } 
        navigate("/")        
            }

    let {errors, touched, values, handleChange, handleBlur} = useFormik({
        initialValues: initalializers,
        validationSchema: basicLoginSchema,
       
    });

    return(
        <>
        <h1 className='amatic-header'>Login to existing user account</h1>
        <form autoComplete='off' onSubmit={handleSubmit}>
        {inputs.map(word => 
        <div className='form-group'>
            <label htmlFor={word}>{word}
            <input type="text" 
             id={word} 
             value={values.word}
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder={word}
             className={errors.word? 'input-error form-control': "form-control"}
            ></input>
            {failedValidation? <p className='text-danger'>{errors[word]}</p>: null}   
            {touched[word] && errors[word] && (<p className='invalid-feedback'>{errors[word]}</p>)}
            </label>
            </div>  
            )}
      
        <button type='submit'>Submit!</button>
        </form>
        </>
    )
} 
 export default LoginForm;