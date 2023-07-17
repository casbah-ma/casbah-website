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

const ContactUsPage = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-36  lg:pt-[11.688rem] lg:pb-[14.75rem]">
      <DropUsSection
        description={data.DropUs.description}
        specialLine={data.DropUs.specialLine}
      />
      <ContactUs />
    </div>
  );
};

export default ContactUsPage;
