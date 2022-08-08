import './style.css';
const actualYear = new Date().getFullYear();

export const Footer = () => {
    return (
        <div>
            <div className="container"></div>
            <footer>
                <section className="ft-social">
                    <ul className="ft-social-list">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-github"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </section>
                <section className="ft-legal">
                    <ul className="ft-legal-list">
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li>&copy; {actualYear} Copyright KRT Inc.</li>
                    </ul>
                </section>

            </footer>
        </div>
    )
}
