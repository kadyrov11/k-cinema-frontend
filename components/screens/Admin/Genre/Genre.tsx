"use client"
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IGenreEditInput } from './genre-edit.interface'
import { useEditGenre } from './useEditGenre'

import Meta from '@/utils/meta/Meta'
import Heading from '@/ui/Heading/Heading'
import Field from '@/ui/form-elements/Field'
import Button from '@/ui/form-elements/Button'
import SkeletonLoader from '@/ui/SkeletonLoader'
import SlugField from '@/ui/form-elements/SlugField'
import TextEditor from '@/ui/form-elements/TextEditor'
import generateSlug from '@/utils/strings/generateSlug'
import AdminNavigation from '@/ui/AdminPanel/AdminNavigation'

import formStyles from '@/styles/admin-form.module.scss'
import { stripHtml } from 'string-strip-html'

const Genre: FC = () => {
    const {
        control,
        register,
        setValue,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm<IGenreEditInput>({
        mode: 'onBlur'
    })

    const { isLoading, onSubmit } = useEditGenre(setValue)

    return <Meta title='Edit genre'>
        <AdminNavigation />
        <Heading title='Edit Genre' />
        <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
            {isLoading ? <SkeletonLoader count={3} /> :
                <>
                    <div className={formStyles.fields}>
                        <Field {...register('name',
                            { required: "Name is required" })}
                            placeholder='Name'
                            error={errors.name}
                            style={{ width: '31%' }}
                        />
                        <SlugField
                            register={register}
                            error={errors.slug}
                            generate={() => setValue('slug', generateSlug(getValues('name')))}
                        />
                        <Field {...register('icon', { required: "Icon is required" })}
                            placeholder='Icon'
                            error={errors.icon}
                            style={{ width: '31%' }}
                        />
                    </div>
                    <Controller
                        control={control}
                        name='description'
                        defaultValue=''
                        render={({
                            field: { value, onChange },
                            fieldState: { error }
                        }) => <TextEditor
                                onChange={onChange}
                                value={value}
                                error={error}
                                placeholder='Description'
                            />}
                        rules={{
                            validate: {
                                required: (v) => (v && stripHtml(v).result.length > 0) ||
                                    "Description is required"
                            }
                        }}
                    />
                    <Button>Update</Button>

                </>
            }
        </form>
    </Meta>
}

export default Genre