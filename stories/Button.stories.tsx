import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { KeyButton } from "../components/atoms/KeyButton";

export default {
  title: "Keyboard/KeyButton",
  component: KeyButton,
  argTypes: {},
} as ComponentMeta<typeof KeyButton>;

const Template: ComponentStory<typeof KeyButton> = (args) => (
  <KeyButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
