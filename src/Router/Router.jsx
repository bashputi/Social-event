
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layOut/MainLayOut';
import Home from '../layOut/Pages/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import PrivateRoute from '../layOut/Pages/PrivateRoute/PrivateRoute';
import ServiceDetails from '../layOut/Pages/ServiceDetail/ServiceDetails';
import NotFound from '../layOut/Pages/NotFound';
import Gallery from '../Components/PrivatePage/Gallery';
import Contact from '../Components/PrivatePage/Contact';

const myRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('./wedding.json')
            },
            {
                path: 'service/:id',
                element: <PrivateRoute> <ServiceDetails></ServiceDetails> </PrivateRoute>,
                loader: () => fetch('./wedding.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/gallery',
                element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            }
        ]
    }
])

export default myRoute;