import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    {
      path: '*', element: <div className='text-center text-6xl mt-72 text-red-900'>Error 404: This route is not found</div>
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}


export default App;
