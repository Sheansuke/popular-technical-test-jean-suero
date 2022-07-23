import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConfigTyping } from "@molecules/ConfigTyping/ConfigTyping";

export default {
  title: "Keyboard/ConfigTyping",
  component: ConfigTyping,
  argTypes: {},
} as ComponentMeta<typeof ConfigTyping>;

const Template: ComponentStory<typeof ConfigTyping> = (args) => (
  <ConfigTyping {...args} />
);

export const Default = Template.bind({});
Default.args = {};
