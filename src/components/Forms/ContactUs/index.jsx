import { ContactForm, Wrapper } from './ContactUs.styles';
import Input from '../../Input';
import Title from '../../Title';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Button from '../../Button';
import { sendFormContact } from '../../../lib/api';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loader from '@/icons/Loader';

const ContactUs = ({}) => {
  const MySwal = withReactContent(Swal);
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  // handle state form change function
  const handleInputChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle send email form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // check if form not empty
      if (formState.name && formState.email && formState.message) {
        setLoading(true);
        sendFormContact(formState).then((res) => {
          if (res.success) {
            setLoading(false);
            MySwal.fire({
              title: <strong>{t('thankyou')}</strong>,
              html: <p>{t('contactsuccess')}</p>,
              icon: 'success',
            }).then((result) => {
              setFormState({
                name: '',
                email: '',
                message: '',
              });
            });
          }
        });
      } else {
        MySwal.fire({
          title: <strong>{t('oops')}</strong>,
          html: <p>{t('contacterror')}</p>,
          icon: 'error',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Title renderAs="h1" withoutBorder={true}>
        {t('contactus')}
      </Title>
      <ContactForm onSubmit={handleSubmit} defaultValue={formState}>
        <Input
          name="name"
          value={formState.name}
          type="text"
          label={t('yourname')}
          placeholder={`${t('typein')} ${t('yourfullname')}`}
          onChange={handleInputChange}
        />
        <Input
          name="email"
          value={formState.email}
          type="email"
          label={t('youremail')}
          placeholder={`${t('typein')} ${t('youremail')}`}
          onChange={handleInputChange}
        />
        <Input
          name="message"
          value={formState.message}
          type="text"
          label={t('yourmessage')}
          placeholder={`${t('typein')} ${t('yourmessage')}`}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? <Loader /> : t('send')}
        </Button>
      </ContactForm>
    </Wrapper>
  );
};

export default ContactUs;
