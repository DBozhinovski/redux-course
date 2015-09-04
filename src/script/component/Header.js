import React from 'react';

export class Header extends React.Component{
  handleSubmit(e) {
    e.preventDefault();
    this.props.onUserInput(this.refs.userInput.value);
  };

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  render() {
    return (
      <header className='mdl-layout__header'>
      <div className='mdl-layout__header-row'>
        <span className="mdl-layout-title">Search Spotify Artist</span>
        <div className="mdl-layout-spacer"></div>
        <form className='form1' onSubmit={this.handleSubmit.bind(this)}>
          <div className='mdl-textfield mdl-js-textfield mdl-textfield--expandable'>
            <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="userInput">
              <i className="material-icons">search</i>
            </label>
            <div className='mdl-textfield__expandable-holder'>
              <input className='mdl-textfield__input' type='text' id='userInput' ref='userInput'/>
              <label className="mdl-textfield__label" htmlFor="userInput">Enter Artist Name</label>
            </div>
          </div>
          <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--accent' type='submit'>Go</button>
        </form>
      </div>
      </header>
    );
  }
}
