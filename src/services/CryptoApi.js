import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'



const cryptoApiHeaders={
    'X-RapidAPI-Key': '8886828998msh5349933319e72c1p1a95b6jsn7dd4337d7a2a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    
}


const baseUrl='https://coinranking1.p.rapidapi.com'


const createRequest=(url)=>({url, headers: cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        })
    })
})


export const {
    useGetCryptosQuery,
} = cryptoApi