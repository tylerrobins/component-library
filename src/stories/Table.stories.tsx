import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@/components/ui/table";

const meta = {
  title: "BlackBox/Table",
  component: Table,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Table>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
