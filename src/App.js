import React, { Component } from 'react';

class App extends Component {

  navClick(e) {
    alert("Nav item clicked")
  }

  render() {
    return (
      <nav className="navigation">
        <div
          className="navigation--item"
          onClick={e=>this.navClick(e)}>
          Otomatik Odeme Talimati
        </div>
        <div
          className="navigation--item"
          onClick={e=>this.navClick(e)}>
          Fatura Odeme
        </div>
      </nav>
    );
  }
}

export default App;
