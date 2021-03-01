import React, { useState, useEffect } from 'react'
import PostsContext from '../contexts/PostsContext';

export default function PostsProvider(props) {
  const POSTS_LINK = 'http://localhost:7777/posts';

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadActualPosts();
  }, [])

	const loadActualPosts = () => {
		fetch(POSTS_LINK)
			.then(response => response.json())
			.then(posts => setPosts(posts))
	};

  return (
      <PostsContext.Provider value={posts}>
          {props.children}
      </PostsContext.Provider>
  )
}
