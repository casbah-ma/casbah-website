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

/******* Dropus props types *******/
export const DropUsPropsType = defineNestedType(() => ({
  name: 'DropUsProps',
  fields: {
    description: { type: 'string' },
    specialLine: { type: 'string' },
  },
}));
/******* Dropus props types *******/

/******* About Paragraph props types *******/
export const aboutPragraphProps = defineNestedType(() => ({
  name: 'AboutPragraphProps',
  fields: {
    title: { type: 'string' },
    text: { type: 'json' },
  },
}));

/******* About Section props types *******/
export const AboutSectionPropsType = defineNestedType(() => ({
  name: 'AboutSectionProps',
  fields: {
    header: { type: 'nested', of: headerPropsType },
    image: { type: 'string' },
    ourVision: { type: 'nested', of: aboutPragraphProps },
    ourMission: { type: 'nested', of: aboutPragraphProps },
    extraText1: { type: 'nested', of: aboutPragraphProps },
    extraText2: { type: 'nested', of: aboutPragraphProps },
  },
}));
/******* About Section props types *******/

/******* Awards Card props types *******/
export const awardsCardProps = defineNestedType(() => ({
  name: 'AwardsCardProps',
  fields: {
    title: { type: 'string' },
    date: { type: 'string' },
    imgSrc: { type: 'string' },
  },
}));
/******* Awards Card props types *******/

/******* Team Card props types *******/
export const teamCardProps = defineNestedType(() => ({
  name: 'TeamCardProps',
  fields: {
    name: { type: 'string' },
    post: { type: 'string' },
    imgSrc: { type: 'string' },
  },
}));
/******* Team Card props types *******/

/******* Awards Section props types *******/
export const AwardsSectionPropsType = defineNestedType(() => ({
  name: 'AwardsSectionProps',
  fields: {
    title: { type: 'string' },
    description: { type: 'string' },
    cards: { type: 'list', of: awardsCardProps },
  },
}));
/******* Awards Section props types *******/

/******* Team Section props types *******/
export const TeamSectionPropsType = defineNestedType(() => ({
  name: 'TeamSectionProps',
  fields: {
    title: { type: 'string' },
    description: { type: 'string' },
    cards: { type: 'list', of: teamCardProps },
  },
}));
/******* Team Section props types *******/

/******* client Image props types *******/
export const clientImageProps = defineNestedType(() => ({
  name: 'ClientImageProps',
  fields: {
    src: { type: 'string' },
    name: { type: 'string' },
  },
}));

/******* client Image props types *******/

/******* Client Section props types *******/
export const ClientSectionPropsType = defineNestedType(() => ({
  name: 'ClientSectionProps',
  fields: {
    title: { type: 'string' },
    description: { type: 'string' },
    images: { type: 'list', of: clientImageProps },
  },
}));
/******* Client Section props types *******/
