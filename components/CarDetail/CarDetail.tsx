import React, { useEffect } from 'react';
import { Title, Strong, ImageBlock, Img, Div } from './CarDetailStyle';

// Display the details in the modal
export const CarDetail = ({ imgUrl, title, year, color, kilometers, gear, fuel }) => {
    return (
        <>
            <Title>Car Details for <Strong>{title}</Strong></Title>

            <ImageBlock>
                <Img src={imgUrl} alt={title} />
            </ImageBlock>
            <Div>
                <div>
                    <Title>Year: <Strong>{year}</Strong></Title>
                    <Title>Color: <Strong>{color}</Strong></Title>
                </div>
                <div>
                    <Title>KM: <Strong>{kilometers}</Strong></Title>
                    <Title>Gear: <Strong>{gear}</Strong></Title>
                    <Title>Fuel: <Strong>{fuel}</Strong></Title>
                </div>
            </Div>
        </>
    );
};
