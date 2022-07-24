import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ResultBoard } from "@molecules/ScoreBoard";

export default {
  title: "Keyboard/ResultBoard",
  component: ResultBoard,
  argTypes: {},
} as ComponentMeta<typeof ResultBoard>;

const Template: ComponentStory<typeof ResultBoard> = (args) => (
  <ResultBoard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
