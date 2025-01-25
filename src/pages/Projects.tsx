import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addProject } from '../store/projectsSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../styles/Projects.css';

interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
}

const schema = yup.object().shape({
    title: yup.string().trim().required('Введите название проекта'),
    description: yup.string().trim().required('Введите описание проекта'),
    link: yup.string().url('Введите корректную ссылку').required('Введите ссылку на проект'),
});

export default function Projects() {
    const projects = useSelector((state: RootState) => state.projects);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: { title: string; description: string; link: string }) => {
        dispatch(addProject({ id: Date.now().toString(), ...data }));
        reset();
    };

    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="add-project-form">
                <input {...register('title')} type="text" placeholder="Название проекта" />
                {errors.title && <span className="error">{errors.title.message}</span>}

                <input {...register('description')} type="text" placeholder="Описание проекта" />
                {errors.description && <span className="error">{errors.description.message}</span>}

                <input {...register('link')} type="url" placeholder="Ссылка на проект" />
                {errors.link && <span className="error">{errors.link.message}</span>}

                <button type="submit">Добавить проект</button>
            </form>

            <ul className="projects-list">
                {projects.map((project: Project) => (
                    <li key={project.id} className="project-item">
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
