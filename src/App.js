import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/quizTopic/:topicID',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicID}`)
          },
          element: <Quiz></Quiz>

        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/stats',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        }
      ]
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}


export default App;
