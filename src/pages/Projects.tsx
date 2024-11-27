import '../styles/Projects.css';

export default function Projects() {
    const projects = [
        {
            title: 'Комплексные числа',
            description: 'Этот проект представляет собой простую реализацию комплексных чисел на языке программирования C++.',
            link: 'https://github.com/Fufenka/ComplexNum',
        },
        {
            title: 'Rock Online Server',
            description: ' Этот сервер предоставляет возможность управлять изображением с помощью сигналов от клиента.',
            link: 'https://github.com/Fufenka/OnlineRock',
        },
        {
            title: 'Калькулятор',
            description: ' Простой калькулятор на JS.',
            link: 'https://github.com/Fufenka/calculator',
        },

    ];

    return (
        <section className="projects-section">
            <h2>My projects</h2>
            <p>Все мои проекты вы можете посмотреть на моем гите:</p>
            <ul className="projects-list">
                {projects.map((project, index) => (
                    <li key={index} className="project-item">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            Смотреть на GitHub
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
