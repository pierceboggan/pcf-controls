import * as React from 'react';
import ReactCalendar from 'react-calendar';

export interface ICalendar2 {
  minNumberOfWeeks: number;
  weekStartsOn: number;
}
  
export const CalendarAnchor2: React.FunctionComponent<ICalendar2> = props => {

  return (
    <ReactCalendar  />
  );
  
};