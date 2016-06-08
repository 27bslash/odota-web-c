import { createSelector } from 'reselect';
import { REDUCER_KEY } from '../reducers';
import transform from '../transformations';

const getMatch = (state) => state[REDUCER_KEY].gotMatch.match;
const getConstants = (state) => state[REDUCER_KEY].gotConstants;

const transformMatchTable = createSelector(
  [getMatch, getConstants],
  (match, constants) => match.players.map(player => {
    const transformedMatch = {};
    Object.keys(player).forEach((field) => {
      transformedMatch[`${field}`] = {
        display: transform(player, field, constants),
        value: player[field],
      };
    });
    return transformedMatch;
  })
);

export default transformMatchTable;
