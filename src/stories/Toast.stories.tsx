import type { Meta, StoryObj } from "@storybook/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { withToastProvider } from "@/stories/helpers/withToastProvider";

const meta = {
  title: "BlackBox/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withToastProvider],
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const WithTitle: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};
