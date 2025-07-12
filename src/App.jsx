import { useEffect, useState } from "react";

const App = () => {

  const [renderCount, setRenderCount] = useState(0);
  const [data, setData] = useState(0);

  // 1. When the component is mounted and runs only once.
  // It will not run again on re-renders.
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // 2. When the component is mounted and on every update or re-render of the component.
  useEffect(() => {
    console.log('Component updated');
  });

  // 3. When the component is mounted and on every update or re-render of the component, but only if the dependency changes.
  useEffect(() => {
    console.log(`Render count changed: ${renderCount}`);
  }, [data]);

  return (
    <div>
      <button onClick={() => setRenderCount(renderCount + 1)}>Re-Render Component</button>
      &nbsp; <button onClick={() => setData(data + 1)}>Change Data</button>
    </div>
  )
}

export default App;