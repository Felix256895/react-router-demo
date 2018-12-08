import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import Technology from './Technology';
import Variety from './Variety';
import Game from './Game';
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <div className="container-box">
               <ul>
                    <li>
                        <Link to="/main/news/">科技</Link>
                    </li>
                    <li>
                        <Link to="/main/news/variety">综艺</Link>
                    </li>
                    <li>
                        <Link to="/main/news/game">游戏</Link>
                    </li>
               </ul>
               <div>
                   {
                       this.props.routes.map((route,key)=>{
                           if(route.exact){
                               return <Route exact key={key} path={route.path} component={route.component} />
                           }else{
                               return <Route  key={key} path={route.path} component={route.component} />
                           }
                       })
                   }
               </div>
           </div> 
        );
    }
}

export default News;