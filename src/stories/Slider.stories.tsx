import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components/ui/slider";

const meta = {
  title: "BlackBox/Slider",
  component: Slider,
  parameters: { layout: "centered" },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    step: {
      control: "number",
    },
    defaultValue: {
      control: undefined,
      description: "number[]",
    },
    inverted: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[60%]",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "500px" }}>
        <Story />
      </div>
    ),
  ],
};
