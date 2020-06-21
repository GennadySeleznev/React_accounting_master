const GET_BASE_CONFIGURATION_LIST_START = "GET_BASE_CONFIGURATION_LIST_START";
const GET_BASE_CONFIGURATION_LIST_COMPLETE =
  "GET_BASE_CONFIGURATION_LIST_COMPLETE";

const GET_GROUP_CONFIGURED_LIST_START = "GET_GROUP_CONFIGURED_LIST_START";
const GET_GROUP_CONFIGURED_LIST_COMPLETE = "GET_GROUP_CONFIGURED_LIST_COMPLETE";

export const startBaseConfigurationList = () => ({
  type: GET_BASE_CONFIGURATION_LIST_START,
});

export const startGroupConfiguredList = () => ({
  type: GET_GROUP_CONFIGURED_LIST_START,
});

export const completeBaseConfigurationList = (response) => ({
  type: GET_BASE_CONFIGURATION_LIST_COMPLETE,
  response,
});

export const completeGroupConfiguredList = (response) => ({
  type: GET_GROUP_CONFIGURED_LIST_COMPLETE,
  response,
});

const initialState = {
  loading: false,
  baseList: [],
  configuredList: [],
};

const startBaseConfigurationListResult = (state) => ({
  ...state,
  loading: true,
  baseList: [],
});

const completeBaseConfigurationListResult = (state, action) => ({
  ...state,
  loading: false,
  baseList: action.response,
});

const startGroupConfiguredListResult = (state) => ({
  ...state,
  loading: true,
  configuredList: [],
});

const completeGroupConfiguredListResult = (state, action) => ({
  ...state,
  loading: false,
  configuredList: action.response,
});

export type GroupConfigurationState = Readonly<typeof initialState>;

export default (
  state: GroupConfigurationState = initialState,
  action
): GroupConfigurationState => {
  switch (action.type) {
    case GET_BASE_CONFIGURATION_LIST_START:
      return startBaseConfigurationListResult(state);
    case GET_BASE_CONFIGURATION_LIST_COMPLETE:
      return completeBaseConfigurationListResult(state, action);

    case GET_GROUP_CONFIGURED_LIST_START:
      return startGroupConfiguredListResult(state);
    case GET_GROUP_CONFIGURED_LIST_COMPLETE:
      return completeGroupConfiguredListResult(state, action);
    default:
      return state;
  }
};
