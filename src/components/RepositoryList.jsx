import RepositoryItem from "./RepositoryItem";

const mockRepository = { name: "teste", description: "description", link: "link" };

export function RepositoryList(props) {
	const repositories = props.repositories;
	return (
		<section className="repository-list">
			<h1>Repositories</h1>

			<ul>
				<RepositoryItem
					repository={mockRepository} />
			</ul>
		</section>
	)
}