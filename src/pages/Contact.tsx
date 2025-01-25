import '../styles/Contacts.css';

import React, { useState } from 'react';

interface FormState {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function Contact() {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!formState.name.trim()) newErrors.name = 'Введите ваше имя';
        if (!formState.email.trim()) {
            newErrors.email = 'Введите ваш email';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formState.email)) {
            newErrors.email = 'Введите корректный email';
        }
        if (!formState.message.trim()) newErrors.message = 'Введите сообщение';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            {isSubmitted && <p className="success-message">Спасибо за ваше сообщение!</p>}
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-field">
                    <label htmlFor="name">Имя</label>
                    <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-field">
                    <label htmlFor="message">Сообщение</label>
                    <textarea
                        id="message"
                        value={formState.message}
                        onChange={handleChange}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Отправить</button>
            </form>
        </section>
    );
}
