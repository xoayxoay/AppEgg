import {
  SET_TURN,
  REQUEST_DATA,
  INCREMENT_TURN,
  DECREMENT_TURN,
  SET_EGG_STATUS,
} from './constants';

export const setTurn = turn => ({
  type: SET_TURN,
  turn,
});

export const incrementTurn = amount => ({
  type: INCREMENT_TURN,
  amount,
});

export const decrementTurn = (amount = 1) => ({
  type: DECREMENT_TURN,
  amount,
});

export const requestData = () => ({
  type: REQUEST_DATA,
});

export const setEggStatus = status => ({
  type: SET_EGG_STATUS,
  status,
});
