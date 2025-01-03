import {useState} from "react";
import { useDispatch } from 'react-redux';
import { setRememberMe ,login } from '../../redux/slices/authSlice';
import {useNavigate} from "react-router-dom";
function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false,
    });
    const handleChangeTxt = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleChangeCheckbox = (event) => {
        const { name, checked } = event.target;
        setFormData({
            ...formData,
            [name]: checked,
        });
        dispatch(setRememberMe(checked));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const credentials = {
            email: formData.username,
            password: formData.password,
        }
        const resultAction = await dispatch(login(credentials));

        if (login.fulfilled.match(resultAction)) {
            navigate('/profile');
        }
    };
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" value={formData.username} onChange={handleChangeTxt} name="username" id="username"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={formData.password} onChange={handleChangeTxt} name="password" id="password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" checked={formData.rememberMe} onChange={handleChangeCheckbox} name="rememberMe" id="rememberMe"/>
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
}
export default SignIn
