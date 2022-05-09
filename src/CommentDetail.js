import React from 'react';

const CommentDetail = (prop) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={prop.avatar} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {prop.author}
        </a>
        <div className='metadata'>
          <span className='data'>{prop.timeAgo}</span>
        </div>
        <div className='text'>{prop.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
