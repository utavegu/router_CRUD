import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostsProvider from './components/PostsProvider';
import Posts from './components/Posts';
import Post from './components/Post';
import NewPost from './components/NewPost';
import Page404 from './components/Page404';

function App() {

  return (
    <>
      <PostsProvider>
        <Router>
          <Switch>
            <Route path="/posts/new" component={NewPost} />
            <Route path="/posts/:id([0-9]+)?" component={Post} />
            <Route path="/" component={Posts} exact />
            <Route path="*" component={Page404} />
          </Switch>
        </Router>
      </PostsProvider>
    </>
  );
}

export default App;
