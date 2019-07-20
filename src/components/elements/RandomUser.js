import React, { useEffect, useState } from 'react'
import RandomUserCard from './RandomUserCard'
import axios from 'axios'

const RandomUser = () => {

	const [data, setData] = useState([])

	const getUser = () => {
		axios
			.get("https://randomuser.me/api")
			.then(function(result) {
				console.log(result.data.results)
				setData(result.data.results)
			})
	}

	useEffect(getUser, [])

	return(
		<div className="random-user">
			{data.map(user => (
				<RandomUserCard
					key = {user.phone}
					picture = {user.picture.medium}
					name = {user.name.first}
					username = {user.login.username}
					email = {user.email}
				/>
			))}

			<button onClick={getUser}>Get Random User</button>
		</div>
	)
}

export default RandomUser
