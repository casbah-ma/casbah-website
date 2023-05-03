import Paragraph from "@/components/Paragraph";

export default function Home() {
  return (
    <main
      className={` w-full flex min-h-screen flex-col items-center justify-center p-24 font-bold text-3xl`}
    >
      <Paragraph size="md" color="white">
        Hello Casbha Team
      </Paragraph>
      <Paragraph size="lg" color="white">
        Our Website
      </Paragraph>
    </main>
  );
}
