import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      disabled={props.isInactive}
      style={[style.tab, props.inactiveTab && style.inactiveTab, tabWidth]}
      onPress={() => props.onPress()}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, props.isInactive && style.inactiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};
Tab.default = {
  inactiveTab: false,
  onPress: () => {},
};
Tab.propType = {
  title: PropTypes.string.isRequired,
  inactiveTab: PropTypes.bool,
  onPress: PropTypes.func,
};
export default Tab;
