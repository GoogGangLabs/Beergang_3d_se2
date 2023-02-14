import { useControls } from 'leva';
import React, { useEffect, useRef, VFC } from 'react';
import { EffectComposer, RenderPass, ShaderPass } from 'three-stdlib';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { Effects } from '@react-three/drei';
import { GlitchPass } from "three/addons/postprocessing/GlitchPass.js";
import { RipplePass } from './RipplePass';

extend({ EffectComposer, RenderPass, ShaderPass, GlitchPass })

const WaveEffect = () => {
	// const dist_datas = useControls('Distortion', {
	// 	enabled: true,
	// 	progress: { value: 0, min: 0, max: 1, step: 0.01 },
	// 	scale: { value: 1, min: 0, max: 5, step: 0.01 }
	// })

	// const ripple_datas = useControls('Ripple', {
	// 	enabled: true
	// })

	// const composerRef = useRef(null)
	const { gl, scene, camera, size } = useThree()

	// useEffect(() => {
	// 	composerRef.current.setSize(size.width, size.height)
	// }, [size])

	// useFrame(() => {
	// 	composerRef.current.render()
	// }, 1)

	return (
		<Effects>
			{/* <renderPass attachArray="passes" args={[scene, camera]} /> */}
			{/* <DistortionPass {...dist_datas} /> */}
			{/* <glitchPass/> */}
			<RipplePass enabled={true} />
		</Effects>
	)
}

export default WaveEffect