import React from 'react';

function RewardPoints({ points }) {
    const formattedPoints = new Intl.NumberFormat('en-US').format(points);
    return (
        <>
            <h3 className="">Your Points</h3>
            <h2 className="text-4xl font-bold m-5">{formattedPoints}</h2>
        </>
    );
}

export default RewardPoints;
