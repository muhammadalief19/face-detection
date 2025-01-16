import { NextUIProvider } from "@nextui-org/react";

function App({ cmp }) {
  return (
    <>
      <NextUIProvider>{cmp}</NextUIProvider>
    </>
  );
}

export default App;
