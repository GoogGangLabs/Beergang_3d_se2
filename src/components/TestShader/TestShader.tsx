import React, { useMemo, useRef } from 'react'
import lyquid from "assets/png/lyquid.png";
import brush from "assets/png/brush.png";
import { useTexture } from '@react-three/drei';
import { Raycaster, Vector2, Vector3 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

const fragmentShader = `
uniform sampler2D uTexture;
uniform sampler2D uTexture2;
uniform float uTime;
uniform vec3 uMouse;

varying vec3 vPosition;
varying vec2 vUv;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {
  
  vec2 direction = normalize(vPosition.xy - uMouse.xy);
  float dist = length(vPosition - uMouse);

  float prox = 1.-map(dist,0.,0.3,0.,1.);
  prox = clamp(prox, 0.,1.);

  vec2 zoomedUV = vUv + direction * prox / 100.;
  vec2 zoomedUV1 = mix(vUv, uMouse.xy + vec2(0.1), prox * 0.37);

  // gl_FragColor = texture2D(uTexture, vUv);
  // gl_FragColor = vec4(prox,prox,prox,1.);
  gl_FragColor = texture2D(uTexture,zoomedUV1);
}
`;

const TestShader = () => {
  const ref = useRef<any>();
  const texture1 = useTexture(lyquid);
  const texture2 = useTexture(brush);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture1 },
      uTexture2: { value: texture2 },
      uTime: { value: 0 },
      uMouse: { value: new Vector3()}
    }),
    [texture1, texture2]
  );
  
  useFrame((state, delta) => {
    ref.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
  })

  const clickMesh = (e:any) => {
    e.stopPropagation();
    ref.current.material.uniforms.uMouse.value = new Vector3(e.point.x - 2, e.point.y, 0);
  }

  return (
    <mesh ref={ref} scale={1} position={[2, 0, 2]} onPointerMove={clickMesh}>
      <planeBufferGeometry args={[3, 3, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default TestShader