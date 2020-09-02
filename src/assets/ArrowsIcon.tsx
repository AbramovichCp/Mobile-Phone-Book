import React, {ReactElement} from 'react';
import {Svg, Path} from 'react-native-svg';
import { ISVGIconProps, Colors } from '../utils/helper';

const ArrowsIcon = ({
  size = 37,
  color = Colors.lightGreen,
}: ISVGIconProps): ReactElement => {
  return (
    <Svg width={`${size}`} height={`${size}`} viewBox="0 0 37 36" fill="none">
      <Path
        d="M34.0093 35.9998C33.6251 36.0011 33.2456 35.9164 32.8986 35.7517C32.5515 35.5871 32.2457 35.3468 32.0037 35.0485L19.5849 19.6214C19.2067 19.1613 19 18.5842 19 17.9887C19 17.3931 19.2067 16.816 19.5849 16.356L32.4408 0.928847C32.8773 0.403768 33.5044 0.0735648 34.1843 0.01088C34.8642 -0.0518048 35.5411 0.158163 36.0662 0.594593C36.5913 1.03102 36.9215 1.65816 36.9842 2.33805C37.0469 3.01794 36.8369 3.69489 36.4005 4.21996L24.9073 18.0015L36.0148 31.7831C36.3292 32.1605 36.5289 32.6201 36.5903 33.1074C36.6517 33.5948 36.5722 34.0896 36.3612 34.5332C36.1503 34.9768 35.8166 35.3506 35.3998 35.6106C34.983 35.8705 34.5005 36.0056 34.0093 35.9998Z"
        fill={color}
      />
      <Path
        d="M15.0093 35.9998C14.6251 36.0011 14.2456 35.9164 13.8986 35.7517C13.5515 35.5871 13.2457 35.3468 13.0037 35.0485L0.584914 19.6214C0.206739 19.1613 0 18.5842 0 17.9887C0 17.3931 0.206739 16.816 0.584914 16.356L13.4408 0.928847C13.8773 0.403768 14.5044 0.0735648 15.1843 0.01088C15.8642 -0.0518048 16.5411 0.158163 17.0662 0.594593C17.5913 1.03102 17.9215 1.65816 17.9842 2.33805C18.0469 3.01794 17.8369 3.69489 17.4005 4.21996L5.90727 18.0015L17.0148 31.7831C17.3292 32.1605 17.5289 32.6201 17.5903 33.1074C17.6517 33.5948 17.5722 34.0896 17.3612 34.5332C17.1503 34.9768 16.8166 35.3506 16.3998 35.6106C15.983 35.8705 15.5005 36.0056 15.0093 35.9998Z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowsIcon;