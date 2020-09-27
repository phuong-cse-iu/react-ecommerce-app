import { css } from 'store-css';
const Observer = require('fontfaceobserver');

// import fonts stylesheet
css({
  url: 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap',
  crossOrigin: 'anonymous',
});

// observe body font
const bodyFont = new Observer('Open Sans Condensed', {
  weight: 400,
});

bodyFont.load().then(() => {
  document.documentElement.classList.add('lato-ready');
});

// observe heading font
const headingFont = new Observer('Open Sans Condensed', {
  weight: 700,
});

headingFont.load().then(() => {
  document.documentElement.classList.add('roboto-ready');
});
