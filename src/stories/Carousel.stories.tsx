import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Adjust the import path as needed

const meta = {
  title: "BlackBox/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    opts: {
      control: "object",
      description: "Options for configuring the carousel behavior",
      table: {
        type: {
          summary: "CarouselOptions",
          detail: `
            {
              align: 'start' | 'center' | 'end' | ((viewSize: number, snapSize: number) => number);
              axis: 'x' | 'y';
              container: string | HTMLElement | null;
              slides: string | HTMLElement[] | NodeListOf<HTMLElement> | null;
              containScroll: false | 'trimSnaps' | 'keepSnaps';
              direction: 'ltr' | 'rtl';
              slidesToScroll: 'auto' | number;
              dragFree: boolean;
              dragThreshold: number;
              inViewThreshold: number | number[];
              loop: boolean;
              skipSnaps: boolean;
              duration: number;
              startIndex: number;
              watchDrag: boolean | ((emblaApi: EmblaCarouselType, evt: PointerEventType) => boolean | void);
              watchResize: boolean | ((emblaApi: EmblaCarouselType, entries: ResizeObserverEntry[]) => boolean | void);
              watchSlides: boolean | ((emblaApi: EmblaCarouselType, mutations: MutationRecord[]) => boolean | void);
            }
          `,
        },
      },
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    opts: {
      align: "start",
      axis: "x",
      container: null,
      slides: null,
      containScroll: "trimSnaps",
      direction: "ltr",
      slidesToScroll: "auto",
      dragFree: true,
      dragThreshold: 0,
      inViewThreshold: 0,
      loop: true,
      skipSnaps: true,
      duration: 3,
      startIndex: 1,
      watchDrag: true,
      watchResize: false,
      watchSlides: false,
    },
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselContent>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
