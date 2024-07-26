import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@/components/ui/Textarea/textarea";
import { Label } from "@/components/ui/Label/label";
import { Button } from "@/components/ui/Button/button";

const meta = {
  title: "BlackBox/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  argTypes: {
    className: { control: "text" },
    placeholder: { control: "text" },
    id: { control: "text" },
    disabled: { control: "boolean" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here.",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Type your message here.",
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: "Type your message here.",
    id: "message",
  },
  decorators: [
    (Story) => (
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Story />
      </div>
    ),
  ],
};

export const WithText: Story = {
  args: {
    placeholder: "Type your message here.",
    id: "message-2",
  },
  decorators: [
    (Story) => (
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message-2">Your Message</Label>
        <Story />
        <p className="text-sm text-muted-foreground">
          Your message will be copied to the support team.
        </p>
      </div>
    ),
  ],
};

export const WithButton: Story = {
  args: {
    placeholder: "Type your message here.",
  },
  decorators: [
    (Story) => (
      <div className="grid w-full gap-2">
        <Story />
        <Button>Send message</Button>
      </div>
    ),
  ],
};
