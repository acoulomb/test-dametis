import React from 'react'
import { connect } from 'react-redux'
import Result from './result'

function Results( props ) {
	console.log("PROPS", props)
  return (
    <div className="results">
		{props.data && props.data.length !== 0 ?	
		props.data.map(movie =>
			<Result movie={movie.show} key={movie.show.id}/>
		)
		:
		<div>No results</div>
	}
    </div>
  );
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps)(Results);