import type { Meta, StoryObj } from "@storybook/react";
import { Sheet } from "@/components/ui/sheet";

const meta = {
  title: "BlackBox/Sheet",
  component: Sheet,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Sheet>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
