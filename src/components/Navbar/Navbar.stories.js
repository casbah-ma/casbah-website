import Navbar from ".";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import LinkedIn from "../Icons/LinkedIn";

export default {
  title: "Components/Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  logo: "https://res.cloudinary.com/casbah/image/upload/v1683662155/Group_93_ssmvyu.svg",
  links: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Agency",
      url: "/about",
    },
    {
      name: "Expertise",
      options: [
        {
          label: "Articulate",
          value: "1",
          url: "/",
        },
        {
          label: "Design",
          value: "2",
          url: "/",
        },
        {
          label: "Build",
          value: "3",
          url: "/",
        },
        {
          label: "Formulate",
          value: "4",
          url: "/",
        },
      ],
    },
    {
      name: "Portfolio",
      url: "/contact",
    },
    {
      name: "Lab",
      url: "/contact",
    },
    {
      name: "Blog",
      url: "/contact",
    },
    {
      name: "Contact us",
      url: "/contact",
    },
  ],
  media: [
    {
      url: "https://www.facebook.com/",
      icon: Facebook,
    },
    {
      url: "https://www.instagram.com/",
      icon: Instagram,
    },
    {
      url: "https://www.linkedin.com/",
      icon: LinkedIn,
    },
  ],
};
