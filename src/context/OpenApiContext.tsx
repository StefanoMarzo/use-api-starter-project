import {createContext, useContext} from 'react'
import axios, {AxiosInstance} from 'axios'
import {Configuration} from "../../generated";

type OpenApiGeneratorConfiguration = {
    configuration: Configuration
    axiosInstance: AxiosInstance
    baseUrl?: string
}

const OpenApiGeneratorConfigurationContext = createContext<OpenApiGeneratorConfiguration>({
    configuration: new Configuration(),
    axiosInstance: axios.create(),
})


const useOpenApiGenerator = (api?: string): OpenApiGeneratorConfiguration => {
    // You can add more sophisticated backend API configuration logic here if needed
    return useContext<OpenApiGeneratorConfiguration>(OpenApiGeneratorConfigurationContext)
}

export {
    useOpenApiGenerator,
    OpenApiGeneratorConfigurationContext
}
