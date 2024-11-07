import {useRef, useState} from "react";


function Profile() {
    // [] Adapter à la slice de userSLice
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState({firstname:'Tony',lastname:'Jarvis'});
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);

    const handleEditState=(e)=>{
        e.preventDefault();
        setIsEdit(prevState => !prevState);
    }
    const handleName = (e) => {
        e.preventDefault();

        const newFirstname = firstnameRef.current.value;
        const newLastname = lastnameRef.current.value;

        setName({ firstname: newFirstname, lastname: newLastname });
        setIsEdit(false);
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br/>{name.firstname} {name.lastname} !</h1>
                {isEdit ?
                    <>
                        <form className="form" onSubmit={handleName}>
                            <div className="input-group">
                                <input type="text" name="firstname" ref={firstnameRef} defaultValue={name.firstname}/>
                                <input type="text" name="lastname" ref={lastnameRef} defaultValue={name.lastname}/>
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
