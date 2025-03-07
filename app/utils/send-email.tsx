import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const sendEmail = (form: HTMLFormElement) => {
  console.log(form);
  return emailjs
    .sendForm('service_p1mlzut', 'template_adxe3ou', form, '5fcxhy9lUuPLWfhr3')
    .then(
      () => {
        toast.success('Email sent successfully!');
      },
      (error) => {
        toast.error(`Failed to send email: ${error.text}`);
      },
    );
};

export default sendEmail;