import DropUsSection from '../../components/DropUsSection';
import FollowUs from '../../components/FollowUsSection';
import ContactUs from '../../components/Forms/ContactUs';
import { allContactUs } from 'contentlayer/generated';

export async function getStaticProps() {
  const data = allContactUs;
  return { props: { data: data[0] } };
}

const ContactUsPage = ({ data }) => {
  console.log(data.description);
  return (
    <div className="w-full flex flex-col justify-center items-center gap-36 p-10">
      <DropUsSection
        description={data.DropUs.description}
        specialLine={data.DropUs.specialLine}
      />
      <ContactUs />
      <FollowUs description={data.FollowUsDescription} />
    </div>
  );
};

export default ContactUsPage;
