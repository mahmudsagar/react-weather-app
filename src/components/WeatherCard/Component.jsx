import React from 'react'
import styled from '@emotion/styled'

import Location from './Location'
import Icon from './Icon'
import Condition from './Condition'

const WeatherCard = (props) => {

    const red = 100;
    const Card = styled.div`
      margin: 10px auto;
      background: linear-gradient(to bottom, rgba(${red},200,200), pink);
      width: 200px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 15px;
    `;

    return (
      <Card>
        <Location/>
        <Icon/>
        <Condition/>
      </Card>
    );
}

export default WeatherCard;
