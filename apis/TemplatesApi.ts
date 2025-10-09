// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ParameterFiltersListTemplates } from '../models/ParameterFiltersListTemplates';
import { ParameterTemplatesList } from '../models/ParameterTemplatesList';
import { TemplatesCampaignsCampaignSetupCreateRequestBody } from '../models/TemplatesCampaignsCampaignSetupCreateRequestBody';
import { TemplatesCampaignsCampaignSetupCreateResponseBody } from '../models/TemplatesCampaignsCampaignSetupCreateResponseBody';
import { TemplatesCampaignsCreateRequestBody } from '../models/TemplatesCampaignsCreateRequestBody';
import { TemplatesCampaignsCreateTemplateResponseBody } from '../models/TemplatesCampaignsCreateTemplateResponseBody';
import { TemplatesCampaignsGetResponseBody } from '../models/TemplatesCampaignsGetResponseBody';
import { TemplatesCampaignsListResponseBody } from '../models/TemplatesCampaignsListResponseBody';
import { TemplatesCampaignsTierSetupCreateRequestBody } from '../models/TemplatesCampaignsTierSetupCreateRequestBody';
import { TemplatesCampaignsTierSetupCreateResponseBody } from '../models/TemplatesCampaignsTierSetupCreateResponseBody';
import { TemplatesCampaignsUpdateRequestBody } from '../models/TemplatesCampaignsUpdateRequestBody';
import { TemplatesCampaignsUpdateResponseBody } from '../models/TemplatesCampaignsUpdateResponseBody';

/**
 * no description
 */
