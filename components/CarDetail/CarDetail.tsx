import React from 'react';

export const CarDetail = ({ imgUrl, title, year, color, kilometers, gear, fuel }) => {
    return (
        <div>
            <h2>Car Details for {title}</h2>
        </div>
    );
};
