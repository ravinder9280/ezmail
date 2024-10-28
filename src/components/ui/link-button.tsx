'use client'
import React from 'react'
import { Button } from './button'
import { getAurinkoAuthorizationUrl } from '@/lib/aurinko'

type Props = {}

 const linkAccountButton = (props: Props) => {
  return (
    <Button onClick={async()=>{
        const authUrl=await getAurinkoAuthorizationUrl('Google')
        console.log(authUrl);
        

    }}>
LINK Account
    </Button>
  )
}

export default linkAccountButton