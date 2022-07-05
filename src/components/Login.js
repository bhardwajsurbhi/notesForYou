import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'


const Login = (props) => {
    const [credentials,setCredentials ] = useState({email: "", password:""})
    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        //using fetch api to hit endpoint
       
        //const response = await fetch("http://localhost:5000/api/auth/login" , {
        const response = await fetch("/api/auth/login" , {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
          }); 
          const json = await response.json();
          console.log(json);
          if(json.success){
            //save the uauth token and redirect (using use history hook to redirect)
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in Successfully", "success")
            navigate("/");
        }
          else{
            props.showAlert("Invalid Details", "danger")
          }
        }
          const onChange=  (e)=>{
            //making all the changes in name equal to value being written
             setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <div className="container mt-3">
            <h2 className=" my-3">Login to continue making your Notes</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={credentials.password} onChange={onChange} name="password" className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
