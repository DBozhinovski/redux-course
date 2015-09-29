import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Content} from '../component/Content.js';
import {Header} from '../component/Header.js';
import {fetchArtist} from '../action/index.js';

class Layout extends React.Component{
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  componentDidMount() {
  }
  handleUserInput(title){
    this.props.dispatch(fetchArtist(title));
  }
  render() {
    const { results } = this.props;
    return (
      <div className='mdl-layout mdl-layout--fixed-header'>
        <Header onUserInput={this.handleUserInput}/>
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
Layout.propTypes = {
  dispatch: PropTypes.func.isRequired
};
export default connect(mapStateToProps)(Layout);
