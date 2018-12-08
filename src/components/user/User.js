import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import Setting from './Setting';
import Notice from './Notice';
import Info from './Info';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <div className="container-box">
               <ul>
                    <li>
                        <Link to="/main/user/">我的设置</Link>
                    </li>
                    <li>
                        <Link to="/main/user/notice">通知中心</Link>
                    </li>
                    <li>
                        <Link to="/main/user/info">个人信息</Link>
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

export default User;