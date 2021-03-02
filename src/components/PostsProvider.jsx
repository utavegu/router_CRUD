import React, {useState, useEffect} from 'react'
import PostsContext from '../contexts/PostsContext';

export default function PostsProvider(props) {
  const POSTS_LINK = 'http://localhost:7777/posts';

  const [posts, setPosts] = useState([]);

  const loadActualPosts = () => {
		fetch(POSTS_LINK)
			.then(response => response.json())
			.then(posts => setPosts(posts))
	};

  useEffect(() => {
    loadActualPosts();
  }, [])

  const data = [posts, loadActualPosts, POSTS_LINK];

  return (
      <PostsContext.Provider value={data}>
          {props.children}
      </PostsContext.Provider>
  )
}
