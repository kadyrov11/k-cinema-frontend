import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import Field from '../Field'

import styles from './SlugField.module.scss'

interface ISlugField {
    error?: FieldError
    register: UseFormRegister<any>
    generate: () => void
}

const SlugField: FC<ISlugField> = ({ generate, register, error }) => {
    return <div className='relative' style={{ width: '31%' }}>
        <Field {...register('slug', { required: "Slug is required" })}
            placeholder='Slug'
            error={error}
        />

        <button type='button' className={styles.badge} onClick={generate}>
            Generate
        </button>
    </div>
}

export default SlugField