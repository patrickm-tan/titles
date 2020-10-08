export function containerGlue(backgroundColor) {
  return {
    padding: 12,
    flex: 1,
    borderRadius: 12,
    backgroundColor: backgroundColor,
  };
}

export function cardTitleStyle(titleFontSize, titleTextColor, titleFontFamily) {
  return {
    alignItems: "center",
    color: titleTextColor,
    alignContent: "center",
    fontSize: titleFontSize,
    justifyContent: "center",
    fontFamily: titleFontFamily
  };
}

export default {
  container: {
    width: '33%',
    padding: 12,
  },
};