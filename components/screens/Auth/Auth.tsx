"use client"
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from './useAuthRedirect'

import Meta from '@/utils/meta/Meta'
import Heading from '@/ui/Heading/Heading'
import Button from '@/ui/form-elements/Button'
import AuthFields from '@/shared/components/AuthFields'

import { IAuthInput } from './auth.interface'

import styles from './Auth.module.scss'
import { useActions } from '@/hooks/useActions'

const Auth: FC = () => {
    useAuthRedirect()

    const { isLoading } = useAuth()
    const [type, setType] = useState<'login' | 'register'>('login')

    const { register: registerInput, handleSubmit, formState, reset } = useForm<IAuthInput>({
        mode: 'onBlur'
    })

    const { register, login } = useActions()

    const onSubmit: SubmitHandler<IAuthInput> = (data) => {
        if (type === 'login') login(data)
        else if (type === 'register') register(data)

        reset()
    }

    return <Meta title='Auth'>
        <section className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading title='Auth' className='mb-6 bg-transparent' />

                <AuthFields formState={formState} register={registerInput} isPasswordRequired />

                <div className={styles.buttons}>
                    <Button
                        type='submit'
                        onClick={() => setType('login')}
                        disabled={isLoading}
                    >
                        Login
                    </Button>
                    <Button
                        type='submit'
                        onClick={() => setType('register')}
                        disabled={isLoading}
                    >
                        Register
                    </Button>
                </div>
            </form>
        </section>
    </Meta>
}

export default Auth