import React, {useContext} from 'react'
import PostsContext from '../contexts/PostsContext';
import {Link} from 'react-router-dom';

function Posts() {

  const [posts] = useContext(PostsContext);

  return (
    <>
      <Link className="button" to="/posts/new">Создать пост</Link>
      <h2>ВСЕ СООБЩЕНИЯ</h2>
      {posts.map(post => 
        <div className="post" key={post.id}>
          <div className="post-name">{post.name}</div>
          <div className="post-status">{post.status}</div>
          <div className="post-content">{post.content}</div>
          <Link className="button" to={`/posts/${post.id}`} key={post.id}>Посмотреть</Link>
        </div>
      )}
    </>
  )
}

export default Posts