export class TemplatesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a promotion tier out of a discount campaign template and adds it to an existing promotion campaign. To add a promotion tier to a campaign, you need to provide the name in the request and the campaign ID. Other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an action or an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the promotion tier. When the promotion tier has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rule-assignment).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Add Promotion Tier From Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param templatesCampaignsTierSetupCreateRequestBody Only name and campaign_id are required. The rest of the fields will overwrite the template configuration.
     */
    public async addTierFromTemplate(campaignTemplateId: string, templatesCampaignsTierSetupCreateRequestBody?: TemplatesCampaignsTierSetupCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignTemplateId' is not null or undefined
        if (campaignTemplateId === null || campaignTemplateId === undefined) {
            throw new RequiredError("TemplatesApi", "addTierFromTemplate", "campaignTemplateId");
        }



        // Path Params
        const localVarPath = '/v1/templates/campaigns/{campaignTemplateId}/tier-setup'
            .replace('{' + 'campaignTemplateId' + '}', encodeURIComponent(String(campaignTemplateId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(templatesCampaignsTierSetupCreateRequestBody, "TemplatesCampaignsTierSetupCreateRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Id"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-Voucherify-OAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a campaign out of a campaign template. To create a campaign, you need to provide the name in the request, while other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the campaign. When the campaign has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rules-assignments).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign From Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param templatesCampaignsCampaignSetupCreateRequestBody Only name is required. The rest of the fields will overwrite the template configuration.
     */
    public async createCampaignFromTemplate(campaignTemplateId: string, templatesCampaignsCampaignSetupCreateRequestBody?: TemplatesCampaignsCampaignSetupCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignTemplateId' is not null or undefined
        if (campaignTemplateId === null || campaignTemplateId === undefined) {
            throw new RequiredError("TemplatesApi", "createCampaignFromTemplate", "campaignTemplateId");
        }



        // Path Params
        const localVarPath = '/v1/templates/campaigns/{campaignTemplateId}/campaign-setup'
            .replace('{' + 'campaignTemplateId' + '}', encodeURIComponent(String(campaignTemplateId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(templatesCampaignsCampaignSetupCreateRequestBody, "TemplatesCampaignsCampaignSetupCreateRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Id"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-Voucherify-OAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a template for a discount or gift campaign, or a promotion tier. A template stores campaign configuration **without** the following details: - Campaign name - Category - Code count The following elements are not supported by campaign templates: - Redeeming API keys - Redeeming users - Customer loyalty tier - Static segments  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template), - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign Template
     * @param templatesCampaignsCreateRequestBody Provide details for a campaign template
     */
    public async createCampaignTemplate(templatesCampaignsCreateRequestBody?: TemplatesCampaignsCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/templates/campaigns';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(templatesCampaignsCreateRequestBody, "TemplatesCampaignsCreateRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Id"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-Voucherify-OAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes the campaign template permanently.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Delete Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     */
    public async deleteCampaignTemplate(campaignTemplateId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignTemplateId' is not null or undefined
        if (campaignTemplateId === null || campaignTemplateId === undefined) {
            throw new RequiredError("TemplatesApi", "deleteCampaignTemplate", "campaignTemplateId");
        }


        // Path Params
        const localVarPath = '/v1/templates/campaigns/{campaignTemplateId}'
            .replace('{' + 'campaignTemplateId' + '}', encodeURIComponent(String(campaignTemplateId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Id"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-Voucherify-OAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves a campaign template available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Get Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     */
    public async getCampaignTemplate(campaignTemplateId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignTemplateId' is not null or undefined
        if (campaignTemplateId === null || campaignTemplateId === undefined) {
            throw new RequiredError("TemplatesApi", "getCampaignTemplate", "campaignTemplateId");
        }


        // Path Params
        const localVarPath = '/v1/templates/campaigns/{campaignTemplateId}'
            .replace('{' + 'campaignTemplateId' + '}', encodeURIComponent(String(campaignTemplateId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Id"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-Voucherify-OAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists all campaign templates available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * List Campaign Templates
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param startingAfterId A cursor for pagination. It retrieves the campaign templates created after a template with the given ID.
     * @param order Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param includeTotal If set to true, the response returns the number of all campaign templates, regardless of the applied filters or limits. Set to false by default.
     * @param filters Filters for listing templates.
     */
    public async listCampaignTemplates(limit?: number, startingAfterId?: string, order?: ParameterTemplatesList, includeTotal?: boolean, filters?: ParameterFiltersListTemplates, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/v1/templates/campaigns';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (startingAfterId !== undefined) {
            requestContext.setQueryParam("starting_after_id", ObjectSerializer.serialize(startingAfterId, "string", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterTemplatesList", ""));
        }

        // Query Params
        if (includeTotal !== undefined) {
            requestContext.setQueryParam("include_total", ObjectSerializer.serialize(includeTotal, "boolean", ""));
        }

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "ParameterFiltersListTemplates", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Id"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-Voucherify-OAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the name or description of the campaign template.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Update Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param templatesCampaignsUpdateRequestBody Provide the new name or description for the campaign template
     */
    public async updateCampaignTemplate(campaignTemplateId: string, templatesCampaignsUpdateRequestBody?: TemplatesCampaignsUpdateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignTemplateId' is not null or undefined
        if (campaignTemplateId === null || campaignTemplateId === undefined) {
            throw new RequiredError("TemplatesApi", "updateCampaignTemplate", "campaignTemplateId");
        }



        // Path Params
        const localVarPath = '/v1/templates/campaigns/{campaignTemplateId}'
            .replace('{' + 'campaignTemplateId' + '}', encodeURIComponent(String(campaignTemplateId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(templatesCampaignsUpdateRequestBody, "TemplatesCampaignsUpdateRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Id"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-App-Token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-Voucherify-OAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class TemplatesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addTierFromTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addTierFromTemplateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TemplatesCampaignsTierSetupCreateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TemplatesCampaignsTierSetupCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TemplatesCampaignsTierSetupCreateResponseBody", ""
            ) as TemplatesCampaignsTierSetupCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TemplatesCampaignsTierSetupCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TemplatesCampaignsTierSetupCreateResponseBody", ""
            ) as TemplatesCampaignsTierSetupCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCampaignFromTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createCampaignFromTemplateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TemplatesCampaignsCampaignSetupCreateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TemplatesCampaignsCampaignSetupCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TemplatesCampaignsCampaignSetupCreateResponseBody", ""
            ) as TemplatesCampaignsCampaignSetupCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TemplatesCampaignsCampaignSetupCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TemplatesCampaignsCampaignSetupCreateResponseBody", ""
            ) as TemplatesCampaignsCampaignSetupCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCampaignTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createCampaignTemplateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TemplatesCampaignsCreateTemplateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TemplatesCampaignsCreateTemplateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TemplatesCampaignsCreateTemplateResponseBody", ""
            ) as TemplatesCampaignsCreateTemplateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TemplatesCampaignsCreateTemplateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TemplatesCampaignsCreateTemplateResponseBody", ""
            ) as TemplatesCampaignsCreateTemplateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCampaignTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCampaignTemplateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCampaignTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCampaignTemplateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TemplatesCampaignsGetResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TemplatesCampaignsGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TemplatesCampaignsGetResponseBody", ""
            ) as TemplatesCampaignsGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TemplatesCampaignsGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TemplatesCampaignsGetResponseBody", ""
            ) as TemplatesCampaignsGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCampaignTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCampaignTemplatesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TemplatesCampaignsListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TemplatesCampaignsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TemplatesCampaignsListResponseBody", ""
            ) as TemplatesCampaignsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TemplatesCampaignsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TemplatesCampaignsListResponseBody", ""
            ) as TemplatesCampaignsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCampaignTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCampaignTemplateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TemplatesCampaignsUpdateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TemplatesCampaignsUpdateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TemplatesCampaignsUpdateResponseBody", ""
            ) as TemplatesCampaignsUpdateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TemplatesCampaignsUpdateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TemplatesCampaignsUpdateResponseBody", ""
            ) as TemplatesCampaignsUpdateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
