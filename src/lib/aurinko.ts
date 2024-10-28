'use server'

import { auth } from "@clerk/nextjs/server"

export const getAurinkoAuthorizationUrl = async (serviceType: 'Google' | 'Office365') => {
    const { userId } = await auth();
    if(!userId )throw new Error("Unauthorized")

        const params=new URLSearchParams({

            clientId:process.env.AURINKO_CLIENT_ID as string,
            serviceType,
            scopes:"mail red mail. readwrite mail send",
            responseType:'code',
            returnUrl:`${process.env.NEXT_PUBLIC_URL}/api/aurinko/callback`

        })
        return `https://api.aurinko.io/v1/auth/authorize?${params.toString()}`
}