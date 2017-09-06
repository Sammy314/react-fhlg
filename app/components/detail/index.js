import React from 'react'
import HeadComponent from '../common/header/head.js'
import HeaderComponent from "../common/header/header.js"
import FooterComponent from "../common/footer/footer.js"
import ContentComponent from "./content.js"

import "../../css/detail.css";

export default class DetailComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			src: ""
		}
	}

	render() {
		return (
			<div className="main">
				<HeadComponent />
				<HeaderComponent/>
				<ul className="index-nav detail-nav">
					<li>全部商品分类</li>
					<li>首页</li>
					<li>奶粉专区</li>
					<li>飞虎乐购</li>
				</ul>
				<ContentComponent/>
				<FooterComponent/>
			</div>
		)
	}

	componentDidMount() {
		var link = "article.json?id=" + this.props.params.id;
		fetch(link)
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