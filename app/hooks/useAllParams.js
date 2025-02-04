import { has, isArray } from "lodash";
import { useSearchParams } from "next/navigation"

export const useAllParams = () => {
    const searchParams = useSearchParams();
    let allParams = {}
    searchParams.forEach((value, key) => {
        if (has(allParams, key)) {
            allParams[key] = isArray(allParams[key]) ? [...allParams[key], value] : [allParams[key], value]
        } else {
            allParams[key] = value
        }
    })
    return allParams
}