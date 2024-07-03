import { Terminal } from "lucide-react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "BlackBox/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "The variant of the alert",
    },
    children: {
      control: undefined,
      description: "Alert content",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Control: Story = {
  args: {
    variant: "default",
    children: (
      <>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Alert!</AlertTitle>
        <AlertDescription>This is the control alert...</AlertDescription>
      </>
    ),
  },
  argTypes: {
    children: { table: { disable: true } },
  },
};

export const Default: Story = {
  args: {
    variant: "default",
    children: (
      <>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </>
    ),
  },
  argTypes: {
    variant: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: (
      <>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </>
    ),
  },
  argTypes: {
    variant: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};
