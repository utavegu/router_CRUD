import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PostsProvider from './components/PostsProvider';
import Posts from './components/Posts';
import Post from './components/Post';
import NewPost from './components/NewPost';

/*
1) ENV-переменные
2) Почитай подробнее по пропсам линка - матч и прочим
3) Как сделать, чтобы айдишники не повторялись?.. Ну это привет бэкэнду, наверное?
4) Не забудь про пэйдж 404 и вычистить код+-
*/

function App() {

  return (
    <>
      <PostsProvider>
        <Router>
          <Link to="/posts/new">Создать пост</Link>
          <Switch>
            <Route path="/posts/new" component={NewPost} />
            <Route path="/posts/:id([0-9]+)?" component={Post} />
            <Route path="/" component={Posts} />
            {/* <Route component={Page404} /> */}
          </Switch>
        </Router>
      </PostsProvider>
    </>
  );
}

export default App;
