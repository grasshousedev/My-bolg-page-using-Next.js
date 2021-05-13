import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyInline = ({event}) => {

  return (
    <InlineWidget
      url={`https://calendly.com/navalign/${event ? event : ''}`}
      styles={{
        height: '1000px',
        position: 'relative',
        zIndex: 20,
      }}
     />
  );
};

export default CalendlyInline;