// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ParameterFiltersListReferralsRedeemableHolders } from '../models/ParameterFiltersListReferralsRedeemableHolders';
import { ParameterOrderListRedeemables } from '../models/ParameterOrderListRedeemables';
import { ReferralsMembersHoldersCreateInBulkRequestBody } from '../models/ReferralsMembersHoldersCreateInBulkRequestBody';
import { ReferralsMembersHoldersCreateInBulkResponseBody } from '../models/ReferralsMembersHoldersCreateInBulkResponseBody';
import { ReferralsMembersHoldersListResponseBody } from '../models/ReferralsMembersHoldersListResponseBody';

/**
 * no description
 */
export class ReferralsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.  📘 Alternative endpoint This endpoint is an alternative to the [Add Referral Code Holders endpoint](/api-reference/referrals/add-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Add Referral Code Holders
     * @param memberId Unique referral code or its identifier.
     * @param referralsMembersHoldersCreateInBulkRequestBody Specify the customer data to be upserted as redeemable holders.
     */
    public async referralsAddHolders(memberId: string, referralsMembersHoldersCreateInBulkRequestBody?: ReferralsMembersHoldersCreateInBulkRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("ReferralsApi", "referralsAddHolders", "memberId");
        }



        // Path Params
        const localVarPath = '/v1/referrals/members/{memberId}/holders'
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(referralsMembersHoldersCreateInBulkRequestBody, "ReferralsMembersHoldersCreateInBulkRequestBody", ""),
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
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.
     * Add Referral Code Holders with Campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param referralsMembersHoldersCreateInBulkRequestBody Specify the customer data to be upserted as redeemable holders.
     */
    public async referralsAddHolders1(campaignId: string, memberId: string, referralsMembersHoldersCreateInBulkRequestBody?: ReferralsMembersHoldersCreateInBulkRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("ReferralsApi", "referralsAddHolders1", "campaignId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("ReferralsApi", "referralsAddHolders1", "memberId");
        }



        // Path Params
        const localVarPath = '/v1/referrals/{campaignId}/members/{memberId}/holders'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(referralsMembersHoldersCreateInBulkRequestBody, "ReferralsMembersHoldersCreateInBulkRequestBody", ""),
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
     * Retrieves all the redeemables that have been assigned to the customer. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)
     * List Referral Code Holders with campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param order Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param startingAfterId A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * @param filters Filters for listing customer redeemables.
     */
    public async referralsCodeHolders(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListReferralsRedeemableHolders, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("ReferralsApi", "referralsCodeHolders", "campaignId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("ReferralsApi", "referralsCodeHolders", "memberId");
        }






        // Path Params
        const localVarPath = '/v1/referrals/{campaignId}/members/{memberId}/holders'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderListRedeemables", ""));
        }

        // Query Params
        if (startingAfterId !== undefined) {
            requestContext.setQueryParam("starting_after_id", ObjectSerializer.serialize(startingAfterId, "string", ""));
        }

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "ParameterFiltersListReferralsRedeemableHolders", "");
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
     * Retrieves the holders of the referral code from a referral campaign. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)  📘 Alternative endpoint This endpoint is an alternative to the [List Member Holders endpoint](/api-reference/referrals/list-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * List Referral Code Holders
     * @param memberId Unique referral code or its identifier.
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param order Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param startingAfterId A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * @param filters Filters for listing customer redeemables.
     */
    public async referralsCodeHolders1(memberId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListReferralsRedeemableHolders, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("ReferralsApi", "referralsCodeHolders1", "memberId");
        }






        // Path Params
        const localVarPath = '/v1/referrals/members/{memberId}/holders'
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderListRedeemables", ""));
        }

        // Query Params
        if (startingAfterId !== undefined) {
            requestContext.setQueryParam("starting_after_id", ObjectSerializer.serialize(startingAfterId, "string", ""));
        }

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "ParameterFiltersListReferralsRedeemableHolders", "");
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
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  📘 Alternative endpoint This endpoint is an alternative to the [Remove Referral Card Holder endpoint](/api-reference/referrals/remove-referral-card-holder-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Remove Referral Card Holder
     * @param memberId Unique referral code or its identifier.
     * @param holderId Unique identifier of a redeemable holder.
     */
    public async referralsRemoveHolder(memberId: string, holderId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("ReferralsApi", "referralsRemoveHolder", "memberId");
        }


        // verify required parameter 'holderId' is not null or undefined
        if (holderId === null || holderId === undefined) {
            throw new RequiredError("ReferralsApi", "referralsRemoveHolder", "holderId");
        }


        // Path Params
        const localVarPath = '/v1/referrals/members/{memberId}/holders/{holderId}'
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)))
            .replace('{' + 'holderId' + '}', encodeURIComponent(String(holderId)));

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
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)
     * Remove Referral Card Holder with campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param holderId Unique identifier of a redeemable holder.
     */
    public async referralsRemoveHolder1(campaignId: string, memberId: string, holderId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("ReferralsApi", "referralsRemoveHolder1", "campaignId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("ReferralsApi", "referralsRemoveHolder1", "memberId");
        }


        // verify required parameter 'holderId' is not null or undefined
        if (holderId === null || holderId === undefined) {
            throw new RequiredError("ReferralsApi", "referralsRemoveHolder1", "holderId");
        }


        // Path Params
        const localVarPath = '/v1/referrals/{campaignId}/members/{memberId}/holders/{holderId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)))
            .replace('{' + 'holderId' + '}', encodeURIComponent(String(holderId)));

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

}

export class ReferralsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to referralsAddHolders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async referralsAddHoldersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReferralsMembersHoldersCreateInBulkResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReferralsMembersHoldersCreateInBulkResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferralsMembersHoldersCreateInBulkResponseBody", ""
            ) as ReferralsMembersHoldersCreateInBulkResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReferralsMembersHoldersCreateInBulkResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferralsMembersHoldersCreateInBulkResponseBody", ""
            ) as ReferralsMembersHoldersCreateInBulkResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to referralsAddHolders1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async referralsAddHolders1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReferralsMembersHoldersCreateInBulkResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReferralsMembersHoldersCreateInBulkResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferralsMembersHoldersCreateInBulkResponseBody", ""
            ) as ReferralsMembersHoldersCreateInBulkResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReferralsMembersHoldersCreateInBulkResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferralsMembersHoldersCreateInBulkResponseBody", ""
            ) as ReferralsMembersHoldersCreateInBulkResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to referralsCodeHolders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async referralsCodeHoldersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReferralsMembersHoldersListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReferralsMembersHoldersListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferralsMembersHoldersListResponseBody", ""
            ) as ReferralsMembersHoldersListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReferralsMembersHoldersListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferralsMembersHoldersListResponseBody", ""
            ) as ReferralsMembersHoldersListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to referralsCodeHolders1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async referralsCodeHolders1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReferralsMembersHoldersListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReferralsMembersHoldersListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferralsMembersHoldersListResponseBody", ""
            ) as ReferralsMembersHoldersListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReferralsMembersHoldersListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferralsMembersHoldersListResponseBody", ""
            ) as ReferralsMembersHoldersListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to referralsRemoveHolder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async referralsRemoveHolderWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to referralsRemoveHolder1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async referralsRemoveHolder1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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

}
