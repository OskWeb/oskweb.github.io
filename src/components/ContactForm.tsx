import { Field, Form, Formik, useField } from "formik"
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import DOMPurify from "dompurify";
import { TransitionsSnackbar, SlideTransition } from "./TransitionSnackbar";
import { useState } from 'react';
import { type TransitionProps } from "@mui/material/transitions";

const TextArea = ({ ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <textarea {...field} {...props} />
        </>
    )
}

const contactSchema = Yup.object().shape({
    user_name: Yup.string()
        .required('Debes de introducir tu nombre')
        .min(3, 'Debe de tener al menos 3 caracteres')
        .max(30, 'Debe de tener máximo 30 caracteres'),

    user_email: Yup.string()
        .email('Email inválido')
        .required('Debes de introducir tu email'),
    message: Yup.string()
        .required('El mensaje es obligatorio')
        .min(10, 'El mensaje debe de tener al menos 10 caracteres')
        .max(400, 'El mensaje debe de tener un máximo de 200 caracteres')
});

interface ContactFormProps {
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    alternalOption: string;
    send: string;
    sendMessage: string;
}

export const ContactForm = ({ namePlaceholder, emailPlaceholder, messagePlaceholder, alternalOption, send, sendMessage }: ContactFormProps) => {

    const [snackbar, setSnackbar] = useState<snackbarType>({
        open: false,

    });

    const handleStateChange = (
        transition: React.ComponentType<
            TransitionProps & {
                children: React.ReactElement<any, any>;
            }
        >
    ) => {
        setSnackbar({
            open: !snackbar.open,
            transition,
        });
    }

    const handleSubmit = async (values, { resetForm }) => {

        const sanitizedName = DOMPurify.sanitize(values.user_name);
        const sanitizedEmail = DOMPurify.sanitize(values.user_email);
        const sanitizedMessage = DOMPurify.sanitize(values.message);

        console.log(values);

        const templateEmailjs = {
            from_name: sanitizedName,
            from_email: sanitizedEmail,
            to_name: 'Oscar',
            to_email: 'oscararnu18@gmail.com',
            message: sanitizedMessage
        }
        emailjs
            .send('service_xivgkek', 'template_koexbjr', templateEmailjs, 'hij4213A93NpfZGlC')
            .then(
                (result) => {
                    console.log('email send!', result.status, result.text);
                    resetForm();
                    handleStateChange(SlideTransition);
                },
                (error) => {
                    console.error('email failed...', error);
                }
            )
    }

    return (
        <Formik
            validateOnChange
            validateOnBlur
            initialValues={{
                user_name: '',
                user_email: '',
                message: ''
            }}
            validationSchema={contactSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => {
                console.log("Errores", errors);
                console.log("Campos tocados:", touched);

                return (
                    <Form className="contactForm">
                        <div className="nameBox">
                            <Field
                                className="name"
                                name="user_name"
                                placeholder={namePlaceholder}
                                type="text"
                            />

                            {!errors.user_name && touched.user_name && (
                                <div className="checkIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                    </svg>
                                </div>
                            )}

                            {errors.user_name && touched.user_name && (
                                <div className="errorIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path
                                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                    </svg>
                                </div>
                            )}

                        </div>
                        <div className="emailBox">
                            <Field
                                className="email"
                                name="user_email"
                                placeholder={emailPlaceholder}
                                type="email"

                            />

                            {!errors.user_email && touched.user_email && (
                                <div className="checkIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                    </svg>
                                </div>
                            )}

                            {errors.user_email && touched.user_email && (
                                <div className="errorIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path
                                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                    </svg>
                                </div>
                            )}

                        </div>
                        <div className="messageBox">
                            <TextArea
                                className="message"
                                name="message"
                                placeholder={messagePlaceholder}
                            />
                            {!errors.message && touched.message && (
                                <div className="checkIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                    </svg>
                                </div>
                            )}

                            {errors.message && touched.message && (
                                <div className="errorIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path
                                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className="button-group">
                            <button
                                className="sendForm"
                                type="submit"
                            >
                                {send}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
                            </button>
                            <div className="alternalOption">
                                <span>{alternalOption}</span>
                                <a href="mailto:oscararnu18@gmail.com">oscararnu18@gmail.com</a>
                            </div>
                        </div>
                        <TransitionsSnackbar snackbarState={snackbar} handleStateChange={handleStateChange} message={sendMessage} />
                    </Form>
                )
            }}
        </Formik>
    )
}

