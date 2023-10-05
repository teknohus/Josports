import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Fielder(props) {
  const { nodes, materials } = useGLTF('/Models/fielders_glove_com.glb')
  return (
    <group {...props} scale={[6, 6, 6]} dispose={null}>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.middle_finger_pad1.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.MASH2_ReproMesh.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.polySurface313.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.middle_finger_pad.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.MASH2_ReproMesh1.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.index_finger_pad.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.MASH1_ReproMesh1.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.polySurface311.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.index_finger_hood.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.MASH1_ReproMesh.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.polySurface312.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.square_logo_3.geometry} material={materials.square_lgo} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.square_logo_patch.geometry} material={materials.Square_logo_patch} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.outside_line_square_logo.geometry} material={materials.outside_line} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.inside_line_square_logo.geometry} material={materials.blinn8} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.logo_without_outline001.geometry} material={materials.logo_without_outline_fr} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.legend_logo1.geometry} material={materials.logo_with_outline1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.logo_outline314.geometry} material={materials.logo_outline_fr} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.legend_logo.geometry} material={materials.circle_logo_fr} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.circle_logo001.geometry} material={materials.circle_logo1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.logo_stitch_round.geometry} material={materials.blinn18} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.body_palm.geometry} material={materials.blinn78} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Wrist.geometry} material={materials.wrist} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.thuimb.geometry} material={materials.thumb_inner} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.logoback2.geometry} material={materials.logo_back_2} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface332.geometry} material={materials.thumb_inner} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Lining.geometry} material={materials.inside} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Dtail2.geometry} material={materials.Dtail_3_fr} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Dtail3.geometry} material={materials.Dtail_3_fr} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Wire1.geometry} material={materials.laces} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Index_Inner.geometry} material={materials.Index_Inner1} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface297.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface298.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface299.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface300.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface301.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface302.geometry} material={materials.lambert} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Welt1.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Welt2.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Welt3.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Index_Outer.geometry} material={materials.index_outer} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Thumb_Outer.geometry} material={materials.thumb_outer} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Middle_Outer.geometry} material={materials.middle_outer} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Ring_Inner.geometry} material={materials.ring_inner} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Ring_Outer.geometry} material={materials.ring_outer} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Pinky_Inner1.geometry} material={materials.pinky_inner} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Pinky_Outer.geometry} material={materials.pinky_outer} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Wire.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.side_logo1.geometry} material={materials.side_logo} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.stitches1.geometry} material={materials.stitches} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface307.geometry} material={materials.blinn78} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface319.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface320.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface321.geometry} material={materials.lambert} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.strips.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.dual_welt001.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.489, -0.007, -0.396]} rotation={[-0.058, -0.399, -0.014]} scale={[1.033, 1, 1]}>
        <mesh geometry={nodes.index_top_mesh.geometry} material={materials.Index_Inner1} scale={0.025} />
      </group>
      <group position={[0.423, 0.008, -0.497]} rotation={[0.025, 0.763, -0.092]}>
        <mesh geometry={nodes.pinky_mesh.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.479, 0.01, -0.45]} rotation={[0.091, 0.133, 0.193]}>
        <mesh geometry={nodes.palm_mesh.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.354, -0.147, -0.414]} scale={1.438}>
        <mesh geometry={nodes.thumb_mesh_top.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.431, -0.004, -0.423]}>
        <mesh geometry={nodes.thumb_mesh_bot.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.448, -0.063, -0.447]} scale={[1.317, 1.409, 1.317]}>
        <mesh geometry={nodes.inside_palm_mesh.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.crown_lace.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <group scale={0.025}>
          <mesh geometry={nodes.crown_patch001_1.geometry} material={materials.blinn75} />
          <mesh geometry={nodes.crown_patch001_2.geometry} material={materials.lambert1} />
        </group>
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface297001.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface299001.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface300001.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface301001.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.polySurface302001.geometry} material={materials.lambert} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Welt2001.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Welt3001.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Welt1001.geometry} material={materials.welting} scale={0.025} />
      </group>
      <group position={[0.256, 0.076, -0.401]} rotation={[0.903, 0.847, -1.41]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.polySurface328.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.inlay.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.337, -0.01, -0.405]} rotation={[3.082, 0.669, -2.905]} scale={1.196}>
        <mesh geometry={nodes.polySurface333.geometry} material={materials.side_logo} scale={0.025} />
      </group>
      <group position={[0.337, -0.01, -0.405]} rotation={[3.082, 0.669, -2.905]} scale={1.196}>
        <mesh geometry={nodes.polySurface334.geometry} material={materials.side_logo} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web1_body.geometry} material={materials.web1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web1_stitches.geometry} material={materials.web_stitches} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web1_laces.geometry} material={materials.web_laces} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web2_body.geometry} material={materials.onepiece} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web2_stitches.geometry} material={materials.web2stitches} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web2_laces.geometry} material={materials.web2laces} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web3_stitches.geometry} material={materials.web3stitches} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web3_laces.geometry} material={materials.web3_laces1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]} rotation={[Math.PI, 0.691, -Math.PI]}>
        <mesh geometry={nodes.web3.geometry} material={materials.net_style1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web4.geometry} material={materials.laceH1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web4_stitches.geometry} material={materials.web4_stitches1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web4_laces_fr.geometry} material={materials.web4_laces} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web_5_stitches.geometry} material={materials.web5stitches} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web_5_laces.geometry} material={materials.web5laces} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web5.geometry} material={materials.ispiral} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web6_stitches.geometry} material={materials.web6stitches} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web6_laces.geometry} material={materials.web6laces} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web6.geometry} material={materials.lambert} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web7_stitches.geometry} material={materials.lambert} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web7_laces.geometry} material={materials.lambert} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web7.geometry} material={materials.blinn72} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web8.geometry} material={materials.eweb} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web8_laces.geometry} material={materials.web8laces} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web8_stitches.geometry} material={materials.web8stitches} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web9_stitches.geometry} material={materials.web9stitches} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web9_laces.geometry} material={materials.lambert} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web9.geometry} material={materials.cross1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web10_stitches.geometry} material={materials.web10stitches} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web10_laces.geometry} material={materials.web10laces} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web10.geometry} material={materials.basket} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web11.geometry} material={materials.base1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web11_stitches.geometry} material={materials.web11stitches} scale={0.025} />
      </group>
      <group position={[0.417, 0, -0.442]} rotation={[Math.PI, 0.691, -Math.PI]}>
        <mesh geometry={nodes.weblogo.geometry} material={materials.blinn76} scale={0.025} />
      </group>
      <group position={[0.417, 0, -0.442]} rotation={[Math.PI, 0.691, -Math.PI]}>
        <mesh geometry={nodes.logoback.geometry} material={materials.blinn77} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web11_laces.geometry} material={materials.web11laces} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web12_laces.geometry} material={materials.web12laces} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web12.geometry} material={materials.laceY} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web12_stitches.geometry} material={materials.web12stitches} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web11_stitches001.geometry} material={materials.web11stitches} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.web11_laces001.geometry} material={materials.web11laces} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.polySurface335.geometry} material={materials.base1} scale={0.025} />
      </group>
      <group position={[0.435, 0, -0.427]}>
        <mesh geometry={nodes.polySurface337.geometry} material={materials.base1} scale={0.025} />
      </group>
      <group position={[0.553, 0.289, -0.336]} rotation={[0.083, 0.786, -0.406]} scale={[2.108, 1.855, 0.1]}>
        <mesh geometry={nodes.pCube1.geometry} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.417, 0.032, -0.404]} rotation={[3.118, 0.689, -3.032]} scale={0.805}>
        <mesh geometry={nodes.Middle_Inner.geometry} material={materials.middle_inner} scale={0.025} />
      </group>
    </group>
  )
}

useGLTF.preload('/Models/fielders_glove_com.glb')
