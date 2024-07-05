import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/components/ui/progress";
import * as React from "react";

const meta = {
  title: "BlackBox/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Progress>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Progress value={33} />,
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}

export const DemoProgress: Story = {
  render: () => <ProgressDemo />,
  decorators: [
    (Story) => (
      <div style={{ width: "500px" }}>
        <Story />
      </div>
    ),
  ],
};
