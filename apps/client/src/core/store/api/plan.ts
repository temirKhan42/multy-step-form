import { api } from ".";
import { IAddon, IPlan } from "../../types";

const plansListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlans: builder.query<{ success: boolean, data: IPlan[] }, void>({
      query: () => '/api/v1/plans',
    }),
  }),
  overrideExisting: false,
});

const addonnsListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAddonns: builder.query<{ success: boolean, data: IAddon[] }, void>({
      query: () => '/api/v1/addons',
    }),
  }),
  overrideExisting: false,
});


export const { useGetPlansQuery } = plansListApi;
export const { useGetAddonnsQuery } = addonnsListApi;