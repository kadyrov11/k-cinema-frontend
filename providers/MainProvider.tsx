"use client"
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'

import Toaster from './Toaster'

import { store } from '@/store/store'
import AuthProvider from './AuthProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

type Props = {
  children: ReactNode
}

const MainProvider = ({ children }: Props) => {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <AuthProvider>
            {children}
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default MainProvider