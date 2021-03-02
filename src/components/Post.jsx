import React, {useContext, useEffect, useState} from 'react'
import PostsContext from '../contexts/PostsContext';
import {Link} from 'react-router-dom';

function Post({match}) {

  const [posts, loadActualPosts, POSTS_LINK] = useContext(PostsContext);

  const [isEdit, setIsEdit] = useState(false);

  let postId;
  /* Может быть тут можно было как-то более современно сделать, но у меня затупка случилась */
  for (let i = 0; i < posts.length; i++) {
    if (Number(posts[i].id) === Number(match.params.id)) postId = i;
  }
  const post = posts[postId];

  const removePost = id => {
		fetch(`${POSTS_LINK}/${id}`, {method: 'DELETE'})
    loadActualPosts(); 
  };

  const handleClick = () => {
    setIsEdit(!isEdit);
  }

  function RenderPost () {
    return (
      <>
        <h2>ПРОСМОТР СООБЩЕНИЯ</h2>
        <div className="post" key={post.id}>
          <div className="post-name">{post.name}</div>
          <div className="post-status">{post.status}</div>
          <div className="post-content">{post.content}</div>
          <button className="button" onClick={() => handleClick()}>Изменить</button>
          <Link className="button" to="/" onClick={() => removePost(post.id)}>Удалить</Link>
          <Link className="button" to="/">Вернуться на главную</Link>
        </div> 
      </>
    )
  }

  function RenderPostEdit () {

    const [message, setMessage] = useState('');

    useEffect(() => {
      setMessage(post.content);
    }, [])

    const handleChange = ({target}) => {
      setMessage(target.value);
    }

    const editPost = data => {
      fetch(POSTS_LINK, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "id": post.id,
          "content": `${data}`
        })
      })
      handleClick();
      loadActualPosts();
    };
    
    return (
      <>
        <h2>РЕДАКТИРОВАНИЕ СООБЩЕНИЯ</h2>
        <input value={message} onChange={handleChange} name="message" type="text" className="input-edit"/>
        <button className="button" onClick={() => editPost(message)}>Отправить</button>
        <button className="button" onClick={() => handleClick()}>Вернуться к просмотру сообщения</button>
      </>
    )
  }

  return (
    <>
      {post ? ((isEdit) ? <RenderPostEdit /> : <RenderPost />) : 'Такого сообщения нет'}
      {/* 
      Если обновить страницу, то он "потеряет" данные. Такая конструкция спасает от этого, но приводит к миганию. Можно ли как-то сделать лучше?
      "пост" инициируется с задержкой. Но только после обновления компонента по F5... Или же при изменении стэйта, видимо, тоже... Я не могу понять причины такого поведени и, следовательно, как адекватно их устранить.
      */}
    </>
  );
}

export default Post

