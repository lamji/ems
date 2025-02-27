/** @format */

import React, { useState } from "react";
import Calendar from "./Calendar";

export default function AppCalendar() {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);

    console.log(data, showDetails);
  };

  return (
    <div>
      <Calendar showDetailsHandle={showDetailsHandle} />
    </div>
  );
}

/**
 * Follow this tutorial https://medium.com/@moodydev/create-a-custom-calendar-in-react-3df1bfd0b728
 * and customised by TTNT
 * date-fns doc: https://date-fns.org/v2.21.1/docs
 */
