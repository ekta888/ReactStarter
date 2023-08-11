import React from 'react';
import { VectorMap } from 'react-jvectormap';
import DashCard from '../../dashboardCards/DashCard';
import './VectorMap.css';

const CountryVisit = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Wizard Page                                                            */
    /*--------------------------------------------------------------------------------*/

    <DashCard className="Country Visit">
      <div className="mt-4">
        <VectorMap
          map="us_aea"
          backgroundColor="transparent"
          //ref="map"
          //ref={(e) => { this.map = e; }}
          containerStyle={{
            width: '100%',
            height: '365px',
          }}
          regionStyle={{
            initial: {
              fill: '#2cabe3',
              'fill-opacity': 0.9,
              stroke: '1',
              'stroke-width': 1,
              'stroke-opacity': 0.5,
            },
          }}
          containerClassName="map"
        />
      </div>
    </DashCard>
  );
};

export default CountryVisit;
