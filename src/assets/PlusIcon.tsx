import React, { ReactElement } from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISVGIconProps} from '../utils/helper';

const PlusIcon = ({size = 52, color = '#fff'}: ISVGIconProps) : ReactElement => {
  return (
    <Svg width={size} height={size} fill="none" viewBox=" 0 0 50 50">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.257.057a2.854 2.854 0 012.854 2.854v22.832a2.854 2.854 0 01-2.854 2.854H3.425a2.854 2.854 0 010-5.708h19.978V2.91A2.854 2.854 0 0126.257.057z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.403 25.743a2.854 2.854 0 012.854-2.854H49.09a2.854 2.854 0 110 5.708H29.111v19.978a2.854 2.854 0 01-5.708 0V25.743z"
        fill={color}
      />
    </Svg>
  );
};

export default PlusIcon;
