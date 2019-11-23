const React = require('react');

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === 'production') {
    const snippet = `!function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
    arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
    d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
    insertBefore(d,q)}(window,document,'script','_gs');

    _gs('${process.env.GATSBY_GOSQUARED_PROJECT_TOKEN}');
    _gs('set', 'anonymizeIP', true);
    `

    setHeadComponents([
      <script
        key="plugin-gosquared"
        dangerouslySetInnerHTML={{ __html: snippet }}
      />,
    ]);
  }
}
