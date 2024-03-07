'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

function MeshComponent() {
	const fileUrl = '/images/modal/scene.gltf'
	const mesh = useRef<Mesh>(null!)
	const gltf = useLoader(GLTFLoader, fileUrl)

	useFrame(() => {
		mesh.current.rotation.y += 0.001
	})

	return <primitive ref={mesh} object={gltf.scene} scale={0.01} position={[0, -1, 0]} />
}

export function Mosque() {
	return (
		<div className="h-[200px] bg-dark">
			<Canvas className="h-full" frameloop="always" shadows dpr={[1, 2]}>
				<ambientLight />
				<OrbitControls />
				<directionalLight position={[0, 10, 0]} intensity={1} />
				<pointLight position={[10, 10, 10]} />
				<MeshComponent />
			</Canvas>
		</div>
	)
}
