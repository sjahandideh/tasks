import Home from '../components/home';
import NewTask from '../components/task/new-task';

// routes are by default considered private and require authentication
// include public: true if you need them to skip authentication
const routes = [
  {
    path: '/',
    component: Home,
    public: true,
  },
  {
    path: '/home',
    component: Home,
    public: true,
  },
  {
    path: '/new',
    component: NewTask
  },
];

export default routes;
