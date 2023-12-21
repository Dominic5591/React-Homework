import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';



const routes = [
  { path: '*', element: <h1>Are you lost?</h1>},
  { path: '/', element: <Home /> },
  { path: '/stocks', element: <Stocks /> },
  { path: '/movies', element: <Movies /> },
];
const router = createBrowserRouter(routes);
function App() {
  return (
    <div className='app'>
      <h1>App Component</h1>
      <RouterProvider router={router} routes={routes} />
    </div>
  );
}

export default App;

// import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Stocks from './components/Stocks';
// import Movies from './components/Movies';

// const router = createBrowserRouter();

// function App() {
//   return (
//     <div className='app'>
//       <h1>App Component</h1>
//       <RouterProvider router={router}>
//         {createRoutesFromElements([
//           <Route key="*" path="*" element={<h1>Are you lost?</h1>} />,
//           <Route key="home" path="/" element={<Home />} />,
//           <Route key="stocks" path="/stocks" element={<Stocks />} />,
//           <Route key="movies" path="/movies" element={<Movies />} />,
//           // Add more routes as needed
//         ])}
//       </RouterProvider>
//     </div>
//   );
// }

// export default App;