import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation();
  return (
    <main
      className={`font-made w-full flex min-h-screen flex-col items-center justify-center p-24 font-bold text-3xl`}
    >
      <Title renderAs="h1" size="md">
        {t('hello')}
      </Title>
      <Paragraph size="lg">{t('en')}</Paragraph>
    </main>
  );
}
