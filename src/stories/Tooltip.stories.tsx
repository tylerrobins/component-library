import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "@/components/ui/tooltip";

const meta = {
  title: "BlackBox/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tooltip>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
