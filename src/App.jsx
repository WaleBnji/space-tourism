import './App.css';
// import Header from './components/Header';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/index';
import Zero from './pages/Zero';
import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home />}>
        <Route index element={<Zero />} />
        <Route path='/destination' element={<One />} />
        <Route path='/crew' element={<Two />} />
        <Route path='/technology' element={<Three />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
