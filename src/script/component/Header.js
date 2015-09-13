import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component{
  componentDidMount() {
    componentHandler.upgradeElement(ReactDOM.findDOMNode(this.refs.inputContainer, 'MaterialTextfield'));
  }

  render() {
    const {onUserInput} = this.props;
    return (
      <header className='mdl-layout__header'>
      <div className='mdl-layout__header-row'>
        <span className="mdl-layout-title">Search Spotify Artist</span>
        <div className="mdl-layout-spacer"></div>
        <form className='form1'>
          <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label' ref='inputContainer'>
            <input onChange={e=>onUserInput(e.target.value)} className='mdl-textfield__input' type='text' id='userInput' ref='userInput' required/>
            <label className="mdl-textfield__label" htmlFor="userInput">Enter Artist Name</label>
          </div>
        </form>
      </div>
      </header>
    );
  }
}
Header.propTypes = {
  onUserInput: PropTypes.func.isRequired
};
