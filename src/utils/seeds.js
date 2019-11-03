import config from "./config";

export let defaults = {
  startDate: config.startDate || new Date("06/01/2019"),
  currentDate: new Date(),
  diffMonths:
    new Date().getMonth() -
    (config.startDate || new Date("06/01/2019")).getMonth() +
    12 *
      (new Date().getFullYear() -
        (config.startDate || new Date("06/01/2019")).getFullYear())
};

export const daysOff = {
  total: config.total || 25,
  taken: config.taken || [],
  earned: 0,
  remaining: 0,
  get takenCount() {
    return config.taken
      ? config.taken.reduce((previous, current) => {
          return previous + current.count;
        }, 0)
      : 0;
  },
  get earnedPerMonth() {
    return this.total / 12;
  }
};
