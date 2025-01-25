import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Александр. Все права защищены.</p>
            <ul className="footer-links">
                <li><a href="https://github.com/Fufenka" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://vk.com/lmaffinl" target="_blank" rel="noopener noreferrer">VK</a></li>
                <li><a href="https://mail.yandex.ru/compose?mailto=savin.ad@students.dvfu.ru">Email</a></li>
            </ul>
        </footer>
    );
}