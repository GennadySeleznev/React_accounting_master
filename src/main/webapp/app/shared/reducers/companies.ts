export const ACTION_TYPES = {
  GET_COMPANIES_LIST: "GET_COMPANIES_LIST",
};

const AUTH_TOKEN_KEY = "jhi-authenticationToken";

const initialState = {
  loading: false,
  errorMessage: null as string,
  list: [],
};

export type CompaniesState = Readonly<typeof initialState>;

// Reducer

export default (
  state: CompaniesState = initialState,
  action
): CompaniesState => {
  switch (action.type) {
    case ACTION_TYPES.GET_COMPANIES_LIST:
      return {
        ...state,
        loading: false,
        list: action.payload && action.payload,
      };

    default:
      return state;
  }
};

export const getCompanies = () => async (dispatch) => {
  await dispatch({
    type: ACTION_TYPES.GET_COMPANIES_LIST,
    payload: [
      { value: 1, label: "Company 1" },
      { value: 2, label: "Company 2" },
      { value: 3, label: "Company 3" },
      { value: 4, label: "Company 4" },
      { value: 5, label: "Company 5" },
      { value: 6, label: "Company 6" },
      { value: 7, label: "Company 7" },
    ],
  });
};
