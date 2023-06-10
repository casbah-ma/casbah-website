const getLocale = (path) => {
  if (!path) return 'en';
  const pathArray = path.split('.');
  return pathArray.length > 2 ? pathArray.slice(-2)[0] : 'en';
};

const getSlug = (path) => {
  const pathArray = path.split('.');
  return pathArray.slice(0, 1)[0];
};
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import {
  AboutSectionPropsType,
  AwardsSectionPropsType,
  ClientSectionPropsType,
  DropUsPropsType,
  TeamSectionPropsType,
  blogsCardProps,
  headerPropsType,
  headerV2PropsType,
  homeSectionPropsType,
  pic4LeftPropsType,
  picLeftRightPropsType,
  picTopPropsType,
} from './src/config/contentLayerTypes';

/* ---------------------------------------------- */
export const Home = defineDocumentType(() => ({
  name: 'Home',
  filePathPattern: `home/**/*.md`,
  fields: {
    sectionProps: { type: 'nested', of: homeSectionPropsType },
    sectionProps1: { type: 'nested', of: homeSectionPropsType },
    sectionProps2: { type: 'nested', of: homeSectionPropsType },
    sectionProps3: { type: 'nested', of: homeSectionPropsType },
    sectionProps4: { type: 'nested', of: homeSectionPropsType },
    sectionProps5: { type: 'nested', of: homeSectionPropsType },
    sectionProps6: { type: 'nested', of: homeSectionPropsType },
  },
  computedFields: {
    lang: {
      type: 'string',
      resolve: (home) => {
        const local = getLocale(home._raw.sourceFilePath);
        return `${local}`;
      },
    },
  },
}));

/* ---------------------------------------------- */

/* ---------------------------------------------- */
export const Portfolio = defineDocumentType(() => ({
  name: 'Portfolio',
  filePathPattern: `portfolio/**/*.md`,
  fields: {
    headerProps: { type: 'nested', of: headerV2PropsType },
  },
  computedFields: {
    lang: {
      type: 'string',
      resolve: (portfolio) => {
        const local = getLocale(portfolio._raw.sourceFilePath);
        return `${local}`;
      },
    },
  },
}));
/* ---------------------------------------------- */

/* ---------------------------------------------- */
export const Articulate = defineDocumentType(() => ({
  name: 'Articulate',
  filePathPattern: `articulate/**/*.md`,
  fields: {
    headerProps: { type: 'nested', of: headerPropsType },
    picTopProps: { type: 'nested', of: picTopPropsType },
    picLeftProps: { type: 'nested', of: picLeftRightPropsType },
    pic4LeftProps: { type: 'nested', of: pic4LeftPropsType },
    picRightProps: { type: 'nested', of: picLeftRightPropsType },
    picLeftProps2: { type: 'nested', of: picLeftRightPropsType },
    picTopProps2: { type: 'nested', of: picTopPropsType },
  },
  computedFields: {
    lang: {
      type: 'string',
      resolve: (recipe) => {
        const local = getLocale(recipe._raw.sourceFileName);
        return local;
      },
    },
    slug: {
      type: 'string',
      resolve: (recipe) => {
        const slug = getSlug(recipe._raw.sourceFileName);
        return slug;
      },
    },
  },
}));
/* ---------------------------------------------- */
/* ----------------------- Contact ----------------------- */
export const Contact = defineDocumentType(() => ({
  name: 'Contact',
  filePathPattern: `contact/**/*.md`,
  fields: {
    DropUs: { type: 'nested', of: DropUsPropsType },
    FollowUsDescription: { type: 'string' },
  },
  computedFields: {
    lang: {
      type: 'string',
      resolve: (recipe) => {
        const local = getLocale(recipe._raw.sourceFileName);
        return local;
      },
    },
    slug: {
      type: 'string',
      resolve: (recipe) => {
        const slug = getSlug(recipe._raw.sourceFileName);
        return slug;
      },
    },
  },
}));
/* ---------------------------------------------- */

/* ----------------------- About ----------------------- */
export const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: `about/**/*.md`,
  fields: {
    aboutSection: { type: 'nested', of: AboutSectionPropsType },
    awardsSection: { type: 'nested', of: AwardsSectionPropsType },
    teamSection: { type: 'nested', of: TeamSectionPropsType },
    clientSection: { type: 'nested', of: ClientSectionPropsType },
  },
  computedFields: {
    lang: {
      type: 'string',
      resolve: (recipe) => {
        const local = getLocale(recipe._raw.sourceFileName);
        return local;
      },
    },
    slug: {
      type: 'string',
      resolve: (recipe) => {
        const slug = getSlug(recipe._raw.sourceFileName);
        return slug;
      },
    },
  },
}));
/* ---------------------------------------------- */

