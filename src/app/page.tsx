import { IconPrompt } from "@tabler/icons-react";

import { Alert, AlertDescription, AlertTitle } from "@/component/Alert";

export default function Home() {
  return (
    <main className="p-2">
      <Alert>
        <IconPrompt className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </Alert>
    </main>
  );
}
