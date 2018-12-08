import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

// import Home from '../home/Home';
// import News from '../news/News';
// import User from '../user/User';
import routes from '../../router/router';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <Router>
               <div className="container">
                <header className="header">
                    <Link to="/main/">首页</Link>
                    <Link to="/main/news">新闻</Link>
                    <Link to="/main/user">个人中心</Link>
                </header>
                <div>
                    {
                        routes.map((route,key)=>{
                            if(route.exact){
                                return <Route key={key} exact path={route.path}
                                render={props => (
                                    <route.component {...props} routes={route.routes} />
                                  )}
                                />
                            }else{
                                return <Route key={key}  path={route.path} 
                                render={props => (
                                    <route.component {...props} routes={route.routes} />
                                  )}
                                />
                            }
                        })
                    }
                </div>
                </div> 
           </Router>
        );
    }
}

export default Main;