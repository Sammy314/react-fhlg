import React from "react";
import ReactDom from "react-dom";
import { Tabs, Table, Rate } from 'antd';

const TabPane = Tabs.TabPane;
const renderContent = (value, row, index) => {
	const obj = {
		children: value,
	    props: {},
	};
	if (index === 5) {
	    obj.props.colSpan = 0;
	}
	return obj;
};

const columns = [{
    title: '品牌',
    dataIndex: 'name',
	render: (text, row, index) => {
    	if (index < 5) {
      		return <a href="#">{text}</a>;
    	}
    	return {
      		children: <a href="#">{text}</a>,
      		props: {
        		colSpan: 2
      		},
    	};
    },
}, {
    title: '师夷家',
    dataIndex: 'age',
    render: renderContent
}]

const data = [{
	key: '1',
	name: '名称',
	age: '男士劲爽控油矿物护肤三件套套装'
}, {
	key: '2',
	name: '类型',
	age: '男士护肤'
}, {
	key: '3',
	name: '容量',
	age: '120g+110ml+45ml'
}, {
	key: '4',
	name: '适合肤质',
	age: '所有肤质',
}, {
	key: '5',
	name: '功效',
	age:'清洁，滋养，抑菌，去痘，控油'
}];

export default class ContentComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			src: "",
			value: 0,
    		count: null,
    		inputValue: "",
    		items: []
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleInputOnchange = this.handleInputOnchange.bind(this);
	}

  	handleChange(value) {
    	this.setState({ 
    		value: value 
    	});
  	}

  	handleInputOnchange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	handleClick() {
		var itemValue = this.state.inputValue;
		this.state.items.push(itemValue);
		this.setState({
			items: this.state.items
		})
	}

	render() {
		 const { value } = this.state;
		return (
			<div className="detail-content">
				<div className="content-top">
					<Tabs  type="card">
    					<TabPane tab="产品介绍" key="1">
    						<p  style={{marginLeft: '20'}}>
    							生产厂家：师夷家<br/>	
    							商品产地：长沙<br/>	
								商品毛重：0.449Kg<br/>	
								上架时间：2014/10/29 11:27:15<br/>	
								价格举报：如果您发现商品价有错误，欢迎举报<br/>		
								纠错信息：如果您发现商品信息不准确,欢迎纠错
    						</p>
							<img src={this.state.src} />
    					</TabPane>
					    <TabPane tab="规格参数" key="2">
					    	<Table  className="tabTwo" columns={columns} dataSource={data} bordered />
					    </TabPane>
					    <TabPane tab="包装清单" key="3">&nbsp;&nbsp;劲爽控油矿物洗颜泥120g+劲爽控油矿物柔肤水110ml+劲爽控油矿物柔肤乳45ml</TabPane>
					    <TabPane tab="售后服务" key="4">
					    	<ul style={{marginLeft: '20'}}>
					    		<li>洗化美妆、个人护理用品类商品</li>
					    		<li>1) 化妆品、洗化用品、护肤品、个人护理用品类商品，非质量问题不予退换货。 </li>
					    		<li>2) 因个人喜好（如外观、色泽、型号、气味等）或不适合个人发质、肤质等理由要求退换货的，将不予处理。</li>
					    		<li>3) 如您在使用时对商品质量表示怀疑，请出具书面鉴定，我们会按照国家法律规定予以处理。</li>
					    		<li>4) 签收商品时，请您一定在配送人员在场时当面检查商品与送货单是否一致。自提商品时请当场验收，若商品有破损、渗漏、缺少、配送有误等问题，请当即与飞虎客服联系。若您在签收或自提后发现上述现象，我们将不予处理。</li>
					    	</ul>
					    </TabPane>
					</Tabs>
				</div>
				<Tabs type="card">
				    <TabPane tab="用户评论" key="4">
				    		<div className="content-comment">
				    			<div>
				    				<span>
								        <Rate onChange={this.handleChange} value={value} />
								        {value && <span className="ant-rate-text">{value} .0 分</span>}
								    </span>
								    <textarea cols='50'  onChange = {this.handleInputOnchange}></textarea>
								    <button onClick={this.handleClick}>评论</button>
								    <ul>
									{
										this.state.items.map(function(value, key){
											return <li key={"item" + key} className="addCommentItem">
													<div>5.0分 <b>满意</b></div>
													{value} 
													</li>
										})
									}	
									</ul>
								</div>
				    		</div>
				    </TabPane>
				    <TabPane tab="满意" key="5">满意</TabPane>
				    <TabPane tab="一般" key="6">一般</TabPane>
				    <TabPane tab="不满意" key="7">一般</TabPane>
				</Tabs>
			</div>
		)
	}

	componentDidMount() {
		
		fetch('/article_1.json')
			.then((response) => response.json())
			.then((json) => {
				let data = json.data;
				this.setState({
		   			src: data.src
				})
			})
			.catch((ex) => {
				console.log("parsing failed", ex);
			})
	}
}