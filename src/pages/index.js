import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import useTranslation from 'next-translate/useTranslation';
import { allHomes } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data = allHomes.find((home) => home.lang === locale);
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const { t } = useTranslation();
  return (
    <main
      className={`font-made w-full flex min-h-screen flex-col items-center justify-center p-24 font-bold text-3xl`}
    >
      <Title renderAs="h1" size="md">
        {data.title}
      </Title>
      <Paragraph size="lg">{t('en')}</Paragraph>
    </main>
  );
}
