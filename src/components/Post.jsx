import React, {useContext} from 'react'
import PostsContext from '../contexts/PostsContext';
import { Link } from 'react-router-dom';

function Post({match}) {
  const POSTS_LINK = 'http://localhost:7777/posts';
  // Вот пожалуй неплохо бы всё-таки разобраться с env
  const posts = useContext(PostsContext);
  let postId;
  /* Может быть тут можно было как-то более современно сделать, но у меня затупка случилась */
  for (let i = 0; i < posts.length; i++) {
    if (Number(posts[i].id) === Number(match.params.id)) postId = i;
  }

  const post = posts[postId];

  const removePost = id => {
		fetch(`${POSTS_LINK}/${id}`, {method: 'DELETE'})
    // loadActualPosts(); // Или вот её и ссылку в утил джээс вынести... если это возможно, с учётом стэйта
    // В адд тоже нужно будет ее использовать
    // А юзэффекту с зависимостями чото я не доверяю - лучше единоразовый вызов обновляшки.
    // Кстати... стэйт же в роутере... нужно просто скинуть функцию и всё
    // И ссылку тоже
  };

  function RenderPost () {
    return (
      <div className="post" key={post.id}>
        <div className="post-name">{post.name}</div>
        <div className="post-status">{post.status}</div>
        <div className="post-content">{post.content}</div>
        Изменить
        <Link to="/" onClick={() => removePost(post.id)}>Удалить</Link>
        {/* В целом работает, но пост удаляется только после принудительной перезагрузки главной страницы. Как сделать без этого - не соображу */}
      </div> 
    )
  }

  return (
    <>
      {post ? <RenderPost /> : 'Такого сообщения нет'}
      {/* Вот тут тоже тонкое место... если обновить страницу, то он "потеряет" данные. Такая конструкция спасает от этого, но приводит к миганию. Можно ли как-то сделать лучше? */}
    </>
  );
}

export default Post

