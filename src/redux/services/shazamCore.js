
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key', 'd0f214c7b6mshc70b1de7b9ba9cfp101c11jsnbe6f3452e40c');
        return headers;
    }}),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}), 
    }),
});

export const {useGetTopChartsQuery} = shazamCoreApi;