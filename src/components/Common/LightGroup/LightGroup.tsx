import React from 'react'
import { CustomSpotLight } from "components/Common"
const LightGroup = () => {
  return (
    <>
      {/* <pointLight position={[-10, -1, -3]} color={"#ed490e"} intensity={2}/> */}
      <CustomSpotLight
        lightFrom={[-2, 2.5, 1]}
        lightTo={[-1.4, 1, 2.5]}
        lightColor={"#ff4400"}
        angle={0.2}
      />
    </>
  );
}

export default LightGroup