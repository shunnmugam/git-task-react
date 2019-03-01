import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data : props.data
		}
	}
	render() {
		const data = this.state.data;
		return (<div className="result col-12 col-sm-6 col-md-4 text-center">
					<div className="repo-card bg-white p-4 card h-100">
						<div className="image-container">
							<img src={data.owner.avatar_url} className="repo-img img" />
						</div>
						<div className="repo-details">
							<h5 className="repo-name">{data.name}</h5>
							<div className="stars-details">
								<span className="star-detail">{data.stargazers_count}</span>
								<span className="star-detail">Fork {data.forks_count}</span>
								<span className="star-detail"> open issues {data.open_issues_count}</span>
							</div>
							<div className="repo-desc">
							<p className="description">{data.description}</p>
							</div>
							<a className="view-more-btn" href={data.html_url}>
								<span className="view-more-text">View More</span>
							</a>
						</div>
					</div>
				 </div>);
	}
}
export default Card;