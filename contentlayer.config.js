// contentlayer.config.js

import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
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
  documentTypes: [Post, ContactUs],
});
