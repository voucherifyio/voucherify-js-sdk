import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies apiKey authentication to the request context.
 */
export class XAppIdAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "X-App-Id";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("X-App-Id", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class XAppTokenAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "X-App-Token";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("X-App-Token", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class XClientTokenAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "X-Client-Token";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("X-Client-Token", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class XClientApplicationIdAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "X-Client-Application-Id";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("X-Client-Application-Id", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class XManagementIdAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "X-Management-Id";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("X-Management-Id", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class XManagementTokenAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "X-Management-Token";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("X-Management-Token", this.apiKey);
    }
}

/**
 * Applies oauth2 authentication to the request context.
 */
export class XVoucherifyOAuthAuthentication implements SecurityAuthentication {
    /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
    public constructor(private accessToken: string) {}

    public getName(): string {
        return "X-Voucherify-OAuth";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + this.accessToken);
    }
}

export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "X-App-Id"?: SecurityAuthentication,
    "X-App-Token"?: SecurityAuthentication,
    "X-Client-Token"?: SecurityAuthentication,
    "X-Client-Application-Id"?: SecurityAuthentication,
    "X-Management-Id"?: SecurityAuthentication,
    "X-Management-Token"?: SecurityAuthentication,
    "X-Voucherify-OAuth"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };
export type HttpSignatureConfiguration = unknown; // TODO: Implement

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "X-App-Id"?: ApiKeyConfiguration,
    "X-App-Token"?: ApiKeyConfiguration,
    "X-Client-Token"?: ApiKeyConfiguration,
    "X-Client-Application-Id"?: ApiKeyConfiguration,
    "X-Management-Id"?: ApiKeyConfiguration,
    "X-Management-Token"?: ApiKeyConfiguration,
    "X-Voucherify-OAuth"?: OAuth2Configuration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["X-App-Id"]) {
        authMethods["X-App-Id"] = new XAppIdAuthentication(
            config["X-App-Id"]
        );
    }

    if (config["X-App-Token"]) {
        authMethods["X-App-Token"] = new XAppTokenAuthentication(
            config["X-App-Token"]
        );
    }

    if (config["X-Client-Token"]) {
        authMethods["X-Client-Token"] = new XClientTokenAuthentication(
            config["X-Client-Token"]
        );
    }

    if (config["X-Client-Application-Id"]) {
        authMethods["X-Client-Application-Id"] = new XClientApplicationIdAuthentication(
            config["X-Client-Application-Id"]
        );
    }

    if (config["X-Management-Id"]) {
        authMethods["X-Management-Id"] = new XManagementIdAuthentication(
            config["X-Management-Id"]
        );
    }

    if (config["X-Management-Token"]) {
        authMethods["X-Management-Token"] = new XManagementTokenAuthentication(
            config["X-Management-Token"]
        );
    }

    if (config["X-Voucherify-OAuth"]) {
        authMethods["X-Voucherify-OAuth"] = new XVoucherifyOAuthAuthentication(
            config["X-Voucherify-OAuth"]["accessToken"]
        );
    }

    return authMethods;
}