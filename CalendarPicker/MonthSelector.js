// Parent view for Month selector

import React, { Component } from 'react';
import { View } from 'react-native';
import MonthsGridView from './MonthsGridView';
import MonthsHeader from './MonthsHeader';

export default class MonthSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: props.currentYear,
      currentMonth: props.currentMonth,
    };
  }

  render() {
    const {
      styles,
      textStyle,
      title,
      currentYear,
      currentMonth,
      months,
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
      handleOnPressNextYear,
      onSelectMonth
    } = this.props;

    return (
      <View styles={styles.calendar}>
        <MonthsHeader
          styles={styles}
          textStyle={textStyle}
          title={title}
          headingLevel={headingLevel}
          minDate={minDate}
          maxDate={maxDate}
          restrictNavigation={restrictNavigation}
          currentYear={this.state.currentYear}
          currentMonth={this.state.currentMonth}
          previousComponent={previousComponent}
          nextComponent={nextComponent}
          previousTitle={previousTitle}
          nextTitle={nextTitle}
          previousTitleStyle={previousTitleStyle}
          nextTitleStyle={nextTitleStyle}
          handleOnPressPreviousYear={handleOnPressPreviousYear}
          handleOnPressNextYear={handleOnPressNextYear}
          onSelectMonth={onSelectMonth}
        />
        <MonthsGridView
          styles={styles}
          textStyle={textStyle}
          currentYear={currentYear}
          currentMonth={currentMonth}
          months={months}
          minDate={minDate}
          maxDate={maxDate}
          onSelectMonth={onSelectMonth}
        />
      </View>
    );
  }
}
