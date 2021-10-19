import * as React from "react";
import {faSvgFromIcon, Icons} from '../fa-icons'


interface IconWrapperProps {
    selected: boolean
    onSelect: () => void
    icon: string
}

const IconWrapper: React.FC<IconWrapperProps> = ({ selected = false, icon, onSelect = f => f }) => {
    return <i style={{ color: selected ? 'red' : 'grey', display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: icon }} onClick={onSelect}></i>
}


const createArray = length => [...Array(length)]

export const StarRating = ({ totalStars = 5 }) => {
    const [selectedStars, setSelectedStars] = React.useState(0)

    return (
        <div>
        { createArray(totalStars).map((n, i) => (
            <IconWrapper key={n} selected={selectedStars > i} icon={faSvgFromIcon(Icons.fasFaStar, 3)}onSelect={() => setSelectedStars(i + 1)} />
        )) }

        <p>
            {selectedStars} of {totalStars} stars
        </p>
        </div>
    )
}
