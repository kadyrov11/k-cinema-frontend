"use client"
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IMovieEditInput } from './movie-edit.interface'
import { useEditMovie } from './useEditMovie'

import Select from '@/ui/Select'
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
import { useGenresAdmin } from './useGenresAdmin'
import { useActorsAdmin } from './useActorsAdmin'

const Movie: FC = () => {
    const {
        control,
        register,
        setValue,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm<IMovieEditInput>({
        mode: 'onBlur'
    })

    const { isLoading, onSubmit } = useEditMovie(setValue)
    const { isLoading: isGenresLoading, data: genres } = useGenresAdmin()
    const { isLoading: isActorsLoading, data: actors } = useActorsAdmin()

    return <Meta title='Edit Movie'>
        <AdminNavigation />
        <Heading title='Edit Movie' />
        <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
            {isLoading ? <SkeletonLoader count={3} /> :
                <>
                    <div className={formStyles.fields}>
                        <Field {...register('title',
                            { required: "Title is required" })}
                            placeholder='Title'
                            error={errors.title}
                        />
                        <SlugField
                            register={register}
                            error={errors.slug}
                            generate={() => setValue('slug', generateSlug(getValues('title')))}
                        />
                        <Field {...register('parameters.country', { required: "Icon is required" })}
                            placeholder='Icon'
                            error={errors?.parameters?.country}
                            style={{ width: '31%' }}
                        />
                        <Field {...register('parameters.duration', { required: "Duration is required" })}
                            placeholder='Duration(min.)'
                            error={errors?.parameters?.duration}
                            style={{ width: '31%' }}
                        />
                        <Field {...register('parameters.year', { required: "Year is required" })}
                            placeholder='Year'
                            error={errors?.parameters?.year}
                            style={{ width: '31%' }}
                        />
                        <Controller
                            control={control}
                            name='genres'
                            render={({
                                field,
                                fieldState: { error }
                            }) => <Select
                                    field={field}
                                    options={genres || []}
                                    isLoading={isGenresLoading}
                                    isMulti
                                    placeholder='Genres'
                                    error={error}
                                />}
                            rules={{
                                required: "Select at least one genre!"
                            }}
                        />
                        <Controller
                            control={control}
                            name='actors'
                            render={({
                                field,
                                fieldState: { error }
                            }) => <Select
                                    field={field}
                                    options={actors || []}
                                    isLoading={isGenresLoading}
                                    isMulti
                                    placeholder='Actors'
                                    error={error}
                                />}
                            rules={{
                                required: "Select at least one actor!"
                            }}
                        />
                        <Controller
                            control={control}
                            name='poster'
                            defaultValue=''
                            render={({
                                field: { value, onChange },
                                fieldState: { error }
                            }) => <UploadField
                                    onChange={onChange}
                                    value={value}
                                    error={error}
                                    folder='movies'
                                    placeholder='Poster'
                                    isImage
                                />}
                            rules={{
                                required: "Poster is required"
                            }}
                        />
                        <Controller
                            control={control}
                            name='bigPoster'
                            defaultValue=''
                            render={({
                                field: { value, onChange },
                                fieldState: { error }
                            }) => <UploadField
                                    onChange={onChange}
                                    value={value}
                                    error={error}
                                    folder='movies'
                                    placeholder='Big Poster'
                                    isImage
                                />}
                            rules={{
                                required: "Big Poster is required"
                            }}
                        />
                        <Controller
                            control={control}
                            name='videoUrl'
                            defaultValue=''
                            render={({
                                field: { value, onChange },
                                fieldState: { error }
                            }) => <UploadField
                                    onChange={onChange}
                                    value={value}
                                    error={error}
                                    folder='movies'
                                    placeholder='Trailer'
                                    isImage={false}
                                    style={{ marginTop: '-10px' }}
                                />}
                            rules={{
                                required: "Trailer is required"
                            }}
                        />

                    </div>
                    <Button>Update</Button>

                </>
            }
        </form>
    </Meta>
}

export default Movie