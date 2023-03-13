import '../components/MovieCard.css'

export default function MovieCard({movie}) {

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className='movieCard'>
      <img src={imageUrl} alt={movie.title} width={230} height={345} className='movieImg'/>
      <div> {movie.title} </div>
    </li>
  )
}
