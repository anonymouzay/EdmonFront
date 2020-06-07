import React, {useState} from 'react';

const Form = () => {

    const [form, setForm] = useState({email:"", phone:""});

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    return(
        <div className = 'FormInner' >
            <h3 className = 'FormTitle' > Enter your Phone and Email</h3>
            <form className = 'Form' >
                <input placeholder = 'Enter Email' className = 'FormInput' type = 'email' value = {form.email} name = 'email' onChange = {changeHandler}  ></input>
                <input placeholder = 'Enter Phone' className = 'FormInput' type = 'text' value = {form.phone} name = 'phone' onChange = {changeHandler}  ></input>
                <button className = 'FormBtn'  type = 'submit' disabled = {true} >Submit</button>
            </form>
        </div>
    );
}

export default Form;