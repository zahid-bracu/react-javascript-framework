import React from 'react';

const Post = ({match}) => {
 return (
  <div>
   <h1>Params Match</h1>
   <h1>ID == {match.params.id}</h1>
  </div>
 );
};

export default Post;