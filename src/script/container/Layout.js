import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Content} from '../component/Content.js';
import {Header} from '../component/Header.js';
import {handleSearch} from '../action/index.js';

class Layout extends React.Component{
  componentDidMount() {
  }

  render() {
    const { dispatch, results } = this.props;
    return (
      <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
        <Header onUserInput={
            userInput => dispatch(handleSearch(userInput))
          }/>
        <Content results={this.props.results}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    results: state.search.results
  };
}
export default connect(mapStateToProps)(Layout);
