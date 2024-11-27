import '../styles/Home.css'
import profilePhoto from '../assets/photo1.jpg';

export default function Home() {
    return (
        <section id="home" className="home-section">
            <div className="intro">
                <h1>Привет! Меня зовут Александр</h1>
                <p>
                    Я студент системного программирования и будущий разработчик. Работаю с JavaScript, TypeScript, React, Django
                    и другими современными технологиями. Моя цель — стать лучше с каждым днем.
                </p>
            </div>
            <div className="home-image">
                <img src={profilePhoto} alt="Александр - разработчик" />
            </div>
        </section>
    );
}