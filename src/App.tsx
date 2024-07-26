import { Button } from "@/components/ui/Button/button";
import { ToastAction } from "@/components/ui/Toast/toast";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/Progress/progress";

export function ToastWithAction() {
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
}

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ToastWithAction />
      <Progress value={33} />
    </>
  );
}
