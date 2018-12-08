import Home from '../components/home/Home';
import News from '../components/news/News';
import User from '../components/user/User';
import Technology from '../components/news/Technology';
import Variety from '../components/news/Variety';
import Game from '../components/news/Game';
import Setting from '../components/user/Setting';
import Notice from '../components/user/Notice';
import Info from '../components/user/Info';

const routes = [
    {
      path: "/main",
      component: Home,
      exact:true
    },
    {
      path: "/main/news",
      component: News,
      routes: [
        {
          path: "/main/news/",
          component: Technology,
          exact:true
        },
        {
          path: "/main/news/variety",
          component: Variety
        },
        {
            path: "/main/news/game",
            component: Game
        }
      ]
    },
    {
        path: "/main/user",
        component: User,
        routes: [
          {
            path: "/main/user/",
            component: Setting,
            exact:true
          },
          {
            path: "/main/user/notice",
            component: Notice
          },
          {
              path: "/main/user/info",
              component: Info
          }
        ]
      }
  ];

  export default routes;