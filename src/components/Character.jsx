import { Link } from 'react-router-dom'
export const Character = (props) => {
  const { name, status, species, gender, image, id } = props

  return(
    <Link to={`/Character/${id}`}>
    <section>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
    </section>
    </Link>
  )
}