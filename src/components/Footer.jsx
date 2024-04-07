import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import '../styles/footer.scss';

export const Footer = () => {
    const { register, reset, handleSubmit, watch } = useForm();

    const [isSuccess, setIsSuccess] = useState(false);
    const [result, setResult] = useState(null);

    const accessKey = "c1295a04-7c69-49e4-aa56-026168181397";

    const name = watch("name");

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_name: name,
            subject: "Un nouveau message de ton site Internet !",
        },
        onSuccess: (msg, data) => {
            setIsSuccess(true);
            setResult("Email envoyé avec succès !");
            reset();
        },
        onError: (msg, data) => {
            setIsSuccess(false);
            setResult("Une erreur est survenue lors de l'envoi de l'email.");
        },
    });

    const handleEmailClick = async (e) => {
        e.preventDefault();
        const email = 'akunzada.redean.pro@gmail.com';
        try {
            await navigator.clipboard.writeText(email);
            setResult('Email copié dans le presse-papiers');
        } catch (err) {
            console.error('Failed to copy email: ', err);
            setResult('Erreur lors de la copie de l\'email');
        }
    };

    return (
        <footer>
            <div id="footer">
                <h4>Me contacter</h4>
                <a href='/' onClick={handleEmailClick}>akunzada.redean.pro@gmail.com<i className="fa-regular fa-clipboard"></i></a>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Ou bien, via le formulaire ci-dessous</p>
                    <label htmlFor="name">Nom</label>
                    <div className='input-field'>
                         <input type="text" name="name" placeholder='Votre nom' required {...register("name", { required: true })} /> {/* Register "name" field */}
                    </div>
                    <label htmlFor="email">Email</label>
                    <div className='input-field'>
                        <input type='email' name='email' id='email' placeholder='Votre.mail@mail.com' {...register("email", { required: true })}/>
                    </div>
                    <label htmlFor="message">Message</label>
                    <div className='input-field'>
                        <textarea name='message' id='message' spellCheck='true' rows='6' placeholder='Que souhaitez-vous dire ?' {...register("message", { required: true })}/>
                    </div>
                    <button type="submit">ENVOYER</button>
                </form>
                <span>{result}</span>
                <p>Ce site a été réalisé à la main et ne collecte aucune donnée. Vous pouvez trouver le code source sur GitHub. Merci de votre visite, passez une bonne journée ! 👋</p>
            </div>
        </footer>
    );
};
