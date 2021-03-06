import React from 'react';
import { ControlButton, BuildControlStyle, Label } from './BuildControl.css'

function BuildControl(props) {
    return (
        <BuildControlStyle>
            <Label>{props.label}</Label>
            <ControlButton type="less" onClick={props.removed} disabled={props.disabledRemove}>Less</ControlButton >
            <ControlButton onClick={props.added} disabled={props.disabledAdd}>more</ControlButton >
        </BuildControlStyle>
    );
}

export default BuildControl;