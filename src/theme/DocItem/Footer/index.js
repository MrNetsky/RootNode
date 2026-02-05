import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Comment from '@site/src/components/GiscusComponent';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <div style={{ marginTop: '3rem' }}>
        <Comment />
      </div>
    </>
  );
}