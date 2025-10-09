// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ParameterCreatedBeforeAfter } from '../models/ParameterCreatedBeforeAfter';
import { ParameterFiltersListRedemptions } from '../models/ParameterFiltersListRedemptions';
import { ParameterOrderListRedemptions } from '../models/ParameterOrderListRedemptions';
import { RedemptionsGetResponseBody } from '../models/RedemptionsGetResponseBody';
import { RedemptionsListResponseBody } from '../models/RedemptionsListResponseBody';
import { RedemptionsRedeemRequestBody } from '../models/RedemptionsRedeemRequestBody';
import { RedemptionsRedeemResponseBody } from '../models/RedemptionsRedeemResponseBody';
import { RedemptionsRollbackCreateRequestBody } from '../models/RedemptionsRollbackCreateRequestBody';
import { RedemptionsRollbackCreateResponseBody } from '../models/RedemptionsRollbackCreateResponseBody';
import { RedemptionsRollbacksCreateRequestBody } from '../models/RedemptionsRollbacksCreateRequestBody';
import { RedemptionsRollbacksCreateResponseBody } from '../models/RedemptionsRollbacksCreateResponseBody';
import { VouchersRedemptionGetResponseBody } from '../models/VouchersRedemptionGetResponseBody';

/**
 * no description
 */
