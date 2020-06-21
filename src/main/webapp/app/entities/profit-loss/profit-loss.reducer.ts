import { cloneDeep } from "lodash";

const SET_PNL_COLLAPSED_LIST = "SET_PNL_COLLAPSED_LIST";
const GET_PROFIT_LOSS_DATA_START = "GET_PROFIT_LOSS_DATA_START";
const GET_PROFIT_LOSS_DATA_COMPLETE = "GET_PROFIT_LOSS_DATA_COMPLETE";

export const setPnlCollapsedList = (item) => ({
  type: SET_PNL_COLLAPSED_LIST,
  item,
});

export const startProfitLossData = () => ({
  type: GET_PROFIT_LOSS_DATA_START,
});

export const completeProfitLossData = (selectedCompanies, data) => ({
  type: GET_PROFIT_LOSS_DATA_COMPLETE,
  selectedCompanies,
  data,
});

const initialState = {
  loading: false,
  list: [],
  selectedCompanies: [],
  collapsedList: [],
};

const setPnlCollapsedListResult = (state, action) => {
  let list = cloneDeep(state.collapsedList);
  if (list.filter((item) => item === action.item).length > 0) {
    list = list.filter((item) => item !== action.item);
  } else {
    list.push(action.item);
  }

  return {
    ...state,
    collapsedList: list,
  };
};

const startProfitLossDataResult = (state) => ({
  ...state,
  loading: true,
});

const getItem = (item, list = []) => {
  if (item.node && item.node.length > 0) {
    item.node.forEach((fItem) => getItem(fItem, list));
    list.push(item.label);
  }
  return list;
};

const completeProfitLossDataResult = (state, action) => {
  const list = cloneDeep(action.data);
  let collapsedList = [];
  list.forEach((item) => {
    collapsedList = getItem(item, collapsedList);
  });

  return {
    ...state,
    loading: false,
    selectedCompanies: action.selectedCompanies,
    list: action.data,
    collapsedList: collapsedList,
  };
};

export type ProfitLossState = Readonly<typeof initialState>;

export default (
  state: ProfitLossState = initialState,
  action
): ProfitLossState => {
  switch (action.type) {
    case SET_PNL_COLLAPSED_LIST:
      return setPnlCollapsedListResult(state, action);

    case GET_PROFIT_LOSS_DATA_START:
      return startProfitLossDataResult(state);
    case GET_PROFIT_LOSS_DATA_COMPLETE:
      return completeProfitLossDataResult(state, action);
    default:
      return state;
  }
};
