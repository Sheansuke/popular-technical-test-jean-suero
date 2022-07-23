import type { NextPage } from "next";
import { Keyboard } from "@organism/Keyboard";
import ConfigTyping from "@molecules/ConfigTyping";

const Home: NextPage = () => {
  return (
    <>
      <ConfigTyping />
      <Keyboard />
    </>
  );
};

export default Home;
