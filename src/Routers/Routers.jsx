import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home/Home';
import Resorts from '../Components/Resorts/Resorts';
import Main from '../Layout/Main';


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {path: '/', element: <Home></Home>},
        {path: '/resorts/:id', loader:({params})=>fetch(`http://localhost:5000/resorts/${params.id}`), element: <Resorts></Resorts>}
      ]
    },
  ]);
  