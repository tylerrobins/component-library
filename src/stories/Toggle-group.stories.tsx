import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup } from "@/components/ui/toggle-group";

const meta = {
  title: "BlackBox/ToggleGroup",
  component: ToggleGroup,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToggleGroup>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
