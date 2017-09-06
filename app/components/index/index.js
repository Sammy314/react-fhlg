import React from 'react';
import ReactDom from 'react-dom';
import { Card } from 'antd';
import {Link} from 'react-router'
import HeadComponent from '../common/header/head.js'
import HeaderComponent from '../common/header/header.js'
import NavComponent from '../common/content/nav.js'
import FooterComponent from '../common/footer/footer.js'


import "../../css/page.css";


export default class IndexComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			articles:[]
		}	
	}

	componentDidMount() {
		fetch('/beauty.json')
			.then((response) => response.json())
			.then((json) => {
				this.setState({
		   			articles: json.data.articles
				})
			})
			.catch((ex) => {
				console.log("parsing failed", ex);
			})
	}
	
	render() {
		return (
			<div className="main">
				<HeadComponent />
				<HeaderComponent title="首页"/>
				<NavComponent/>
				<Card title="个护美妆" className="content">
					{
	    				this.state.articles.map((value, index)=>{
	    					return (
	    						<p className="content-item"  key={value.id}>
	    							<Link to={"/detail/" + value.id}>
	    								<img className="item-img" src={value.title}/>
	    								{value.intro} <br />
	    								{value.price}
	    							</Link>
	    						</p>
			        		)
	    				})
			    	}
				</Card>
				<FooterComponent/>
			</div>
		)
	}

}

