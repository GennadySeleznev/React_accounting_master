import axios from 'axios';
import {
  ICrudSearchAction,
  parseHeaderForLinks,
  loadMoreDataWhenScrolled,
  ICrudGetAction,
  ICrudGetAllAction,
  ICrudPutAction,
  ICrudDeleteAction
} from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IConfiguration, defaultValue } from 'app/shared/model/configuration.model';

export const ACTION_TYPES = {
  FETCH_CONFIGURATION: 'configuration/FETCH_CONFIGURATION',
  UPDATE_CONFIGURATION: 'configuration/UPDATE_CONFIGURATION',
  RESET: 'configuration/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type ConfigurationState = Readonly<typeof initialState>;

// Reducer

export default (state: ConfigurationState = initialState, action): ConfigurationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_CONFIGURATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.UPDATE_CONFIGURATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_CONFIGURATION):
    case FAILURE(ACTION_TYPES.UPDATE_CONFIGURATION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_CONFIGURATION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.UPDATE_CONFIGURATION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/configuration';

export const getEntity = () => {
  const requestUrl = `${apiUrl}`;
  return {
    type: ACTION_TYPES.FETCH_CONFIGURATION,
    payload: axios.get<IConfiguration>(requestUrl)
  };
};

export const updateEntity: ICrudPutAction<IConfiguration> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_CONFIGURATION,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
