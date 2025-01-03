import logo from "../../assets/img/argentBankLogo.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserProfile, logout} from "../../redux/slices/authSlice.js";
import {useEffect} from "react";

function Header() {
    const dispatch = useDispatch();
    const user = useSelector(state=> state.auth.user);
    const location = window.location.pathname;
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // Tenter de récupérer le profil utilisateur
                await dispatch(fetchUserProfile()); // Gère directement success/erreur
            } catch (error) {
                console.error('Erreur lors de la récupération du profil :', error);
                navigate('/login'); // Redirige en cas d'erreur
            }
        };
        fetchProfile();
    }, [dispatch]);
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
                <div className="wp">
                    {!user && <a className="main-nav-item" href="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>}
                    {user &&
                        <>
                            <a href={"/profile"} className="main-nav-item">
                                <i className="fa fa-user-circle"></i>
                                {user.firstName}
                            </a>
                            <button className="main-nav-item" onClick={() => dispatch(logout())}>
                                <i className="fa fa-sign-out"></i>
                                Sign out
                            </button>
                        </>
                    }
                </div>
            </nav>
        </>
    );
}

export default Header
