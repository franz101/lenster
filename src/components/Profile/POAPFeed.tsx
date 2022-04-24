import { ApolloClient, InMemoryCache } from '@apollo/client'
import { EmptyState } from '@components/UI/EmptyState'
import { Profile } from '@generated/types'
import { CollectionIcon } from '@heroicons/react/outline'
import React, { FC, useEffect, useState } from 'react'

const APIURL = 'https://api.thegraph.com/subgraphs/name/poap-xyz/poap'

interface Props {
  profile: Profile
}

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache()
})

const POAPFeed: FC<Props> = ({ profile }) => {
  const [poaps, setPoaps] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://frontend.poap.tech/actions/scan/node-fetch`
      const data = await (await fetch(url)).json()
      console.log('data', data)

      setPoaps(data)
    }

    fetchData()
  }, [])

  return (
    <>
      {/* {loading && <NFTSShimmer />} */}
      {(poaps as any)?.items?.length === 0 && (
        <EmptyState
          message={
            <div>
              <span className="mr-1 font-bold">@{profile?.handle}</span>
              <span>seems like have no POAPS!</span>
            </div>
          }
          icon={<CollectionIcon className="w-8 h-8 text-brand" />}
        />
      )}
      {poaps?.map((item: any) => {
        return (
          <span
            style={
              {
                height: '100px',
                width: '100px',
                // paddingRight: '5px',
                marginRight: '20px',
                backgroundColor: '#bbb',
                borderRadius: '50%',
                lineHeight: '100px',
                textAlign: 'center',
                fontSize: '10px',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              } as any
            }
            key={item.event.name}
          >
            <a>{item.event.name}</a>
            {/* <p style={{ fontSize: '12px' }}>{item.id}</p> */}
          </span>
        )
      })}

      {/*
      <ErrorMessage title="Failed to load nft feed" error={error} />
       {!error && (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {JSON.stringify(poaps)}
            {/* {poaps?.map((nft: Nft) => (
              <SingleNFT
                key={`${nft?.chainId}_${nft?.contractAddress}_${nft?.tokenId}`}
                nft={nft}
              />
            ))} 
          </div>
           pageInfo?.next && (
            <span ref={observe} className="flex justify-center p-5">
              <Spinner size="sm" />
            </span>
          )
        </>
      )} */}
    </>
  )
}

export default POAPFeed
