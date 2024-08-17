import React, { useContext, useEffect } from "react";
import { ActiveRouteContext } from "../../hooks/activeRouteContext";
import FadeIn from "../../components/FadeIn";
import Middle from "../../components/Middle";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);
  useEffect(() => {
    changeActiveRoute("About");
  }, []);
  return (
    <>
      <FadeIn>
        <Middle>About</Middle>
      </FadeIn>
    </>
  );
};

export default About;
