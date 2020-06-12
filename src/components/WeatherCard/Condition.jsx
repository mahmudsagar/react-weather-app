import React from "react";
import styled from "@emotion/styled";

const Conditon = ({temp,state}) => {

    const Temp = styled.h1`
      font-family: "Fira Sans", sans-serif;
      font-size: 2rem;
      font-weight: 200;
    `;

    const State = styled.h1`
      font-family: "Merriweather", sans-serif;
      font-size: 1.2rem;
    `;

    return ( 
        <>
            <Temp>{temp} °C</Temp>
            <State>{state}</State>
        </>
     );
}
 
export default Conditon;
