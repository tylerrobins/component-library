import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@/components/ui/tabs";

const meta = {
  title: "BlackBox/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tabs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
