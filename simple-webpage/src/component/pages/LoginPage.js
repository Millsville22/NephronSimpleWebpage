import React, { useState } from 'react'

function LoginPage({ Login, error }) {
    const [details, setDetails] = useState({email: "", userName: "", password: ""});

    const submitHandle = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandle}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !== "") ? ( <div className="error">{error}</div> ) : "" }
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" 
                        onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>

                <div classname="form-group">
                    <label htmlFor="userName">Username:</label>
                    <input type="text" name="userName" id="userName"
                        onChange={e => setDetails({...details, userName: e.target.value})} value={details.userName} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password"
                        onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input type="submit" value="Login" />

            </div>
        </form>
    )
}

export default LoginPage