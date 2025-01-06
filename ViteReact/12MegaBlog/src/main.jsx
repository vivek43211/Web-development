import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import { Protected, Login } from './compoments'
import Signup from './pages/Signup'
import Post from './pages/Post'
import AllPosts from './pages/AllPosts'
import EditPost from './pages/EditPost'
import AddPost from './pages/Addpost'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path : '/signup',
        element : (
          <Protected authentication = {false}>
                 <Signup/>
          </Protected>
        )
      },
      {
        path: "/all-posts",
        element: (
            <Protected authentication>
                {" "}
                <AllPosts />
            </Protected>
        ),
    },
    {
      path: "/add-post",
      element: (
          <Protected authentication>
              {" "}
              <AddPost />
          </Protected>
      ),
  },
  {
      path: "/edit-post/:slug",
      element: (
          <Protected authentication>
              {" "}
              <EditPost />
          </Protected>
      ),
  },
  {
      path: "/post/:slug",
      element: <Post />,
  },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router= {router}/>
    </Provider>

  </StrictMode>,
)
