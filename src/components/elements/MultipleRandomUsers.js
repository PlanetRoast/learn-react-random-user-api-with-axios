import React, { useEffect, useState} from 'react'
import axios from 'axios'
import RandomUserCard from './RandomUserCard'


const MultipleRandomUsers = (props) => {

	const [data, setData] = useState([]);

	const getUsers = (count) => {
		axios
			.get(`https://randomuser.me/api/?results=${count}`)
			.then(function(result) {
				console.log(result.data.results)
				setData(result.data.results)
			})
	}

	useEffect( 
		() => getUsers(props.count), []
	)

	return(
		<div className="multiple-random-users">

			<button onClick={ () => getUsers(1) }>Fetch one</button>
			<button onClick={ () => getUsers(3) }>Fetch three</button>
			<button onClick={ () => getUsers(5) }>Fetch five</button>
			
			{data.map(user => (
				<RandomUserCard
					key = {user.phone}
					picture = {user.picture.medium}
					name = {user.name.first}
					username = {user.login.username}
					email = {user.email}
				/>
			))}

		</div>
	)
}

export default MultipleRandomUsers
