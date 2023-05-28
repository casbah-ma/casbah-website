import { ContactForm, Wrapper } from './ContactUs.styles';
import Input from '../../Input';
import Title from '../../Title';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Button from '../../Button';

const ContactUs = ({}) => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
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
          label={'yourmessage'}
          placeholder={`${t('typein')} ${t('yourmessage')}`}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="primary">
          {t('send')}
        </Button>
      </ContactForm>
    </Wrapper>
  );
};

export default ContactUs;
