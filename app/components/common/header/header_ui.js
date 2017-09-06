import React, {Component} from "react";
import { Row, Col, Cascader, Select, Tooltip, Menu, Icon, Button, Form, Input, Modal, Tabs, Card, Checkbox} from 'antd';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;


//view组件一般只负责显示，不负责逻辑
class HeaderUiComponent extends Component {


	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
    	this.props.form.validateFields((err, values) => {
      		if (!err) {
      			this.props.handleSubmit();
      		}	
    	});
	}

	render() {

		const { getFieldDecorator } = this.props.form;

		return (
			<div>
				<Row>
					
					<Col span={4}>
						<img  className="header-img" src={require("../../../images/logo.png")} />
					</Col>
					<Col span={16}>
						<Search className="index-header-search"
    						onSearch={value => console.log(value)}
  						/>
					</Col>
					<Col span={4}>
						{
			    			!this.props.login ? 
			    				<Button  className="btn" onClick={this.props.handleModelToggle}>登录 / 注册</Button> : 
			    				<Button type="primary" className="btn" onClick={this.props.handleLogout}>退出</Button>
			    		}
					</Col>
			    </Row>

			    <Modal onCancel={this.props.handleModelToggle} footer={null} title="登录 ／ 注册" visible={this.props.showModal}>
			       <Tabs type="card">
						<TabPane tab="登录" key="1">
							<Form onSubmit={this.handleSubmit} className="login-form">
								  	<FormItem>
							        	{getFieldDecorator('username', {
							        		rules: [{ required: true, message: '用户名不得为空' }],
							        	})(
							        		<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请填写用户名" />
							        	)}
							        </FormItem>
							        <FormItem>
							        	{getFieldDecorator('password', {
							        		rules: [{ required: true, message: '请输入您的密码!' }],
							        	})(
							        		<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
							        	)}
							        </FormItem>
							        <FormItem>
							        	<Button type="primary" htmlType="submit" className="login-form-button">
							        		登录
							        	</Button>
							        </FormItem>
							</Form>
						</TabPane>

						<TabPane tab="注册" key="2">
						 
						</TabPane>
					</Tabs>
			    </Modal>  
			</div>
		)
	}
}



export default Form.create()(HeaderUiComponent);