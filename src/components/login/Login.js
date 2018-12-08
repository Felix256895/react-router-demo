import React, { Component } from 'react';
import {Redirect} from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            redirectToReferrer:false //路由js跳转
         };
    }
    handleClick=()=>{
        let userName=this.refs.userName.value;
        let password=this.refs.password.value;
        console.log(userName,password)
        if(userName==""||password==""){
            alert("用户名和密码不能为空");
            return;
        }
        if(userName=='admin'&&password=='123456'){
            this.setState({
                redirectToReferrer:true 
            });
        }else{
            alert('登录失败');
        }
    }
    render() {
        //js登录路由跳转
        if (this.state.redirectToReferrer) return <Redirect to={{ pathname: "/main" }} />;

        return (
            <div>
                <p>
                    <label htmlFor="">用户名:</label>
                    <input type="text" ref="userName" placeholder="请输入用户名"  />
                </p>
                <p>
                    <label htmlFor="">密码:</label>
                    <input type="password" ref="password" placeholder="请输入密码" />
                </p>
                <p>
                    <button onClick={this.handleClick}>登录</button>
                </p>
            </div>
        );
    }
}

export default Login;