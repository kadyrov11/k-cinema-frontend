"use client"
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IUserEditInput } from './user-edit.interface'
import { useEditUser } from './useEditUser'

import Meta from '@/utils/meta/Meta'
import Heading from '@/ui/Heading/Heading'
import Button from '@/ui/form-elements/Button'
import SkeletonLoader from '@/ui/SkeletonLoader'
import AdminNavigation from '@/ui/AdminPanel/AdminNavigation'

import AuthFields from '@/shared/components/AuthFields'

const User: FC = () => {
    const {
        control,
        register,
        setValue,
        handleSubmit,
        formState,
    } = useForm<IUserEditInput>({
        mode: 'onBlur'
    })

    const { isLoading, onSubmit } = useEditUser(setValue)

    return <Meta title='Edit genre'>
        <AdminNavigation />
        <Heading title='Edit User' />
        <form onSubmit={handleSubmit(onSubmit)} className='admin-form'>
            {isLoading ? <SkeletonLoader count={3} /> :
                <>
                    <AuthFields register={register} formState={formState} />
                    <Controller control={control} name='isAdmin' render={({ field }) => (
                        <button onClick={e => {
                            e.preventDefault()
                            field.onChange(!field.value)
                        }}
                            className='text-link block mb-7'
                        >
                            {field.value ? "Appoint as user" : "Appoint as admin"}
                        </button>
                    )} />
                    <Button> Update</Button>
                </>
            }
        </form>
    </Meta >
}

export default User