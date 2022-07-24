import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Letter } from "@atoms/Letter";

export default {
  title: "Keyboard/Letter",
  component: Letter,
  argTypes: {},
} as ComponentMeta<typeof Letter>;

const Template: ComponentStory<typeof Letter> = (args) => (
  <Letter {...args} />
);

export const Default = Template.bind({});
Default.args = {};
