import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './css/login.less'
import logo from './imgs/logo.png'

export default class Login extends Component {

  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  pwdValidator = (rule, value) => {
    return new Promise((resolve,reject)=>{
      if(!value){
        reject("密码必须输入")
      }else if(!(/^\w+$/).test(value)){
        reject("密码必须是字母、数字、下划线组成")
      }else if(value.length<4){
        reject("密码必须大于等于4位")
      }else if(value.length>12){
        reject("密码必须小于12位")
      }else{
        resolve()
      }
    })
    
  }

  render() {
    return (
      <div className="login">
        <header>
          <img src={logo} alt="logo"></img>
          <h1>商品管理系统</h1>
        </header>
        <section>
          <h1>用户登录</h1>
          <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={this.onFinish}>
            <Form.Item
              name="username"
              validateFirst
              rules={[
                {
                  required: true,
                  message: '用户名不能为空',
                }, {
                  pattern: /^\w+$/,
                  message: '必须为字母、数字、下划线组成'
                }, {
                  type: 'string',
                  min: 4,
                  max: 12,
                  message: '用户名长度为4-12个字符'
                }
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,0.25)' }} />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              validateFirst
              rules={[
                {
                  validator: this.pwdValidator
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>

    )
  }
}

