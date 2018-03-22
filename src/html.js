import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`); // eslint-disable-line
  } catch (e) {
    console.log(e); // eslint-disable-line
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link
            rel="stylesheet"
            href="/css/main.css"
            id="color-switcher-link"
          />
          <link rel="stylesheet" href="/css/animations.css" />
          <link rel="stylesheet" href="/css/fonts.css" />
          <script src="/js/vendor/modernizr-2.6.2.min.js" />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="/js/compressed.js" />
          <script src="/js/main.js" />
        </body>
      </html>
    );
  }
};
