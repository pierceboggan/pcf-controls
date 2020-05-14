import * as React from 'react';
import Calendar from 'react-calendar';
import './Styling.less';

export interface ICalendar {
    // These are set based on the toggles shown above the examples (not needed in real code)

  }
  
   
  
  export const CalendarAnchor: React.FunctionComponent<ICalendar> = props => {
  
    return (
        <Calendar />
    );
  
  };