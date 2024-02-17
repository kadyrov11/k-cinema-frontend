"use client"
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { useProfile } from './useProfile'

import { IProfileInput } from './profile.interface'
import Meta from '@/utils/meta/Meta'
import Button from '@/ui/form-elements/Button'
import AuthFields from '@/shared/components/AuthFields'
import Heading from '@/ui/Heading/Heading'
import SkeletonLoader from '@/ui/SkeletonLoader'

const Profile: FC = () => {
    const { handleSubmit, register, formState, setValue } = useForm<IProfileInput>({
        mode: 'onChange'
    })

    const { isLoading, onSubmit } = useProfile(setValue)

    return (
        <Meta title='Profile'>
            <Heading title='Profile' className='mb-6 ' />
            <form onSubmit={handleSubmit(onSubmit)}>
                {isLoading ?
                    <SkeletonLoader count={2} height={70} /> :
                    <AuthFields formState={formState} register={register} />
                }
                <div>
                    <Button
                        type='submit'
                        disabled={isLoading}
                    >
                        Edit
                    </Button>

                </div>
            </form>
        </Meta>
    )
}

export default Profile 