// Distance calculation
const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

// Deg conversion
const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

// Validate the arguments
const validateArgs = (lat, long, arr, asc) => {
  if (!lat || !long || !arr) {
    throw new Error('Invalid arguments');
  }
  if (typeof lat !== 'number' || typeof long !== 'number') {
    throw new Error('lat and long should be numbers');
  }
  if (!Array.isArray(arr)) {
    throw new Error('Second argument should be an array');
  }
  if (typeof asc !== 'boolean') {
    throw new Error('Asc argument should be a boolean');
  }
};

// Sort the array according to the user's lat long
const nearbySort = ({ lat, long }, arr, asc = true) => {
  return new Promise((resolve, reject) => {
    try {
      validateArgs(lat, long, arr, asc);
      const sortedArray = arr.sort((a, b) => {
        const distanceA = getDistance(lat, long, a.lat, a.long);
        const distanceB = getDistance(lat, long, b.lat, b.long);
        return asc ? distanceA - distanceB : distanceB - distanceA;
      });
      resolve(sortedArray);
    } catch (err) {
      reject(err);
    }
  });
};

export default nearbySort;
