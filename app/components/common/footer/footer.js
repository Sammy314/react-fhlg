import React from 'react';
import {connect} from 'react-redux'

class FooterComponent extends React.Component {

	render() {
		return (
			<div className="footer">
				<span></span>
				<div className="foot1">
					<div className="foot1L">
						<span className="num">订购/咨询热线：<b>400-883-6900</b></span><br/>
						
						<span className="num1">周一到周六：<i>08:00-21:00</i></span><br/>
						<span className="num2">周日：<i>09:00-18:00</i></span><br/>
					</div>
					<ul className="foot1R">
						<li>购物指南
							<ul>
								<li><a href="#">购物流程</a></li>
								<li><a href="#">会员说明</a></li>
								<li><a href="#">积分说明</a></li>
								<li><a href="#">优惠券</a></li>
								<li><a href="#">第三方服务说明</a></li>
								<li><a href="#">团购规则</a></li>
							</ul>
						</li>
						<li>支付方式
							<ul>
								<li><a href="#">在线支付</a></li>
								<li><a href="#">体验点付款</a></li>
								<li><a href="#">货到付款</a></li>
								<li><a href="#">银行转账</a></li>
								<li><a href="#">邮局汇款</a></li>
								<li><a href="#">分期付款</a></li>
							</ul>
						</li>
						<li>配送方式
							<ul>
								<li><a href="#">配送服务说明</a></li>
								<li><a href="#">验货签收与拒收</a></li>
								<li><a href="#">包装说明</a></li>
								<li><a href="#">24小时送达</a></li>
								<li><a href="#">免运费说明</a></li>
							</ul>
						</li>
						<li>售后服务
							<ul>
								<li><a href="#">飞虎自营售后政策</a></li>
								<li><a href="#">第三方卖家售后政策</a></li>
								<li><a href="#">退换货流程</a></li>
								<li><a href="#">退款说明</a></li>
								<li><a href="#">发票说明</a></li>
								<li><a href="#">客服邮箱</a></li>
							</ul>
						</li>
						<li>特色服务
							<ul>
								<li><a href="#">产品知识</a></li>
								<li><a href="#">简易故障排除</a></li>
								<li><a href="#">软胶下载</a></li>
							</ul>
						</li>
					</ul>
				</div>	
				<div className="foot2">
					<div><a href="#">常见问题</a> |	<a href="#">法律说明</a> | <a href="#">联系客服</a> | <a href="#">新闻中心</a> | <a href="#">意见箱</a></div>
					<span>增值电信业务经营许可证：粤B2-20130551 | 网站备案：粤ICP备14036938号</span>
					<span>食品流通许可证：SP4403112014007826 | 食品流通许可证：SP1103021110002595</span>
					<span>Copyright &copy; 2009-2017 深圳市理约云信息管理有限公司.All Rights Reserved </span>
				</div>
			
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent)

function mapStateToProps(state) {
  return { login: state.login }
}

function mapDispatchToProps(dispatch) {
  return { 

  }
}