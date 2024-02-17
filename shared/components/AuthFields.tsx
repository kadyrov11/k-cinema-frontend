import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/regex'


interface IAuthFields {
    register: UseFormRegister<any>
    formState: FormState<any>
    isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
    register,
    formState: { errors },
    isPasswordRequired = false,
}) => {
    return (
        <>
            <Field
                {...register('email', {
                    required: 'Email is required!',
                    pattern: {
                        value: validEmail,
                        message: 'Invalid e-mail',
                    },
                })}
                placeholder="E-mail"
                // @ts-ignore
                error={errors.email}

            />
            <Field
                {...register(
                    'password',
                    isPasswordRequired
                        ? {
                            required: 'Password is required!',
                            minLength: {
                                value: 6,
                                message: 'Password must contain at least 6 characters.',
                            },
                        }
                        : {}
                )}
                placeholder="Password"
                type="password"
                // @ts-ignore
                error={errors.password}
            />
        </>
    )
}

export default AuthFields