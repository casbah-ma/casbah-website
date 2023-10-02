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
  footerPropsType,
  headerPropsType,
  headerV2PropsType,
  homeSectionPropsType,
  pic4LeftPropsType,
  picLeftRightPropsType,
  picTopPropsType,
  projectPropsType,
} from './src/config/contentLayerTypes';

/* ---------------------------------------------- */
export const Home = defineDocumentType(() => ({
  name: 'Home',
  filePathPattern: `home/**/*.md`,
  fields: {
    heroProps: { type: 'nested', of: headerPropsType },
    sectionProps: { type: 'nested', of: homeSectionPropsType },
    sectionProps1: { type: 'nested', of: homeSectionPropsType },
    sectionProps2: { type: 'nested', of: homeSectionPropsType },
    sectionProps3: { type: 'nested', of: homeSectionPropsType },
    sectionProps4: { type: 'nested', of: homeSectionPropsType },
    sectionProps5: { type: 'nested', of: homeSectionPropsType },
    sectionProps6: { type: 'nested', of: homeSectionPropsType },
    footerProps: { type: 'nested', of: footerPropsType },
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
    title: { type: 'string' },
    subtitle: { type: 'string' },
    specialLine: { type: 'string' },
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
export const BlogPage = defineDocumentType(() => ({
  name: 'BlogPage',
  filePathPattern: `blogPage/**/*.md`,
  fields: {
    title: { type: 'string' },
    subtitle: { type: 'string' },
    specialLine: { type: 'string' },
  },
  computedFields: {
    lang: {
      type: 'string',
      resolve: (blogPage) => {
        const local = getLocale(blogPage._raw.sourceFilePath);
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
    picTopProps2: { type: 'nested', of: picTopPropsType },
    picRightProps: { type: 'nested', of: picLeftRightPropsType },
    picLeftProps2: { type: 'nested', of: picLeftRightPropsType },
    picTopProps3: { type: 'nested', of: picTopPropsType },
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
    picTopProps2: { type: 'nested', of: picTopPropsType },
    picLeftProps: { type: 'nested', of: picLeftRightPropsType },
    picRightProps2: { type: 'nested', of: picLeftRightPropsType },
    picTopProps3: { type: 'nested', of: picTopPropsType },
    picLeftProps2: { type: 'nested', of: picLeftRightPropsType },
    picRightProps3: { type: 'nested', of: picLeftRightPropsType },
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
    picLeftProps: { type: 'nested', of: picLeftRightPropsType },
    picTopProps: { type: 'nested', of: picTopPropsType },
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

/* ---------------------------------------------- */
export const Design = defineDocumentType(() => ({
  name: 'Design',
  filePathPattern: `design/**/*.md`,
  fields: {
    headerProps: { type: 'nested', of: headerV2PropsType },
    picLeftProps: { type: 'nested', of: picLeftRightPropsType },
    picRightProps: { type: 'nested', of: picLeftRightPropsType },
    picTopProps: { type: 'nested', of: picTopPropsType },
    picLeftProps2: { type: 'nested', of: picLeftRightPropsType },
    picRightProps2: { type: 'nested', of: picLeftRightPropsType },
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

// /* ----------------------- blogs ----------------------- */
// export const Blogs = defineDocumentType(() => ({
//   name: 'Blogs',
//   filePathPattern: `blogs/**/*.md`,

//   fields: {
//     blogs: { type: 'list', of: blogsCardProps },
//   },
//   computedFields: {
//     lang: {
//       type: 'string',
//       resolve: (recipe) => {
//         const local = getLocale(recipe._raw.sourceFileName);
//         return local;
//       },
//     },
//     slug: {
//       type: 'string',
//       resolve: (recipe) => {
//         const slug = getSlug(recipe._raw.sourceFileName);
//         return slug;
//       },
//     },
//   },
// }));
// /* ---------------------------------------------- */

/* ----------------------- blogs ----------------------- */
export const Lab = defineDocumentType(() => ({
  name: 'Lab',
  filePathPattern: `lab/**/*.md`,
  fields: {
    title: { type: 'string' },
    subtitle: { type: 'string' },
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
/* ----------------------- blogs Items ----------------------- */
export const Blogs = defineDocumentType(() => ({
  name: 'Blogs',
  filePathPattern: `blogs/**/*.md`,
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    imgSrc: {
      type: 'string',
      required: true,
    },
    tags: { type: 'json' },
    parent: { type: 'string' },
    githubLink: { type: 'string' },
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
/* ----------------------- Privacy Items ----------------------- */
export const Privacy = defineDocumentType(() => ({
  name: 'Privacy',
  filePathPattern: `privacy/**/*.md`,
  fields: {},
  computedFields: {
    lang: {
      type: 'string',
      resolve: (recipe) => {
        const local = getLocale(recipe._raw.sourceFileName);
        return local;
      },
    },
  },
}));
/* ---------------------------------------------- */
/* ----------------------- Terms Items ----------------------- */
export const Terms = defineDocumentType(() => ({
  name: 'Terms',
  filePathPattern: `terms/**/*.md`,
  fields: {},
  computedFields: {
    lang: {
      type: 'string',
      resolve: (recipe) => {
        const local = getLocale(recipe._raw.sourceFileName);
        return local;
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
    Lab,
    BlogPage,
    Portfolio,
    Blogs,
    Privacy,
    Terms,
  ],
});
