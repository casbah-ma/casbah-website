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
  headerPropsType,
  pic4LeftPropsType,
  picLeftRightPropsType,
  picTopPropsType,
} from './src/config/contentLayerTypes';

/* ---------------------------------------------- */
export const Home = defineDocumentType(() => ({
  name: 'Home',
  filePathPattern: `home/**/*.md`,
  fields: {
    title: { type: 'string' },
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
    awardsSection: {type: 'nested', of: AwardsSectionPropsType},
    teamSection: {type: 'nested', of: TeamSectionPropsType},
    clientSection: {type: 'nested', of: ClientSectionPropsType}
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
  documentTypes: [Articulate, Home, Contact, About],
});
