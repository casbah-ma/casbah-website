import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import ClientsSwiper from "../components/ClientsSwiper";

const images = [
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
    name: "bolles gank",
  },
  {
    src: "https://source.unsplash.com/z4XT7uUHfK0",
    name: "bolles gank",
  },
  {
    src: "https://source.unsplash.com/iK0kCHu5Yww",
    name: "bolles gank",
  },
  {
    src: "https://source.unsplash.com/ztpUS4N1xhY",
    name: "bolles gank",
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
    name: "bolles gank",
  },
  {
    src: "https://source.unsplash.com/sOEpBkkiNKA",
    name: "bolles gank",
  },
  {
    src: "https://source.unsplash.com/zeCcm2ZHCjg",
    name: "bolles gank",
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
    name: "bolles gank",
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
    name: "bolles gank",
  },
  {
    src: "https://source.unsplash.com/z4XT7uUHfK0",
    name: "bolles gank",
  },
];

const props = {
  title: "clients",
  description:
    "It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.",
  images,
};

export default function Home() {
  console.log(images.length);
  return (
    <main
      className={`font-made w-full flex min-h-screen flex-col items-center justify-center p-24 font-bold text-3xl`}
    >
      <Title renderAs="h1" size="md">
        Hello Casbha Team
      </Title>
      <Paragraph size="lg">Our Website</Paragraph>
      <ClientsSwiper {...props} />
    </main>
  );
}
