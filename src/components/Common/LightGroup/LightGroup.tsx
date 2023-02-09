import React from 'react'
import { CustomSpotLight } from "components/Common"
const LightGroup = () => {
  return (
    <>
      {/* <pointLight position={[-10, -1, -3]} color={"#ed490e"} intensity={2}/> */}
      <CustomSpotLight
        lightFrom={[-1.5, 2.2, 2]}
        lightTo={[-0.75, 0.5, 3.6]}
        lightColor={"#dc3e05"}
        angle={0.19}
        intensity={2.5}
        penumbra={0.8}
      />
      <CustomSpotLight
        lightFrom={[1.5, 2.2, 2]}
        lightTo={[0.75, 0.5, 3.6]}
        lightColor={"#5d6dff"}
        angle={0.22}
        intensity={2.5}
        penumbra={1}
      />
    </>
  );
}

export default LightGroup