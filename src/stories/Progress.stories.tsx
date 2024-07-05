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
  render: () => (
    <div style={{ width: "400px" }}>
      <Progress value={33} />
    </div>
  ),
};

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ width: "500px" }}>
      <Progress value={progress} className="w-[60%]" />
    </div>
  );
}
