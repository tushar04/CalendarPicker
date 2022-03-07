/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
const DEFAULT_SELECTED_BACKGROUND_COLOR = "#5ce600";
const DEFAULT_SELECTED_TEXT_COLOR = "#000000";
const DEFAULT_TODAY_BACKGROUND_COLOR = "#CCCCCC";

function getBorderRadiusByShape(scaler, dayShape) {
  if (dayShape === "square") {
    return 0;
  } else {
    return 48 * scaler;
  }
}

export function makeStyles(params) {
  const {
    containerWidth,
    containerHeight,
    scaleFactor,
    selectedDayColor,
    selectedDayTextColor,
    todayBackgroundColor,
    monthTitleStyle,
    dayShape,
  } = params;
  const scaler = Math.min(containerWidth, containerHeight) / scaleFactor;
  const SELECTED_BG_COLOR = selectedDayColor
    ? selectedDayColor
    : DEFAULT_SELECTED_BACKGROUND_COLOR;
  const SELECTED_TEXT_COLOR = selectedDayTextColor
    ? selectedDayTextColor
    : DEFAULT_SELECTED_TEXT_COLOR;
  const TODAY_BG_COLOR = todayBackgroundColor
    ? todayBackgroundColor
    : DEFAULT_TODAY_BACKGROUND_COLOR;

  return {
    containerWidth,
    containerHeight,

    calendar: {
      height: 320 * scaler,
      // marginTop: 10 * scaler,
    },

    dayButton: {
      width: 48 * scaler,
      height: 48 * scaler,
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
      alignSelf: "center",
      justifyContent: "center",
    },

    dayLabel: {
      fontSize: 14 * scaler,
      color: "#000",
      alignSelf: "center",
    },

    selectedDayLabel: {
      color: SELECTED_TEXT_COLOR,
    },

    dayLabelsWrapper: {
      flexDirection: "row",
      // borderBottomWidth: 1,
      borderTopWidth: 1,
      paddingTop: 32 * scaler,
      paddingBottom: 24 * scaler,
      alignSelf: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.0)",
      borderColor: "rgba(0,0,0,0.2)",
      paddingHorizontal: 10 * scaler,
    },

    daysWrapper: {
      alignSelf: "center",
      justifyContent: "center",
      borderBottomWidth: 1,
      borderColor: "rgba(0,0,0,0.2)",
      paddingBottom: 16 * scaler,
      paddingHorizontal: 10 * scaler,
    },

    dayLabels: {
      width: 48 * scaler,
      fontSize: 12 * scaler,
      color: "#000",
      textAlign: "center",
    },

    selectedDay: {
      width: 48 * scaler,
      height: 48 * scaler,
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
      alignSelf: "center",
      justifyContent: "center",
    },

    selectedDayBackground: {
      backgroundColor: SELECTED_BG_COLOR,
    },

    selectedToday: {
      width: 48 * scaler,
      height: 48 * scaler,
      backgroundColor: TODAY_BG_COLOR,
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
      alignSelf: "center",
      justifyContent: "center",
    },

    dayWrapper: {
      alignItems: "center",
      justifyContent: "center",
      width: 48 * scaler,
      height: 48 * scaler,
      backgroundColor: "rgba(0,0,0,0.0)",
    },

    startDayWrapper: {
      width: 48 * scaler,
      height: 48 * scaler,
      // borderTopLeftRadius: getBorderRadiusByShape(scaler, dayShape),
      // borderBottomLeftRadius: getBorderRadiusByShape(scaler, dayShape),
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: "center",
      justifyContent: "center",
    },

    endDayWrapper: {
      width: 48 * scaler,
      height: 48 * scaler,
      // borderTopRightRadius: getBorderRadiusByShape(scaler, dayShape),
      // borderBottomRightRadius: getBorderRadiusByShape(scaler, dayShape),
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: "center",
      justifyContent: "center",
    },

    inRangeDay: {
      width: 48 * scaler,
      height: 48 * scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: "center",
      justifyContent: "center",
    },

    headerWrapper: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "space-between",
      width: containerWidth,
      paddingHorizontal: 8 * scaler,
      // paddingBottom: 3 * scaler,
      marginBottom: 18 * scaler,
      backgroundColor: "rgba(0,0,0,0.0)",
    },

    monthYearHeaderWrapper: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 3 * scaler,
    },

    previousContainer: {
      marginLeft: 10 * scaler,
    },

    nextContainer: {
      marginRight: 10 * scaler,
      alignItems: "flex-end",
    },

    navButtonText: {
      fontSize: 14 * scaler,
    },

    weeks: {
      flexDirection: "column",
    },

    weekRow: {
      flexDirection: "row",
    },

    disabledText: {
      fontSize: 14 * scaler,
      color: "#BBBBBB",
      alignSelf: "center",
      justifyContent: "center",
    },

    selectedDisabledText: {
      fontSize: 14 * scaler,
      color: "#DDDDDD",
      alignSelf: "center",
      justifyContent: "center",
    },

    monthHeaderMainText: {
      fontSize: 16 * scaler,
      color: "#000",
      textAlign: "right",
      marginHorizontal: 3 * scaler,
    },

    monthButton: {
      width: 48 * scaler,
      height: 48 * scaler,
      borderRadius: 48 * scaler,
      alignSelf: "center",
      justifyContent: "center",
    },

    monthsHeaderText: {
      flex: 1,
      fontSize: 16 * scaler,
      color: "#000",
      textAlign: "center",
    },

    monthContainer: {
      flex: 1,
      alignItems: "center",
    },

    monthText: {
      fontSize: 14 * scaler,
      color: "#000",
      alignSelf: "center",
    },
    currentMonthText: {
      color: SELECTED_BG_COLOR,
      fontFamily: monthTitleStyle?.fontFamily,
      fontWeight: monthTitleStyle?.fontWeight,
    },

    monthsWrapper: {
      alignSelf: "center",
      justifyContent: "center",
      width: containerWidth,
      borderTopWidth: 1,
      borderColor: "rgba(0,0,0,0.2)",
      backgroundColor: 'red'

    },

    monthsRow: {
      flexDirection: "row",
      padding: 20 * scaler,
    },

    yearHeaderMainText: {
      fontSize: 16 * scaler,
      color: "#000",
      marginHorizontal: 3 * scaler,
    },

    yearContainer: {
      flex: 1,
      alignItems: "center",
    },

    yearText: {
      fontSize: 14 * scaler,
      color: "#000",
      alignSelf: "center",
    },

    yearsHeaderText: {
      fontSize: 16 * scaler,
      color: "#000",
      width: 180 * scaler,
      textAlign: "center",
    },

    yearsWrapper: {
      alignSelf: "center",
      justifyContent: "center",
      width: containerWidth,
    },

    yearsRow: {
      flexDirection: "row",
      padding: 20 * scaler,
    },
    currentYearText: {
      color: SELECTED_BG_COLOR, 
      fontFamily: monthTitleStyle?.fontFamily,
      fontWeight: monthTitleStyle?.fontWeight,
    },
  };
}
