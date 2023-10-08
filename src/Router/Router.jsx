
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layOut/MainLayOut';
import Error from '../layOut/Pages/Error';
import Home from '../layOut/Pages/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import PrivateRoute from '../layOut/Pages/PrivateRoute/PrivateRoute';
import ServiceDetails from '../layOut/Pages/ServiceDetail/ServiceDetails';

const myRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement:<Error></Error>,
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
            }
        ]
    }
])

export default myRoute;