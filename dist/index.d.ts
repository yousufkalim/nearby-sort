/**
 * Sort the array according to the user's lat long
 * @param lat {Number} - User's latitude
 * @param long {Number} - User's longitude
 * @param arr {Array} - Array of objects that contain lat and long
 * @param asc {Boolean} - Ascending or descending order
 * @returns {Array} - Sorted array
 */
declare const nearbySort: ({ lat, long }: {
    lat: number;
    long: number;
}, arr: any[], asc?: boolean) => Promise<any[]>;
export default nearbySort;
