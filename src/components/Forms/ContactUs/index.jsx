import { Button, ContactForm, Wrapper } from "./ContactUs.styles";
import Input from "../../Input";
import Title from "../../Title";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

const ContactUs = ({ handleSubmit }) => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Wrapper>
      <Title renderAs="h1" withoutBorder={true}>
        {t("contactus")}
      </Title>
      <ContactForm onSubmit={handleSubmit} defaultValue={formState}>
        <Input
          name="name"
          value={formState.name}
          type="text"
          label={t("yourname")}
          placeholder={t("typein" + " " + "yourfullname")}
          onChange={handleInputChange}
        />
        <Input
          name="email"
          value={formState.email}
          type="email"
          label={t("youremail")}
          placeholder={t("typein" + " " + "youremail")}
          onChange={handleInputChange}
        />
        <Input
          name="message"
          value={formState.message}
          type="text"
          label={"yourmessage"}
          placeholder={t("typein" + " " + "yourmessage")}
          onChange={handleInputChange}
        />
        <Button type="submit">{t("send")}</Button>
      </ContactForm>
    </Wrapper>
  );
};

export default ContactUs;
