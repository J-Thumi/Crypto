import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 

const cryptoNewsHeaders= {
    'X-RapidAPI-Key': '8886828998msh5349933319e72c1p1a95b6jsn7dd4337d7a2a',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
  }


  const baseUrl='https://crypto-news16.p.rapidapi.com'
  const createRequest=(url)=>({url, headers: cryptoNewsHeaders})

  export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptoNews: builder.query({
            query:({newsCategory, count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptoNewsQuery}= cryptoNewsApi