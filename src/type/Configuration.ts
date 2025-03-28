/* tslint:disable */

/* eslint-disable */

export interface ConfigurationParameters {
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>)
    username?: string
    password?: string
    accessToken?: string
        | Promise<string>
        | ((name?: string, scopes?: string[]) => string)
        | ((name?: string, scopes?: string[]) => Promise<string>)
    basePath?: string
    baseOptions?: any
    formDataCtor?: new () => any
}

export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>)
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string
        | Promise<string>
        | ((name?: string, scopes?: string[]) => string)
        | ((name?: string, scopes?: string[]) => Promise<string>)
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any
    /**
     * The FormData constructor that will be used to create multipart form data
     * requests. You can inject this here so that execution environments that
     * do not support the FormData class can still run the generated client.
     *
     * @type {new () => FormData}
     */
    formDataCtor?: new () => any

    constructor(param: ConfigurationParameters = {}) {
        this.apiKey = param.apiKey
        this.username = param.username
        this.password = param.password
        this.accessToken = param.accessToken
        this.basePath = param.basePath
        this.baseOptions = param.baseOptions
        this.formDataCtor = param.formDataCtor
    }
}
