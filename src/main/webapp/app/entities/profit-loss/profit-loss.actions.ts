import {
  startProfitLossData,
  completeProfitLossData,
} from "./profit-loss.reducer";

export const fetchProfitLossData = (selectedCompanies, daterange) => (
  dispatch
) => {
  dispatch(startProfitLossData());
  const data = [

    {
      label: "NON-CURRENT ASSETS",
      code: "_FA_",
      level: 1,
      node: [
        {
          label: "Property, plant and equipment",
          code: 100000,
          company1: 180914,
          company2: 46481,
          company3: 16178,
          total: 243573,
          level: 2,
          node: [
            {
              label: "Pre-lands",
              code: 110000,
              company1: 12323,
              company2: 344,
              company3: 12,
              total: 12679,
              level: 3,
              node: [
                {
                  label: "Freehold land",
                  code: 110110,
                  company1: 123,
                  company2: 12,
                  company3: 12312,
                  total: 12447,
                },
                {
                  label: "Provision for depreciation - freehold land",
                  code: 110120,
                  company1: 123123,
                  company2: 45345,
                  company3: 55,
                  total: 168523,
                },
                {
                  label: "Leasehold land",
                  code: 110210,
                  company1: 0,
                  company2: 345,
                  company3: 345,
                  total: 690,
                },
                {
                  label: "Provision for depreciation - leasehold land",
                  code: 110220,
                  company1: 45345,
                  company2: 435,
                  company3: 3454,
                  total: 49234,
                }
              ]
            },
            {
              label: "Pre-Buildings",
              code: 120000,
              company1: 123,
              company2: 12,
              company3: 12312,
              total: 12447,
              level: 3,
              node: [
                {
                  label: "Building",
                  code: 120110,
                  company1: 123123,
                  company2: 45345,
                  company3: 55,
                  total: 168523,
                },
                {
                  label: "Leasehold land",
                  code: 120120,
                  company1: 0,
                  company2: 345,
                  company3: 345,
                  total: 690,
                }
              ]
            },
            {
              label: "Pre-Plant And Machinery",
              code: 130000,
              company1: 123,
              company2: 12,
              company3: 12312,
              total: 12447,
              level: 3,
              node: [
                {
                  label: "Plants & Machinery",
                  code: 130110,
                  company1: 123123,
                  company2: 45345,
                  company3: 55,
                  total: 168523,
                },
                {
                  label: "PROVISION FOR DEPRECIATION - PLANTS & MACHINERY",
                  code: 130120,
                  company1: 0,
                  company2: 345,
                  company3: 345,
                  total: 690,
                },
                {
                  label: "GOLF COURSE MACHINERY",
                  code: 130120,
                  company1: 0,
                  company2: 345,
                  company3: 345,
                  total: 690,
                },
                {
                  label: "PROVISION FOR DEPRECIATION - GOLF COURSEMACH",
                  code: 130220,
                  company1: 0,
                  company2: 345,
                  company3: 345,
                  total: 690,
                },
                {
                  label: "DRIVING RANGE",
                  code: 130310,
                  company1: 0,
                  company2: 345,
                  company3: 345,
                  total: 690,
                },
              ]
            }
          ]

        },
        {
          label: "INVENTORIES, LAND BANK, AND STOCKS",
          code: 300000,
          company1: 1001,
          company2: 2001,
          company3: 4000,
          total: 7002,
          level: 2,
          node: [
            {
              label: "LAND HELD FOR PROPERTY DEVELOPMENT",
              code: 310000,
              company1: 12323,
              company2: 344,
              company3: 12,
              total: 12679,
              level: 3,
              node: [
                {
                  label: "LOW COST TERRACE (8998-9012,9293-9310,9589-627,9956-66,9081-5,10388-9)",
                  code: 310100,
                  company1: 123,
                  company2: 12,
                  company3: 12312,
                  total: 12447,
                },
                {
                  label: "SHOP LOT (9081-5, 10388-9)",
                  code: 310200,
                  company1: 123123,
                  company2: 45345,
                  company3: 55,
                  total: 168523,
                },
                {
                  label: "CLUSTER HOUSE LOT (6936-91, 6993-7021)",
                  code: 310300,
                  company1: 123123,
                  company2: 45345,
                  company3: 55,
                  total: 168523
                },
              ]
            }
          ]
        }
      ],
    },
    {
      label: "INVESTMENT",
      code: "_IV_",
      level: 1,
      node: [
        {
          label: "Investment Properties",
          code: 210000,
          company1: 180914,
          company2: 46481,
          company3: 16178,
          total: 243573,
          level: 2,
          node: [
            {
              label: "Blub House",
              code: 211000,
              company1: 12323,
              company2: 344,
              company3: 12,
              total: 12679,
              level: 3,
              node: [
                {
                  label: "PT 6738 HSD 125734 RANTAU, SEREMBAN, NEGERI SEMBILAN",
                  code: 211010,
                  company1: 12323,
                  company2: 344,
                  company3: 12,
                  total: 12679
                }
              ]
            }

          ]
        }
      ]
    },
    {
      label: "CURRENT ASSETS",
      code: "_CA_",
      level: 1,
      node: [
        {
          label: "RECEIVABLES",
          code: 400000,
          company1: 180914,
          company2: 46481,
          company3: 16178,
          total: 243573,
          level: 2,
          node: [
            {
              label: "TRADE AND OTHER RECEIVABLES",
              code: 410000,
              company1: 12323,
              company2: 344,
              company3: 12,
              total: 12679,
              level: 3,
              node: [
                {
                  label: "TRADE RECEIVABLES",
                  code: 411000,
                  company1: 12323,
                  company2: 344,
                  company3: 12,
                  total: 12679
                },
                {
                  label: "OTHERS RECEIVABLES",
                  code: 412000,
                  company1: 12323,
                  company2: 344,
                  company3: 12,
                  total: 12679
                },
                {
                  label: "DEPOSITS",
                  code: 413000,
                  company1: 12323,
                  company2: 344,
                  company3: 12,
                  total: 12679
                },
                {
                  label: "PREPAYMENTS",
                  code: 414000,
                  company1: 12323,
                  company2: 344,
                  company3: 12,
                  total: 12679
                },
                {
                  label: "GST INPUT",
                  code: 415000,
                  company1: 12323,
                  company2: 344,
                  company3: 12,
                  total: 12679
                },
              ]
            }

          ]
        },
        {
          label: "DEPOSITS, CASH AND BANK",
          code: 500000,
          company1: 180914,
          company2: 46481,
          company3: 16178,
          total: 243573,
          level: 2,
          node: [
            {
              label: "CASH IN HAND",
              code: 510000,
              company1: 12323,
              company2: 344,
              company3: 12,
              total: 12679,
              level: 3,
              node: [
                {
                  label: "PETTY CASH - SEREMBAN 3 AZMAN",
                  code: "51AZ01",
                  company1: 12323,
                  company2: 344,
                  company3: 12,
                  total: 12679
                },
                {
                  label: "PETTY CASH - SEREMBAN 3 NORIZA",
                  code: "51NO01",
                  company1: 12323,
                  company2: 344,
                  company3: 12,
                  total: 12679
                },
                {
                  label: "PETTY CASH - THELISHA",
                  code: "51TH01",
                  company1: 12323,
                  company2: 344,
                  company3: 12,
                  total: 12679
                }
              ]
            }

          ]


        }
      ]
    },
  ];

  dispatch(completeProfitLossData(selectedCompanies, data));
};
