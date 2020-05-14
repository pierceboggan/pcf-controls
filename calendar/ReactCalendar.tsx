import * as React from 'react';
import SimpleReactCalendar from 'simple-react-calendar';
import styles from './css/styles.css';
import { start } from 'repl';

export interface ICalendar {
  weekStartsOn: number;
}
  
export const CalendarAnchor: React.FunctionComponent<ICalendar> = props => {
  const startDate = new Date("2020-05-19T00:00:00.000Z");
  const endDate = new Date("2020-05-21T00:00:00.000Z");

  return (

    <SimpleReactCalendar
      activeMonth={new Date()}
      highlighted={{start: startDate, end: endDate}}
      weekStartsOn={props.weekStartsOn}
    />
  );
  
};