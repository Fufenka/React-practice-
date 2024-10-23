export default function Skills (){
    const skills = [
        'JavaScript (JS)',
        'TypeScript (TS)',
        'React',
        'HTML',
        'CSS',
        'Django',
        'Django REST Framework (DRF)',
        'SQLite',
        '1C',
        'c++'
    ];

    return (
        <section id="skills" className="skills-section">
            <h2>My Skills</h2>
            <p>Здесь перечислены основные технологии и инструменты, с которыми я работаю:</p>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};