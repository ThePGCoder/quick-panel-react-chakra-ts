import { Center, Heading } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { data } from "../../../data/incomeData";
import {
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  YAxis,
  Area,
} from "recharts";
import FadeIn from "../../../components/FadeIn";
import { ActiveRouteContext } from "../../../hooks/activeRouteContext";

interface IncomeProps {}

const Income: React.FC<IncomeProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);
  useEffect(() => {
    changeActiveRoute("Income");
  }, []);
  return (
    <FadeIn>
      <Center
        justifyContent="center"
        height="calc(100vh - 100px)"
        flexDirection="column"
      >
        <Heading size="md" pb={4}>
          Income For 2023 (Jan-July)
        </Heading>
        <ResponsiveContainer width="80%" height="50%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#2c5282"
              fill="#2b6cb0"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#3182ce"
              fill="#4299e1"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#63b3ed"
              fill="#90cdf4"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Center>
    </FadeIn>
  );
};

export default Income;
