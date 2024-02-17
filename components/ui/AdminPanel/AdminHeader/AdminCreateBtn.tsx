import Button from '@/ui/form-elements/Button'
import { FC } from 'react'

const AdminCreateBtn: FC<{ onClick: () => void }> = ({ onClick }) => {
    return <Button onClick={onClick}><strong>+</strong> Add New</Button>
}

export default AdminCreateBtn