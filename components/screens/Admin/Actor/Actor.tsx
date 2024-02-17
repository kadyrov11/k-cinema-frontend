"use client"
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IActorEditInput } from './actor-edit.interface'
import { useEditActor } from './useEditActor'

import Meta from '@/utils/meta/Meta'
import Heading from '@/ui/Heading/Heading'
import Field from '@/ui/form-elements/Field'
import Button from '@/ui/form-elements/Button'
import SkeletonLoader from '@/ui/SkeletonLoader'
import SlugField from '@/ui/form-elements/SlugField'
import generateSlug from '@/utils/strings/generateSlug'
import AdminNavigation from '@/ui/AdminPanel/AdminNavigation'

import formStyles from '@/styles/admin-form.module.scss'
import UploadField from '@/ui/form-elements/UploadField/UploadField'

const Actor: FC = () => {
    const {
        control,
        register,
        setValue,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm<IActorEditInput>({
        mode: 'onBlur'
    })

    const { isLoading, onSubmit } = useEditActor(setValue)

    return <Meta title='Edit actor'>
        <AdminNavigation />
        <Heading title='Edit Actor' />
        <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
            {isLoading ? <SkeletonLoader count={3} /> :
                <>
                    <div className={formStyles.fields}>
                        <Field {...register('name',
                            { required: "Name is required" })}
                            placeholder='Name'
                            error={errors.name}
                        />
                        <SlugField
                            register={register}
                            error={errors.slug}
                            generate={() => setValue('slug', generateSlug(getValues('name')))}
                        />
                        <Controller
                            control={control}
                            name='image'
                            defaultValue=''
                            render={({
                                field: { value, onChange },
                                fieldState: { error }
                            }) => <UploadField
                                    onChange={onChange}
                                    value={value}
                                    error={error}
                                    folder='actors'
                                    placeholder='Photo '
                                    isImage
                                />}
                            rules={{
                                required: "Photo is required"
                            }}
                        />
                    </div>
                    <Button>Update</Button>

                </>
            }
        </form>
    </Meta>
}

export default Actor