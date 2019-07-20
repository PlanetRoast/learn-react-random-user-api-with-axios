import React from 'react'
import './RandomUserCard.css'

const RandomUserCard = (props) => {
	return(
		<div className="random-user-card">
			<img src={props.picture} alt="just a random user" />
			<strong>{props.name}</strong>
			<div>email: {props.email}</div>
			<div>username: {props.username}</div>
		</div>
	)
}

export default RandomUserCard
