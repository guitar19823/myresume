import React from 'react';
import './PageWrapper.css';

export default props => {
  const cls = ['PageWrapper_wr'];

  if (true) {
    cls.push('page_in');
  } else {
    cls.push('page_out');
  }

  return (
    <div className="PageWrapper">
      <div className={cls.join(' ')}>
        { props.children }
      </div>
    </div>
  );
};