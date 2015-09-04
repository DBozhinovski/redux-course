import React from 'react';

export class Content extends React.Component {
  constructor(props) {
    super(props);
    this.items = [];
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  render() {
    var rows = [];
    this.items = this.props.results.artists ? this.props.results.artists.items : [];

    if (this.items.length > 0) {
      this.items.forEach((item)=> {
        if (item.images.length > 0) {
          rows.push(
            <div className='mdl-card' key={item.id}>
              <div className='mdl-card__title' key={item.id}>{item.name}</div>
              <div className='mdl-card__media'>
                <img className='card-image' src={item.images[0].url}/>
              </div>
              <div className='mdl-card__supporting-text'>
              <table className='mdl-data-table mdl-js-data-table mdl-data-table--selectable'>
              <tbody>
                  <tr>
                      <td className='mdl-data-table__cell--non-numeric'>Followers:</td>
                      <td className='mdl-data-table__cell--non-numeric'>{item.followers.total}</td>
                  </tr>
                  <tr>
                      <td className='mdl-data-table__cell--non-numeric'>Popularity:</td>
                      <td className='mdl-data-table__cell--non-numeric'>{item.popularity}</td>
                  </tr>
              </tbody>
              </table>
              </div>
            </div>
          );
        }
      });

      return (
        <main className='mdl-layout__content'>
          <div className="page-content">
            {rows}
          </div>
        </main>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}
