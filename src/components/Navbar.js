import React, { useEffect, useState } from 'react';

import { constants } from '../constants';
import numberWithCommas from '../helper';

const Navbar = () => {

  useEffect(() => {
    fetch(constants.allData)
      .then(res => res.json())
      .then(data => updateWorldStats(data));
  }, []);

  const [worldStats, updateWorldStats] = useState({});


  return (
    <React.Fragment>
      <aside className="menu sidebar">
        <div className="tabs">
          <ul>
            <li className="is-active"><a>Corona Viz</a></li>
            <li className="is-active"></li>
            <li className="is-active"></li>
            <li className="is-active"></li>
            {/* <li className="is-active"><a> 🌎</a></li> */}
          </ul>
        </div>

        <ul className="menu-list p-c-10">
          <div className="notification is-link">
            A small hack made to help people with the challenges of <strong>COVID-19.</strong>
          </div>
          <li><a className="is-selected">Globe</a></li>
          <li><a>About</a></li>
        </ul>

        <p className="menu-label pb-20" style={{ textTransform: 'none' }}>
          Worldwide statistics around COVID-19
        </p>

        <div className="notification">
          <span style={{ color: 'gray' }}>Cases:</span> <strong>{numberWithCommas(worldStats.cases)}</strong> <br />
          <span style={{ color: 'gray' }}>Deaths:</span> <strong>{numberWithCommas(worldStats.deaths)}</strong> <br />
          <span style={{ color: 'gray' }}>Recovered:</span> <strong>{numberWithCommas(worldStats.recovered)}</strong> <br />
          <span style={{ color: 'gray' }}>Updated:</span> <strong>{numberWithCommas(worldStats.updated)}</strong>
        </div>

        <p className="menu-label bottom pb-20" style={{ textTransform: 'none', textAlign: 'center' }}>
          Made with &hearts; by <span><a className="dhruv10" target="_blank" rel="noopener noreferrer" href="https://github.com/dhruv10">dhruv10</a></span>
        </p>
      </aside>
    </React.Fragment>
  );
};

export default Navbar;
