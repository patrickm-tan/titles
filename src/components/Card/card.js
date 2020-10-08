import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types";
import Ripple from 'react-native-material-ripple';
import _styles, {
  containerGlue,
  cardTitleStyle
} from "./card.style";


const Card = props => {
  const {
    title,
    onPress,
    rippleColor,
    backgroundColor,
    icon,
    titleFontSize,
    titleTextColor,
    titleFontFamily,
    rippleContainerBorderRadius
  } = props;
  return (
    <Ripple
      onPress={onPress}
      rippleColor={rippleColor}
      style={_styles.container}
      rippleContainerBorderRadius={rippleContainerBorderRadius}
    >
      <View
        style={containerGlue(backgroundColor)}
      >
        <Text
          style={cardTitleStyle(titleFontSize,titleTextColor,titleFontFamily)}
        >
          {title}
        </Text>
      </View>
    </Ripple>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  titleFontSize: PropTypes.number,
  titleTextColor: PropTypes.string
}

Card.defaultProps = {
  title: "Hello World",
  titleFontSize: 14,
  backgroundColor: "#403d34",
  rippleContainerBorderRadius: 12,
  rippleColor: "#ff5b5b",
  titleTextColor: "#edeae1"
}

export default Card;