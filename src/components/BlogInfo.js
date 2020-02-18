import React from 'react';

const BlogInfo = ({ title, Subtitle, content }) => (
  <section className="ls section_padding_50">
    <div className="container">
      <h4 className="text-left padding_top_75">{Subtitle}</h4>
      <h2 className="text-left">{title}</h2>
      <p className="text-left">{content}</p>
      <a href="#" className="text-left">
        Read
      </a>
    </div>
  </section>
);

export default BlogInfo;
