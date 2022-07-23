import type { NextPage } from "next";
import { Keyboard } from "@organism/Keyboard";
import ConfigTyping from "@molecules/ConfigTyping";
import { ToggleTheme } from "@atoms/ToggleTheme";

const Home: NextPage = () => {
  return (
    <>
      <ToggleTheme listTheme={["dark", "light"]} />
      <ConfigTyping />
      <Keyboard />
    </>
  );
};

export default Home;
