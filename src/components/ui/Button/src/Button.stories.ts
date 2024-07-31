import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { fn } from "@storybook/test";

const meta = {
  title: "BlackBox/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The variant of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    onClick: {
      action: "clicked",
      description: "Button click handler",
    },
    children: {
      control: "text",
      description: "Button label",
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
  argTypes: {
    onClick: { table: { disable: true } },
  },
};

// export const Default: Story = {
//   args: {
//     children: "Button",
//     variant: "default",
//     size: "default",
//   },
//   argTypes: {
//     variant: { table: { disable: true } },
//     onClick: { table: { disable: true } },
//   },
// };

// export const Destructive: Story = {
//   args: {
//     children: "Button",
//     variant: "destructive",
//     size: "default",
//   },
//   argTypes: {
//     variant: { table: { disable: true } },
//     onClick: { table: { disable: true } },
//   },
// };

// export const Outline: Story = {
//   args: {
//     children: "Button",
//     variant: "outline",
//     size: "default",
//   },
//   argTypes: {
//     variant: { table: { disable: true } },
//     onClick: { table: { disable: true } },
//   },
// };

// export const Secondary: Story = {
//   args: {
//     children: "Button",
//     variant: "secondary",
//     size: "default",
//   },
//   argTypes: {
//     variant: { table: { disable: true } },
//     onClick: { table: { disable: true } },
//   },
// };

// export const Ghost: Story = {
//   args: {
//     children: "Button",
//     variant: "ghost",
//     size: "default",
//   },
//   argTypes: {
//     variant: { table: { disable: true } },
//     onClick: { table: { disable: true } },
//   },
// };

// export const Link: Story = {
//   args: {
//     children: "Button",
//     variant: "link",
//     size: "default",
//   },
//   argTypes: {
//     variant: {
//       table: {
//         disable: true,
//       },
//     },
//     onClick: {
//       table: {
//         disable: true,
//       },
//     },
//   },
// };
