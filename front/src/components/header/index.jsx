import logo from "../../assets/img/argentBankLogo.png";

function Header() {
    // [] Ajouter un espace entre l'icone et 'login'
    // [] Changer entre connexion et déconnexion en f() de la session
    return (
        <>
            <nav className="main-nav">
                <a className="main-nav-logo" href="/">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a className="main-nav-item" href="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Header
