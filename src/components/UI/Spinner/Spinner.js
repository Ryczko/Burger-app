import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";

const center = css`
  left:45%;
  top:50%;
  transform:translate(-50%,-50%);
  position:absolute;
`;
const override = css`
  left:40%;
`;


function Spinner(props) {
    return (
        <PacmanLoader
            css={center}
            color="black" />
    );
}

export default Spinner;