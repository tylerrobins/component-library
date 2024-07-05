import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const meta = {
  title: "BlackBox/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    htmlFor: {
      control: "text",
      description: "",
    },
    children: { control: "text", description: "Label text" },
    className: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "terms",
    children: "Accept terms and conditions",
  },
  decorators: [
    (Story) => (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Story />
      </div>
    ),
  ],
};
