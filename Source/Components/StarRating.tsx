import * as React from "react";
import { faSvgFromIcon, Icons } from '../fa-icons'


interface IconWrapperProps {
    selected: boolean
    icon: string
    onSelect: () => void
}

const IconWrapper: React.FC<IconWrapperProps> = ({ selected = false, icon, onSelect = f => f }) => {
    return <i style={{ color: selected ? 'red' : 'grey' }} dangerouslySetInnerHTML={{ __html: icon }} onClick={onSelect}></i>
}


const createArray = length => [...Array(length)]

export const StarRating = ({ totalStars = 5 }) => {
    const [selectedStars, setSelectedStars] = React.useState(0)

    return (
        <div style={{ padding: '5px'}}>
        { createArray(totalStars).map((n, i) => (
            <IconWrapper key={n} selected={selectedStars > i} icon={faSvgFromIcon(Icons.fasFaStar, 3)} onSelect={() => setSelectedStars(i + 1)} />
        )) }

        <p>
            {selectedStars} of {totalStars} stars
        </p>
        </div>
    )
}
