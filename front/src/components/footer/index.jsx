function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer-text">Copyright {date} Argent Bank</p>
        </footer>
    );
}

export default Footer
