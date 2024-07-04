import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

export const withToastProvider = (Story: any) => (
  <ToastProvider>
    <Story />
    <Toaster />
    <ToastViewport />
  </ToastProvider>
);
