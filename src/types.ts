export const firmnessLevels = ["very-soft", "soft", "hard", "very-hard", "super-hard"] as const;

export type FirmnessLevel = typeof firmnessLevels[number];

export type Berry = {
    name: string,
    firmness: FirmnessLevel,
    flavors: {
        flavor: string,
        potency: number
    }[]
}

export const titles: Record<FirmnessLevel, string> = {
    ["very-soft"]: "Very Soft",
    ["soft"]: "Soft",
    ["hard"]: "Hard",
    ["very-hard"]: "Very Hard",
    ["super-hard"]: "Super Hard",
}

export const colors = {
    ["very-soft"]: "lightgreen",
    ["soft"]: "lightgreen",
    ["hard"]: "orange",
    ["very-hard"]: "red",
    ["super-hard"]: "crimson",
}