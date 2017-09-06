import React from 'react';
import { Carousel } from 'antd';

export default class NavComponent extends React.Component {

	render() {
		return (
			<div>
				<ul className="index-nav">
					<li>全部商品分类</li>
					<li>首页</li>
					<li>奶粉专区</li>
					<li>飞虎乐购</li>
				</ul>
				<Carousel autoplay>
				   <div><img src={require("../../../images/ban1.jpg")} /></div>
				   <div><img src={require("../../../images/ban2.jpg")} /></div>
				   <div><img src={require("../../../images/ban3.jpg")} /></div>
				   <div><img src={require("../../../images/ban4.jpg")} /></div>
				</Carousel>
			</div>
		)
	}

}