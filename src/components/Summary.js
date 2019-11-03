import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "moment/locale/fr";

import { defaults, daysOff } from "../utils/seeds";

import SummaryItem from "./SummaryItem";

const Summary = () => {
  const [date, setDate] = useState(defaults);
  const [days, setDays] = useState(daysOff);

  const resetDate = () =>
    setDate({
      ...date,
      currentDate: new Date(),
      diffMonths: defaults.diffMonths
    });

  const handleDateUpdate = value => {
    setDate({
      ...date,
      currentDate: new Date(
        date.currentDate.setMonth(date.currentDate.getMonth() + value)
      ),
      diffMonths: date.diffMonths + value
    });
  };

  useEffect(() => {
    setDays({
      ...days,
      earned: days.earnedPerMonth * date.diffMonths,
      remaining:
        Math.round(
          (days.earnedPerMonth * date.diffMonths - days.takenCount) * 100
        ) / 100
    });
  }, [date]);

  return (
    <div className="container my-5 mx-auto max-w-4xl">
      <div className="mb-5 flex justify-between">
        <div>
          <h2 className="font-semibold text-xl">Résumé</h2>
          <span className="text-gray-400 text-sm">
            Au <Moment date={date.currentDate} format="LL" locale="fr"></Moment>
          </span>
        </div>

        <div className="self-end rounded bg-gray-200 px-2 py-1">
          <button
            className="px-4 py-1 text-center text-gray-500 focus:outline-none"
            onClick={() => handleDateUpdate(-1)}
          >
            {"<"}
          </button>
          <span
            onClick={() => resetDate()}
            className="text-center uppercase text-xs text-gray-500 font-semibold px-1 w-32 inline-block cursor-pointer"
          >
            <Moment date={date.currentDate} format="MMMM YYYY" locale="fr" />
          </span>
          <button
            className="px-4 py-1 text-center text-gray-500 focus:outline-none"
            onClick={() => handleDateUpdate(1)}
          >
            {">"}
          </button>
        </div>
      </div>
      <section className="flex justify-between mb-20">
        <SummaryItem label="Jours par an" value={days.total} position={1} />
        <SummaryItem label="Jours posés" value={days.takenCount} position={2} />
        <SummaryItem
          label="Jours restants"
          value={days.remaining}
          position={3}
        />
      </section>
    </div>
  );
};

export default Summary;
