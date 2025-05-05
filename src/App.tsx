import { useEffect, useState } from "react";
import { GrowthBook } from "@growthbook/growthbook";
import { autoAttributesPlugin } from "@growthbook/growthbook/plugins";

const growthbook = new GrowthBook({
  apiHost: "",
  clientKey: "",
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
  plugins: [autoAttributesPlugin()],
});
import Private from "./components/private";
import Public from "./components/public";
import { GrowthBookProvider } from "@growthbook/growthbook-react";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.init({ streaming: true });
  }, []);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      {login ? (
        <Private user={user} setLogin={setLogin} />
      ) : (
        <Public setLogin={setLogin} setUser={setUser} />
      )}
    </GrowthBookProvider>
  );
}

export default App;
