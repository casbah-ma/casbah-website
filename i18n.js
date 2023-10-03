// Create your i18n config object
const i18nConfig = {
  locales: ['en'],
  localeDetector: (request, config) => {
    //get browser language
    const language = request.headers['accept-language'];
    //return the language if it's in the locales list
    if (config.locales.includes(language)) {
      return language;
    }
    return 'en';
  },
  pages: {
    '*': ['common'],
  },
  defaultNS: 'common',
};

module.exports = i18nConfig;
