import React, { useState } from 'react';

import { FetchPosts } from './component/fetchposts';
import { PostList } from './component/postlist';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <FetchPosts setData={setPosts} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;

