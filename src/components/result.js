import React from 'react'
import { connect } from 'react-redux'

function Result({ movie }) {
//   console.log('props hihi', movie)
  return (
	<a href={movie && movie.url} className="result" >
		{ movie.image !== null ?
			<img src={movie.image.medium} alt={movie.name}/>
			:
			<img src="../missing-img.jpeg" alt="missing"/>	
		}
		
		<h2>{movie && movie.name}</h2>
		<div className="description">
			<span>{movie && movie.language} | </span>
			<span>{movie.premiered && movie.premiered.slice(0,4)}</span>
		</div>
		<div className="summary" dangerouslySetInnerHTML={{__html:movie.summary}}>
			{/* {movie.summary} */}
		</div>
	</a>
  );
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps)(Result);