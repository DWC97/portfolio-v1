"use client"

import { Digital } from "./Digital";
import RenderModel from "./RenderModel";

export default function Hero() {
    return (
        <div className="h-screen w-full relative">
            <div className="absolute top-0 left-0 opacity-60 w-full h-screen z-0">
                <RenderModel>
                    <Digital />
                </RenderModel>
            </div>
        </div>
    );
}
