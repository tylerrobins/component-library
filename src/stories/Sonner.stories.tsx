import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@/components/ui/sonner";

const meta = {
  title: "BlackBox/Sonner",
  component: Toaster,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Toaster>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
