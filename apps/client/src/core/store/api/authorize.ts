import { api } from '.';
import { TPerson } from '../../types/register';

const registerNewUserApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<{ data: any, success: boolean }, TPerson>({
      query: (user: TPerson) => ({
        url: `/api/v1/register`,
        method: 'POST',
        body: user
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useRegisterUserMutation } = registerNewUserApi;
