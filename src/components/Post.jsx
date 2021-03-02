import React, {useContext} from 'react'
import PostsContext from '../contexts/PostsContext';
import { Link } from 'react-router-dom';

function Post({match}) {
  /*
  Следующая задача:
  У этого компонента ещё 2 внутренние компонента - 2 формы отображения
  И флаг едитабл
  По умолчанию отображается форма просмотра.
  Формы менять через условный рендеринг - если флаг эдитабл стоит, отображается форма редактирования
  */

  const [posts, loadActualPosts, POSTS_LINK] = useContext(PostsContext);

  // Тут можно обернуть в функцию, но пока не вижу необходимости
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

  function RenderPost () {
    return (
      <div className="post" key={post.id}>
        <div className="post-name">{post.name}</div>
        <div className="post-status">{post.status}</div>
        <div className="post-content">{post.content}</div>
        Изменить
        <Link to="/" onClick={() => removePost(post.id)}>Удалить</Link>
      </div> 
    )
  }

  return (
    <>
      {post ? <RenderPost /> : 'Такого сообщения нет'}
      {/* Вот тут тоже тонкое место... если обновить страницу, то он "потеряет" данные. Такая конструкция спасает от этого, но приводит к миганию. Можно ли как-то сделать лучше? Я так понимаю, это потому, что данные с сервера приходят не сразу...*/}
    </>
  );
}

export default Post

