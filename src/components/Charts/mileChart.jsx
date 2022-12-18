import React from "react";

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

import mileStaticsData from "../../assets/DummyData/mileStatics";

const mileChart = () => {
    return (
        <ResponsiveContainer width="100%">
            <BarChart data={mileStaticsData}>
                <XAxis dataKey="name" stroke="#2884ff" axisLine={false} tickLine={false} />
                <Bar dataKey="mileStats" stroke="#2884ff" fill="#2884ff" barSize={30} />

                <Tooltip wrapperClassName="tooltip__style" cursor={false} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default mileChart;