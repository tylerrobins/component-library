import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withToastProvider = (Story: any) => (
  <ToastProvider>
    <Story />
    <Toaster />
    <ToastViewport />
  </ToastProvider>
);
