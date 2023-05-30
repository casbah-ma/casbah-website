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
  headerPropsType,
  headerV2PropsType,
  pic2LeftPropsType,
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

export const ContactUs = defineDocumentType(() => ({
  name: 'ContactUs',
  filePathPattern: `contact-us/**/*.md`,
  fields: {
    // DropUs= {descreption: '', specialLine: ''}
    DropUs: {
      type: 'json',
    },
    FollowUsDescription: {
      type: 'string',
      description: 'The descreption of the FollowUs',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Articulate, Home, Build, Formulate, Design],
});
