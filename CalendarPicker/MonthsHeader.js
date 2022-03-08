import React from 'react';
import {
  View,
  Text,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import { stylePropType } from './localPropTypes';
import Controls from './Controls';

export default function MonthsHeader(props) {
  const {
    styles,
      textStyle,
      title,
      minDate,
      maxDate,
      headingLevel,
      restrictNavigation,
      previousComponent,
      nextComponent,
      previousTitle,
      nextTitle,
      previousTitleStyle,
      nextTitleStyle,
      handleOnPressPreviousYear,
      handleOnPressNextYear
  } = props;

  const disablePrevious = restrictNavigation && minDate && (minDate.year() >= year);
  const disableNext = restrictNavigation && maxDate && (maxDate.year() <= year);

  const accessibilityProps = { accessibilityRole: 'header' };
  if (Platform.OS === 'web') {
    accessibilityProps['aria-level'] = headingLevel;
  }

  return (
    <View style={styles.headerWrapper}>
      <Controls
        disabled={disablePrevious}
        label={previousTitle}
        component={previousComponent}
        onPressControl={handleOnPressPreviousYear}
        styles={styles.previousContainer}
        textStyles={[styles.navButtonText, textStyle, previousTitleStyle]}
      />
      <Text style={[styles.monthsHeaderText,  {color: textStyle?.color}]}>
        { title }
      </Text>
      <Controls
        disabled={disableNext}
        label={nextTitle}
        component={nextComponent}
        onPressControl={handleOnPressNextYear}
        styles={styles.nextContainer}
        textStyles={[styles.navButtonText, textStyle, nextTitleStyle]}
      />
    </View>
  );
}

MonthsHeader.propTypes = {
  styles: stylePropType,
  textStyle: stylePropType,
  title: PropTypes.string
};
