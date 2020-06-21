import {
  startBaseConfigurationList,
  completeBaseConfigurationList,
  startGroupConfiguredList,
  completeGroupConfiguredList,
} from "./group-configuration.reducer";

export const fetchBaseConfigurations = (value) => (dispatch) => {
  dispatch(startBaseConfigurationList());
  const list = [
    { id: 2, title: "PROPERTY, PLANT AND EQUIPMENT 110000" },
    { id: 3, title: "PPE - LANDS 10000" },
    { id: 4, title: "FREEHOLD LAND 10001" },
    { id: 5, title: "PROVISION FOR DEPRECIATION - FREEHOLD LAND 10002" },
    { id: 6, title: "LEASEHOLD LAND 10003" },
    { id: 7, title: "PROVISION FOR DEPRECIATION - LEASEHOLD LAND 10004" },
  ];

  dispatch(completeBaseConfigurationList(list));
};

export const fetchGroupConfiguredList = (value) => (dispatch) => {
  dispatch(startGroupConfiguredList());
  const list = [
    { id: 1, title: "NON-CURRENT ASSETS 100000" },
    { id: 8, title: "PPE - BUILDINGS 100202" },
  ];

  dispatch(completeGroupConfiguredList(list));
};
