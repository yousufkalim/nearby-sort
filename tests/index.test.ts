import { expect, test } from '@jest/globals';
import nearbySort from '../src';

// User's location
const coordinates = {
  lat: 31.442907,
  long: 74.271519,
};

// Array of locations
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

test('Should test the nearby sort function as ascending order', async () => {
  const sortedArray = await nearbySort(coordinates, arr, true);
  expect(sortedArray[0].name).toBe('Steak Studio');
  expect(sortedArray[1].name).toBe('Kudos');
  expect(sortedArray[2].name).toBe('Dr Hospital');
});

test('Should test the nearby sort function as descending order', async () => {
  const sortedArray = await nearbySort(coordinates, arr, false);
  expect(sortedArray[0].name).toBe('Dr Hospital');
  expect(sortedArray[1].name).toBe('Kudos');
  expect(sortedArray[2].name).toBe('Steak Studio');
});
