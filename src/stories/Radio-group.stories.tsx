import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const meta = {
  title: "BlackBox/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    dir: {
      control: "select",
      option: ["ltr", "rtl"],
      description: "The direction of navigation between items.",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    loop: {
      control: "boolean",
      description:
        "Whether keyboard navigation should loop around @defaultValue — false",
    },
    defaultValue: {
      control: "text",
      description:
        "The default selected radio button, must be set to match RadioGroupItem value.",
    },
    children: {
      control: undefined,
    },
  },
} satisfies Meta<typeof RadioGroup>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "comfortable",
    children: (
      <>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </>
    ),
  },
};
