import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';

export default function Home() {
  return (
    <main
      className={`font-made w-full flex min-h-screen flex-col items-center justify-center p-24 font-bold text-3xl`}
    >
      <Title renderAs="h1" size="md">
        Hello Casbha Team
      </Title>
      <Paragraph size="lg">Our Website</Paragraph>
    </main>
  );
}
