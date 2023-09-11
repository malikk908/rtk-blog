import './App.css';
import AddPostForm from './components/AddPostForm';
import PostsList from './components/PostsList';
import Layout from "./components/Layout";
import SinglePostPage from './components/SinglePostPage';
import { Routes, Route } from 'react-router-dom';
import EditPostForm from './components/EditPostForm';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
