import { FC } from 'react'
import { ToastContainer } from 'react-toastify'

const ReduxToastr: FC = () => {
    return (
        <ToastContainer
            autoClose={3500}
            position="top-right"
            newestOnTop={false}
            theme="dark"
        />
    )
}

export default ReduxToastr