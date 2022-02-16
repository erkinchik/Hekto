import React, {FC} from 'react';

import './DropItem.scss'

interface DropItemProps {
    children:string
}
const DropItem:FC<DropItemProps> = ({children}) => {
    return (
        <li className='dropItem'>{children}</li>
    );
};

export default DropItem;