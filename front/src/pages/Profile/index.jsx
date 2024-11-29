import {useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {login, fetchUserProfile, updateUserProfile} from '../../redux/slices/authSlice';
import {useNavigate} from "react-router-dom";
function Profile() {
    const [isEdit, setIsEdit] = useState(false);
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state=> state.auth.user);
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);
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
    }, [, dispatch]);
    //console.log(loading);
    //console.log(user);
    const handleUpdate = async (e) => {
        e.preventDefault();
        const newFirstname = firstnameRef.current.value;
        const newLastname = lastnameRef.current.value;
        const name = { firstName: newFirstname, lastName: newLastname };
        try {
            await dispatch(updateUserProfile(name)).unwrap();
            setIsEdit(false);
        } catch (err) {
           console.log(err);
        }
    };
    const handleEditState=(e)=>{
        e.preventDefault();
        setIsEdit(prevState => !prevState);
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                {user && <h1>Welcome back<br/>{user.firstName} {user.lastName} !</h1>}
                {!user && <h1>Welcome back</h1>}
                {isEdit ?
                    <>
                        <form className="form" onSubmit={handleUpdate}>
                            <div className="input-group">
                                <input type="text" name="firstname" ref={firstnameRef} defaultValue={user?.firstName ? user.firstName : ''} />
                                <input type="text" name="lastname" ref={lastnameRef} defaultValue={user?.lastName ? user.lastName : ''}/>
                            </div>
                            <div className="btn-group">
                                <button type="submit" className="btn edit-button">Save</button>
                                <button type="button" className="btn edit-button" onClick={handleEditState}>Cancel</button>
                            </div>
                        </form>
                    </> :
                    <button className="edit-button" onClick={handleEditState}>Edit Name</button>
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    );
}

export default Profile
