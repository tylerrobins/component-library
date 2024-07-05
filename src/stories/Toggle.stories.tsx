import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/components/ui/toggle";

const meta = {
  title: "BlackBox/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    children: {
      control: "text",
      description: "Toggle label",
    },
  },
} satisfies Meta<typeof Toggle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "B",
    variant: "default",
    size: "default",
  },
};
