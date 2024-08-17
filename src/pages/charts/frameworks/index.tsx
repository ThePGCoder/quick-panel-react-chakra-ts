import { Heading } from "@chakra-ui/react";
import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import { preferredFrameworks } from "../../../data/preferredFrameworks";
import Middle from "../../../components/Middle";
import FadeIn from "../../../components/FadeIn";

interface FrameworksProps {}

const Frameworks: React.FC<FrameworksProps> = () => {
  return (
    <>
      <FadeIn>
        <Middle>
          <Heading size="md" pb={4}>
            Prefered Framework
          </Heading>
          <ResponsiveContainer width="75%" height="50%">
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={preferredFrameworks}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar
                name="Team A"
                dataKey="A"
                stroke="#90CDF4"
                fill="#3182CE"
                fillOpacity={0.6}
              />
              <Radar
                name="Team B"
                dataKey="B"
                stroke="#FBB6CE"
                fill="#D53F8C"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </Middle>
      </FadeIn>
    </>
  );
};

export default Frameworks;
