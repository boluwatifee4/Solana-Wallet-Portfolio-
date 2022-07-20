import Home from '../views/Home';
import Welcome from '../views/Welcome';
let PublicRoutes = [
     {
    path: '/home',
    component: Home,
    name: 'Home',
    id: 'home',
    privateroute: false
},
{
    path: '/',
    component: Welcome,
    name: 'Welcome',
    id: 'welcome',
    privateroute: false
}
];
export default PublicRoutes;
