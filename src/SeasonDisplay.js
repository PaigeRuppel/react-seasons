import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    icon: 'sun'
  },
  winter: {
    text: 'Brrr it is chilly',
    icon: 'snowflake'
  }
}
const summer = 'summer';
const winter = 'winter';

const isSummerMonth = (month) => {
  return month > 2 && month < 9;
};

const isNorthernHemisphere = (lat) => {
  return lat > 0;
}

const season = (lat, month) => {
  if (isSummerMonth(month)) {
    return isNorthernHemisphere(lat) ? summer : winter;
  }
  return isNorthernHemisphere(lat) ? winter : summer;
}

const SeasonDisplay = (props) => {
  const seasonName = season(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[seasonName];

  return (
    <div className={`season-display ${seasonName}`}>
      <i className={`icon-left massive ${icon} icon`} />
        <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
