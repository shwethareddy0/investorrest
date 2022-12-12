import React, { useState } from "react";
import TraditionalComparableListing from "../components/TranditionalComparableListing";

// 397651 - property id as an example
function CompareProperty() {
  const [ready, setReady] = useState(false);
  return (
    <div>
      <button onClick={() => setReady(true)}>Ready</button>
      {ready && <TraditionalComparableListing propertyId={397651} />}
    </div>
  );
}

export default CompareProperty;
