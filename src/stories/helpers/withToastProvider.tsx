import { ToastProvider, ToastViewport } from "@/components/ui/Toast/toast";
import { Toaster } from "@/components/ui/Toaster/toaster";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withToastProvider = (Story: any) => (
  <ToastProvider>
    <Story />
    <Toaster />
    <ToastViewport />
  </ToastProvider>
);
