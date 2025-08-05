import {type Berry, colors, type FirmnessLevel, titles} from "../types.ts";
import * as React from "react";
import {FirmnessMeter} from "./firmness-meter.tsx";

function FirmnessItem(props: {
    firmness: FirmnessLevel,
    selectedFirmness: FirmnessLevel,
    setSelectedFirmness: React.Dispatch<React.SetStateAction<FirmnessLevel>>,
    groupedByFirmness: Record<string, Berry[]>,
}) {
    return (
        <div
            className="rounded-lg hover:bg-gray-100 p-2 cursor-pointer"
            onClick={() => props.setSelectedFirmness(props.firmness)}
        >
            <div className="text-sm font-bold" style={props.firmness === props.selectedFirmness ? {
                color: colors[props.firmness]
            } : {}}>{titles[props.firmness]}</div>
            <div className="text-xs text-gray-500">{props.groupedByFirmness[props.firmness]?.length}</div>
        </div>
    )
}

export function FirmnessSelector(props: {
    selectedFirmness: FirmnessLevel,
    setSelectedFirmness: React.Dispatch<React.SetStateAction<FirmnessLevel>>,
    groupedByFirmness: Record<string, Berry[]>,
}) {
    return (
        <div className="flex gap-4">
            <div>
                <FirmnessMeter level={props.selectedFirmness}/>
            </div>

            <div className="flex flex-col-reverse w-40 border-e pe-6 border-dashed border-gray-300">
                {Object.keys(titles).map(key => {
                    return (
                        <FirmnessItem
                            key={key}
                            firmness={key as FirmnessLevel}
                            selectedFirmness={props.selectedFirmness}
                            setSelectedFirmness={props.setSelectedFirmness}
                            groupedByFirmness={props.groupedByFirmness}
                        />
                    )
                })}
            </div>
        </div>
    )
}
