import { useState } from 'react';
import '../styles/Skills.css';

export default function Skills() {
    const skills = [
        { id : 1, name: 'JavaScript (JS)', description: 'Основной язык для разработки веб-приложений, поддерживающий динамическое поведение.' },
        { id : 2, name: 'TypeScript (TS)', description: 'Расширение JavaScript с поддержкой строгой типизации, которое улучшает масштабируемость проектов.' },
        { id : 3, name: 'React', description: 'Библиотека для создания пользовательских интерфейсов, основанная на компонентах.' },
        { id : 4, name: 'HTML', description: 'Язык разметки для создания структуры веб-страниц.' },
        { id : 5, name: 'CSS', description: 'Язык стилей, используемый для оформления веб-страниц.' },
        { id : 6, name: 'Django', description: 'Фреймворк для создания веб-приложений на Python с акцентом на скорость разработки.' },
        { id : 7, name: 'Django REST Framework (DRF)', description: 'Дополнение к Django для создания RESTful API.' },
        { id : 8, name: 'SQLite', description: 'Лёгкая реляционная база данных, встроенная в большинство языков программирования.' },
        { id : 9, name: '1C', description: 'Платформа для автоматизации бизнес-процессов и учета в компаниях.' },
        { id : 10, name: 'C++', description: 'Язык программирования общего назначения с высокой производительностью.' },
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
                {skills.map((skill) => (
                    <li
                        key={skill.id}
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
