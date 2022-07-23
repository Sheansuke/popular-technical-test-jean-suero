import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputRadio } from "@atoms/InputRadio";

export default {
  title: "Keyboard/InputRadio",
  component: InputRadio,
  argTypes: {},
} as ComponentMeta<typeof InputRadio>;

const Template: ComponentStory<typeof InputRadio> = (args) => (
  <InputRadio {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Esto no es un texto de prueba, lo juro"
};
