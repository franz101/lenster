import { ApolloClient, InMemoryCache } from '@apollo/client'
import NFTSShimmer from '@components/Shared/Shimmer/NFTSShimmer'
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
  const [loading, setLoading] = useState<boolean>(true)
  const [poaps, setPoaps] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const url = `https://frontend.poap.tech/actions/scan/${profile.ownedBy}`
        const data = await (await fetch(url)).json()
        setPoaps(data)
        console.log('data', data)
      } catch (error) {
        console.log(error)
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <>
      {loading && <NFTSShimmer />}
      {!loading && (poaps as any)?.length === 0 && (
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
      {(poaps || []).map((item: any) => {
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
            <a
              href={`https://app.poap.xyz/token/${item.tokenId}`}
              target="_blank"
              rel="noreferrer"
            >
              {item.event.name}
            </a>
          </span>
        )
      })}
    </>
  )
}

export default POAPFeed
