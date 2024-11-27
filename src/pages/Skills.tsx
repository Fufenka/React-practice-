import { useState } from 'react';
import '../styles/Skills.css';

export default function Skills() {
    const skills = [
        { name: 'JavaScript (JS)', description: 'Основной язык для разработки веб-приложений, поддерживающий динамическое поведение.' },
        { name: 'TypeScript (TS)', description: 'Расширение JavaScript с поддержкой строгой типизации, которое улучшает масштабируемость проектов.' },
        { name: 'React', description: 'Библиотека для создания пользовательских интерфейсов, основанная на компонентах.' },
        { name: 'HTML', description: 'Язык разметки для создания структуры веб-страниц.' },
        { name: 'CSS', description: 'Язык стилей, используемый для оформления веб-страниц.' },
        { name: 'Django', description: 'Фреймворк для создания веб-приложений на Python с акцентом на скорость разработки.' },
        { name: 'Django REST Framework (DRF)', description: 'Дополнение к Django для создания RESTful API.' },
        { name: 'SQLite', description: 'Лёгкая реляционная база данных, встроенная в большинство языков программирования.' },
        { name: '1C', description: 'Платформа для автоматизации бизнес-процессов и учета в компаниях.' },
        { name: 'C++', description: 'Язык программирования общего назначения с высокой производительностью.' },
    ];

    const [selectedSkill, setSelectedSkill] = useState(null);

    const closeModal = () => {
        setSelectedSkill(null);
    };

    return (
        <section id="skills" className="skills-section">
            <h2>My Skills</h2>
            <p>Здесь перечислены основные технологии и инструменты, с которыми я работаю:</p>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="skill-item"
                        onClick={() => setSelectedSkill(skill)}
                    >
                        {skill.name}
                    </li>
                ))}
            </ul>

            {selectedSkill && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>{selectedSkill.name}</h3>
                        <p>{selectedSkill.description}</p>
                        <button onClick={closeModal} className="close-button">
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
