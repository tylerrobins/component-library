import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion/index";

const meta = {
  title: "BlackBox/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "The type of accordion",
    },
    collapsible: {
      control: "boolean",
      description: "Whether the accordion items are collapsible",
    },
    children: {
      control: undefined,
      description: "Accordion content",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    type: "single",
    collapsible: false,
    children: (
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    ),
  },
  argTypes: {
    type: {
      control: false,
      table: { disable: true },
    },
  },
};

export const Multiple: Story = {
  args: {
    type: "multiple",
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It is styled using Tailwind CSS.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it responsive?</AccordionTrigger>
          <AccordionContent>Yes. It is fully responsive.</AccordionContent>
        </AccordionItem>
      </>
    ),
  },
  argTypes: {
    type: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
};
