import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar } from "@molecules/Navbar";

export default {
  title: "Keyboard/Navbar",
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Popular",
    hasToggleTheme: true
};
