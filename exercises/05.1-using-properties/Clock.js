import React from "react";
import PropTypes from "prop-types";

 const Clock = (props) => {
   return (<h1>The current date is: {props.currentDate}</h1>);
};

Clock.PropTypes = {
    currentDate: PropTypes.string
};
export default Clock;
