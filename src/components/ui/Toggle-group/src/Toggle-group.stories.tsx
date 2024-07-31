import type { Meta, StoryObj } from "@storybook/react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/Toggle-group/toggle-group";

const meta = {
  title: "BlackBox/ToggleGroup",
  component: ToggleGroup,
  parameters: { layout: "centered" },
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
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
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleGroup>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "single",
    variant: "default",
    size: "default",
    children: (
      <>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </>
    ),
  },
};
