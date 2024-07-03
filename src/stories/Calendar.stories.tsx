import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@/components/ui/calendar";
import { CalendarForm } from "@/stories/helpers/CalendarForm";

const meta = {
  title: "BlackBox/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "multiple", "range", "default"],
      description: "Selection type of the date picker",
    },
    className: {
      control: "text",
      description:
        "The CSS class to add to the container element. To change the name of the class instead, use `classNames.root`.",
    },
    classNames: {
      control: "object",
      description:
        "Change the class names of the HTML elements.\n Use this prop when you need to change the default class names — for example when using CSS modules.",
    },
    defaultMonth: {
      control: "date",
      description:
        "The month displayed in the calendar. As opposed to {@link DayPickerBase.defaultMonth}, use this prop with {@link DayPickerBase.onMonthChange} to change the month programmatically.",
    },
    numberOfMonths: {
      control: "number",
      description: "The number of displayed months. @defaultValue 1",
    },
    showOutsideDays: {
      control: "boolean",
      description:
        "Show the week numbers column. Weeks are numbered according to the local week index.\n - to use ISO week numbering, use the {@link ISOWeek} prop.\n - to change how the week numbers are displayed, use the {@link Formatters} prop.\n@see  {@link ISOWeek}, {@link weekStartsOn} and {@link firstWeekContainsDate}.\n@defaultValue false",
    },
    weekStartsOn: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5", "6"],
      description:
        "The day of January, which is always in the first week of the year. Can be either Monday (`1`) or Thursday (`4`).\n@see https://date-fns.org/docs/getWeek\n@see https://en.wikipedia.org/wiki/Week#Numbering\n@see {@link ISOWeek}.",
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    mode: "default",
    className: "rounded-md border shadow",
    showOutsideDays: true,
    classNames: {},
  },
};

export const Multiple: Story = {
  args: {
    mode: "multiple",
    className: "rounded-md border shadow",
    showOutsideDays: true,
    classNames: {},
  },
};

export const Range: Story = {
  args: {
    mode: "range",
    className: "rounded-md border shadow",
    showOutsideDays: true,
    classNames: {},
  },
};

export const WithForm: Story = {
  render: (args) => (
    <div>
      <CalendarForm {...args} />
    </div>
  ),
  args: {
    mode: "default",
    className: "",
    showOutsideDays: true,
    classNames: {},
  },
};
