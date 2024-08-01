import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { fn } from "@storybook/test";

const meta = {
  title: "BlackBox/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "The variant of the badge",
    },
    onClick: {
      action: "clicked",
      description: "Badge click handler",
    },
    children: {
      control: "text",
      description: "Badge label",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Control: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
  argTypes: {
    onClick: { table: { disable: true } },
  },
};

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
  argTypes: {
    variant: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
};

export const Secondary: Story = {
  args: {
    children: "Badge",
    variant: "secondary",
  },
  argTypes: {
    variant: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
};

export const Destructive: Story = {
  args: {
    children: "Badge",
    variant: "destructive",
  },
  argTypes: {
    variant: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
};

export const Outline: Story = {
  args: {
    children: "Badge",
    variant: "outline",
  },
  argTypes: {
    variant: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
};
