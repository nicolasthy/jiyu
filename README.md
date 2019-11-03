## jiyū

Manage your days off easily and plan your next holidays.

<img width="1215" alt="Capture d’écran 2019-11-03 à 18 14 11" src="https://user-images.githubusercontent.com/4039090/68089109-df1ecb00-fe65-11e9-98c6-9db5fb4fc755.png">


### Install Jiyu

Clone this repository and install it's packages.

```shell
git clone https://github.com/nicolasthy/jiyu.git
cd jiyu

# Using npm
npm install
npm start

# Using yarn
yarn install
yarn start
```

### Create your config file _(optional)_

Create a `config.js` file with data in the `utils` folder.
If no config is given, it will use default values that match with the french rules for standard contracts (25 days off per year).

```javascript
const config = {
  total: 25,
  taken: 0,
  startDate: new Date("06/01/2019")
};

export default config;
```

### Contribution

At the moment I am not open to contributions.
If you are interested in working on this project or giving feedback, you can contact me on Twitter (@nicolasthy).
