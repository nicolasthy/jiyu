import React from "react";
import Moment from "react-moment";
import "moment/locale/fr";

import { defaults, holidays } from "../utils/seeds";

const Summary = () => {
  return (
    <div className="container my-5 mx-auto max-w-4xl">
      <div className="mb-5">
        <h2 className="font-semibold text-xl">Résumé</h2>
        <span className="text-gray-400 text-sm">
          Au{" "}
          <Moment date={defaults.currentDate} format="LL" locale="fr"></Moment>
        </span>
      </div>
      <section className="flex justify-between">
        <div className="flex flex-col rounded bg-white flex-auto mr-5 px-6 py-4 shadow-xl">
          <span className="uppercase text-gray-400 text-xs">Jours par an</span>
          <span className="text-xl font-medium">{holidays.total}</span>
        </div>
        <div className="flex flex-col rounded bg-white flex-auto mx-5 px-6 py-4 shadow-xl">
          <span className="uppercase text-gray-400 text-xs">Jours posés</span>
          <span className="text-xl font-medium">{holidays.taken}</span>
        </div>
        <div className="flex flex-col rounded bg-white flex-auto ml-5 px-6 py-4 shadow-xl">
          <span className="uppercase text-gray-400 text-xs">
            Jours restants
          </span>
          <span className="text-xl font-medium">{holidays.remaining}</span>
        </div>
      </section>
    </div>
  );
};

export default Summary;
