import * as React from "react";
import { FaStar } from 'react-icons/fa'


interface IconWrapperProps {
    selected: boolean
    onSelect: () => void
}

const IconWrapper: React.FC<IconWrapperProps> = ({ selected = false, onSelect = f => f }) => {
    return <FaStar color={selected ? 'red' : 'gren'} onClick={onSelect} />
}


const createArray = length => [...Array(length)]

export const StarRating = ({ totalStars = 5 }) => {
    const [selectedStars, setSelectedStars] = React.useState(0)

    return (
        <div style={{ padding: '5px'}}>
        { createArray(totalStars).map((n, i) => (
            <IconWrapper key={n} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
        )) }

        <p>
            {selectedStars} of {totalStars} stars
        </p>
        </div>
    )
}
