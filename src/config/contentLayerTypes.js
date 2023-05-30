import { defineNestedType } from 'contentlayer/source-files';

/******* Header props types *******/
export const headerPropsType = defineNestedType(() => ({
  name: 'HeaderProps',
  fields: {
    title: { type: 'string' },
    description: { type: 'string' },
  },
}));
/******* Header props types *******/

/******* HeaderV2 props types *******/
export const headerV2PropsType = defineNestedType(() => ({
  name: 'HeaderV2Props',
  fields: {
    title: { type: 'string' },
    description: { type: 'string' },
    specialLine: { type: 'string' },
  },
}));
/******* HeaderV2 props types *******/

/******* PicTop props types *******/
export const picTopPropsType = defineNestedType(() => ({
  name: 'PicTopProps',
  fields: {
    title: { type: 'string' },
    img: { type: 'string' },
    texts: { type: 'json' },
  },
}));
/******* PicTop props types *******/

/******* PicLeftRight props types *******/
export const picLeftRightPropsType = defineNestedType(() => ({
  name: 'PicLeftRightProps',
  fields: {
    title: { type: 'string' },
    imgSrc: { type: 'string' },
    article: { type: 'json' },
  },
}));
/******* PicLeftRight props types *******/

/******* Pic4Left props types *******/
export const pic4LeftPropsType = defineNestedType(() => ({
  name: 'Pic4LeftProps',
  fields: {
    title: { type: 'string' },
    bigImg: { type: 'string' },
    mediumImg: { type: 'string' },
    smallImg: { type: 'string' },
    texts: { type: 'json' },
  },
}));
/******* Pic4Left props types *******/

/******* Pic2Left props types *******/
export const pic2LeftPropsType = defineNestedType(() => ({
  name: 'Pic4LeftProps',
  fields: {
    title: { type: 'string' },
    bigImg: { type: 'string' },
    mediumImg: { type: 'string' },
    texts: { type: 'json' },
  },
}));
/******* Pic2Left props types *******/
