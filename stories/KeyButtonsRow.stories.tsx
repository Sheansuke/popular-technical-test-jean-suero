import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { KeyButtonsRow } from "@molecules/KeyButtonsRow";

export default {
  title: "Keyboard/KeyButtonsRow",
  component: KeyButtonsRow,
  argTypes: {

  },
} as ComponentMeta<typeof KeyButtonsRow>;

const Template: ComponentStory<typeof KeyButtonsRow> = (args) => (
  <KeyButtonsRow {...args} />
);

export const Default = Template.bind({});
Default.args = {
    listKeys: ["q", "w"]
};
