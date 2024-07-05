import type { Meta, StoryObj } from "@storybook/react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

const meta = {
  title: "BlackBox/ResizablePanel",
  component: ResizablePanelGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: { control: "text" },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    keyboardResizeBy: {
      control: "number",
    },
    children: {
      control: undefined,
    },
  },
} satisfies Meta<typeof ResizablePanelGroup>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: "vertical",
    className: "min-h-[200px] min-w-[300px] rounded-lg border",
    children: (
      <>
        <ResizablePanel defaultSize={50}>One</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Two</ResizablePanel>
      </>
    ),
  },
};

export const Stacked: Story = {
  args: {
    direction: "horizontal",
    className: "max-w-md rounded-lg border",
    children: (
      <>
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </>
    ),
  },
};

export const Handle: Story = {
  args: {
    direction: "horizontal",
    className: "min-h-[200px] max-w-md rounded-lg border",
    children: (
      <>
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </>
    ),
  },
};
