import React, {useEffect, useState} from "react";

function RewardsList() {
    const [rewards, setRewards] = useState([]);

    async function fetchRewards() {
        try {
            const response = await fetch("http://127.0.0.1:3000/rewards");
            if (response.ok) {
                const json = await response.json();
                setRewards(json);
            } else {
                throw response;
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchRewards();
    }, []);

    return (
        <div className="bg-neutral-800 p-6 rounded-2xl mt-10">
            <h3 className="text-3xl mb-4">Loyalty Reward Options</h3>
            <div className="reward-list flex flex-wrap justify-center">
                {rewards.map((reward) => (
                    <div key={reward.id}
                         className="border-1 rounded-lg m-2 p-2 border-neutral-700 bg-neutral-700 w-54 hover:bg-neutral-600 cursor-pointer">
                        <div className="text-7xl p-2">{reward.image}</div>
                        <div className="text-2xl">{reward.name}</div>
                        <div>
                            {new Intl.NumberFormat('en-US').format(reward.cost)} Points
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RewardsList;
