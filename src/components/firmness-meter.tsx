import {colors, type FirmnessLevel, firmnessLevels} from "../types";

export function FirmnessMeter({level}: { level: FirmnessLevel }) {
    const index = firmnessLevels.indexOf(level);
    const percentage = Math.max(0, Math.min(index * 20, 100));

    return (
        <div
            className="relative w-11 h-full rounded-full bg-gradient-to-b from-white to-gray-100 shadow-inner overflow-hidden border border-gray-300">
            <div className="relative w-full h-full">
                <div
                    className="absolute bottom-0 left-0 w-full px-0.5 py-2 transition-all"
                    style={{
                        bottom: `${percentage}%`,
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                    }}
                >
                    <div className="w-8 h-8 bg-white rounded-full"
                         style={{
                             boxShadow: `0 0 10px 5px ${colors[level]}`,
                         }}/>
                </div>
            </div>
        </div>
    );
}
