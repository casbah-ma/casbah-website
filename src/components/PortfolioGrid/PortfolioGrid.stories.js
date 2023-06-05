import PortfolioGrid from '.';

export default {
  title: 'Sections/PortfolioGrid',
  component: PortfolioGrid,
};


const Template = (args) => <PortfolioGrid {...args} />;

export const Variant1 = Template.bind({})
export const Variant2 = Template.bind({})

Variant1.args = {
  variant: 'v1',
  text: 'It is not about putting forms and colors together, but about finding the\
    right balance between logic and aesthetics, in order to offer optimal\
    experiences for the targeted audiences, while conveying the right\
    messages and staying true to the brand’s identity. #It is not about\
    putting forms and colors together, but about finding the right balance\
    between logic and aesthetics, in order to offer optimal experiences for\
    the targeted audiences, while conveying the right messages and staying\
    true to the brand’s identity.#It is not about putting forms and colors\
    together, but about finding the right balance between logic and\
    aesthetics, in order to offer optimal experiences for the targeted\
    audiences, while conveying the right messages and staying true to the\
    brand’s identity.#It is not about putting forms and colors together, but\
    about finding the right balance between logic and aesthetics, in order\
    to offer optimal experiences for the targeted audiences, while conveying\
    the right messages and staying true to the brand’s identity. It is not\
    about putting forms and colors together, but about finding the right\
    balance between logic and aesthetics, in order to offer optimal\
    experiences for the It is not about putting forms and colors together,\
    but about finding the right balance between logic and aesthetics, in\
    order to offer optimal experiences for the targeted audiences, while\
    conveying the right messages and staying true to the brand’s identity.#\
    It is not about putting forms and colors together, but about finding the\
    right balance between logic and aesthetics, in order to offer optimal\
    experiences for the',
  images: [
    'https://images.unsplash.com/photo-1685790988463-301f5d5ed2b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80',
    'https://images.unsplash.com/photo-1628243824751-4dc50f4f8c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    'https://images.unsplash.com/photo-1592698369473-509578e7d8e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2687&q=80',
    'https://images.unsplash.com/photo-1615674720986-d0ce88da63e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    'https://images.unsplash.com/photo-1626461731361-1aa5881af191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2372&q=80',
  ],
};

Variant2.args = {
    ...Variant1.args,
    variant: 'v2',
}
