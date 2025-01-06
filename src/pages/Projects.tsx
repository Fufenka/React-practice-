import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addProject } from '../store/projectsSlice';
import '../styles/Projects.css'

export default function Projects(): JSX.Element {
    const projects = useSelector((state: RootState) => state.projects);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addProject({ title, description, link }));
        setTitle('');
        setDescription('');
        setLink('');
    };

    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <form onSubmit={handleSubmit} className="add-project-form">
                <input
                    type="text"
                    placeholder="Название проекта"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Описание проекта"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="Ссылка на проект"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                />
                <button type="submit">Добавить проект</button>
            </form>

            <ul className="projects-list">
                {projects.map((project, index) => (
                    <li key={index} className="project-item">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            Смотреть на GitHub
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