export class RedemptionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Return a redemption or redemption rollback object. This object can either be a successfull or failed redemption or redemption rollback.
     * Get Redemption
     * @param redemptionId ID of previously created redemption.
     */
    public async getRedemption(redemptionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'redemptionId' is not null or undefined
        if (redemptionId === null || redemptionId === undefined) {
            throw new RequiredError("RedemptionsApi", "getRedemption", "redemptionId");
        }


        // Path Params
        const localVarPath = '/v1/redemptions/{redemptionId}'
            .replace('{' + 'redemptionId' + '}', encodeURIComponent(String(redemptionId)));

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
     * Retrieve the number of times a voucher was redeemed and each of the redemption details.
     * Get Voucher\'s Redemptions
     * @param code A **code** that identifies the voucher.
     */
    public async getVoucherRedemptions(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("RedemptionsApi", "getVoucherRedemptions", "code");
        }


        // Path Params
        const localVarPath = '/v1/vouchers/{code}/redemption'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

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
     * Returns a list of redemptions previously created. The redemptions are returned in a sorted order, with the most recent redemptions appearing first. The response returns a list of redemptions of all vouchers.  # Filtering results The result can be narrowed according to specified (or default) filters, for example, you can sort redemptions by date: https://api.voucherify.io/v1/redemptions?limit 3&[created_at][before] 2017-09-08T13:52:18.227Z. A filter based on the object created_at field narrows down the results and lists redemptions done before or after a particular date time. You can use the following options: [created_at][after], [created_at][before]. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z. # Failed Redemptions A redemption may fail for various reasons. You can figure out an exact reason from the failure_code: - resource_not_found - voucher with given code does not exist - voucher_not_active - voucher is not active yet (before start date) - voucher_expired - voucher has already expired (after expiration date) - voucher_disabled -  voucher has been disabled (active: false) - quantity_exceeded - vouchers redemptions limit has been exceeded - gift_amount_exceeded - gift amount has been exceeded - customer_rules_violated - customer did not match the segment - order_rules_violated - order did not match validation rules - invalid_order - order was specified incorrectly - invalid_amount - order amount was specified incorrectly - missing_amount - order amount was not specified - missing_order_items - order items were not specified - missing_customer - customer was not specified
     * List Redemptions
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param page Which page of results to return. The lowest value is 1, the highest value is 99.
     * @param result A filter on the list based on the redemption result. Available options are: SUCCESS, FAILURE. You can provide multiple values by repeating the param.
     * @param campaign A filter by the campaign **name** that the redemption resources originate from.
     * @param customer Return redemptions performed by the customer with given id or source_id.
     * @param order Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param createdAt A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * @param filters Filters for listing responses.
     */
    public async listRedemptions(limit?: number, page?: number, result?: string, campaign?: string, customer?: string, order?: ParameterOrderListRedemptions, createdAt?: ParameterCreatedBeforeAfter, filters?: ParameterFiltersListRedemptions, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/v1/redemptions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (result !== undefined) {
            requestContext.setQueryParam("result", ObjectSerializer.serialize(result, "string", ""));
        }

        // Query Params
        if (campaign !== undefined) {
            requestContext.setQueryParam("campaign", ObjectSerializer.serialize(campaign, "string", ""));
        }

        // Query Params
        if (customer !== undefined) {
            requestContext.setQueryParam("customer", ObjectSerializer.serialize(customer, "string", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderListRedemptions", ""));
        }

        // Query Params
        if (createdAt !== undefined) {
            const serializedParams = ObjectSerializer.serialize(createdAt, "ParameterCreatedBeforeAfter", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "ParameterFiltersListRedemptions", "");
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
     * # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:   API keys with a Merchant role cant use this endpoint.  📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).      📘 Also available on client-side  This method is also accessible through public keys which you can use in client-side​ apps: mobile and web browser apps. Go to the dedicated [endpoint](/api-reference/client-side/redeem-stackable-discounts-client-side) to learn more.  - Use X-Client-Application-Id as the application ID header.  - Use X-Client-Token as the appliction secret key header.  - Use client-side base URL.  - Use an origin header for your custom domain.
     * Redeem Stackable Discounts
     * @param redemptionsRedeemRequestBody 
     */
    public async redeemStackedDiscounts(redemptionsRedeemRequestBody?: RedemptionsRedeemRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/redemptions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(redemptionsRedeemRequestBody, "RedemptionsRedeemRequestBody", ""),
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
     * Your business logic may include a case when you need to undo a redemption. You can revert a redemption by calling this API endpoint. This endpoint rolls back only single redemptions, meaning those that are not stacked. Stacked redemptions belong to a parent redemption. To roll back a parent redemption, including all of its individual redemptions, use the [POST Rollback Stackable Redemptions](/api-reference/redemptions/rollback-stackable-redemptions)  🚧  You can roll back a redemption up to 3 months back.   # Effect  The operation  - creates a rollback entry in vouchers redemption history (redemption.redemption_entries) and  - gives 1 redemption back to the pool (decreases redeemed_quantity by 1).  # Returned funds  In case of *gift card vouchers*, this method returns funds back according to the source redemption. In case of *loyalty card vouchers*, this method returns points back according to the source redemption.
     * Rollback Redemption
     * @param redemptionId The original redemption ID to be rolled back (undone).
     * @param reason Reason for the rollback.
     * @param trackingId Customers source_id.
     * @param redemptionsRollbackCreateRequestBody Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
     */
    public async rollbackRedemption(redemptionId: string, reason?: string, trackingId?: string, redemptionsRollbackCreateRequestBody?: RedemptionsRollbackCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'redemptionId' is not null or undefined
        if (redemptionId === null || redemptionId === undefined) {
            throw new RequiredError("RedemptionsApi", "rollbackRedemption", "redemptionId");
        }





        // Path Params
        const localVarPath = '/v1/redemptions/{redemptionId}/rollback'
            .replace('{' + 'redemptionId' + '}', encodeURIComponent(String(redemptionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (reason !== undefined) {
            requestContext.setQueryParam("reason", ObjectSerializer.serialize(reason, "string", ""));
        }

        // Query Params
        if (trackingId !== undefined) {
            requestContext.setQueryParam("tracking_id", ObjectSerializer.serialize(trackingId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(redemptionsRollbackCreateRequestBody, "RedemptionsRollbackCreateRequestBody", ""),
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
     * Rollback a stackable redemption. When you roll back a stacked redemption, all child redemptions will be rolled back. Provide the parent redemption ID as the path parameter. However, you can use this endpoint to roll back a single redemption that does not have a parent, similarly to [POST Rollback redemption](/api-reference/redemptions/rollback-redemption). 🚧   You can roll back a redemption up to 3 months back.
     * Rollback Stackable Redemptions
     * @param parentRedemptionId Unique identifier of a parent redemption, e.g. r_JQfm73zWSJFQxs3bGxweYjgm.
     * @param reason Reason for the rollback.
     * @param trackingId Customers source_id.
     * @param redemptionsRollbacksCreateRequestBody Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
     */
    public async rollbackStackedRedemptions(parentRedemptionId: string, reason?: string, trackingId?: string, redemptionsRollbacksCreateRequestBody?: RedemptionsRollbacksCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'parentRedemptionId' is not null or undefined
        if (parentRedemptionId === null || parentRedemptionId === undefined) {
            throw new RequiredError("RedemptionsApi", "rollbackStackedRedemptions", "parentRedemptionId");
        }





        // Path Params
        const localVarPath = '/v1/redemptions/{parentRedemptionId}/rollbacks'
            .replace('{' + 'parentRedemptionId' + '}', encodeURIComponent(String(parentRedemptionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (reason !== undefined) {
            requestContext.setQueryParam("reason", ObjectSerializer.serialize(reason, "string", ""));
        }

        // Query Params
        if (trackingId !== undefined) {
            requestContext.setQueryParam("tracking_id", ObjectSerializer.serialize(trackingId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(redemptionsRollbacksCreateRequestBody, "RedemptionsRollbacksCreateRequestBody", ""),
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

export class RedemptionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRedemption
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRedemptionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RedemptionsGetResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RedemptionsGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RedemptionsGetResponseBody", ""
            ) as RedemptionsGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RedemptionsGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RedemptionsGetResponseBody", ""
            ) as RedemptionsGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVoucherRedemptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVoucherRedemptionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VouchersRedemptionGetResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VouchersRedemptionGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VouchersRedemptionGetResponseBody", ""
            ) as VouchersRedemptionGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VouchersRedemptionGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VouchersRedemptionGetResponseBody", ""
            ) as VouchersRedemptionGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRedemptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRedemptionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RedemptionsListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RedemptionsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RedemptionsListResponseBody", ""
            ) as RedemptionsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RedemptionsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RedemptionsListResponseBody", ""
            ) as RedemptionsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to redeemStackedDiscounts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async redeemStackedDiscountsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RedemptionsRedeemResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RedemptionsRedeemResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RedemptionsRedeemResponseBody", ""
            ) as RedemptionsRedeemResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RedemptionsRedeemResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RedemptionsRedeemResponseBody", ""
            ) as RedemptionsRedeemResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rollbackRedemption
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rollbackRedemptionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RedemptionsRollbackCreateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RedemptionsRollbackCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RedemptionsRollbackCreateResponseBody", ""
            ) as RedemptionsRollbackCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RedemptionsRollbackCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RedemptionsRollbackCreateResponseBody", ""
            ) as RedemptionsRollbackCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rollbackStackedRedemptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rollbackStackedRedemptionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RedemptionsRollbacksCreateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RedemptionsRollbacksCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RedemptionsRollbacksCreateResponseBody", ""
            ) as RedemptionsRollbacksCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RedemptionsRollbacksCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RedemptionsRollbacksCreateResponseBody", ""
            ) as RedemptionsRollbacksCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
