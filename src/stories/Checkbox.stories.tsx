import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/ui/Checkbox/checkbox";
import {
  CheckboxReactHookFormSingle,
  CheckboxReactHookFormMultiple,
} from "@/stories/helpers/CheckboxForm";

const meta = {
  title: "BlackBox/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Standard: Story = {
  render: () => (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms2" disabled />
      <label
        htmlFor="terms2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const SingleForm: Story = {
  render: () => <CheckboxReactHookFormSingle />,
};

export const MultipleForm: Story = {
  render: () => <CheckboxReactHookFormMultiple />,
};
