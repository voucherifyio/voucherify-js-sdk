// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CampaignsTransactionsExportCreateResponseBody } from '../models/CampaignsTransactionsExportCreateResponseBody';
import { LoyaltiesCreateCampaignRequestBody } from '../models/LoyaltiesCreateCampaignRequestBody';
import { LoyaltiesCreateCampaignResponseBody } from '../models/LoyaltiesCreateCampaignResponseBody';
import { LoyaltiesDeleteResponseBody } from '../models/LoyaltiesDeleteResponseBody';
import { LoyaltiesEarningRulesCreateRequestBodyItem } from '../models/LoyaltiesEarningRulesCreateRequestBodyItem';
import { LoyaltiesEarningRulesCreateResponseBody } from '../models/LoyaltiesEarningRulesCreateResponseBody';
import { LoyaltiesEarningRulesDisableResponseBody } from '../models/LoyaltiesEarningRulesDisableResponseBody';
import { LoyaltiesEarningRulesEnableResponseBody } from '../models/LoyaltiesEarningRulesEnableResponseBody';
import { LoyaltiesEarningRulesGetResponseBody } from '../models/LoyaltiesEarningRulesGetResponseBody';
import { LoyaltiesEarningRulesListResponseBody } from '../models/LoyaltiesEarningRulesListResponseBody';
import { LoyaltiesEarningRulesUpdateRequestBody } from '../models/LoyaltiesEarningRulesUpdateRequestBody';
import { LoyaltiesEarningRulesUpdateResponseBody } from '../models/LoyaltiesEarningRulesUpdateResponseBody';
import { LoyaltiesGetCampaignResponseBody } from '../models/LoyaltiesGetCampaignResponseBody';
import { LoyaltiesListCampaignsResponseBody } from '../models/LoyaltiesListCampaignsResponseBody';
import { LoyaltiesListMembersResponseBody } from '../models/LoyaltiesListMembersResponseBody';
import { LoyaltiesMemberActivityListResponseBody } from '../models/LoyaltiesMemberActivityListResponseBody';
import { LoyaltiesMembersBalanceUpdateRequestBody } from '../models/LoyaltiesMembersBalanceUpdateRequestBody';
import { LoyaltiesMembersBalanceUpdateResponseBody } from '../models/LoyaltiesMembersBalanceUpdateResponseBody';
import { LoyaltiesMembersCreateRequestBody } from '../models/LoyaltiesMembersCreateRequestBody';
import { LoyaltiesMembersCreateResponseBody } from '../models/LoyaltiesMembersCreateResponseBody';
import { LoyaltiesMembersGetResponseBody } from '../models/LoyaltiesMembersGetResponseBody';
import { LoyaltiesMembersPendingPointsActivateResponseBody } from '../models/LoyaltiesMembersPendingPointsActivateResponseBody';
import { LoyaltiesMembersPendingPointsBalanceRequestBody } from '../models/LoyaltiesMembersPendingPointsBalanceRequestBody';
import { LoyaltiesMembersPendingPointsBalanceResponseBody } from '../models/LoyaltiesMembersPendingPointsBalanceResponseBody';
import { LoyaltiesMembersPendingPointsListResponseBody } from '../models/LoyaltiesMembersPendingPointsListResponseBody';
import { LoyaltiesMembersPointsExpirationListResponseBody } from '../models/LoyaltiesMembersPointsExpirationListResponseBody';
import { LoyaltiesMembersRedemptionRedeemRequestBody } from '../models/LoyaltiesMembersRedemptionRedeemRequestBody';
import { LoyaltiesMembersRedemptionRedeemResponseBody } from '../models/LoyaltiesMembersRedemptionRedeemResponseBody';
import { LoyaltiesMembersRewardsListResponseBody } from '../models/LoyaltiesMembersRewardsListResponseBody';
import { LoyaltiesMembersTiersListResponseBody } from '../models/LoyaltiesMembersTiersListResponseBody';
import { LoyaltiesMembersTransactionsExportCreateRequestBody } from '../models/LoyaltiesMembersTransactionsExportCreateRequestBody';
import { LoyaltiesMembersTransactionsExportCreateResponseBody } from '../models/LoyaltiesMembersTransactionsExportCreateResponseBody';
import { LoyaltiesMembersTransactionsListResponseBody } from '../models/LoyaltiesMembersTransactionsListResponseBody';
import { LoyaltiesMembersTransfersCreateResponseBody } from '../models/LoyaltiesMembersTransfersCreateResponseBody';
import { LoyaltiesPendingPointsListResponseBody } from '../models/LoyaltiesPendingPointsListResponseBody';
import { LoyaltiesPointsExpirationExportCreateRequestBody } from '../models/LoyaltiesPointsExpirationExportCreateRequestBody';
import { LoyaltiesPointsExpirationExportCreateResponseBody } from '../models/LoyaltiesPointsExpirationExportCreateResponseBody';
import { LoyaltiesRewardAssignmentsGetResponseBody } from '../models/LoyaltiesRewardAssignmentsGetResponseBody';
import { LoyaltiesRewardAssignmentsListResponseBody } from '../models/LoyaltiesRewardAssignmentsListResponseBody';
import { LoyaltiesRewardAssignmentsRewardGetResponseBody } from '../models/LoyaltiesRewardAssignmentsRewardGetResponseBody';
import { LoyaltiesRewardsCreateAssignmentItemRequestBody } from '../models/LoyaltiesRewardsCreateAssignmentItemRequestBody';
import { LoyaltiesRewardsCreateAssignmentResponseBody } from '../models/LoyaltiesRewardsCreateAssignmentResponseBody';
import { LoyaltiesRewardsGetResponseBody } from '../models/LoyaltiesRewardsGetResponseBody';
import { LoyaltiesRewardsListAssignmentsResponseBody } from '../models/LoyaltiesRewardsListAssignmentsResponseBody';
import { LoyaltiesRewardsUpdateAssignmentRequestBody } from '../models/LoyaltiesRewardsUpdateAssignmentRequestBody';
import { LoyaltiesRewardsUpdateAssignmentResponseBody } from '../models/LoyaltiesRewardsUpdateAssignmentResponseBody';
import { LoyaltiesTiersCreateInBulkRequestBodyItem } from '../models/LoyaltiesTiersCreateInBulkRequestBodyItem';
import { LoyaltiesTiersEarningRulesListResponseBody } from '../models/LoyaltiesTiersEarningRulesListResponseBody';
import { LoyaltiesTiersGetResponseBody } from '../models/LoyaltiesTiersGetResponseBody';
import { LoyaltiesTiersListResponseBody } from '../models/LoyaltiesTiersListResponseBody';
import { LoyaltiesTiersRewardsListResponseBody } from '../models/LoyaltiesTiersRewardsListResponseBody';
import { LoyaltiesTransactionsExportCreateRequestBody } from '../models/LoyaltiesTransactionsExportCreateRequestBody';
import { LoyaltiesTransactionsListResponseBody } from '../models/LoyaltiesTransactionsListResponseBody';
import { LoyaltiesTransferPoints } from '../models/LoyaltiesTransferPoints';
import { LoyaltiesUpdateCampaignRequestBody } from '../models/LoyaltiesUpdateCampaignRequestBody';
import { LoyaltiesUpdateCampaignResponseBody } from '../models/LoyaltiesUpdateCampaignResponseBody';
import { LoyaltyTier } from '../models/LoyaltyTier';
import { ParameterCreatedBeforeAfter } from '../models/ParameterCreatedBeforeAfter';
import { ParameterExpandListCampaigns } from '../models/ParameterExpandListCampaigns';
import { ParameterFiltersListMemberTransactions } from '../models/ParameterFiltersListMemberTransactions';
import { ParameterOrderCreatedAt } from '../models/ParameterOrderCreatedAt';
import { ParameterOrderListCampaigns } from '../models/ParameterOrderListCampaigns';
import { ParameterOrderListEarningRules } from '../models/ParameterOrderListEarningRules';
import { ParameterOrderListLoyaltyTiers } from '../models/ParameterOrderListLoyaltyTiers';
import { ParameterOrderListPendingPoints } from '../models/ParameterOrderListPendingPoints';
import { ParameterOrderListTransactions } from '../models/ParameterOrderListTransactions';
import { ParameterOrderVouchers } from '../models/ParameterOrderVouchers';
import { ParameterUpdatedBeforeAfter } from '../models/ParameterUpdatedBeforeAfter';
import { ParametersFiltersListCampaignTransactions } from '../models/ParametersFiltersListCampaignTransactions';

