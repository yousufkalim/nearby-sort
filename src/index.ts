/**
 * Index file for the package
 * @author Yousuf Kalim
 */
// Distance calculation
const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
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
const deg2rad = (deg: number): number => {
  return deg * (Math.PI / 180);
};

// Validate the arguments
const validateArgs = (lat: number, long: number, arr: any[], asc: boolean): void => {
  if (
    isNaN(parseFloat(lat as unknown as string)) ||
    isNaN(parseFloat(long as unknown as string)) ||
    !arr
  ) {
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

/**
 * Sort the array according to the user's lat long
 * @param lat {Number} - User's latitude
 * @param long {Number} - User's longitude
 * @param arr {Array} - Array of objects that contain lat and long
 * @param asc {Boolean} - Ascending or descending order
 * @returns {Array} - Sorted array
 */
const nearbySort = async (
  { lat, long }: { lat: number; long: number },
  arr: any[],
  asc = true,
): Promise<any[]> => {
  return await new Promise((resolve, reject) => {
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
