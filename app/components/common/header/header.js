import React from 'react';
import HeaderUiComponent from './header_ui.js'
import {notification} from 'antd';
import {connect, createProvider} from 'react-redux';

class HeaderComponent extends React.Component {

	constructor(props) {

		super(props);

		let login = false;

		try{
			login = localStorage.login ? true : login
		}catch(e){}
		
		this.state = {
			selectedKey: "",
			showModal: false
		}
		this.handleSelect = this.handleSelect.bind(this);
		this.handleModelToggle = this.handleModelToggle.bind(this);		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	componentDidMount() {
		if(!this.props.categories.length) {
			fetch('/category.json')
			.then((response) => response.json())
			.then((json) => {
				let categories = json.data.categories;
				(categories.length > 10) && (categories.length = 10)
	
				this.props.changeCategories(categories);
			})
			.catch((ex) => {
				console.log("parsing failed", ex);
			})
		}	
	}
	
	handleSelect(params) {
		this.setState({
			selectedKey: params.key
		})
	}

	handleModelToggle() {
		this.setState({
			showModal: !this.state.showModal
		})
	}

	
	handleSubmit() {
		//前端校验+ajax调用登陆接口
		// try {
		// 	localStorage.login = "true"
		// }catch(e){}
		
		notification.open({
			message: "登录成功",
			description: "欢迎光临"
		});

		this.setState({
			showModal: false
		})

		this.props.handleLogin();

  	}

  	handleLogout() {
		
		notification.open({
			message: "退出成功",
			description: "欢迎下次光临"
		});

		this.props.handleLogout();
  	}

	render() {
		return (
			<HeaderUiComponent {...this.state} login={this.props.login} handleLogout={this.handleLogout} handleSubmit={this.handleSubmit} handleSelect={this.handleSelect} handleModelToggle={this.handleModelToggle} categories={this.props.categories}/>	
		)
	}	
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)

//state指的是store里的state，实际上就是store里的数据
//props指的就是组件的props
function mapStateToProps(state, ownProps) {

	return { 
		login: state.login,
		title: ownProps.title,
		categories: state.categories
  	}


}

//把对store的操作函数映射到props中
function mapDispatchToProps(dispatch) {
  return { 

  	changeCategories: function(categories) {
  		let action = {
			type: "CHANGE_CATEGORIES",
			values: categories
		}
		dispatch(action);
  	},

  	handleLogout: function(){
  		let action = {
			type: "LOGOUT"
		}
		dispatch(action);
  	},

  	handleLogin: function() {
  		let action = {
			type: "LOGIN"
		}
		dispatch(action);
  	}
  }
}