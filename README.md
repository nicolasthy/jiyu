## jiyū

Manage your days off easily and plan your next holidays.

Clone repository and create a `config.js` file with data.
If no config is given, it will use default values that match with the french rules for standard contracts (25 days off per year).

```
const config = {
  total: 25,
  taken: 0,
  startDate: new Date("06/01/2019")
};

export default config;
```
