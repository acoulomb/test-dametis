import React from 'react'
import { connect } from 'react-redux'
import * as event from '../actions/server.js'

function SearchBar({ onChangeValue }) {
	return (
		<div className="searchbar">
			<input type="text" onChange={(e) => { onChangeValue(e.target.value) }} placeholder="Search for a movie..." />
		</div>
	);
}

const mapStateToProps = (state) => state

const mapDispatchToProps = dispatch => {
  return {
    onChangeValue: e => {
		dispatch(event.updateResults(e));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);