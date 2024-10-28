import icon_chat from "../../assets/img/icon-chat.png";
import icon_money from "../../assets/img/icon-money.png";
import icon_security from "../../assets/img/icon-security.png";

function SignIn() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label
                        ><input type="text" id="username"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label
                        ><input type="password" id="password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
                    >Remember me</label
                    >
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
