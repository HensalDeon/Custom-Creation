import { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import state from "../store";
const Backdrop = () => {
    const shadows = useRef();
    return (
        <AccumulativeShadows
            ref={shadows}
            temporal //smooth edges of the shadows
            frames={60} //fps
            alphaTest={0.85} //transparency of the shadows
            scale={7}
            rotation={[Math.PI / 2, 0, 0]} //setuping the angle of view
            position={[0, 0, -0.14]}
            color={state.color}
        >
            {/* used to setup the light effect which will create a backshadow of the model */}
            <RandomizedLight amount={4} radius={9} intensity={0.55} ambient={0.25} position={[5, 5, -10]} />
            <RandomizedLight amount={4} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -9]} />
        </AccumulativeShadows>
    );
};

export default Backdrop;
