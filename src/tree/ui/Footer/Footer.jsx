import './style.css';
const actualYear = new Date().getFullYear();

export const Footer = () => {
    return (
        <body>
            <div className="container"></div>
            <footer>
                <section class="ft-social">
                    <ul class="ft-social-list">
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-github"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </section>
                <section class="ft-legal">
                    <ul class="ft-legal-list">
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li>&copy; {actualYear} Copyright KRT Inc.</li>
                    </ul>
                </section>

            </footer>
        </body>
    )
}
