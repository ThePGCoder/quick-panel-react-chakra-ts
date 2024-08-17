import React, { useContext, useEffect } from "react";
import { ActiveRouteContext } from "../../hooks/activeRouteContext";
import FadeIn from "../../components/FadeIn";
import Middle from "../../components/Middle";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);
  useEffect(() => {
    changeActiveRoute("Home");
  }, []);
  return (
   <>
        <FadeIn>
          <Middle>Home</Middle>
        </FadeIn>
   </>
  );
};

export default Home;
