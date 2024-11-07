import icon_chat from "../../assets/img/icon-chat.png";
import icon_money from "../../assets/img/icon-money.png";
import icon_security from "../../assets/img/icon-security.png";
import {useState} from "react";

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
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
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Données du formulaire:\n${JSON.stringify(formData, null, 2)}`);
        //fetch();
    };
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="text" value={formData.email} onChange={handleChangeTxt} name="email" id="email"/>
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

/*
<!-- PLACEHOLDER DUE TO STATIC SITE -->
<a href="./user.html" className="sign-in-button">Sign In</a>
<!-- SHOULD BE THE BUTTON BELOW -->
<!-- <button class="sign-in-button">Sign In</button> -->
<!--  -->
*/
export default SignIn
