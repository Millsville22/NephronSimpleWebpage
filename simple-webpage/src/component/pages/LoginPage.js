import React from 'react'

function LoginPage() {
    return (
        <form>
            <div className="form-inner">
                <h2>Login</h2>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email"/>
                </div>

                <div classname="form-group">
                    <label htmlFor="userName">Username:</label>
                    <input type="text" name="userName" id="userName"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password"/>
                </div>

            </div>
        </form>
    )
}

export default LoginPage