/* ---------------------------------------------- */
export const Build = defineDocumentType(() => ({
  name: 'Build',
  filePathPattern: `build/**/*.md`,
  fields: {
    headerProps: { type: 'nested', of: headerV2PropsType },
    picTopProps: { type: 'nested', of: picTopPropsType },
    picRightProps: { type: 'nested', of: picLeftRightPropsType },
    pic2LeftProps: { type: 'nested', of: pic4LeftPropsType },
    picLeftProps: { type: 'nested', of: picLeftRightPropsType },
    picRightProps2: { type: 'nested', of: picLeftRightPropsType },
    picTopProps2: { type: 'nested', of: picTopPropsType },
    picLeftProps2: { type: 'nested', of: picLeftRightPropsType },
    pic2LeftProps2: { type: 'nested', of: pic4LeftPropsType },
  },
  computedFields: {
    lang: {
      type: 'string',
      resolve: (recipe) => {
        const local = getLocale(recipe._raw.sourceFileName);
        return local;
      },
    },
    slug: {
      type: 'string',
      resolve: (recipe) => {
        const slug = getSlug(recipe._raw.sourceFileName);
        return slug;
      },
    },
  },
}));
/* ---------------------------------------------- */

/* ---------------------------------------------- */
export const Formulate = defineDocumentType(() => ({
  name: 'Formulate',
  filePathPattern: `formulate/**/*.md`,
  fields: {
    headerProps: { type: 'nested', of: headerPropsType },
    pic3LeftProps: { type: 'nested', of: pic4LeftPropsType },
    picTopProps: { type: 'nested', of: picTopPropsType },
    picLeftProps: { type: 'nested', of: picLeftRightPropsType },
    picTopProps2: { type: 'nested', of: picTopPropsType },
  },
  computedFields: {
    lang: {
      type: 'string',
      resolve: (recipe) => {
        const local = getLocale(recipe._raw.sourceFileName);
        return local;
      },
    },
    slug: {
      type: 'string',
      resolve: (recipe) => {
        const slug = getSlug(recipe._raw.sourceFileName);
        return slug;
      },
    },
  },
}));
/* ---------------------------------------------- */

/* ---------------------------------------------- */
export const Design = defineDocumentType(() => ({
  name: 'Design',
  filePathPattern: `design/**/*.md`,
  fields: {
    headerProps: { type: 'nested', of: headerV2PropsType },
    picLeftProps: { type: 'nested', of: picLeftRightPropsType },
    pic3RightProps: { type: 'nested', of: pic4LeftPropsType },
    picTopProps: { type: 'nested', of: picTopPropsType },
    pic4LeftProps: { type: 'nested', of: pic4LeftPropsType },
    picRightProps: { type: 'nested', of: picLeftRightPropsType },
  },
  computedFields: {
    lang: {
      type: 'string',
      resolve: (recipe) => {
        const local = getLocale(recipe._raw.sourceFileName);
        return local;
      },
    },
    slug: {
      type: 'string',
      resolve: (recipe) => {
        const slug = getSlug(recipe._raw.sourceFileName);
        return slug;
      },
    },
  },
}));
/* ---------------------------------------------- */

/* ----------------------- blogs ----------------------- */
export const Blogs = defineDocumentType(() => ({
  name: 'Blogs',
  filePathPattern: `blogs/**/*.md`,

  fields: {
    blogs: { type: 'list', of: blogsCardProps },
  },
  computedFields: {
    lang: {
      type: 'string',
      resolve: (recipe) => {
        const local = getLocale(recipe._raw.sourceFileName);
        return local;
      },
    },
    slug: {
      type: 'string',
      resolve: (recipe) => {
        const slug = getSlug(recipe._raw.sourceFileName);
        return slug;
      },
    },
  },
}));
/* ---------------------------------------------- */

/* ----------------------- blogs ----------------------- */
export const Lab = defineDocumentType(() => ({
  name: 'Lab',
  filePathPattern: `lab/**/*.md`,
  fields: {
    title: { type: 'string' },
    subtitle: { type: 'string' },
    blogs: { type: 'list', of: blogsCardProps },
  },
  computedFields: {
    lang: {
      type: 'string',
      resolve: (recipe) => {
        const local = getLocale(recipe._raw.sourceFileName);
        return local;
      },
    },
    slug: {
      type: 'string',
      resolve: (recipe) => {
        const slug = getSlug(recipe._raw.sourceFileName);
        return slug;
      },
    },
  },
}));
/* ---------------------------------------------- */

export default makeSource({
  contentDirPath: 'data',

  documentTypes: [
    Articulate,
    Home,
    Build,
    Formulate,
    Design,
    Contact,
    About,
    Blogs,
    Lab,
    Portfolio,
  ],
});
