import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import PostsContext from '../contexts/PostsContext';
import Post from './Post'
import { Link } from 'react-router-dom';

function Posts() {

  const posts = useContext(PostsContext);

  return (
    <>
      {posts.map(post => 
          <div className="post" key={post.id}>
            <div className="post-name">{post.name}</div>
            <div className="post-status">{post.status}</div>
            <div className="post-content">{post.content}</div>
            <Link to={`/posts/${post.id}`} key={post.id}>Редактировать</Link>
          </div>
      )}
    </>
  )
}

Post.propTypes = {

}

export default Posts

