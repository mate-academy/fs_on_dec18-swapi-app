import { get } from './_helper';

export const getAll = () => {
  return get('/people')
};

export const getById = (personId) => {
  return get(`/people/${personId}`);
};
