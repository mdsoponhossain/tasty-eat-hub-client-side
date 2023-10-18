

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Food</a>
                <a className="link link-hover">Beverage</a>
                
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
               
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
               
            </nav>
        </footer>
    );
};

export default Footer;