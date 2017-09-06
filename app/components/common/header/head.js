import React from 'react';
import { Row, Col, Icon, Button, Form, Input, Checkbox, Menu, Dropdown} from 'antd';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">账户首页</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">我的订单</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">我的收藏</a>
    </Menu.Item>
  </Menu>
);

const menu1 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">帮助中心</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">联系客服</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">常见问题</a>
    </Menu.Item>
  </Menu>
);

const menu2 = (
	<Menu>
	</Menu>
);

export default class HeadComponent extends React.Component {

	constructor(props) {
		super(props);
		
	}


  	handleClick(e) {
  		this.setState({
			current: e.key,
    	});
  	}

	handleSubmit(e) {
		e.preventDefault();
    	this.props.form.validateFields((err, values) => {
      		if (!err) {
      			console.log('Received values of form: ', values);
      		}	
    	});
	}


	render() {
		// const { getFieldDecorator } = this.props.form;
		return (
			<div className="index-head">
				<Row>
					<Col span={8}>
						<p style={{marginLeft: 20}}>您好，欢迎来到飞虎乐购!</p>
					</Col>
				    <Col span={8}></Col>
				    <Col span={8} className="head-list">
				    	<Dropdown overlay={menu}>
						    <a className="ant-dropdown-link" href="#">
						      我的账户 <Icon type="down" />
						    </a>
						</Dropdown>
						<Dropdown overlay={menu1}>
						    <a className="ant-dropdown-link" href="#">
						      网站导航 <Icon type="down" />
						    </a>
						</Dropdown>
						<Dropdown overlay={menu2}>
						    <a className="ant-dropdown-link" href="#">
						      加入收藏 
						    </a>
						</Dropdown>
						<Dropdown overlay={menu2}>
						    <a className="ant-dropdown-link" href="#">
						      400 883 6900 
						    </a>
						</Dropdown>	
				    </Col>
			    </Row>
			</div>
		)
	}
}
