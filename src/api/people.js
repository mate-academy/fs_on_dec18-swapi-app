import { get } from './_helper';

export const getAll = () => {
  return get('/people')
    .then(data => data.results)
};

export const getById = (personId) => {
  return get(`/people/${personId}`);
};
