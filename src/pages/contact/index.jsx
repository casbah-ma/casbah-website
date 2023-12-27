import DropUsSection from '../../components/DropUsSection';
import FollowUs from '../../components/FollowUsSection';
import ContactUs from '../../components/Forms/ContactUs';
import { allContacts } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data = allContacts.find((page) => page.lang === locale);
  return {
    props: {
      data,
    },
  };
};

export const meta = {
  title: 'Contact Casbah - Connect with Our Expert Team',
  description: "Contact Casbah using our phone, email, or direct message. We're eager to discuss how we can help bring your project to life.",
}

const ContactUsPage = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-36 mt-[5.438rem]  md:mt-[11.5rem]">
      <DropUsSection
        description={data.DropUs.description}
        specialLine={data.DropUs.specialLine}
      />
      <ContactUs />
    </div>
  );
};

export default ContactUsPage;
