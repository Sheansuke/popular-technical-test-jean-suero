import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TypingParagraph } from "@molecules/TypingParagraph";

export default {
  title: "Keyboard/TypingParagraph",
  component: TypingParagraph,
  argTypes: {},
} as ComponentMeta<typeof TypingParagraph>;

const Template: ComponentStory<typeof TypingParagraph> = (args) => (
  <TypingParagraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
    paragraph: "esto no es un parrafo de prueba",
    statusLettersList: [false,true],
    currentLetterPosition: 0,
    pulsedKey: ""
};
