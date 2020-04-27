// Internationalization: para formatar moeda para Real

const areIntlLocalesSupported = require('intl-locales-supported');

const localesMyAppSupports = [
  /* list locales here */
  'pt-br',
];

// Determine if the built-in `Intl` has the locale data we need.
if (
  !areIntlLocalesSupported(localesMyAppSupports, [
    Intl.PluralRules,
    // Intl.RelativeTimeFormat,
  ])
) {
  // `Intl` exists, but it doesn't have the data we need, so load the
  // polyfill and replace the constructors we need with the polyfill's.
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/dist/locale-data/pt-br'); // Load de

  // require('@formatjs/intl-relativetimeformat/polyfill');
  // require('@formatjs/intl-relativetimeformat/dist/locale-data/de'); // Load de
}
