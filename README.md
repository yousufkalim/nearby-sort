
# Nearby Sort

This is very small and lightweight library that is capable to sort the given array by provided location coordinates.


## Installation

Install nearby-sort with npm

```bash
  npm install nearby-sort // npm
  yarn add nearby-sort // yarn
```
    
## Usage/Examples

#### Import
```
import nearbySort from 'nearby-sort'; // ES6
const nearbySort = require("nearby-sort"); // CommonJS
```

#### Data
```javascript
// User's location
const coordinates = {
  lat: 31.442907,
  long: 74.271519,
};

// Array need to be sorted
const arr = [
  {
    name: 'Kudos',
    lat: 31.460443680085763,
    long: 74.26974289747655,
  },
  {
    name: 'Dr Hospital',
    lat: 31.480616187193373,
    long: 74.28008468009904,
  },
  {
    name: 'Steak Studio',
    lat: 31.446620698317826,
    long: 74.2704643576623,
  },
];
```

#### Usage
```
// Asc Sort
let ascSortedData = await nearbySort(coordinates, arr);

// Desc Sort
let descSortedData = await nearbySort(coordinates, arr, false);
```
## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request :D


## Author

**nearby-sort** © [Yousuf](https://github.com/yousufkalim)  
Authored and maintained by Yousuf Kalim.

> GitHub [@yousufkalim](https://github.com/yousufkalim) · LinkedIn [@yousufkalim](https://www.linkedin.com/in/yousufkalim/)
## License

[MIT](https://choosealicense.com/licenses/mit/)

