import ProfileHeader from "./profileHeader.jsx";
import ProfileTransactions from "./profileTransactions.jsx";
function Profile() {
    return (
        <main className="main bg-dark">
            <ProfileHeader/>
            <ProfileTransactions/>
        </main>
    );
}

export default Profile
