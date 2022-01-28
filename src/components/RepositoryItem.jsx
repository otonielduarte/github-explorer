export default function ({ repository }) {
  return (
    <>
      <li>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>
        <a href="">{repository.url}</a>
      </li>
    </>
  )
}