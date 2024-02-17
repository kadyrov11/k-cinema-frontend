import { useEffect } from "react"
// import { useRouter } from "next/router"
import { useRouter, useSearchParams } from 'next/navigation'

import { useAuth } from "@/hooks/useAuth"

export const useAuthRedirect = () => {
    const { push } = useRouter()
    const searchParams = useSearchParams()

    const { user } = useAuth()


    const redirect = searchParams.get('redirect') || "/"

    useEffect(() => {
        if (user) push(redirect)
    }, [user, redirect])
}

