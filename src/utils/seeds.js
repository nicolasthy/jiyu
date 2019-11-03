import config from "./config";

export const defaults = {
  startDate: config.startDate || new Date("06/01/2019"),
  currentDate: new Date(),
  get diffMonths() {
    return (
      this.currentDate.getMonth() -
      this.startDate.getMonth() +
      12 * (this.currentDate.getFullYear() - this.startDate.getFullYear())
    );
  }
};

export const holidays = {
  total: config.total || 25,
  taken: config.taken || 0,
  get earnedPerMonth() {
    return this.total / 12;
  },
  get earned() {
    return this.earnedPerMonth * defaults.diffMonths;
  },
  get remaining() {
    return Math.round((this.earned - this.taken) * 100) / 100;
  }
};
