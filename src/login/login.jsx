import React, { useState } from "react";
import './login.css';
import { FaTimes } from 'react-icons/fa';
import axios from "axios";
import { FaSpinner } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ onClose }) {

    const [formData, setFormData] = useState({ email: '', staffId: '', password: '', role: 'Admin' });
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);  

    const handleUnchange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            let response = await axios.post('https://attendance-app-m0oa.onrender.com/api/admin/login', {
                "email": formData.email,
                "password": formData.password
            });
            toast.success('Login successful');
            setIsLoading(false);
        } catch (error) {
            console.log(error.response.data);
            setIsLoading(false);
            toast.error(error.response.data.message);
        }
    };

    const createNewUser = async () => {
        try {
            setIsLoading(true);
            let response = await axios.post('https://attendance-app-m0oa.onrender.com/api/admin/register', {
                "email": formData.email,
                "staffId": formData.staffId,
                "password": formData.password,
                "role": formData.role
            });
            toast.success('Sign up successful');
            setIsLoading(false);
        } catch (error) {
            console.log(error.response.data);
            setIsLoading(false);
            toast.error(error.response.data.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            handleLogin();
        } else {
            createNewUser();
        }
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <h2>{isLogin ? 'Login' : 'Sign up'}</h2>
                <FaTimes className="close-icon" onClick={onClose} />
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} required onChange={handleUnchange} />
                </div>

                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="staffId">Staff ID</label>
                        <input type="text" id="staffId" name="staffId" value={formData.staffId} required onChange={handleUnchange} />
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} required onChange={handleUnchange} />
                </div>

                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select id="role" name="role" value={formData.role} onChange={handleUnchange} required>
                            <option value="">Select your role</option>
                            <option value="admin">Admin</option>
                            <option value="staff">Staff</option>
                            <option value="manager">Manager</option>
                        </select>
                    </div>
                )}

                <button type="submit" className="login-button">
                    {isLoading ? <FaSpinner className="spinner" /> : (isLogin ? 'Login' : 'Sign up')}
                </button>
            </form>

            <div className="login-footer">
                <p>{isLogin ? "Don't have an account? " : "Already have an account? "}
                    <a href="#" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Sign up" : "Log in"}
                    </a>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
