import '../styles/Contacts.css'

import React, { useState } from 'react';

export default function  Contact () {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

    const validateForm = () => {
        const newErrors: { name?: string; email?: string; message?: string } = {};

        if (!name.trim()) newErrors.name = 'Введите ваше имя';
        if (!email.trim()) {
            newErrors.email = 'Введите ваш email';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            newErrors.email = 'Введите корректный email';
        }
        if (!message.trim()) newErrors.message = 'Введите сообщение';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitted(true);
            setName('');
            setEmail('');
            setMessage('');
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-field">
                    <label htmlFor="message">Сообщение</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Отправить</button>
            </form>
        </section>
    );
};
