import { cloneDeep } from "lodash";

const SET_BS_COLLAPSED_LIST = "SET_BS_COLLAPSED_LIST";
const GET_BALANCE_SHEET_DATA_START = "GET_BALANCE_SHEET_DATA_START";
const GET_BALANCE_SHEET_DATA_COMPLETE = "GET_BALANCE_SHEET_DATA_COMPLETE";

export const setBsCollapsedList = (item) => ({
  type: SET_BS_COLLAPSED_LIST,
  item,
});

export const startBalanceSheetData = () => ({
  type: GET_BALANCE_SHEET_DATA_START,
});

export const completeBalanceSheetData = (selectedCompanies, data) => ({
  type: GET_BALANCE_SHEET_DATA_COMPLETE,
  selectedCompanies,
  data,
});

const initialState = {
  loading: false,
  list: [],
  selectedCompanies: [],
  collapsedList: [],
};

const setBsCollapsedListResult = (state, action) => {
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

const startBalanceSheetDataResult = (state) => ({
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

const completeBalanceSheetDataResult = (state, action) => {
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

export type BalanceSheetState = Readonly<typeof initialState>;

export default (
  state: BalanceSheetState = initialState,
  action
): BalanceSheetState => {
  switch (action.type) {
    case SET_BS_COLLAPSED_LIST:
      return setBsCollapsedListResult(state, action);

    case GET_BALANCE_SHEET_DATA_START:
      return startBalanceSheetDataResult(state);
    case GET_BALANCE_SHEET_DATA_COMPLETE:
      return completeBalanceSheetDataResult(state, action);
    default:
      return state;
  }
};
