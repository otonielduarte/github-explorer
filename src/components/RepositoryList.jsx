import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss'
import { useEffect, useState } from "react";
import axios from "axios";

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
	const [repositories, setRepositories] = useState([]);

	async function fetchRepos() {
		try {
			const response = await axios.get('https://api.github.com/orgs/rocketseat/repos')
			setRepositories(response.data);
		} catch (error) {
			console.log(error.message)
			alert(error.message)
		}
	}

	useEffect(() => {
		fetchRepos();
	}, [])

	return (
		<section className="repository-list">
			<h1>Repositories</h1>

			<ul>
				{
					repositories.map(repository => <RepositoryItem
						repository={repository} key={repository.name} />)
				}
			</ul>
		</section>
	)
}