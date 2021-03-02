import React, {useState, useContext} from 'react';
import PostsContext from '../contexts/PostsContext';
import { Link } from 'react-router-dom';

function NewPost() {

  const [ , loadActualPosts, POSTS_LINK] = useContext(PostsContext);

  let [form, setForm] = useState({
    nickname: '',
    status: '',
    message: ''
  });

  const handleChange = ({target}) => {
    setForm(prevForm => ({...prevForm, [target.name]: target.value}));
  }

  const addPost = data => {
		fetch(POSTS_LINK, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				"id": 0,
        "name": `${data.nickname}`,
        "status": `${data.status}`,
				"content": `${data.message}`
			})
		})
		loadActualPosts();
	};

  return (
    <>
      <form className="new-post">
        <label htmlFor="nickname">Ваше имя</label>
        <input onChange={handleChange} value={form.nickname} name="nickname" id="nickname" type="text"/>
        <label htmlFor="status">Ваш статус</label>
        <input onChange={handleChange} value={form.status} name="status" id="status" type="text"/>
        <label htmlFor="message">Введите сообщение</label>
        <textarea onChange={handleChange} value={form.message} name="message" id="message" cols="30" rows="10"></textarea>
      </form>
      <Link onClick={() => addPost(form)} to="/">Отправить</Link>
    </>
  )
}

export default NewPost

