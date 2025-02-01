import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const login = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("You are successfully logged in");
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    return (
        <div style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1667486075273-5d3bf432550b?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100vw", height: "82vh" }}>
            <main className="form-signin w-50 m-auto" style={{ textAlign: "center" }}>
                <form onSubmit={login}>
                    <img
                        className="mb-4"
                        src="https://img.freepik.com/free-vector/modern-welcome-lettering-your-event_1017-50033.jpg?t=st=1733370453~exp=1733374053~hmac=d7e1989f949bfb03624ad0514a23bcdf9b2761d37988f58fc0f580ff940d53f0&w=996"
                        alt=""
                        width={100}
                        height={70}
                        style={{ margin: "10px" }}
                    />
                    <h1 className="h2 mb-3 fw-normal ">Please Login</h1>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                    </div>
                    <div className="form-check text-start my-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="remember-me"
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-success w-100 py-2" type="submit">
                        Login
                    </button>
                    <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
                </form>
            </main>
        </div>
    )
}

export default Login;