/**
 * no description
 */
export class LoyaltiesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Activate manually the pending points and add them to the loyalty card. The pending points are determined by the pending point ID. Once activated, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Activate Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     */
    public async activateMemberPendingPoints(memberId: string, pendingPointsId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "activateMemberPendingPoints", "memberId");
        }


        // verify required parameter 'pendingPointsId' is not null or undefined
        if (pendingPointsId === null || pendingPointsId === undefined) {
            throw new RequiredError("LoyaltiesApi", "activateMemberPendingPoints", "pendingPointsId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/members/{memberId}/pending-points/{pendingPointsId}/activate'
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)))
            .replace('{' + 'pendingPointsId' + '}', encodeURIComponent(String(pendingPointsId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * This method assigns a loyalty card to a customer. It selects a [loyalty card](/api-reference/vouchers/get-voucher) suitable for publication, adds a publish entry, and returns the published voucher.   A voucher is suitable for publication when its active and hasnt been published yet.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use **auto-update** campaign.
     * Add Member
     * @param campaignId Unique campaign ID of the loyalty program.
     * @param loyaltiesMembersCreateRequestBody Provide details to whom the loyalty card should be assigned.     You can choose to either specify the exact loyalty card code that you want to publish from existin (non-assigned) codes, or choose not to specify a voucher code. If you choose not to specify a code in the request paylaod, then the system will choose the next available voucher code available to be assigned to a customer.   You can also include metadata in the request payload. This metadata will be assigned to the publication object, but will not be returned in the response to this endpoint. To see of publications (assignments of particular codes to customers) and publication metadata, use the [List Publications](/api-reference/publications/list-publications) endpoint.
     */
    public async addMember(campaignId: string, loyaltiesMembersCreateRequestBody?: LoyaltiesMembersCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "addMember", "campaignId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/members'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loyaltiesMembersCreateRequestBody, "LoyaltiesMembersCreateRequestBody", ""),
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
     * Adjusts the pending points with a given ID. You can add or subtract the number of points. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Adjust Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     * @param loyaltiesMembersPendingPointsBalanceRequestBody Define the number of pending points to be added or subtracted.
     */
    public async adjustMemberPendingPoints(memberId: string, pendingPointsId: string, loyaltiesMembersPendingPointsBalanceRequestBody?: LoyaltiesMembersPendingPointsBalanceRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "adjustMemberPendingPoints", "memberId");
        }


        // verify required parameter 'pendingPointsId' is not null or undefined
        if (pendingPointsId === null || pendingPointsId === undefined) {
            throw new RequiredError("LoyaltiesApi", "adjustMemberPendingPoints", "pendingPointsId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/members/{memberId}/pending-points/{pendingPointsId}/balance'
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)))
            .replace('{' + 'pendingPointsId' + '}', encodeURIComponent(String(pendingPointsId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loyaltiesMembersPendingPointsBalanceRequestBody, "LoyaltiesMembersPendingPointsBalanceRequestBody", ""),
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
     * Cancel manually the pending points for the loyalty card. The pending points are determined by the pending point ID. Once canceled, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body and it returns an empty, 204, response. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Cancel Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     */
    public async cancelMemberPendingPoints(memberId: string, pendingPointsId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "cancelMemberPendingPoints", "memberId");
        }


        // verify required parameter 'pendingPointsId' is not null or undefined
        if (pendingPointsId === null || pendingPointsId === undefined) {
            throw new RequiredError("LoyaltiesApi", "cancelMemberPendingPoints", "pendingPointsId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/members/{memberId}/pending-points/{pendingPointsId}/cancel'
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)))
            .replace('{' + 'pendingPointsId' + '}', encodeURIComponent(String(pendingPointsId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Create earning rules for a loyalty campaign.  🚧 Maximum number of earning rules  You can create up to 100 earning rules per project. The limit can be customized for clients with a single-tenant setup.
     * Create Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param loyaltiesEarningRulesCreateRequestBodyItem Customize the request body based on the type of earning rules you would like to create. The request body is an array of objects. The required minimum properties to include in the payload for each object are event and loyalty. Additionally, if you choose to add a validity_timeframe, you must include a start_date. Furthermore, an earning rule event type:   - customer.segment.entered requires a segment object - a custom event requires a custom_event object - a customer.loyalty.tier.joined, customer.loyalty.tier.left, customer.loyalty.tier.upgraded, customer.loyalty.tier.downgraded, customer.loyalty.tier.prolonged requires a loyalty_tier object
     */
    public async createEarningRule(campaignId: string, loyaltiesEarningRulesCreateRequestBodyItem?: Array<LoyaltiesEarningRulesCreateRequestBodyItem>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "createEarningRule", "campaignId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/earning-rules'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loyaltiesEarningRulesCreateRequestBodyItem, "Array<LoyaltiesEarningRulesCreateRequestBodyItem>", ""),
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
     * Creates loyalty tiers for desired campaign.
     * Create loyalty tiers
     * @param campaignId Unique loyalty campaign ID or name.
     * @param loyaltiesTiersCreateInBulkRequestBodyItem Provide tier definitions you want to add to existing loyalty campaign.
     */
    public async createInBulkLoyaltyTiers(campaignId: string, loyaltiesTiersCreateInBulkRequestBodyItem?: Array<LoyaltiesTiersCreateInBulkRequestBodyItem>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "createInBulkLoyaltyTiers", "campaignId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/tiers'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loyaltiesTiersCreateInBulkRequestBodyItem, "Array<LoyaltiesTiersCreateInBulkRequestBodyItem>", ""),
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
     * Creates a batch of [loyalty cards](/api-reference/loyalties/get-member) aggregated in a single loyalty campaign. It also allows you to define a custom codes pattern.    📘 Global uniqueness  All codes are unique across the whole project. Voucherify wont allow to generate the same codes in any of your campaigns.  🚧 Asynchronous action!  This is an asynchronous action, you cant read or modify a newly created campaign until the code generation is completed. See creation_status field in the [loyalty campaign object](/api-reference/loyalties/loyalty-campaign-object) description.
     * Create Loyalty Campaign
     * @param loyaltiesCreateCampaignRequestBody Specify the loyalty campaign details.
     */
    public async createLoyaltyProgram(loyaltiesCreateCampaignRequestBody?: LoyaltiesCreateCampaignRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/loyalties';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loyaltiesCreateCampaignRequestBody, "LoyaltiesCreateCampaignRequestBody", ""),
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
     * Schedule the generation of a point expiration CSV file for a particular campaign. It can list point buckets, which can have an ACTIVE or EXPIRED status.
     * Export Loyalty Campaign Point Expiration
     * @param campaignId Unique campaign ID or name.
     * @param loyaltiesPointsExpirationExportCreateRequestBody Specify the data filters, types of data to return and order in which the results should be returned.
     */
    public async createPointsExpirationExport(campaignId: string, loyaltiesPointsExpirationExportCreateRequestBody?: LoyaltiesPointsExpirationExportCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "createPointsExpirationExport", "campaignId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/points-expiration/export'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loyaltiesPointsExpirationExportCreateRequestBody, "LoyaltiesPointsExpirationExportCreateRequestBody", ""),
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
     * Add rewards to a loyalty campaign.
     * Create Loyalty Campaign Reward Assignment
     * @param campaignId Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param loyaltiesRewardsCreateAssignmentItemRequestBody Define the cost of the rewards in loyalty points.
     */
    public async createRewardAssignment1(campaignId: string, loyaltiesRewardsCreateAssignmentItemRequestBody?: Array<LoyaltiesRewardsCreateAssignmentItemRequestBody>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "createRewardAssignment1", "campaignId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/rewards'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loyaltiesRewardsCreateAssignmentItemRequestBody, "Array<LoyaltiesRewardsCreateAssignmentItemRequestBody>", ""),
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
     * This method deletes an earning rule for a specific loyalty campaign.
     * Delete Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     */
    public async deleteEarningRule(campaignId: string, earningRuleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "deleteEarningRule", "campaignId");
        }


        // verify required parameter 'earningRuleId' is not null or undefined
        if (earningRuleId === null || earningRuleId === undefined) {
            throw new RequiredError("LoyaltiesApi", "deleteEarningRule", "earningRuleId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/earning-rules/{earningRuleId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'earningRuleId' + '}', encodeURIComponent(String(earningRuleId)));

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
     * Deletes a loyalty campaign and all related loyalty cards. This action cannot be undone. Also, it immediately removes any redemptions on loyalty cards. If the force parameter is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param force If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to the bin. Going forward, the user will be able to create the next campaign with the same name.
     */
    public async deleteLoyaltyProgram(campaignId: string, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "deleteLoyaltyProgram", "campaignId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "boolean", ""));
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
     * This method deletes a reward assignment for a particular loyalty campaign.
     * Delete Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     */
    public async deleteRewardAssignment1(campaignId: string, assignmentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "deleteRewardAssignment1", "campaignId");
        }


        // verify required parameter 'assignmentId' is not null or undefined
        if (assignmentId === null || assignmentId === undefined) {
            throw new RequiredError("LoyaltiesApi", "deleteRewardAssignment1", "assignmentId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/rewards/{assignmentId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'assignmentId' + '}', encodeURIComponent(String(assignmentId)));

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
     * Disable an earning rule.
     * Disable Earning Rule
     * @param campaignId Unique campaign ID or name.
     * @param earningRuleId Unique identifier of an earning rule, assigned by Voucherify.
     */
    public async disableEarningRule(campaignId: string, earningRuleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "disableEarningRule", "campaignId");
        }


        // verify required parameter 'earningRuleId' is not null or undefined
        if (earningRuleId === null || earningRuleId === undefined) {
            throw new RequiredError("LoyaltiesApi", "disableEarningRule", "earningRuleId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/earning-rules/{earningRuleId}/disable'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'earningRuleId' + '}', encodeURIComponent(String(earningRuleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Enable an earning rule.
     * Enable Earning Rule
     * @param campaignId Unique campaign ID or name.
     * @param earningRuleId Unique identifier of an earning rule, assigned by Voucherify.
     */
    public async enableEarningRule(campaignId: string, earningRuleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "enableEarningRule", "campaignId");
        }


        // verify required parameter 'earningRuleId' is not null or undefined
        if (earningRuleId === null || earningRuleId === undefined) {
            throw new RequiredError("LoyaltiesApi", "enableEarningRule", "earningRuleId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/earning-rules/{earningRuleId}/enable'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'earningRuleId' + '}', encodeURIComponent(String(earningRuleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Export transactions is an asynchronous process that generates a CSV file with the data about or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Campaign Transactions  This method works in the same way the [POST Export Campaign Transactions](/api-reference/campaigns/export-campaign-transactions) does, but it is limited to loyalty campaigns only. The POST Export Campaign Transactions method can also export gift card campaign transactions.
     * Export Loyalty Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param loyaltiesTransactionsExportCreateRequestBody Specify the parameters for the transaction export.
     */
    public async exportLoyaltyCampaignTransactions(campaignId: string, loyaltiesTransactionsExportCreateRequestBody?: LoyaltiesTransactionsExportCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "exportLoyaltyCampaignTransactions", "campaignId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/transactions/export'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loyaltiesTransactionsExportCreateRequestBody, "LoyaltiesTransactionsExportCreateRequestBody", ""),
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
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions
     * @param memberId A unique code identifying the loyalty card that you are looking to export transaction data for.
     * @param loyaltiesMembersTransactionsExportCreateRequestBody Specify the parameters and filters for the transaction export.
     */
    public async exportLoyaltyCardTransactions(memberId: string, loyaltiesMembersTransactionsExportCreateRequestBody?: LoyaltiesMembersTransactionsExportCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "exportLoyaltyCardTransactions", "memberId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/members/{memberId}/transactions/export'
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
            ObjectSerializer.serialize(loyaltiesMembersTransactionsExportCreateRequestBody, "LoyaltiesMembersTransactionsExportCreateRequestBody", ""),
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
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions with campaign ID
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to export.
     * @param memberId A unique code identifying the loyalty card that you are looking to export transaction data for.
     * @param loyaltiesMembersTransactionsExportCreateRequestBody Specify the parameters and filters for the transaction export.
     */
    public async exportLoyaltyCardTransactions1(campaignId: string, memberId: string, loyaltiesMembersTransactionsExportCreateRequestBody?: LoyaltiesMembersTransactionsExportCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "exportLoyaltyCardTransactions1", "campaignId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "exportLoyaltyCardTransactions1", "memberId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/members/{memberId}/transactions/export'
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
            ObjectSerializer.serialize(loyaltiesMembersTransactionsExportCreateRequestBody, "LoyaltiesMembersTransactionsExportCreateRequestBody", ""),
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
     * Retrieves an earning rule assigned to a campaign.
     * Get Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     */
    public async getEarningRule(campaignId: string, earningRuleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getEarningRule", "campaignId");
        }


        // verify required parameter 'earningRuleId' is not null or undefined
        if (earningRuleId === null || earningRuleId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getEarningRule", "earningRuleId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/earning-rules/{earningRuleId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'earningRuleId' + '}', encodeURIComponent(String(earningRuleId)));

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
     * Retrieve a specific loyalty campaign.
     * Get Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     */
    public async getLoyaltyProgram(campaignId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getLoyaltyProgram", "campaignId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

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
     * Retrieve a loyalty tier from a loyalty campaign by the loyalty tier ID.
     * Get Loyalty Tier
     * @param campaignId Unique loyalty campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     */
    public async getLoyaltyTier(campaignId: string, loyaltyTierId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getLoyaltyTier", "campaignId");
        }


        // verify required parameter 'loyaltyTierId' is not null or undefined
        if (loyaltyTierId === null || loyaltyTierId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getLoyaltyTier", "loyaltyTierId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/tiers/{loyaltyTierId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'loyaltyTierId' + '}', encodeURIComponent(String(loyaltyTierId)));

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
     * Retrieve loyalty card with the given member ID (i.e. voucher code).      📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-member-with-campaign-id). The URL was re-designed to allow you to retrieve loyalty card details without having to provide the campaignId as a path parameter.
     * Get Member
     * @param memberId Unique loyalty card code assigned to a particular customer.
     */
    public async getMember(memberId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getMember", "memberId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/members/{memberId}'
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)));

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
     * Retrieves the loyalty card with the given member ID (i.e. voucher code).
     * Get Member with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId Unique code that identifies the loyalty card.
     */
    public async getMember1(campaignId: string, memberId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getMember1", "campaignId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getMember1", "memberId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/members/{memberId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)));

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
     * Retrieve specific reward assignment.
     * Get Campaign Reward Assignments
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId Unique reward assignment ID.
     */
    public async getRewardAssignment1(campaignId: string, assignmentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getRewardAssignment1", "campaignId");
        }


        // verify required parameter 'assignmentId' is not null or undefined
        if (assignmentId === null || assignmentId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getRewardAssignment1", "assignmentId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/reward-assignments/{assignmentId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'assignmentId' + '}', encodeURIComponent(String(assignmentId)));

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
     * Retrieve specific reward assignment.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-campaign-reward-assignments). 
     * Get Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     */
    public async getRewardAssignment2(campaignId: string, assignmentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getRewardAssignment2", "campaignId");
        }


        // verify required parameter 'assignmentId' is not null or undefined
        if (assignmentId === null || assignmentId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getRewardAssignment2", "assignmentId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/rewards/{assignmentId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'assignmentId' + '}', encodeURIComponent(String(assignmentId)));

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
     * Get reward details in the context of a loyalty campaign and reward assignment ID.
     * Get Reward Details
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId Unique reward assignment ID.
     */
    public async getRewardDetails(campaignId: string, assignmentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getRewardDetails", "campaignId");
        }


        // verify required parameter 'assignmentId' is not null or undefined
        if (assignmentId === null || assignmentId === undefined) {
            throw new RequiredError("LoyaltiesApi", "getRewardDetails", "assignmentId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/reward-assignments/{assignmentId}/reward'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'assignmentId' + '}', encodeURIComponent(String(assignmentId)));

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
     * Lists all pending points that are currently assigned to all loyalty cards in a campaign. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Campaign Pending Points
     * @param campaignId Unique campaign ID.
     * @param limit Limit the number of the pending point entries that the API returns in the response.
     * @param order Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param startingAfterId A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public async listCampaignPendingPoints(campaignId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listCampaignPendingPoints", "campaignId");
        }





        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/pending-points'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderListPendingPoints", ""));
        }

        // Query Params
        if (startingAfterId !== undefined) {
            requestContext.setQueryParam("starting_after_id", ObjectSerializer.serialize(startingAfterId, "string", ""));
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
     * Returns a list of all earning rules within a given campaign.
     * List Earning Rules
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param page Which page of results to return. The lowest value is 1.
     * @param order Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public async listEarningRules(campaignId: string, limit?: number, page?: number, order?: ParameterOrderListEarningRules, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listEarningRules", "campaignId");
        }





        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/earning-rules'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

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
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderListEarningRules", ""));
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
     * Retrieves all transactions for the campaign with the given campaign ID or campaign name.
     * List Loyalty Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param order Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param startingAfterId A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     * @param filters Filters for listing responses. The id filter denotes the unique transaction identifier.
     */
    public async listLoyaltyCampaignTransactions(campaignId: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, filters?: ParametersFiltersListCampaignTransactions, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listLoyaltyCampaignTransactions", "campaignId");
        }






        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/transactions'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderListTransactions", ""));
        }

        // Query Params
        if (startingAfterId !== undefined) {
            requestContext.setQueryParam("starting_after_id", ObjectSerializer.serialize(startingAfterId, "string", ""));
        }

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "ParametersFiltersListCampaignTransactions", "");
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
     * Retrieve transaction data related to point movements for a specific loyalty card.
     * List Loyalty Card Transactions
     * @param memberId A unique code identifying the loyalty card that you are looking to retrieve transaction data for.
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param order Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param filters Filters for listing member transactions. id is the unique identifier of the transaction.
     * @param startingAfterId A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     */
    public async listLoyaltyCardTransactions(memberId: string, limit?: number, order?: ParameterOrderListTransactions, filters?: ParameterFiltersListMemberTransactions, startingAfterId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listLoyaltyCardTransactions", "memberId");
        }






        // Path Params
        const localVarPath = '/v1/loyalties/members/{memberId}/transactions'
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
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderListTransactions", ""));
        }

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "ParameterFiltersListMemberTransactions", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (startingAfterId !== undefined) {
            requestContext.setQueryParam("starting_after_id", ObjectSerializer.serialize(startingAfterId, "string", ""));
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
     * Retrieve transaction data related to point movements for a specific loyalty card.
     * List Loyalty Card Transactions with campaign ID
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to return.
     * @param memberId A unique code identifying the loyalty card that you are looking to retrieve transaction data for.
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param order Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param filters Filters for listing member transactions. id is the unique identifier of the transaction.
     * @param startingAfterId A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     */
    public async listLoyaltyCardTransactions1(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListTransactions, filters?: ParameterFiltersListMemberTransactions, startingAfterId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listLoyaltyCardTransactions1", "campaignId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listLoyaltyCardTransactions1", "memberId");
        }






        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/members/{memberId}/transactions'
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
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderListTransactions", ""));
        }

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "ParameterFiltersListMemberTransactions", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (startingAfterId !== undefined) {
            requestContext.setQueryParam("starting_after_id", ObjectSerializer.serialize(startingAfterId, "string", ""));
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
     * Returns a list of your loyalty campaigns.
     * List Loyalty Campaigns
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param page Which page of results to return. The lowest value is 1.
     * @param expand Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores.
     * @param order Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public async listLoyaltyPrograms(limit?: number, page?: number, expand?: ParameterExpandListCampaigns, order?: ParameterOrderListCampaigns, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/v1/loyalties';

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
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "ParameterExpandListCampaigns", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderListCampaigns", ""));
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
     * Retrieve available earning rules for a given tier and the calculation method for earning points.
     * List Loyalty Tier Earning Rules
     * @param campaignId Unique campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param page Which page of results to return. The lowest value is 1.
     */
    public async listLoyaltyTierEarningRules(campaignId: string, loyaltyTierId: string, limit?: number, page?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listLoyaltyTierEarningRules", "campaignId");
        }


        // verify required parameter 'loyaltyTierId' is not null or undefined
        if (loyaltyTierId === null || loyaltyTierId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listLoyaltyTierEarningRules", "loyaltyTierId");
        }




        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/tiers/{loyaltyTierId}/earning-rules'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'loyaltyTierId' + '}', encodeURIComponent(String(loyaltyTierId)));

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
     * Get available rewards for a given tier.
     * List Loyalty Tier Rewards
     * @param campaignId Unique campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     */
    public async listLoyaltyTierRewards(campaignId: string, loyaltyTierId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listLoyaltyTierRewards", "campaignId");
        }


        // verify required parameter 'loyaltyTierId' is not null or undefined
        if (loyaltyTierId === null || loyaltyTierId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listLoyaltyTierRewards", "loyaltyTierId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/tiers/{loyaltyTierId}/rewards'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'loyaltyTierId' + '}', encodeURIComponent(String(loyaltyTierId)));

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
     * Retrieve a list of loyalty tiers which were added to the loyalty program.
     * List Loyalty Tiers
     * @param campaignId Unique loyalty campaign ID or name.
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param order Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public async listLoyaltyTiers(campaignId: string, limit?: number, order?: ParameterOrderListLoyaltyTiers, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listLoyaltyTiers", "campaignId");
        }




        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/tiers'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderListLoyaltyTiers", ""));
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
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-activity-with-campaign-id). The URL was re-designed to allow you to get member activities without having to provide the campaignId as a path parameter. Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.
     * List Member Activity
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param order Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order.
     * @param startingAfterId A cursor for pagination. It retrieves the events starting after an event with the given ID.
     */
    public async listMemberActivity(memberId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listMemberActivity", "memberId");
        }





        // Path Params
        const localVarPath = '/v1/loyalties/members/{memberId}/activity'
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
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderCreatedAt", ""));
        }

        // Query Params
        if (startingAfterId !== undefined) {
            requestContext.setQueryParam("starting_after_id", ObjectSerializer.serialize(startingAfterId, "string", ""));
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
     * Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.
     * List Member Activity with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param order Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order.
     * @param startingAfterId A cursor for pagination. It retrieves the events starting after an event with the given ID.
     */
    public async listMemberActivity1(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listMemberActivity1", "campaignId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listMemberActivity1", "memberId");
        }





        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/members/{memberId}/activity'
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
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderCreatedAt", ""));
        }

        // Query Params
        if (startingAfterId !== undefined) {
            requestContext.setQueryParam("starting_after_id", ObjectSerializer.serialize(startingAfterId, "string", ""));
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
     * Retrieve member tiers using the loyalty card ID.
     * List Member\'s Loyalty Tiers
     * @param memberId Unique loyalty card assigned to a particular customer.
     */
    public async listMemberLoyaltyTier(memberId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listMemberLoyaltyTier", "memberId");
        }


        // Path Params
        const localVarPath = '/v1/loyalties/members/{memberId}/tiers'
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)));

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
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-pending-points-with-campaign-id). The URL was re-designed to list member pending points without having to provide the campaignId as a path parameter. Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param limit Limit the number of the pending point entries that the API returns in the response.
     * @param order Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param startingAfterId A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public async listMemberPendingPoints(memberId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listMemberPendingPoints", "memberId");
        }





        // Path Params
        const localVarPath = '/v1/loyalties/members/{memberId}/pending-points'
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
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderListPendingPoints", ""));
        }

        // Query Params
        if (startingAfterId !== undefined) {
            requestContext.setQueryParam("starting_after_id", ObjectSerializer.serialize(startingAfterId, "string", ""));
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
     * Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Member Pending Points with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param limit Limit the number of the pending point entries that the API returns in the response.
     * @param order Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param startingAfterId A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public async listMemberPendingPoints1(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listMemberPendingPoints1", "campaignId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listMemberPendingPoints1", "memberId");
        }





        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/members/{memberId}/pending-points'
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
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderListPendingPoints", ""));
        }

        // Query Params
        if (startingAfterId !== undefined) {
            requestContext.setQueryParam("starting_after_id", ObjectSerializer.serialize(startingAfterId, "string", ""));
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
     * Retrieves the list of rewards that the given customer (identified by member_id, which is a loyalty card assigned to a particular customer) **can get in exchange for loyalty points**.   You can use the affordable_only parameter to limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card).   Please note that rewards that are disabled (i.e. set to Not Available in the Dashboard) for a given loyalty tier reward mapping will not be returned in this endpoint.
     * List Member Rewards
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param affordableOnly Limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card). Set this flag to true to return rewards which the customer can actually afford.
     */
    public async listMemberRewards(memberId: string, affordableOnly?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listMemberRewards", "memberId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/members/{memberId}/rewards'
            .replace('{' + 'memberId' + '}', encodeURIComponent(String(memberId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (affordableOnly !== undefined) {
            requestContext.setQueryParam("affordable_only", ObjectSerializer.serialize(affordableOnly, "boolean", ""));
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
     * Returns a list of your loyalty cards. The loyalty cards are sorted by creation date, with the most recent loyalty cards appearing first.
     * List Members
     * @param campaignId Unique campaign ID of the loyalty program.
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param page Which page of results to return. The lowest value is 1.
     * @param customer A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters.
     * @param createdAt A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * @param updatedAt A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z
     * @param order Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param code 
     * @param ids 
     */
    public async listMembers(campaignId: string, limit?: number, page?: number, customer?: string, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, order?: ParameterOrderVouchers, code?: string, ids?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listMembers", "campaignId");
        }










        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/members'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

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
        if (customer !== undefined) {
            requestContext.setQueryParam("customer", ObjectSerializer.serialize(customer, "string", ""));
        }

        // Query Params
        if (createdAt !== undefined) {
            const serializedParams = ObjectSerializer.serialize(createdAt, "ParameterCreatedBeforeAfter", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (updatedAt !== undefined) {
            const serializedParams = ObjectSerializer.serialize(updatedAt, "ParameterUpdatedBeforeAfter", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "ParameterOrderVouchers", ""));
        }

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }

        // Query Params
        if (ids !== undefined) {
            const serializedParams = ObjectSerializer.serialize(ids, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("ids", serializedParam);
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
     * Retrieve loyalty point expiration buckets for a given loyalty card. Expired point buckets are not returned in this endpoint. You can use the [Exports API](/api-reference/exports/create-export) to retrieve a list of both ACTIVE and EXPIRED point buckets.
     * List Loyalty Card Point Expiration
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param memberId Loyalty card code.
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param page Which page of results to return. The lowest value is 1.
     */
    public async listPointsExpiration(campaignId: string, memberId: string, limit?: number, page?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listPointsExpiration", "campaignId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listPointsExpiration", "memberId");
        }




        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/members/{memberId}/points-expiration'
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
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
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
     * Returns reward assignments from a given loyalty campaign.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-campaign-rewards). The URL was re-designed to be more contextual to the type of data returned in the response.
     * List Reward Assignments with campaign ID
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param page Which page of results to return. The lowest value is 1.
     * @param assignmentId A unique reward assignment ID.
     */
    public async listRewardAssignments1(campaignId: string, limit?: number, page?: number, assignmentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listRewardAssignments1", "campaignId");
        }





        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/reward-assignments'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

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
        if (assignmentId !== undefined) {
            requestContext.setQueryParam("assignmentId", ObjectSerializer.serialize(assignmentId, "string", ""));
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
     * Returns active rewards from a given loyalty campaign.
     * List Campaign Rewards
     * @param campaignId Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param limit Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param page Which page of results to return. The lowest value is 1.
     * @param assignmentId A unique reward assignment ID.
     */
    public async listRewardAssignments2(campaignId: string, limit?: number, page?: number, assignmentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "listRewardAssignments2", "campaignId");
        }





        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/rewards'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

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
        if (assignmentId !== undefined) {
            requestContext.setQueryParam("assignment_id", ObjectSerializer.serialize(assignmentId, "string", ""));
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
     *   📘 Alternative endpoint This endpoint is an alternative to this [endpoint](/api-reference/loyalties/redeem-reward-with-campaign-id). The URL was re-designed to allow you to redeem a reward without having to provide the campaignId as a path parameter.
     * Redeem Reward
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param loyaltiesMembersRedemptionRedeemRequestBody Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order.
     */
    public async redeemReward(memberId: string, loyaltiesMembersRedemptionRedeemRequestBody?: LoyaltiesMembersRedemptionRedeemRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "redeemReward", "memberId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/members/{memberId}/redemption'
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
            ObjectSerializer.serialize(loyaltiesMembersRedemptionRedeemRequestBody, "LoyaltiesMembersRedemptionRedeemRequestBody", ""),
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
     * Exchange points from a loyalty card for a specified reward. This API method returns an assigned award in the response. It means that if a requesting customer gets a coupon code with a discount for the next order, that discount code will be visible in response as part of the reward object definition.
     * Redeem Reward with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param loyaltiesMembersRedemptionRedeemRequestBody Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order.
     */
    public async redeemReward1(campaignId: string, memberId: string, loyaltiesMembersRedemptionRedeemRequestBody?: LoyaltiesMembersRedemptionRedeemRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "redeemReward1", "campaignId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "redeemReward1", "memberId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/members/{memberId}/redemption'
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
            ObjectSerializer.serialize(loyaltiesMembersRedemptionRedeemRequestBody, "LoyaltiesMembersRedemptionRedeemRequestBody", ""),
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
     * Transfer points between different loyalty cards which have holders. Provide the campaign ID and the loyalty card ID you want the points to be transferred to as path parameters. In the request body, provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card. Transfer works only for loyalty cards that have holders, meaning the cards were published to customers. The transferred points expire according to the target program expiration rules.
     * Transfer Loyalty Points
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher to which the loyalty points will be sent (destination).
     * @param memberId A unique code identifying the loyalty card to which the user wants to transfer loyalty points (destination).
     * @param loyaltiesTransferPoints Provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card.
     */
    public async transferPoints(campaignId: string, memberId: string, loyaltiesTransferPoints?: Array<LoyaltiesTransferPoints>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "transferPoints", "campaignId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "transferPoints", "memberId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/members/{memberId}/transfers'
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
            ObjectSerializer.serialize(loyaltiesTransferPoints, "Array<LoyaltiesTransferPoints>", ""),
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
     * Update an earning rule definition.
     * Update Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     * @param loyaltiesEarningRulesUpdateRequestBody Specify the parameters that you would like to update for the given earning rule.
     */
    public async updateEarningRule(campaignId: string, earningRuleId: string, loyaltiesEarningRulesUpdateRequestBody?: LoyaltiesEarningRulesUpdateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "updateEarningRule", "campaignId");
        }


        // verify required parameter 'earningRuleId' is not null or undefined
        if (earningRuleId === null || earningRuleId === undefined) {
            throw new RequiredError("LoyaltiesApi", "updateEarningRule", "earningRuleId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/earning-rules/{earningRuleId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'earningRuleId' + '}', encodeURIComponent(String(earningRuleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loyaltiesEarningRulesUpdateRequestBody, "LoyaltiesEarningRulesUpdateRequestBody", ""),
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
     * This method gives adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/adjust-loyalty-card-balance-with-campaign-id). The URL was re-designed to allow you to add or remove loyalty card balance without having to provide the campaignId as a path parameter.
     * Adjust Loyalty Card Balance
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param loyaltiesMembersBalanceUpdateRequestBody Specify the point adjustment along with the expiration mechanism.
     */
    public async updateLoyaltyCardBalance(memberId: string, loyaltiesMembersBalanceUpdateRequestBody?: LoyaltiesMembersBalanceUpdateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "updateLoyaltyCardBalance", "memberId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/members/{memberId}/balance'
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
            ObjectSerializer.serialize(loyaltiesMembersBalanceUpdateRequestBody, "LoyaltiesMembersBalanceUpdateRequestBody", ""),
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
     * This method adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.
     * Adjust Loyalty Card Balance with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param loyaltiesMembersBalanceUpdateRequestBody Specify the point adjustment along with the expiration mechanism.
     */
    public async updateLoyaltyCardBalance1(campaignId: string, memberId: string, loyaltiesMembersBalanceUpdateRequestBody?: LoyaltiesMembersBalanceUpdateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "updateLoyaltyCardBalance1", "campaignId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("LoyaltiesApi", "updateLoyaltyCardBalance1", "memberId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/members/{memberId}/balance'
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
            ObjectSerializer.serialize(loyaltiesMembersBalanceUpdateRequestBody, "LoyaltiesMembersBalanceUpdateRequestBody", ""),
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
     * Updates a loyalty program.  Fields other than those specified in the allowed request body payload wont be modified (even if provided they are silently skipped). Any parameters not provided will be left unchanged.  This method will update the [loyalty cards](/api-reference/loyalties/get-member) which have not been published or redeemed yet.
     * Update Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param loyaltiesUpdateCampaignRequestBody Specify the new values for the parameters that you would like to update for the given loyalty campaign.
     */
    public async updateLoyaltyProgram(campaignId: string, loyaltiesUpdateCampaignRequestBody?: LoyaltiesUpdateCampaignRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "updateLoyaltyProgram", "campaignId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loyaltiesUpdateCampaignRequestBody, "LoyaltiesUpdateCampaignRequestBody", ""),
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
     * Updates rewards parameters, i.e. the points cost for the specific reward.
     * Update Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     * @param loyaltiesRewardsUpdateAssignmentRequestBody Update the points cost for the reward assignment.
     */
    public async updateRewardAssignment1(campaignId: string, assignmentId: string, loyaltiesRewardsUpdateAssignmentRequestBody?: LoyaltiesRewardsUpdateAssignmentRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("LoyaltiesApi", "updateRewardAssignment1", "campaignId");
        }


        // verify required parameter 'assignmentId' is not null or undefined
        if (assignmentId === null || assignmentId === undefined) {
            throw new RequiredError("LoyaltiesApi", "updateRewardAssignment1", "assignmentId");
        }



        // Path Params
        const localVarPath = '/v1/loyalties/{campaignId}/rewards/{assignmentId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'assignmentId' + '}', encodeURIComponent(String(assignmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loyaltiesRewardsUpdateAssignmentRequestBody, "LoyaltiesRewardsUpdateAssignmentRequestBody", ""),
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

export class LoyaltiesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateMemberPendingPoints
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async activateMemberPendingPointsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersPendingPointsActivateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersPendingPointsActivateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersPendingPointsActivateResponseBody", ""
            ) as LoyaltiesMembersPendingPointsActivateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersPendingPointsActivateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersPendingPointsActivateResponseBody", ""
            ) as LoyaltiesMembersPendingPointsActivateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addMember
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addMemberWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersCreateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersCreateResponseBody", ""
            ) as LoyaltiesMembersCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersCreateResponseBody", ""
            ) as LoyaltiesMembersCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to adjustMemberPendingPoints
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async adjustMemberPendingPointsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersPendingPointsBalanceResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersPendingPointsBalanceResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersPendingPointsBalanceResponseBody", ""
            ) as LoyaltiesMembersPendingPointsBalanceResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersPendingPointsBalanceResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersPendingPointsBalanceResponseBody", ""
            ) as LoyaltiesMembersPendingPointsBalanceResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelMemberPendingPoints
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelMemberPendingPointsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to createEarningRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEarningRuleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<LoyaltiesEarningRulesCreateResponseBody> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<LoyaltiesEarningRulesCreateResponseBody> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LoyaltiesEarningRulesCreateResponseBody>", ""
            ) as Array<LoyaltiesEarningRulesCreateResponseBody>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<LoyaltiesEarningRulesCreateResponseBody> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LoyaltiesEarningRulesCreateResponseBody>", ""
            ) as Array<LoyaltiesEarningRulesCreateResponseBody>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createInBulkLoyaltyTiers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createInBulkLoyaltyTiersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<LoyaltyTier> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<LoyaltyTier> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LoyaltyTier>", ""
            ) as Array<LoyaltyTier>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<LoyaltyTier> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LoyaltyTier>", ""
            ) as Array<LoyaltyTier>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLoyaltyProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createLoyaltyProgramWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesCreateCampaignResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesCreateCampaignResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesCreateCampaignResponseBody", ""
            ) as LoyaltiesCreateCampaignResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesCreateCampaignResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesCreateCampaignResponseBody", ""
            ) as LoyaltiesCreateCampaignResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPointsExpirationExport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPointsExpirationExportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesPointsExpirationExportCreateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesPointsExpirationExportCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesPointsExpirationExportCreateResponseBody", ""
            ) as LoyaltiesPointsExpirationExportCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesPointsExpirationExportCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesPointsExpirationExportCreateResponseBody", ""
            ) as LoyaltiesPointsExpirationExportCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRewardAssignment1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createRewardAssignment1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesRewardsCreateAssignmentResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesRewardsCreateAssignmentResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardsCreateAssignmentResponseBody", ""
            ) as LoyaltiesRewardsCreateAssignmentResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesRewardsCreateAssignmentResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardsCreateAssignmentResponseBody", ""
            ) as LoyaltiesRewardsCreateAssignmentResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEarningRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteEarningRuleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to deleteLoyaltyProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteLoyaltyProgramWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesDeleteResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesDeleteResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesDeleteResponseBody", ""
            ) as LoyaltiesDeleteResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesDeleteResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesDeleteResponseBody", ""
            ) as LoyaltiesDeleteResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRewardAssignment1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRewardAssignment1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to disableEarningRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async disableEarningRuleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesEarningRulesDisableResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesEarningRulesDisableResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesEarningRulesDisableResponseBody", ""
            ) as LoyaltiesEarningRulesDisableResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesEarningRulesDisableResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesEarningRulesDisableResponseBody", ""
            ) as LoyaltiesEarningRulesDisableResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to enableEarningRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async enableEarningRuleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesEarningRulesEnableResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesEarningRulesEnableResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesEarningRulesEnableResponseBody", ""
            ) as LoyaltiesEarningRulesEnableResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesEarningRulesEnableResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesEarningRulesEnableResponseBody", ""
            ) as LoyaltiesEarningRulesEnableResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportLoyaltyCampaignTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportLoyaltyCampaignTransactionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CampaignsTransactionsExportCreateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CampaignsTransactionsExportCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignsTransactionsExportCreateResponseBody", ""
            ) as CampaignsTransactionsExportCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CampaignsTransactionsExportCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignsTransactionsExportCreateResponseBody", ""
            ) as CampaignsTransactionsExportCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportLoyaltyCardTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportLoyaltyCardTransactionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersTransactionsExportCreateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersTransactionsExportCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersTransactionsExportCreateResponseBody", ""
            ) as LoyaltiesMembersTransactionsExportCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersTransactionsExportCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersTransactionsExportCreateResponseBody", ""
            ) as LoyaltiesMembersTransactionsExportCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportLoyaltyCardTransactions1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportLoyaltyCardTransactions1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersTransactionsExportCreateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersTransactionsExportCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersTransactionsExportCreateResponseBody", ""
            ) as LoyaltiesMembersTransactionsExportCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersTransactionsExportCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersTransactionsExportCreateResponseBody", ""
            ) as LoyaltiesMembersTransactionsExportCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEarningRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEarningRuleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesEarningRulesGetResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesEarningRulesGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesEarningRulesGetResponseBody", ""
            ) as LoyaltiesEarningRulesGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesEarningRulesGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesEarningRulesGetResponseBody", ""
            ) as LoyaltiesEarningRulesGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLoyaltyProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLoyaltyProgramWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesGetCampaignResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesGetCampaignResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesGetCampaignResponseBody", ""
            ) as LoyaltiesGetCampaignResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesGetCampaignResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesGetCampaignResponseBody", ""
            ) as LoyaltiesGetCampaignResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLoyaltyTier
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLoyaltyTierWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesTiersGetResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesTiersGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesTiersGetResponseBody", ""
            ) as LoyaltiesTiersGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesTiersGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesTiersGetResponseBody", ""
            ) as LoyaltiesTiersGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMember
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMemberWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersGetResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersGetResponseBody", ""
            ) as LoyaltiesMembersGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersGetResponseBody", ""
            ) as LoyaltiesMembersGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMember1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMember1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersGetResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersGetResponseBody", ""
            ) as LoyaltiesMembersGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersGetResponseBody", ""
            ) as LoyaltiesMembersGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRewardAssignment1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRewardAssignment1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesRewardAssignmentsGetResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesRewardAssignmentsGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardAssignmentsGetResponseBody", ""
            ) as LoyaltiesRewardAssignmentsGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesRewardAssignmentsGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardAssignmentsGetResponseBody", ""
            ) as LoyaltiesRewardAssignmentsGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRewardAssignment2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRewardAssignment2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesRewardsGetResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesRewardsGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardsGetResponseBody", ""
            ) as LoyaltiesRewardsGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesRewardsGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardsGetResponseBody", ""
            ) as LoyaltiesRewardsGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRewardDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRewardDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesRewardAssignmentsRewardGetResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesRewardAssignmentsRewardGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardAssignmentsRewardGetResponseBody", ""
            ) as LoyaltiesRewardAssignmentsRewardGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesRewardAssignmentsRewardGetResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardAssignmentsRewardGetResponseBody", ""
            ) as LoyaltiesRewardAssignmentsRewardGetResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCampaignPendingPoints
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCampaignPendingPointsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesPendingPointsListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesPendingPointsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesPendingPointsListResponseBody", ""
            ) as LoyaltiesPendingPointsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesPendingPointsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesPendingPointsListResponseBody", ""
            ) as LoyaltiesPendingPointsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEarningRules
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listEarningRulesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesEarningRulesListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesEarningRulesListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesEarningRulesListResponseBody", ""
            ) as LoyaltiesEarningRulesListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesEarningRulesListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesEarningRulesListResponseBody", ""
            ) as LoyaltiesEarningRulesListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLoyaltyCampaignTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLoyaltyCampaignTransactionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesTransactionsListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesTransactionsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesTransactionsListResponseBody", ""
            ) as LoyaltiesTransactionsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesTransactionsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesTransactionsListResponseBody", ""
            ) as LoyaltiesTransactionsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLoyaltyCardTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLoyaltyCardTransactionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersTransactionsListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersTransactionsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersTransactionsListResponseBody", ""
            ) as LoyaltiesMembersTransactionsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersTransactionsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersTransactionsListResponseBody", ""
            ) as LoyaltiesMembersTransactionsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLoyaltyCardTransactions1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLoyaltyCardTransactions1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersTransactionsListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersTransactionsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersTransactionsListResponseBody", ""
            ) as LoyaltiesMembersTransactionsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersTransactionsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersTransactionsListResponseBody", ""
            ) as LoyaltiesMembersTransactionsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLoyaltyPrograms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLoyaltyProgramsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesListCampaignsResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesListCampaignsResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesListCampaignsResponseBody", ""
            ) as LoyaltiesListCampaignsResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesListCampaignsResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesListCampaignsResponseBody", ""
            ) as LoyaltiesListCampaignsResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLoyaltyTierEarningRules
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLoyaltyTierEarningRulesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesTiersEarningRulesListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesTiersEarningRulesListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesTiersEarningRulesListResponseBody", ""
            ) as LoyaltiesTiersEarningRulesListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesTiersEarningRulesListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesTiersEarningRulesListResponseBody", ""
            ) as LoyaltiesTiersEarningRulesListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLoyaltyTierRewards
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLoyaltyTierRewardsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesTiersRewardsListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesTiersRewardsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesTiersRewardsListResponseBody", ""
            ) as LoyaltiesTiersRewardsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesTiersRewardsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesTiersRewardsListResponseBody", ""
            ) as LoyaltiesTiersRewardsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLoyaltyTiers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLoyaltyTiersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesTiersListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesTiersListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesTiersListResponseBody", ""
            ) as LoyaltiesTiersListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesTiersListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesTiersListResponseBody", ""
            ) as LoyaltiesTiersListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMemberActivity
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMemberActivityWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMemberActivityListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMemberActivityListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMemberActivityListResponseBody", ""
            ) as LoyaltiesMemberActivityListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMemberActivityListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMemberActivityListResponseBody", ""
            ) as LoyaltiesMemberActivityListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMemberActivity1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMemberActivity1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMemberActivityListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMemberActivityListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMemberActivityListResponseBody", ""
            ) as LoyaltiesMemberActivityListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMemberActivityListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMemberActivityListResponseBody", ""
            ) as LoyaltiesMemberActivityListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMemberLoyaltyTier
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMemberLoyaltyTierWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersTiersListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersTiersListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersTiersListResponseBody", ""
            ) as LoyaltiesMembersTiersListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersTiersListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersTiersListResponseBody", ""
            ) as LoyaltiesMembersTiersListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMemberPendingPoints
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMemberPendingPointsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersPendingPointsListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersPendingPointsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersPendingPointsListResponseBody", ""
            ) as LoyaltiesMembersPendingPointsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersPendingPointsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersPendingPointsListResponseBody", ""
            ) as LoyaltiesMembersPendingPointsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMemberPendingPoints1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMemberPendingPoints1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersPendingPointsListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersPendingPointsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersPendingPointsListResponseBody", ""
            ) as LoyaltiesMembersPendingPointsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersPendingPointsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersPendingPointsListResponseBody", ""
            ) as LoyaltiesMembersPendingPointsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMemberRewards
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMemberRewardsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersRewardsListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersRewardsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersRewardsListResponseBody", ""
            ) as LoyaltiesMembersRewardsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersRewardsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersRewardsListResponseBody", ""
            ) as LoyaltiesMembersRewardsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMembers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMembersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesListMembersResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesListMembersResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesListMembersResponseBody", ""
            ) as LoyaltiesListMembersResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesListMembersResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesListMembersResponseBody", ""
            ) as LoyaltiesListMembersResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPointsExpiration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPointsExpirationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersPointsExpirationListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersPointsExpirationListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersPointsExpirationListResponseBody", ""
            ) as LoyaltiesMembersPointsExpirationListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersPointsExpirationListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersPointsExpirationListResponseBody", ""
            ) as LoyaltiesMembersPointsExpirationListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRewardAssignments1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRewardAssignments1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesRewardAssignmentsListResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesRewardAssignmentsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardAssignmentsListResponseBody", ""
            ) as LoyaltiesRewardAssignmentsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesRewardAssignmentsListResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardAssignmentsListResponseBody", ""
            ) as LoyaltiesRewardAssignmentsListResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRewardAssignments2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRewardAssignments2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesRewardsListAssignmentsResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesRewardsListAssignmentsResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardsListAssignmentsResponseBody", ""
            ) as LoyaltiesRewardsListAssignmentsResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesRewardsListAssignmentsResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardsListAssignmentsResponseBody", ""
            ) as LoyaltiesRewardsListAssignmentsResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to redeemReward
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async redeemRewardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersRedemptionRedeemResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersRedemptionRedeemResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersRedemptionRedeemResponseBody", ""
            ) as LoyaltiesMembersRedemptionRedeemResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersRedemptionRedeemResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersRedemptionRedeemResponseBody", ""
            ) as LoyaltiesMembersRedemptionRedeemResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to redeemReward1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async redeemReward1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersRedemptionRedeemResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersRedemptionRedeemResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersRedemptionRedeemResponseBody", ""
            ) as LoyaltiesMembersRedemptionRedeemResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersRedemptionRedeemResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersRedemptionRedeemResponseBody", ""
            ) as LoyaltiesMembersRedemptionRedeemResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to transferPoints
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async transferPointsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersTransfersCreateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersTransfersCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersTransfersCreateResponseBody", ""
            ) as LoyaltiesMembersTransfersCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersTransfersCreateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersTransfersCreateResponseBody", ""
            ) as LoyaltiesMembersTransfersCreateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEarningRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateEarningRuleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesEarningRulesUpdateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesEarningRulesUpdateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesEarningRulesUpdateResponseBody", ""
            ) as LoyaltiesEarningRulesUpdateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesEarningRulesUpdateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesEarningRulesUpdateResponseBody", ""
            ) as LoyaltiesEarningRulesUpdateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLoyaltyCardBalance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateLoyaltyCardBalanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersBalanceUpdateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersBalanceUpdateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersBalanceUpdateResponseBody", ""
            ) as LoyaltiesMembersBalanceUpdateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersBalanceUpdateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersBalanceUpdateResponseBody", ""
            ) as LoyaltiesMembersBalanceUpdateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLoyaltyCardBalance1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateLoyaltyCardBalance1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesMembersBalanceUpdateResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesMembersBalanceUpdateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersBalanceUpdateResponseBody", ""
            ) as LoyaltiesMembersBalanceUpdateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesMembersBalanceUpdateResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesMembersBalanceUpdateResponseBody", ""
            ) as LoyaltiesMembersBalanceUpdateResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLoyaltyProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateLoyaltyProgramWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesUpdateCampaignResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesUpdateCampaignResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesUpdateCampaignResponseBody", ""
            ) as LoyaltiesUpdateCampaignResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesUpdateCampaignResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesUpdateCampaignResponseBody", ""
            ) as LoyaltiesUpdateCampaignResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRewardAssignment1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateRewardAssignment1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoyaltiesRewardsUpdateAssignmentResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoyaltiesRewardsUpdateAssignmentResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardsUpdateAssignmentResponseBody", ""
            ) as LoyaltiesRewardsUpdateAssignmentResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoyaltiesRewardsUpdateAssignmentResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoyaltiesRewardsUpdateAssignmentResponseBody", ""
            ) as LoyaltiesRewardsUpdateAssignmentResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
