import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { AccessSettings } from '../models/AccessSettings';
import { AccessSettingsAssign } from '../models/AccessSettingsAssign';
import { AccessSettingsCampaignAssignmentsList } from '../models/AccessSettingsCampaignAssignmentsList';
import { AccessSettingsUnassign } from '../models/AccessSettingsUnassign';
import { ApplicableTo } from '../models/ApplicableTo';
import { ApplicableToEffect } from '../models/ApplicableToEffect';
import { ApplicableToOrderItemUnitsItem } from '../models/ApplicableToOrderItemUnitsItem';
import { ApplicableToResultList } from '../models/ApplicableToResultList';
import { ApplicationDetailsItem } from '../models/ApplicationDetailsItem';
import { AreaStoreCampaignAssignment } from '../models/AreaStoreCampaignAssignment';
import { AsyncActionBase } from '../models/AsyncActionBase';
import { AsyncActionGetResponseBody } from '../models/AsyncActionGetResponseBody';
import { AsyncActionsListResponseBody } from '../models/AsyncActionsListResponseBody';
import { Bundle } from '../models/Bundle';
import { BundleIdentifiedItem } from '../models/BundleIdentifiedItem';
import { BundleMissingItem } from '../models/BundleMissingItem';
import { BusValRuleAssignment } from '../models/BusValRuleAssignment';
import { Campaign } from '../models/Campaign';
import { CampaignBase } from '../models/CampaignBase';
import { CampaignLoyaltyCard } from '../models/CampaignLoyaltyCard';
import { CampaignLoyaltyCardExpirationRules } from '../models/CampaignLoyaltyCardExpirationRules';
import { CampaignLoyaltyVoucher } from '../models/CampaignLoyaltyVoucher';
import { CampaignLoyaltyVoucherRedemption } from '../models/CampaignLoyaltyVoucherRedemption';
import { CampaignTemplate } from '../models/CampaignTemplate';
import { CampaignVoucher } from '../models/CampaignVoucher';
import { CampaignVoucherRedemption } from '../models/CampaignVoucherRedemption';
import { CampaignsCreateRequestBody } from '../models/CampaignsCreateRequestBody';
import { CampaignsCreateRequestBodyPromotion } from '../models/CampaignsCreateRequestBodyPromotion';
import { CampaignsCreateRequestBodyVoucher } from '../models/CampaignsCreateRequestBodyVoucher';
import { CampaignsCreateRequestBodyVoucherRedemption } from '../models/CampaignsCreateRequestBodyVoucherRedemption';
import { CampaignsCreateResponseBody } from '../models/CampaignsCreateResponseBody';
import { CampaignsDeleteResponseBody } from '../models/CampaignsDeleteResponseBody';
import { CampaignsGetResponseBody } from '../models/CampaignsGetResponseBody';
import { CampaignsImportCreateResponseBody } from '../models/CampaignsImportCreateResponseBody';
import { CampaignsImportCsvCreateResponseBody } from '../models/CampaignsImportCsvCreateResponseBody';
import { CampaignsImportVoucherItem } from '../models/CampaignsImportVoucherItem';
import { CampaignsImportVoucherItemRedemption } from '../models/CampaignsImportVoucherItemRedemption';
import { CampaignsListResponseBody } from '../models/CampaignsListResponseBody';
import { CampaignsSummaryGetResponseBody } from '../models/CampaignsSummaryGetResponseBody';
import { CampaignsTransactionsExportCreateRequestBody } from '../models/CampaignsTransactionsExportCreateRequestBody';
import { CampaignsTransactionsExportCreateRequestBodyParameters } from '../models/CampaignsTransactionsExportCreateRequestBodyParameters';
import { CampaignsTransactionsExportCreateResponseBody } from '../models/CampaignsTransactionsExportCreateResponseBody';
import { CampaignsTransactionsExportCreateResponseBodyParameters } from '../models/CampaignsTransactionsExportCreateResponseBodyParameters';
import { CampaignsTransactionsExportCreateResponseBodyParametersFilters } from '../models/CampaignsTransactionsExportCreateResponseBodyParametersFilters';
import { CampaignsTransactionsExportCreateResponseBodyParametersFiltersCampaignId } from '../models/CampaignsTransactionsExportCreateResponseBodyParametersFiltersCampaignId';
import { CampaignsTransactionsExportCreateResponseBodyParametersFiltersCampaignIdConditions } from '../models/CampaignsTransactionsExportCreateResponseBodyParametersFiltersCampaignIdConditions';
import { CampaignsTransactionsExportCreateResponseBodyResult } from '../models/CampaignsTransactionsExportCreateResponseBodyResult';
import { CampaignsTransactionsListResponseBody } from '../models/CampaignsTransactionsListResponseBody';
import { CampaignsUpdateRequestBody } from '../models/CampaignsUpdateRequestBody';
import { CampaignsUpdateRequestBodyOptions } from '../models/CampaignsUpdateRequestBodyOptions';
import { CampaignsUpdateResponseBody } from '../models/CampaignsUpdateResponseBody';
import { CampaignsVouchersCreateCombinedResponseBody } from '../models/CampaignsVouchersCreateCombinedResponseBody';
import { CampaignsVouchersCreateCombinedResponseBodyGift } from '../models/CampaignsVouchersCreateCombinedResponseBodyGift';
import { CampaignsVouchersCreateCombinedResponseBodyLoyaltyCard } from '../models/CampaignsVouchersCreateCombinedResponseBodyLoyaltyCard';
import { CampaignsVouchersCreateCombinedResponseBodyPublish } from '../models/CampaignsVouchersCreateCombinedResponseBodyPublish';
import { CampaignsVouchersCreateCombinedResponseBodyRedemption } from '../models/CampaignsVouchersCreateCombinedResponseBodyRedemption';
import { CampaignsVouchersCreateInBulkRequestBody } from '../models/CampaignsVouchersCreateInBulkRequestBody';
import { CampaignsVouchersCreateInBulkRequestBodyRedemption } from '../models/CampaignsVouchersCreateInBulkRequestBodyRedemption';
import { CampaignsVouchersCreateRequestBody } from '../models/CampaignsVouchersCreateRequestBody';
import { CampaignsVouchersCreateRequestBodyRedemption } from '../models/CampaignsVouchersCreateRequestBodyRedemption';
import { CampaignsVouchersCreateResponseBody } from '../models/CampaignsVouchersCreateResponseBody';
import { CampaignsVouchersCreateResponseBodyGift } from '../models/CampaignsVouchersCreateResponseBodyGift';
import { CampaignsVouchersCreateResponseBodyLoyaltyCard } from '../models/CampaignsVouchersCreateResponseBodyLoyaltyCard';
import { CampaignsVouchersCreateResponseBodyPublish } from '../models/CampaignsVouchersCreateResponseBodyPublish';
import { CampaignsVouchersCreateResponseBodyRedemption } from '../models/CampaignsVouchersCreateResponseBodyRedemption';
import { CategoriesCreateRequestBody } from '../models/CategoriesCreateRequestBody';
import { CategoriesCreateResponseBody } from '../models/CategoriesCreateResponseBody';
import { CategoriesGetResponseBody } from '../models/CategoriesGetResponseBody';
import { CategoriesListResponseBody } from '../models/CategoriesListResponseBody';
import { CategoriesUpdateRequestBody } from '../models/CategoriesUpdateRequestBody';
import { CategoriesUpdateResponseBody } from '../models/CategoriesUpdateResponseBody';
import { Category } from '../models/Category';
import { CategoryWithStackingRulesType } from '../models/CategoryWithStackingRulesType';
import { ClientEventsCreateRequestBody } from '../models/ClientEventsCreateRequestBody';
import { ClientEventsCreateRequestBodyLoyalty } from '../models/ClientEventsCreateRequestBodyLoyalty';
import { ClientEventsCreateRequestBodyReferral } from '../models/ClientEventsCreateRequestBodyReferral';
import { ClientEventsCreateResponseBody } from '../models/ClientEventsCreateResponseBody';
import { ClientPromotionsTiersListResponseBody } from '../models/ClientPromotionsTiersListResponseBody';
import { ClientQualificationsCheckEligibilityRequestBody } from '../models/ClientQualificationsCheckEligibilityRequestBody';
import { ClientQualificationsCheckEligibilityRequestBodySession } from '../models/ClientQualificationsCheckEligibilityRequestBodySession';
import { ClientQualificationsCheckEligibilityResponseBody } from '../models/ClientQualificationsCheckEligibilityResponseBody';
import { ClientQualificationsCheckEligibilityResponseBodyOrder } from '../models/ClientQualificationsCheckEligibilityResponseBodyOrder';
import { ClientQualificationsCheckEligibilityResponseBodyOrderItemsItem } from '../models/ClientQualificationsCheckEligibilityResponseBodyOrderItemsItem';
import { ClientRedemptionsRedeemRequestBody } from '../models/ClientRedemptionsRedeemRequestBody';
import { ClientRedemptionsRedeemRequestBodyOptions } from '../models/ClientRedemptionsRedeemRequestBodyOptions';
import { ClientRedemptionsRedeemRequestBodyRedeemablesItem } from '../models/ClientRedemptionsRedeemRequestBodyRedeemablesItem';
import { ClientRedemptionsRedeemRequestBodyRedeemablesItemGift } from '../models/ClientRedemptionsRedeemRequestBodyRedeemablesItemGift';
import { ClientRedemptionsRedeemRequestBodyRedeemablesItemReward } from '../models/ClientRedemptionsRedeemRequestBodyRedeemablesItemReward';
import { ClientRedemptionsRedeemResponseBody } from '../models/ClientRedemptionsRedeemResponseBody';
import { ClientRedemptionsRedeemResponseBodyOrder } from '../models/ClientRedemptionsRedeemResponseBodyOrder';
import { ClientRedemptionsRedeemResponseBodyOrderItemsItem } from '../models/ClientRedemptionsRedeemResponseBodyOrderItemsItem';
import { ClientValidationsValidateRequestBody } from '../models/ClientValidationsValidateRequestBody';
import { ClientValidationsValidateRequestBodyOptions } from '../models/ClientValidationsValidateRequestBodyOptions';
import { ClientValidationsValidateRequestBodyRedeemablesItem } from '../models/ClientValidationsValidateRequestBodyRedeemablesItem';
import { ClientValidationsValidateRequestBodyRedeemablesItemGift } from '../models/ClientValidationsValidateRequestBodyRedeemablesItemGift';
import { ClientValidationsValidateRequestBodyRedeemablesItemReward } from '../models/ClientValidationsValidateRequestBodyRedeemablesItemReward';
import { ClientValidationsValidateResponseBody } from '../models/ClientValidationsValidateResponseBody';
import { ClientValidationsValidateResponseBodyOrder } from '../models/ClientValidationsValidateResponseBodyOrder';
import { ClientValidationsValidateResponseBodyOrderItemsItem } from '../models/ClientValidationsValidateResponseBodyOrderItemsItem';
import { ClientValidationsValidateResponseBodyRedeemablesItem } from '../models/ClientValidationsValidateResponseBodyRedeemablesItem';
import { ClientValidationsValidateResponseBodyRedeemablesItemOrder } from '../models/ClientValidationsValidateResponseBodyRedeemablesItemOrder';
import { ClientValidationsValidateResponseBodyRedeemablesItemOrderCustomer } from '../models/ClientValidationsValidateResponseBodyRedeemablesItemOrderCustomer';
import { ClientValidationsValidateResponseBodyRedeemablesItemOrderReferrer } from '../models/ClientValidationsValidateResponseBodyRedeemablesItemOrderReferrer';
import { ClientValidationsValidateResponseBodyRedeemablesItemResult } from '../models/ClientValidationsValidateResponseBodyRedeemablesItemResult';
import { ClientValidationsValidateResponseBodyRedeemablesItemResultDetails } from '../models/ClientValidationsValidateResponseBodyRedeemablesItemResultDetails';
import { ClientValidationsValidateResponseBodyRedeemablesItemResultDiscount } from '../models/ClientValidationsValidateResponseBodyRedeemablesItemResultDiscount';
import { ClientValidationsValidateResponseBodyRedeemablesItemResultDiscountProduct } from '../models/ClientValidationsValidateResponseBodyRedeemablesItemResultDiscountProduct';
import { ClientValidationsValidateResponseBodyRedeemablesItemResultGift } from '../models/ClientValidationsValidateResponseBodyRedeemablesItemResultGift';
import { ClientValidationsValidateResponseBodyRedeemablesItemResultLoyaltyCard } from '../models/ClientValidationsValidateResponseBodyRedeemablesItemResultLoyaltyCard';
import { CodeConfig } from '../models/CodeConfig';
import { CreatePublicationCampaign } from '../models/CreatePublicationCampaign';
import { CustomEvent } from '../models/CustomEvent';
import { CustomEventLoyalty } from '../models/CustomEventLoyalty';
import { CustomEventReferral } from '../models/CustomEventReferral';
import { Customer } from '../models/Customer';
import { CustomerActivity } from '../models/CustomerActivity';
import { CustomerAddress } from '../models/CustomerAddress';
import { CustomerId } from '../models/CustomerId';
import { CustomerLoyalty } from '../models/CustomerLoyalty';
import { CustomerLoyaltyCampaignsEntryValue } from '../models/CustomerLoyaltyCampaignsEntryValue';
import { CustomerRedeemable } from '../models/CustomerRedeemable';
import { CustomerRedeemableRedeemable } from '../models/CustomerRedeemableRedeemable';
import { CustomerReferrals } from '../models/CustomerReferrals';
import { CustomerReferralsCampaignsItem } from '../models/CustomerReferralsCampaignsItem';
import { CustomerSummary } from '../models/CustomerSummary';
import { CustomerSummaryOrders } from '../models/CustomerSummaryOrders';
import { CustomerSummaryRedemptions } from '../models/CustomerSummaryRedemptions';
import { CustomerSummaryRedemptionsGift } from '../models/CustomerSummaryRedemptionsGift';
import { CustomerSummaryRedemptionsLoyaltyCard } from '../models/CustomerSummaryRedemptionsLoyaltyCard';
import { CustomerWithSummaryLoyaltyReferrals } from '../models/CustomerWithSummaryLoyaltyReferrals';
import { CustomerWithSummaryLoyaltyReferralsAddress } from '../models/CustomerWithSummaryLoyaltyReferralsAddress';
import { CustomerWithSummaryLoyaltyReferralsAssets } from '../models/CustomerWithSummaryLoyaltyReferralsAssets';
import { CustomersActivityListResponseBody } from '../models/CustomersActivityListResponseBody';
import { CustomersCreateRequestBody } from '../models/CustomersCreateRequestBody';
import { CustomersCreateRequestBodyAddress } from '../models/CustomersCreateRequestBodyAddress';
import { CustomersCreateResponseBody } from '../models/CustomersCreateResponseBody';
import { CustomersCreateResponseBodyAddress } from '../models/CustomersCreateResponseBodyAddress';
import { CustomersCreateResponseBodyAssets } from '../models/CustomersCreateResponseBodyAssets';
import { CustomersGetResponseBody } from '../models/CustomersGetResponseBody';
import { CustomersGetResponseBodyAddress } from '../models/CustomersGetResponseBodyAddress';
import { CustomersGetResponseBodyAssets } from '../models/CustomersGetResponseBodyAssets';
import { CustomersImportCsvCreateResponseBody } from '../models/CustomersImportCsvCreateResponseBody';
import { CustomersListResponseBody } from '../models/CustomersListResponseBody';
import { CustomersMetadataUpdateInBulkRequestBody } from '../models/CustomersMetadataUpdateInBulkRequestBody';
import { CustomersMetadataUpdateInBulkResponseBody } from '../models/CustomersMetadataUpdateInBulkResponseBody';
import { CustomersPermanentDeletionCreateResponseBody } from '../models/CustomersPermanentDeletionCreateResponseBody';
import { CustomersPermanentDeletionCreateResponseBodyDataJson } from '../models/CustomersPermanentDeletionCreateResponseBodyDataJson';
import { CustomersRedeemablesListResponseBody } from '../models/CustomersRedeemablesListResponseBody';
import { CustomersSegmentsListResponseBody } from '../models/CustomersSegmentsListResponseBody';
import { CustomersUpdateInBulkRequestBody } from '../models/CustomersUpdateInBulkRequestBody';
import { CustomersUpdateInBulkRequestBodyAddress } from '../models/CustomersUpdateInBulkRequestBodyAddress';
import { CustomersUpdateInBulkResponseBody } from '../models/CustomersUpdateInBulkResponseBody';
import { CustomersUpdateRequestBody } from '../models/CustomersUpdateRequestBody';
import { CustomersUpdateRequestBodyAddress } from '../models/CustomersUpdateRequestBodyAddress';
import { CustomersUpdateResponseBody } from '../models/CustomersUpdateResponseBody';
import { CustomersUpdateResponseBodyAddress } from '../models/CustomersUpdateResponseBodyAddress';
import { CustomersUpdateResponseBodyAssets } from '../models/CustomersUpdateResponseBodyAssets';
import { Discount } from '../models/Discount';
import { DiscountProduct } from '../models/DiscountProduct';
import { DiscountUnitMultipleOneUnit } from '../models/DiscountUnitMultipleOneUnit';
import { EarningRule } from '../models/EarningRule';
import { EarningRuleCustomEvent } from '../models/EarningRuleCustomEvent';
import { EarningRuleExpirationRules } from '../models/EarningRuleExpirationRules';
import { EarningRuleLoyalty } from '../models/EarningRuleLoyalty';
import { EarningRuleLoyaltyCustomEvent } from '../models/EarningRuleLoyaltyCustomEvent';
import { EarningRuleLoyaltyCustomEventMetadata } from '../models/EarningRuleLoyaltyCustomEventMetadata';
import { EarningRuleLoyaltyCustomer } from '../models/EarningRuleLoyaltyCustomer';
import { EarningRuleLoyaltyCustomerMetadata } from '../models/EarningRuleLoyaltyCustomerMetadata';
import { EarningRuleLoyaltyOrder } from '../models/EarningRuleLoyaltyOrder';
import { EarningRuleLoyaltyOrderAmount } from '../models/EarningRuleLoyaltyOrderAmount';
import { EarningRuleLoyaltyOrderItems } from '../models/EarningRuleLoyaltyOrderItems';
import { EarningRuleLoyaltyOrderItemsAmount } from '../models/EarningRuleLoyaltyOrderItemsAmount';
import { EarningRuleLoyaltyOrderItemsAmountApplicableToItem } from '../models/EarningRuleLoyaltyOrderItemsAmountApplicableToItem';
import { EarningRuleLoyaltyOrderItemsQuantity } from '../models/EarningRuleLoyaltyOrderItemsQuantity';
import { EarningRuleLoyaltyOrderItemsQuantityApplicableToItem } from '../models/EarningRuleLoyaltyOrderItemsQuantityApplicableToItem';
import { EarningRuleLoyaltyOrderItemsSubtotalAmount } from '../models/EarningRuleLoyaltyOrderItemsSubtotalAmount';
import { EarningRuleLoyaltyOrderItemsSubtotalAmountApplicableToItem } from '../models/EarningRuleLoyaltyOrderItemsSubtotalAmountApplicableToItem';
import { EarningRuleLoyaltyOrderMetadata } from '../models/EarningRuleLoyaltyOrderMetadata';
import { EarningRuleLoyaltyOrderTotalAmount } from '../models/EarningRuleLoyaltyOrderTotalAmount';
import { EarningRuleLoyaltyTier } from '../models/EarningRuleLoyaltyTier';
import { EarningRulePendingPoints } from '../models/EarningRulePendingPoints';
import { EarningRuleSegment } from '../models/EarningRuleSegment';
import { EarningRuleSource } from '../models/EarningRuleSource';
import { ErrorError } from '../models/ErrorError';
import { EventSource } from '../models/EventSource';
import { EventSourceApiKey } from '../models/EventSourceApiKey';
import { EventSourceUser } from '../models/EventSourceUser';
import { EventsCreateRequestBody } from '../models/EventsCreateRequestBody';
import { EventsCreateRequestBodyLoyalty } from '../models/EventsCreateRequestBodyLoyalty';
import { EventsCreateRequestBodyReferral } from '../models/EventsCreateRequestBodyReferral';
import { EventsCreateResponseBody } from '../models/EventsCreateResponseBody';
import { Export } from '../models/Export';
import { ExportCampaignTransactionsFilters } from '../models/ExportCampaignTransactionsFilters';
import { ExportOrderFields } from '../models/ExportOrderFields';
import { ExportOrderOrder } from '../models/ExportOrderOrder';
import { ExportParameters } from '../models/ExportParameters';
import { ExportResult } from '../models/ExportResult';
import { ExportVoucherTransactionsFields } from '../models/ExportVoucherTransactionsFields';
import { ExportVoucherTransactionsFilters } from '../models/ExportVoucherTransactionsFilters';
import { ExportVoucherTransactionsOrder } from '../models/ExportVoucherTransactionsOrder';
import { ExportsCreateRequestBody } from '../models/ExportsCreateRequestBody';
import { ExportsCreateRequestBodyParameters } from '../models/ExportsCreateRequestBodyParameters';
import { ExportsCreateResponseBody } from '../models/ExportsCreateResponseBody';
import { ExportsCreateResponseBodyParameters } from '../models/ExportsCreateResponseBodyParameters';
import { ExportsGetResponseBody } from '../models/ExportsGetResponseBody';
import { ExportsGetResponseBodyParameters } from '../models/ExportsGetResponseBodyParameters';
import { ExportsGetResponseBodyResult } from '../models/ExportsGetResponseBodyResult';
import { ExportsListResponseBody } from '../models/ExportsListResponseBody';
import { FieldConditions } from '../models/FieldConditions';
import { FilterConditionsDateTime } from '../models/FilterConditionsDateTime';
import { FilterConditionsString } from '../models/FilterConditionsString';
import { FiltersCondition } from '../models/FiltersCondition';
import { Gift } from '../models/Gift';
import { InapplicableTo } from '../models/InapplicableTo';
import { InapplicableToOrderItemUnitsItem } from '../models/InapplicableToOrderItemUnitsItem';
import { InapplicableToResultList } from '../models/InapplicableToResultList';
import { Junction } from '../models/Junction';
import { ListPublicationsItemValidSingleVoucher } from '../models/ListPublicationsItemValidSingleVoucher';
import { ListPublicationsItemValidSingleVoucherMetadata } from '../models/ListPublicationsItemValidSingleVoucherMetadata';
import { ListPublicationsItemVoucher } from '../models/ListPublicationsItemVoucher';
import { Location } from '../models/Location';
import { LocationShape } from '../models/LocationShape';
import { LocationShapeDistance } from '../models/LocationShapeDistance';
import { LocationShapeGeojson } from '../models/LocationShapeGeojson';
import { LocationsGetResponseBody } from '../models/LocationsGetResponseBody';
import { LocationsGetResponseBodyShape } from '../models/LocationsGetResponseBodyShape';
import { LocationsGetResponseBodyShapeDistance } from '../models/LocationsGetResponseBodyShapeDistance';
import { LocationsGetResponseBodyShapeGeojson } from '../models/LocationsGetResponseBodyShapeGeojson';
import { LocationsListResponseBody } from '../models/LocationsListResponseBody';
import { LoyaltiesCreateCampaignRequestBody } from '../models/LoyaltiesCreateCampaignRequestBody';
import { LoyaltiesCreateCampaignResponseBody } from '../models/LoyaltiesCreateCampaignResponseBody';
import { LoyaltiesDeleteResponseBody } from '../models/LoyaltiesDeleteResponseBody';
import { LoyaltiesEarningRulesCreateRequestBodyItem } from '../models/LoyaltiesEarningRulesCreateRequestBodyItem';
import { LoyaltiesEarningRulesCreateRequestBodyItemCustomEvent } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemCustomEvent';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyalty } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyalty';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyCustomEvent } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyCustomEvent';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyCustomEventMetadata } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyCustomEventMetadata';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyCustomer } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyCustomer';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyCustomerMetadata } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyCustomerMetadata';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrder } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrder';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderAmount } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderAmount';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItems } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItems';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItemsAmount } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItemsAmount';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItemsAmountApplicableToItem } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItemsAmountApplicableToItem';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItemsQuantity } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItemsQuantity';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItemsQuantityApplicableToItem } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItemsQuantityApplicableToItem';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItemsSubtotalAmount } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItemsSubtotalAmount';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItemsSubtotalAmountApplicableToItem } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderItemsSubtotalAmountApplicableToItem';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderMetadata } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderMetadata';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderTotalAmount } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyOrderTotalAmount';
import { LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyTier } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemLoyaltyTier';
import { LoyaltiesEarningRulesCreateRequestBodyItemPendingPoints } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemPendingPoints';
import { LoyaltiesEarningRulesCreateRequestBodyItemSegment } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemSegment';
import { LoyaltiesEarningRulesCreateRequestBodyItemSource } from '../models/LoyaltiesEarningRulesCreateRequestBodyItemSource';
import { LoyaltiesEarningRulesCreateResponseBody } from '../models/LoyaltiesEarningRulesCreateResponseBody';
import { LoyaltiesEarningRulesCreateResponseBodyCustomEvent } from '../models/LoyaltiesEarningRulesCreateResponseBodyCustomEvent';
import { LoyaltiesEarningRulesCreateResponseBodyLoyalty } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyalty';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyCustomEvent } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyCustomEvent';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyCustomEventMetadata } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyCustomEventMetadata';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyCustomer } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyCustomer';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyCustomerMetadata } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyCustomerMetadata';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrder } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrder';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderAmount } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderAmount';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItems } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItems';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItemsAmount } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItemsAmount';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItemsAmountApplicableToItem } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItemsAmountApplicableToItem';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItemsQuantity } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItemsQuantity';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItemsQuantityApplicableToItem } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItemsQuantityApplicableToItem';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItemsSubtotalAmount } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItemsSubtotalAmount';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItemsSubtotalAmountApplicableToItem } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderItemsSubtotalAmountApplicableToItem';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderMetadata } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderMetadata';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderTotalAmount } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyOrderTotalAmount';
import { LoyaltiesEarningRulesCreateResponseBodyLoyaltyTier } from '../models/LoyaltiesEarningRulesCreateResponseBodyLoyaltyTier';
import { LoyaltiesEarningRulesCreateResponseBodyPendingPoints } from '../models/LoyaltiesEarningRulesCreateResponseBodyPendingPoints';
import { LoyaltiesEarningRulesCreateResponseBodySegment } from '../models/LoyaltiesEarningRulesCreateResponseBodySegment';
import { LoyaltiesEarningRulesCreateResponseBodySource } from '../models/LoyaltiesEarningRulesCreateResponseBodySource';
import { LoyaltiesEarningRulesDisableResponseBody } from '../models/LoyaltiesEarningRulesDisableResponseBody';
import { LoyaltiesEarningRulesDisableResponseBodyCustomEvent } from '../models/LoyaltiesEarningRulesDisableResponseBodyCustomEvent';
import { LoyaltiesEarningRulesDisableResponseBodyLoyalty } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyalty';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyCustomEvent } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyCustomEvent';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyCustomEventMetadata } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyCustomEventMetadata';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyCustomer } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyCustomer';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyCustomerMetadata } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyCustomerMetadata';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrder } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrder';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderAmount } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderAmount';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItems } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItems';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItemsAmount } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItemsAmount';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItemsAmountApplicableToItem } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItemsAmountApplicableToItem';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItemsQuantity } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItemsQuantity';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItemsQuantityApplicableToItem } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItemsQuantityApplicableToItem';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItemsSubtotalAmount } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItemsSubtotalAmount';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItemsSubtotalAmountApplicableToItem } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderItemsSubtotalAmountApplicableToItem';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderMetadata } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderMetadata';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderTotalAmount } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyOrderTotalAmount';
import { LoyaltiesEarningRulesDisableResponseBodyLoyaltyTier } from '../models/LoyaltiesEarningRulesDisableResponseBodyLoyaltyTier';
import { LoyaltiesEarningRulesDisableResponseBodyPendingPoints } from '../models/LoyaltiesEarningRulesDisableResponseBodyPendingPoints';
import { LoyaltiesEarningRulesDisableResponseBodySegment } from '../models/LoyaltiesEarningRulesDisableResponseBodySegment';
import { LoyaltiesEarningRulesDisableResponseBodySource } from '../models/LoyaltiesEarningRulesDisableResponseBodySource';
import { LoyaltiesEarningRulesEnableResponseBody } from '../models/LoyaltiesEarningRulesEnableResponseBody';
import { LoyaltiesEarningRulesEnableResponseBodyCustomEvent } from '../models/LoyaltiesEarningRulesEnableResponseBodyCustomEvent';
import { LoyaltiesEarningRulesEnableResponseBodyLoyalty } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyalty';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyCustomEvent } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyCustomEvent';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyCustomEventMetadata } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyCustomEventMetadata';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyCustomer } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyCustomer';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyCustomerMetadata } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyCustomerMetadata';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrder } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrder';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderAmount } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderAmount';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItems } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItems';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItemsAmount } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItemsAmount';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItemsAmountApplicableToItem } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItemsAmountApplicableToItem';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItemsQuantity } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItemsQuantity';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItemsQuantityApplicableToItem } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItemsQuantityApplicableToItem';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItemsSubtotalAmount } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItemsSubtotalAmount';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItemsSubtotalAmountApplicableToItem } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderItemsSubtotalAmountApplicableToItem';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderMetadata } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderMetadata';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderTotalAmount } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyOrderTotalAmount';
import { LoyaltiesEarningRulesEnableResponseBodyLoyaltyTier } from '../models/LoyaltiesEarningRulesEnableResponseBodyLoyaltyTier';
import { LoyaltiesEarningRulesEnableResponseBodyPendingPoints } from '../models/LoyaltiesEarningRulesEnableResponseBodyPendingPoints';
import { LoyaltiesEarningRulesEnableResponseBodySegment } from '../models/LoyaltiesEarningRulesEnableResponseBodySegment';
import { LoyaltiesEarningRulesEnableResponseBodySource } from '../models/LoyaltiesEarningRulesEnableResponseBodySource';
import { LoyaltiesEarningRulesGetResponseBody } from '../models/LoyaltiesEarningRulesGetResponseBody';
import { LoyaltiesEarningRulesGetResponseBodyCustomEvent } from '../models/LoyaltiesEarningRulesGetResponseBodyCustomEvent';
import { LoyaltiesEarningRulesGetResponseBodyLoyalty } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyalty';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyCustomEvent } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyCustomEvent';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyCustomEventMetadata } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyCustomEventMetadata';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyCustomer } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyCustomer';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyCustomerMetadata } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyCustomerMetadata';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyOrder } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyOrder';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderAmount } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderAmount';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItems } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItems';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItemsAmount } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItemsAmount';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItemsAmountApplicableToItem } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItemsAmountApplicableToItem';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItemsQuantity } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItemsQuantity';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItemsQuantityApplicableToItem } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItemsQuantityApplicableToItem';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItemsSubtotalAmount } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItemsSubtotalAmount';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItemsSubtotalAmountApplicableToItem } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItemsSubtotalAmountApplicableToItem';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderMetadata } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderMetadata';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderTotalAmount } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderTotalAmount';
import { LoyaltiesEarningRulesGetResponseBodyLoyaltyTier } from '../models/LoyaltiesEarningRulesGetResponseBodyLoyaltyTier';
import { LoyaltiesEarningRulesGetResponseBodyPendingPoints } from '../models/LoyaltiesEarningRulesGetResponseBodyPendingPoints';
import { LoyaltiesEarningRulesGetResponseBodySegment } from '../models/LoyaltiesEarningRulesGetResponseBodySegment';
import { LoyaltiesEarningRulesGetResponseBodySource } from '../models/LoyaltiesEarningRulesGetResponseBodySource';
import { LoyaltiesEarningRulesListResponseBody } from '../models/LoyaltiesEarningRulesListResponseBody';
import { LoyaltiesEarningRulesUpdateRequestBody } from '../models/LoyaltiesEarningRulesUpdateRequestBody';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyalty } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyalty';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyCustomEvent } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyCustomEvent';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyCustomEventMetadata } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyCustomEventMetadata';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyCustomer } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyCustomer';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyCustomerMetadata } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyCustomerMetadata';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrder } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrder';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderAmount } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderAmount';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItems } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItems';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItemsAmount } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItemsAmount';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItemsAmountApplicableToItem } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItemsAmountApplicableToItem';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItemsQuantity } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItemsQuantity';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItemsQuantityApplicableToItem } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItemsQuantityApplicableToItem';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItemsSubtotalAmount } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItemsSubtotalAmount';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItemsSubtotalAmountApplicableToItem } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderItemsSubtotalAmountApplicableToItem';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderMetadata } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderMetadata';
import { LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderTotalAmount } from '../models/LoyaltiesEarningRulesUpdateRequestBodyLoyaltyOrderTotalAmount';
import { LoyaltiesEarningRulesUpdateRequestBodyPendingPoints } from '../models/LoyaltiesEarningRulesUpdateRequestBodyPendingPoints';
import { LoyaltiesEarningRulesUpdateRequestBodySource } from '../models/LoyaltiesEarningRulesUpdateRequestBodySource';
import { LoyaltiesEarningRulesUpdateResponseBody } from '../models/LoyaltiesEarningRulesUpdateResponseBody';
import { LoyaltiesEarningRulesUpdateResponseBodyCustomEvent } from '../models/LoyaltiesEarningRulesUpdateResponseBodyCustomEvent';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyalty } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyalty';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyCustomEvent } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyCustomEvent';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyCustomEventMetadata } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyCustomEventMetadata';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyCustomer } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyCustomer';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyCustomerMetadata } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyCustomerMetadata';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrder } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrder';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderAmount } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderAmount';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItems } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItems';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItemsAmount } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItemsAmount';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItemsAmountApplicableToItem } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItemsAmountApplicableToItem';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItemsQuantity } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItemsQuantity';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItemsQuantityApplicableToItem } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItemsQuantityApplicableToItem';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItemsSubtotalAmount } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItemsSubtotalAmount';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItemsSubtotalAmountApplicableToItem } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderItemsSubtotalAmountApplicableToItem';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderMetadata } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderMetadata';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderTotalAmount } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyOrderTotalAmount';
import { LoyaltiesEarningRulesUpdateResponseBodyLoyaltyTier } from '../models/LoyaltiesEarningRulesUpdateResponseBodyLoyaltyTier';
import { LoyaltiesEarningRulesUpdateResponseBodyPendingPoints } from '../models/LoyaltiesEarningRulesUpdateResponseBodyPendingPoints';
import { LoyaltiesEarningRulesUpdateResponseBodySegment } from '../models/LoyaltiesEarningRulesUpdateResponseBodySegment';
import { LoyaltiesEarningRulesUpdateResponseBodySource } from '../models/LoyaltiesEarningRulesUpdateResponseBodySource';
import { LoyaltiesGetCampaignResponseBody } from '../models/LoyaltiesGetCampaignResponseBody';
import { LoyaltiesListCampaignsResponseBody } from '../models/LoyaltiesListCampaignsResponseBody';
import { LoyaltiesListMembersResponseBody } from '../models/LoyaltiesListMembersResponseBody';
import { LoyaltiesLoyaltyTierReward } from '../models/LoyaltiesLoyaltyTierReward';
import { LoyaltiesMemberActivityListResponseBody } from '../models/LoyaltiesMemberActivityListResponseBody';
import { LoyaltiesMembersBalanceUpdateRequestBody } from '../models/LoyaltiesMembersBalanceUpdateRequestBody';
import { LoyaltiesMembersBalanceUpdateResponseBody } from '../models/LoyaltiesMembersBalanceUpdateResponseBody';
import { LoyaltiesMembersBalanceUpdateResponseBodyRelatedObject } from '../models/LoyaltiesMembersBalanceUpdateResponseBodyRelatedObject';
import { LoyaltiesMembersCreateRequestBody } from '../models/LoyaltiesMembersCreateRequestBody';
import { LoyaltiesMembersCreateResponseBody } from '../models/LoyaltiesMembersCreateResponseBody';
import { LoyaltiesMembersCreateResponseBodyLoyaltyCard } from '../models/LoyaltiesMembersCreateResponseBodyLoyaltyCard';
import { LoyaltiesMembersCreateResponseBodyPublish } from '../models/LoyaltiesMembersCreateResponseBodyPublish';
import { LoyaltiesMembersCreateResponseBodyRedemption } from '../models/LoyaltiesMembersCreateResponseBodyRedemption';
import { LoyaltiesMembersGetResponseBody } from '../models/LoyaltiesMembersGetResponseBody';
import { LoyaltiesMembersGetResponseBodyLoyaltyCard } from '../models/LoyaltiesMembersGetResponseBodyLoyaltyCard';
import { LoyaltiesMembersGetResponseBodyPublish } from '../models/LoyaltiesMembersGetResponseBodyPublish';
import { LoyaltiesMembersGetResponseBodyRedemption } from '../models/LoyaltiesMembersGetResponseBodyRedemption';
import { LoyaltiesMembersPendingPointsActivateResponseBody } from '../models/LoyaltiesMembersPendingPointsActivateResponseBody';
import { LoyaltiesMembersPendingPointsActivateResponseBodyRelatedObject } from '../models/LoyaltiesMembersPendingPointsActivateResponseBodyRelatedObject';
import { LoyaltiesMembersPendingPointsBalanceRequestBody } from '../models/LoyaltiesMembersPendingPointsBalanceRequestBody';
import { LoyaltiesMembersPendingPointsBalanceResponseBody } from '../models/LoyaltiesMembersPendingPointsBalanceResponseBody';
import { LoyaltiesMembersPendingPointsBalanceResponseBodyRelatedObject } from '../models/LoyaltiesMembersPendingPointsBalanceResponseBodyRelatedObject';
import { LoyaltiesMembersPendingPointsListResponseBody } from '../models/LoyaltiesMembersPendingPointsListResponseBody';
import { LoyaltiesMembersPointsExpirationListResponseBody } from '../models/LoyaltiesMembersPointsExpirationListResponseBody';
import { LoyaltiesMembersRedemptionRedeemRequestBody } from '../models/LoyaltiesMembersRedemptionRedeemRequestBody';
import { LoyaltiesMembersRedemptionRedeemRequestBodyReward } from '../models/LoyaltiesMembersRedemptionRedeemRequestBodyReward';
import { LoyaltiesMembersRedemptionRedeemResponseBody } from '../models/LoyaltiesMembersRedemptionRedeemResponseBody';
import { LoyaltiesMembersRedemptionRedeemResponseBodyChannel } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyChannel';
import { LoyaltiesMembersRedemptionRedeemResponseBodyGift } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyGift';
import { LoyaltiesMembersRedemptionRedeemResponseBodyLoyaltyCard } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyLoyaltyCard';
import { LoyaltiesMembersRedemptionRedeemResponseBodyOrder } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyOrder';
import { LoyaltiesMembersRedemptionRedeemResponseBodyOrderCustomer } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyOrderCustomer';
import { LoyaltiesMembersRedemptionRedeemResponseBodyOrderItemsItem } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyOrderItemsItem';
import { LoyaltiesMembersRedemptionRedeemResponseBodyOrderReferrer } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyOrderReferrer';
import { LoyaltiesMembersRedemptionRedeemResponseBodyRelatedRedemptions } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyRelatedRedemptions';
import { LoyaltiesMembersRedemptionRedeemResponseBodyRelatedRedemptionsRedemptionsItem } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyRelatedRedemptionsRedemptionsItem';
import { LoyaltiesMembersRedemptionRedeemResponseBodyRelatedRedemptionsRollbacksItem } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyRelatedRedemptionsRollbacksItem';
import { LoyaltiesMembersRedemptionRedeemResponseBodySession } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodySession';
import { LoyaltiesMembersRedemptionRedeemResponseBodyVoucher } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyVoucher';
import { LoyaltiesMembersRedemptionRedeemResponseBodyVoucherGift } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyVoucherGift';
import { LoyaltiesMembersRedemptionRedeemResponseBodyVoucherLoyaltyCard } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyVoucherLoyaltyCard';
import { LoyaltiesMembersRedemptionRedeemResponseBodyVoucherPublish } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyVoucherPublish';
import { LoyaltiesMembersRedemptionRedeemResponseBodyVoucherRedemption } from '../models/LoyaltiesMembersRedemptionRedeemResponseBodyVoucherRedemption';
import { LoyaltiesMembersRewardsListResponseBody } from '../models/LoyaltiesMembersRewardsListResponseBody';
import { LoyaltiesMembersRewardsListResponseBodyDataItem } from '../models/LoyaltiesMembersRewardsListResponseBodyDataItem';
import { LoyaltiesMembersTiersListResponseBody } from '../models/LoyaltiesMembersTiersListResponseBody';
import { LoyaltiesMembersTransactionsExportCreateRequestBody } from '../models/LoyaltiesMembersTransactionsExportCreateRequestBody';
import { LoyaltiesMembersTransactionsExportCreateRequestBodyParameters } from '../models/LoyaltiesMembersTransactionsExportCreateRequestBodyParameters';
import { LoyaltiesMembersTransactionsExportCreateResponseBody } from '../models/LoyaltiesMembersTransactionsExportCreateResponseBody';
import { LoyaltiesMembersTransactionsExportCreateResponseBodyParameters } from '../models/LoyaltiesMembersTransactionsExportCreateResponseBodyParameters';
import { LoyaltiesMembersTransactionsListResponseBody } from '../models/LoyaltiesMembersTransactionsListResponseBody';
import { LoyaltiesMembersTransfersCreateResponseBody } from '../models/LoyaltiesMembersTransfersCreateResponseBody';
import { LoyaltiesMembersTransfersCreateResponseBodyAssets } from '../models/LoyaltiesMembersTransfersCreateResponseBodyAssets';
import { LoyaltiesMembersTransfersCreateResponseBodyAssetsBarcode } from '../models/LoyaltiesMembersTransfersCreateResponseBodyAssetsBarcode';
import { LoyaltiesMembersTransfersCreateResponseBodyAssetsQr } from '../models/LoyaltiesMembersTransfersCreateResponseBodyAssetsQr';
import { LoyaltiesMembersTransfersCreateResponseBodyLoyaltyCard } from '../models/LoyaltiesMembersTransfersCreateResponseBodyLoyaltyCard';
import { LoyaltiesMembersTransfersCreateResponseBodyPublish } from '../models/LoyaltiesMembersTransfersCreateResponseBodyPublish';
import { LoyaltiesMembersTransfersCreateResponseBodyRedemption } from '../models/LoyaltiesMembersTransfersCreateResponseBodyRedemption';
import { LoyaltiesPendingPointsListResponseBody } from '../models/LoyaltiesPendingPointsListResponseBody';
import { LoyaltiesPointsExpirationExportCreateRequestBody } from '../models/LoyaltiesPointsExpirationExportCreateRequestBody';
import { LoyaltiesPointsExpirationExportCreateRequestBodyParameters } from '../models/LoyaltiesPointsExpirationExportCreateRequestBodyParameters';
import { LoyaltiesPointsExpirationExportCreateRequestBodyParametersFilters } from '../models/LoyaltiesPointsExpirationExportCreateRequestBodyParametersFilters';
import { LoyaltiesPointsExpirationExportCreateRequestBodyParametersFiltersCampaignId } from '../models/LoyaltiesPointsExpirationExportCreateRequestBodyParametersFiltersCampaignId';
import { LoyaltiesPointsExpirationExportCreateRequestBodyParametersFiltersCampaignIdConditions } from '../models/LoyaltiesPointsExpirationExportCreateRequestBodyParametersFiltersCampaignIdConditions';
import { LoyaltiesPointsExpirationExportCreateRequestBodyParametersFiltersVoucherId } from '../models/LoyaltiesPointsExpirationExportCreateRequestBodyParametersFiltersVoucherId';
import { LoyaltiesPointsExpirationExportCreateRequestBodyParametersFiltersVoucherIdConditions } from '../models/LoyaltiesPointsExpirationExportCreateRequestBodyParametersFiltersVoucherIdConditions';
import { LoyaltiesPointsExpirationExportCreateResponseBody } from '../models/LoyaltiesPointsExpirationExportCreateResponseBody';
import { LoyaltiesPointsExpirationExportCreateResponseBodyParameters } from '../models/LoyaltiesPointsExpirationExportCreateResponseBodyParameters';
import { LoyaltiesPointsExpirationExportCreateResponseBodyParametersFilters } from '../models/LoyaltiesPointsExpirationExportCreateResponseBodyParametersFilters';
import { LoyaltiesPointsExpirationExportCreateResponseBodyParametersFiltersCampaignId } from '../models/LoyaltiesPointsExpirationExportCreateResponseBodyParametersFiltersCampaignId';
import { LoyaltiesPointsExpirationExportCreateResponseBodyParametersFiltersCampaignIdConditions } from '../models/LoyaltiesPointsExpirationExportCreateResponseBodyParametersFiltersCampaignIdConditions';
import { LoyaltiesPointsExpirationExportCreateResponseBodyParametersFiltersVoucherId } from '../models/LoyaltiesPointsExpirationExportCreateResponseBodyParametersFiltersVoucherId';
import { LoyaltiesPointsExpirationExportCreateResponseBodyParametersFiltersVoucherIdConditions } from '../models/LoyaltiesPointsExpirationExportCreateResponseBodyParametersFiltersVoucherIdConditions';
import { LoyaltiesRewardAssignmentsGetResponseBody } from '../models/LoyaltiesRewardAssignmentsGetResponseBody';
import { LoyaltiesRewardAssignmentsGetResponseBodyParameters } from '../models/LoyaltiesRewardAssignmentsGetResponseBodyParameters';
import { LoyaltiesRewardAssignmentsGetResponseBodyParametersLoyalty } from '../models/LoyaltiesRewardAssignmentsGetResponseBodyParametersLoyalty';
import { LoyaltiesRewardAssignmentsListResponseBody } from '../models/LoyaltiesRewardAssignmentsListResponseBody';
import { LoyaltiesRewardAssignmentsRewardGetResponseBody } from '../models/LoyaltiesRewardAssignmentsRewardGetResponseBody';
import { LoyaltiesRewardAssignmentsRewardGetResponseBodyAttributes } from '../models/LoyaltiesRewardAssignmentsRewardGetResponseBodyAttributes';
import { LoyaltiesRewardsCreateAssignmentItemRequestBody } from '../models/LoyaltiesRewardsCreateAssignmentItemRequestBody';
import { LoyaltiesRewardsCreateAssignmentItemRequestBodyParameters } from '../models/LoyaltiesRewardsCreateAssignmentItemRequestBodyParameters';
import { LoyaltiesRewardsCreateAssignmentItemRequestBodyParametersLoyalty } from '../models/LoyaltiesRewardsCreateAssignmentItemRequestBodyParametersLoyalty';
import { LoyaltiesRewardsCreateAssignmentResponseBody } from '../models/LoyaltiesRewardsCreateAssignmentResponseBody';
import { LoyaltiesRewardsCreateAssignmentResponseBodyParameters } from '../models/LoyaltiesRewardsCreateAssignmentResponseBodyParameters';
import { LoyaltiesRewardsCreateAssignmentResponseBodyParametersLoyalty } from '../models/LoyaltiesRewardsCreateAssignmentResponseBodyParametersLoyalty';
import { LoyaltiesRewardsGetResponseBody } from '../models/LoyaltiesRewardsGetResponseBody';
import { LoyaltiesRewardsGetResponseBodyParameters } from '../models/LoyaltiesRewardsGetResponseBodyParameters';
import { LoyaltiesRewardsGetResponseBodyParametersLoyalty } from '../models/LoyaltiesRewardsGetResponseBodyParametersLoyalty';
import { LoyaltiesRewardsListAssignmentsResponseBody } from '../models/LoyaltiesRewardsListAssignmentsResponseBody';
import { LoyaltiesRewardsUpdateAssignmentRequestBody } from '../models/LoyaltiesRewardsUpdateAssignmentRequestBody';
import { LoyaltiesRewardsUpdateAssignmentRequestBodyParameters } from '../models/LoyaltiesRewardsUpdateAssignmentRequestBodyParameters';
import { LoyaltiesRewardsUpdateAssignmentRequestBodyParametersLoyalty } from '../models/LoyaltiesRewardsUpdateAssignmentRequestBodyParametersLoyalty';
import { LoyaltiesRewardsUpdateAssignmentResponseBody } from '../models/LoyaltiesRewardsUpdateAssignmentResponseBody';
import { LoyaltiesRewardsUpdateAssignmentResponseBodyParameters } from '../models/LoyaltiesRewardsUpdateAssignmentResponseBodyParameters';
import { LoyaltiesRewardsUpdateAssignmentResponseBodyParametersLoyalty } from '../models/LoyaltiesRewardsUpdateAssignmentResponseBodyParametersLoyalty';
import { LoyaltiesTiersCreateInBulkRequestBodyItem } from '../models/LoyaltiesTiersCreateInBulkRequestBodyItem';
import { LoyaltiesTiersEarningRulesListResponseBody } from '../models/LoyaltiesTiersEarningRulesListResponseBody';
import { LoyaltiesTiersGetResponseBody } from '../models/LoyaltiesTiersGetResponseBody';
import { LoyaltiesTiersGetResponseBodyConfig } from '../models/LoyaltiesTiersGetResponseBodyConfig';
import { LoyaltiesTiersGetResponseBodyConfigPoints } from '../models/LoyaltiesTiersGetResponseBodyConfigPoints';
import { LoyaltiesTiersGetResponseBodyPoints } from '../models/LoyaltiesTiersGetResponseBodyPoints';
import { LoyaltiesTiersListResponseBody } from '../models/LoyaltiesTiersListResponseBody';
import { LoyaltiesTiersRewardsListResponseBody } from '../models/LoyaltiesTiersRewardsListResponseBody';
import { LoyaltiesTransactionsExportCreateRequestBody } from '../models/LoyaltiesTransactionsExportCreateRequestBody';
import { LoyaltiesTransactionsExportCreateRequestBodyParameters } from '../models/LoyaltiesTransactionsExportCreateRequestBodyParameters';
import { LoyaltiesTransactionsListResponseBody } from '../models/LoyaltiesTransactionsListResponseBody';
import { LoyaltiesTransferPoints } from '../models/LoyaltiesTransferPoints';
import { LoyaltiesUpdateCampaignRequestBody } from '../models/LoyaltiesUpdateCampaignRequestBody';
import { LoyaltiesUpdateCampaignRequestBodyOptions } from '../models/LoyaltiesUpdateCampaignRequestBodyOptions';
import { LoyaltiesUpdateCampaignResponseBody } from '../models/LoyaltiesUpdateCampaignResponseBody';
import { LoyaltyCampaign } from '../models/LoyaltyCampaign';
import { LoyaltyCampaignVoucher } from '../models/LoyaltyCampaignVoucher';
import { LoyaltyCampaignVoucherRedemption } from '../models/LoyaltyCampaignVoucherRedemption';
import { LoyaltyCardTransaction } from '../models/LoyaltyCardTransaction';
import { LoyaltyCardTransactionDetails } from '../models/LoyaltyCardTransactionDetails';
import { LoyaltyCardTransactionDetailsCustomEvent } from '../models/LoyaltyCardTransactionDetailsCustomEvent';
import { LoyaltyCardTransactionDetailsEarningRule } from '../models/LoyaltyCardTransactionDetailsEarningRule';
import { LoyaltyCardTransactionDetailsEarningRuleSource } from '../models/LoyaltyCardTransactionDetailsEarningRuleSource';
import { LoyaltyCardTransactionDetailsEvent } from '../models/LoyaltyCardTransactionDetailsEvent';
import { LoyaltyCardTransactionDetailsEventSchema } from '../models/LoyaltyCardTransactionDetailsEventSchema';
import { LoyaltyCardTransactionDetailsHolderLoyaltyTier } from '../models/LoyaltyCardTransactionDetailsHolderLoyaltyTier';
import { LoyaltyCardTransactionDetailsLoyaltyTier } from '../models/LoyaltyCardTransactionDetailsLoyaltyTier';
import { LoyaltyCardTransactionDetailsOrder } from '../models/LoyaltyCardTransactionDetailsOrder';
import { LoyaltyCardTransactionDetailsRedemption } from '../models/LoyaltyCardTransactionDetailsRedemption';
import { LoyaltyCardTransactionDetailsReward } from '../models/LoyaltyCardTransactionDetailsReward';
import { LoyaltyCardTransactionDetailsRollback } from '../models/LoyaltyCardTransactionDetailsRollback';
import { LoyaltyCardTransactionDetailsSegment } from '../models/LoyaltyCardTransactionDetailsSegment';
import { LoyaltyCardTransactionsType } from '../models/LoyaltyCardTransactionsType';
import { LoyaltyMember } from '../models/LoyaltyMember';
import { LoyaltyMemberLoyaltyCard } from '../models/LoyaltyMemberLoyaltyCard';
import { LoyaltyMemberPublish } from '../models/LoyaltyMemberPublish';
import { LoyaltyMemberRedemption } from '../models/LoyaltyMemberRedemption';
import { LoyaltyPendingPoints } from '../models/LoyaltyPendingPoints';
import { LoyaltyPendingPointsDetails } from '../models/LoyaltyPendingPointsDetails';
import { LoyaltyPendingPointsDetailsEarningRule } from '../models/LoyaltyPendingPointsDetailsEarningRule';
import { LoyaltyPendingPointsDetailsEarningRuleSource } from '../models/LoyaltyPendingPointsDetailsEarningRuleSource';
import { LoyaltyPendingPointsDetailsEvent } from '../models/LoyaltyPendingPointsDetailsEvent';
import { LoyaltyPendingPointsDetailsHolderLoyaltyTier } from '../models/LoyaltyPendingPointsDetailsHolderLoyaltyTier';
import { LoyaltyPendingPointsDetailsLoyaltyTier } from '../models/LoyaltyPendingPointsDetailsLoyaltyTier';
import { LoyaltyPendingPointsDetailsOrder } from '../models/LoyaltyPendingPointsDetailsOrder';
import { LoyaltyPointsBucket } from '../models/LoyaltyPointsBucket';
import { LoyaltyPointsBucketBucket } from '../models/LoyaltyPointsBucketBucket';
import { LoyaltyTier } from '../models/LoyaltyTier';
import { LoyaltyTierBase } from '../models/LoyaltyTierBase';
import { LoyaltyTierBasePoints } from '../models/LoyaltyTierBasePoints';
import { LoyaltyTierConfig } from '../models/LoyaltyTierConfig';
import { LoyaltyTierConfigPoints } from '../models/LoyaltyTierConfigPoints';
import { LoyaltyTierExpiration } from '../models/LoyaltyTierExpiration';
import { LoyaltyTierPoints } from '../models/LoyaltyTierPoints';
import { LoyaltyTiersExpirationAll } from '../models/LoyaltyTiersExpirationAll';
import { LoyaltyTiersExpirationAllExpirationDate } from '../models/LoyaltyTiersExpirationAllExpirationDate';
import { LoyaltyTiersExpirationAllExpirationDateRounding } from '../models/LoyaltyTiersExpirationAllExpirationDateRounding';
import { LoyaltyTiersExpirationAllStartDate } from '../models/LoyaltyTiersExpirationAllStartDate';
import { ManagementProject } from '../models/ManagementProject';
import { ManagementProjectApiUsageNotifications } from '../models/ManagementProjectApiUsageNotifications';
import { ManagementProjectDefaultCodeConfig } from '../models/ManagementProjectDefaultCodeConfig';
import { ManagementProjectLimits } from '../models/ManagementProjectLimits';
import { ManagementProjectLimitsApiCallsItem } from '../models/ManagementProjectLimitsApiCallsItem';
import { ManagementProjectLimitsBulkApiCallsItem } from '../models/ManagementProjectLimitsBulkApiCallsItem';
import { ManagementProjectWebhooksCalloutNotifications } from '../models/ManagementProjectWebhooksCalloutNotifications';
import { ManagementProjectWebhooksCalloutNotificationsDistributions } from '../models/ManagementProjectWebhooksCalloutNotificationsDistributions';
import { ManagementProjectWebhooksCalloutNotificationsWebhooks } from '../models/ManagementProjectWebhooksCalloutNotificationsWebhooks';
import { ManagementProjectsBranding } from '../models/ManagementProjectsBranding';
import { ManagementProjectsBrandingAddress } from '../models/ManagementProjectsBrandingAddress';
import { ManagementProjectsBrandingBrand } from '../models/ManagementProjectsBrandingBrand';
import { ManagementProjectsBrandingCockpits } from '../models/ManagementProjectsBrandingCockpits';
import { ManagementProjectsBrandingContact } from '../models/ManagementProjectsBrandingContact';
import { ManagementProjectsBrandingCreateRequestBody } from '../models/ManagementProjectsBrandingCreateRequestBody';
import { ManagementProjectsBrandingCreateRequestBodyAddress } from '../models/ManagementProjectsBrandingCreateRequestBodyAddress';
import { ManagementProjectsBrandingCreateRequestBodyBrand } from '../models/ManagementProjectsBrandingCreateRequestBodyBrand';
import { ManagementProjectsBrandingCreateRequestBodyCockpits } from '../models/ManagementProjectsBrandingCreateRequestBodyCockpits';
import { ManagementProjectsBrandingCreateRequestBodyContact } from '../models/ManagementProjectsBrandingCreateRequestBodyContact';
import { ManagementProjectsBrandingCreateResponseBody } from '../models/ManagementProjectsBrandingCreateResponseBody';
import { ManagementProjectsBrandingCreateResponseBodyAddress } from '../models/ManagementProjectsBrandingCreateResponseBodyAddress';
import { ManagementProjectsBrandingCreateResponseBodyBrand } from '../models/ManagementProjectsBrandingCreateResponseBodyBrand';
import { ManagementProjectsBrandingCreateResponseBodyCockpits } from '../models/ManagementProjectsBrandingCreateResponseBodyCockpits';
import { ManagementProjectsBrandingCreateResponseBodyContact } from '../models/ManagementProjectsBrandingCreateResponseBodyContact';
import { ManagementProjectsBrandingGetResponseBody } from '../models/ManagementProjectsBrandingGetResponseBody';
import { ManagementProjectsBrandingGetResponseBodyAddress } from '../models/ManagementProjectsBrandingGetResponseBodyAddress';
import { ManagementProjectsBrandingGetResponseBodyBrand } from '../models/ManagementProjectsBrandingGetResponseBodyBrand';
import { ManagementProjectsBrandingGetResponseBodyCockpits } from '../models/ManagementProjectsBrandingGetResponseBodyCockpits';
import { ManagementProjectsBrandingGetResponseBodyContact } from '../models/ManagementProjectsBrandingGetResponseBodyContact';
import { ManagementProjectsBrandingListResponseBody } from '../models/ManagementProjectsBrandingListResponseBody';
import { ManagementProjectsBrandingUpdateRequestBody } from '../models/ManagementProjectsBrandingUpdateRequestBody';
import { ManagementProjectsBrandingUpdateRequestBodyAddress } from '../models/ManagementProjectsBrandingUpdateRequestBodyAddress';
import { ManagementProjectsBrandingUpdateRequestBodyBrand } from '../models/ManagementProjectsBrandingUpdateRequestBodyBrand';
import { ManagementProjectsBrandingUpdateRequestBodyCockpits } from '../models/ManagementProjectsBrandingUpdateRequestBodyCockpits';
import { ManagementProjectsBrandingUpdateRequestBodyContact } from '../models/ManagementProjectsBrandingUpdateRequestBodyContact';
import { ManagementProjectsBrandingUpdateResponseBody } from '../models/ManagementProjectsBrandingUpdateResponseBody';
import { ManagementProjectsBrandingUpdateResponseBodyAddress } from '../models/ManagementProjectsBrandingUpdateResponseBodyAddress';
import { ManagementProjectsBrandingUpdateResponseBodyBrand } from '../models/ManagementProjectsBrandingUpdateResponseBodyBrand';
import { ManagementProjectsBrandingUpdateResponseBodyCockpits } from '../models/ManagementProjectsBrandingUpdateResponseBodyCockpits';
import { ManagementProjectsBrandingUpdateResponseBodyContact } from '../models/ManagementProjectsBrandingUpdateResponseBodyContact';
import { ManagementProjectsCreateRequestBody } from '../models/ManagementProjectsCreateRequestBody';
import { ManagementProjectsCreateRequestBodyApiUsageNotifications } from '../models/ManagementProjectsCreateRequestBodyApiUsageNotifications';
import { ManagementProjectsCreateRequestBodyUsersItem } from '../models/ManagementProjectsCreateRequestBodyUsersItem';
import { ManagementProjectsCreateRequestBodyWebhooksCalloutNotifications } from '../models/ManagementProjectsCreateRequestBodyWebhooksCalloutNotifications';
import { ManagementProjectsCreateRequestBodyWebhooksCalloutNotificationsDistributions } from '../models/ManagementProjectsCreateRequestBodyWebhooksCalloutNotificationsDistributions';
import { ManagementProjectsCreateRequestBodyWebhooksCalloutNotificationsWebhooks } from '../models/ManagementProjectsCreateRequestBodyWebhooksCalloutNotificationsWebhooks';
import { ManagementProjectsCreateResponseBody } from '../models/ManagementProjectsCreateResponseBody';
import { ManagementProjectsCreateResponseBodyApiUsageNotifications } from '../models/ManagementProjectsCreateResponseBodyApiUsageNotifications';
import { ManagementProjectsCreateResponseBodyClientSideKey } from '../models/ManagementProjectsCreateResponseBodyClientSideKey';
import { ManagementProjectsCreateResponseBodyServerSideKey } from '../models/ManagementProjectsCreateResponseBodyServerSideKey';
import { ManagementProjectsCreateResponseBodyWebhooksCalloutNotifications } from '../models/ManagementProjectsCreateResponseBodyWebhooksCalloutNotifications';
import { ManagementProjectsCreateResponseBodyWebhooksCalloutNotificationsDistributions } from '../models/ManagementProjectsCreateResponseBodyWebhooksCalloutNotificationsDistributions';
import { ManagementProjectsCreateResponseBodyWebhooksCalloutNotificationsWebhooks } from '../models/ManagementProjectsCreateResponseBodyWebhooksCalloutNotificationsWebhooks';
import { ManagementProjectsCustomEventSchema } from '../models/ManagementProjectsCustomEventSchema';
import { ManagementProjectsCustomEventSchemaSchema } from '../models/ManagementProjectsCustomEventSchemaSchema';
import { ManagementProjectsCustomEventSchemasCreateRequestBody } from '../models/ManagementProjectsCustomEventSchemasCreateRequestBody';
import { ManagementProjectsCustomEventSchemasCreateRequestBodySchema } from '../models/ManagementProjectsCustomEventSchemasCreateRequestBodySchema';
import { ManagementProjectsCustomEventSchemasCreateRequestBodySchemaPropertiesEntryValue } from '../models/ManagementProjectsCustomEventSchemasCreateRequestBodySchemaPropertiesEntryValue';
import { ManagementProjectsCustomEventSchemasCreateResponseBody } from '../models/ManagementProjectsCustomEventSchemasCreateResponseBody';
import { ManagementProjectsCustomEventSchemasCreateResponseBodySchema } from '../models/ManagementProjectsCustomEventSchemasCreateResponseBodySchema';
import { ManagementProjectsCustomEventSchemasGetResponseBody } from '../models/ManagementProjectsCustomEventSchemasGetResponseBody';
import { ManagementProjectsCustomEventSchemasGetResponseBodySchema } from '../models/ManagementProjectsCustomEventSchemasGetResponseBodySchema';
import { ManagementProjectsCustomEventSchemasListResponseBody } from '../models/ManagementProjectsCustomEventSchemasListResponseBody';
import { ManagementProjectsCustomEventSchemasUpdateRequestBody } from '../models/ManagementProjectsCustomEventSchemasUpdateRequestBody';
import { ManagementProjectsCustomEventSchemasUpdateRequestBodySchema } from '../models/ManagementProjectsCustomEventSchemasUpdateRequestBodySchema';
import { ManagementProjectsCustomEventSchemasUpdateResponseBody } from '../models/ManagementProjectsCustomEventSchemasUpdateResponseBody';
import { ManagementProjectsCustomEventSchemasUpdateResponseBodySchema } from '../models/ManagementProjectsCustomEventSchemasUpdateResponseBodySchema';
import { ManagementProjectsGetResponseBody } from '../models/ManagementProjectsGetResponseBody';
import { ManagementProjectsGetResponseBodyApiUsageNotifications } from '../models/ManagementProjectsGetResponseBodyApiUsageNotifications';
import { ManagementProjectsGetResponseBodyDefaultCodeConfig } from '../models/ManagementProjectsGetResponseBodyDefaultCodeConfig';
import { ManagementProjectsGetResponseBodyLimits } from '../models/ManagementProjectsGetResponseBodyLimits';
import { ManagementProjectsGetResponseBodyLimitsApiCallsItem } from '../models/ManagementProjectsGetResponseBodyLimitsApiCallsItem';
import { ManagementProjectsGetResponseBodyLimitsBulkApiCallsItem } from '../models/ManagementProjectsGetResponseBodyLimitsBulkApiCallsItem';
import { ManagementProjectsGetResponseBodyWebhooksCalloutNotifications } from '../models/ManagementProjectsGetResponseBodyWebhooksCalloutNotifications';
import { ManagementProjectsGetResponseBodyWebhooksCalloutNotificationsDistributions } from '../models/ManagementProjectsGetResponseBodyWebhooksCalloutNotificationsDistributions';
import { ManagementProjectsGetResponseBodyWebhooksCalloutNotificationsWebhooks } from '../models/ManagementProjectsGetResponseBodyWebhooksCalloutNotificationsWebhooks';
import { ManagementProjectsListResponseBody } from '../models/ManagementProjectsListResponseBody';
import { ManagementProjectsMetadataSchema } from '../models/ManagementProjectsMetadataSchema';
import { ManagementProjectsMetadataSchemaDefinition } from '../models/ManagementProjectsMetadataSchemaDefinition';
import { ManagementProjectsMetadataSchemasCreateRequestBody } from '../models/ManagementProjectsMetadataSchemasCreateRequestBody';
import { ManagementProjectsMetadataSchemasCreateResponseBody } from '../models/ManagementProjectsMetadataSchemasCreateResponseBody';
import { ManagementProjectsMetadataSchemasGetResponseBody } from '../models/ManagementProjectsMetadataSchemasGetResponseBody';
import { ManagementProjectsMetadataSchemasListResponseBody } from '../models/ManagementProjectsMetadataSchemasListResponseBody';
import { ManagementProjectsMetadataSchemasUpdateRequestBody } from '../models/ManagementProjectsMetadataSchemasUpdateRequestBody';
import { ManagementProjectsMetadataSchemasUpdateResponseBody } from '../models/ManagementProjectsMetadataSchemasUpdateResponseBody';
import { ManagementProjectsStackingRules } from '../models/ManagementProjectsStackingRules';
import { ManagementProjectsStackingRulesCreateRequestBody } from '../models/ManagementProjectsStackingRulesCreateRequestBody';
import { ManagementProjectsStackingRulesCreateResponseBody } from '../models/ManagementProjectsStackingRulesCreateResponseBody';
import { ManagementProjectsStackingRulesGetResponseBody } from '../models/ManagementProjectsStackingRulesGetResponseBody';
import { ManagementProjectsStackingRulesListResponseBody } from '../models/ManagementProjectsStackingRulesListResponseBody';
import { ManagementProjectsStackingRulesUpdateRequestBody } from '../models/ManagementProjectsStackingRulesUpdateRequestBody';
import { ManagementProjectsStackingRulesUpdateResponseBody } from '../models/ManagementProjectsStackingRulesUpdateResponseBody';
import { ManagementProjectsTemplatesCampaignsCopyCreateRequestBody } from '../models/ManagementProjectsTemplatesCampaignsCopyCreateRequestBody';
import { ManagementProjectsTemplatesCampaignsCopyCreateResponseBody } from '../models/ManagementProjectsTemplatesCampaignsCopyCreateResponseBody';
import { ManagementProjectsTemplatesCampaignsListResponseBody } from '../models/ManagementProjectsTemplatesCampaignsListResponseBody';
import { ManagementProjectsUpdateRequestBody } from '../models/ManagementProjectsUpdateRequestBody';
import { ManagementProjectsUpdateRequestBodyApiUsageNotifications } from '../models/ManagementProjectsUpdateRequestBodyApiUsageNotifications';
import { ManagementProjectsUpdateRequestBodyDefaultCodeConfig } from '../models/ManagementProjectsUpdateRequestBodyDefaultCodeConfig';
import { ManagementProjectsUpdateRequestBodyWebhooksCalloutNotifications } from '../models/ManagementProjectsUpdateRequestBodyWebhooksCalloutNotifications';
import { ManagementProjectsUpdateRequestBodyWebhooksCalloutNotificationsDistributions } from '../models/ManagementProjectsUpdateRequestBodyWebhooksCalloutNotificationsDistributions';
import { ManagementProjectsUpdateRequestBodyWebhooksCalloutNotificationsWebhooks } from '../models/ManagementProjectsUpdateRequestBodyWebhooksCalloutNotificationsWebhooks';
import { ManagementProjectsUpdateResponseBody } from '../models/ManagementProjectsUpdateResponseBody';
import { ManagementProjectsUpdateResponseBodyApiUsageNotifications } from '../models/ManagementProjectsUpdateResponseBodyApiUsageNotifications';
import { ManagementProjectsUpdateResponseBodyDefaultCodeConfig } from '../models/ManagementProjectsUpdateResponseBodyDefaultCodeConfig';
import { ManagementProjectsUpdateResponseBodyLimits } from '../models/ManagementProjectsUpdateResponseBodyLimits';
import { ManagementProjectsUpdateResponseBodyLimitsApiCallsItem } from '../models/ManagementProjectsUpdateResponseBodyLimitsApiCallsItem';
import { ManagementProjectsUpdateResponseBodyLimitsBulkApiCallsItem } from '../models/ManagementProjectsUpdateResponseBodyLimitsBulkApiCallsItem';
import { ManagementProjectsUpdateResponseBodyWebhooksCalloutNotifications } from '../models/ManagementProjectsUpdateResponseBodyWebhooksCalloutNotifications';
import { ManagementProjectsUpdateResponseBodyWebhooksCalloutNotificationsDistributions } from '../models/ManagementProjectsUpdateResponseBodyWebhooksCalloutNotificationsDistributions';
import { ManagementProjectsUpdateResponseBodyWebhooksCalloutNotificationsWebhooks } from '../models/ManagementProjectsUpdateResponseBodyWebhooksCalloutNotificationsWebhooks';
import { ManagementProjectsUsersAssignRequestBody } from '../models/ManagementProjectsUsersAssignRequestBody';
import { ManagementProjectsUsersAssignResponseBody } from '../models/ManagementProjectsUsersAssignResponseBody';
import { ManagementProjectsUsersGetUserResponseBody } from '../models/ManagementProjectsUsersGetUserResponseBody';
import { ManagementProjectsUsersInviteCreateRequestBody } from '../models/ManagementProjectsUsersInviteCreateRequestBody';
import { ManagementProjectsUsersListResponseBody } from '../models/ManagementProjectsUsersListResponseBody';
import { ManagementProjectsUsersUpdateRoleRequestBody } from '../models/ManagementProjectsUsersUpdateRoleRequestBody';
import { ManagementProjectsUsersUpdateRoleResponseBody } from '../models/ManagementProjectsUsersUpdateRoleResponseBody';
import { ManagementProjectsWebhook } from '../models/ManagementProjectsWebhook';
import { ManagementProjectsWebhooksCreateRequestBody } from '../models/ManagementProjectsWebhooksCreateRequestBody';
import { ManagementProjectsWebhooksCreateResponseBody } from '../models/ManagementProjectsWebhooksCreateResponseBody';
import { ManagementProjectsWebhooksGetResponseBody } from '../models/ManagementProjectsWebhooksGetResponseBody';
import { ManagementProjectsWebhooksListResponseBody } from '../models/ManagementProjectsWebhooksListResponseBody';
import { ManagementProjectsWebhooksUpdateRequestBody } from '../models/ManagementProjectsWebhooksUpdateRequestBody';
import { ManagementProjectsWebhooksUpdateResponseBody } from '../models/ManagementProjectsWebhooksUpdateResponseBody';
import { MappingPoints } from '../models/MappingPoints';
import { MemberActivity } from '../models/MemberActivity';
import { MemberActivityData } from '../models/MemberActivityData';
import { MemberActivityData1 } from '../models/MemberActivityData1';
import { MemberActivityDataBalance } from '../models/MemberActivityDataBalance';
import { MemberActivityDataBalanceRelatedObject } from '../models/MemberActivityDataBalanceRelatedObject';
import { MemberActivityDataCustomerEvent } from '../models/MemberActivityDataCustomerEvent';
import { MemberActivityDataOrder } from '../models/MemberActivityDataOrder';
import { MemberActivityDataOrderCustomer } from '../models/MemberActivityDataOrderCustomer';
import { MemberActivityDataOrderItemsItem } from '../models/MemberActivityDataOrderItemsItem';
import { MemberActivityDataOrderItemsItemProduct } from '../models/MemberActivityDataOrderItemsItemProduct';
import { MemberActivityDataOrderItemsItemSku } from '../models/MemberActivityDataOrderItemsItemSku';
import { MemberActivityDataOrderReferrer } from '../models/MemberActivityDataOrderReferrer';
import { MemberActivityDataRedemption } from '../models/MemberActivityDataRedemption';
import { MemberActivityDataRedemptionChannel } from '../models/MemberActivityDataRedemptionChannel';
import { MemberActivityDataRedemptionOrder } from '../models/MemberActivityDataRedemptionOrder';
import { MemberActivityDataRedemptionOrderCustomer } from '../models/MemberActivityDataRedemptionOrderCustomer';
import { MemberActivityDataRedemptionOrderItemsItem } from '../models/MemberActivityDataRedemptionOrderItemsItem';
import { MemberActivityDataRedemptionOrderItemsItemProduct } from '../models/MemberActivityDataRedemptionOrderItemsItemProduct';
import { MemberActivityDataRedemptionOrderItemsItemSku } from '../models/MemberActivityDataRedemptionOrderItemsItemSku';
import { MemberActivityDataRedemptionOrderReferrer } from '../models/MemberActivityDataRedemptionOrderReferrer';
import { MemberActivityDataRedemptionPreviousOrder } from '../models/MemberActivityDataRedemptionPreviousOrder';
import { MemberActivityDataRedemptionPreviousOrderCustomer } from '../models/MemberActivityDataRedemptionPreviousOrderCustomer';
import { MemberActivityDataRedemptionPreviousOrderReferrer } from '../models/MemberActivityDataRedemptionPreviousOrderReferrer';
import { MemberActivityDataRedemptionPromotionTier } from '../models/MemberActivityDataRedemptionPromotionTier';
import { MemberActivityDataRedemptionPromotionTierAction } from '../models/MemberActivityDataRedemptionPromotionTierAction';
import { MemberActivityDataRedemptionPromotionTierCampaign } from '../models/MemberActivityDataRedemptionPromotionTierCampaign';
import { MemberActivityDataRedemptionPromotionTierSummary } from '../models/MemberActivityDataRedemptionPromotionTierSummary';
import { MemberActivityDataRedemptionPromotionTierSummaryOrders } from '../models/MemberActivityDataRedemptionPromotionTierSummaryOrders';
import { MemberActivityDataRedemptionPromotionTierSummaryRedemptions } from '../models/MemberActivityDataRedemptionPromotionTierSummaryRedemptions';
import { MemberActivityDataRedemptionRelatedRedemptions } from '../models/MemberActivityDataRedemptionRelatedRedemptions';
import { MemberActivityDataRedemptionRelatedRedemptionsRedemptionsItem } from '../models/MemberActivityDataRedemptionRelatedRedemptionsRedemptionsItem';
import { MemberActivityDataRedemptionRelatedRedemptionsRollbacksItem } from '../models/MemberActivityDataRedemptionRelatedRedemptionsRollbacksItem';
import { MemberActivityDataRedemptionReward } from '../models/MemberActivityDataRedemptionReward';
import { MemberActivityDataRedemptionRewardCustomer } from '../models/MemberActivityDataRedemptionRewardCustomer';
import { MemberActivityDataRedemptionRewardParameters } from '../models/MemberActivityDataRedemptionRewardParameters';
import { MemberActivityDataRedemptionRewardParametersCampaign } from '../models/MemberActivityDataRedemptionRewardParametersCampaign';
import { MemberActivityDataRedemptionRewardParametersCoin } from '../models/MemberActivityDataRedemptionRewardParametersCoin';
import { MemberActivityDataRedemptionRewardParametersProduct } from '../models/MemberActivityDataRedemptionRewardParametersProduct';
import { MemberActivityDataRedemptionRewardProduct } from '../models/MemberActivityDataRedemptionRewardProduct';
import { MemberActivityDataRedemptionRewardSku } from '../models/MemberActivityDataRedemptionRewardSku';
import { MemberActivityDataRedemptionRewardVoucher } from '../models/MemberActivityDataRedemptionRewardVoucher';
import { MemberActivityDataRedemptionRewardVoucherGift } from '../models/MemberActivityDataRedemptionRewardVoucherGift';
import { MemberActivityDataRedemptionRewardVoucherLoyaltyCard } from '../models/MemberActivityDataRedemptionRewardVoucherLoyaltyCard';
import { MemberActivityDataRedemptionRewardVoucherPublish } from '../models/MemberActivityDataRedemptionRewardVoucherPublish';
import { MemberActivityDataRedemptionRewardVoucherRedemption } from '../models/MemberActivityDataRedemptionRewardVoucherRedemption';
import { MemberActivityDataRedemptionVoucher } from '../models/MemberActivityDataRedemptionVoucher';
import { MemberActivityDataRedemptionVoucherGift } from '../models/MemberActivityDataRedemptionVoucherGift';
import { MemberActivityDataRedemptionVoucherLoyaltyCard } from '../models/MemberActivityDataRedemptionVoucherLoyaltyCard';
import { MemberActivityDataRedemptionVoucherPublish } from '../models/MemberActivityDataRedemptionVoucherPublish';
import { MemberActivityDataRedemptionVoucherRedemption } from '../models/MemberActivityDataRedemptionVoucherRedemption';
import { MemberActivityDataTransaction } from '../models/MemberActivityDataTransaction';
import { MemberActivityDataTransactionDetails } from '../models/MemberActivityDataTransactionDetails';
import { MemberActivityDataTransactionDetailsCustomEvent } from '../models/MemberActivityDataTransactionDetailsCustomEvent';
import { MemberActivityDataTransactionDetailsDestinationVoucher } from '../models/MemberActivityDataTransactionDetailsDestinationVoucher';
import { MemberActivityDataTransactionDetailsDestinationVoucherGift } from '../models/MemberActivityDataTransactionDetailsDestinationVoucherGift';
import { MemberActivityDataTransactionDetailsDestinationVoucherLoyaltyCard } from '../models/MemberActivityDataTransactionDetailsDestinationVoucherLoyaltyCard';
import { MemberActivityDataTransactionDetailsDestinationVoucherRedemption } from '../models/MemberActivityDataTransactionDetailsDestinationVoucherRedemption';
import { MemberActivityDataTransactionDetailsEarningRule } from '../models/MemberActivityDataTransactionDetailsEarningRule';
import { MemberActivityDataTransactionDetailsEarningRuleSource } from '../models/MemberActivityDataTransactionDetailsEarningRuleSource';
import { MemberActivityDataTransactionDetailsEvent } from '../models/MemberActivityDataTransactionDetailsEvent';
import { MemberActivityDataTransactionDetailsEventSchema } from '../models/MemberActivityDataTransactionDetailsEventSchema';
import { MemberActivityDataTransactionDetailsHolderLoyaltyTier } from '../models/MemberActivityDataTransactionDetailsHolderLoyaltyTier';
import { MemberActivityDataTransactionDetailsLoyaltyTier } from '../models/MemberActivityDataTransactionDetailsLoyaltyTier';
import { MemberActivityDataTransactionDetailsOrder } from '../models/MemberActivityDataTransactionDetailsOrder';
import { MemberActivityDataTransactionDetailsRedemption } from '../models/MemberActivityDataTransactionDetailsRedemption';
import { MemberActivityDataTransactionDetailsReward } from '../models/MemberActivityDataTransactionDetailsReward';
import { MemberActivityDataTransactionDetailsRollback } from '../models/MemberActivityDataTransactionDetailsRollback';
import { MemberActivityDataTransactionDetailsSegment } from '../models/MemberActivityDataTransactionDetailsSegment';
import { MemberActivityDataTransactionDetailsSourceVoucher } from '../models/MemberActivityDataTransactionDetailsSourceVoucher';
import { MemberActivityDataTransactionDetailsSourceVoucherGift } from '../models/MemberActivityDataTransactionDetailsSourceVoucherGift';
import { MemberActivityDataTransactionDetailsSourceVoucherLoyaltyCard } from '../models/MemberActivityDataTransactionDetailsSourceVoucherLoyaltyCard';
import { MemberActivityDataTransactionDetailsSourceVoucherRedemption } from '../models/MemberActivityDataTransactionDetailsSourceVoucherRedemption';
import { MetadataSchemaDefinitionDeprecated } from '../models/MetadataSchemaDefinitionDeprecated';
import { MetadataSchemaDeprecated } from '../models/MetadataSchemaDeprecated';
import { MetadataSchemasGetResponseBody } from '../models/MetadataSchemasGetResponseBody';
import { MetadataSchemasListResponseBody } from '../models/MetadataSchemasListResponseBody';
import { ModelError } from '../models/ModelError';
import { OAuthTokenGenerateResponseBody } from '../models/OAuthTokenGenerateResponseBody';
import { OAuthTokenIntrospectResponseBody } from '../models/OAuthTokenIntrospectResponseBody';
import { Order } from '../models/Order';
import { OrderCalculated } from '../models/OrderCalculated';
import { OrderCalculatedItem } from '../models/OrderCalculatedItem';
import { OrderCalculatedItemProduct } from '../models/OrderCalculatedItemProduct';
import { OrderCalculatedItemSku } from '../models/OrderCalculatedItemSku';
import { OrderItem } from '../models/OrderItem';
import { OrderItemProduct } from '../models/OrderItemProduct';
import { OrderItemSku } from '../models/OrderItemSku';
import { OrderRedemptionsEntry } from '../models/OrderRedemptionsEntry';
import { OrdersCreateRequestBody } from '../models/OrdersCreateRequestBody';
import { OrdersCreateResponseBody } from '../models/OrdersCreateResponseBody';
import { OrdersExportCreateRequestBody } from '../models/OrdersExportCreateRequestBody';
import { OrdersExportCreateRequestBodyParameters } from '../models/OrdersExportCreateRequestBodyParameters';
import { OrdersExportCreateResponseBody } from '../models/OrdersExportCreateResponseBody';
import { OrdersExportCreateResponseBodyParameters } from '../models/OrdersExportCreateResponseBodyParameters';
import { OrdersGetResponseBody } from '../models/OrdersGetResponseBody';
import { OrdersImportCreateRequestBodyItem } from '../models/OrdersImportCreateRequestBodyItem';
import { OrdersImportCreateResponseBody } from '../models/OrdersImportCreateResponseBody';
import { OrdersListResponseBody } from '../models/OrdersListResponseBody';
import { OrdersListResponseBodyOrdersItem } from '../models/OrdersListResponseBodyOrdersItem';
import { OrdersUpdateRequestBody } from '../models/OrdersUpdateRequestBody';
import { OrdersUpdateResponseBody } from '../models/OrdersUpdateResponseBody';
import { ParameterActivityCategory } from '../models/ParameterActivityCategory';
import { ParameterCampaignStatusListCampaigns } from '../models/ParameterCampaignStatusListCampaigns';
import { ParameterCampaignType } from '../models/ParameterCampaignType';
import { ParameterCampaignsAccessSetttings } from '../models/ParameterCampaignsAccessSetttings';
import { ParameterCampaignsAccessSetttingsFilter } from '../models/ParameterCampaignsAccessSetttingsFilter';
import { ParameterCreatedBeforeAfter } from '../models/ParameterCreatedBeforeAfter';
import { ParameterCustomerEvent } from '../models/ParameterCustomerEvent';
import { ParameterExpandListCampaigns } from '../models/ParameterExpandListCampaigns';
import { ParameterFiltersListBin } from '../models/ParameterFiltersListBin';
import { ParameterFiltersListBinId } from '../models/ParameterFiltersListBinId';
import { ParameterFiltersListBinResourceId } from '../models/ParameterFiltersListBinResourceId';
import { ParameterFiltersListBinResourceName } from '../models/ParameterFiltersListBinResourceName';
import { ParameterFiltersListBinResourceType } from '../models/ParameterFiltersListBinResourceType';
import { ParameterFiltersListBinResourceTypeConditions } from '../models/ParameterFiltersListBinResourceTypeConditions';
import { ParameterFiltersListCampaigns } from '../models/ParameterFiltersListCampaigns';
import { ParameterFiltersListCampaignsActive } from '../models/ParameterFiltersListCampaignsActive';
import { ParameterFiltersListCampaignsCampaignStatus } from '../models/ParameterFiltersListCampaignsCampaignStatus';
import { ParameterFiltersListCampaignsCampaignStatusConditions } from '../models/ParameterFiltersListCampaignsCampaignStatusConditions';
import { ParameterFiltersListCampaignsCampaigns } from '../models/ParameterFiltersListCampaignsCampaigns';
import { ParameterFiltersListCampaignsCampaignsId } from '../models/ParameterFiltersListCampaignsCampaignsId';
import { ParameterFiltersListCampaignsCategories } from '../models/ParameterFiltersListCampaignsCategories';
import { ParameterFiltersListCampaignsCategoryIds } from '../models/ParameterFiltersListCampaignsCategoryIds';
import { ParameterFiltersListCampaignsCreatedDate } from '../models/ParameterFiltersListCampaignsCreatedDate';
import { ParameterFiltersListCampaignsExpirationDate } from '../models/ParameterFiltersListCampaignsExpirationDate';
import { ParameterFiltersListCampaignsIsReferralCode } from '../models/ParameterFiltersListCampaignsIsReferralCode';
import { ParameterFiltersListCampaignsIsReferralCodeConditions } from '../models/ParameterFiltersListCampaignsIsReferralCodeConditions';
import { ParameterFiltersListCampaignsStartDate } from '../models/ParameterFiltersListCampaignsStartDate';
import { ParameterFiltersListCampaignsStatus } from '../models/ParameterFiltersListCampaignsStatus';
import { ParameterFiltersListCampaignsStatusConditions } from '../models/ParameterFiltersListCampaignsStatusConditions';
import { ParameterFiltersListCampaignsType } from '../models/ParameterFiltersListCampaignsType';
import { ParameterFiltersListCampaignsTypeConditions } from '../models/ParameterFiltersListCampaignsTypeConditions';
import { ParameterFiltersListCampaignsUpdatedAt } from '../models/ParameterFiltersListCampaignsUpdatedAt';
import { ParameterFiltersListCampaignsValidityDayOfWeek } from '../models/ParameterFiltersListCampaignsValidityDayOfWeek';
import { ParameterFiltersListCampaignsValidityDayOfWeekConditions } from '../models/ParameterFiltersListCampaignsValidityDayOfWeekConditions';
import { ParameterFiltersListCampaignsValidityTimeframe } from '../models/ParameterFiltersListCampaignsValidityTimeframe';
import { ParameterFiltersListCampaignsVoucherType } from '../models/ParameterFiltersListCampaignsVoucherType';
import { ParameterFiltersListCampaignsVoucherTypeConditions } from '../models/ParameterFiltersListCampaignsVoucherTypeConditions';
import { ParameterFiltersListCustomerRedeemables } from '../models/ParameterFiltersListCustomerRedeemables';
import { ParameterFiltersListCustomerRedeemablesCampaignId } from '../models/ParameterFiltersListCustomerRedeemablesCampaignId';
import { ParameterFiltersListCustomerRedeemablesCampaignType } from '../models/ParameterFiltersListCustomerRedeemablesCampaignType';
import { ParameterFiltersListCustomerRedeemablesCampaignTypeConditions } from '../models/ParameterFiltersListCustomerRedeemablesCampaignTypeConditions';
import { ParameterFiltersListCustomerRedeemablesCreatedAt } from '../models/ParameterFiltersListCustomerRedeemablesCreatedAt';
import { ParameterFiltersListCustomerRedeemablesHolderRole } from '../models/ParameterFiltersListCustomerRedeemablesHolderRole';
import { ParameterFiltersListCustomerRedeemablesHolderRoleConditions } from '../models/ParameterFiltersListCustomerRedeemablesHolderRoleConditions';
import { ParameterFiltersListCustomerRedeemablesId } from '../models/ParameterFiltersListCustomerRedeemablesId';
import { ParameterFiltersListCustomerRedeemablesRedeemableId } from '../models/ParameterFiltersListCustomerRedeemablesRedeemableId';
import { ParameterFiltersListCustomerRedeemablesRedeemableObject } from '../models/ParameterFiltersListCustomerRedeemablesRedeemableObject';
import { ParameterFiltersListCustomerRedeemablesRedeemableObjectConditions } from '../models/ParameterFiltersListCustomerRedeemablesRedeemableObjectConditions';
import { ParameterFiltersListCustomerRedeemablesVoucherType } from '../models/ParameterFiltersListCustomerRedeemablesVoucherType';
import { ParameterFiltersListLocations } from '../models/ParameterFiltersListLocations';
import { ParameterFiltersListLocationsCreatedAt } from '../models/ParameterFiltersListLocationsCreatedAt';
import { ParameterFiltersListLocationsName } from '../models/ParameterFiltersListLocationsName';
import { ParameterFiltersListLocationsUpdatedAt } from '../models/ParameterFiltersListLocationsUpdatedAt';
import { ParameterFiltersListMemberTransactions } from '../models/ParameterFiltersListMemberTransactions';
import { ParameterFiltersListPublications } from '../models/ParameterFiltersListPublications';
import { ParameterFiltersListPublicationsCampaignName } from '../models/ParameterFiltersListPublicationsCampaignName';
import { ParameterFiltersListPublicationsCustomerId } from '../models/ParameterFiltersListPublicationsCustomerId';
import { ParameterFiltersListPublicationsFailureCode } from '../models/ParameterFiltersListPublicationsFailureCode';
import { ParameterFiltersListPublicationsIsReferralCode } from '../models/ParameterFiltersListPublicationsIsReferralCode';
import { ParameterFiltersListPublicationsParentObjectId } from '../models/ParameterFiltersListPublicationsParentObjectId';
import { ParameterFiltersListPublicationsRelatedObjectId } from '../models/ParameterFiltersListPublicationsRelatedObjectId';
import { ParameterFiltersListPublicationsResult } from '../models/ParameterFiltersListPublicationsResult';
import { ParameterFiltersListPublicationsSourceId } from '../models/ParameterFiltersListPublicationsSourceId';
import { ParameterFiltersListPublicationsVoucherType } from '../models/ParameterFiltersListPublicationsVoucherType';
import { ParameterFiltersListRedemptions } from '../models/ParameterFiltersListRedemptions';
import { ParameterFiltersListRedemptionsCampaignName } from '../models/ParameterFiltersListRedemptionsCampaignName';
import { ParameterFiltersListRedemptionsCustomerId } from '../models/ParameterFiltersListRedemptionsCustomerId';
import { ParameterFiltersListRedemptionsFailureCode } from '../models/ParameterFiltersListRedemptionsFailureCode';
import { ParameterFiltersListRedemptionsObject } from '../models/ParameterFiltersListRedemptionsObject';
import { ParameterFiltersListRedemptionsParentRedemptionId } from '../models/ParameterFiltersListRedemptionsParentRedemptionId';
import { ParameterFiltersListRedemptionsRelatedObjectId } from '../models/ParameterFiltersListRedemptionsRelatedObjectId';
import { ParameterFiltersListRedemptionsRelatedObjectParentId } from '../models/ParameterFiltersListRedemptionsRelatedObjectParentId';
import { ParameterFiltersListRedemptionsResult } from '../models/ParameterFiltersListRedemptionsResult';
import { ParameterFiltersListRedemptionsUserLogin } from '../models/ParameterFiltersListRedemptionsUserLogin';
import { ParameterFiltersListRedemptionsVoucherCode } from '../models/ParameterFiltersListRedemptionsVoucherCode';
import { ParameterFiltersListReferralsRedeemableHolders } from '../models/ParameterFiltersListReferralsRedeemableHolders';
import { ParameterFiltersListReferralsRedeemableHoldersCreatedAt } from '../models/ParameterFiltersListReferralsRedeemableHoldersCreatedAt';
import { ParameterFiltersListReferralsRedeemableHoldersCustomerId } from '../models/ParameterFiltersListReferralsRedeemableHoldersCustomerId';
import { ParameterFiltersListReferralsRedeemableHoldersHolderRole } from '../models/ParameterFiltersListReferralsRedeemableHoldersHolderRole';
import { ParameterFiltersListReferralsRedeemableHoldersHolderRoleConditions } from '../models/ParameterFiltersListReferralsRedeemableHoldersHolderRoleConditions';
import { ParameterFiltersListReferralsRedeemableHoldersId } from '../models/ParameterFiltersListReferralsRedeemableHoldersId';
import { ParameterFiltersListTemplates } from '../models/ParameterFiltersListTemplates';
import { ParameterFiltersListTemplatesCampaignType } from '../models/ParameterFiltersListTemplatesCampaignType';
import { ParameterFiltersListTemplatesCampaignTypeConditions } from '../models/ParameterFiltersListTemplatesCampaignTypeConditions';
import { ParameterFiltersListTemplatesId } from '../models/ParameterFiltersListTemplatesId';
import { ParameterFiltersListTemplatesName } from '../models/ParameterFiltersListTemplatesName';
import { ParameterOrder } from '../models/ParameterOrder';
import { ParameterOrderCreatedAt } from '../models/ParameterOrderCreatedAt';
import { ParameterOrderListAllPromotionStacks } from '../models/ParameterOrderListAllPromotionStacks';
import { ParameterOrderListBin } from '../models/ParameterOrderListBin';
import { ParameterOrderListCampaigns } from '../models/ParameterOrderListCampaigns';
import { ParameterOrderListCustomers } from '../models/ParameterOrderListCustomers';
import { ParameterOrderListEarningRules } from '../models/ParameterOrderListEarningRules';
import { ParameterOrderListExports } from '../models/ParameterOrderListExports';
import { ParameterOrderListLocations } from '../models/ParameterOrderListLocations';
import { ParameterOrderListLoyaltyTiers } from '../models/ParameterOrderListLoyaltyTiers';
import { ParameterOrderListOrders } from '../models/ParameterOrderListOrders';
import { ParameterOrderListPendingPoints } from '../models/ParameterOrderListPendingPoints';
import { ParameterOrderListPromotionTiers } from '../models/ParameterOrderListPromotionTiers';
import { ParameterOrderListPromotionTiersClientSide } from '../models/ParameterOrderListPromotionTiersClientSide';
import { ParameterOrderListPublications } from '../models/ParameterOrderListPublications';
import { ParameterOrderListRedeemables } from '../models/ParameterOrderListRedeemables';
import { ParameterOrderListRedemptions } from '../models/ParameterOrderListRedemptions';
import { ParameterOrderListTransactions } from '../models/ParameterOrderListTransactions';
import { ParameterOrderListValidationRuleAssignments } from '../models/ParameterOrderListValidationRuleAssignments';
import { ParameterOrderListValidationRules } from '../models/ParameterOrderListValidationRules';
import { ParameterOrderVouchers } from '../models/ParameterOrderVouchers';
import { ParameterResultListPublications } from '../models/ParameterResultListPublications';
import { ParameterTemplatesList } from '../models/ParameterTemplatesList';
import { ParameterUpdatedBeforeAfter } from '../models/ParameterUpdatedBeforeAfter';
import { ParameterVoucherTypeListPublications } from '../models/ParameterVoucherTypeListPublications';
import { ParametersFiltersListCampaignTransactions } from '../models/ParametersFiltersListCampaignTransactions';
import { PointsExpirationTypes } from '../models/PointsExpirationTypes';
import { Product } from '../models/Product';
import { ProductCollectionsCreateRequestBody } from '../models/ProductCollectionsCreateRequestBody';
import { ProductCollectionsCreateRequestBodyProductsItem } from '../models/ProductCollectionsCreateRequestBodyProductsItem';
import { ProductCollectionsCreateResponseBody } from '../models/ProductCollectionsCreateResponseBody';
import { ProductCollectionsCreateResponseBodyProductsItem } from '../models/ProductCollectionsCreateResponseBodyProductsItem';
import { ProductCollectionsGetResponseBody } from '../models/ProductCollectionsGetResponseBody';
import { ProductCollectionsGetResponseBodyProductsItem } from '../models/ProductCollectionsGetResponseBodyProductsItem';
import { ProductCollectionsItem } from '../models/ProductCollectionsItem';
import { ProductCollectionsItemProductsItem } from '../models/ProductCollectionsItemProductsItem';
import { ProductCollectionsListResponseBody } from '../models/ProductCollectionsListResponseBody';
import { ProductCollectionsProductsListResponseBody } from '../models/ProductCollectionsProductsListResponseBody';
import { ProductCollectionsProductsListResponseBodyDataItem } from '../models/ProductCollectionsProductsListResponseBodyDataItem';
import { ProductWithoutSkus } from '../models/ProductWithoutSkus';
import { ProductsCreateRequestBody } from '../models/ProductsCreateRequestBody';
import { ProductsCreateResponseBody } from '../models/ProductsCreateResponseBody';
import { ProductsGetResponseBody } from '../models/ProductsGetResponseBody';
import { ProductsImportCsvCreateResponseBody } from '../models/ProductsImportCsvCreateResponseBody';
import { ProductsListResponseBody } from '../models/ProductsListResponseBody';
import { ProductsMetadataUpdateInBulkRequestBody } from '../models/ProductsMetadataUpdateInBulkRequestBody';
import { ProductsMetadataUpdateInBulkResponseBody } from '../models/ProductsMetadataUpdateInBulkResponseBody';
import { ProductsSkusCreateRequestBody } from '../models/ProductsSkusCreateRequestBody';
import { ProductsSkusCreateResponseBody } from '../models/ProductsSkusCreateResponseBody';
import { ProductsSkusListResponseBody } from '../models/ProductsSkusListResponseBody';
import { ProductsSkusUpdateRequestBody } from '../models/ProductsSkusUpdateRequestBody';
import { ProductsSkusUpdateResponseBody } from '../models/ProductsSkusUpdateResponseBody';
import { ProductsUpdateInBulkRequestBody } from '../models/ProductsUpdateInBulkRequestBody';
import { ProductsUpdateInBulkResponseBody } from '../models/ProductsUpdateInBulkResponseBody';
import { ProductsUpdateRequestBody } from '../models/ProductsUpdateRequestBody';
import { ProductsUpdateResponseBody } from '../models/ProductsUpdateResponseBody';
import { PromotionStack } from '../models/PromotionStack';
import { PromotionStackBase } from '../models/PromotionStackBase';
import { PromotionStackBaseTiers } from '../models/PromotionStackBaseTiers';
import { PromotionStackTiers } from '../models/PromotionStackTiers';
import { PromotionTier } from '../models/PromotionTier';
import { PromotionTierAction } from '../models/PromotionTierAction';
import { PromotionTierCampaign } from '../models/PromotionTierCampaign';
import { PromotionTierCreateParams } from '../models/PromotionTierCreateParams';
import { PromotionTierCreateParamsAction } from '../models/PromotionTierCreateParamsAction';
import { PromotionTierSummary } from '../models/PromotionTierSummary';
import { PromotionTierSummaryOrders } from '../models/PromotionTierSummaryOrders';
import { PromotionTierSummaryRedemptions } from '../models/PromotionTierSummaryRedemptions';
import { PromotionTiersList } from '../models/PromotionTiersList';
import { PromotionsStacksCreateRequestBody } from '../models/PromotionsStacksCreateRequestBody';
import { PromotionsStacksCreateRequestBodyTiers } from '../models/PromotionsStacksCreateRequestBodyTiers';
import { PromotionsStacksCreateResponseBody } from '../models/PromotionsStacksCreateResponseBody';
import { PromotionsStacksCreateResponseBodyTiers } from '../models/PromotionsStacksCreateResponseBodyTiers';
import { PromotionsStacksGetResponseBody } from '../models/PromotionsStacksGetResponseBody';
import { PromotionsStacksGetResponseBodyTiers } from '../models/PromotionsStacksGetResponseBodyTiers';
import { PromotionsStacksListResponseBody } from '../models/PromotionsStacksListResponseBody';
import { PromotionsStacksUpdateRequestBody } from '../models/PromotionsStacksUpdateRequestBody';
import { PromotionsStacksUpdateRequestBodyTiers } from '../models/PromotionsStacksUpdateRequestBodyTiers';
import { PromotionsStacksUpdateResponseBody } from '../models/PromotionsStacksUpdateResponseBody';
import { PromotionsStacksUpdateResponseBodyTiers } from '../models/PromotionsStacksUpdateResponseBodyTiers';
import { PromotionsTiersCreateRequestBody } from '../models/PromotionsTiersCreateRequestBody';
import { PromotionsTiersCreateRequestBodyAction } from '../models/PromotionsTiersCreateRequestBodyAction';
import { PromotionsTiersCreateResponseBody } from '../models/PromotionsTiersCreateResponseBody';
import { PromotionsTiersCreateResponseBodyAction } from '../models/PromotionsTiersCreateResponseBodyAction';
import { PromotionsTiersCreateResponseBodyCampaign } from '../models/PromotionsTiersCreateResponseBodyCampaign';
import { PromotionsTiersCreateResponseBodySummary } from '../models/PromotionsTiersCreateResponseBodySummary';
import { PromotionsTiersCreateResponseBodySummaryOrders } from '../models/PromotionsTiersCreateResponseBodySummaryOrders';
import { PromotionsTiersCreateResponseBodySummaryRedemptions } from '../models/PromotionsTiersCreateResponseBodySummaryRedemptions';
import { PromotionsTiersDisableResponseBody } from '../models/PromotionsTiersDisableResponseBody';
import { PromotionsTiersDisableResponseBodyAction } from '../models/PromotionsTiersDisableResponseBodyAction';
import { PromotionsTiersDisableResponseBodyCampaign } from '../models/PromotionsTiersDisableResponseBodyCampaign';
import { PromotionsTiersDisableResponseBodySummary } from '../models/PromotionsTiersDisableResponseBodySummary';
import { PromotionsTiersDisableResponseBodySummaryOrders } from '../models/PromotionsTiersDisableResponseBodySummaryOrders';
import { PromotionsTiersDisableResponseBodySummaryRedemptions } from '../models/PromotionsTiersDisableResponseBodySummaryRedemptions';
import { PromotionsTiersEnableResponseBody } from '../models/PromotionsTiersEnableResponseBody';
import { PromotionsTiersEnableResponseBodyAction } from '../models/PromotionsTiersEnableResponseBodyAction';
import { PromotionsTiersEnableResponseBodyCampaign } from '../models/PromotionsTiersEnableResponseBodyCampaign';
import { PromotionsTiersEnableResponseBodySummary } from '../models/PromotionsTiersEnableResponseBodySummary';
import { PromotionsTiersEnableResponseBodySummaryOrders } from '../models/PromotionsTiersEnableResponseBodySummaryOrders';
import { PromotionsTiersEnableResponseBodySummaryRedemptions } from '../models/PromotionsTiersEnableResponseBodySummaryRedemptions';
import { PromotionsTiersGetResponseBody } from '../models/PromotionsTiersGetResponseBody';
import { PromotionsTiersGetResponseBodyAction } from '../models/PromotionsTiersGetResponseBodyAction';
import { PromotionsTiersGetResponseBodyCampaign } from '../models/PromotionsTiersGetResponseBodyCampaign';
import { PromotionsTiersGetResponseBodySummary } from '../models/PromotionsTiersGetResponseBodySummary';
import { PromotionsTiersGetResponseBodySummaryOrders } from '../models/PromotionsTiersGetResponseBodySummaryOrders';
import { PromotionsTiersGetResponseBodySummaryRedemptions } from '../models/PromotionsTiersGetResponseBodySummaryRedemptions';
import { PromotionsTiersListResponseBody } from '../models/PromotionsTiersListResponseBody';
import { PromotionsTiersUpdateRequestBody } from '../models/PromotionsTiersUpdateRequestBody';
import { PromotionsTiersUpdateRequestBodyAction } from '../models/PromotionsTiersUpdateRequestBodyAction';
import { PromotionsTiersUpdateResponseBody } from '../models/PromotionsTiersUpdateResponseBody';
import { PromotionsTiersUpdateResponseBodyAction } from '../models/PromotionsTiersUpdateResponseBodyAction';
import { PromotionsTiersUpdateResponseBodyCampaign } from '../models/PromotionsTiersUpdateResponseBodyCampaign';
import { PromotionsTiersUpdateResponseBodySummary } from '../models/PromotionsTiersUpdateResponseBodySummary';
import { PromotionsTiersUpdateResponseBodySummaryOrders } from '../models/PromotionsTiersUpdateResponseBodySummaryOrders';
import { PromotionsTiersUpdateResponseBodySummaryRedemptions } from '../models/PromotionsTiersUpdateResponseBodySummaryRedemptions';
import { PublicationsCreateRequestBody } from '../models/PublicationsCreateRequestBody';
import { PublicationsCreateResponseBody } from '../models/PublicationsCreateResponseBody';
import { PublicationsListResponseBody } from '../models/PublicationsListResponseBody';
import { PublicationsListResponseBodyPublicationsItem } from '../models/PublicationsListResponseBodyPublicationsItem';
import { PublicationsListResponseBodyPublicationsItemMetadata } from '../models/PublicationsListResponseBodyPublicationsItemMetadata';
import { QualificationsCheckEligibilityRequestBody } from '../models/QualificationsCheckEligibilityRequestBody';
import { QualificationsCheckEligibilityRequestBodySession } from '../models/QualificationsCheckEligibilityRequestBodySession';
import { QualificationsCheckEligibilityResponseBody } from '../models/QualificationsCheckEligibilityResponseBody';
import { QualificationsCheckEligibilityResponseBodyOrder } from '../models/QualificationsCheckEligibilityResponseBodyOrder';
import { QualificationsFieldConditions } from '../models/QualificationsFieldConditions';
import { QualificationsFiltersCondition } from '../models/QualificationsFiltersCondition';
import { QualificationsOption } from '../models/QualificationsOption';
import { QualificationsOptionFilters } from '../models/QualificationsOptionFilters';
import { QualificationsOptionFiltersCampaignType } from '../models/QualificationsOptionFiltersCampaignType';
import { QualificationsOptionFiltersCampaignTypeConditions } from '../models/QualificationsOptionFiltersCampaignTypeConditions';
import { QualificationsOptionFiltersHolderRole } from '../models/QualificationsOptionFiltersHolderRole';
import { QualificationsOptionFiltersHolderRoleConditions } from '../models/QualificationsOptionFiltersHolderRoleConditions';
import { QualificationsOptionFiltersResourceType } from '../models/QualificationsOptionFiltersResourceType';
import { QualificationsOptionFiltersResourceTypeConditions } from '../models/QualificationsOptionFiltersResourceTypeConditions';
import { QualificationsRedeemable } from '../models/QualificationsRedeemable';
import { QualificationsRedeemableBase } from '../models/QualificationsRedeemableBase';
import { QualificationsRedeemableBaseOrder } from '../models/QualificationsRedeemableBaseOrder';
import { QualificationsRedeemableBaseOrderItemsItem } from '../models/QualificationsRedeemableBaseOrderItemsItem';
import { QualificationsRedeemableOrder } from '../models/QualificationsRedeemableOrder';
import { QualificationsRedeemableOrderItemsItem } from '../models/QualificationsRedeemableOrderItemsItem';
import { QualificationsRedeemables } from '../models/QualificationsRedeemables';
import { RedeemableGift } from '../models/RedeemableGift';
import { RedeemableHolder } from '../models/RedeemableHolder';
import { RedeemableLoyaltyCard } from '../models/RedeemableLoyaltyCard';
import { RedeemableResult } from '../models/RedeemableResult';
import { RedeemableVoucher } from '../models/RedeemableVoucher';
import { RedeemableVoucherGift } from '../models/RedeemableVoucherGift';
import { RedeemableVoucherLoyaltyCard } from '../models/RedeemableVoucherLoyaltyCard';
import { RedeemableVoucherPublish } from '../models/RedeemableVoucherPublish';
import { RedeemableVoucherRedemption } from '../models/RedeemableVoucherRedemption';
import { Redemption } from '../models/Redemption';
import { RedemptionChannel } from '../models/RedemptionChannel';
import { RedemptionEntry } from '../models/RedemptionEntry';
import { RedemptionEntryChannel } from '../models/RedemptionEntryChannel';
import { RedemptionEntryCustomer } from '../models/RedemptionEntryCustomer';
import { RedemptionEntryGift } from '../models/RedemptionEntryGift';
import { RedemptionEntryLoyaltyCard } from '../models/RedemptionEntryLoyaltyCard';
import { RedemptionEntryOrder } from '../models/RedemptionEntryOrder';
import { RedemptionEntryOrderCustomer } from '../models/RedemptionEntryOrderCustomer';
import { RedemptionEntryOrderItemsItem } from '../models/RedemptionEntryOrderItemsItem';
import { RedemptionEntryOrderItemsItemProduct } from '../models/RedemptionEntryOrderItemsItemProduct';
import { RedemptionEntryOrderItemsItemSku } from '../models/RedemptionEntryOrderItemsItemSku';
import { RedemptionEntryOrderReferrer } from '../models/RedemptionEntryOrderReferrer';
import { RedemptionEntryPromotionTier } from '../models/RedemptionEntryPromotionTier';
import { RedemptionEntryPromotionTierAction } from '../models/RedemptionEntryPromotionTierAction';
import { RedemptionEntryPromotionTierCampaign } from '../models/RedemptionEntryPromotionTierCampaign';
import { RedemptionEntryPromotionTierSummary } from '../models/RedemptionEntryPromotionTierSummary';
import { RedemptionEntryPromotionTierSummaryOrders } from '../models/RedemptionEntryPromotionTierSummaryOrders';
import { RedemptionEntryPromotionTierSummaryRedemptions } from '../models/RedemptionEntryPromotionTierSummaryRedemptions';
import { RedemptionEntryRelatedRedemptions } from '../models/RedemptionEntryRelatedRedemptions';
import { RedemptionEntryRelatedRedemptionsRedemptionsItem } from '../models/RedemptionEntryRelatedRedemptionsRedemptionsItem';
import { RedemptionEntryRelatedRedemptionsRollbacksItem } from '../models/RedemptionEntryRelatedRedemptionsRollbacksItem';
import { RedemptionEntrySession } from '../models/RedemptionEntrySession';
import { RedemptionEntryVoucher } from '../models/RedemptionEntryVoucher';
import { RedemptionEntryVoucherGift } from '../models/RedemptionEntryVoucherGift';
import { RedemptionEntryVoucherLoyaltyCard } from '../models/RedemptionEntryVoucherLoyaltyCard';
import { RedemptionEntryVoucherPublish } from '../models/RedemptionEntryVoucherPublish';
import { RedemptionEntryVoucherRedemption } from '../models/RedemptionEntryVoucherRedemption';
import { RedemptionGift } from '../models/RedemptionGift';
import { RedemptionLoyaltyCard } from '../models/RedemptionLoyaltyCard';
import { RedemptionOrder } from '../models/RedemptionOrder';
import { RedemptionOrderCustomer } from '../models/RedemptionOrderCustomer';
import { RedemptionOrderItemsItem } from '../models/RedemptionOrderItemsItem';
import { RedemptionOrderReferrer } from '../models/RedemptionOrderReferrer';
import { RedemptionRelatedRedemptions } from '../models/RedemptionRelatedRedemptions';
import { RedemptionRelatedRedemptionsRedemptionsItem } from '../models/RedemptionRelatedRedemptionsRedemptionsItem';
import { RedemptionRelatedRedemptionsRollbacksItem } from '../models/RedemptionRelatedRedemptionsRollbacksItem';
import { RedemptionRewardResult } from '../models/RedemptionRewardResult';
import { RedemptionRewardResultParameters } from '../models/RedemptionRewardResultParameters';
import { RedemptionRewardResultParametersCampaign } from '../models/RedemptionRewardResultParametersCampaign';
import { RedemptionRewardResultParametersCoin } from '../models/RedemptionRewardResultParametersCoin';
import { RedemptionRewardResultParametersProduct } from '../models/RedemptionRewardResultParametersProduct';
import { RedemptionRollback } from '../models/RedemptionRollback';
import { RedemptionRollbackChannel } from '../models/RedemptionRollbackChannel';
import { RedemptionRollbackGift } from '../models/RedemptionRollbackGift';
import { RedemptionRollbackLoyaltyCard } from '../models/RedemptionRollbackLoyaltyCard';
import { RedemptionRollbackOrder } from '../models/RedemptionRollbackOrder';
import { RedemptionSession } from '../models/RedemptionSession';
import { RedemptionVoucher } from '../models/RedemptionVoucher';
import { RedemptionVoucherGift } from '../models/RedemptionVoucherGift';
import { RedemptionVoucherLoyaltyCard } from '../models/RedemptionVoucherLoyaltyCard';
import { RedemptionVoucherPublish } from '../models/RedemptionVoucherPublish';
import { RedemptionVoucherRedemption } from '../models/RedemptionVoucherRedemption';
import { RedemptionsGetResponseBody } from '../models/RedemptionsGetResponseBody';
import { RedemptionsGetResponseBodyChannel } from '../models/RedemptionsGetResponseBodyChannel';
import { RedemptionsGetResponseBodyCustomer } from '../models/RedemptionsGetResponseBodyCustomer';
import { RedemptionsGetResponseBodyGift } from '../models/RedemptionsGetResponseBodyGift';
import { RedemptionsGetResponseBodyLoyaltyCard } from '../models/RedemptionsGetResponseBodyLoyaltyCard';
import { RedemptionsGetResponseBodyOrder } from '../models/RedemptionsGetResponseBodyOrder';
import { RedemptionsGetResponseBodyOrderCustomer } from '../models/RedemptionsGetResponseBodyOrderCustomer';
import { RedemptionsGetResponseBodyOrderItemsItem } from '../models/RedemptionsGetResponseBodyOrderItemsItem';
import { RedemptionsGetResponseBodyOrderItemsItemProduct } from '../models/RedemptionsGetResponseBodyOrderItemsItemProduct';
import { RedemptionsGetResponseBodyOrderItemsItemSku } from '../models/RedemptionsGetResponseBodyOrderItemsItemSku';
import { RedemptionsGetResponseBodyOrderReferrer } from '../models/RedemptionsGetResponseBodyOrderReferrer';
import { RedemptionsGetResponseBodyPromotionTier } from '../models/RedemptionsGetResponseBodyPromotionTier';
import { RedemptionsGetResponseBodyPromotionTierAction } from '../models/RedemptionsGetResponseBodyPromotionTierAction';
import { RedemptionsGetResponseBodyPromotionTierCampaign } from '../models/RedemptionsGetResponseBodyPromotionTierCampaign';
import { RedemptionsGetResponseBodyPromotionTierSummary } from '../models/RedemptionsGetResponseBodyPromotionTierSummary';
import { RedemptionsGetResponseBodyPromotionTierSummaryOrders } from '../models/RedemptionsGetResponseBodyPromotionTierSummaryOrders';
import { RedemptionsGetResponseBodyPromotionTierSummaryRedemptions } from '../models/RedemptionsGetResponseBodyPromotionTierSummaryRedemptions';
import { RedemptionsGetResponseBodyRelatedRedemptions } from '../models/RedemptionsGetResponseBodyRelatedRedemptions';
import { RedemptionsGetResponseBodyRelatedRedemptionsRedemptionsItem } from '../models/RedemptionsGetResponseBodyRelatedRedemptionsRedemptionsItem';
import { RedemptionsGetResponseBodyRelatedRedemptionsRollbacksItem } from '../models/RedemptionsGetResponseBodyRelatedRedemptionsRollbacksItem';
import { RedemptionsGetResponseBodySession } from '../models/RedemptionsGetResponseBodySession';
import { RedemptionsGetResponseBodyVoucher } from '../models/RedemptionsGetResponseBodyVoucher';
import { RedemptionsGetResponseBodyVoucherGift } from '../models/RedemptionsGetResponseBodyVoucherGift';
import { RedemptionsGetResponseBodyVoucherLoyaltyCard } from '../models/RedemptionsGetResponseBodyVoucherLoyaltyCard';
import { RedemptionsGetResponseBodyVoucherPublish } from '../models/RedemptionsGetResponseBodyVoucherPublish';
import { RedemptionsGetResponseBodyVoucherRedemption } from '../models/RedemptionsGetResponseBodyVoucherRedemption';
import { RedemptionsListResponseBody } from '../models/RedemptionsListResponseBody';
import { RedemptionsListResponseBodyRedemptionsItem } from '../models/RedemptionsListResponseBodyRedemptionsItem';
import { RedemptionsListResponseBodyRedemptionsItemChannel } from '../models/RedemptionsListResponseBodyRedemptionsItemChannel';
import { RedemptionsListResponseBodyRedemptionsItemCustomer } from '../models/RedemptionsListResponseBodyRedemptionsItemCustomer';
import { RedemptionsListResponseBodyRedemptionsItemGift } from '../models/RedemptionsListResponseBodyRedemptionsItemGift';
import { RedemptionsListResponseBodyRedemptionsItemLoyaltyCard } from '../models/RedemptionsListResponseBodyRedemptionsItemLoyaltyCard';
import { RedemptionsListResponseBodyRedemptionsItemOrder } from '../models/RedemptionsListResponseBodyRedemptionsItemOrder';
import { RedemptionsListResponseBodyRedemptionsItemOrderCustomer } from '../models/RedemptionsListResponseBodyRedemptionsItemOrderCustomer';
import { RedemptionsListResponseBodyRedemptionsItemOrderItemsItem } from '../models/RedemptionsListResponseBodyRedemptionsItemOrderItemsItem';
import { RedemptionsListResponseBodyRedemptionsItemOrderItemsItemProduct } from '../models/RedemptionsListResponseBodyRedemptionsItemOrderItemsItemProduct';
import { RedemptionsListResponseBodyRedemptionsItemOrderItemsItemSku } from '../models/RedemptionsListResponseBodyRedemptionsItemOrderItemsItemSku';
import { RedemptionsListResponseBodyRedemptionsItemOrderReferrer } from '../models/RedemptionsListResponseBodyRedemptionsItemOrderReferrer';
import { RedemptionsListResponseBodyRedemptionsItemPromotionTier } from '../models/RedemptionsListResponseBodyRedemptionsItemPromotionTier';
import { RedemptionsListResponseBodyRedemptionsItemPromotionTierAction } from '../models/RedemptionsListResponseBodyRedemptionsItemPromotionTierAction';
import { RedemptionsListResponseBodyRedemptionsItemPromotionTierCampaign } from '../models/RedemptionsListResponseBodyRedemptionsItemPromotionTierCampaign';
import { RedemptionsListResponseBodyRedemptionsItemPromotionTierSummary } from '../models/RedemptionsListResponseBodyRedemptionsItemPromotionTierSummary';
import { RedemptionsListResponseBodyRedemptionsItemPromotionTierSummaryOrders } from '../models/RedemptionsListResponseBodyRedemptionsItemPromotionTierSummaryOrders';
import { RedemptionsListResponseBodyRedemptionsItemPromotionTierSummaryRedemptions } from '../models/RedemptionsListResponseBodyRedemptionsItemPromotionTierSummaryRedemptions';
import { RedemptionsListResponseBodyRedemptionsItemRelatedRedemptions } from '../models/RedemptionsListResponseBodyRedemptionsItemRelatedRedemptions';
import { RedemptionsListResponseBodyRedemptionsItemRelatedRedemptionsRedemptionsItem } from '../models/RedemptionsListResponseBodyRedemptionsItemRelatedRedemptionsRedemptionsItem';
import { RedemptionsListResponseBodyRedemptionsItemRelatedRedemptionsRollbacksItem } from '../models/RedemptionsListResponseBodyRedemptionsItemRelatedRedemptionsRollbacksItem';
import { RedemptionsListResponseBodyRedemptionsItemSession } from '../models/RedemptionsListResponseBodyRedemptionsItemSession';
import { RedemptionsListResponseBodyRedemptionsItemVoucher } from '../models/RedemptionsListResponseBodyRedemptionsItemVoucher';
import { RedemptionsListResponseBodyRedemptionsItemVoucherGift } from '../models/RedemptionsListResponseBodyRedemptionsItemVoucherGift';
import { RedemptionsListResponseBodyRedemptionsItemVoucherLoyaltyCard } from '../models/RedemptionsListResponseBodyRedemptionsItemVoucherLoyaltyCard';
import { RedemptionsListResponseBodyRedemptionsItemVoucherPublish } from '../models/RedemptionsListResponseBodyRedemptionsItemVoucherPublish';
import { RedemptionsListResponseBodyRedemptionsItemVoucherRedemption } from '../models/RedemptionsListResponseBodyRedemptionsItemVoucherRedemption';
import { RedemptionsRedeemRequestBody } from '../models/RedemptionsRedeemRequestBody';
import { RedemptionsRedeemRequestBodyOptions } from '../models/RedemptionsRedeemRequestBodyOptions';
import { RedemptionsRedeemRequestBodyRedeemablesItem } from '../models/RedemptionsRedeemRequestBodyRedeemablesItem';
import { RedemptionsRedeemRequestBodyRedeemablesItemGift } from '../models/RedemptionsRedeemRequestBodyRedeemablesItemGift';
import { RedemptionsRedeemRequestBodyRedeemablesItemReward } from '../models/RedemptionsRedeemRequestBodyRedeemablesItemReward';
import { RedemptionsRedeemResponseBody } from '../models/RedemptionsRedeemResponseBody';
import { RedemptionsRedeemResponseBodyOrder } from '../models/RedemptionsRedeemResponseBodyOrder';
import { RedemptionsRedeemResponseBodyOrderItemsItem } from '../models/RedemptionsRedeemResponseBodyOrderItemsItem';
import { RedemptionsRollbackCreateRequestBody } from '../models/RedemptionsRollbackCreateRequestBody';
import { RedemptionsRollbackCreateResponseBody } from '../models/RedemptionsRollbackCreateResponseBody';
import { RedemptionsRollbackCreateResponseBodyChannel } from '../models/RedemptionsRollbackCreateResponseBodyChannel';
import { RedemptionsRollbackCreateResponseBodyGift } from '../models/RedemptionsRollbackCreateResponseBodyGift';
import { RedemptionsRollbackCreateResponseBodyLoyaltyCard } from '../models/RedemptionsRollbackCreateResponseBodyLoyaltyCard';
import { RedemptionsRollbackCreateResponseBodyOrder } from '../models/RedemptionsRollbackCreateResponseBodyOrder';
import { RedemptionsRollbacksCreateRequestBody } from '../models/RedemptionsRollbacksCreateRequestBody';
import { RedemptionsRollbacksCreateResponseBody } from '../models/RedemptionsRollbacksCreateResponseBody';
import { RedemptionsRollbacksCreateResponseBodyOrder } from '../models/RedemptionsRollbacksCreateResponseBodyOrder';
import { ReferralProgram } from '../models/ReferralProgram';
import { ReferralProgramCustomEvent } from '../models/ReferralProgramCustomEvent';
import { ReferralProgramRefereeReward } from '../models/ReferralProgramRefereeReward';
import { ReferralProgramRefereeRewardRelatedObjectParent } from '../models/ReferralProgramRefereeRewardRelatedObjectParent';
import { ReferralsMembersHoldersCreateInBulkRequestBody } from '../models/ReferralsMembersHoldersCreateInBulkRequestBody';
import { ReferralsMembersHoldersCreateInBulkResponseBody } from '../models/ReferralsMembersHoldersCreateInBulkResponseBody';
import { ReferralsMembersHoldersListResponseBody } from '../models/ReferralsMembersHoldersListResponseBody';
import { Referrer } from '../models/Referrer';
import { ReferrerAddress } from '../models/ReferrerAddress';
import { ReferrerId } from '../models/ReferrerId';
import { ResourceTypes } from '../models/ResourceTypes';
import { Reward } from '../models/Reward';
import { RewardAssignment } from '../models/RewardAssignment';
import { RewardAssignmentParameters } from '../models/RewardAssignmentParameters';
import { RewardAssignmentParametersLoyalty } from '../models/RewardAssignmentParametersLoyalty';
import { RewardAttributes } from '../models/RewardAttributes';
import { RewardType } from '../models/RewardType';
import { RewardTypeCampaign } from '../models/RewardTypeCampaign';
import { RewardTypeCoin } from '../models/RewardTypeCoin';
import { RewardTypeProduct } from '../models/RewardTypeProduct';
import { RewardsAssignmentsCreateRequestBody } from '../models/RewardsAssignmentsCreateRequestBody';
import { RewardsAssignmentsCreateRequestBodyParameters } from '../models/RewardsAssignmentsCreateRequestBodyParameters';
import { RewardsAssignmentsCreateRequestBodyParametersLoyalty } from '../models/RewardsAssignmentsCreateRequestBodyParametersLoyalty';
import { RewardsAssignmentsCreateResponseBody } from '../models/RewardsAssignmentsCreateResponseBody';
import { RewardsAssignmentsCreateResponseBodyParameters } from '../models/RewardsAssignmentsCreateResponseBodyParameters';
import { RewardsAssignmentsCreateResponseBodyParametersLoyalty } from '../models/RewardsAssignmentsCreateResponseBodyParametersLoyalty';
import { RewardsAssignmentsGetResponseBody } from '../models/RewardsAssignmentsGetResponseBody';
import { RewardsAssignmentsGetResponseBodyParameters } from '../models/RewardsAssignmentsGetResponseBodyParameters';
import { RewardsAssignmentsGetResponseBodyParametersLoyalty } from '../models/RewardsAssignmentsGetResponseBodyParametersLoyalty';
import { RewardsAssignmentsListResponseBody } from '../models/RewardsAssignmentsListResponseBody';
import { RewardsAssignmentsUpdateRequestBody } from '../models/RewardsAssignmentsUpdateRequestBody';
import { RewardsAssignmentsUpdateRequestBodyParameters } from '../models/RewardsAssignmentsUpdateRequestBodyParameters';
import { RewardsAssignmentsUpdateRequestBodyParametersLoyalty } from '../models/RewardsAssignmentsUpdateRequestBodyParametersLoyalty';
import { RewardsAssignmentsUpdateResponseBody } from '../models/RewardsAssignmentsUpdateResponseBody';
import { RewardsAssignmentsUpdateResponseBodyParameters } from '../models/RewardsAssignmentsUpdateResponseBodyParameters';
import { RewardsAssignmentsUpdateResponseBodyParametersLoyalty } from '../models/RewardsAssignmentsUpdateResponseBodyParametersLoyalty';
import { RewardsCreateRequestBody } from '../models/RewardsCreateRequestBody';
import { RewardsCreateRequestBodyAttributes } from '../models/RewardsCreateRequestBodyAttributes';
import { RewardsCreateRequestBodyParameters } from '../models/RewardsCreateRequestBodyParameters';
import { RewardsCreateRequestBodyParametersCampaign } from '../models/RewardsCreateRequestBodyParametersCampaign';
import { RewardsCreateRequestBodyParametersCoin } from '../models/RewardsCreateRequestBodyParametersCoin';
import { RewardsCreateRequestBodyParametersProduct } from '../models/RewardsCreateRequestBodyParametersProduct';
import { RewardsCreateResponseBody } from '../models/RewardsCreateResponseBody';
import { RewardsCreateResponseBodyAttributes } from '../models/RewardsCreateResponseBodyAttributes';
import { RewardsListResponseBody } from '../models/RewardsListResponseBody';
import { RewardsUpdateRequestBody } from '../models/RewardsUpdateRequestBody';
import { RewardsUpdateRequestBodyAttributes } from '../models/RewardsUpdateRequestBodyAttributes';
import { RewardsUpdateRequestBodyParameters } from '../models/RewardsUpdateRequestBodyParameters';
import { RewardsUpdateRequestBodyParametersCampaign } from '../models/RewardsUpdateRequestBodyParametersCampaign';
import { RewardsUpdateRequestBodyParametersCoin } from '../models/RewardsUpdateRequestBodyParametersCoin';
import { RewardsUpdateRequestBodyParametersProduct } from '../models/RewardsUpdateRequestBodyParametersProduct';
import { RewardsUpdateResponseBody } from '../models/RewardsUpdateResponseBody';
import { RewardsUpdateResponseBodyAttributes } from '../models/RewardsUpdateResponseBodyAttributes';
import { SegmentsCreateRequestBody } from '../models/SegmentsCreateRequestBody';
import { SegmentsCreateResponseBody } from '../models/SegmentsCreateResponseBody';
import { SegmentsGetResponseBody } from '../models/SegmentsGetResponseBody';
import { Session } from '../models/Session';
import { SimpleCampaign } from '../models/SimpleCampaign';
import { SimpleCampaignVoucher } from '../models/SimpleCampaignVoucher';
import { SimpleCampaignVoucherRedemption } from '../models/SimpleCampaignVoucherRedemption';
import { SimpleCustomer } from '../models/SimpleCustomer';
import { SimpleCustomerRequiredObjectType } from '../models/SimpleCustomerRequiredObjectType';
import { SimpleEvent } from '../models/SimpleEvent';
import { SimpleLoyaltyCard } from '../models/SimpleLoyaltyCard';
import { SimpleOrder } from '../models/SimpleOrder';
import { SimpleOrderItem } from '../models/SimpleOrderItem';
import { SimpleProduct } from '../models/SimpleProduct';
import { SimpleProductDiscountUnit } from '../models/SimpleProductDiscountUnit';
import { SimplePromotionStack } from '../models/SimplePromotionStack';
import { SimplePromotionStackCampaign } from '../models/SimplePromotionStackCampaign';
import { SimplePromotionStackTiers } from '../models/SimplePromotionStackTiers';
import { SimplePromotionTier } from '../models/SimplePromotionTier';
import { SimplePromotionTierCampaign } from '../models/SimplePromotionTierCampaign';
import { SimpleRedemption } from '../models/SimpleRedemption';
import { SimpleRedemptionChannel } from '../models/SimpleRedemptionChannel';
import { SimpleRedemptionRewardResult } from '../models/SimpleRedemptionRewardResult';
import { SimpleReferralTier } from '../models/SimpleReferralTier';
import { SimpleSegment } from '../models/SimpleSegment';
import { SimpleSku } from '../models/SimpleSku';
import { SimpleSkuDiscountUnit } from '../models/SimpleSkuDiscountUnit';
import { SimpleVoucher } from '../models/SimpleVoucher';
import { SimpleVoucherRedemption } from '../models/SimpleVoucherRedemption';
import { Sku } from '../models/Sku';
import { SkusGetResponseBody } from '../models/SkusGetResponseBody';
import { SkusImportCsvCreateResponseBody } from '../models/SkusImportCsvCreateResponseBody';
import { SkusListForProduct } from '../models/SkusListForProduct';
import { StackingRules } from '../models/StackingRules';
import { TemplatesCampaignsCampaignSetupCreateRequestBody } from '../models/TemplatesCampaignsCampaignSetupCreateRequestBody';
import { TemplatesCampaignsCampaignSetupCreateRequestBodyVoucher } from '../models/TemplatesCampaignsCampaignSetupCreateRequestBodyVoucher';
import { TemplatesCampaignsCampaignSetupCreateRequestBodyVoucherRedemption } from '../models/TemplatesCampaignsCampaignSetupCreateRequestBodyVoucherRedemption';
import { TemplatesCampaignsCampaignSetupCreateResponseBody } from '../models/TemplatesCampaignsCampaignSetupCreateResponseBody';
import { TemplatesCampaignsCampaignSetupCreateResponseBodyCreatedResourcesItem } from '../models/TemplatesCampaignsCampaignSetupCreateResponseBodyCreatedResourcesItem';
import { TemplatesCampaignsCreateRequestBody } from '../models/TemplatesCampaignsCreateRequestBody';
import { TemplatesCampaignsCreateTemplateResponseBody } from '../models/TemplatesCampaignsCreateTemplateResponseBody';
import { TemplatesCampaignsGetResponseBody } from '../models/TemplatesCampaignsGetResponseBody';
import { TemplatesCampaignsListResponseBody } from '../models/TemplatesCampaignsListResponseBody';
import { TemplatesCampaignsTierSetupCreateRequestBody } from '../models/TemplatesCampaignsTierSetupCreateRequestBody';
import { TemplatesCampaignsTierSetupCreateResponseBody } from '../models/TemplatesCampaignsTierSetupCreateResponseBody';
import { TemplatesCampaignsTierSetupCreateResponseBodyCreatedResourcesItem } from '../models/TemplatesCampaignsTierSetupCreateResponseBodyCreatedResourcesItem';
import { TemplatesCampaignsUpdateRequestBody } from '../models/TemplatesCampaignsUpdateRequestBody';
import { TemplatesCampaignsUpdateResponseBody } from '../models/TemplatesCampaignsUpdateResponseBody';
import { TrashBinItem } from '../models/TrashBinItem';
import { TrashBinListResponseBody } from '../models/TrashBinListResponseBody';
import { UsageNotifications } from '../models/UsageNotifications';
import { User } from '../models/User';
import { ValidationRule } from '../models/ValidationRule';
import { ValidationRuleApplicableTo } from '../models/ValidationRuleApplicableTo';
import { ValidationRuleAssignment } from '../models/ValidationRuleAssignment';
import { ValidationRuleAssignmentsList } from '../models/ValidationRuleAssignmentsList';
import { ValidationRuleError } from '../models/ValidationRuleError';
import { ValidationRulesAssignmentsCreateRequestBody } from '../models/ValidationRulesAssignmentsCreateRequestBody';
import { ValidationRulesAssignmentsCreateResponseBody } from '../models/ValidationRulesAssignmentsCreateResponseBody';
import { ValidationRulesAssignmentsList } from '../models/ValidationRulesAssignmentsList';
import { ValidationRulesAssignmentsListResponseBody } from '../models/ValidationRulesAssignmentsListResponseBody';
import { ValidationRulesCreateRequestBody } from '../models/ValidationRulesCreateRequestBody';
import { ValidationRulesCreateRequestBodyApplicableTo } from '../models/ValidationRulesCreateRequestBodyApplicableTo';
import { ValidationRulesCreateRequestBodyError } from '../models/ValidationRulesCreateRequestBodyError';
import { ValidationRulesCreateResponseBody } from '../models/ValidationRulesCreateResponseBody';
import { ValidationRulesCreateResponseBodyApplicableTo } from '../models/ValidationRulesCreateResponseBodyApplicableTo';
import { ValidationRulesCreateResponseBodyError } from '../models/ValidationRulesCreateResponseBodyError';
import { ValidationRulesGetResponseBody } from '../models/ValidationRulesGetResponseBody';
import { ValidationRulesGetResponseBodyApplicableTo } from '../models/ValidationRulesGetResponseBodyApplicableTo';
import { ValidationRulesGetResponseBodyError } from '../models/ValidationRulesGetResponseBodyError';
import { ValidationRulesListResponseBody } from '../models/ValidationRulesListResponseBody';
import { ValidationRulesUpdateRequestBody } from '../models/ValidationRulesUpdateRequestBody';
import { ValidationRulesUpdateRequestBodyApplicableTo } from '../models/ValidationRulesUpdateRequestBodyApplicableTo';
import { ValidationRulesUpdateRequestBodyError } from '../models/ValidationRulesUpdateRequestBodyError';
import { ValidationRulesUpdateResponseBody } from '../models/ValidationRulesUpdateResponseBody';
import { ValidationRulesUpdateResponseBodyApplicableTo } from '../models/ValidationRulesUpdateResponseBodyApplicableTo';
import { ValidationRulesUpdateResponseBodyError } from '../models/ValidationRulesUpdateResponseBodyError';
import { ValidationsRedeemableInapplicable } from '../models/ValidationsRedeemableInapplicable';
import { ValidationsRedeemableInapplicableResult } from '../models/ValidationsRedeemableInapplicableResult';
import { ValidationsRedeemableInapplicableResultDetails } from '../models/ValidationsRedeemableInapplicableResultDetails';
import { ValidationsRedeemableSkipped } from '../models/ValidationsRedeemableSkipped';
import { ValidationsRedeemableSkippedResult } from '../models/ValidationsRedeemableSkippedResult';
import { ValidationsRedeemableSkippedResultDetails } from '../models/ValidationsRedeemableSkippedResultDetails';
import { ValidationsValidateRequestBody } from '../models/ValidationsValidateRequestBody';
import { ValidationsValidateRequestBodyOptions } from '../models/ValidationsValidateRequestBodyOptions';
import { ValidationsValidateRequestBodyRedeemablesItem } from '../models/ValidationsValidateRequestBodyRedeemablesItem';
import { ValidationsValidateRequestBodyRedeemablesItemGift } from '../models/ValidationsValidateRequestBodyRedeemablesItemGift';
import { ValidationsValidateRequestBodyRedeemablesItemReward } from '../models/ValidationsValidateRequestBodyRedeemablesItemReward';
import { ValidationsValidateResponseBody } from '../models/ValidationsValidateResponseBody';
import { ValidationsValidateResponseBodyOrder } from '../models/ValidationsValidateResponseBodyOrder';
import { ValidationsValidateResponseBodyOrderItemsItem } from '../models/ValidationsValidateResponseBodyOrderItemsItem';
import { ValidationsValidateResponseBodyRedeemablesItem } from '../models/ValidationsValidateResponseBodyRedeemablesItem';
import { ValidationsValidateResponseBodyRedeemablesItemOrder } from '../models/ValidationsValidateResponseBodyRedeemablesItemOrder';
import { ValidationsValidateResponseBodyRedeemablesItemOrderCustomer } from '../models/ValidationsValidateResponseBodyRedeemablesItemOrderCustomer';
import { ValidationsValidateResponseBodyRedeemablesItemOrderReferrer } from '../models/ValidationsValidateResponseBodyRedeemablesItemOrderReferrer';
import { ValidationsValidateResponseBodyRedeemablesItemResult } from '../models/ValidationsValidateResponseBodyRedeemablesItemResult';
import { ValidationsValidateResponseBodyRedeemablesItemResultDetails } from '../models/ValidationsValidateResponseBodyRedeemablesItemResultDetails';
import { ValidationsValidateResponseBodyRedeemablesItemResultDiscount } from '../models/ValidationsValidateResponseBodyRedeemablesItemResultDiscount';
import { ValidationsValidateResponseBodyRedeemablesItemResultDiscountProduct } from '../models/ValidationsValidateResponseBodyRedeemablesItemResultDiscountProduct';
import { ValidationsValidateResponseBodyRedeemablesItemResultGift } from '../models/ValidationsValidateResponseBodyRedeemablesItemResultGift';
import { ValidationsValidateResponseBodyRedeemablesItemResultLoyaltyCard } from '../models/ValidationsValidateResponseBodyRedeemablesItemResultLoyaltyCard';
import { ValidityHours } from '../models/ValidityHours';
import { ValidityHoursDailyItem } from '../models/ValidityHoursDailyItem';
import { ValidityTimeframe } from '../models/ValidityTimeframe';
import { Voucher } from '../models/Voucher';
import { VoucherAssets } from '../models/VoucherAssets';
import { VoucherAssetsBarcode } from '../models/VoucherAssetsBarcode';
import { VoucherAssetsQr } from '../models/VoucherAssetsQr';
import { VoucherBalance } from '../models/VoucherBalance';
import { VoucherBalanceRelatedObject } from '../models/VoucherBalanceRelatedObject';
import { VoucherGift } from '../models/VoucherGift';
import { VoucherLoyaltyCard } from '../models/VoucherLoyaltyCard';
import { VoucherPublish } from '../models/VoucherPublish';
import { VoucherRedemption } from '../models/VoucherRedemption';
import { VoucherTransaction } from '../models/VoucherTransaction';
import { VoucherTransactionDetails } from '../models/VoucherTransactionDetails';
import { VoucherTransactionDetailsCustomEvent } from '../models/VoucherTransactionDetailsCustomEvent';
import { VoucherTransactionDetailsEarningRule } from '../models/VoucherTransactionDetailsEarningRule';
import { VoucherTransactionDetailsEarningRuleSource } from '../models/VoucherTransactionDetailsEarningRuleSource';
import { VoucherTransactionDetailsEvent } from '../models/VoucherTransactionDetailsEvent';
import { VoucherTransactionDetailsEventSchema } from '../models/VoucherTransactionDetailsEventSchema';
import { VoucherTransactionDetailsHolderLoyaltyTier } from '../models/VoucherTransactionDetailsHolderLoyaltyTier';
import { VoucherTransactionDetailsLoyaltyTier } from '../models/VoucherTransactionDetailsLoyaltyTier';
import { VoucherTransactionDetailsOrder } from '../models/VoucherTransactionDetailsOrder';
import { VoucherTransactionDetailsRedemption } from '../models/VoucherTransactionDetailsRedemption';
import { VoucherTransactionDetailsReward } from '../models/VoucherTransactionDetailsReward';
import { VoucherTransactionDetailsRollback } from '../models/VoucherTransactionDetailsRollback';
import { VoucherTransactionDetailsSegment } from '../models/VoucherTransactionDetailsSegment';
import { VoucherTransactionsExportFilterConditions } from '../models/VoucherTransactionsExportFilterConditions';
import { VoucherTransactionsExportFilterConditionsVoucherId } from '../models/VoucherTransactionsExportFilterConditionsVoucherId';
import { VoucherTransactionsExportFilterConditionsVoucherIdConditions } from '../models/VoucherTransactionsExportFilterConditionsVoucherIdConditions';
import { VoucherTransactionsExportParameters } from '../models/VoucherTransactionsExportParameters';
import { VoucherTransactionsFilters } from '../models/VoucherTransactionsFilters';
import { VoucherWithCategories } from '../models/VoucherWithCategories';
import { VoucherWithCategoriesGift } from '../models/VoucherWithCategoriesGift';
import { VoucherWithCategoriesLoyaltyCard } from '../models/VoucherWithCategoriesLoyaltyCard';
import { VoucherWithCategoriesPublish } from '../models/VoucherWithCategoriesPublish';
import { VoucherWithCategoriesRedemption } from '../models/VoucherWithCategoriesRedemption';
import { VouchersBalanceUpdateRequestBody } from '../models/VouchersBalanceUpdateRequestBody';
import { VouchersBalanceUpdateResponseBody } from '../models/VouchersBalanceUpdateResponseBody';
import { VouchersBalanceUpdateResponseBodyRelatedObject } from '../models/VouchersBalanceUpdateResponseBodyRelatedObject';
import { VouchersCreateRequestBody } from '../models/VouchersCreateRequestBody';
import { VouchersCreateRequestBodyRedemption } from '../models/VouchersCreateRequestBodyRedemption';
import { VouchersCreateResponseBody } from '../models/VouchersCreateResponseBody';
import { VouchersCreateResponseBodyGift } from '../models/VouchersCreateResponseBodyGift';
import { VouchersCreateResponseBodyLoyaltyCard } from '../models/VouchersCreateResponseBodyLoyaltyCard';
import { VouchersCreateResponseBodyPublish } from '../models/VouchersCreateResponseBodyPublish';
import { VouchersCreateResponseBodyRedemption } from '../models/VouchersCreateResponseBodyRedemption';
import { VouchersCreateWithSpecificCodeRequestBody } from '../models/VouchersCreateWithSpecificCodeRequestBody';
import { VouchersCreateWithSpecificCodeRequestBodyRedemption } from '../models/VouchersCreateWithSpecificCodeRequestBodyRedemption';
import { VouchersDisableResponseBody } from '../models/VouchersDisableResponseBody';
import { VouchersDisableResponseBodyGift } from '../models/VouchersDisableResponseBodyGift';
import { VouchersDisableResponseBodyLoyaltyCard } from '../models/VouchersDisableResponseBodyLoyaltyCard';
import { VouchersDisableResponseBodyPublish } from '../models/VouchersDisableResponseBodyPublish';
import { VouchersDisableResponseBodyRedemption } from '../models/VouchersDisableResponseBodyRedemption';
import { VouchersEnableResponseBody } from '../models/VouchersEnableResponseBody';
import { VouchersEnableResponseBodyGift } from '../models/VouchersEnableResponseBodyGift';
import { VouchersEnableResponseBodyLoyaltyCard } from '../models/VouchersEnableResponseBodyLoyaltyCard';
import { VouchersEnableResponseBodyPublish } from '../models/VouchersEnableResponseBodyPublish';
import { VouchersEnableResponseBodyRedemption } from '../models/VouchersEnableResponseBodyRedemption';
import { VouchersGetResponseBody } from '../models/VouchersGetResponseBody';
import { VouchersGetResponseBodyGift } from '../models/VouchersGetResponseBodyGift';
import { VouchersGetResponseBodyLoyaltyCard } from '../models/VouchersGetResponseBodyLoyaltyCard';
import { VouchersGetResponseBodyPublish } from '../models/VouchersGetResponseBodyPublish';
import { VouchersGetResponseBodyRedemption } from '../models/VouchersGetResponseBodyRedemption';
import { VouchersImportCreateItemRequestBody } from '../models/VouchersImportCreateItemRequestBody';
import { VouchersImportCreateItemRequestBodyRedemption } from '../models/VouchersImportCreateItemRequestBodyRedemption';
import { VouchersImportCreateResponseBody } from '../models/VouchersImportCreateResponseBody';
import { VouchersImportCsvCreateResponseBody } from '../models/VouchersImportCsvCreateResponseBody';
import { VouchersListResponseBody } from '../models/VouchersListResponseBody';
import { VouchersMetadataUpdateInBulkRequestBody } from '../models/VouchersMetadataUpdateInBulkRequestBody';
import { VouchersMetadataUpdateInBulkResponseBody } from '../models/VouchersMetadataUpdateInBulkResponseBody';
import { VouchersRedemptionGetResponseBody } from '../models/VouchersRedemptionGetResponseBody';
import { VouchersTransactionsExportCreateRequestBody } from '../models/VouchersTransactionsExportCreateRequestBody';
import { VouchersTransactionsExportCreateResponseBody } from '../models/VouchersTransactionsExportCreateResponseBody';
import { VouchersTransactionsExportCreateResponseBodyResult } from '../models/VouchersTransactionsExportCreateResponseBodyResult';
import { VouchersTransactionsListResponseBody } from '../models/VouchersTransactionsListResponseBody';
import { VouchersUpdateInBulkItemRequestBody } from '../models/VouchersUpdateInBulkItemRequestBody';
import { VouchersUpdateInBulkResponseBody } from '../models/VouchersUpdateInBulkResponseBody';
import { VouchersUpdateRequestBody } from '../models/VouchersUpdateRequestBody';
import { VouchersUpdateResponseBody } from '../models/VouchersUpdateResponseBody';
import { VouchersUpdateResponseBodyGift } from '../models/VouchersUpdateResponseBodyGift';
import { VouchersUpdateResponseBodyLoyaltyCard } from '../models/VouchersUpdateResponseBodyLoyaltyCard';
import { VouchersUpdateResponseBodyPublish } from '../models/VouchersUpdateResponseBodyPublish';
import { VouchersUpdateResponseBodyRedemption } from '../models/VouchersUpdateResponseBodyRedemption';
import { ObservableAsyncActionsApi } from './ObservableAPI';

import { AsyncActionsApiRequestFactory, AsyncActionsApiResponseProcessor} from "../apis/AsyncActionsApi";
export class PromiseAsyncActionsApi {
    private api: ObservableAsyncActionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AsyncActionsApiRequestFactory,
        responseProcessor?: AsyncActionsApiResponseProcessor
    ) {
        this.api = new ObservableAsyncActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check the result of a scheduled asynchronous operation.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       
     * Get Async Action
     * @param asyncActionId Unique ID of the asynchronous operation.
     */
    public getAsyncActionWithHttpInfo(asyncActionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AsyncActionGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getAsyncActionWithHttpInfo(asyncActionId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Check the result of a scheduled asynchronous operation.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       
     * Get Async Action
     * @param asyncActionId Unique ID of the asynchronous operation.
     */
    public getAsyncAction(asyncActionId: string, _options?: PromiseConfigurationOptions): Promise<AsyncActionGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getAsyncAction(asyncActionId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Track asynchronous operations scheduled in your project.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       
     * List Async Actions
     * @param [limit] Limit the number of asynchronous actions that the API returns in the response.
     * @param [endDate] Limits results to actions scheduled before the end_date. The date format needs to be consistent with ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). 
     */
    public listAsyncActionsWithHttpInfo(limit?: number, endDate?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AsyncActionsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listAsyncActionsWithHttpInfo(limit, endDate, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Track asynchronous operations scheduled in your project.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       
     * List Async Actions
     * @param [limit] Limit the number of asynchronous actions that the API returns in the response.
     * @param [endDate] Limits results to actions scheduled before the end_date. The date format needs to be consistent with ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). 
     */
    public listAsyncActions(limit?: number, endDate?: Date, _options?: PromiseConfigurationOptions): Promise<AsyncActionsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listAsyncActions(limit, endDate, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableBinApi } from './ObservableAPI';

import { BinApiRequestFactory, BinApiResponseProcessor} from "../apis/BinApi";
export class PromiseBinApi {
    private api: ObservableBinApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BinApiRequestFactory,
        responseProcessor?: BinApiResponseProcessor
    ) {
        this.api = new ObservableBinApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes permanently a bin entry with a given ID.The following resources can be moved to the bin and permanently deleted: - campaigns - vouchers - products - SKUs To use this endpoint and delete a given resource type, you must have the following permissions: - vouchers.delete to delete a voucher, - campaigns.delete to delete a campaign, - products.delete to delete a product or SKU.
     * Delete Bin Entry
     * @param binEntryId Provide the unique identifier of the bin entry.
     */
    public deleteBinEntryWithHttpInfo(binEntryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteBinEntryWithHttpInfo(binEntryId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes permanently a bin entry with a given ID.The following resources can be moved to the bin and permanently deleted: - campaigns - vouchers - products - SKUs To use this endpoint and delete a given resource type, you must have the following permissions: - vouchers.delete to delete a voucher, - campaigns.delete to delete a campaign, - products.delete to delete a product or SKU.
     * Delete Bin Entry
     * @param binEntryId Provide the unique identifier of the bin entry.
     */
    public deleteBinEntry(binEntryId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteBinEntry(binEntryId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a list of resources moved to the bin. The following resources can be moved to the bin: - campaigns - vouchers - products - SKUs To use this endpoint, you must have the following permissions: - vouchers.read - campaigns.read - products.read
     * List Bin Entries
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Orders the bin entries according to the bin entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     * @param [filters] Filters for listing bin entries.
     */
    public listBinEntriesWithHttpInfo(limit?: number, order?: ParameterOrderListBin, startingAfterId?: string, filters?: ParameterFiltersListBin, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TrashBinListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listBinEntriesWithHttpInfo(limit, order, startingAfterId, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a list of resources moved to the bin. The following resources can be moved to the bin: - campaigns - vouchers - products - SKUs To use this endpoint, you must have the following permissions: - vouchers.read - campaigns.read - products.read
     * List Bin Entries
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Orders the bin entries according to the bin entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     * @param [filters] Filters for listing bin entries.
     */
    public listBinEntries(limit?: number, order?: ParameterOrderListBin, startingAfterId?: string, filters?: ParameterFiltersListBin, _options?: PromiseConfigurationOptions): Promise<TrashBinListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listBinEntries(limit, order, startingAfterId, filters, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableCampaignsApi } from './ObservableAPI';

import { CampaignsApiRequestFactory, CampaignsApiResponseProcessor} from "../apis/CampaignsApi";
export class PromiseCampaignsApi {
    private api: ObservableCampaignsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CampaignsApiRequestFactory,
        responseProcessor?: CampaignsApiResponseProcessor
    ) {
        this.api = new ObservableCampaignsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This method gives a possibility to add a new voucher to an existing campaign. The voucher definition will be inherited from the definition kept in the campaign profile. However, you are able to overwrite a few properties inherited from the campaign.
     * Add Voucher with Specific Code to Campaign
     * @param campaignId The campaign ID or name of the campaign to which voucher will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param code A custom **code** that identifies the voucher.
     * @param [campaignsVouchersCreateRequestBody] Specify the voucher parameters that you would like to overwrite.
     */
    public addVoucherWithSpecificCodeToCampaignWithHttpInfo(campaignId: string, code: string, campaignsVouchersCreateRequestBody?: CampaignsVouchersCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsVouchersCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.addVoucherWithSpecificCodeToCampaignWithHttpInfo(campaignId, code, campaignsVouchersCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method gives a possibility to add a new voucher to an existing campaign. The voucher definition will be inherited from the definition kept in the campaign profile. However, you are able to overwrite a few properties inherited from the campaign.
     * Add Voucher with Specific Code to Campaign
     * @param campaignId The campaign ID or name of the campaign to which voucher will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param code A custom **code** that identifies the voucher.
     * @param [campaignsVouchersCreateRequestBody] Specify the voucher parameters that you would like to overwrite.
     */
    public addVoucherWithSpecificCodeToCampaign(campaignId: string, code: string, campaignsVouchersCreateRequestBody?: CampaignsVouchersCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<CampaignsVouchersCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.addVoucherWithSpecificCodeToCampaign(campaignId, code, campaignsVouchersCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method gives the possibility to push new vouchers to an existing campaign. New vouchers will inherit properties from the campaign profile. However, it is possible to overwrite some of them in the request body. If you provide an optional code_config parameter with a voucher code configuration, then it will be used to generate new voucher codes. Otherwise, the voucher code configuration from the campaign will be used. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Add Vouchers to Campaign
     * @param campaignId The campaign ID or name of the campaign to which voucher(s) will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [vouchersCount] Number of vouchers that should be added.
     * @param [campaignsVouchersCreateInBulkRequestBody] Specify the voucher parameters that you would like to overwrite.
     */
    public addVouchersToCampaignWithHttpInfo(campaignId: string, vouchersCount?: number, campaignsVouchersCreateInBulkRequestBody?: CampaignsVouchersCreateInBulkRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsVouchersCreateCombinedResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.addVouchersToCampaignWithHttpInfo(campaignId, vouchersCount, campaignsVouchersCreateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method gives the possibility to push new vouchers to an existing campaign. New vouchers will inherit properties from the campaign profile. However, it is possible to overwrite some of them in the request body. If you provide an optional code_config parameter with a voucher code configuration, then it will be used to generate new voucher codes. Otherwise, the voucher code configuration from the campaign will be used. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Add Vouchers to Campaign
     * @param campaignId The campaign ID or name of the campaign to which voucher(s) will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [vouchersCount] Number of vouchers that should be added.
     * @param [campaignsVouchersCreateInBulkRequestBody] Specify the voucher parameters that you would like to overwrite.
     */
    public addVouchersToCampaign(campaignId: string, vouchersCount?: number, campaignsVouchersCreateInBulkRequestBody?: CampaignsVouchersCreateInBulkRequestBody, _options?: PromiseConfigurationOptions): Promise<CampaignsVouchersCreateCombinedResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.addVouchersToCampaign(campaignId, vouchersCount, campaignsVouchersCreateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Method to create a batch of vouchers aggregated in one campaign. You can choose a variety of voucher types and define a unique pattern for generating codes.    📘 Global uniqueness  All campaign codes are unique across the whole project. Voucherify will not allow you to generate 2 campaigns with the same coupon code.    🚧 Code generation status  This is an asynchronous action; you cant read or modify a newly created campaign until the code generation is completed. See the creation_status field in the [campaign object](/api-reference/campaigns/campaign-object) description. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, you cannot create a standalone discount or gift voucher campaign with the type: STANDALONE through the API. Voucherify developers work on adding that feature. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Create Campaign
     * @param [campaignsCreateRequestBody] Specify the details of the campaign that you would like to create.
     */
    public createCampaignWithHttpInfo(campaignsCreateRequestBody?: CampaignsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createCampaignWithHttpInfo(campaignsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Method to create a batch of vouchers aggregated in one campaign. You can choose a variety of voucher types and define a unique pattern for generating codes.    📘 Global uniqueness  All campaign codes are unique across the whole project. Voucherify will not allow you to generate 2 campaigns with the same coupon code.    🚧 Code generation status  This is an asynchronous action; you cant read or modify a newly created campaign until the code generation is completed. See the creation_status field in the [campaign object](/api-reference/campaigns/campaign-object) description. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, you cannot create a standalone discount or gift voucher campaign with the type: STANDALONE through the API. Voucherify developers work on adding that feature. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Create Campaign
     * @param [campaignsCreateRequestBody] Specify the details of the campaign that you would like to create.
     */
    public createCampaign(campaignsCreateRequestBody?: CampaignsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<CampaignsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createCampaign(campaignsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes a campaign and all related vouchers. This action cannot be undone. Also, this method immediately removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the campaign and all related vouchers will be moved to [the bin](/api-reference/bin/list-bin-entries). This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Delete Campaign
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [force] If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the campaign and related vouchers will be moved to the bin. Going forward, the user will be able to create the next campaign with exactly the same name.
     */
    public deleteCampaignWithHttpInfo(campaignId: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsDeleteResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteCampaignWithHttpInfo(campaignId, force, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes a campaign and all related vouchers. This action cannot be undone. Also, this method immediately removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the campaign and all related vouchers will be moved to [the bin](/api-reference/bin/list-bin-entries). This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Delete Campaign
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [force] If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the campaign and related vouchers will be moved to the bin. Going forward, the user will be able to create the next campaign with exactly the same name.
     */
    public deleteCampaign(campaignId: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<CampaignsDeleteResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteCampaign(campaignId, force, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **inactive**. The vouchers in this campaign can no longer be redeemed.
     * Disable Campaign
     * @param campaignId The campaign ID or name of the campaign being disabled. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     */
    public disableCampaignWithHttpInfo(campaignId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.disableCampaignWithHttpInfo(campaignId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **inactive**. The vouchers in this campaign can no longer be redeemed.
     * Disable Campaign
     * @param campaignId The campaign ID or name of the campaign being disabled. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     */
    public disableCampaign(campaignId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.disableCampaign(campaignId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **active**. The vouchers in this campaign can be redeemed - only if the redemption occurs after the start date of the campaign and voucher and the voucher and campaign are not expired.
     * Enable Campaign
     * @param campaignId The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
     */
    public enableCampaignWithHttpInfo(campaignId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.enableCampaignWithHttpInfo(campaignId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **active**. The vouchers in this campaign can be redeemed - only if the redemption occurs after the start date of the campaign and voucher and the voucher and campaign are not expired.
     * Enable Campaign
     * @param campaignId The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
     */
    public enableCampaign(campaignId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.enableCampaign(campaignId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Export transactions is an asynchronous process that generates a CSV file with the data about credit movements on all gift cards or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Loyalty Campaign Transactions  For loyalty campaigns, this method works in the same way the [POST Export Loyalty Campaign Transactions](/api-reference/loyalties/export-loyalty-campaign-transactions) does.
     * Export Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [campaignsTransactionsExportCreateRequestBody] Specify the parameters for the transaction export.
     */
    public exportCampaignTransactionsWithHttpInfo(campaignId: string, campaignsTransactionsExportCreateRequestBody?: CampaignsTransactionsExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsTransactionsExportCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.exportCampaignTransactionsWithHttpInfo(campaignId, campaignsTransactionsExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Export transactions is an asynchronous process that generates a CSV file with the data about credit movements on all gift cards or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Loyalty Campaign Transactions  For loyalty campaigns, this method works in the same way the [POST Export Loyalty Campaign Transactions](/api-reference/loyalties/export-loyalty-campaign-transactions) does.
     * Export Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [campaignsTransactionsExportCreateRequestBody] Specify the parameters for the transaction export.
     */
    public exportCampaignTransactions(campaignId: string, campaignsTransactionsExportCreateRequestBody?: CampaignsTransactionsExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<CampaignsTransactionsExportCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.exportCampaignTransactions(campaignId, campaignsTransactionsExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the campaign with the given campaign ID or campaign name.
     * Get Campaign
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     */
    public getCampaignWithHttpInfo(campaignId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getCampaignWithHttpInfo(campaignId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the campaign with the given campaign ID or campaign name.
     * Get Campaign
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     */
    public getCampaign(campaignId: string, _options?: PromiseConfigurationOptions): Promise<CampaignsGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getCampaign(campaignId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns data for campaign analytics, covering validations, redemptions, publications, and other details specific to a given campaign type. Use start_date and end_date to narrow down the data to specific periods. 🚧 Campaigns created before v20250602 version This endpoint returns analytics data for campaigns that were created after the [v20250602 version](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20250602) was released on 17 June 2025. Older campaigns return empty data.
     * Get Campaign Summary
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [startDate] Timestamp representing the date which results must begin on. Represented in ISO 8601 format.
     * @param [endDate] Timestamp representing the date which results must end on. Represented in ISO 8601 format.
     */
    public getCampaignSummaryWithHttpInfo(campaignId: string, startDate?: string, endDate?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsSummaryGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getCampaignSummaryWithHttpInfo(campaignId, startDate, endDate, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns data for campaign analytics, covering validations, redemptions, publications, and other details specific to a given campaign type. Use start_date and end_date to narrow down the data to specific periods. 🚧 Campaigns created before v20250602 version This endpoint returns analytics data for campaigns that were created after the [v20250602 version](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20250602) was released on 17 June 2025. Older campaigns return empty data.
     * Get Campaign Summary
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [startDate] Timestamp representing the date which results must begin on. Represented in ISO 8601 format.
     * @param [endDate] Timestamp representing the date which results must end on. Represented in ISO 8601 format.
     */
    public getCampaignSummary(campaignId: string, startDate?: string, endDate?: string, _options?: PromiseConfigurationOptions): Promise<CampaignsSummaryGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getCampaignSummary(campaignId, startDate, endDate, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Imports vouchers to an **existing** campaign. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Vouchers to Campaign
     * @param campaignId The ID of an existing campaign to which youre importing the codes. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [campaignsImportVoucherItem] Discount type, expiration date and the remaining attributes will be taken from the [Campaign](/api-reference/campaigns/get-campaign) settings.
     */
    public importVouchersToCampaignWithHttpInfo(campaignId: string, campaignsImportVoucherItem?: Array<CampaignsImportVoucherItem>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsImportCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importVouchersToCampaignWithHttpInfo(campaignId, campaignsImportVoucherItem, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Imports vouchers to an **existing** campaign. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Vouchers to Campaign
     * @param campaignId The ID of an existing campaign to which youre importing the codes. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [campaignsImportVoucherItem] Discount type, expiration date and the remaining attributes will be taken from the [Campaign](/api-reference/campaigns/get-campaign) settings.
     */
    public importVouchersToCampaign(campaignId: string, campaignsImportVoucherItem?: Array<CampaignsImportVoucherItem>, _options?: PromiseConfigurationOptions): Promise<CampaignsImportCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importVouchersToCampaign(campaignId, campaignsImportVoucherItem, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Imports vouchers to an **existing** campaign.   The CSV file has to include headers in the first line.  This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Vouchers to Campaign by CSV
     * @param campaignId The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
     * @param [file] File path.
     */
    public importVouchersToCampaignUsingCsvWithHttpInfo(campaignId: string, file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsImportCsvCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importVouchersToCampaignUsingCsvWithHttpInfo(campaignId, file, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Imports vouchers to an **existing** campaign.   The CSV file has to include headers in the first line.  This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Vouchers to Campaign by CSV
     * @param campaignId The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
     * @param [file] File path.
     */
    public importVouchersToCampaignUsingCsv(campaignId: string, file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<CampaignsImportCsvCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importVouchersToCampaignUsingCsv(campaignId, file, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves all transactions for the campaign with the given campaign ID or campaign name. The id filter denotes the unique transaction identifier.  🚧  The endpoint works only for gift card and loyalty campaigns.
     * List Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     * @param [filters] Filters for listing responses.
     */
    public listCampaignTransactionsWithHttpInfo(campaignId: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, filters?: ParametersFiltersListCampaignTransactions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsTransactionsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCampaignTransactionsWithHttpInfo(campaignId, limit, order, startingAfterId, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves all transactions for the campaign with the given campaign ID or campaign name. The id filter denotes the unique transaction identifier.  🚧  The endpoint works only for gift card and loyalty campaigns.
     * List Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     * @param [filters] Filters for listing responses.
     */
    public listCampaignTransactions(campaignId: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, filters?: ParametersFiltersListCampaignTransactions, _options?: PromiseConfigurationOptions): Promise<CampaignsTransactionsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCampaignTransactions(campaignId, limit, order, startingAfterId, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a list of campaigns in a project.  The campaigns are returned sorted by creation date, with the most recent campaigns appearing first.   When you get a list of campaigns, you can optionally specify query parameters to customize the amount of campaigns returned per call using limit, which page of campaigns to return using page, sort the campaigns using the order query parameter and filter the results by the campaign_type. This method will return an error when trying to return a limit of more than 100 campaigns.
     * List Campaigns
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [campaignType] This attribute allows filtering by campaign type.
     * @param [expand] Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores.
     * @param [campaignStatus] Sorts the results by the status of the campaign.
     * @param [isReferralCode] Sorts the results that are or are not referral campaigns.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [filters] Filters the results by various campaign properties.
     * @param [accessSettings] Filter by areas and stores IDs to return campaigns that are assigned to areas, stores, and all stores in an area.
     */
    public listCampaignsWithHttpInfo(limit?: number, page?: number, campaignType?: ParameterCampaignType, expand?: ParameterExpandListCampaigns, campaignStatus?: ParameterCampaignStatusListCampaigns, isReferralCode?: boolean, order?: ParameterOrderListCampaigns, filters?: ParameterFiltersListCampaigns, accessSettings?: ParameterCampaignsAccessSetttings, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCampaignsWithHttpInfo(limit, page, campaignType, expand, campaignStatus, isReferralCode, order, filters, accessSettings, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a list of campaigns in a project.  The campaigns are returned sorted by creation date, with the most recent campaigns appearing first.   When you get a list of campaigns, you can optionally specify query parameters to customize the amount of campaigns returned per call using limit, which page of campaigns to return using page, sort the campaigns using the order query parameter and filter the results by the campaign_type. This method will return an error when trying to return a limit of more than 100 campaigns.
     * List Campaigns
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [campaignType] This attribute allows filtering by campaign type.
     * @param [expand] Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores.
     * @param [campaignStatus] Sorts the results by the status of the campaign.
     * @param [isReferralCode] Sorts the results that are or are not referral campaigns.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [filters] Filters the results by various campaign properties.
     * @param [accessSettings] Filter by areas and stores IDs to return campaigns that are assigned to areas, stores, and all stores in an area.
     */
    public listCampaigns(limit?: number, page?: number, campaignType?: ParameterCampaignType, expand?: ParameterExpandListCampaigns, campaignStatus?: ParameterCampaignStatusListCampaigns, isReferralCode?: boolean, order?: ParameterOrderListCampaigns, filters?: ParameterFiltersListCampaigns, accessSettings?: ParameterCampaignsAccessSetttings, _options?: PromiseConfigurationOptions): Promise<CampaignsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCampaigns(limit, page, campaignType, expand, campaignStatus, isReferralCode, order, filters, accessSettings, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the specified campaign by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.  Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped.     🚧 Vouchers will be affected  This method will update vouchers aggregated in the campaign. It will affect all vouchers that are not published or redeemed yet.
     * Update Campaign
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [campaignsUpdateRequestBody] Specify the campaign parameters to be updated.
     */
    public updateCampaignWithHttpInfo(campaignId: string, campaignsUpdateRequestBody?: CampaignsUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCampaignWithHttpInfo(campaignId, campaignsUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the specified campaign by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.  Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped.     🚧 Vouchers will be affected  This method will update vouchers aggregated in the campaign. It will affect all vouchers that are not published or redeemed yet.
     * Update Campaign
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [campaignsUpdateRequestBody] Specify the campaign parameters to be updated.
     */
    public updateCampaign(campaignId: string, campaignsUpdateRequestBody?: CampaignsUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<CampaignsUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCampaign(campaignId, campaignsUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableCategoriesApi } from './ObservableAPI';

import { CategoriesApiRequestFactory, CategoriesApiResponseProcessor} from "../apis/CategoriesApi";
export class PromiseCategoriesApi {
    private api: ObservableCategoriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoriesApiRequestFactory,
        responseProcessor?: CategoriesApiResponseProcessor
    ) {
        this.api = new ObservableCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create category with a specific name and hierarchy.
     * Create Category
     * @param [categoriesCreateRequestBody] Specify the details of the category that you would like to create.
     */
    public createCategoryWithHttpInfo(categoriesCreateRequestBody?: CategoriesCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CategoriesCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createCategoryWithHttpInfo(categoriesCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Create category with a specific name and hierarchy.
     * Create Category
     * @param [categoriesCreateRequestBody] Specify the details of the category that you would like to create.
     */
    public createCategory(categoriesCreateRequestBody?: CategoriesCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<CategoriesCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createCategory(categoriesCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Delete a category by the category ID.
     * Delete Category
     * @param categoryId Unique category ID assigned by Voucherify.
     */
    public deleteCategoryWithHttpInfo(categoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteCategoryWithHttpInfo(categoryId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Delete a category by the category ID.
     * Delete Category
     * @param categoryId Unique category ID assigned by Voucherify.
     */
    public deleteCategory(categoryId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteCategory(categoryId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a category by the category ID.
     * Get Category
     * @param categoryId Unique category ID assigned by Voucherify.
     */
    public getCategoryWithHttpInfo(categoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CategoriesGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getCategoryWithHttpInfo(categoryId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a category by the category ID.
     * Get Category
     * @param categoryId Unique category ID assigned by Voucherify.
     */
    public getCategory(categoryId: string, _options?: PromiseConfigurationOptions): Promise<CategoriesGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getCategory(categoryId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * List all categories.
     * List Categories
     */
    public listCategoriesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<CategoriesListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCategoriesWithHttpInfo(observableOptions);
        return apiResult.toPromise();
    }

    /**
     * List all categories.
     * List Categories
     */
    public listCategories(_options?: PromiseConfigurationOptions): Promise<CategoriesListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCategories(observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Update a category using the category ID.
     * Update Category
     * @param categoryId Unique category ID assigned by Voucherify.
     * @param [categoriesUpdateRequestBody] Specify the details of the category that you would like to update.
     */
    public updateCategoryWithHttpInfo(categoryId: string, categoriesUpdateRequestBody?: CategoriesUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CategoriesUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCategoryWithHttpInfo(categoryId, categoriesUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Update a category using the category ID.
     * Update Category
     * @param categoryId Unique category ID assigned by Voucherify.
     * @param [categoriesUpdateRequestBody] Specify the details of the category that you would like to update.
     */
    public updateCategory(categoryId: string, categoriesUpdateRequestBody?: CategoriesUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<CategoriesUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCategory(categoryId, categoriesUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableClientSideApi } from './ObservableAPI';

import { ClientSideApiRequestFactory, ClientSideApiResponseProcessor} from "../apis/ClientSideApi";
export class PromiseClientSideApi {
    private api: ObservableClientSideApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ClientSideApiRequestFactory,
        responseProcessor?: ClientSideApiResponseProcessor
    ) {
        this.api = new ObservableClientSideApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read our dedicated guide to learn about some use cases this endpoint can cover [here](/guides/checking-eligibility). # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.
     * Check Eligibility (client-side)
     * @param [clientQualificationsCheckEligibilityRequestBody] Define order and customer context.
     */
    public checkEligibilityClientSideWithHttpInfo(clientQualificationsCheckEligibilityRequestBody?: ClientQualificationsCheckEligibilityRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ClientQualificationsCheckEligibilityResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.checkEligibilityClientSideWithHttpInfo(clientQualificationsCheckEligibilityRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read our dedicated guide to learn about some use cases this endpoint can cover [here](/guides/checking-eligibility). # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.
     * Check Eligibility (client-side)
     * @param [clientQualificationsCheckEligibilityRequestBody] Define order and customer context.
     */
    public checkEligibilityClientSide(clientQualificationsCheckEligibilityRequestBody?: ClientQualificationsCheckEligibilityRequestBody, _options?: PromiseConfigurationOptions): Promise<ClientQualificationsCheckEligibilityResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.checkEligibilityClientSide(clientQualificationsCheckEligibilityRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables you to list promotion tiers.
     * List Promotion Tiers (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [isAvailable] This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listPromotionTiersClientSideWithHttpInfo(origin: string, isAvailable?: boolean, limit?: number, page?: number, order?: ParameterOrderListPromotionTiersClientSide, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ClientPromotionsTiersListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listPromotionTiersClientSideWithHttpInfo(origin, isAvailable, limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables you to list promotion tiers.
     * List Promotion Tiers (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [isAvailable] This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listPromotionTiersClientSide(origin: string, isAvailable?: boolean, limit?: number, page?: number, order?: ParameterOrderListPromotionTiersClientSide, _options?: PromiseConfigurationOptions): Promise<ClientPromotionsTiersListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listPromotionTiersClientSide(origin, isAvailable, limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications. # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:    📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).
     * Redeem Stackable Discounts (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [clientRedemptionsRedeemRequestBody]
     */
    public redeemStackedDiscountsClientSideWithHttpInfo(origin: string, clientRedemptionsRedeemRequestBody?: ClientRedemptionsRedeemRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ClientRedemptionsRedeemResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.redeemStackedDiscountsClientSideWithHttpInfo(origin, clientRedemptionsRedeemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications. # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:    📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).
     * Redeem Stackable Discounts (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [clientRedemptionsRedeemRequestBody]
     */
    public redeemStackedDiscountsClientSide(origin: string, clientRedemptionsRedeemRequestBody?: ClientRedemptionsRedeemRequestBody, _options?: PromiseConfigurationOptions): Promise<ClientRedemptionsRedeemResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.redeemStackedDiscountsClientSide(origin, clientRedemptionsRedeemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.
     * Track Custom Event (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [clientEventsCreateRequestBody] Specify the details of the custom event.
     */
    public trackCustomEventClientSideWithHttpInfo(origin: string, clientEventsCreateRequestBody?: ClientEventsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ClientEventsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.trackCustomEventClientSideWithHttpInfo(origin, clientEventsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.
     * Track Custom Event (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [clientEventsCreateRequestBody] Specify the details of the custom event.
     */
    public trackCustomEventClientSide(origin: string, clientEventsCreateRequestBody?: ClientEventsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ClientEventsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.trackCustomEventClientSide(origin, clientEventsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Verify redeemables provided in the request. This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications.
     * Validate Stackable Discounts (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [clientValidationsValidateRequestBody]
     */
    public validateStackedDiscountsClientSideWithHttpInfo(origin: string, clientValidationsValidateRequestBody?: ClientValidationsValidateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ClientValidationsValidateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.validateStackedDiscountsClientSideWithHttpInfo(origin, clientValidationsValidateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Verify redeemables provided in the request. This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications.
     * Validate Stackable Discounts (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [clientValidationsValidateRequestBody]
     */
    public validateStackedDiscountsClientSide(origin: string, clientValidationsValidateRequestBody?: ClientValidationsValidateRequestBody, _options?: PromiseConfigurationOptions): Promise<ClientValidationsValidateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.validateStackedDiscountsClientSide(origin, clientValidationsValidateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableCustomersApi } from './ObservableAPI';

import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";
export class PromiseCustomersApi {
    private api: ObservableCustomersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomersApiRequestFactory,
        responseProcessor?: CustomersApiResponseProcessor
    ) {
        this.api = new ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a customer object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the customer database, Voucherify will return a related customer object with updated fields.
     * Create Customer
     * @param [customersCreateRequestBody] Create a customer with specified parameters.
     */
    public createCustomerWithHttpInfo(customersCreateRequestBody?: CustomersCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomersCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createCustomerWithHttpInfo(customersCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a customer object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the customer database, Voucherify will return a related customer object with updated fields.
     * Create Customer
     * @param [customersCreateRequestBody] Create a customer with specified parameters.
     */
    public createCustomer(customersCreateRequestBody?: CustomersCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<CustomersCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createCustomer(customersCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * The organization user can remove consumer data permanently from the Voucherify system by using this API method. It deletes all customer data and connected resources. It makes the customer profile forgotten by Voucherify.
     * Delete Customer Permanently
     * @param customerId A Voucherify customers id or source_id.
     */
    public customerPermanentlyDeletionWithHttpInfo(customerId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomersPermanentDeletionCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.customerPermanentlyDeletionWithHttpInfo(customerId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * The organization user can remove consumer data permanently from the Voucherify system by using this API method. It deletes all customer data and connected resources. It makes the customer profile forgotten by Voucherify.
     * Delete Customer Permanently
     * @param customerId A Voucherify customers id or source_id.
     */
    public customerPermanentlyDeletion(customerId: string, _options?: PromiseConfigurationOptions): Promise<CustomersPermanentDeletionCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.customerPermanentlyDeletion(customerId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a customer.
     * Delete Customer
     * @param customerId A Voucherify customers id or source_id.
     */
    public deleteCustomerWithHttpInfo(customerId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteCustomerWithHttpInfo(customerId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a customer.
     * Delete Customer
     * @param customerId A Voucherify customers id or source_id.
     */
    public deleteCustomer(customerId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteCustomer(customerId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves details of a given customer by customers id or source_id.
     * Get Customer
     * @param customerId A Voucherify customers id or source_id.
     */
    public getCustomerWithHttpInfo(customerId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomersGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getCustomerWithHttpInfo(customerId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves details of a given customer by customers id or source_id.
     * Get Customer
     * @param customerId A Voucherify customers id or source_id.
     */
    public getCustomer(customerId: string, _options?: PromiseConfigurationOptions): Promise<CustomersGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getCustomer(customerId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This API method lets you import or update customer data. To get a proper and valid response, please send a CSV file with data separated by commas.   # Request Example # CSV File Format The CSV file has to include headers in the first line. All properties which cannot be mapped to standard customer fields will be added to the metadata object.  📘 Standard customer fields mapping  **No spaces allowed in field names**    Id, Name, Email, Phone, Birthdate, Source_id, Address_line_1, Address_line_2, Address_Postal_Code, Address_City, Address_State, Address_Country, Description, Metadata_name_1, Metadata_name_2 # Update Customers using CSV If you would like to update customers data, you can do it using the CSV file with new data. However, remember to include a source_id in your CSV file to manage the update successfully. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import and Update Customers using CSV
     * @param [file] File path.
     */
    public importCustomersUsingCsvWithHttpInfo(file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomersImportCsvCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importCustomersUsingCsvWithHttpInfo(file, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This API method lets you import or update customer data. To get a proper and valid response, please send a CSV file with data separated by commas.   # Request Example # CSV File Format The CSV file has to include headers in the first line. All properties which cannot be mapped to standard customer fields will be added to the metadata object.  📘 Standard customer fields mapping  **No spaces allowed in field names**    Id, Name, Email, Phone, Birthdate, Source_id, Address_line_1, Address_line_2, Address_Postal_Code, Address_City, Address_State, Address_Country, Description, Metadata_name_1, Metadata_name_2 # Update Customers using CSV If you would like to update customers data, you can do it using the CSV file with new data. However, remember to include a source_id in your CSV file to manage the update successfully. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import and Update Customers using CSV
     * @param [file] File path.
     */
    public importCustomersUsingCsv(file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<CustomersImportCsvCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importCustomersUsingCsv(file, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves activity details of a given customer by customers id or source_id.
     * List Customer Activity
     * @param customerId A Voucherify customers id or source ID of the customer who performed the activities.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Apply this filter to order the events according the date and time when it was created. 
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * @param [startDate] Timestamp representing the date and time which results must begin on. Represented in ISO 8601 format.
     * @param [endDate] Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     * @param [campaignId] Requests only events related to specific campaign identified by its ID.
     * @param [campaignType] Filters related customers activity for the selected campaign types. Allowed values:  DISCOUNT_COUPONS, REFERRAL_PROGRAM, GIFT_VOUCHERS, PROMOTION, LOYALTY_PROGRAM.
     * @param [category] Filters activities for actions or effects. Allowed values:  ACTION, EFFECT.
     * @param [type] Event name of the customer event.
     */
    public listCustomerActivityWithHttpInfo(customerId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, startDate?: Date, endDate?: Date, campaignId?: string, campaignType?: ParameterCampaignType, category?: ParameterActivityCategory, type?: ParameterCustomerEvent, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomersActivityListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCustomerActivityWithHttpInfo(customerId, limit, order, startingAfterId, startDate, endDate, campaignId, campaignType, category, type, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves activity details of a given customer by customers id or source_id.
     * List Customer Activity
     * @param customerId A Voucherify customers id or source ID of the customer who performed the activities.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Apply this filter to order the events according the date and time when it was created. 
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * @param [startDate] Timestamp representing the date and time which results must begin on. Represented in ISO 8601 format.
     * @param [endDate] Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     * @param [campaignId] Requests only events related to specific campaign identified by its ID.
     * @param [campaignType] Filters related customers activity for the selected campaign types. Allowed values:  DISCOUNT_COUPONS, REFERRAL_PROGRAM, GIFT_VOUCHERS, PROMOTION, LOYALTY_PROGRAM.
     * @param [category] Filters activities for actions or effects. Allowed values:  ACTION, EFFECT.
     * @param [type] Event name of the customer event.
     */
    public listCustomerActivity(customerId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, startDate?: Date, endDate?: Date, campaignId?: string, campaignType?: ParameterCampaignType, category?: ParameterActivityCategory, type?: ParameterCustomerEvent, _options?: PromiseConfigurationOptions): Promise<CustomersActivityListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCustomerActivity(customerId, limit, order, startingAfterId, startDate, endDate, campaignId, campaignType, category, type, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves all the redeemables that have been assigned to the customer. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)
     * List Customer\'s Redeemables
     * @param customerId Unique identifier of a customer represented by an internal customer ID or customer source ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * @param [filters] Filters for listing customer redeemables.
     */
    public listCustomerRedeemablesWithHttpInfo(customerId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListCustomerRedeemables, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomersRedeemablesListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCustomerRedeemablesWithHttpInfo(customerId, limit, order, startingAfterId, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves all the redeemables that have been assigned to the customer. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)
     * List Customer\'s Redeemables
     * @param customerId Unique identifier of a customer represented by an internal customer ID or customer source ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * @param [filters] Filters for listing customer redeemables.
     */
    public listCustomerRedeemables(customerId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListCustomerRedeemables, _options?: PromiseConfigurationOptions): Promise<CustomersRedeemablesListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCustomerRedeemables(customerId, limit, order, startingAfterId, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns the list of segments IDs to which the customer belongs to.   If you pass a customerId which is not stored and recognized by Voucherify as an existing customer in the system, the response will generate a list of segments that the customer would potentialy qualify for if they were to become a customer tracked in the system.
     * List Customer\'s Segments
     * @param customerId Unique identifier of a customer represented by an internal customer ID or customer source ID.
     */
    public listCustomerSegmentsWithHttpInfo(customerId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomersSegmentsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCustomerSegmentsWithHttpInfo(customerId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns the list of segments IDs to which the customer belongs to.   If you pass a customerId which is not stored and recognized by Voucherify as an existing customer in the system, the response will generate a list of segments that the customer would potentialy qualify for if they were to become a customer tracked in the system.
     * List Customer\'s Segments
     * @param customerId Unique identifier of a customer represented by an internal customer ID or customer source ID.
     */
    public listCustomerSegments(customerId: string, _options?: PromiseConfigurationOptions): Promise<CustomersSegmentsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCustomerSegments(customerId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of customers.
     * List Customers
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1, the highest value is 99.
     * @param [email] Limit the customers to the ones that have this specific email address.
     * @param [city] Limit the customers to the ones that are located in the specified city.
     * @param [name] Filter customers by the name property.
     * @param [segmentId] Filter customers by the segment id.
     * @param [createdAtBefore] Filter customers by date customer was created.
     * @param [createdAtAfter] Filter customers by date customer was created.
     * @param [updatedAtBefore] Filter customers by date customer was updated last time.
     * @param [updatedAtAfter] Filter customers by date customer was updated last time.
     * @param [order] This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfter] A cursor for pagination. This is a date-time value that defines your place in the list based on created_at property from the customer object. For instance, if you make a list request and receive 100 objects, ending with an object created at 2020-05-24T13:43:09.024Z, your subsequent call can include starting_after 2020-05-24T13:43:09.024Z in order to fetch the next page of the list.  
     */
    public listCustomersWithHttpInfo(limit?: number, page?: number, email?: string, city?: string, name?: string, segmentId?: string, createdAtBefore?: Date, createdAtAfter?: Date, updatedAtBefore?: Date, updatedAtAfter?: Date, order?: ParameterOrderListCustomers, startingAfter?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomersListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCustomersWithHttpInfo(limit, page, email, city, name, segmentId, createdAtBefore, createdAtAfter, updatedAtBefore, updatedAtAfter, order, startingAfter, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of customers.
     * List Customers
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1, the highest value is 99.
     * @param [email] Limit the customers to the ones that have this specific email address.
     * @param [city] Limit the customers to the ones that are located in the specified city.
     * @param [name] Filter customers by the name property.
     * @param [segmentId] Filter customers by the segment id.
     * @param [createdAtBefore] Filter customers by date customer was created.
     * @param [createdAtAfter] Filter customers by date customer was created.
     * @param [updatedAtBefore] Filter customers by date customer was updated last time.
     * @param [updatedAtAfter] Filter customers by date customer was updated last time.
     * @param [order] This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfter] A cursor for pagination. This is a date-time value that defines your place in the list based on created_at property from the customer object. For instance, if you make a list request and receive 100 objects, ending with an object created at 2020-05-24T13:43:09.024Z, your subsequent call can include starting_after 2020-05-24T13:43:09.024Z in order to fetch the next page of the list.  
     */
    public listCustomers(limit?: number, page?: number, email?: string, city?: string, name?: string, segmentId?: string, createdAtBefore?: Date, createdAtAfter?: Date, updatedAtBefore?: Date, updatedAtAfter?: Date, order?: ParameterOrderListCustomers, startingAfter?: Date, _options?: PromiseConfigurationOptions): Promise<CustomersListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCustomers(limit, page, email, city, name, segmentId, createdAtBefore, createdAtAfter, updatedAtBefore, updatedAtAfter, order, startingAfter, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the specified customer by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.
     * Update Customer
     * @param customerId A Voucherify customers id or source_id.
     * @param [customersUpdateRequestBody] Specify the parameters to be updated.
     */
    public updateCustomerWithHttpInfo(customerId: string, customersUpdateRequestBody?: CustomersUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomersUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCustomerWithHttpInfo(customerId, customersUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the specified customer by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.
     * Update Customer
     * @param customerId A Voucherify customers id or source_id.
     * @param [customersUpdateRequestBody] Specify the parameters to be updated.
     */
    public updateCustomer(customerId: string, customersUpdateRequestBody?: CustomersUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<CustomersUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCustomer(customerId, customersUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates customers in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a customer object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Customers in Bulk
     * @param [customersUpdateInBulkRequestBody] List the customer fields to be updated in each customer object.
     */
    public updateCustomersInBulkWithHttpInfo(customersUpdateInBulkRequestBody?: Array<CustomersUpdateInBulkRequestBody>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomersUpdateInBulkResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCustomersInBulkWithHttpInfo(customersUpdateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates customers in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a customer object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Customers in Bulk
     * @param [customersUpdateInBulkRequestBody] List the customer fields to be updated in each customer object.
     */
    public updateCustomersInBulk(customersUpdateInBulkRequestBody?: Array<CustomersUpdateInBulkRequestBody>, _options?: PromiseConfigurationOptions): Promise<CustomersUpdateInBulkResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCustomersInBulk(customersUpdateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates metadata parameters for a list of customers. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Customers\' Metadata in Bulk
     * @param [customersMetadataUpdateInBulkRequestBody] List the source_ids of the customers you would like to update with the metadata key/value pairs.
     */
    public updateCustomersMetadataInBulkWithHttpInfo(customersMetadataUpdateInBulkRequestBody?: CustomersMetadataUpdateInBulkRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomersMetadataUpdateInBulkResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCustomersMetadataInBulkWithHttpInfo(customersMetadataUpdateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates metadata parameters for a list of customers. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Customers\' Metadata in Bulk
     * @param [customersMetadataUpdateInBulkRequestBody] List the source_ids of the customers you would like to update with the metadata key/value pairs.
     */
    public updateCustomersMetadataInBulk(customersMetadataUpdateInBulkRequestBody?: CustomersMetadataUpdateInBulkRequestBody, _options?: PromiseConfigurationOptions): Promise<CustomersMetadataUpdateInBulkResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCustomersMetadataInBulk(customersMetadataUpdateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableEventsApi } from './ObservableAPI';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.
     * Track Custom Event
     * @param [eventsCreateRequestBody] Specify the details of the custom event.
     */
    public trackCustomEventWithHttpInfo(eventsCreateRequestBody?: EventsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.trackCustomEventWithHttpInfo(eventsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.
     * Track Custom Event
     * @param [eventsCreateRequestBody] Specify the details of the custom event.
     */
    public trackCustomEvent(eventsCreateRequestBody?: EventsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<EventsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.trackCustomEvent(eventsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableExportsApi } from './ObservableAPI';

import { ExportsApiRequestFactory, ExportsApiResponseProcessor} from "../apis/ExportsApi";
export class PromiseExportsApi {
    private api: ObservableExportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExportsApiRequestFactory,
        responseProcessor?: ExportsApiResponseProcessor
    ) {
        this.api = new ObservableExportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create export object. The export can be any of the following types: voucher, redemption, publication, customer, order, points_expiration, voucher_transactions, product, or sku.   # Defaults If you only specify the object type in the request body without specifying the fields, the API will return the following fields per export object:    📘 Date and time in the export API  The exported date and times are always provided in the UTC time zone. # Fetching particular data sets Using the parameters body parameter, you can narrow down which fields to export and how to filter the results. The fields are an array of strings containing the data that you would like to export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields: # Orders     # Vouchers        # Publications   # Redemptions    # Customers       # Points Expirations    # Gift Card Transactions    # Loyalty Card Transactions   
     * Create Export
     * @param [exportsCreateRequestBody] Specify the details of the export that you would like to create.
     */
    public createExportWithHttpInfo(exportsCreateRequestBody?: ExportsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExportsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createExportWithHttpInfo(exportsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Create export object. The export can be any of the following types: voucher, redemption, publication, customer, order, points_expiration, voucher_transactions, product, or sku.   # Defaults If you only specify the object type in the request body without specifying the fields, the API will return the following fields per export object:    📘 Date and time in the export API  The exported date and times are always provided in the UTC time zone. # Fetching particular data sets Using the parameters body parameter, you can narrow down which fields to export and how to filter the results. The fields are an array of strings containing the data that you would like to export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields: # Orders     # Vouchers        # Publications   # Redemptions    # Customers       # Points Expirations    # Gift Card Transactions    # Loyalty Card Transactions   
     * Create Export
     * @param [exportsCreateRequestBody] Specify the details of the export that you would like to create.
     */
    public createExport(exportsCreateRequestBody?: ExportsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ExportsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createExport(exportsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a previously created export object.
     * Delete Export
     * @param exportId Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
     */
    public deleteExportWithHttpInfo(exportId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteExportWithHttpInfo(exportId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a previously created export object.
     * Delete Export
     * @param exportId Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
     */
    public deleteExport(exportId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteExport(exportId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Download the contents of the exported CSV file.   📘 Important notes  **Base URL:**   - https://download.voucherify.io (Europe)   - https://us1.download.voucherify.io (US)   - https://as1.download.voucherify.io (Asia)   **Token:** Can be found within the result parameter of the [Get Export](/api-reference/exports/get-export) method response.
     * Download Export
     * @param exportId Unique export object ID.
     * @param [token] Token that was issued to the export, to get this token, get the export first
     */
    public downloadExportWithHttpInfo(exportId: string, token?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.downloadExportWithHttpInfo(exportId, token, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Download the contents of the exported CSV file.   📘 Important notes  **Base URL:**   - https://download.voucherify.io (Europe)   - https://us1.download.voucherify.io (US)   - https://as1.download.voucherify.io (Asia)   **Token:** Can be found within the result parameter of the [Get Export](/api-reference/exports/get-export) method response.
     * Download Export
     * @param exportId Unique export object ID.
     * @param [token] Token that was issued to the export, to get this token, get the export first
     */
    public downloadExport(exportId: string, token?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.downloadExport(exportId, token, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the URL of the downloadable file, which was generated via the [Create Export](/api-reference/exports/create-export) method.
     * Get Export
     * @param exportId Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
     */
    public getExportWithHttpInfo(exportId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExportsGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getExportWithHttpInfo(exportId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the URL of the downloadable file, which was generated via the [Create Export](/api-reference/exports/create-export) method.
     * Get Export
     * @param exportId Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
     */
    public getExport(exportId: string, _options?: PromiseConfigurationOptions): Promise<ExportsGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getExport(exportId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * List all exports. 
     * List Exports
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listExportsWithHttpInfo(limit?: number, page?: number, order?: ParameterOrderListExports, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExportsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listExportsWithHttpInfo(limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * List all exports. 
     * List Exports
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listExports(limit?: number, page?: number, order?: ParameterOrderListExports, _options?: PromiseConfigurationOptions): Promise<ExportsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listExports(limit, page, order, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableLocationsApi } from './ObservableAPI';

import { LocationsApiRequestFactory, LocationsApiResponseProcessor} from "../apis/LocationsApi";
export class PromiseLocationsApi {
    private api: ObservableLocationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationsApiRequestFactory,
        responseProcessor?: LocationsApiResponseProcessor
    ) {
        this.api = new ObservableLocationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a location object.
     * Get Location
     * @param locationId The unique location ID.
     */
    public getLocationWithHttpInfo(locationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LocationsGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getLocationWithHttpInfo(locationId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a location object.
     * Get Location
     * @param locationId The unique location ID.
     */
    public getLocation(locationId: string, _options?: PromiseConfigurationOptions): Promise<LocationsGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getLocation(locationId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of your locations.
     * List Locations
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [filters] Filter the locations using one of the available filters.
     * @param [endDate] A filter on the list based on the end date. This will filter out all locations whose end date falls before the specified date and time. A date value must be presented in the ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16).
     */
    public listLocationsWithHttpInfo(limit?: number, order?: ParameterOrderListLocations, filters?: ParameterFiltersListLocations, endDate?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LocationsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLocationsWithHttpInfo(limit, order, filters, endDate, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of your locations.
     * List Locations
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [filters] Filter the locations using one of the available filters.
     * @param [endDate] A filter on the list based on the end date. This will filter out all locations whose end date falls before the specified date and time. A date value must be presented in the ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16).
     */
    public listLocations(limit?: number, order?: ParameterOrderListLocations, filters?: ParameterFiltersListLocations, endDate?: Date, _options?: PromiseConfigurationOptions): Promise<LocationsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLocations(limit, order, filters, endDate, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableLoyaltiesApi } from './ObservableAPI';

import { LoyaltiesApiRequestFactory, LoyaltiesApiResponseProcessor} from "../apis/LoyaltiesApi";
export class PromiseLoyaltiesApi {
    private api: ObservableLoyaltiesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LoyaltiesApiRequestFactory,
        responseProcessor?: LoyaltiesApiResponseProcessor
    ) {
        this.api = new ObservableLoyaltiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Activate manually the pending points and add them to the loyalty card. The pending points are determined by the pending point ID. Once activated, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Activate Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     */
    public activateMemberPendingPointsWithHttpInfo(memberId: string, pendingPointsId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersPendingPointsActivateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.activateMemberPendingPointsWithHttpInfo(memberId, pendingPointsId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Activate manually the pending points and add them to the loyalty card. The pending points are determined by the pending point ID. Once activated, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Activate Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     */
    public activateMemberPendingPoints(memberId: string, pendingPointsId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersPendingPointsActivateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.activateMemberPendingPoints(memberId, pendingPointsId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method assigns a loyalty card to a customer. It selects a [loyalty card](/api-reference/vouchers/get-voucher) suitable for publication, adds a publish entry, and returns the published voucher.   A voucher is suitable for publication when its active and hasnt been published yet.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use **auto-update** campaign.
     * Add Member
     * @param campaignId Unique campaign ID of the loyalty program.
     * @param [loyaltiesMembersCreateRequestBody] Provide details to whom the loyalty card should be assigned.     You can choose to either specify the exact loyalty card code that you want to publish from existin (non-assigned) codes, or choose not to specify a voucher code. If you choose not to specify a code in the request paylaod, then the system will choose the next available voucher code available to be assigned to a customer.   You can also include metadata in the request payload. This metadata will be assigned to the publication object, but will not be returned in the response to this endpoint. To see of publications (assignments of particular codes to customers) and publication metadata, use the [List Publications](/api-reference/publications/list-publications) endpoint.
     */
    public addMemberWithHttpInfo(campaignId: string, loyaltiesMembersCreateRequestBody?: LoyaltiesMembersCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.addMemberWithHttpInfo(campaignId, loyaltiesMembersCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method assigns a loyalty card to a customer. It selects a [loyalty card](/api-reference/vouchers/get-voucher) suitable for publication, adds a publish entry, and returns the published voucher.   A voucher is suitable for publication when its active and hasnt been published yet.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use **auto-update** campaign.
     * Add Member
     * @param campaignId Unique campaign ID of the loyalty program.
     * @param [loyaltiesMembersCreateRequestBody] Provide details to whom the loyalty card should be assigned.     You can choose to either specify the exact loyalty card code that you want to publish from existin (non-assigned) codes, or choose not to specify a voucher code. If you choose not to specify a code in the request paylaod, then the system will choose the next available voucher code available to be assigned to a customer.   You can also include metadata in the request payload. This metadata will be assigned to the publication object, but will not be returned in the response to this endpoint. To see of publications (assignments of particular codes to customers) and publication metadata, use the [List Publications](/api-reference/publications/list-publications) endpoint.
     */
    public addMember(campaignId: string, loyaltiesMembersCreateRequestBody?: LoyaltiesMembersCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.addMember(campaignId, loyaltiesMembersCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Adjusts the pending points with a given ID. You can add or subtract the number of points. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Adjust Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     * @param [loyaltiesMembersPendingPointsBalanceRequestBody] Define the number of pending points to be added or subtracted.
     */
    public adjustMemberPendingPointsWithHttpInfo(memberId: string, pendingPointsId: string, loyaltiesMembersPendingPointsBalanceRequestBody?: LoyaltiesMembersPendingPointsBalanceRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersPendingPointsBalanceResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.adjustMemberPendingPointsWithHttpInfo(memberId, pendingPointsId, loyaltiesMembersPendingPointsBalanceRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Adjusts the pending points with a given ID. You can add or subtract the number of points. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Adjust Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     * @param [loyaltiesMembersPendingPointsBalanceRequestBody] Define the number of pending points to be added or subtracted.
     */
    public adjustMemberPendingPoints(memberId: string, pendingPointsId: string, loyaltiesMembersPendingPointsBalanceRequestBody?: LoyaltiesMembersPendingPointsBalanceRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersPendingPointsBalanceResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.adjustMemberPendingPoints(memberId, pendingPointsId, loyaltiesMembersPendingPointsBalanceRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Cancel manually the pending points for the loyalty card. The pending points are determined by the pending point ID. Once canceled, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body and it returns an empty, 204, response. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Cancel Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     */
    public cancelMemberPendingPointsWithHttpInfo(memberId: string, pendingPointsId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.cancelMemberPendingPointsWithHttpInfo(memberId, pendingPointsId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Cancel manually the pending points for the loyalty card. The pending points are determined by the pending point ID. Once canceled, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body and it returns an empty, 204, response. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Cancel Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     */
    public cancelMemberPendingPoints(memberId: string, pendingPointsId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.cancelMemberPendingPoints(memberId, pendingPointsId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Create earning rules for a loyalty campaign.  🚧 Maximum number of earning rules  You can create up to 100 earning rules per project. The limit can be customized for clients with a single-tenant setup.
     * Create Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [loyaltiesEarningRulesCreateRequestBodyItem] Customize the request body based on the type of earning rules you would like to create. The request body is an array of objects. The required minimum properties to include in the payload for each object are event and loyalty. Additionally, if you choose to add a validity_timeframe, you must include a start_date. Furthermore, an earning rule event type:   - customer.segment.entered requires a segment object - a custom event requires a custom_event object - a customer.loyalty.tier.joined, customer.loyalty.tier.left, customer.loyalty.tier.upgraded, customer.loyalty.tier.downgraded, customer.loyalty.tier.prolonged requires a loyalty_tier object
     */
    public createEarningRuleWithHttpInfo(campaignId: string, loyaltiesEarningRulesCreateRequestBodyItem?: Array<LoyaltiesEarningRulesCreateRequestBodyItem>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<LoyaltiesEarningRulesCreateResponseBody>>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createEarningRuleWithHttpInfo(campaignId, loyaltiesEarningRulesCreateRequestBodyItem, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Create earning rules for a loyalty campaign.  🚧 Maximum number of earning rules  You can create up to 100 earning rules per project. The limit can be customized for clients with a single-tenant setup.
     * Create Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [loyaltiesEarningRulesCreateRequestBodyItem] Customize the request body based on the type of earning rules you would like to create. The request body is an array of objects. The required minimum properties to include in the payload for each object are event and loyalty. Additionally, if you choose to add a validity_timeframe, you must include a start_date. Furthermore, an earning rule event type:   - customer.segment.entered requires a segment object - a custom event requires a custom_event object - a customer.loyalty.tier.joined, customer.loyalty.tier.left, customer.loyalty.tier.upgraded, customer.loyalty.tier.downgraded, customer.loyalty.tier.prolonged requires a loyalty_tier object
     */
    public createEarningRule(campaignId: string, loyaltiesEarningRulesCreateRequestBodyItem?: Array<LoyaltiesEarningRulesCreateRequestBodyItem>, _options?: PromiseConfigurationOptions): Promise<Array<LoyaltiesEarningRulesCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createEarningRule(campaignId, loyaltiesEarningRulesCreateRequestBodyItem, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates loyalty tiers for desired campaign.
     * Create loyalty tiers
     * @param campaignId Unique loyalty campaign ID or name.
     * @param [loyaltiesTiersCreateInBulkRequestBodyItem] Provide tier definitions you want to add to existing loyalty campaign.
     */
    public createInBulkLoyaltyTiersWithHttpInfo(campaignId: string, loyaltiesTiersCreateInBulkRequestBodyItem?: Array<LoyaltiesTiersCreateInBulkRequestBodyItem>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<LoyaltyTier>>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createInBulkLoyaltyTiersWithHttpInfo(campaignId, loyaltiesTiersCreateInBulkRequestBodyItem, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates loyalty tiers for desired campaign.
     * Create loyalty tiers
     * @param campaignId Unique loyalty campaign ID or name.
     * @param [loyaltiesTiersCreateInBulkRequestBodyItem] Provide tier definitions you want to add to existing loyalty campaign.
     */
    public createInBulkLoyaltyTiers(campaignId: string, loyaltiesTiersCreateInBulkRequestBodyItem?: Array<LoyaltiesTiersCreateInBulkRequestBodyItem>, _options?: PromiseConfigurationOptions): Promise<Array<LoyaltyTier>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createInBulkLoyaltyTiers(campaignId, loyaltiesTiersCreateInBulkRequestBodyItem, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a batch of [loyalty cards](/api-reference/loyalties/get-member) aggregated in a single loyalty campaign. It also allows you to define a custom codes pattern.    📘 Global uniqueness  All codes are unique across the whole project. Voucherify wont allow to generate the same codes in any of your campaigns.  🚧 Asynchronous action!  This is an asynchronous action, you cant read or modify a newly created campaign until the code generation is completed. See creation_status field in the [loyalty campaign object](/api-reference/loyalties/loyalty-campaign-object) description.
     * Create Loyalty Campaign
     * @param [loyaltiesCreateCampaignRequestBody] Specify the loyalty campaign details.
     */
    public createLoyaltyProgramWithHttpInfo(loyaltiesCreateCampaignRequestBody?: LoyaltiesCreateCampaignRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesCreateCampaignResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createLoyaltyProgramWithHttpInfo(loyaltiesCreateCampaignRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a batch of [loyalty cards](/api-reference/loyalties/get-member) aggregated in a single loyalty campaign. It also allows you to define a custom codes pattern.    📘 Global uniqueness  All codes are unique across the whole project. Voucherify wont allow to generate the same codes in any of your campaigns.  🚧 Asynchronous action!  This is an asynchronous action, you cant read or modify a newly created campaign until the code generation is completed. See creation_status field in the [loyalty campaign object](/api-reference/loyalties/loyalty-campaign-object) description.
     * Create Loyalty Campaign
     * @param [loyaltiesCreateCampaignRequestBody] Specify the loyalty campaign details.
     */
    public createLoyaltyProgram(loyaltiesCreateCampaignRequestBody?: LoyaltiesCreateCampaignRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesCreateCampaignResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createLoyaltyProgram(loyaltiesCreateCampaignRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Schedule the generation of a point expiration CSV file for a particular campaign. It can list point buckets, which can have an ACTIVE or EXPIRED status.
     * Export Loyalty Campaign Point Expiration
     * @param campaignId Unique campaign ID or name.
     * @param [loyaltiesPointsExpirationExportCreateRequestBody] Specify the data filters, types of data to return and order in which the results should be returned.
     */
    public createPointsExpirationExportWithHttpInfo(campaignId: string, loyaltiesPointsExpirationExportCreateRequestBody?: LoyaltiesPointsExpirationExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesPointsExpirationExportCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createPointsExpirationExportWithHttpInfo(campaignId, loyaltiesPointsExpirationExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Schedule the generation of a point expiration CSV file for a particular campaign. It can list point buckets, which can have an ACTIVE or EXPIRED status.
     * Export Loyalty Campaign Point Expiration
     * @param campaignId Unique campaign ID or name.
     * @param [loyaltiesPointsExpirationExportCreateRequestBody] Specify the data filters, types of data to return and order in which the results should be returned.
     */
    public createPointsExpirationExport(campaignId: string, loyaltiesPointsExpirationExportCreateRequestBody?: LoyaltiesPointsExpirationExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesPointsExpirationExportCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createPointsExpirationExport(campaignId, loyaltiesPointsExpirationExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Add rewards to a loyalty campaign.
     * Create Loyalty Campaign Reward Assignment
     * @param campaignId Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [loyaltiesRewardsCreateAssignmentItemRequestBody] Define the cost of the rewards in loyalty points.
     */
    public createRewardAssignment1WithHttpInfo(campaignId: string, loyaltiesRewardsCreateAssignmentItemRequestBody?: Array<LoyaltiesRewardsCreateAssignmentItemRequestBody>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardsCreateAssignmentResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createRewardAssignment1WithHttpInfo(campaignId, loyaltiesRewardsCreateAssignmentItemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Add rewards to a loyalty campaign.
     * Create Loyalty Campaign Reward Assignment
     * @param campaignId Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [loyaltiesRewardsCreateAssignmentItemRequestBody] Define the cost of the rewards in loyalty points.
     */
    public createRewardAssignment1(campaignId: string, loyaltiesRewardsCreateAssignmentItemRequestBody?: Array<LoyaltiesRewardsCreateAssignmentItemRequestBody>, _options?: PromiseConfigurationOptions): Promise<LoyaltiesRewardsCreateAssignmentResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createRewardAssignment1(campaignId, loyaltiesRewardsCreateAssignmentItemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes an earning rule for a specific loyalty campaign.
     * Delete Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     */
    public deleteEarningRuleWithHttpInfo(campaignId: string, earningRuleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteEarningRuleWithHttpInfo(campaignId, earningRuleId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes an earning rule for a specific loyalty campaign.
     * Delete Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     */
    public deleteEarningRule(campaignId: string, earningRuleId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteEarningRule(campaignId, earningRuleId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes a loyalty campaign and all related loyalty cards. This action cannot be undone. Also, it immediately removes any redemptions on loyalty cards. If the force parameter is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [force] If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to the bin. Going forward, the user will be able to create the next campaign with the same name.
     */
    public deleteLoyaltyProgramWithHttpInfo(campaignId: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesDeleteResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteLoyaltyProgramWithHttpInfo(campaignId, force, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes a loyalty campaign and all related loyalty cards. This action cannot be undone. Also, it immediately removes any redemptions on loyalty cards. If the force parameter is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [force] If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to the bin. Going forward, the user will be able to create the next campaign with the same name.
     */
    public deleteLoyaltyProgram(campaignId: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<LoyaltiesDeleteResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteLoyaltyProgram(campaignId, force, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a reward assignment for a particular loyalty campaign.
     * Delete Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     */
    public deleteRewardAssignment1WithHttpInfo(campaignId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteRewardAssignment1WithHttpInfo(campaignId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a reward assignment for a particular loyalty campaign.
     * Delete Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     */
    public deleteRewardAssignment1(campaignId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteRewardAssignment1(campaignId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Disable an earning rule.
     * Disable Earning Rule
     * @param campaignId Unique campaign ID or name.
     * @param earningRuleId Unique identifier of an earning rule, assigned by Voucherify.
     */
    public disableEarningRuleWithHttpInfo(campaignId: string, earningRuleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesEarningRulesDisableResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.disableEarningRuleWithHttpInfo(campaignId, earningRuleId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Disable an earning rule.
     * Disable Earning Rule
     * @param campaignId Unique campaign ID or name.
     * @param earningRuleId Unique identifier of an earning rule, assigned by Voucherify.
     */
    public disableEarningRule(campaignId: string, earningRuleId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesEarningRulesDisableResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.disableEarningRule(campaignId, earningRuleId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Enable an earning rule.
     * Enable Earning Rule
     * @param campaignId Unique campaign ID or name.
     * @param earningRuleId Unique identifier of an earning rule, assigned by Voucherify.
     */
    public enableEarningRuleWithHttpInfo(campaignId: string, earningRuleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesEarningRulesEnableResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.enableEarningRuleWithHttpInfo(campaignId, earningRuleId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Enable an earning rule.
     * Enable Earning Rule
     * @param campaignId Unique campaign ID or name.
     * @param earningRuleId Unique identifier of an earning rule, assigned by Voucherify.
     */
    public enableEarningRule(campaignId: string, earningRuleId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesEarningRulesEnableResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.enableEarningRule(campaignId, earningRuleId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Export transactions is an asynchronous process that generates a CSV file with the data about or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Campaign Transactions  This method works in the same way the [POST Export Campaign Transactions](/api-reference/campaigns/export-campaign-transactions) does, but it is limited to loyalty campaigns only. The POST Export Campaign Transactions method can also export gift card campaign transactions.
     * Export Loyalty Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [loyaltiesTransactionsExportCreateRequestBody] Specify the parameters for the transaction export.
     */
    public exportLoyaltyCampaignTransactionsWithHttpInfo(campaignId: string, loyaltiesTransactionsExportCreateRequestBody?: LoyaltiesTransactionsExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CampaignsTransactionsExportCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.exportLoyaltyCampaignTransactionsWithHttpInfo(campaignId, loyaltiesTransactionsExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Export transactions is an asynchronous process that generates a CSV file with the data about or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Campaign Transactions  This method works in the same way the [POST Export Campaign Transactions](/api-reference/campaigns/export-campaign-transactions) does, but it is limited to loyalty campaigns only. The POST Export Campaign Transactions method can also export gift card campaign transactions.
     * Export Loyalty Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [loyaltiesTransactionsExportCreateRequestBody] Specify the parameters for the transaction export.
     */
    public exportLoyaltyCampaignTransactions(campaignId: string, loyaltiesTransactionsExportCreateRequestBody?: LoyaltiesTransactionsExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<CampaignsTransactionsExportCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.exportLoyaltyCampaignTransactions(campaignId, loyaltiesTransactionsExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions
     * @param memberId A unique code identifying the loyalty card that you are looking to export transaction data for.
     * @param [loyaltiesMembersTransactionsExportCreateRequestBody] Specify the parameters and filters for the transaction export.
     */
    public exportLoyaltyCardTransactionsWithHttpInfo(memberId: string, loyaltiesMembersTransactionsExportCreateRequestBody?: LoyaltiesMembersTransactionsExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersTransactionsExportCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.exportLoyaltyCardTransactionsWithHttpInfo(memberId, loyaltiesMembersTransactionsExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions
     * @param memberId A unique code identifying the loyalty card that you are looking to export transaction data for.
     * @param [loyaltiesMembersTransactionsExportCreateRequestBody] Specify the parameters and filters for the transaction export.
     */
    public exportLoyaltyCardTransactions(memberId: string, loyaltiesMembersTransactionsExportCreateRequestBody?: LoyaltiesMembersTransactionsExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersTransactionsExportCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.exportLoyaltyCardTransactions(memberId, loyaltiesMembersTransactionsExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions with campaign ID
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to export.
     * @param memberId A unique code identifying the loyalty card that you are looking to export transaction data for.
     * @param [loyaltiesMembersTransactionsExportCreateRequestBody] Specify the parameters and filters for the transaction export.
     */
    public exportLoyaltyCardTransactions1WithHttpInfo(campaignId: string, memberId: string, loyaltiesMembersTransactionsExportCreateRequestBody?: LoyaltiesMembersTransactionsExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersTransactionsExportCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.exportLoyaltyCardTransactions1WithHttpInfo(campaignId, memberId, loyaltiesMembersTransactionsExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions with campaign ID
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to export.
     * @param memberId A unique code identifying the loyalty card that you are looking to export transaction data for.
     * @param [loyaltiesMembersTransactionsExportCreateRequestBody] Specify the parameters and filters for the transaction export.
     */
    public exportLoyaltyCardTransactions1(campaignId: string, memberId: string, loyaltiesMembersTransactionsExportCreateRequestBody?: LoyaltiesMembersTransactionsExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersTransactionsExportCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.exportLoyaltyCardTransactions1(campaignId, memberId, loyaltiesMembersTransactionsExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves an earning rule assigned to a campaign.
     * Get Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     */
    public getEarningRuleWithHttpInfo(campaignId: string, earningRuleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesEarningRulesGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getEarningRuleWithHttpInfo(campaignId, earningRuleId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves an earning rule assigned to a campaign.
     * Get Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     */
    public getEarningRule(campaignId: string, earningRuleId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesEarningRulesGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getEarningRule(campaignId, earningRuleId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a specific loyalty campaign.
     * Get Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     */
    public getLoyaltyProgramWithHttpInfo(campaignId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesGetCampaignResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getLoyaltyProgramWithHttpInfo(campaignId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a specific loyalty campaign.
     * Get Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     */
    public getLoyaltyProgram(campaignId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesGetCampaignResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getLoyaltyProgram(campaignId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a loyalty tier from a loyalty campaign by the loyalty tier ID.
     * Get Loyalty Tier
     * @param campaignId Unique loyalty campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     */
    public getLoyaltyTierWithHttpInfo(campaignId: string, loyaltyTierId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesTiersGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getLoyaltyTierWithHttpInfo(campaignId, loyaltyTierId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a loyalty tier from a loyalty campaign by the loyalty tier ID.
     * Get Loyalty Tier
     * @param campaignId Unique loyalty campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     */
    public getLoyaltyTier(campaignId: string, loyaltyTierId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesTiersGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getLoyaltyTier(campaignId, loyaltyTierId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve loyalty card with the given member ID (i.e. voucher code).      📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-member-with-campaign-id). The URL was re-designed to allow you to retrieve loyalty card details without having to provide the campaignId as a path parameter.
     * Get Member
     * @param memberId Unique loyalty card code assigned to a particular customer.
     */
    public getMemberWithHttpInfo(memberId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getMemberWithHttpInfo(memberId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve loyalty card with the given member ID (i.e. voucher code).      📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-member-with-campaign-id). The URL was re-designed to allow you to retrieve loyalty card details without having to provide the campaignId as a path parameter.
     * Get Member
     * @param memberId Unique loyalty card code assigned to a particular customer.
     */
    public getMember(memberId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getMember(memberId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the loyalty card with the given member ID (i.e. voucher code).
     * Get Member with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId Unique code that identifies the loyalty card.
     */
    public getMember1WithHttpInfo(campaignId: string, memberId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getMember1WithHttpInfo(campaignId, memberId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the loyalty card with the given member ID (i.e. voucher code).
     * Get Member with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId Unique code that identifies the loyalty card.
     */
    public getMember1(campaignId: string, memberId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getMember1(campaignId, memberId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve specific reward assignment.
     * Get Campaign Reward Assignments
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId Unique reward assignment ID.
     */
    public getRewardAssignment1WithHttpInfo(campaignId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardAssignmentsGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getRewardAssignment1WithHttpInfo(campaignId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve specific reward assignment.
     * Get Campaign Reward Assignments
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId Unique reward assignment ID.
     */
    public getRewardAssignment1(campaignId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesRewardAssignmentsGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getRewardAssignment1(campaignId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve specific reward assignment.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-campaign-reward-assignments). 
     * Get Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     */
    public getRewardAssignment2WithHttpInfo(campaignId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardsGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getRewardAssignment2WithHttpInfo(campaignId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve specific reward assignment.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-campaign-reward-assignments). 
     * Get Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     */
    public getRewardAssignment2(campaignId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesRewardsGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getRewardAssignment2(campaignId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Get reward details in the context of a loyalty campaign and reward assignment ID.
     * Get Reward Details
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId Unique reward assignment ID.
     */
    public getRewardDetailsWithHttpInfo(campaignId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardAssignmentsRewardGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getRewardDetailsWithHttpInfo(campaignId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Get reward details in the context of a loyalty campaign and reward assignment ID.
     * Get Reward Details
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId Unique reward assignment ID.
     */
    public getRewardDetails(campaignId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesRewardAssignmentsRewardGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getRewardDetails(campaignId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all pending points that are currently assigned to all loyalty cards in a campaign. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Campaign Pending Points
     * @param campaignId Unique campaign ID.
     * @param [limit] Limit the number of the pending point entries that the API returns in the response.
     * @param [order] Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public listCampaignPendingPointsWithHttpInfo(campaignId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesPendingPointsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCampaignPendingPointsWithHttpInfo(campaignId, limit, order, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all pending points that are currently assigned to all loyalty cards in a campaign. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Campaign Pending Points
     * @param campaignId Unique campaign ID.
     * @param [limit] Limit the number of the pending point entries that the API returns in the response.
     * @param [order] Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public listCampaignPendingPoints(campaignId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesPendingPointsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCampaignPendingPoints(campaignId, limit, order, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of all earning rules within a given campaign.
     * List Earning Rules
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listEarningRulesWithHttpInfo(campaignId: string, limit?: number, page?: number, order?: ParameterOrderListEarningRules, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesEarningRulesListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listEarningRulesWithHttpInfo(campaignId, limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of all earning rules within a given campaign.
     * List Earning Rules
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listEarningRules(campaignId: string, limit?: number, page?: number, order?: ParameterOrderListEarningRules, _options?: PromiseConfigurationOptions): Promise<LoyaltiesEarningRulesListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listEarningRules(campaignId, limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves all transactions for the campaign with the given campaign ID or campaign name.
     * List Loyalty Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     * @param [filters] Filters for listing responses. The id filter denotes the unique transaction identifier.
     */
    public listLoyaltyCampaignTransactionsWithHttpInfo(campaignId: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, filters?: ParametersFiltersListCampaignTransactions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesTransactionsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyCampaignTransactionsWithHttpInfo(campaignId, limit, order, startingAfterId, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves all transactions for the campaign with the given campaign ID or campaign name.
     * List Loyalty Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     * @param [filters] Filters for listing responses. The id filter denotes the unique transaction identifier.
     */
    public listLoyaltyCampaignTransactions(campaignId: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, filters?: ParametersFiltersListCampaignTransactions, _options?: PromiseConfigurationOptions): Promise<LoyaltiesTransactionsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyCampaignTransactions(campaignId, limit, order, startingAfterId, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve transaction data related to point movements for a specific loyalty card.
     * List Loyalty Card Transactions
     * @param memberId A unique code identifying the loyalty card that you are looking to retrieve transaction data for.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [filters] Filters for listing member transactions. id is the unique identifier of the transaction.
     * @param [startingAfterId] A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     */
    public listLoyaltyCardTransactionsWithHttpInfo(memberId: string, limit?: number, order?: ParameterOrderListTransactions, filters?: ParameterFiltersListMemberTransactions, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersTransactionsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyCardTransactionsWithHttpInfo(memberId, limit, order, filters, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve transaction data related to point movements for a specific loyalty card.
     * List Loyalty Card Transactions
     * @param memberId A unique code identifying the loyalty card that you are looking to retrieve transaction data for.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [filters] Filters for listing member transactions. id is the unique identifier of the transaction.
     * @param [startingAfterId] A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     */
    public listLoyaltyCardTransactions(memberId: string, limit?: number, order?: ParameterOrderListTransactions, filters?: ParameterFiltersListMemberTransactions, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersTransactionsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyCardTransactions(memberId, limit, order, filters, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve transaction data related to point movements for a specific loyalty card.
     * List Loyalty Card Transactions with campaign ID
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to return.
     * @param memberId A unique code identifying the loyalty card that you are looking to retrieve transaction data for.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [filters] Filters for listing member transactions. id is the unique identifier of the transaction.
     * @param [startingAfterId] A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     */
    public listLoyaltyCardTransactions1WithHttpInfo(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListTransactions, filters?: ParameterFiltersListMemberTransactions, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersTransactionsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyCardTransactions1WithHttpInfo(campaignId, memberId, limit, order, filters, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve transaction data related to point movements for a specific loyalty card.
     * List Loyalty Card Transactions with campaign ID
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to return.
     * @param memberId A unique code identifying the loyalty card that you are looking to retrieve transaction data for.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [filters] Filters for listing member transactions. id is the unique identifier of the transaction.
     * @param [startingAfterId] A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     */
    public listLoyaltyCardTransactions1(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListTransactions, filters?: ParameterFiltersListMemberTransactions, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersTransactionsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyCardTransactions1(campaignId, memberId, limit, order, filters, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of your loyalty campaigns.
     * List Loyalty Campaigns
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [expand] Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listLoyaltyProgramsWithHttpInfo(limit?: number, page?: number, expand?: ParameterExpandListCampaigns, order?: ParameterOrderListCampaigns, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesListCampaignsResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyProgramsWithHttpInfo(limit, page, expand, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of your loyalty campaigns.
     * List Loyalty Campaigns
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [expand] Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listLoyaltyPrograms(limit?: number, page?: number, expand?: ParameterExpandListCampaigns, order?: ParameterOrderListCampaigns, _options?: PromiseConfigurationOptions): Promise<LoyaltiesListCampaignsResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyPrograms(limit, page, expand, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve available earning rules for a given tier and the calculation method for earning points.
     * List Loyalty Tier Earning Rules
     * @param campaignId Unique campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     */
    public listLoyaltyTierEarningRulesWithHttpInfo(campaignId: string, loyaltyTierId: string, limit?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesTiersEarningRulesListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyTierEarningRulesWithHttpInfo(campaignId, loyaltyTierId, limit, page, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve available earning rules for a given tier and the calculation method for earning points.
     * List Loyalty Tier Earning Rules
     * @param campaignId Unique campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     */
    public listLoyaltyTierEarningRules(campaignId: string, loyaltyTierId: string, limit?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<LoyaltiesTiersEarningRulesListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyTierEarningRules(campaignId, loyaltyTierId, limit, page, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Get available rewards for a given tier.
     * List Loyalty Tier Rewards
     * @param campaignId Unique campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     */
    public listLoyaltyTierRewardsWithHttpInfo(campaignId: string, loyaltyTierId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesTiersRewardsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyTierRewardsWithHttpInfo(campaignId, loyaltyTierId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Get available rewards for a given tier.
     * List Loyalty Tier Rewards
     * @param campaignId Unique campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     */
    public listLoyaltyTierRewards(campaignId: string, loyaltyTierId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesTiersRewardsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyTierRewards(campaignId, loyaltyTierId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a list of loyalty tiers which were added to the loyalty program.
     * List Loyalty Tiers
     * @param campaignId Unique loyalty campaign ID or name.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listLoyaltyTiersWithHttpInfo(campaignId: string, limit?: number, order?: ParameterOrderListLoyaltyTiers, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesTiersListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyTiersWithHttpInfo(campaignId, limit, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a list of loyalty tiers which were added to the loyalty program.
     * List Loyalty Tiers
     * @param campaignId Unique loyalty campaign ID or name.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listLoyaltyTiers(campaignId: string, limit?: number, order?: ParameterOrderListLoyaltyTiers, _options?: PromiseConfigurationOptions): Promise<LoyaltiesTiersListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listLoyaltyTiers(campaignId, limit, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-activity-with-campaign-id). The URL was re-designed to allow you to get member activities without having to provide the campaignId as a path parameter. Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.
     * List Member Activity
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     */
    public listMemberActivityWithHttpInfo(memberId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMemberActivityListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMemberActivityWithHttpInfo(memberId, limit, order, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-activity-with-campaign-id). The URL was re-designed to allow you to get member activities without having to provide the campaignId as a path parameter. Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.
     * List Member Activity
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     */
    public listMemberActivity(memberId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMemberActivityListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMemberActivity(memberId, limit, order, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.
     * List Member Activity with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     */
    public listMemberActivity1WithHttpInfo(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMemberActivityListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMemberActivity1WithHttpInfo(campaignId, memberId, limit, order, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.
     * List Member Activity with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     */
    public listMemberActivity1(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMemberActivityListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMemberActivity1(campaignId, memberId, limit, order, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve member tiers using the loyalty card ID.
     * List Member\'s Loyalty Tiers
     * @param memberId Unique loyalty card assigned to a particular customer.
     */
    public listMemberLoyaltyTierWithHttpInfo(memberId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersTiersListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMemberLoyaltyTierWithHttpInfo(memberId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve member tiers using the loyalty card ID.
     * List Member\'s Loyalty Tiers
     * @param memberId Unique loyalty card assigned to a particular customer.
     */
    public listMemberLoyaltyTier(memberId: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersTiersListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMemberLoyaltyTier(memberId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-pending-points-with-campaign-id). The URL was re-designed to list member pending points without having to provide the campaignId as a path parameter. Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param [limit] Limit the number of the pending point entries that the API returns in the response.
     * @param [order] Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public listMemberPendingPointsWithHttpInfo(memberId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersPendingPointsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMemberPendingPointsWithHttpInfo(memberId, limit, order, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-pending-points-with-campaign-id). The URL was re-designed to list member pending points without having to provide the campaignId as a path parameter. Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param [limit] Limit the number of the pending point entries that the API returns in the response.
     * @param [order] Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public listMemberPendingPoints(memberId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersPendingPointsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMemberPendingPoints(memberId, limit, order, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Member Pending Points with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param [limit] Limit the number of the pending point entries that the API returns in the response.
     * @param [order] Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public listMemberPendingPoints1WithHttpInfo(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersPendingPointsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMemberPendingPoints1WithHttpInfo(campaignId, memberId, limit, order, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Member Pending Points with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param [limit] Limit the number of the pending point entries that the API returns in the response.
     * @param [order] Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public listMemberPendingPoints1(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersPendingPointsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMemberPendingPoints1(campaignId, memberId, limit, order, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the list of rewards that the given customer (identified by member_id, which is a loyalty card assigned to a particular customer) **can get in exchange for loyalty points**.   You can use the affordable_only parameter to limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card).   Please note that rewards that are disabled (i.e. set to Not Available in the Dashboard) for a given loyalty tier reward mapping will not be returned in this endpoint.
     * List Member Rewards
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [affordableOnly] Limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card). Set this flag to true to return rewards which the customer can actually afford.
     */
    public listMemberRewardsWithHttpInfo(memberId: string, affordableOnly?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersRewardsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMemberRewardsWithHttpInfo(memberId, affordableOnly, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the list of rewards that the given customer (identified by member_id, which is a loyalty card assigned to a particular customer) **can get in exchange for loyalty points**.   You can use the affordable_only parameter to limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card).   Please note that rewards that are disabled (i.e. set to Not Available in the Dashboard) for a given loyalty tier reward mapping will not be returned in this endpoint.
     * List Member Rewards
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [affordableOnly] Limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card). Set this flag to true to return rewards which the customer can actually afford.
     */
    public listMemberRewards(memberId: string, affordableOnly?: boolean, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersRewardsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMemberRewards(memberId, affordableOnly, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of your loyalty cards. The loyalty cards are sorted by creation date, with the most recent loyalty cards appearing first.
     * List Members
     * @param campaignId Unique campaign ID of the loyalty program.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [customer] A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters.
     * @param [createdAt] A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * @param [updatedAt] A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [code]
     * @param [ids]
     */
    public listMembersWithHttpInfo(campaignId: string, limit?: number, page?: number, customer?: string, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, order?: ParameterOrderVouchers, code?: string, ids?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesListMembersResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMembersWithHttpInfo(campaignId, limit, page, customer, createdAt, updatedAt, order, code, ids, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of your loyalty cards. The loyalty cards are sorted by creation date, with the most recent loyalty cards appearing first.
     * List Members
     * @param campaignId Unique campaign ID of the loyalty program.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [customer] A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters.
     * @param [createdAt] A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * @param [updatedAt] A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [code]
     * @param [ids]
     */
    public listMembers(campaignId: string, limit?: number, page?: number, customer?: string, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, order?: ParameterOrderVouchers, code?: string, ids?: Array<string>, _options?: PromiseConfigurationOptions): Promise<LoyaltiesListMembersResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMembers(campaignId, limit, page, customer, createdAt, updatedAt, order, code, ids, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve loyalty point expiration buckets for a given loyalty card. Expired point buckets are not returned in this endpoint. You can use the [Exports API](/api-reference/exports/create-export) to retrieve a list of both ACTIVE and EXPIRED point buckets.
     * List Loyalty Card Point Expiration
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param memberId Loyalty card code.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     */
    public listPointsExpirationWithHttpInfo(campaignId: string, memberId: string, limit?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersPointsExpirationListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listPointsExpirationWithHttpInfo(campaignId, memberId, limit, page, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve loyalty point expiration buckets for a given loyalty card. Expired point buckets are not returned in this endpoint. You can use the [Exports API](/api-reference/exports/create-export) to retrieve a list of both ACTIVE and EXPIRED point buckets.
     * List Loyalty Card Point Expiration
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param memberId Loyalty card code.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     */
    public listPointsExpiration(campaignId: string, memberId: string, limit?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersPointsExpirationListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listPointsExpiration(campaignId, memberId, limit, page, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns reward assignments from a given loyalty campaign.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-campaign-rewards). The URL was re-designed to be more contextual to the type of data returned in the response.
     * List Reward Assignments with campaign ID
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [assignmentId] A unique reward assignment ID.
     */
    public listRewardAssignments1WithHttpInfo(campaignId: string, limit?: number, page?: number, assignmentId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardAssignmentsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listRewardAssignments1WithHttpInfo(campaignId, limit, page, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns reward assignments from a given loyalty campaign.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-campaign-rewards). The URL was re-designed to be more contextual to the type of data returned in the response.
     * List Reward Assignments with campaign ID
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [assignmentId] A unique reward assignment ID.
     */
    public listRewardAssignments1(campaignId: string, limit?: number, page?: number, assignmentId?: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesRewardAssignmentsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listRewardAssignments1(campaignId, limit, page, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns active rewards from a given loyalty campaign.
     * List Campaign Rewards
     * @param campaignId Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [assignmentId] A unique reward assignment ID.
     */
    public listRewardAssignments2WithHttpInfo(campaignId: string, limit?: number, page?: number, assignmentId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardsListAssignmentsResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listRewardAssignments2WithHttpInfo(campaignId, limit, page, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns active rewards from a given loyalty campaign.
     * List Campaign Rewards
     * @param campaignId Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [assignmentId] A unique reward assignment ID.
     */
    public listRewardAssignments2(campaignId: string, limit?: number, page?: number, assignmentId?: string, _options?: PromiseConfigurationOptions): Promise<LoyaltiesRewardsListAssignmentsResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listRewardAssignments2(campaignId, limit, page, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     *   📘 Alternative endpoint This endpoint is an alternative to this [endpoint](/api-reference/loyalties/redeem-reward-with-campaign-id). The URL was re-designed to allow you to redeem a reward without having to provide the campaignId as a path parameter.
     * Redeem Reward
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [loyaltiesMembersRedemptionRedeemRequestBody] Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order.
     */
    public redeemRewardWithHttpInfo(memberId: string, loyaltiesMembersRedemptionRedeemRequestBody?: LoyaltiesMembersRedemptionRedeemRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersRedemptionRedeemResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.redeemRewardWithHttpInfo(memberId, loyaltiesMembersRedemptionRedeemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     *   📘 Alternative endpoint This endpoint is an alternative to this [endpoint](/api-reference/loyalties/redeem-reward-with-campaign-id). The URL was re-designed to allow you to redeem a reward without having to provide the campaignId as a path parameter.
     * Redeem Reward
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [loyaltiesMembersRedemptionRedeemRequestBody] Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order.
     */
    public redeemReward(memberId: string, loyaltiesMembersRedemptionRedeemRequestBody?: LoyaltiesMembersRedemptionRedeemRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersRedemptionRedeemResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.redeemReward(memberId, loyaltiesMembersRedemptionRedeemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Exchange points from a loyalty card for a specified reward. This API method returns an assigned award in the response. It means that if a requesting customer gets a coupon code with a discount for the next order, that discount code will be visible in response as part of the reward object definition.
     * Redeem Reward with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param [loyaltiesMembersRedemptionRedeemRequestBody] Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order.
     */
    public redeemReward1WithHttpInfo(campaignId: string, memberId: string, loyaltiesMembersRedemptionRedeemRequestBody?: LoyaltiesMembersRedemptionRedeemRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersRedemptionRedeemResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.redeemReward1WithHttpInfo(campaignId, memberId, loyaltiesMembersRedemptionRedeemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Exchange points from a loyalty card for a specified reward. This API method returns an assigned award in the response. It means that if a requesting customer gets a coupon code with a discount for the next order, that discount code will be visible in response as part of the reward object definition.
     * Redeem Reward with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param [loyaltiesMembersRedemptionRedeemRequestBody] Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order.
     */
    public redeemReward1(campaignId: string, memberId: string, loyaltiesMembersRedemptionRedeemRequestBody?: LoyaltiesMembersRedemptionRedeemRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersRedemptionRedeemResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.redeemReward1(campaignId, memberId, loyaltiesMembersRedemptionRedeemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Transfer points between different loyalty cards which have holders. Provide the campaign ID and the loyalty card ID you want the points to be transferred to as path parameters. In the request body, provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card. Transfer works only for loyalty cards that have holders, meaning the cards were published to customers. The transferred points expire according to the target program expiration rules.
     * Transfer Loyalty Points
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher to which the loyalty points will be sent (destination).
     * @param memberId A unique code identifying the loyalty card to which the user wants to transfer loyalty points (destination).
     * @param [loyaltiesTransferPoints] Provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card.
     */
    public transferPointsWithHttpInfo(campaignId: string, memberId: string, loyaltiesTransferPoints?: Array<LoyaltiesTransferPoints>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersTransfersCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.transferPointsWithHttpInfo(campaignId, memberId, loyaltiesTransferPoints, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Transfer points between different loyalty cards which have holders. Provide the campaign ID and the loyalty card ID you want the points to be transferred to as path parameters. In the request body, provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card. Transfer works only for loyalty cards that have holders, meaning the cards were published to customers. The transferred points expire according to the target program expiration rules.
     * Transfer Loyalty Points
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher to which the loyalty points will be sent (destination).
     * @param memberId A unique code identifying the loyalty card to which the user wants to transfer loyalty points (destination).
     * @param [loyaltiesTransferPoints] Provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card.
     */
    public transferPoints(campaignId: string, memberId: string, loyaltiesTransferPoints?: Array<LoyaltiesTransferPoints>, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersTransfersCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.transferPoints(campaignId, memberId, loyaltiesTransferPoints, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Update an earning rule definition.
     * Update Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     * @param [loyaltiesEarningRulesUpdateRequestBody] Specify the parameters that you would like to update for the given earning rule.
     */
    public updateEarningRuleWithHttpInfo(campaignId: string, earningRuleId: string, loyaltiesEarningRulesUpdateRequestBody?: LoyaltiesEarningRulesUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesEarningRulesUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateEarningRuleWithHttpInfo(campaignId, earningRuleId, loyaltiesEarningRulesUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Update an earning rule definition.
     * Update Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     * @param [loyaltiesEarningRulesUpdateRequestBody] Specify the parameters that you would like to update for the given earning rule.
     */
    public updateEarningRule(campaignId: string, earningRuleId: string, loyaltiesEarningRulesUpdateRequestBody?: LoyaltiesEarningRulesUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesEarningRulesUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateEarningRule(campaignId, earningRuleId, loyaltiesEarningRulesUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method gives adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/adjust-loyalty-card-balance-with-campaign-id). The URL was re-designed to allow you to add or remove loyalty card balance without having to provide the campaignId as a path parameter.
     * Adjust Loyalty Card Balance
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [loyaltiesMembersBalanceUpdateRequestBody] Specify the point adjustment along with the expiration mechanism.
     */
    public updateLoyaltyCardBalanceWithHttpInfo(memberId: string, loyaltiesMembersBalanceUpdateRequestBody?: LoyaltiesMembersBalanceUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersBalanceUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateLoyaltyCardBalanceWithHttpInfo(memberId, loyaltiesMembersBalanceUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method gives adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/adjust-loyalty-card-balance-with-campaign-id). The URL was re-designed to allow you to add or remove loyalty card balance without having to provide the campaignId as a path parameter.
     * Adjust Loyalty Card Balance
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [loyaltiesMembersBalanceUpdateRequestBody] Specify the point adjustment along with the expiration mechanism.
     */
    public updateLoyaltyCardBalance(memberId: string, loyaltiesMembersBalanceUpdateRequestBody?: LoyaltiesMembersBalanceUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersBalanceUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateLoyaltyCardBalance(memberId, loyaltiesMembersBalanceUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.
     * Adjust Loyalty Card Balance with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param [loyaltiesMembersBalanceUpdateRequestBody] Specify the point adjustment along with the expiration mechanism.
     */
    public updateLoyaltyCardBalance1WithHttpInfo(campaignId: string, memberId: string, loyaltiesMembersBalanceUpdateRequestBody?: LoyaltiesMembersBalanceUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersBalanceUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateLoyaltyCardBalance1WithHttpInfo(campaignId, memberId, loyaltiesMembersBalanceUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.
     * Adjust Loyalty Card Balance with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param [loyaltiesMembersBalanceUpdateRequestBody] Specify the point adjustment along with the expiration mechanism.
     */
    public updateLoyaltyCardBalance1(campaignId: string, memberId: string, loyaltiesMembersBalanceUpdateRequestBody?: LoyaltiesMembersBalanceUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesMembersBalanceUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateLoyaltyCardBalance1(campaignId, memberId, loyaltiesMembersBalanceUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates a loyalty program.  Fields other than those specified in the allowed request body payload wont be modified (even if provided they are silently skipped). Any parameters not provided will be left unchanged.  This method will update the [loyalty cards](/api-reference/loyalties/get-member) which have not been published or redeemed yet.
     * Update Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [loyaltiesUpdateCampaignRequestBody] Specify the new values for the parameters that you would like to update for the given loyalty campaign.
     */
    public updateLoyaltyProgramWithHttpInfo(campaignId: string, loyaltiesUpdateCampaignRequestBody?: LoyaltiesUpdateCampaignRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesUpdateCampaignResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateLoyaltyProgramWithHttpInfo(campaignId, loyaltiesUpdateCampaignRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates a loyalty program.  Fields other than those specified in the allowed request body payload wont be modified (even if provided they are silently skipped). Any parameters not provided will be left unchanged.  This method will update the [loyalty cards](/api-reference/loyalties/get-member) which have not been published or redeemed yet.
     * Update Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [loyaltiesUpdateCampaignRequestBody] Specify the new values for the parameters that you would like to update for the given loyalty campaign.
     */
    public updateLoyaltyProgram(campaignId: string, loyaltiesUpdateCampaignRequestBody?: LoyaltiesUpdateCampaignRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesUpdateCampaignResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateLoyaltyProgram(campaignId, loyaltiesUpdateCampaignRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates rewards parameters, i.e. the points cost for the specific reward.
     * Update Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     * @param [loyaltiesRewardsUpdateAssignmentRequestBody] Update the points cost for the reward assignment.
     */
    public updateRewardAssignment1WithHttpInfo(campaignId: string, assignmentId: string, loyaltiesRewardsUpdateAssignmentRequestBody?: LoyaltiesRewardsUpdateAssignmentRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardsUpdateAssignmentResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateRewardAssignment1WithHttpInfo(campaignId, assignmentId, loyaltiesRewardsUpdateAssignmentRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates rewards parameters, i.e. the points cost for the specific reward.
     * Update Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     * @param [loyaltiesRewardsUpdateAssignmentRequestBody] Update the points cost for the reward assignment.
     */
    public updateRewardAssignment1(campaignId: string, assignmentId: string, loyaltiesRewardsUpdateAssignmentRequestBody?: LoyaltiesRewardsUpdateAssignmentRequestBody, _options?: PromiseConfigurationOptions): Promise<LoyaltiesRewardsUpdateAssignmentResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateRewardAssignment1(campaignId, assignmentId, loyaltiesRewardsUpdateAssignmentRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableManagementApi } from './ObservableAPI';

import { ManagementApiRequestFactory, ManagementApiResponseProcessor} from "../apis/ManagementApi";
export class PromiseManagementApi {
    private api: ObservableManagementApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ManagementApiRequestFactory,
        responseProcessor?: ManagementApiResponseProcessor
    ) {
        this.api = new ObservableManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assigns a user to a given project. The user must be an existing user in Voucherify.  🚧 Correct Use of Data To avoid errors, use the role key with either id or login keys.
     * Assign User
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsUsersAssignRequestBody] Defines the user details.
     */
    public assignUserWithHttpInfo(projectId: string, managementProjectsUsersAssignRequestBody?: ManagementProjectsUsersAssignRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsUsersAssignResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.assignUserWithHttpInfo(projectId, managementProjectsUsersAssignRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Assigns a user to a given project. The user must be an existing user in Voucherify.  🚧 Correct Use of Data To avoid errors, use the role key with either id or login keys.
     * Assign User
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsUsersAssignRequestBody] Defines the user details.
     */
    public assignUser(projectId: string, managementProjectsUsersAssignRequestBody?: ManagementProjectsUsersAssignRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsUsersAssignResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.assignUser(projectId, managementProjectsUsersAssignRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a new brand configuration. You can have only one brand configured for a project.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.
     * Create Brand
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsBrandingCreateRequestBody] Defines a brand configuration.
     */
    public createBrandWithHttpInfo(projectId: string, managementProjectsBrandingCreateRequestBody?: ManagementProjectsBrandingCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsBrandingCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createBrandWithHttpInfo(projectId, managementProjectsBrandingCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a new brand configuration. You can have only one brand configured for a project.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.
     * Create Brand
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsBrandingCreateRequestBody] Defines a brand configuration.
     */
    public createBrand(projectId: string, managementProjectsBrandingCreateRequestBody?: ManagementProjectsBrandingCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsBrandingCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createBrand(projectId, managementProjectsBrandingCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a custom event schema. The properties object is required, but it can be empty, however. This object is for optional custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Create Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsCustomEventSchemasCreateRequestBody] Defines the custom event schema.
     */
    public createCustomEventSchemaWithHttpInfo(projectId: string, managementProjectsCustomEventSchemasCreateRequestBody?: ManagementProjectsCustomEventSchemasCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsCustomEventSchemasCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createCustomEventSchemaWithHttpInfo(projectId, managementProjectsCustomEventSchemasCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a custom event schema. The properties object is required, but it can be empty, however. This object is for optional custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Create Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsCustomEventSchemasCreateRequestBody] Defines the custom event schema.
     */
    public createCustomEventSchema(projectId: string, managementProjectsCustomEventSchemasCreateRequestBody?: ManagementProjectsCustomEventSchemasCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsCustomEventSchemasCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createCustomEventSchema(projectId, managementProjectsCustomEventSchemasCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a new metadata (custom attribute) schema for a given resource. The schema consists of a set of key-value pairs to customize Voucherify resources.  You can nest your object within a standard metadata schema, e.g. within a campaign or customer schema. However, your nested object cant include another nested object. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward Use this endpoint to define a metadata schema of a given resource for the first time. Once you configure a metadata schema for a given related_object, use the PUT [Update metadata schema](/api-reference/management/update-metadata-schema) endpoint to either update or add new metadata key-value pairs. For example, use this endpoint to define a metadata schema for related_object: campaign for the first time. If you want define a new metadata property for campaign, use the [PUT Update metadata schema](/api-reference/management/update-metadata-schema) endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Create Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsMetadataSchemasCreateRequestBody] Defines the metadata schema.
     */
    public createMetadataSchemaWithHttpInfo(projectId: string, managementProjectsMetadataSchemasCreateRequestBody?: ManagementProjectsMetadataSchemasCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsMetadataSchemasCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createMetadataSchemaWithHttpInfo(projectId, managementProjectsMetadataSchemasCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a new metadata (custom attribute) schema for a given resource. The schema consists of a set of key-value pairs to customize Voucherify resources.  You can nest your object within a standard metadata schema, e.g. within a campaign or customer schema. However, your nested object cant include another nested object. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward Use this endpoint to define a metadata schema of a given resource for the first time. Once you configure a metadata schema for a given related_object, use the PUT [Update metadata schema](/api-reference/management/update-metadata-schema) endpoint to either update or add new metadata key-value pairs. For example, use this endpoint to define a metadata schema for related_object: campaign for the first time. If you want define a new metadata property for campaign, use the [PUT Update metadata schema](/api-reference/management/update-metadata-schema) endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Create Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsMetadataSchemasCreateRequestBody] Defines the metadata schema.
     */
    public createMetadataSchema(projectId: string, managementProjectsMetadataSchemasCreateRequestBody?: ManagementProjectsMetadataSchemasCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsMetadataSchemasCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createMetadataSchema(projectId, managementProjectsMetadataSchemasCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a new project. You can add users, specify the cluster, timezone, currency, and other details. All owners are added to the project by default.
     * Create Project
     * @param [managementProjectsCreateRequestBody] Define project details.
     */
    public createProjectWithHttpInfo(managementProjectsCreateRequestBody?: ManagementProjectsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createProjectWithHttpInfo(managementProjectsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a new project. You can add users, specify the cluster, timezone, currency, and other details. All owners are added to the project by default.
     * Create Project
     * @param [managementProjectsCreateRequestBody] Define project details.
     */
    public createProject(managementProjectsCreateRequestBody?: ManagementProjectsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createProject(managementProjectsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Overwrites the default stacking rules. If new stacking rules have been created for the project earlier (e.g. in the user interface), it returns an error. Use [Update stacking rules](/api-reference/management/update-stacking-rules) endpoint to change the rules.  📘 Stacking rules documentation  Read [the Stacking rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Create Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsStackingRulesCreateRequestBody] Defines the stacking rule parameters.
     */
    public createStackingRulesWithHttpInfo(projectId: string, managementProjectsStackingRulesCreateRequestBody?: ManagementProjectsStackingRulesCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsStackingRulesCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createStackingRulesWithHttpInfo(projectId, managementProjectsStackingRulesCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Overwrites the default stacking rules. If new stacking rules have been created for the project earlier (e.g. in the user interface), it returns an error. Use [Update stacking rules](/api-reference/management/update-stacking-rules) endpoint to change the rules.  📘 Stacking rules documentation  Read [the Stacking rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Create Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsStackingRulesCreateRequestBody] Defines the stacking rule parameters.
     */
    public createStackingRules(projectId: string, managementProjectsStackingRulesCreateRequestBody?: ManagementProjectsStackingRulesCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsStackingRulesCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createStackingRules(projectId, managementProjectsStackingRulesCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a new webhook configuration.  📘 Webhook Documentation  Read [Webhooks v2024-01-01](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Create Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsWebhooksCreateRequestBody] Defines a webhook configuration.
     */
    public createWebhookWithHttpInfo(projectId: string, managementProjectsWebhooksCreateRequestBody?: ManagementProjectsWebhooksCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsWebhooksCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createWebhookWithHttpInfo(projectId, managementProjectsWebhooksCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a new webhook configuration.  📘 Webhook Documentation  Read [Webhooks v2024-01-01](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Create Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsWebhooksCreateRequestBody] Defines a webhook configuration.
     */
    public createWebhook(projectId: string, managementProjectsWebhooksCreateRequestBody?: ManagementProjectsWebhooksCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsWebhooksCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createWebhook(projectId, managementProjectsWebhooksCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes permanently a brand configuration.
     * Delete Brand
     * @param projectId Provide the unique identifier of the project.
     * @param brandingId Provide the unique identifier of the brand configuration.
     */
    public deleteBrandWithHttpInfo(projectId: string, brandingId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteBrandWithHttpInfo(projectId, brandingId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes permanently a brand configuration.
     * Delete Brand
     * @param projectId Provide the unique identifier of the project.
     * @param brandingId Provide the unique identifier of the brand configuration.
     */
    public deleteBrand(projectId: string, brandingId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteBrand(projectId, brandingId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes permanently the custom event schema with its custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Delete Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param customEventSchemaId Provide the unique identifier of the custom event schema.
     */
    public deleteCustomEventSchemaWithHttpInfo(projectId: string, customEventSchemaId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteCustomEventSchemaWithHttpInfo(projectId, customEventSchemaId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes permanently the custom event schema with its custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Delete Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param customEventSchemaId Provide the unique identifier of the custom event schema.
     */
    public deleteCustomEventSchema(projectId: string, customEventSchemaId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteCustomEventSchema(projectId, customEventSchemaId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes permanently the metadata schema. In standard metadata schemas, this endpoint removes permanently all definitions. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward If you want to delete only one definition, use the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. In the request, provide the deleted: true pair in the definition object. This definition will be moved to Removed definitions. If you want to create a new standard metadata schema, use the [Create Metadata Schema](/api-reference/management/create-metadata-schema) endpoint.  🚧 Metadata Purging This endpoint deletes permanently the metadata schemas only. However, it does not purge the metadata from associated entities, so the metadata added to those entities will remain. If you want to purge metadata from the entities: 1. Remove all the definitions you want to purge. You can do this either in Voucherify Project Settings > Metadata Schema tab or with the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. 2. In Voucherify Project Settings > Metadata Schema tab, go to the relevant metadata schema. 3. In Removed definitions, click the bin button next to the definitions whose metadata you want to purge from entities. Note: - This is an asynchronous action. You will be notified when it has been completed. - You cannot purge metadata for the Redemption and Publication schemas. 4. Use the Delete Metadata Schema request to delete the metadata schema from Voucherify.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Delete Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param metadataSchemaId Provide the unique identifier of the metadata schema.
     */
    public deleteMetadataSchemaWithHttpInfo(projectId: string, metadataSchemaId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteMetadataSchemaWithHttpInfo(projectId, metadataSchemaId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes permanently the metadata schema. In standard metadata schemas, this endpoint removes permanently all definitions. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward If you want to delete only one definition, use the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. In the request, provide the deleted: true pair in the definition object. This definition will be moved to Removed definitions. If you want to create a new standard metadata schema, use the [Create Metadata Schema](/api-reference/management/create-metadata-schema) endpoint.  🚧 Metadata Purging This endpoint deletes permanently the metadata schemas only. However, it does not purge the metadata from associated entities, so the metadata added to those entities will remain. If you want to purge metadata from the entities: 1. Remove all the definitions you want to purge. You can do this either in Voucherify Project Settings > Metadata Schema tab or with the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. 2. In Voucherify Project Settings > Metadata Schema tab, go to the relevant metadata schema. 3. In Removed definitions, click the bin button next to the definitions whose metadata you want to purge from entities. Note: - This is an asynchronous action. You will be notified when it has been completed. - You cannot purge metadata for the Redemption and Publication schemas. 4. Use the Delete Metadata Schema request to delete the metadata schema from Voucherify.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Delete Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param metadataSchemaId Provide the unique identifier of the metadata schema.
     */
    public deleteMetadataSchema(projectId: string, metadataSchemaId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteMetadataSchema(projectId, metadataSchemaId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes an existing project. The users currently using the deleted project will be automatically logged out.  🚧 Sandbox Project The sandbox project cannot be deleted.
     * Delete Project
     * @param projectId Provide the unique identifier of the project.
     */
    public deleteProjectWithHttpInfo(projectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteProjectWithHttpInfo(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes an existing project. The users currently using the deleted project will be automatically logged out.  🚧 Sandbox Project The sandbox project cannot be deleted.
     * Delete Project
     * @param projectId Provide the unique identifier of the project.
     */
    public deleteProject(projectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteProject(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes permanently the current settings for the stacking rules. The stacking rules are restored to default values.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Delete Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param stackingRulesId Provide the unique identifier of the stacking rules.
     */
    public deleteStackingRulesWithHttpInfo(projectId: string, stackingRulesId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteStackingRulesWithHttpInfo(projectId, stackingRulesId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes permanently the current settings for the stacking rules. The stacking rules are restored to default values.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Delete Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param stackingRulesId Provide the unique identifier of the stacking rules.
     */
    public deleteStackingRules(projectId: string, stackingRulesId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteStackingRules(projectId, stackingRulesId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Delete Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param webhookId Provide the unique identifier of the webhook configuration.
     */
    public deleteWebhookWithHttpInfo(projectId: string, webhookId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteWebhookWithHttpInfo(projectId, webhookId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Delete Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param webhookId Provide the unique identifier of the webhook configuration.
     */
    public deleteWebhook(projectId: string, webhookId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteWebhook(projectId, webhookId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a brand configuration.
     * Get Brand
     * @param projectId Provide the unique identifier of the project.
     * @param brandingId Provide the unique identifier of the brand configuration.
     */
    public getBrandWithHttpInfo(projectId: string, brandingId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsBrandingGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getBrandWithHttpInfo(projectId, brandingId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a brand configuration.
     * Get Brand
     * @param projectId Provide the unique identifier of the project.
     * @param brandingId Provide the unique identifier of the brand configuration.
     */
    public getBrand(projectId: string, brandingId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsBrandingGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getBrand(projectId, brandingId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a custom event schema.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Get Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param customEventSchemaId Provide the unique identifier of the custom event schema.
     */
    public getCustomEventSchemaWithHttpInfo(projectId: string, customEventSchemaId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsCustomEventSchemasGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getCustomEventSchemaWithHttpInfo(projectId, customEventSchemaId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a custom event schema.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Get Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param customEventSchemaId Provide the unique identifier of the custom event schema.
     */
    public getCustomEventSchema(projectId: string, customEventSchemaId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsCustomEventSchemasGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getCustomEventSchema(projectId, customEventSchemaId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a metadata schema.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Get Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param metadataSchemaId Provide the unique identifier of the metadata schema.
     */
    public getMetadataSchema1WithHttpInfo(projectId: string, metadataSchemaId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsMetadataSchemasGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getMetadataSchema1WithHttpInfo(projectId, metadataSchemaId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a metadata schema.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Get Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param metadataSchemaId Provide the unique identifier of the metadata schema.
     */
    public getMetadataSchema1(projectId: string, metadataSchemaId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsMetadataSchemasGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getMetadataSchema1(projectId, metadataSchemaId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves an existing project.
     * Get Project
     * @param projectId Provide the unique identifier of the project.
     */
    public getProjectWithHttpInfo(projectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getProjectWithHttpInfo(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves an existing project.
     * Get Project
     * @param projectId Provide the unique identifier of the project.
     */
    public getProject(projectId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getProject(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the stacking rules for the project.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Get Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param stackingRulesId Provide the unique identifier of the stacking rules.
     */
    public getStackingRulesWithHttpInfo(projectId: string, stackingRulesId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsStackingRulesGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getStackingRulesWithHttpInfo(projectId, stackingRulesId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the stacking rules for the project.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Get Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param stackingRulesId Provide the unique identifier of the stacking rules.
     */
    public getStackingRules(projectId: string, stackingRulesId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsStackingRulesGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getStackingRules(projectId, stackingRulesId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the project users details.
     * Get User
     * @param projectId Provide the unique identifier of the project.
     * @param userId Provide the unique identifier of the user. Alternatively, provide the users login.
     */
    public getUserWithHttpInfo(projectId: string, userId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsUsersGetUserResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getUserWithHttpInfo(projectId, userId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the project users details.
     * Get User
     * @param projectId Provide the unique identifier of the project.
     * @param userId Provide the unique identifier of the user. Alternatively, provide the users login.
     */
    public getUser(projectId: string, userId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsUsersGetUserResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getUser(projectId, userId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Get Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param webhookId Provide the unique identifier of the webhook configuration.
     */
    public getWebhookWithHttpInfo(projectId: string, webhookId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsWebhooksGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getWebhookWithHttpInfo(projectId, webhookId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Get Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param webhookId Provide the unique identifier of the webhook configuration.
     */
    public getWebhook(projectId: string, webhookId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsWebhooksGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getWebhook(projectId, webhookId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Sends an invitation to an email address that has not been used yet as a Voucherify user login. You can specify the projects to which the invited user will be assigned and define their roles.
     * Invite a New User
     * @param [managementProjectsUsersInviteCreateRequestBody] Defines the details of the invitation, the project, and roles to which the user will be assigned.
     */
    public inviteUserWithHttpInfo(managementProjectsUsersInviteCreateRequestBody?: ManagementProjectsUsersInviteCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.inviteUserWithHttpInfo(managementProjectsUsersInviteCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Sends an invitation to an email address that has not been used yet as a Voucherify user login. You can specify the projects to which the invited user will be assigned and define their roles.
     * Invite a New User
     * @param [managementProjectsUsersInviteCreateRequestBody] Defines the details of the invitation, the project, and roles to which the user will be assigned.
     */
    public inviteUser(managementProjectsUsersInviteCreateRequestBody?: ManagementProjectsUsersInviteCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.inviteUser(managementProjectsUsersInviteCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all brand configurations. Because a project can have only one brand, it always returns a list with one item. This endpoint can be used to retrieve the brand configuration created with the Voucherify Dashboard and the ID.
     * List Brands
     * @param projectId Provide the unique identifier of the project.
     */
    public listBrandsWithHttpInfo(projectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsBrandingListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listBrandsWithHttpInfo(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all brand configurations. Because a project can have only one brand, it always returns a list with one item. This endpoint can be used to retrieve the brand configuration created with the Voucherify Dashboard and the ID.
     * List Brands
     * @param projectId Provide the unique identifier of the project.
     */
    public listBrands(projectId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsBrandingListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listBrands(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all custom event schemas available in the project.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * List Custom Event Schemas
     * @param projectId Provide the unique identifier of the project.
     */
    public listCustomEventSchemasWithHttpInfo(projectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsCustomEventSchemasListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCustomEventSchemasWithHttpInfo(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all custom event schemas available in the project.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * List Custom Event Schemas
     * @param projectId Provide the unique identifier of the project.
     */
    public listCustomEventSchemas(projectId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsCustomEventSchemasListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCustomEventSchemas(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all metadata schemas available in the project.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * List Metadata Schemas
     * @param projectId Provide the unique identifier of the project.
     */
    public listMetadataSchemas1WithHttpInfo(projectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsMetadataSchemasListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMetadataSchemas1WithHttpInfo(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all metadata schemas available in the project.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * List Metadata Schemas
     * @param projectId Provide the unique identifier of the project.
     */
    public listMetadataSchemas1(projectId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsMetadataSchemasListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMetadataSchemas1(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all projects for the organization. The endpoint does not require any query parameters.
     * List Projects
     */
    public listProjectsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listProjectsWithHttpInfo(observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all projects for the organization. The endpoint does not require any query parameters.
     * List Projects
     */
    public listProjects(_options?: PromiseConfigurationOptions): Promise<ManagementProjectsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listProjects(observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all stacking rules. Returns always a list with one item. This endpoint can be used to retrieve the default stacking rules. The default stacking rules do not have an ID that could be used with the [Get Stacking Rules](/api-reference/management/get-stacking-rules) or [Update Stacking Rules](/api-reference/management/update-stacking-rules) endpoints.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * List Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     */
    public listStackingRulesWithHttpInfo(projectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsStackingRulesListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listStackingRulesWithHttpInfo(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all stacking rules. Returns always a list with one item. This endpoint can be used to retrieve the default stacking rules. The default stacking rules do not have an ID that could be used with the [Get Stacking Rules](/api-reference/management/get-stacking-rules) or [Update Stacking Rules](/api-reference/management/update-stacking-rules) endpoints.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * List Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     */
    public listStackingRules(projectId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsStackingRulesListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listStackingRules(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all users assigned to the project.
     * List Users
     * @param projectId Provide the unique identifier of the project.
     */
    public listUsersWithHttpInfo(projectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsUsersListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listUsersWithHttpInfo(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all users assigned to the project.
     * List Users
     * @param projectId Provide the unique identifier of the project.
     */
    public listUsers(projectId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsUsersListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listUsers(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all webhook configurations for the project.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * List Webhooks
     * @param projectId Provide the unique identifier of the project.
     */
    public listWebhooksWithHttpInfo(projectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsWebhooksListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listWebhooksWithHttpInfo(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all webhook configurations for the project.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * List Webhooks
     * @param projectId Provide the unique identifier of the project.
     */
    public listWebhooks(projectId: string, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsWebhooksListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listWebhooks(projectId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Copies a campaign template to another project. The resources, like validation rules or products, will not be copied to the destination project yet. When the template is used to create a new campaign or add a new promotion tier, the resources will be created in the destination project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Copy Campaign Template to a Project
     * @param projectId Provide the unique identifier of the project.
     * @param campaignTemplateId Provide the unique identifier of the campaign template.
     * @param [managementProjectsTemplatesCampaignsCopyCreateRequestBody] Determines the details about the template in the destination project as well as the destination project itself.
     */
    public managementCopyCampaignTemplateWithHttpInfo(projectId: string, campaignTemplateId: string, managementProjectsTemplatesCampaignsCopyCreateRequestBody?: ManagementProjectsTemplatesCampaignsCopyCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsTemplatesCampaignsCopyCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.managementCopyCampaignTemplateWithHttpInfo(projectId, campaignTemplateId, managementProjectsTemplatesCampaignsCopyCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Copies a campaign template to another project. The resources, like validation rules or products, will not be copied to the destination project yet. When the template is used to create a new campaign or add a new promotion tier, the resources will be created in the destination project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Copy Campaign Template to a Project
     * @param projectId Provide the unique identifier of the project.
     * @param campaignTemplateId Provide the unique identifier of the campaign template.
     * @param [managementProjectsTemplatesCampaignsCopyCreateRequestBody] Determines the details about the template in the destination project as well as the destination project itself.
     */
    public managementCopyCampaignTemplate(projectId: string, campaignTemplateId: string, managementProjectsTemplatesCampaignsCopyCreateRequestBody?: ManagementProjectsTemplatesCampaignsCopyCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsTemplatesCampaignsCopyCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.managementCopyCampaignTemplate(projectId, campaignTemplateId, managementProjectsTemplatesCampaignsCopyCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all campaign templates available in the project.  👍 List Campaign Templates  This endpoint works in the same way as the [List Campaign Templates endpoint](/api-reference/templates/list-campaign-templates).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * List Campaign Templates
     * @param projectId Provide the unique identifier of the project.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [startingAfterId] A cursor for pagination. It retrieves the campaign templates created after a template with the given ID.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [includeTotal] If set to true, the response returns the number of all campaign templates, regardless of the applied filters or limits. Set to false by default.
     * @param [filters] Filters for listing templates.
     */
    public managementListCampaignTemplatesWithHttpInfo(projectId: string, limit?: number, startingAfterId?: string, order?: ParameterTemplatesList, includeTotal?: boolean, filters?: ParameterFiltersListTemplates, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsTemplatesCampaignsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.managementListCampaignTemplatesWithHttpInfo(projectId, limit, startingAfterId, order, includeTotal, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all campaign templates available in the project.  👍 List Campaign Templates  This endpoint works in the same way as the [List Campaign Templates endpoint](/api-reference/templates/list-campaign-templates).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * List Campaign Templates
     * @param projectId Provide the unique identifier of the project.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [startingAfterId] A cursor for pagination. It retrieves the campaign templates created after a template with the given ID.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [includeTotal] If set to true, the response returns the number of all campaign templates, regardless of the applied filters or limits. Set to false by default.
     * @param [filters] Filters for listing templates.
     */
    public managementListCampaignTemplates(projectId: string, limit?: number, startingAfterId?: string, order?: ParameterTemplatesList, includeTotal?: boolean, filters?: ParameterFiltersListTemplates, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsTemplatesCampaignsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.managementListCampaignTemplates(projectId, limit, startingAfterId, order, includeTotal, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Unassigns the user from the project. If the user is currently logged in, they are automatically logged out. If the user is assigned to only one project, they cannot be unassigned from that project.
     * Unassign User
     * @param projectId Provide the unique identifier of the project.
     * @param userId Provide the unique identifier of the user. Alternatively, provide the users login.
     */
    public unassignUserWithHttpInfo(projectId: string, userId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.unassignUserWithHttpInfo(projectId, userId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Unassigns the user from the project. If the user is currently logged in, they are automatically logged out. If the user is assigned to only one project, they cannot be unassigned from that project.
     * Unassign User
     * @param projectId Provide the unique identifier of the project.
     * @param userId Provide the unique identifier of the user. Alternatively, provide the users login.
     */
    public unassignUser(projectId: string, userId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.unassignUser(projectId, userId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates a brand configuration. Only the fields sent in the request will be updated. The fields omitted in the request will remain unchanged.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.
     * Update Brand
     * @param projectId Provide the unique identifier of the project.
     * @param brandingId Provide the unique identifier of the brand configuration.
     * @param [managementProjectsBrandingUpdateRequestBody] Defines the brand configuration to be updated.
     */
    public updateBrandWithHttpInfo(projectId: string, brandingId: string, managementProjectsBrandingUpdateRequestBody?: ManagementProjectsBrandingUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsBrandingUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateBrandWithHttpInfo(projectId, brandingId, managementProjectsBrandingUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates a brand configuration. Only the fields sent in the request will be updated. The fields omitted in the request will remain unchanged.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.
     * Update Brand
     * @param projectId Provide the unique identifier of the project.
     * @param brandingId Provide the unique identifier of the brand configuration.
     * @param [managementProjectsBrandingUpdateRequestBody] Defines the brand configuration to be updated.
     */
    public updateBrand(projectId: string, brandingId: string, managementProjectsBrandingUpdateRequestBody?: ManagementProjectsBrandingUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsBrandingUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateBrand(projectId, brandingId, managementProjectsBrandingUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates a custom event schema. With this request, you can: - Add a nonexistent property to a custom event schema. - Update an existing property. In the request, you can provide only those properties you want to add or update. Definitions omitted in the request remain unchanged.  👍 Additional Notes - You can change the type of an existing property, e.g. from string to number. - You can remove a custom property with this endpoint by providing deleted: true in the request. However, you cannot permanently remove an event definition or its property with this endpoint.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Update Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param customEventSchemaId Provide the unique identifier of the custom event schema.
     * @param [managementProjectsCustomEventSchemasUpdateRequestBody] Defines the custom event schema to be updated.
     */
    public updateCustomEventSchemaWithHttpInfo(projectId: string, customEventSchemaId: string, managementProjectsCustomEventSchemasUpdateRequestBody?: ManagementProjectsCustomEventSchemasUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsCustomEventSchemasUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCustomEventSchemaWithHttpInfo(projectId, customEventSchemaId, managementProjectsCustomEventSchemasUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates a custom event schema. With this request, you can: - Add a nonexistent property to a custom event schema. - Update an existing property. In the request, you can provide only those properties you want to add or update. Definitions omitted in the request remain unchanged.  👍 Additional Notes - You can change the type of an existing property, e.g. from string to number. - You can remove a custom property with this endpoint by providing deleted: true in the request. However, you cannot permanently remove an event definition or its property with this endpoint.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Update Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param customEventSchemaId Provide the unique identifier of the custom event schema.
     * @param [managementProjectsCustomEventSchemasUpdateRequestBody] Defines the custom event schema to be updated.
     */
    public updateCustomEventSchema(projectId: string, customEventSchemaId: string, managementProjectsCustomEventSchemasUpdateRequestBody?: ManagementProjectsCustomEventSchemasUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsCustomEventSchemasUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCustomEventSchema(projectId, customEventSchemaId, managementProjectsCustomEventSchemasUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates a metadata schema. With this request, you can: - Add a nonexistent attribute definition to the metadata schema. - Update an existing attribute definition by overwriting its current values. In the request, you can provide only those definitions you want to add or update. Definitions omitted in the request remain unchanged. However, if you want to update a definition, you will have to add all its current key-value pairs as well. Only the pairs sent in the request are saved for this definition. This means that the key-value pairs that are not sent in a request are restored to default values. For example, if your definition has an array with values and it is not sent in an update request, the array values will be deleted.  👍 Additional Notes - You cannot change the type of an existing schema, e.g. from string to number. - You can remove a definition with this endpoint by providing deleted: true in the request. It will be moved to the Removed definitions section in the user interface. However, you cannot permanently remove a definition with this endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Update Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param metadataSchemaId Provide the unique identifier of the metadata schema.
     * @param [managementProjectsMetadataSchemasUpdateRequestBody] Defines the metadata schema to be updated.
     */
    public updateMetadataSchemaWithHttpInfo(projectId: string, metadataSchemaId: string, managementProjectsMetadataSchemasUpdateRequestBody?: ManagementProjectsMetadataSchemasUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsMetadataSchemasUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateMetadataSchemaWithHttpInfo(projectId, metadataSchemaId, managementProjectsMetadataSchemasUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates a metadata schema. With this request, you can: - Add a nonexistent attribute definition to the metadata schema. - Update an existing attribute definition by overwriting its current values. In the request, you can provide only those definitions you want to add or update. Definitions omitted in the request remain unchanged. However, if you want to update a definition, you will have to add all its current key-value pairs as well. Only the pairs sent in the request are saved for this definition. This means that the key-value pairs that are not sent in a request are restored to default values. For example, if your definition has an array with values and it is not sent in an update request, the array values will be deleted.  👍 Additional Notes - You cannot change the type of an existing schema, e.g. from string to number. - You can remove a definition with this endpoint by providing deleted: true in the request. It will be moved to the Removed definitions section in the user interface. However, you cannot permanently remove a definition with this endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Update Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param metadataSchemaId Provide the unique identifier of the metadata schema.
     * @param [managementProjectsMetadataSchemasUpdateRequestBody] Defines the metadata schema to be updated.
     */
    public updateMetadataSchema(projectId: string, metadataSchemaId: string, managementProjectsMetadataSchemasUpdateRequestBody?: ManagementProjectsMetadataSchemasUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsMetadataSchemasUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateMetadataSchema(projectId, metadataSchemaId, managementProjectsMetadataSchemasUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates an existing project. You can add or modify settings for timezone, currency, notifications, and other details. Only the fields sent in the request will be updated.
     * Update Project
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsUpdateRequestBody] Define the project details to be updated.
     */
    public updateProjectWithHttpInfo(projectId: string, managementProjectsUpdateRequestBody?: ManagementProjectsUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateProjectWithHttpInfo(projectId, managementProjectsUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates an existing project. You can add or modify settings for timezone, currency, notifications, and other details. Only the fields sent in the request will be updated.
     * Update Project
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsUpdateRequestBody] Define the project details to be updated.
     */
    public updateProject(projectId: string, managementProjectsUpdateRequestBody?: ManagementProjectsUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateProject(projectId, managementProjectsUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the stacking rules. Only the provided fields will be updated. However, if you update an array, the content of the array is overwritten. This means that if you want to add new values to an array and retain existing ones, you need to provide both the existing and new values in the request.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Update Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param stackingRulesId Provide the unique identifier of the stacking rules.
     * @param [managementProjectsStackingRulesUpdateRequestBody] Defines the stacking rules to be updated.
     */
    public updateStackingRulesWithHttpInfo(projectId: string, stackingRulesId: string, managementProjectsStackingRulesUpdateRequestBody?: ManagementProjectsStackingRulesUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsStackingRulesUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateStackingRulesWithHttpInfo(projectId, stackingRulesId, managementProjectsStackingRulesUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the stacking rules. Only the provided fields will be updated. However, if you update an array, the content of the array is overwritten. This means that if you want to add new values to an array and retain existing ones, you need to provide both the existing and new values in the request.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Update Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param stackingRulesId Provide the unique identifier of the stacking rules.
     * @param [managementProjectsStackingRulesUpdateRequestBody] Defines the stacking rules to be updated.
     */
    public updateStackingRules(projectId: string, stackingRulesId: string, managementProjectsStackingRulesUpdateRequestBody?: ManagementProjectsStackingRulesUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsStackingRulesUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateStackingRules(projectId, stackingRulesId, managementProjectsStackingRulesUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the users role.
     * Update User
     * @param projectId Provide the unique identifier of the project.
     * @param userId Provide the unique identifier of the user. Alternatively, provide the users login.
     * @param [managementProjectsUsersUpdateRoleRequestBody] Defines the users new role.
     */
    public updateUserWithHttpInfo(projectId: string, userId: string, managementProjectsUsersUpdateRoleRequestBody?: ManagementProjectsUsersUpdateRoleRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsUsersUpdateRoleResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateUserWithHttpInfo(projectId, userId, managementProjectsUsersUpdateRoleRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the users role.
     * Update User
     * @param projectId Provide the unique identifier of the project.
     * @param userId Provide the unique identifier of the user. Alternatively, provide the users login.
     * @param [managementProjectsUsersUpdateRoleRequestBody] Defines the users new role.
     */
    public updateUser(projectId: string, userId: string, managementProjectsUsersUpdateRoleRequestBody?: ManagementProjectsUsersUpdateRoleRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsUsersUpdateRoleResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateUser(projectId, userId, managementProjectsUsersUpdateRoleRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates a webhook configuration. The events listed in the request are overwritten. If you want to add more events, provide also the events that are already in the webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Update Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param webhookId Provide the unique identifier of the webhook configuration.
     * @param [managementProjectsWebhooksUpdateRequestBody] Defines the webhook configuration to be updated.
     */
    public updateWebhookWithHttpInfo(projectId: string, webhookId: string, managementProjectsWebhooksUpdateRequestBody?: ManagementProjectsWebhooksUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ManagementProjectsWebhooksUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateWebhookWithHttpInfo(projectId, webhookId, managementProjectsWebhooksUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates a webhook configuration. The events listed in the request are overwritten. If you want to add more events, provide also the events that are already in the webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Update Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param webhookId Provide the unique identifier of the webhook configuration.
     * @param [managementProjectsWebhooksUpdateRequestBody] Defines the webhook configuration to be updated.
     */
    public updateWebhook(projectId: string, webhookId: string, managementProjectsWebhooksUpdateRequestBody?: ManagementProjectsWebhooksUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<ManagementProjectsWebhooksUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateWebhook(projectId, webhookId, managementProjectsWebhooksUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableMetadataSchemasApi } from './ObservableAPI';

import { MetadataSchemasApiRequestFactory, MetadataSchemasApiResponseProcessor} from "../apis/MetadataSchemasApi";
export class PromiseMetadataSchemasApi {
    private api: ObservableMetadataSchemasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataSchemasApiRequestFactory,
        responseProcessor?: MetadataSchemasApiResponseProcessor
    ) {
        this.api = new ObservableMetadataSchemasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a metadata schema per resource type. # Resource types ## Standard You can retrieve metadata schemas for the standard metadata schema definitions listed below. Add one of these types as the resource path parameter. - campaign - customer - earning_rule - loyalty_tier - order - order_item - product - promotion_tier - publication - redemption - reward - voucher ## Custom If you have defined a [custom metadata schema](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata), provide its name in the resource field to retrieve its details. 📘 Management API If you have Management API enabled, you can also use the [Get Metadata Schemas](/api-reference/management/get-metadata-schema) endpoint to retrieve a metadata schema using its ID.
     * Get Metadata Schema
     * @param resource There is an infinite number of possibilities for retrieving metadata schemas by the resource type because you can define custom metadata schemas.
     */
    public getMetadataSchemaWithHttpInfo(resource: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetadataSchemasGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getMetadataSchemaWithHttpInfo(resource, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a metadata schema per resource type. # Resource types ## Standard You can retrieve metadata schemas for the standard metadata schema definitions listed below. Add one of these types as the resource path parameter. - campaign - customer - earning_rule - loyalty_tier - order - order_item - product - promotion_tier - publication - redemption - reward - voucher ## Custom If you have defined a [custom metadata schema](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata), provide its name in the resource field to retrieve its details. 📘 Management API If you have Management API enabled, you can also use the [Get Metadata Schemas](/api-reference/management/get-metadata-schema) endpoint to retrieve a metadata schema using its ID.
     * Get Metadata Schema
     * @param resource There is an infinite number of possibilities for retrieving metadata schemas by the resource type because you can define custom metadata schemas.
     */
    public getMetadataSchema(resource: string, _options?: PromiseConfigurationOptions): Promise<MetadataSchemasGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getMetadataSchema(resource, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve metadata schema definitions. 📘 Management API If you have Management API enabled, you can also use the [List Metadata Schemas](/api-reference/management/list-metadata-schemas) endpoint to list all metadata schemas.
     * List Metadata Schema Definitions
     */
    public listMetadataSchemasWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<MetadataSchemasListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMetadataSchemasWithHttpInfo(observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve metadata schema definitions. 📘 Management API If you have Management API enabled, you can also use the [List Metadata Schemas](/api-reference/management/list-metadata-schemas) endpoint to list all metadata schemas.
     * List Metadata Schema Definitions
     */
    public listMetadataSchemas(_options?: PromiseConfigurationOptions): Promise<MetadataSchemasListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listMetadataSchemas(observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableOAuthApi } from './ObservableAPI';

import { OAuthApiRequestFactory, OAuthApiResponseProcessor} from "../apis/OAuthApi";
export class PromiseOAuthApi {
    private api: ObservableOAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OAuthApiRequestFactory,
        responseProcessor?: OAuthApiResponseProcessor
    ) {
        this.api = new ObservableOAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate an OAuth 2.0 token for an API client. The token can be used to authorize access to the Voucherify API. The token inherits the permissions and IP whitelists of the API key that is used to generate the OAuth token. You can define the scope that limits its usage. You can generate up to 1000 OAuth tokens per project. The token expires in 900 seconds (15 minutes). If the API key that is used to generate the OAuth token is deleted or blocked, you cannot generate new OAuth tokens and the existing ones will stop working within one minute. If the API key used to generate an OAuth token is regenerated, the OAuth token can still be used. 🚧 Format of scope values Separate the values of the scope property with spaces.
     * Generate OAuth 2.0 Token
     * @param [grantType] Gives an access token outside of the context of a user.
     * @param [scope] Defines the scope of possible actions that can be done with the OAuth token. The &#x60;api&#x60; scope allows using the server-side API. The &#x60;client_api&#x60; scope allows using the whole client-side API. The values are space-delimited; do **not** use commas to separate the values.  Allowed values: &#x60;api&#x60;, &#x60;assets&#x60;, &#x60;async-actions&#x60;, &#x60;campaigns&#x60;, &#x60;categories&#x60;, &#x60;client_api&#x60;, &#x60;client_consents&#x60;, &#x60;client_customers&#x60;, &#x60;client_events&#x60;, &#x60;client_promotions&#x60;, &#x60;client_publish&#x60;, &#x60;client_qualifications&#x60;, &#x60;client_redeem&#x60;, &#x60;client_redemptions&#x60;, &#x60;client_validate&#x60;, &#x60;client_validations&#x60;, &#x60;client_vouchers&#x60;, &#x60;consents&#x60;, &#x60;customers&#x60;, &#x60;events&#x60;, &#x60;exports&#x60;, &#x60;locations&#x60;, &#x60;loyalties&#x60;, &#x60;metadata-schemas&#x60;, &#x60;orders&#x60;, &#x60;product-collections&#x60;, &#x60;products&#x60;, &#x60;promotions&#x60;, &#x60;publications&#x60;, &#x60;qualifications&#x60;, &#x60;redemptions&#x60;, &#x60;referrals&#x60;, &#x60;rewards&#x60;, &#x60;segments&#x60;, &#x60;SKUs&#x60;, &#x60;task-results&#x60;, &#x60;templates&#x60;, &#x60;trash-bin&#x60;, &#x60;validation-rules-assignments&#x60;, &#x60;validation-rules&#x60;, &#x60;validations&#x60;, &#x60;vouchers&#x60;.
     */
    public generateOauthTokenWithHttpInfo(grantType?: string, scope?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OAuthTokenGenerateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.generateOauthTokenWithHttpInfo(grantType, scope, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Generate an OAuth 2.0 token for an API client. The token can be used to authorize access to the Voucherify API. The token inherits the permissions and IP whitelists of the API key that is used to generate the OAuth token. You can define the scope that limits its usage. You can generate up to 1000 OAuth tokens per project. The token expires in 900 seconds (15 minutes). If the API key that is used to generate the OAuth token is deleted or blocked, you cannot generate new OAuth tokens and the existing ones will stop working within one minute. If the API key used to generate an OAuth token is regenerated, the OAuth token can still be used. 🚧 Format of scope values Separate the values of the scope property with spaces.
     * Generate OAuth 2.0 Token
     * @param [grantType] Gives an access token outside of the context of a user.
     * @param [scope] Defines the scope of possible actions that can be done with the OAuth token. The &#x60;api&#x60; scope allows using the server-side API. The &#x60;client_api&#x60; scope allows using the whole client-side API. The values are space-delimited; do **not** use commas to separate the values.  Allowed values: &#x60;api&#x60;, &#x60;assets&#x60;, &#x60;async-actions&#x60;, &#x60;campaigns&#x60;, &#x60;categories&#x60;, &#x60;client_api&#x60;, &#x60;client_consents&#x60;, &#x60;client_customers&#x60;, &#x60;client_events&#x60;, &#x60;client_promotions&#x60;, &#x60;client_publish&#x60;, &#x60;client_qualifications&#x60;, &#x60;client_redeem&#x60;, &#x60;client_redemptions&#x60;, &#x60;client_validate&#x60;, &#x60;client_validations&#x60;, &#x60;client_vouchers&#x60;, &#x60;consents&#x60;, &#x60;customers&#x60;, &#x60;events&#x60;, &#x60;exports&#x60;, &#x60;locations&#x60;, &#x60;loyalties&#x60;, &#x60;metadata-schemas&#x60;, &#x60;orders&#x60;, &#x60;product-collections&#x60;, &#x60;products&#x60;, &#x60;promotions&#x60;, &#x60;publications&#x60;, &#x60;qualifications&#x60;, &#x60;redemptions&#x60;, &#x60;referrals&#x60;, &#x60;rewards&#x60;, &#x60;segments&#x60;, &#x60;SKUs&#x60;, &#x60;task-results&#x60;, &#x60;templates&#x60;, &#x60;trash-bin&#x60;, &#x60;validation-rules-assignments&#x60;, &#x60;validation-rules&#x60;, &#x60;validations&#x60;, &#x60;vouchers&#x60;.
     */
    public generateOauthToken(grantType?: string, scope?: string, _options?: PromiseConfigurationOptions): Promise<OAuthTokenGenerateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.generateOauthToken(grantType, scope, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Introspect an OAuth 2.0 token for an API client.
     * Introspect OAuth 2.0 Token
     * @param [accessToken] An OAuth 2.0 token generated with the API token and key.
     */
    public introspectOauthTokenWithHttpInfo(accessToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OAuthTokenIntrospectResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.introspectOauthTokenWithHttpInfo(accessToken, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Introspect an OAuth 2.0 token for an API client.
     * Introspect OAuth 2.0 Token
     * @param [accessToken] An OAuth 2.0 token generated with the API token and key.
     */
    public introspectOauthToken(accessToken?: string, _options?: PromiseConfigurationOptions): Promise<OAuthTokenIntrospectResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.introspectOauthToken(accessToken, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Revoke an OAuth 2.0 token for an API client. Once revoked, the token cannot be used anymore.
     * Revoke OAuth 2.0 Token
     * @param [accessToken] An OAuth 2.0 token generated with the API token and key.
     */
    public revokeOauthTokenWithHttpInfo(accessToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.revokeOauthTokenWithHttpInfo(accessToken, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Revoke an OAuth 2.0 token for an API client. Once revoked, the token cannot be used anymore.
     * Revoke OAuth 2.0 Token
     * @param [accessToken] An OAuth 2.0 token generated with the API token and key.
     */
    public revokeOauthToken(accessToken?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.revokeOauthToken(accessToken, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableOrdersApi } from './ObservableAPI';

import { OrdersApiRequestFactory, OrdersApiResponseProcessor} from "../apis/OrdersApi";
export class PromiseOrdersApi {
    private api: ObservableOrdersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrdersApiRequestFactory,
        responseProcessor?: OrdersApiResponseProcessor
    ) {
        this.api = new ObservableOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an order object and triggers an order creation event.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the order database, Voucherify will return a related order object with updated fields.
     * Create Order
     * @param [ordersCreateRequestBody] Specify the order parameters.
     */
    public createOrderWithHttpInfo(ordersCreateRequestBody?: OrdersCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrdersCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createOrderWithHttpInfo(ordersCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates an order object and triggers an order creation event.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the order database, Voucherify will return a related order object with updated fields.
     * Create Order
     * @param [ordersCreateRequestBody] Specify the order parameters.
     */
    public createOrder(ordersCreateRequestBody?: OrdersCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<OrdersCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createOrder(ordersCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a downloadable CSV file containing a list of orders. The parameters listed in the payload resembles headers in the CSV file. To include a parameter to the file, add it to the parameters.fields object in the request body. The available filters are all [order object](/api-reference/orders/order-calculated-object) attributes. Additionally, any metadata defined in the metadata schema can be exported. Passing an empty JSON will generate a file containing three default fields: id, source_id, and status. The fields array is an array of strings containing the data in the export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields:    
     * Create Orders Export
     * @param [ordersExportCreateRequestBody] Specify which order parameters you would like to export.
     */
    public createOrderExportWithHttpInfo(ordersExportCreateRequestBody?: OrdersExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrdersExportCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createOrderExportWithHttpInfo(ordersExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a downloadable CSV file containing a list of orders. The parameters listed in the payload resembles headers in the CSV file. To include a parameter to the file, add it to the parameters.fields object in the request body. The available filters are all [order object](/api-reference/orders/order-calculated-object) attributes. Additionally, any metadata defined in the metadata schema can be exported. Passing an empty JSON will generate a file containing three default fields: id, source_id, and status. The fields array is an array of strings containing the data in the export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields:    
     * Create Orders Export
     * @param [ordersExportCreateRequestBody] Specify which order parameters you would like to export.
     */
    public createOrderExport(ordersExportCreateRequestBody?: OrdersExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<OrdersExportCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createOrderExport(ordersExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a specific order by passing its ID.
     * Get Order
     * @param orderId Unique Voucherify order ID or order source ID.
     */
    public getOrderWithHttpInfo(orderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrdersGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getOrderWithHttpInfo(orderId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a specific order by passing its ID.
     * Get Order
     * @param orderId Unique Voucherify order ID or order source ID.
     */
    public getOrder(orderId: string, _options?: PromiseConfigurationOptions): Promise<OrdersGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getOrder(orderId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     *   🚧 Historical orders  This endpoint should only be used to import historical orders into Voucherify. For on-going synchronization, the [update order](/api-reference/orders/update-order) endpoints should be used. This is critical because this endpoint does not store events or launch distributions. # Limitations ## Import volume There can be only a single on-going order import per tenant per project at a given time. The user can schedule more imports but those extra imports will be scheduled to run in sequence one by one.   ## Maximum count of orders in single import There is a 2000 limit but we might decide to change it to a lower / higher value at any given time depending if we find this value is too high or too low with time. # Notifications There are no notifications on the Dashboard because this import is launched via the API. # Triggered actions    If you import orders with customers, then a logic will be scheduled responsible for placing these customers into segments and refreshing the segments summary. Consequently, this update will trigger  - **customers entering into segments**  - **distributions** based on any rules tied to customer entering segment(s) - **earning rules** based on the customer entering segment(s) # What is not triggered 1. No webhooks are triggered during the import of orders - for both orders and upserted products / SKUs.   2. Distributions based on Order Update, Order Paid, Order Created and Order Cancelled. In other words if you have a distribution based on Order Paid and you import an order with a PAID status, the distribution is not going to be triggered.     3. No events are created during the import of orders - for both orders and upserted products / SKUs. In other words you wont see any events in the Activity tab in the Dashboard such as Order created or Order paid. If you are additionally upserting products / SKUs, then you wont see the Product created events listed, etc.    4. Earning rules based on Order Paid wont be triggered. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request with [GET Async Action](/api-reference/async-actions/get-async-action) endpoint.
     * Import Orders
     * @param [ordersImportCreateRequestBodyItem] The request body is sent in the form of an array of order objects.
     */
    public importOrdersWithHttpInfo(ordersImportCreateRequestBodyItem?: Array<OrdersImportCreateRequestBodyItem>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrdersImportCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importOrdersWithHttpInfo(ordersImportCreateRequestBodyItem, observableOptions);
        return apiResult.toPromise();
    }

    /**
     *   🚧 Historical orders  This endpoint should only be used to import historical orders into Voucherify. For on-going synchronization, the [update order](/api-reference/orders/update-order) endpoints should be used. This is critical because this endpoint does not store events or launch distributions. # Limitations ## Import volume There can be only a single on-going order import per tenant per project at a given time. The user can schedule more imports but those extra imports will be scheduled to run in sequence one by one.   ## Maximum count of orders in single import There is a 2000 limit but we might decide to change it to a lower / higher value at any given time depending if we find this value is too high or too low with time. # Notifications There are no notifications on the Dashboard because this import is launched via the API. # Triggered actions    If you import orders with customers, then a logic will be scheduled responsible for placing these customers into segments and refreshing the segments summary. Consequently, this update will trigger  - **customers entering into segments**  - **distributions** based on any rules tied to customer entering segment(s) - **earning rules** based on the customer entering segment(s) # What is not triggered 1. No webhooks are triggered during the import of orders - for both orders and upserted products / SKUs.   2. Distributions based on Order Update, Order Paid, Order Created and Order Cancelled. In other words if you have a distribution based on Order Paid and you import an order with a PAID status, the distribution is not going to be triggered.     3. No events are created during the import of orders - for both orders and upserted products / SKUs. In other words you wont see any events in the Activity tab in the Dashboard such as Order created or Order paid. If you are additionally upserting products / SKUs, then you wont see the Product created events listed, etc.    4. Earning rules based on Order Paid wont be triggered. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request with [GET Async Action](/api-reference/async-actions/get-async-action) endpoint.
     * Import Orders
     * @param [ordersImportCreateRequestBodyItem] The request body is sent in the form of an array of order objects.
     */
    public importOrders(ordersImportCreateRequestBodyItem?: Array<OrdersImportCreateRequestBodyItem>, _options?: PromiseConfigurationOptions): Promise<OrdersImportCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importOrders(ordersImportCreateRequestBodyItem, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of orders. 
     * List Orders
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listOrdersWithHttpInfo(limit?: number, page?: number, order?: ParameterOrderListOrders, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrdersListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listOrdersWithHttpInfo(limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of orders. 
     * List Orders
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listOrders(limit?: number, page?: number, order?: ParameterOrderListOrders, _options?: PromiseConfigurationOptions): Promise<OrdersListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listOrders(limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the specified order by setting the values of the parameters passed in the request body. Any parameters not provided will be left unchanged.
     * Update Order
     * @param orderId Unique Voucherify order ID or order source ID.
     * @param [ordersUpdateRequestBody] Specify the parameters of the order that are to be updated.
     */
    public updateOrderWithHttpInfo(orderId: string, ordersUpdateRequestBody?: OrdersUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrdersUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateOrderWithHttpInfo(orderId, ordersUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the specified order by setting the values of the parameters passed in the request body. Any parameters not provided will be left unchanged.
     * Update Order
     * @param orderId Unique Voucherify order ID or order source ID.
     * @param [ordersUpdateRequestBody] Specify the parameters of the order that are to be updated.
     */
    public updateOrder(orderId: string, ordersUpdateRequestBody?: OrdersUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<OrdersUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateOrder(orderId, ordersUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableProductCollectionsApi } from './ObservableAPI';

import { ProductCollectionsApiRequestFactory, ProductCollectionsApiResponseProcessor} from "../apis/ProductCollectionsApi";
export class PromiseProductCollectionsApi {
    private api: ObservableProductCollectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductCollectionsApiRequestFactory,
        responseProcessor?: ProductCollectionsApiResponseProcessor
    ) {
        this.api = new ObservableProductCollectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This method creates a new product collection.
     * Create Product Collection
     * @param [productCollectionsCreateRequestBody]
     */
    public createProductCollectionWithHttpInfo(productCollectionsCreateRequestBody?: ProductCollectionsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCollectionsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createProductCollectionWithHttpInfo(productCollectionsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method creates a new product collection.
     * Create Product Collection
     * @param [productCollectionsCreateRequestBody]
     */
    public createProductCollection(productCollectionsCreateRequestBody?: ProductCollectionsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ProductCollectionsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createProductCollection(productCollectionsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a product collection.
     * Delete Product Collection
     * @param productCollectionId A unique product collection ID.
     */
    public deleteProductCollectionWithHttpInfo(productCollectionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteProductCollectionWithHttpInfo(productCollectionId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a product collection.
     * Delete Product Collection
     * @param productCollectionId A unique product collection ID.
     */
    public deleteProductCollection(productCollectionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteProductCollection(productCollectionId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the product collection.
     * Get Product Collection
     * @param productCollectionId A unique product collection ID.
     */
    public getProductCollectionWithHttpInfo(productCollectionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCollectionsGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getProductCollectionWithHttpInfo(productCollectionId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the product collection.
     * Get Product Collection
     * @param productCollectionId A unique product collection ID.
     */
    public getProductCollection(productCollectionId: string, _options?: PromiseConfigurationOptions): Promise<ProductCollectionsGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getProductCollection(productCollectionId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method returns a list of product collections.
     * List Product Collections
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listProductCollectionsWithHttpInfo(limit?: number, page?: number, order?: ParameterOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCollectionsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listProductCollectionsWithHttpInfo(limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method returns a list of product collections.
     * List Product Collections
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listProductCollections(limit?: number, page?: number, order?: ParameterOrder, _options?: PromiseConfigurationOptions): Promise<ProductCollectionsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listProductCollections(limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves list of products from a product collection; works for both dynamic and static product collections.
     * List Products in Collection
     * @param productCollectionId Unique product collection ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfter] Timestamp representing the date and time to use in starting_after cursor to get more data. Represented in ISO 8601 format.
     */
    public listProductsInCollectionWithHttpInfo(productCollectionId: string, limit?: number, page?: number, order?: ParameterOrder, startingAfter?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCollectionsProductsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listProductsInCollectionWithHttpInfo(productCollectionId, limit, page, order, startingAfter, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves list of products from a product collection; works for both dynamic and static product collections.
     * List Products in Collection
     * @param productCollectionId Unique product collection ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfter] Timestamp representing the date and time to use in starting_after cursor to get more data. Represented in ISO 8601 format.
     */
    public listProductsInCollection(productCollectionId: string, limit?: number, page?: number, order?: ParameterOrder, startingAfter?: Date, _options?: PromiseConfigurationOptions): Promise<ProductCollectionsProductsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listProductsInCollection(productCollectionId, limit, page, order, startingAfter, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableProductsApi } from './ObservableAPI';

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class PromiseProductsApi {
    private api: ObservableProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a product object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the product database, Voucherify will return a related product object with updated fields.
     * Create Product
     * @param [productsCreateRequestBody] Specify the product parameters.
     */
    public createProductWithHttpInfo(productsCreateRequestBody?: ProductsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createProductWithHttpInfo(productsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a product object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the product database, Voucherify will return a related product object with updated fields.
     * Create Product
     * @param [productsCreateRequestBody] Specify the product parameters.
     */
    public createProduct(productsCreateRequestBody?: ProductsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ProductsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createProduct(productsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method adds product variants to a [created product](/api-reference/products/create-product).   📘 Upsert Mode  If you pass an id or a source_id that already exists in the sku database, Voucherify will return a related sku object with updated fields.
     * Create SKU
     * @param productId A Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param [productsSkusCreateRequestBody] Specify the SKU parameters to be created.
     */
    public createSkuWithHttpInfo(productId: string, productsSkusCreateRequestBody?: ProductsSkusCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductsSkusCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createSkuWithHttpInfo(productId, productsSkusCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method adds product variants to a [created product](/api-reference/products/create-product).   📘 Upsert Mode  If you pass an id or a source_id that already exists in the sku database, Voucherify will return a related sku object with updated fields.
     * Create SKU
     * @param productId A Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param [productsSkusCreateRequestBody] Specify the SKU parameters to be created.
     */
    public createSku(productId: string, productsSkusCreateRequestBody?: ProductsSkusCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ProductsSkusCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createSku(productId, productsSkusCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes a product and all related SKUs. This operation cannot be undone.  If the force parameter is set to false or not set at all, the product and all related SKUs will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Product
     * @param productId A Voucherify product ID or source ID.
     * @param [force] If this flag is set to true, the product and all related SKUs will be removed permanently. If it is set to false or not set at all, the product and all related SKUs will be moved to the bin. Going forward, the user will be able to create another product with exactly the same source_id.
     */
    public deleteProductWithHttpInfo(productId: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteProductWithHttpInfo(productId, force, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes a product and all related SKUs. This operation cannot be undone.  If the force parameter is set to false or not set at all, the product and all related SKUs will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Product
     * @param productId A Voucherify product ID or source ID.
     * @param [force] If this flag is set to true, the product and all related SKUs will be removed permanently. If it is set to false or not set at all, the product and all related SKUs will be moved to the bin. Going forward, the user will be able to create another product with exactly the same source_id.
     */
    public deleteProduct(productId: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteProduct(productId, force, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes a product SKU. This operation cannot be undone.  If the force parameter is set to false or not set at all, the SKU will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete SKU
     * @param productId A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param skuId A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID.
     * @param [force] If this flag is set to true, the SKU will be removed permanently. If it is set to false or not set at all, the SKU will be moved to the bin. Going forward, the user will be able to create another SKU with exactly the same source_id.
     */
    public deleteSkuWithHttpInfo(productId: string, skuId: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteSkuWithHttpInfo(productId, skuId, force, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes a product SKU. This operation cannot be undone.  If the force parameter is set to false or not set at all, the SKU will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete SKU
     * @param productId A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param skuId A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID.
     * @param [force] If this flag is set to true, the SKU will be removed permanently. If it is set to false or not set at all, the SKU will be moved to the bin. Going forward, the user will be able to create another SKU with exactly the same source_id.
     */
    public deleteSku(productId: string, skuId: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteSku(productId, skuId, force, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve details of a given product and its SKUs, if any.
     * Get Product
     * @param productId A Voucherify product ID or source ID.
     */
    public getProductWithHttpInfo(productId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductsGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getProductWithHttpInfo(productId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve details of a given product and its SKUs, if any.
     * Get Product
     * @param productId A Voucherify product ID or source ID.
     */
    public getProduct(productId: string, _options?: PromiseConfigurationOptions): Promise<ProductsGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getProduct(productId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve details of a SKU.
     * Get SKU
     * @param skuId A Voucherify SKU identifier or SKU source ID.
     */
    public getSkuWithHttpInfo(skuId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SkusGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getSkuWithHttpInfo(skuId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve details of a SKU.
     * Get SKU
     * @param skuId A Voucherify SKU identifier or SKU source ID.
     */
    public getSku(skuId: string, _options?: PromiseConfigurationOptions): Promise<SkusGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getSku(skuId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Import products into the repository using a CSV file. The CSV file has to include headers in the first line.  📘 Standard product fields mapping  - Create a **comma separated value (CSV) file** or download our CSV import template. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b82ed68d51e779443f550/Import_products_template.csv).  - Supported CSV file headers: name,source_id,price,attributes,image_url,Metadata_property_name  - **Name** is a **required** field. The remaining fields in the CSV template are optional.  - Override/Update products **names** in Voucherify using this method. Data will be updated for each product included in the CSV file whose **source_id** matches a source ID in Voucherify. No other data can be updated other than the product name.  - Note that dates and date-time attributes need to be provided in compliance with the **ISO 8601 norms**. For example, 2022-03-11T09:00:00.000Z or 2022-03-11     - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Columns that cannot be mapped to standard fields, will be mapped to **Custom attributes** and added as **products metadata**. There is no limit on the number of custom attributes that you can import as metadata.   - To provide the proper data type, you need to add all custom attributes to the metadata schema **before importing the file**. Read more [here](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata).  - **Product attributes** (not custom attributes) need to be separated by a comma and enclosed in double quotes, i.e attribute1,attribute2.  - Headers with metadata names **cant contain white-space characters**.  - If you import metadata defined in the schema as **arrays (multiple)**, you need to separate each value using a comma, for example:       - array of strings: subscribed,premium       - array of numbers: 123,234.      - array of dates: 2000-01-01,2000-01-02 This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Products using CSV
     * @param [file] File path.
     */
    public importProductsUsingCsvWithHttpInfo(file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductsImportCsvCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importProductsUsingCsvWithHttpInfo(file, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Import products into the repository using a CSV file. The CSV file has to include headers in the first line.  📘 Standard product fields mapping  - Create a **comma separated value (CSV) file** or download our CSV import template. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b82ed68d51e779443f550/Import_products_template.csv).  - Supported CSV file headers: name,source_id,price,attributes,image_url,Metadata_property_name  - **Name** is a **required** field. The remaining fields in the CSV template are optional.  - Override/Update products **names** in Voucherify using this method. Data will be updated for each product included in the CSV file whose **source_id** matches a source ID in Voucherify. No other data can be updated other than the product name.  - Note that dates and date-time attributes need to be provided in compliance with the **ISO 8601 norms**. For example, 2022-03-11T09:00:00.000Z or 2022-03-11     - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Columns that cannot be mapped to standard fields, will be mapped to **Custom attributes** and added as **products metadata**. There is no limit on the number of custom attributes that you can import as metadata.   - To provide the proper data type, you need to add all custom attributes to the metadata schema **before importing the file**. Read more [here](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata).  - **Product attributes** (not custom attributes) need to be separated by a comma and enclosed in double quotes, i.e attribute1,attribute2.  - Headers with metadata names **cant contain white-space characters**.  - If you import metadata defined in the schema as **arrays (multiple)**, you need to separate each value using a comma, for example:       - array of strings: subscribed,premium       - array of numbers: 123,234.      - array of dates: 2000-01-01,2000-01-02 This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Products using CSV
     * @param [file] File path.
     */
    public importProductsUsingCsv(file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<ProductsImportCsvCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importProductsUsingCsv(file, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Import SKUs into the repository using a CSV file. The CSV file has to include headers in the first line. All properties which cannot be mapped to standard SKU fields will be added to the metadata object. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b98d08c9b585083488a4c/Import_SKUS_template.csv).   🚧 Import sequence  First import products using the [dedicated endpoint](/api-reference/products/import-products-using-csv), then import SKUs using this endpoint to properly match SKUs to products.  📘 Standard SKU fields mapping  - **Required** fields are source_id and product_id.  - Supported CSV file headers: product_id,sku,source_id,price,image_url,attributes  - SKU **source_id** must be unique in the entire product catalog, no duplicates are allowed.  - SKU attributes need to be in the form of a stringy-fied json, i.e.{color:blue}. These attributes must be defined in the **product** beforehand so you can import them to the SKU.  - You can use this method to update the following parameters in bulk: **sku** and the sku **price**.  - Columns that cannot be mapped to standard fields will be mapped to Custom attributes and added as product metadata. There is no limit on the number of custom attributes that you can import as metadata. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import SKUs using CSV
     * @param [file] File path.
     */
    public importSKUsUsingCsvWithHttpInfo(file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SkusImportCsvCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importSKUsUsingCsvWithHttpInfo(file, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Import SKUs into the repository using a CSV file. The CSV file has to include headers in the first line. All properties which cannot be mapped to standard SKU fields will be added to the metadata object. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b98d08c9b585083488a4c/Import_SKUS_template.csv).   🚧 Import sequence  First import products using the [dedicated endpoint](/api-reference/products/import-products-using-csv), then import SKUs using this endpoint to properly match SKUs to products.  📘 Standard SKU fields mapping  - **Required** fields are source_id and product_id.  - Supported CSV file headers: product_id,sku,source_id,price,image_url,attributes  - SKU **source_id** must be unique in the entire product catalog, no duplicates are allowed.  - SKU attributes need to be in the form of a stringy-fied json, i.e.{color:blue}. These attributes must be defined in the **product** beforehand so you can import them to the SKU.  - You can use this method to update the following parameters in bulk: **sku** and the sku **price**.  - Columns that cannot be mapped to standard fields will be mapped to Custom attributes and added as product metadata. There is no limit on the number of custom attributes that you can import as metadata. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import SKUs using CSV
     * @param [file] File path.
     */
    public importSKUsUsingCsv(file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<SkusImportCsvCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importSKUsUsingCsv(file, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a list of products.
     * List Products
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startDate] Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     * @param [endDate] Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     */
    public listProductsWithHttpInfo(limit?: number, page?: number, order?: ParameterOrder, startDate?: Date, endDate?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listProductsWithHttpInfo(limit, page, order, startDate, endDate, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a list of products.
     * List Products
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startDate] Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     * @param [endDate] Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     */
    public listProducts(limit?: number, page?: number, order?: ParameterOrder, startDate?: Date, endDate?: Date, _options?: PromiseConfigurationOptions): Promise<ProductsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listProducts(limit, page, order, startDate, endDate, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve all SKUs for a given product.
     * List SKUs in Product
     * @param productId A Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startDate] Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     * @param [endDate] Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     */
    public listSKUsInProductWithHttpInfo(productId: string, limit?: number, page?: number, order?: ParameterOrder, startDate?: Date, endDate?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductsSkusListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listSKUsInProductWithHttpInfo(productId, limit, page, order, startDate, endDate, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve all SKUs for a given product.
     * List SKUs in Product
     * @param productId A Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startDate] Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     * @param [endDate] Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     */
    public listSKUsInProduct(productId: string, limit?: number, page?: number, order?: ParameterOrder, startDate?: Date, endDate?: Date, _options?: PromiseConfigurationOptions): Promise<ProductsSkusListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listSKUsInProduct(productId, limit, page, order, startDate, endDate, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the specified product by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.
     * Update Product
     * @param productId A Voucherify product ID or source ID.
     * @param [productsUpdateRequestBody] Specify the parameters of the product that are to be updated.
     */
    public updateProductWithHttpInfo(productId: string, productsUpdateRequestBody?: ProductsUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductsUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateProductWithHttpInfo(productId, productsUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the specified product by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.
     * Update Product
     * @param productId A Voucherify product ID or source ID.
     * @param [productsUpdateRequestBody] Specify the parameters of the product that are to be updated.
     */
    public updateProduct(productId: string, productsUpdateRequestBody?: ProductsUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<ProductsUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateProduct(productId, productsUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Update products in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Products in Bulk
     * @param [productsUpdateInBulkRequestBody] List the product fields to be updated in each product object.
     */
    public updateProductsInBulkWithHttpInfo(productsUpdateInBulkRequestBody?: Array<ProductsUpdateInBulkRequestBody>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductsUpdateInBulkResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateProductsInBulkWithHttpInfo(productsUpdateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Update products in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Products in Bulk
     * @param [productsUpdateInBulkRequestBody] List the product fields to be updated in each product object.
     */
    public updateProductsInBulk(productsUpdateInBulkRequestBody?: Array<ProductsUpdateInBulkRequestBody>, _options?: PromiseConfigurationOptions): Promise<ProductsUpdateInBulkResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateProductsInBulk(productsUpdateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates metadata parameters for a list of products. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Products\' Metadata in Bulk
     * @param [productsMetadataUpdateInBulkRequestBody] List the source_ids of the products you would like to update with the metadata key/value pairs.
     */
    public updateProductsMetadataInBulkWithHttpInfo(productsMetadataUpdateInBulkRequestBody?: ProductsMetadataUpdateInBulkRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductsMetadataUpdateInBulkResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateProductsMetadataInBulkWithHttpInfo(productsMetadataUpdateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates metadata parameters for a list of products. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Products\' Metadata in Bulk
     * @param [productsMetadataUpdateInBulkRequestBody] List the source_ids of the products you would like to update with the metadata key/value pairs.
     */
    public updateProductsMetadataInBulk(productsMetadataUpdateInBulkRequestBody?: ProductsMetadataUpdateInBulkRequestBody, _options?: PromiseConfigurationOptions): Promise<ProductsMetadataUpdateInBulkResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateProductsMetadataInBulk(productsMetadataUpdateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the specified SKU by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body schema wont be modified. Even if provided, they will be silently skipped.
     * Update SKU
     * @param productId A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param skuId A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID.
     * @param [productsSkusUpdateRequestBody] Specify the parameters to be updated.
     */
    public updateSkuWithHttpInfo(productId: string, skuId: string, productsSkusUpdateRequestBody?: ProductsSkusUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductsSkusUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateSkuWithHttpInfo(productId, skuId, productsSkusUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the specified SKU by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body schema wont be modified. Even if provided, they will be silently skipped.
     * Update SKU
     * @param productId A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param skuId A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID.
     * @param [productsSkusUpdateRequestBody] Specify the parameters to be updated.
     */
    public updateSku(productId: string, skuId: string, productsSkusUpdateRequestBody?: ProductsSkusUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<ProductsSkusUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateSku(productId, skuId, productsSkusUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservablePromotionsApi } from './ObservableAPI';

import { PromotionsApiRequestFactory, PromotionsApiResponseProcessor} from "../apis/PromotionsApi";
export class PromisePromotionsApi {
    private api: ObservablePromotionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PromotionsApiRequestFactory,
        responseProcessor?: PromotionsApiResponseProcessor
    ) {
        this.api = new ObservablePromotionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This method allows you to add a new promotion tier to an existing campaign. The tier hierarchy will be set as the next consequtive integer following the lowest ranking tier.
     * Add Promotion Tier to Campaign
     * @param campaignId Unique campaign ID assigned by Voucherify.
     * @param [promotionsTiersCreateRequestBody] Specify the promotion tier parameters.
     */
    public addPromotionTierToCampaignWithHttpInfo(campaignId: string, promotionsTiersCreateRequestBody?: PromotionsTiersCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PromotionsTiersCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.addPromotionTierToCampaignWithHttpInfo(campaignId, promotionsTiersCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method allows you to add a new promotion tier to an existing campaign. The tier hierarchy will be set as the next consequtive integer following the lowest ranking tier.
     * Add Promotion Tier to Campaign
     * @param campaignId Unique campaign ID assigned by Voucherify.
     * @param [promotionsTiersCreateRequestBody] Specify the promotion tier parameters.
     */
    public addPromotionTierToCampaign(campaignId: string, promotionsTiersCreateRequestBody?: PromotionsTiersCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<PromotionsTiersCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.addPromotionTierToCampaign(campaignId, promotionsTiersCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method creates one promotion stack. The sequence of promotion tier IDs will determine the promotion stacking order.
     * Create Promotion Stack
     * @param campaignId Unique campaign ID.
     * @param [promotionsStacksCreateRequestBody] Specify the order of promotion tiers for the promotion stack.
     */
    public createPromotionStackWithHttpInfo(campaignId: string, promotionsStacksCreateRequestBody?: PromotionsStacksCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PromotionsStacksCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createPromotionStackWithHttpInfo(campaignId, promotionsStacksCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method creates one promotion stack. The sequence of promotion tier IDs will determine the promotion stacking order.
     * Create Promotion Stack
     * @param campaignId Unique campaign ID.
     * @param [promotionsStacksCreateRequestBody] Specify the order of promotion tiers for the promotion stack.
     */
    public createPromotionStack(campaignId: string, promotionsStacksCreateRequestBody?: PromotionsStacksCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<PromotionsStacksCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createPromotionStack(campaignId, promotionsStacksCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a promotion stack.
     * Delete Promotion Stack
     * @param campaignId ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * @param stackId Promotion stack ID.
     */
    public deletePromotionStackWithHttpInfo(campaignId: string, stackId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deletePromotionStackWithHttpInfo(campaignId, stackId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a promotion stack.
     * Delete Promotion Stack
     * @param campaignId ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * @param stackId Promotion stack ID.
     */
    public deletePromotionStack(campaignId: string, stackId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deletePromotionStack(campaignId, stackId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a promotion tier.
     * Delete Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public deletePromotionTierWithHttpInfo(promotionTierId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deletePromotionTierWithHttpInfo(promotionTierId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a promotion tier.
     * Delete Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public deletePromotionTier(promotionTierId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deletePromotionTier(promotionTierId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method disables a promotion tier, i.e. makes the active parameter   false.
     * Disable Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public disablePromotionTierWithHttpInfo(promotionTierId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PromotionsTiersDisableResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.disablePromotionTierWithHttpInfo(promotionTierId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method disables a promotion tier, i.e. makes the active parameter   false.
     * Disable Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public disablePromotionTier(promotionTierId: string, _options?: PromiseConfigurationOptions): Promise<PromotionsTiersDisableResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.disablePromotionTier(promotionTierId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables a promotion tier, i.e. makes the active parameter   true.
     * Enable Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public enablePromotionTierWithHttpInfo(promotionTierId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PromotionsTiersEnableResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.enablePromotionTierWithHttpInfo(promotionTierId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables a promotion tier, i.e. makes the active parameter   true.
     * Enable Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public enablePromotionTier(promotionTierId: string, _options?: PromiseConfigurationOptions): Promise<PromotionsTiersEnableResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.enablePromotionTier(promotionTierId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method returns the details of a promotion stack, including the promotion tiers grouped within the stack.
     * Get Promotion Stack
     * @param campaignId ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * @param stackId Promotion stack ID.
     */
    public getPromotionStackWithHttpInfo(campaignId: string, stackId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PromotionsStacksGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getPromotionStackWithHttpInfo(campaignId, stackId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method returns the details of a promotion stack, including the promotion tiers grouped within the stack.
     * Get Promotion Stack
     * @param campaignId ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * @param stackId Promotion stack ID.
     */
    public getPromotionStack(campaignId: string, stackId: string, _options?: PromiseConfigurationOptions): Promise<PromotionsStacksGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getPromotionStack(campaignId, stackId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables you to retrieve a specific promotion tier.
     * Get Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public getPromotionTierWithHttpInfo(promotionTierId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PromotionsTiersGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getPromotionTierWithHttpInfo(promotionTierId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables you to retrieve a specific promotion tier.
     * Get Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public getPromotionTier(promotionTierId: string, _options?: PromiseConfigurationOptions): Promise<PromotionsTiersGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getPromotionTier(promotionTierId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables you to list promotion stacks irrespective of the campaign they are associated with.  You can use filters in the query parameters to specify the stacks to be returned in the response. # Advanced filters for fetching promotion stacks  
     * List Promotion Stacks
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [createdAt] A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * @param [updatedAt] A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z
     */
    public listAllPromotionStacksWithHttpInfo(limit?: number, page?: number, order?: ParameterOrderListAllPromotionStacks, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PromotionsStacksListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listAllPromotionStacksWithHttpInfo(limit, page, order, createdAt, updatedAt, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables you to list promotion stacks irrespective of the campaign they are associated with.  You can use filters in the query parameters to specify the stacks to be returned in the response. # Advanced filters for fetching promotion stacks  
     * List Promotion Stacks
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [createdAt] A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * @param [updatedAt] A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z
     */
    public listAllPromotionStacks(limit?: number, page?: number, order?: ParameterOrderListAllPromotionStacks, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, _options?: PromiseConfigurationOptions): Promise<PromotionsStacksListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listAllPromotionStacks(limit, page, order, createdAt, updatedAt, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables you to list promotion stacks from a specified campaign.
     * List Promotion Stacks in Campaign
     * @param campaignId Unique campaign ID.
     */
    public listPromotionStacksInCampaignWithHttpInfo(campaignId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PromotionsStacksListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listPromotionStacksInCampaignWithHttpInfo(campaignId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables you to list promotion stacks from a specified campaign.
     * List Promotion Stacks in Campaign
     * @param campaignId Unique campaign ID.
     */
    public listPromotionStacksInCampaign(campaignId: string, _options?: PromiseConfigurationOptions): Promise<PromotionsStacksListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listPromotionStacksInCampaign(campaignId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables you to list promotion tiers.
     * List Promotion Tiers
     * @param [isAvailable] This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listPromotionTiersWithHttpInfo(isAvailable?: boolean, limit?: number, page?: number, order?: ParameterOrderListPromotionTiers, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PromotionsTiersListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listPromotionTiersWithHttpInfo(isAvailable, limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables you to list promotion tiers.
     * List Promotion Tiers
     * @param [isAvailable] This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listPromotionTiers(isAvailable?: boolean, limit?: number, page?: number, order?: ParameterOrderListPromotionTiers, _options?: PromiseConfigurationOptions): Promise<PromotionsTiersListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listPromotionTiers(isAvailable, limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables you to list promotion tiers from a specified campaign.
     * List Promotion Tiers from Campaign
     * @param campaignId Unique campaign ID assigned by Voucherify.
     */
    public listPromotionTiersFromCampaignWithHttpInfo(campaignId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PromotionsTiersListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listPromotionTiersFromCampaignWithHttpInfo(campaignId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method enables you to list promotion tiers from a specified campaign.
     * List Promotion Tiers from Campaign
     * @param campaignId Unique campaign ID assigned by Voucherify.
     */
    public listPromotionTiersFromCampaign(campaignId: string, _options?: PromiseConfigurationOptions): Promise<PromotionsTiersListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listPromotionTiersFromCampaign(campaignId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This methods allows for editing an existing stack.
     * Update Promotion Stack
     * @param campaignId ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * @param stackId Promotion stack ID.
     * @param [promotionsStacksUpdateRequestBody] Specify the promotion stack parameters that you would like to update.
     */
    public updatePromotionStackWithHttpInfo(campaignId: string, stackId: string, promotionsStacksUpdateRequestBody?: PromotionsStacksUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PromotionsStacksUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updatePromotionStackWithHttpInfo(campaignId, stackId, promotionsStacksUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This methods allows for editing an existing stack.
     * Update Promotion Stack
     * @param campaignId ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * @param stackId Promotion stack ID.
     * @param [promotionsStacksUpdateRequestBody] Specify the promotion stack parameters that you would like to update.
     */
    public updatePromotionStack(campaignId: string, stackId: string, promotionsStacksUpdateRequestBody?: PromotionsStacksUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<PromotionsStacksUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updatePromotionStack(campaignId, stackId, promotionsStacksUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method updates a promotion tier.
     * Update Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     * @param [promotionsTiersUpdateRequestBody] Specify the promotion tier parameters that you would like to update.
     */
    public updatePromotionTierWithHttpInfo(promotionTierId: string, promotionsTiersUpdateRequestBody?: PromotionsTiersUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PromotionsTiersUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updatePromotionTierWithHttpInfo(promotionTierId, promotionsTiersUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method updates a promotion tier.
     * Update Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     * @param [promotionsTiersUpdateRequestBody] Specify the promotion tier parameters that you would like to update.
     */
    public updatePromotionTier(promotionTierId: string, promotionsTiersUpdateRequestBody?: PromotionsTiersUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<PromotionsTiersUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updatePromotionTier(promotionTierId, promotionsTiersUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservablePublicationsApi } from './ObservableAPI';

import { PublicationsApiRequestFactory, PublicationsApiResponseProcessor} from "../apis/PublicationsApi";
export class PromisePublicationsApi {
    private api: ObservablePublicationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicationsApiRequestFactory,
        responseProcessor?: PublicationsApiResponseProcessor
    ) {
        this.api = new ObservablePublicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This method selects vouchers that are suitable for publication, adds a publish entry and returns the publication. A voucher is suitable for publication when its active and hasnt been published yet.    🚧 Clearly define the source of the voucher  You must clearly define which source you want to publish the voucher code from. It can either be a code from a campaign or a specific voucher identified by a code.    🚧 Publish multiple vouchers  In case you want to publish multiple vouchers within a single publication, you need to specify the campaign name and number of vouchers you want to publish.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use an **auto-update** campaign.
     * Create Publication
     * @param [joinOnce] Through this flag, you can control if a particular person gets only one and always the same code even if the app sends multiple publication requests. It means that if you have a referral program, a referrer is assigned only to one code if an integration sends publication requests more than once for the same customer.
     * @param [publicationsCreateRequestBody] Specify the publication parameters.
     */
    public createPublicationWithHttpInfo(joinOnce?: boolean, publicationsCreateRequestBody?: PublicationsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicationsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createPublicationWithHttpInfo(joinOnce, publicationsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method selects vouchers that are suitable for publication, adds a publish entry and returns the publication. A voucher is suitable for publication when its active and hasnt been published yet.    🚧 Clearly define the source of the voucher  You must clearly define which source you want to publish the voucher code from. It can either be a code from a campaign or a specific voucher identified by a code.    🚧 Publish multiple vouchers  In case you want to publish multiple vouchers within a single publication, you need to specify the campaign name and number of vouchers you want to publish.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use an **auto-update** campaign.
     * Create Publication
     * @param [joinOnce] Through this flag, you can control if a particular person gets only one and always the same code even if the app sends multiple publication requests. It means that if you have a referral program, a referrer is assigned only to one code if an integration sends publication requests more than once for the same customer.
     * @param [publicationsCreateRequestBody] Specify the publication parameters.
     */
    public createPublication(joinOnce?: boolean, publicationsCreateRequestBody?: PublicationsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<PublicationsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createPublication(joinOnce, publicationsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method selects vouchers that are suitable for publication, adds a publish entry and returns the publication. A voucher is suitable for publication when its active and hasnt been published yet.  ❗️ Limited access  Access to this endpoint is limited. This endpoint is designed for specific integrations and the API keys need to be configured to access this endpoint. Navigate to the **Dashboard** &rarr; **Project Settings** &rarr; **General** &rarr; **Integration Keys** to set up a pair of API keys and use them to send the request.    🚧 Clearly define the source of the voucher  You must clearly define which source you want to publish the voucher code from. It can either be a code from a campaign or a specific voucher identified by a code.    🚧 Publish multiple vouchers  This endpoint does not support the publishing of multiple vouchers from a single campaign. In case you want to publish multiple vouchers within a single publication, you need to use a [dedicated endpoint](/api-reference/publications/create-publication).    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use an **auto-update** campaign.   # Example Request      ❗️ Required    Query param voucher OR campaign MUST be filled out. If you provide both, campaign param will be skipped.
     * Create Publication with GET
     * @param customer Contains information about the customer to whom the publication was directed.
     * @param [joinOnce] Through this flag, you can control if a particular person gets only one and always the same code even if the app sends multiple publication requests. It means that if you have a referral program, a referrer is assigned only to one code if an integration sends publication requests more than once for the same customer.
     * @param [voucher] Code of voucher being published.
     * @param [campaign] Create publication with campaign.
     * @param [sourceId] The merchants publication ID if it is different from the Voucherify publication ID. Its an optional tracking identifier of a publication. It is really useful in case of an integration between multiple systems. It can be a publication ID from a CRM system, database or 3rd-party service. If source_id is provided only 1 voucher can be published per request.
     * @param [metadata] The metadata object stores all custom attributes assigned to the publication. A set of key/value pairs that you can attach to a publication object. It can be useful for storing additional information about the publication in a structured format.
     */
    public createPublication1WithHttpInfo(customer: Customer, joinOnce?: boolean, voucher?: string, campaign?: CreatePublicationCampaign, sourceId?: string, metadata?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicationsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createPublication1WithHttpInfo(customer, joinOnce, voucher, campaign, sourceId, metadata, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method selects vouchers that are suitable for publication, adds a publish entry and returns the publication. A voucher is suitable for publication when its active and hasnt been published yet.  ❗️ Limited access  Access to this endpoint is limited. This endpoint is designed for specific integrations and the API keys need to be configured to access this endpoint. Navigate to the **Dashboard** &rarr; **Project Settings** &rarr; **General** &rarr; **Integration Keys** to set up a pair of API keys and use them to send the request.    🚧 Clearly define the source of the voucher  You must clearly define which source you want to publish the voucher code from. It can either be a code from a campaign or a specific voucher identified by a code.    🚧 Publish multiple vouchers  This endpoint does not support the publishing of multiple vouchers from a single campaign. In case you want to publish multiple vouchers within a single publication, you need to use a [dedicated endpoint](/api-reference/publications/create-publication).    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use an **auto-update** campaign.   # Example Request      ❗️ Required    Query param voucher OR campaign MUST be filled out. If you provide both, campaign param will be skipped.
     * Create Publication with GET
     * @param customer Contains information about the customer to whom the publication was directed.
     * @param [joinOnce] Through this flag, you can control if a particular person gets only one and always the same code even if the app sends multiple publication requests. It means that if you have a referral program, a referrer is assigned only to one code if an integration sends publication requests more than once for the same customer.
     * @param [voucher] Code of voucher being published.
     * @param [campaign] Create publication with campaign.
     * @param [sourceId] The merchants publication ID if it is different from the Voucherify publication ID. Its an optional tracking identifier of a publication. It is really useful in case of an integration between multiple systems. It can be a publication ID from a CRM system, database or 3rd-party service. If source_id is provided only 1 voucher can be published per request.
     * @param [metadata] The metadata object stores all custom attributes assigned to the publication. A set of key/value pairs that you can attach to a publication object. It can be useful for storing additional information about the publication in a structured format.
     */
    public createPublication1(customer: Customer, joinOnce?: boolean, voucher?: string, campaign?: CreatePublicationCampaign, sourceId?: string, metadata?: any, _options?: PromiseConfigurationOptions): Promise<PublicationsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createPublication1(customer, joinOnce, voucher, campaign, sourceId, metadata, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a list of publications. To return a **particular** publication, you can use the source_id query parameter and provide the source_id of the publication you are looking for specifically. # Pagination  🚧 Important!  If you want to scroll through a huge set of records, it is recommended to use the [Exports API](/api-reference/exports/create-export). This API will return an error page_over_limit if you reach a page above 1000. # Filter Query The filters query parameter allows for joining multiple parameters with logical operators. The syntax looks as follows:  ## Examples  
     * List Publications
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [campaign] Filters by a given campaign name.
     * @param [customer] Filters by a unique customer ID.
     * @param [voucher] Filters by a given voucher code.
     * @param [result] Filters by a publication result.
     * @param [voucherType] Filters by a voucher type.
     * @param [isReferralCode] This filter works only for the true option. If set to true, the query returns only publications of codes from referral campaigns. 
     * @param [filters] Filters for listing publications.
     * @param [sourceId] Using this endpoint with a particular publication source_id, which was sent with the original request to create a publication, returns in the response, exactly the same code published initially because the code was assigned to the given publication. As a result, you can use this endpoint as a reference and return a code that was assigned in a publication by using a particular source_id.
     */
    public listPublicationsWithHttpInfo(limit?: number, page?: number, order?: ParameterOrderListPublications, campaign?: string, customer?: string, voucher?: string, result?: ParameterResultListPublications, voucherType?: ParameterVoucherTypeListPublications, isReferralCode?: boolean, filters?: ParameterFiltersListPublications, sourceId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicationsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listPublicationsWithHttpInfo(limit, page, order, campaign, customer, voucher, result, voucherType, isReferralCode, filters, sourceId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a list of publications. To return a **particular** publication, you can use the source_id query parameter and provide the source_id of the publication you are looking for specifically. # Pagination  🚧 Important!  If you want to scroll through a huge set of records, it is recommended to use the [Exports API](/api-reference/exports/create-export). This API will return an error page_over_limit if you reach a page above 1000. # Filter Query The filters query parameter allows for joining multiple parameters with logical operators. The syntax looks as follows:  ## Examples  
     * List Publications
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [campaign] Filters by a given campaign name.
     * @param [customer] Filters by a unique customer ID.
     * @param [voucher] Filters by a given voucher code.
     * @param [result] Filters by a publication result.
     * @param [voucherType] Filters by a voucher type.
     * @param [isReferralCode] This filter works only for the true option. If set to true, the query returns only publications of codes from referral campaigns. 
     * @param [filters] Filters for listing publications.
     * @param [sourceId] Using this endpoint with a particular publication source_id, which was sent with the original request to create a publication, returns in the response, exactly the same code published initially because the code was assigned to the given publication. As a result, you can use this endpoint as a reference and return a code that was assigned in a publication by using a particular source_id.
     */
    public listPublications(limit?: number, page?: number, order?: ParameterOrderListPublications, campaign?: string, customer?: string, voucher?: string, result?: ParameterResultListPublications, voucherType?: ParameterVoucherTypeListPublications, isReferralCode?: boolean, filters?: ParameterFiltersListPublications, sourceId?: string, _options?: PromiseConfigurationOptions): Promise<PublicationsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listPublications(limit, page, order, campaign, customer, voucher, result, voucherType, isReferralCode, filters, sourceId, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableQualificationsApi } from './ObservableAPI';

import { QualificationsApiRequestFactory, QualificationsApiResponseProcessor} from "../apis/QualificationsApi";
export class PromiseQualificationsApi {
    private api: ObservableQualificationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: QualificationsApiRequestFactory,
        responseProcessor?: QualificationsApiResponseProcessor
    ) {
        this.api = new ObservableQualificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *   🚧 The Qualifications endpoint ignores the rules checking:    - Limit of total redeemed discount amount per campaign  - Limit of total redemptions count per campaign  - Redemptions per customer  - Redemptions per customer in a campaign  Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read [the dedicated guide](/guides/checking-eligibility) to learn about some use cases this endpoint can cover. # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.
     * Check Eligibility
     * @param [qualificationsCheckEligibilityRequestBody] Define order and customer context.
     */
    public checkEligibilityWithHttpInfo(qualificationsCheckEligibilityRequestBody?: QualificationsCheckEligibilityRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QualificationsCheckEligibilityResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.checkEligibilityWithHttpInfo(qualificationsCheckEligibilityRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     *   🚧 The Qualifications endpoint ignores the rules checking:    - Limit of total redeemed discount amount per campaign  - Limit of total redemptions count per campaign  - Redemptions per customer  - Redemptions per customer in a campaign  Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read [the dedicated guide](/guides/checking-eligibility) to learn about some use cases this endpoint can cover. # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.
     * Check Eligibility
     * @param [qualificationsCheckEligibilityRequestBody] Define order and customer context.
     */
    public checkEligibility(qualificationsCheckEligibilityRequestBody?: QualificationsCheckEligibilityRequestBody, _options?: PromiseConfigurationOptions): Promise<QualificationsCheckEligibilityResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.checkEligibility(qualificationsCheckEligibilityRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableRedemptionsApi } from './ObservableAPI';

import { RedemptionsApiRequestFactory, RedemptionsApiResponseProcessor} from "../apis/RedemptionsApi";
export class PromiseRedemptionsApi {
    private api: ObservableRedemptionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RedemptionsApiRequestFactory,
        responseProcessor?: RedemptionsApiResponseProcessor
    ) {
        this.api = new ObservableRedemptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return a redemption or redemption rollback object. This object can either be a successfull or failed redemption or redemption rollback.
     * Get Redemption
     * @param redemptionId ID of previously created redemption.
     */
    public getRedemptionWithHttpInfo(redemptionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RedemptionsGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getRedemptionWithHttpInfo(redemptionId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Return a redemption or redemption rollback object. This object can either be a successfull or failed redemption or redemption rollback.
     * Get Redemption
     * @param redemptionId ID of previously created redemption.
     */
    public getRedemption(redemptionId: string, _options?: PromiseConfigurationOptions): Promise<RedemptionsGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getRedemption(redemptionId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve the number of times a voucher was redeemed and each of the redemption details.
     * Get Voucher\'s Redemptions
     * @param code A **code** that identifies the voucher.
     */
    public getVoucherRedemptionsWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersRedemptionGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getVoucherRedemptionsWithHttpInfo(code, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve the number of times a voucher was redeemed and each of the redemption details.
     * Get Voucher\'s Redemptions
     * @param code A **code** that identifies the voucher.
     */
    public getVoucherRedemptions(code: string, _options?: PromiseConfigurationOptions): Promise<VouchersRedemptionGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getVoucherRedemptions(code, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of redemptions previously created. The redemptions are returned in a sorted order, with the most recent redemptions appearing first. The response returns a list of redemptions of all vouchers.  # Filtering results The result can be narrowed according to specified (or default) filters, for example, you can sort redemptions by date: https://api.voucherify.io/v1/redemptions?limit 3&[created_at][before] 2017-09-08T13:52:18.227Z. A filter based on the object created_at field narrows down the results and lists redemptions done before or after a particular date time. You can use the following options: [created_at][after], [created_at][before]. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z. # Failed Redemptions A redemption may fail for various reasons. You can figure out an exact reason from the failure_code: - resource_not_found - voucher with given code does not exist - voucher_not_active - voucher is not active yet (before start date) - voucher_expired - voucher has already expired (after expiration date) - voucher_disabled -  voucher has been disabled (active: false) - quantity_exceeded - vouchers redemptions limit has been exceeded - gift_amount_exceeded - gift amount has been exceeded - customer_rules_violated - customer did not match the segment - order_rules_violated - order did not match validation rules - invalid_order - order was specified incorrectly - invalid_amount - order amount was specified incorrectly - missing_amount - order amount was not specified - missing_order_items - order items were not specified - missing_customer - customer was not specified
     * List Redemptions
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1, the highest value is 99.
     * @param [result] A filter on the list based on the redemption result. Available options are: SUCCESS, FAILURE. You can provide multiple values by repeating the param.
     * @param [campaign] A filter by the campaign **name** that the redemption resources originate from.
     * @param [customer] Return redemptions performed by the customer with given id or source_id.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [createdAt] A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * @param [filters] Filters for listing responses.
     */
    public listRedemptionsWithHttpInfo(limit?: number, page?: number, result?: string, campaign?: string, customer?: string, order?: ParameterOrderListRedemptions, createdAt?: ParameterCreatedBeforeAfter, filters?: ParameterFiltersListRedemptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RedemptionsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listRedemptionsWithHttpInfo(limit, page, result, campaign, customer, order, createdAt, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of redemptions previously created. The redemptions are returned in a sorted order, with the most recent redemptions appearing first. The response returns a list of redemptions of all vouchers.  # Filtering results The result can be narrowed according to specified (or default) filters, for example, you can sort redemptions by date: https://api.voucherify.io/v1/redemptions?limit 3&[created_at][before] 2017-09-08T13:52:18.227Z. A filter based on the object created_at field narrows down the results and lists redemptions done before or after a particular date time. You can use the following options: [created_at][after], [created_at][before]. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z. # Failed Redemptions A redemption may fail for various reasons. You can figure out an exact reason from the failure_code: - resource_not_found - voucher with given code does not exist - voucher_not_active - voucher is not active yet (before start date) - voucher_expired - voucher has already expired (after expiration date) - voucher_disabled -  voucher has been disabled (active: false) - quantity_exceeded - vouchers redemptions limit has been exceeded - gift_amount_exceeded - gift amount has been exceeded - customer_rules_violated - customer did not match the segment - order_rules_violated - order did not match validation rules - invalid_order - order was specified incorrectly - invalid_amount - order amount was specified incorrectly - missing_amount - order amount was not specified - missing_order_items - order items were not specified - missing_customer - customer was not specified
     * List Redemptions
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1, the highest value is 99.
     * @param [result] A filter on the list based on the redemption result. Available options are: SUCCESS, FAILURE. You can provide multiple values by repeating the param.
     * @param [campaign] A filter by the campaign **name** that the redemption resources originate from.
     * @param [customer] Return redemptions performed by the customer with given id or source_id.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [createdAt] A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * @param [filters] Filters for listing responses.
     */
    public listRedemptions(limit?: number, page?: number, result?: string, campaign?: string, customer?: string, order?: ParameterOrderListRedemptions, createdAt?: ParameterCreatedBeforeAfter, filters?: ParameterFiltersListRedemptions, _options?: PromiseConfigurationOptions): Promise<RedemptionsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listRedemptions(limit, page, result, campaign, customer, order, createdAt, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:   API keys with a Merchant role cant use this endpoint.  📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).      📘 Also available on client-side  This method is also accessible through public keys which you can use in client-side​ apps: mobile and web browser apps. Go to the dedicated [endpoint](/api-reference/client-side/redeem-stackable-discounts-client-side) to learn more.  - Use X-Client-Application-Id as the application ID header.  - Use X-Client-Token as the appliction secret key header.  - Use client-side base URL.  - Use an origin header for your custom domain.
     * Redeem Stackable Discounts
     * @param [redemptionsRedeemRequestBody]
     */
    public redeemStackedDiscountsWithHttpInfo(redemptionsRedeemRequestBody?: RedemptionsRedeemRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RedemptionsRedeemResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.redeemStackedDiscountsWithHttpInfo(redemptionsRedeemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:   API keys with a Merchant role cant use this endpoint.  📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).      📘 Also available on client-side  This method is also accessible through public keys which you can use in client-side​ apps: mobile and web browser apps. Go to the dedicated [endpoint](/api-reference/client-side/redeem-stackable-discounts-client-side) to learn more.  - Use X-Client-Application-Id as the application ID header.  - Use X-Client-Token as the appliction secret key header.  - Use client-side base URL.  - Use an origin header for your custom domain.
     * Redeem Stackable Discounts
     * @param [redemptionsRedeemRequestBody]
     */
    public redeemStackedDiscounts(redemptionsRedeemRequestBody?: RedemptionsRedeemRequestBody, _options?: PromiseConfigurationOptions): Promise<RedemptionsRedeemResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.redeemStackedDiscounts(redemptionsRedeemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Your business logic may include a case when you need to undo a redemption. You can revert a redemption by calling this API endpoint. This endpoint rolls back only single redemptions, meaning those that are not stacked. Stacked redemptions belong to a parent redemption. To roll back a parent redemption, including all of its individual redemptions, use the [POST Rollback Stackable Redemptions](/api-reference/redemptions/rollback-stackable-redemptions)  🚧  You can roll back a redemption up to 3 months back.   # Effect  The operation  - creates a rollback entry in vouchers redemption history (redemption.redemption_entries) and  - gives 1 redemption back to the pool (decreases redeemed_quantity by 1).  # Returned funds  In case of *gift card vouchers*, this method returns funds back according to the source redemption. In case of *loyalty card vouchers*, this method returns points back according to the source redemption.
     * Rollback Redemption
     * @param redemptionId The original redemption ID to be rolled back (undone).
     * @param [reason] Reason for the rollback.
     * @param [trackingId] Customers source_id.
     * @param [redemptionsRollbackCreateRequestBody] Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
     */
    public rollbackRedemptionWithHttpInfo(redemptionId: string, reason?: string, trackingId?: string, redemptionsRollbackCreateRequestBody?: RedemptionsRollbackCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RedemptionsRollbackCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.rollbackRedemptionWithHttpInfo(redemptionId, reason, trackingId, redemptionsRollbackCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Your business logic may include a case when you need to undo a redemption. You can revert a redemption by calling this API endpoint. This endpoint rolls back only single redemptions, meaning those that are not stacked. Stacked redemptions belong to a parent redemption. To roll back a parent redemption, including all of its individual redemptions, use the [POST Rollback Stackable Redemptions](/api-reference/redemptions/rollback-stackable-redemptions)  🚧  You can roll back a redemption up to 3 months back.   # Effect  The operation  - creates a rollback entry in vouchers redemption history (redemption.redemption_entries) and  - gives 1 redemption back to the pool (decreases redeemed_quantity by 1).  # Returned funds  In case of *gift card vouchers*, this method returns funds back according to the source redemption. In case of *loyalty card vouchers*, this method returns points back according to the source redemption.
     * Rollback Redemption
     * @param redemptionId The original redemption ID to be rolled back (undone).
     * @param [reason] Reason for the rollback.
     * @param [trackingId] Customers source_id.
     * @param [redemptionsRollbackCreateRequestBody] Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
     */
    public rollbackRedemption(redemptionId: string, reason?: string, trackingId?: string, redemptionsRollbackCreateRequestBody?: RedemptionsRollbackCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<RedemptionsRollbackCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.rollbackRedemption(redemptionId, reason, trackingId, redemptionsRollbackCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Rollback a stackable redemption. When you roll back a stacked redemption, all child redemptions will be rolled back. Provide the parent redemption ID as the path parameter. However, you can use this endpoint to roll back a single redemption that does not have a parent, similarly to [POST Rollback redemption](/api-reference/redemptions/rollback-redemption). 🚧   You can roll back a redemption up to 3 months back.
     * Rollback Stackable Redemptions
     * @param parentRedemptionId Unique identifier of a parent redemption, e.g. r_JQfm73zWSJFQxs3bGxweYjgm.
     * @param [reason] Reason for the rollback.
     * @param [trackingId] Customers source_id.
     * @param [redemptionsRollbacksCreateRequestBody] Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
     */
    public rollbackStackedRedemptionsWithHttpInfo(parentRedemptionId: string, reason?: string, trackingId?: string, redemptionsRollbacksCreateRequestBody?: RedemptionsRollbacksCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RedemptionsRollbacksCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.rollbackStackedRedemptionsWithHttpInfo(parentRedemptionId, reason, trackingId, redemptionsRollbacksCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Rollback a stackable redemption. When you roll back a stacked redemption, all child redemptions will be rolled back. Provide the parent redemption ID as the path parameter. However, you can use this endpoint to roll back a single redemption that does not have a parent, similarly to [POST Rollback redemption](/api-reference/redemptions/rollback-redemption). 🚧   You can roll back a redemption up to 3 months back.
     * Rollback Stackable Redemptions
     * @param parentRedemptionId Unique identifier of a parent redemption, e.g. r_JQfm73zWSJFQxs3bGxweYjgm.
     * @param [reason] Reason for the rollback.
     * @param [trackingId] Customers source_id.
     * @param [redemptionsRollbacksCreateRequestBody] Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
     */
    public rollbackStackedRedemptions(parentRedemptionId: string, reason?: string, trackingId?: string, redemptionsRollbacksCreateRequestBody?: RedemptionsRollbacksCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<RedemptionsRollbacksCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.rollbackStackedRedemptions(parentRedemptionId, reason, trackingId, redemptionsRollbacksCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableReferralsApi } from './ObservableAPI';

import { ReferralsApiRequestFactory, ReferralsApiResponseProcessor} from "../apis/ReferralsApi";
export class PromiseReferralsApi {
    private api: ObservableReferralsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReferralsApiRequestFactory,
        responseProcessor?: ReferralsApiResponseProcessor
    ) {
        this.api = new ObservableReferralsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.  📘 Alternative endpoint This endpoint is an alternative to the [Add Referral Code Holders endpoint](/api-reference/referrals/add-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Add Referral Code Holders
     * @param memberId Unique referral code or its identifier.
     * @param [referralsMembersHoldersCreateInBulkRequestBody] Specify the customer data to be upserted as redeemable holders.
     */
    public referralsAddHoldersWithHttpInfo(memberId: string, referralsMembersHoldersCreateInBulkRequestBody?: ReferralsMembersHoldersCreateInBulkRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReferralsMembersHoldersCreateInBulkResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.referralsAddHoldersWithHttpInfo(memberId, referralsMembersHoldersCreateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.  📘 Alternative endpoint This endpoint is an alternative to the [Add Referral Code Holders endpoint](/api-reference/referrals/add-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Add Referral Code Holders
     * @param memberId Unique referral code or its identifier.
     * @param [referralsMembersHoldersCreateInBulkRequestBody] Specify the customer data to be upserted as redeemable holders.
     */
    public referralsAddHolders(memberId: string, referralsMembersHoldersCreateInBulkRequestBody?: ReferralsMembersHoldersCreateInBulkRequestBody, _options?: PromiseConfigurationOptions): Promise<ReferralsMembersHoldersCreateInBulkResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.referralsAddHolders(memberId, referralsMembersHoldersCreateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.
     * Add Referral Code Holders with Campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param [referralsMembersHoldersCreateInBulkRequestBody] Specify the customer data to be upserted as redeemable holders.
     */
    public referralsAddHolders1WithHttpInfo(campaignId: string, memberId: string, referralsMembersHoldersCreateInBulkRequestBody?: ReferralsMembersHoldersCreateInBulkRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReferralsMembersHoldersCreateInBulkResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.referralsAddHolders1WithHttpInfo(campaignId, memberId, referralsMembersHoldersCreateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.
     * Add Referral Code Holders with Campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param [referralsMembersHoldersCreateInBulkRequestBody] Specify the customer data to be upserted as redeemable holders.
     */
    public referralsAddHolders1(campaignId: string, memberId: string, referralsMembersHoldersCreateInBulkRequestBody?: ReferralsMembersHoldersCreateInBulkRequestBody, _options?: PromiseConfigurationOptions): Promise<ReferralsMembersHoldersCreateInBulkResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.referralsAddHolders1(campaignId, memberId, referralsMembersHoldersCreateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves all the redeemables that have been assigned to the customer. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)
     * List Referral Code Holders with campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * @param [filters] Filters for listing customer redeemables.
     */
    public referralsCodeHoldersWithHttpInfo(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListReferralsRedeemableHolders, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReferralsMembersHoldersListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.referralsCodeHoldersWithHttpInfo(campaignId, memberId, limit, order, startingAfterId, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves all the redeemables that have been assigned to the customer. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)
     * List Referral Code Holders with campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * @param [filters] Filters for listing customer redeemables.
     */
    public referralsCodeHolders(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListReferralsRedeemableHolders, _options?: PromiseConfigurationOptions): Promise<ReferralsMembersHoldersListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.referralsCodeHolders(campaignId, memberId, limit, order, startingAfterId, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the holders of the referral code from a referral campaign. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)  📘 Alternative endpoint This endpoint is an alternative to the [List Member Holders endpoint](/api-reference/referrals/list-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * List Referral Code Holders
     * @param memberId Unique referral code or its identifier.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * @param [filters] Filters for listing customer redeemables.
     */
    public referralsCodeHolders1WithHttpInfo(memberId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListReferralsRedeemableHolders, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReferralsMembersHoldersListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.referralsCodeHolders1WithHttpInfo(memberId, limit, order, startingAfterId, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the holders of the referral code from a referral campaign. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)  📘 Alternative endpoint This endpoint is an alternative to the [List Member Holders endpoint](/api-reference/referrals/list-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * List Referral Code Holders
     * @param memberId Unique referral code or its identifier.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * @param [filters] Filters for listing customer redeemables.
     */
    public referralsCodeHolders1(memberId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListReferralsRedeemableHolders, _options?: PromiseConfigurationOptions): Promise<ReferralsMembersHoldersListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.referralsCodeHolders1(memberId, limit, order, startingAfterId, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  📘 Alternative endpoint This endpoint is an alternative to the [Remove Referral Card Holder endpoint](/api-reference/referrals/remove-referral-card-holder-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Remove Referral Card Holder
     * @param memberId Unique referral code or its identifier.
     * @param holderId Unique identifier of a redeemable holder.
     */
    public referralsRemoveHolderWithHttpInfo(memberId: string, holderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.referralsRemoveHolderWithHttpInfo(memberId, holderId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  📘 Alternative endpoint This endpoint is an alternative to the [Remove Referral Card Holder endpoint](/api-reference/referrals/remove-referral-card-holder-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Remove Referral Card Holder
     * @param memberId Unique referral code or its identifier.
     * @param holderId Unique identifier of a redeemable holder.
     */
    public referralsRemoveHolder(memberId: string, holderId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.referralsRemoveHolder(memberId, holderId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)
     * Remove Referral Card Holder with campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param holderId Unique identifier of a redeemable holder.
     */
    public referralsRemoveHolder1WithHttpInfo(campaignId: string, memberId: string, holderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.referralsRemoveHolder1WithHttpInfo(campaignId, memberId, holderId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)
     * Remove Referral Card Holder with campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param holderId Unique identifier of a redeemable holder.
     */
    public referralsRemoveHolder1(campaignId: string, memberId: string, holderId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.referralsRemoveHolder1(campaignId, memberId, holderId, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableRewardsApi } from './ObservableAPI';

import { RewardsApiRequestFactory, RewardsApiResponseProcessor} from "../apis/RewardsApi";
export class PromiseRewardsApi {
    private api: ObservableRewardsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RewardsApiRequestFactory,
        responseProcessor?: RewardsApiResponseProcessor
    ) {
        this.api = new ObservableRewardsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new reward.
     * Create Reward
     * @param [rewardsCreateRequestBody] Define parameters of the new reward.
     */
    public createRewardWithHttpInfo(rewardsCreateRequestBody?: RewardsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RewardsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createRewardWithHttpInfo(rewardsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Create a new reward.
     * Create Reward
     * @param [rewardsCreateRequestBody] Define parameters of the new reward.
     */
    public createReward(rewardsCreateRequestBody?: RewardsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<RewardsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createReward(rewardsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Assigns a reward to a specified loyalty campaign.
     * Create Reward Assignment
     * @param rewardId A unique reward ID.
     * @param [rewardsAssignmentsCreateRequestBody] Provide the campaign ID of the campaign to which the reward is to be assigned and define the cost of the reward in terms of loyalty points.
     */
    public createRewardAssignmentWithHttpInfo(rewardId: string, rewardsAssignmentsCreateRequestBody?: RewardsAssignmentsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RewardsAssignmentsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createRewardAssignmentWithHttpInfo(rewardId, rewardsAssignmentsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Assigns a reward to a specified loyalty campaign.
     * Create Reward Assignment
     * @param rewardId A unique reward ID.
     * @param [rewardsAssignmentsCreateRequestBody] Provide the campaign ID of the campaign to which the reward is to be assigned and define the cost of the reward in terms of loyalty points.
     */
    public createRewardAssignment(rewardId: string, rewardsAssignmentsCreateRequestBody?: RewardsAssignmentsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<RewardsAssignmentsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createRewardAssignment(rewardId, rewardsAssignmentsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Delete a reward.
     * Delete Reward
     * @param rewardId A unique reward ID.
     */
    public deleteRewardWithHttpInfo(rewardId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteRewardWithHttpInfo(rewardId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Delete a reward.
     * Delete Reward
     * @param rewardId A unique reward ID.
     */
    public deleteReward(rewardId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteReward(rewardId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a reward assignment for a particular reward.
     * Delete Reward Assignment
     * @param rewardId A unique reward ID.
     * @param assignmentId A unique reward assignment ID.
     */
    public deleteRewardAssignmentWithHttpInfo(rewardId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteRewardAssignmentWithHttpInfo(rewardId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a reward assignment for a particular reward.
     * Delete Reward Assignment
     * @param rewardId A unique reward ID.
     * @param assignmentId A unique reward assignment ID.
     */
    public deleteRewardAssignment(rewardId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteRewardAssignment(rewardId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a reward by the reward ID.
     * Get Reward
     * @param rewardId A unique reward ID.
     */
    public getRewardWithHttpInfo(rewardId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Reward>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getRewardWithHttpInfo(rewardId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a reward by the reward ID.
     * Get Reward
     * @param rewardId A unique reward ID.
     */
    public getReward(rewardId: string, _options?: PromiseConfigurationOptions): Promise<Reward> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getReward(rewardId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a reward assignment.
     * Get Reward Assignment
     * @param rewardId A unique reward ID.
     * @param assignmentId A unique reward assignment ID.
     */
    public getRewardAssignmentWithHttpInfo(rewardId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RewardsAssignmentsGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getRewardAssignmentWithHttpInfo(rewardId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve a reward assignment.
     * Get Reward Assignment
     * @param rewardId A unique reward ID.
     * @param assignmentId A unique reward assignment ID.
     */
    public getRewardAssignment(rewardId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<RewardsAssignmentsGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getRewardAssignment(rewardId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve reward assignments by the reward ID.
     * List Reward Assignments
     * @param rewardId A unique reward ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     */
    public listRewardAssignmentsWithHttpInfo(rewardId: string, limit?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RewardsAssignmentsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listRewardAssignmentsWithHttpInfo(rewardId, limit, page, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve reward assignments by the reward ID.
     * List Reward Assignments
     * @param rewardId A unique reward ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     */
    public listRewardAssignments(rewardId: string, limit?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<RewardsAssignmentsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listRewardAssignments(rewardId, limit, page, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve rewards.
     * List Rewards
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [assignmentId] A unique reward assignment ID. Use this parameter to get the reward details in the context of an assignment ID.
     */
    public listRewardsWithHttpInfo(limit?: number, page?: number, assignmentId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RewardsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listRewardsWithHttpInfo(limit, page, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve rewards.
     * List Rewards
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [assignmentId] A unique reward assignment ID. Use this parameter to get the reward details in the context of an assignment ID.
     */
    public listRewards(limit?: number, page?: number, assignmentId?: string, _options?: PromiseConfigurationOptions): Promise<RewardsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listRewards(limit, page, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Update the details of a reward.
     * Update Reward
     * @param rewardId A unique reward ID.
     * @param [rewardsUpdateRequestBody] Define the parameters to be updated for the reward.
     */
    public updateRewardWithHttpInfo(rewardId: string, rewardsUpdateRequestBody?: RewardsUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RewardsUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateRewardWithHttpInfo(rewardId, rewardsUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Update the details of a reward.
     * Update Reward
     * @param rewardId A unique reward ID.
     * @param [rewardsUpdateRequestBody] Define the parameters to be updated for the reward.
     */
    public updateReward(rewardId: string, rewardsUpdateRequestBody?: RewardsUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<RewardsUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateReward(rewardId, rewardsUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Update the number of points needed to successfully redeem the reward.
     * Update Reward Assignment
     * @param rewardId A unique reward ID.
     * @param assignmentId A unique reward assignment ID.
     * @param [rewardsAssignmentsUpdateRequestBody] Define the number of points required to exchange for the reward.
     */
    public updateRewardAssignmentWithHttpInfo(rewardId: string, assignmentId: string, rewardsAssignmentsUpdateRequestBody?: RewardsAssignmentsUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RewardsAssignmentsUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateRewardAssignmentWithHttpInfo(rewardId, assignmentId, rewardsAssignmentsUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Update the number of points needed to successfully redeem the reward.
     * Update Reward Assignment
     * @param rewardId A unique reward ID.
     * @param assignmentId A unique reward assignment ID.
     * @param [rewardsAssignmentsUpdateRequestBody] Define the number of points required to exchange for the reward.
     */
    public updateRewardAssignment(rewardId: string, assignmentId: string, rewardsAssignmentsUpdateRequestBody?: RewardsAssignmentsUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<RewardsAssignmentsUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateRewardAssignment(rewardId, assignmentId, rewardsAssignmentsUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableSegmentsApi } from './ObservableAPI';

import { SegmentsApiRequestFactory, SegmentsApiResponseProcessor} from "../apis/SegmentsApi";
export class PromiseSegmentsApi {
    private api: ObservableSegmentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SegmentsApiRequestFactory,
        responseProcessor?: SegmentsApiResponseProcessor
    ) {
        this.api = new ObservableSegmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a customer segment.  🚧 Limit on static segments  There is a cap on the number of customers that you can assign to a static segment: **20,000**. If you would like to create a bigger segment, then you can use the unlimited auto-update or passive segment instead and use some customer metadata to build this segment.  🚧 Limit on Active and Passive segments  You can create a maximum of 100 passive and active segments.
     * Create Segment
     * @param [segmentsCreateRequestBody] Specify the boundary conditions for the customer segment.
     */
    public createSegmentWithHttpInfo(segmentsCreateRequestBody?: SegmentsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SegmentsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createSegmentWithHttpInfo(segmentsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Create a customer segment.  🚧 Limit on static segments  There is a cap on the number of customers that you can assign to a static segment: **20,000**. If you would like to create a bigger segment, then you can use the unlimited auto-update or passive segment instead and use some customer metadata to build this segment.  🚧 Limit on Active and Passive segments  You can create a maximum of 100 passive and active segments.
     * Create Segment
     * @param [segmentsCreateRequestBody] Specify the boundary conditions for the customer segment.
     */
    public createSegment(segmentsCreateRequestBody?: SegmentsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<SegmentsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createSegment(segmentsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a customer segment.
     * Delete Segment
     * @param segmentId A unique customer segment ID.
     */
    public deleteSegmentWithHttpInfo(segmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteSegmentWithHttpInfo(segmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a customer segment.
     * Delete Segment
     * @param segmentId A unique customer segment ID.
     */
    public deleteSegment(segmentId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteSegment(segmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the segment with a given segment ID.
     * Get Segment
     * @param segmentId A unique customer segment ID.
     */
    public getSegmentWithHttpInfo(segmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SegmentsGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getSegmentWithHttpInfo(segmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the segment with a given segment ID.
     * Get Segment
     * @param segmentId A unique customer segment ID.
     */
    public getSegment(segmentId: string, _options?: PromiseConfigurationOptions): Promise<SegmentsGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getSegment(segmentId, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableTemplatesApi } from './ObservableAPI';

import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor} from "../apis/TemplatesApi";
export class PromiseTemplatesApi {
    private api: ObservableTemplatesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplatesApiRequestFactory,
        responseProcessor?: TemplatesApiResponseProcessor
    ) {
        this.api = new ObservableTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a promotion tier out of a discount campaign template and adds it to an existing promotion campaign. To add a promotion tier to a campaign, you need to provide the name in the request and the campaign ID. Other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an action or an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the promotion tier. When the promotion tier has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rule-assignment).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Add Promotion Tier From Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param [templatesCampaignsTierSetupCreateRequestBody] Only name and campaign_id are required. The rest of the fields will overwrite the template configuration.
     */
    public addTierFromTemplateWithHttpInfo(campaignTemplateId: string, templatesCampaignsTierSetupCreateRequestBody?: TemplatesCampaignsTierSetupCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatesCampaignsTierSetupCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.addTierFromTemplateWithHttpInfo(campaignTemplateId, templatesCampaignsTierSetupCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a promotion tier out of a discount campaign template and adds it to an existing promotion campaign. To add a promotion tier to a campaign, you need to provide the name in the request and the campaign ID. Other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an action or an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the promotion tier. When the promotion tier has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rule-assignment).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Add Promotion Tier From Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param [templatesCampaignsTierSetupCreateRequestBody] Only name and campaign_id are required. The rest of the fields will overwrite the template configuration.
     */
    public addTierFromTemplate(campaignTemplateId: string, templatesCampaignsTierSetupCreateRequestBody?: TemplatesCampaignsTierSetupCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<TemplatesCampaignsTierSetupCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.addTierFromTemplate(campaignTemplateId, templatesCampaignsTierSetupCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a campaign out of a campaign template. To create a campaign, you need to provide the name in the request, while other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the campaign. When the campaign has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rules-assignments).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign From Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param [templatesCampaignsCampaignSetupCreateRequestBody] Only name is required. The rest of the fields will overwrite the template configuration.
     */
    public createCampaignFromTemplateWithHttpInfo(campaignTemplateId: string, templatesCampaignsCampaignSetupCreateRequestBody?: TemplatesCampaignsCampaignSetupCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatesCampaignsCampaignSetupCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createCampaignFromTemplateWithHttpInfo(campaignTemplateId, templatesCampaignsCampaignSetupCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a campaign out of a campaign template. To create a campaign, you need to provide the name in the request, while other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the campaign. When the campaign has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rules-assignments).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign From Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param [templatesCampaignsCampaignSetupCreateRequestBody] Only name is required. The rest of the fields will overwrite the template configuration.
     */
    public createCampaignFromTemplate(campaignTemplateId: string, templatesCampaignsCampaignSetupCreateRequestBody?: TemplatesCampaignsCampaignSetupCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<TemplatesCampaignsCampaignSetupCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createCampaignFromTemplate(campaignTemplateId, templatesCampaignsCampaignSetupCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a template for a discount or gift campaign, or a promotion tier. A template stores campaign configuration **without** the following details: - Campaign name - Category - Code count The following elements are not supported by campaign templates: - Redeeming API keys - Redeeming users - Customer loyalty tier - Static segments  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template), - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign Template
     * @param [templatesCampaignsCreateRequestBody] Provide details for a campaign template
     */
    public createCampaignTemplateWithHttpInfo(templatesCampaignsCreateRequestBody?: TemplatesCampaignsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatesCampaignsCreateTemplateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createCampaignTemplateWithHttpInfo(templatesCampaignsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Creates a template for a discount or gift campaign, or a promotion tier. A template stores campaign configuration **without** the following details: - Campaign name - Category - Code count The following elements are not supported by campaign templates: - Redeeming API keys - Redeeming users - Customer loyalty tier - Static segments  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template), - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign Template
     * @param [templatesCampaignsCreateRequestBody] Provide details for a campaign template
     */
    public createCampaignTemplate(templatesCampaignsCreateRequestBody?: TemplatesCampaignsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<TemplatesCampaignsCreateTemplateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createCampaignTemplate(templatesCampaignsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes the campaign template permanently.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Delete Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     */
    public deleteCampaignTemplateWithHttpInfo(campaignTemplateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteCampaignTemplateWithHttpInfo(campaignTemplateId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes the campaign template permanently.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Delete Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     */
    public deleteCampaignTemplate(campaignTemplateId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteCampaignTemplate(campaignTemplateId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a campaign template available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Get Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     */
    public getCampaignTemplateWithHttpInfo(campaignTemplateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatesCampaignsGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getCampaignTemplateWithHttpInfo(campaignTemplateId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves a campaign template available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Get Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     */
    public getCampaignTemplate(campaignTemplateId: string, _options?: PromiseConfigurationOptions): Promise<TemplatesCampaignsGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getCampaignTemplate(campaignTemplateId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all campaign templates available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * List Campaign Templates
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [startingAfterId] A cursor for pagination. It retrieves the campaign templates created after a template with the given ID.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [includeTotal] If set to true, the response returns the number of all campaign templates, regardless of the applied filters or limits. Set to false by default.
     * @param [filters] Filters for listing templates.
     */
    public listCampaignTemplatesWithHttpInfo(limit?: number, startingAfterId?: string, order?: ParameterTemplatesList, includeTotal?: boolean, filters?: ParameterFiltersListTemplates, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatesCampaignsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCampaignTemplatesWithHttpInfo(limit, startingAfterId, order, includeTotal, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Lists all campaign templates available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * List Campaign Templates
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [startingAfterId] A cursor for pagination. It retrieves the campaign templates created after a template with the given ID.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [includeTotal] If set to true, the response returns the number of all campaign templates, regardless of the applied filters or limits. Set to false by default.
     * @param [filters] Filters for listing templates.
     */
    public listCampaignTemplates(limit?: number, startingAfterId?: string, order?: ParameterTemplatesList, includeTotal?: boolean, filters?: ParameterFiltersListTemplates, _options?: PromiseConfigurationOptions): Promise<TemplatesCampaignsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listCampaignTemplates(limit, startingAfterId, order, includeTotal, filters, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the name or description of the campaign template.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Update Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param [templatesCampaignsUpdateRequestBody] Provide the new name or description for the campaign template
     */
    public updateCampaignTemplateWithHttpInfo(campaignTemplateId: string, templatesCampaignsUpdateRequestBody?: TemplatesCampaignsUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatesCampaignsUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCampaignTemplateWithHttpInfo(campaignTemplateId, templatesCampaignsUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the name or description of the campaign template.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Update Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param [templatesCampaignsUpdateRequestBody] Provide the new name or description for the campaign template
     */
    public updateCampaignTemplate(campaignTemplateId: string, templatesCampaignsUpdateRequestBody?: TemplatesCampaignsUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<TemplatesCampaignsUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateCampaignTemplate(campaignTemplateId, templatesCampaignsUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableValidationRulesApi } from './ObservableAPI';

import { ValidationRulesApiRequestFactory, ValidationRulesApiResponseProcessor} from "../apis/ValidationRulesApi";
export class PromiseValidationRulesApi {
    private api: ObservableValidationRulesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ValidationRulesApiRequestFactory,
        responseProcessor?: ValidationRulesApiResponseProcessor
    ) {
        this.api = new ObservableValidationRulesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assign validation rule to either one of the following objects: voucher, campaign, promotion tier, earning rule, reward, distribution.
     * Create Validation Rules Assignments
     * @param validationRuleId Unique validation rule ID.
     * @param [force] If this flag is set to true, the previous assignment with the same data will be deleted and a new one will be added.
     * @param [validationRulesAssignmentsCreateRequestBody] Specify the resource that you would like to assign the validation rule to.
     */
    public createValidationRuleAssignmentWithHttpInfo(validationRuleId: string, force?: boolean, validationRulesAssignmentsCreateRequestBody?: ValidationRulesAssignmentsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ValidationRulesAssignmentsCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createValidationRuleAssignmentWithHttpInfo(validationRuleId, force, validationRulesAssignmentsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Assign validation rule to either one of the following objects: voucher, campaign, promotion tier, earning rule, reward, distribution.
     * Create Validation Rules Assignments
     * @param validationRuleId Unique validation rule ID.
     * @param [force] If this flag is set to true, the previous assignment with the same data will be deleted and a new one will be added.
     * @param [validationRulesAssignmentsCreateRequestBody] Specify the resource that you would like to assign the validation rule to.
     */
    public createValidationRuleAssignment(validationRuleId: string, force?: boolean, validationRulesAssignmentsCreateRequestBody?: ValidationRulesAssignmentsCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ValidationRulesAssignmentsCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createValidationRuleAssignment(validationRuleId, force, validationRulesAssignmentsCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Create a validation rule.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.
     * Create Validation Rules
     * @param [validationRulesCreateRequestBody] Specify the validation rules parameters.
     */
    public createValidationRulesWithHttpInfo(validationRulesCreateRequestBody?: ValidationRulesCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ValidationRulesCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createValidationRulesWithHttpInfo(validationRulesCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Create a validation rule.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.
     * Create Validation Rules
     * @param [validationRulesCreateRequestBody] Specify the validation rules parameters.
     */
    public createValidationRules(validationRulesCreateRequestBody?: ValidationRulesCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<ValidationRulesCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createValidationRules(validationRulesCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a validation rule assignment.
     * Delete Validation Rule Assignment
     * @param validationRuleId A unique validation rule ID.
     * @param assignmentId A unique validation rule assignment ID.
     */
    public deleteValidationRuleAssignmentWithHttpInfo(validationRuleId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteValidationRuleAssignmentWithHttpInfo(validationRuleId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a validation rule assignment.
     * Delete Validation Rule Assignment
     * @param validationRuleId A unique validation rule ID.
     * @param assignmentId A unique validation rule assignment ID.
     */
    public deleteValidationRuleAssignment(validationRuleId: string, assignmentId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteValidationRuleAssignment(validationRuleId, assignmentId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a validation rule.
     * Delete Validation Rule
     * @param validationRuleId A unique validation rule ID.
     */
    public deleteValidationRulesWithHttpInfo(validationRuleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteValidationRulesWithHttpInfo(validationRuleId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * This method deletes a validation rule.
     * Delete Validation Rule
     * @param validationRuleId A unique validation rule ID.
     */
    public deleteValidationRules(validationRuleId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteValidationRules(validationRuleId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve the details of a validation rule.
     * Get Validation Rule
     * @param validationRuleId A unique validation rule ID.
     */
    public getValidationRuleWithHttpInfo(validationRuleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ValidationRulesGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getValidationRuleWithHttpInfo(validationRuleId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve the details of a validation rule.
     * Get Validation Rule
     * @param validationRuleId A unique validation rule ID.
     */
    public getValidationRule(validationRuleId: string, _options?: PromiseConfigurationOptions): Promise<ValidationRulesGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getValidationRule(validationRuleId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve validation rule assignments for a specific validation rule.
     * List Validation Rule Assignments
     * @param validationRuleId Unique validation rule ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listValidationRuleAssignmentsWithHttpInfo(validationRuleId: string, limit?: number, page?: number, order?: ParameterOrderListValidationRuleAssignments, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ValidationRulesAssignmentsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listValidationRuleAssignmentsWithHttpInfo(validationRuleId, limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve validation rule assignments for a specific validation rule.
     * List Validation Rule Assignments
     * @param validationRuleId Unique validation rule ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listValidationRuleAssignments(validationRuleId: string, limit?: number, page?: number, order?: ParameterOrderListValidationRuleAssignments, _options?: PromiseConfigurationOptions): Promise<ValidationRulesAssignmentsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listValidationRuleAssignments(validationRuleId, limit, page, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve validation rules.
     * List Validation Rules
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startDate] Timestamp representing the date and time which results must start on. Represented in ISO 8601 format.
     * @param [endDate] Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     */
    public listValidationRulesWithHttpInfo(limit?: number, page?: number, order?: ParameterOrderListValidationRules, startDate?: Date, endDate?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ValidationRulesListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listValidationRulesWithHttpInfo(limit, page, order, startDate, endDate, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieve validation rules.
     * List Validation Rules
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startDate] Timestamp representing the date and time which results must start on. Represented in ISO 8601 format.
     * @param [endDate] Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     */
    public listValidationRules(limit?: number, page?: number, order?: ParameterOrderListValidationRules, startDate?: Date, endDate?: Date, _options?: PromiseConfigurationOptions): Promise<ValidationRulesListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listValidationRules(limit, page, order, startDate, endDate, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * List all validation rules assignments or filter the results using the related object ID or the validation rule ID query parameters.
     * List Validation Rules\' Assignment(s)
     * @param [relatedObjectId] The resource ID to which the validation rule was assigned; this could be, for example, a resource ID of a voucher, campaign, earning rule, reward assignment, promotion tier, or distribution.
     * @param [rule] Validation rule ID.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options: -created_at, created_at, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listValidationRulesAssignmentsWithHttpInfo(relatedObjectId?: string, rule?: string, page?: number, limit?: number, order?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ValidationRulesAssignmentsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listValidationRulesAssignmentsWithHttpInfo(relatedObjectId, rule, page, limit, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * List all validation rules assignments or filter the results using the related object ID or the validation rule ID query parameters.
     * List Validation Rules\' Assignment(s)
     * @param [relatedObjectId] The resource ID to which the validation rule was assigned; this could be, for example, a resource ID of a voucher, campaign, earning rule, reward assignment, promotion tier, or distribution.
     * @param [rule] Validation rule ID.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options: -created_at, created_at, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listValidationRulesAssignments(relatedObjectId?: string, rule?: string, page?: number, limit?: number, order?: string, _options?: PromiseConfigurationOptions): Promise<ValidationRulesAssignmentsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listValidationRulesAssignments(relatedObjectId, rule, page, limit, order, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Update validation rule parameters.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.
     * Update Validation Rule
     * @param validationRuleId A unique validation rule ID.
     * @param [validationRulesUpdateRequestBody] Specify the parameters to be updated.
     */
    public updateValidationRuleWithHttpInfo(validationRuleId: string, validationRulesUpdateRequestBody?: ValidationRulesUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ValidationRulesUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateValidationRuleWithHttpInfo(validationRuleId, validationRulesUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Update validation rule parameters.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.
     * Update Validation Rule
     * @param validationRuleId A unique validation rule ID.
     * @param [validationRulesUpdateRequestBody] Specify the parameters to be updated.
     */
    public updateValidationRule(validationRuleId: string, validationRulesUpdateRequestBody?: ValidationRulesUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<ValidationRulesUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateValidationRule(validationRuleId, validationRulesUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableValidationsApi } from './ObservableAPI';

import { ValidationsApiRequestFactory, ValidationsApiResponseProcessor} from "../apis/ValidationsApi";
export class PromiseValidationsApi {
    private api: ObservableValidationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ValidationsApiRequestFactory,
        responseProcessor?: ValidationsApiResponseProcessor
    ) {
        this.api = new ObservableValidationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Verify redeemables provided in the request. This method is designed for server side integration which means that it is accessible only through private keys. API keys with a Merchant role cant use this endpoint.
     * Validate Stackable Discounts
     * @param [validationsValidateRequestBody]
     */
    public validateStackedDiscountsWithHttpInfo(validationsValidateRequestBody?: ValidationsValidateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ValidationsValidateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.validateStackedDiscountsWithHttpInfo(validationsValidateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Verify redeemables provided in the request. This method is designed for server side integration which means that it is accessible only through private keys. API keys with a Merchant role cant use this endpoint.
     * Validate Stackable Discounts
     * @param [validationsValidateRequestBody]
     */
    public validateStackedDiscounts(validationsValidateRequestBody?: ValidationsValidateRequestBody, _options?: PromiseConfigurationOptions): Promise<ValidationsValidateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.validateStackedDiscounts(validationsValidateRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



import { ObservableVouchersApi } from './ObservableAPI';

import { VouchersApiRequestFactory, VouchersApiResponseProcessor} from "../apis/VouchersApi";
export class PromiseVouchersApi {
    private api: ObservableVouchersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VouchersApiRequestFactory,
        responseProcessor?: VouchersApiResponseProcessor
    ) {
        this.api = new ObservableVouchersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD. The code path parameter can use all letters of the English alphabet, Arabic numerals and special characters. When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In the case of the loyalty card, a campaign name or ID is required. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Create Voucher
     * @param code A unique **code** that identifies the voucher.
     * @param [vouchersCreateWithSpecificCodeRequestBody] Specify the details of the voucher that you would like to create.
     */
    public createVoucherWithHttpInfo(code: string, vouchersCreateWithSpecificCodeRequestBody?: VouchersCreateWithSpecificCodeRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createVoucherWithHttpInfo(code, vouchersCreateWithSpecificCodeRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD. The code path parameter can use all letters of the English alphabet, Arabic numerals and special characters. When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In the case of the loyalty card, a campaign name or ID is required. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Create Voucher
     * @param code A unique **code** that identifies the voucher.
     * @param [vouchersCreateWithSpecificCodeRequestBody] Specify the details of the voucher that you would like to create.
     */
    public createVoucher(code: string, vouchersCreateWithSpecificCodeRequestBody?: VouchersCreateWithSpecificCodeRequestBody, _options?: PromiseConfigurationOptions): Promise<VouchersCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.createVoucher(code, vouchersCreateWithSpecificCodeRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes a voucher. This operation cannot be undone. Additionally, this operation removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the voucher will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Voucher
     * @param code A unique **code** that identifies the voucher.
     * @param [force] If this flag is set to true, the voucher will be removed permanently. If it is set to false or not set at all, the voucher will be moved to the bin. Going forward, the user will be able to create another voucher with exactly the same code.
     */
    public deleteVoucherWithHttpInfo(code: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteVoucherWithHttpInfo(code, force, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Deletes a voucher. This operation cannot be undone. Additionally, this operation removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the voucher will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Voucher
     * @param code A unique **code** that identifies the voucher.
     * @param [force] If this flag is set to true, the voucher will be removed permanently. If it is set to false or not set at all, the voucher will be moved to the bin. Going forward, the user will be able to create another voucher with exactly the same code.
     */
    public deleteVoucher(code: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.deleteVoucher(code, force, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ This method sets the voucher state to **inactive**. The voucher cannot be redeemed.
     * Disable Voucher
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     */
    public disableVoucherWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersDisableResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.disableVoucherWithHttpInfo(code, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ This method sets the voucher state to **inactive**. The voucher cannot be redeemed.
     * Disable Voucher
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     */
    public disableVoucher(code: string, _options?: PromiseConfigurationOptions): Promise<VouchersDisableResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.disableVoucher(code, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ The method sets the voucher state to **active**. The voucher can be redeemed - only if the redemption occurs after the start date and the voucher is not expired.
     * Enable Voucher
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     */
    public enableVoucherWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersEnableResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.enableVoucherWithHttpInfo(code, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ The method sets the voucher state to **active**. The voucher can be redeemed - only if the redemption occurs after the start date and the voucher is not expired.
     * Enable Voucher
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     */
    public enableVoucher(code: string, _options?: PromiseConfigurationOptions): Promise<VouchersEnableResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.enableVoucher(code, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Export transactions that are associated with credit movements on a gift card or loyalty card.   
     * Export Voucher Transactions
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * @param [vouchersTransactionsExportCreateRequestBody] Specify the parameters for the camapign transaction export.
     */
    public exportVoucherTransactionsWithHttpInfo(code: string, vouchersTransactionsExportCreateRequestBody?: VouchersTransactionsExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersTransactionsExportCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.exportVoucherTransactionsWithHttpInfo(code, vouchersTransactionsExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Export transactions that are associated with credit movements on a gift card or loyalty card.   
     * Export Voucher Transactions
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * @param [vouchersTransactionsExportCreateRequestBody] Specify the parameters for the camapign transaction export.
     */
    public exportVoucherTransactions(code: string, vouchersTransactionsExportCreateRequestBody?: VouchersTransactionsExportCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<VouchersTransactionsExportCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.exportVoucherTransactions(code, vouchersTransactionsExportCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD.  When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In case of the loyalty card, a campaign name is required. You can optionally use the code parameter to define a specific code or the code_config parameter to design rules for Voucherify API to create a random code. If neither of the two parameters are passed, then a random code is generated by the Voucherify API. This method will return an error when trying to create a voucher that already exists. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Generate Random Code
     * @param [vouchersCreateRequestBody] Specify the details of the voucher that you would like to create.
     */
    public generateRandomCodeWithHttpInfo(vouchersCreateRequestBody?: VouchersCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.generateRandomCodeWithHttpInfo(vouchersCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD.  When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In case of the loyalty card, a campaign name is required. You can optionally use the code parameter to define a specific code or the code_config parameter to design rules for Voucherify API to create a random code. If neither of the two parameters are passed, then a random code is generated by the Voucherify API. This method will return an error when trying to create a voucher that already exists. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Generate Random Code
     * @param [vouchersCreateRequestBody] Specify the details of the voucher that you would like to create.
     */
    public generateRandomCode(vouchersCreateRequestBody?: VouchersCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<VouchersCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.generateRandomCode(vouchersCreateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the voucher with the given code or unique Voucherify ID. You can either pass the voucher ID which was assigned by Voucherify, e.g., v_7HxHkf4VAkMuc8u4lZs78lyRwhRze5UE, or the code of the voucher as the path parameter value, e.g., 7fjWdr.
     * Get Voucher
     * @param code A unique **code** that identifies the voucher.
     */
    public getVoucherWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersGetResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getVoucherWithHttpInfo(code, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Retrieves the voucher with the given code or unique Voucherify ID. You can either pass the voucher ID which was assigned by Voucherify, e.g., v_7HxHkf4VAkMuc8u4lZs78lyRwhRze5UE, or the code of the voucher as the path parameter value, e.g., 7fjWdr.
     * Get Voucher
     * @param code A unique **code** that identifies the voucher.
     */
    public getVoucher(code: string, _options?: PromiseConfigurationOptions): Promise<VouchersGetResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.getVoucher(code, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Import generic (standalone) vouchers and gift cards into the repository.  📘 Important notes  - **Start and expiration dates** need to be provided in compliance with the ISO 8601 norms. For example, 2020-03-11T09:00:00.000Z.  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify Project. Any parameters not provided in the payload will be left blank or null. For both **standalone discount vouchers and gift cards**, you can import the following fields:   - code - category - active - type - start_date - expiration_date - redemption.quantity - additional_info - metadata For **gift cards**, you can also import the following field: - gift.amount For **discount vouchers**, you can import the discount object. The object will slightly vary depending on the type of discount. Each discount type **requires** the type to be defined in the import.   Fields other than the ones listed above wont be imported. Even if provided, they will be silently skipped. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.
     * Import Vouchers
     * @param vouchersImportCreateItemRequestBody The request body is an array of objects. Each object contains details about a specific voucher. 
     */
    public importVouchersWithHttpInfo(vouchersImportCreateItemRequestBody: Array<VouchersImportCreateItemRequestBody>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersImportCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importVouchersWithHttpInfo(vouchersImportCreateItemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Import generic (standalone) vouchers and gift cards into the repository.  📘 Important notes  - **Start and expiration dates** need to be provided in compliance with the ISO 8601 norms. For example, 2020-03-11T09:00:00.000Z.  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify Project. Any parameters not provided in the payload will be left blank or null. For both **standalone discount vouchers and gift cards**, you can import the following fields:   - code - category - active - type - start_date - expiration_date - redemption.quantity - additional_info - metadata For **gift cards**, you can also import the following field: - gift.amount For **discount vouchers**, you can import the discount object. The object will slightly vary depending on the type of discount. Each discount type **requires** the type to be defined in the import.   Fields other than the ones listed above wont be imported. Even if provided, they will be silently skipped. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.
     * Import Vouchers
     * @param vouchersImportCreateItemRequestBody The request body is an array of objects. Each object contains details about a specific voucher. 
     */
    public importVouchers(vouchersImportCreateItemRequestBody: Array<VouchersImportCreateItemRequestBody>, _options?: PromiseConfigurationOptions): Promise<VouchersImportCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importVouchers(vouchersImportCreateItemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Import generic (standalone) vouchers into the repository using a CSV file. The CSV file has to include headers in the first line. All properties listed in the file headers that cannot be mapped to standard voucher fields will be added to the metadata object.   You can find an example CSV file [here](https://support.voucherify.io/article/45-import-codes-and-share-them-digitally#coupons). ___  📘 Standard voucher fields mapping  - Go to the [import vouchers](/api-reference/vouchers/import-vouchers) endpoint to see all standard CSV fields description (body params section).  - Supported CSV file headers: Code,Voucher Type,Value,Discount Type,Category,Start Date,Expiration Date,Redemption Limit,Redeemed Quantity, Redeemed Amount,Active,Additional Info,Custom Metadata Property Name - **Start and expiration dates** need to be provided in compliance with the ISO 8601 standard. For example, 2020-03-11T09:00:00.000Z.       - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify project.  - You can, however, upload the same codes to update them.  📘 Categories  In the structure representing your data, you can define a category that the voucher belongs to. You can later use the category of a voucher to group and search by specific criteria in the Dashboard and using the [List Vouchers](/api-reference/vouchers/list-vouchers) endpoint. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). You can pass the webhooks_enable true parameter to trigger a webhook sendout for created or updated vouchers. Configure the [respective webhooks](/api-reference/introduction-to-webhooks) in Project settings. For updated webhooks, a webhook is sent even if the voucher hasnt been changed in the CSV file. 🚧 Generic (standalone) vouchers and campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.
     * Import Vouchers using CSV
     * @param [file] File path.
     * @param [webhooksEnable] Triggers a webhook sendout for new and updated vouchers if the voucher created and voucher updated webhooks are configured in Project settings.
     */
    public importVouchersUsingCsvWithHttpInfo(file?: HttpFile, webhooksEnable?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersImportCsvCreateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importVouchersUsingCsvWithHttpInfo(file, webhooksEnable, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Import generic (standalone) vouchers into the repository using a CSV file. The CSV file has to include headers in the first line. All properties listed in the file headers that cannot be mapped to standard voucher fields will be added to the metadata object.   You can find an example CSV file [here](https://support.voucherify.io/article/45-import-codes-and-share-them-digitally#coupons). ___  📘 Standard voucher fields mapping  - Go to the [import vouchers](/api-reference/vouchers/import-vouchers) endpoint to see all standard CSV fields description (body params section).  - Supported CSV file headers: Code,Voucher Type,Value,Discount Type,Category,Start Date,Expiration Date,Redemption Limit,Redeemed Quantity, Redeemed Amount,Active,Additional Info,Custom Metadata Property Name - **Start and expiration dates** need to be provided in compliance with the ISO 8601 standard. For example, 2020-03-11T09:00:00.000Z.       - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify project.  - You can, however, upload the same codes to update them.  📘 Categories  In the structure representing your data, you can define a category that the voucher belongs to. You can later use the category of a voucher to group and search by specific criteria in the Dashboard and using the [List Vouchers](/api-reference/vouchers/list-vouchers) endpoint. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). You can pass the webhooks_enable true parameter to trigger a webhook sendout for created or updated vouchers. Configure the [respective webhooks](/api-reference/introduction-to-webhooks) in Project settings. For updated webhooks, a webhook is sent even if the voucher hasnt been changed in the CSV file. 🚧 Generic (standalone) vouchers and campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.
     * Import Vouchers using CSV
     * @param [file] File path.
     * @param [webhooksEnable] Triggers a webhook sendout for new and updated vouchers if the voucher created and voucher updated webhooks are configured in Project settings.
     */
    public importVouchersUsingCsv(file?: HttpFile, webhooksEnable?: boolean, _options?: PromiseConfigurationOptions): Promise<VouchersImportCsvCreateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.importVouchersUsingCsv(file, webhooksEnable, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * List transactions that are associated with credit movements on a gift card or loyalty card.
     * List Voucher Transactions
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     */
    public listVoucherTransactionsWithHttpInfo(code: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersTransactionsListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listVoucherTransactionsWithHttpInfo(code, limit, order, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * List transactions that are associated with credit movements on a gift card or loyalty card.
     * List Voucher Transactions
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     */
    public listVoucherTransactions(code: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, _options?: PromiseConfigurationOptions): Promise<VouchersTransactionsListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listVoucherTransactions(code, limit, order, startingAfterId, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of vouchers. By default, the vouchers are returned sorted by creation date, with the most recent vouchers appearing first. A maximum of 100 vouchers are returned in the response. When you get a list of vouchers, you can optionally specify query parameters to customize the number of vouchers returned per call using limit, which page of vouchers to return using page, sort the vouchers using the order query parameter and more. This method will return an error when trying to return a limit of more than 100 vouchers. 
     * List Vouchers
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1, the highest value is 99.
     * @param [category] Limit search results to vouchers within the specified category.
     * @param [campaignId] Limit search results to vouchers within the specified campaign
     * @param [customer] A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters.
     * @param [campaign] A unique campaign name, identifies the parent campaign.
     * @param [createdAt] A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * @param [updatedAt] A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [code]
     * @param [ids]
     */
    public listVouchersWithHttpInfo(limit?: number, page?: number, category?: string, campaignId?: string, customer?: string, campaign?: string, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, order?: ParameterOrderVouchers, code?: string, ids?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersListResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listVouchersWithHttpInfo(limit, page, category, campaignId, customer, campaign, createdAt, updatedAt, order, code, ids, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Returns a list of vouchers. By default, the vouchers are returned sorted by creation date, with the most recent vouchers appearing first. A maximum of 100 vouchers are returned in the response. When you get a list of vouchers, you can optionally specify query parameters to customize the number of vouchers returned per call using limit, which page of vouchers to return using page, sort the vouchers using the order query parameter and more. This method will return an error when trying to return a limit of more than 100 vouchers. 
     * List Vouchers
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1, the highest value is 99.
     * @param [category] Limit search results to vouchers within the specified category.
     * @param [campaignId] Limit search results to vouchers within the specified campaign
     * @param [customer] A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters.
     * @param [campaign] A unique campaign name, identifies the parent campaign.
     * @param [createdAt] A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * @param [updatedAt] A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [code]
     * @param [ids]
     */
    public listVouchers(limit?: number, page?: number, category?: string, campaignId?: string, customer?: string, campaign?: string, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, order?: ParameterOrderVouchers, code?: string, ids?: Array<string>, _options?: PromiseConfigurationOptions): Promise<VouchersListResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.listVouchers(limit, page, category, campaignId, customer, campaign, createdAt, updatedAt, order, code, ids, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Manually release a validation session that has been set up for the voucher. This method undoes the actions that are explained in the [Locking validation session](/guides/locking-validation-session) guide.   📘 Release session in the Dashboard  You can also use the [Validations Manager](https://support.voucherify.io/article/16-dashboard-sections#sessions) in the Dashboard to unlock sessions.
     * Release Validation Session
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify.
     * @param sessionKey A unique session identifier.
     */
    public releaseValidationSessionWithHttpInfo(code: string, sessionKey: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.releaseValidationSessionWithHttpInfo(code, sessionKey, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Manually release a validation session that has been set up for the voucher. This method undoes the actions that are explained in the [Locking validation session](/guides/locking-validation-session) guide.   📘 Release session in the Dashboard  You can also use the [Validations Manager](https://support.voucherify.io/article/16-dashboard-sections#sessions) in the Dashboard to unlock sessions.
     * Release Validation Session
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify.
     * @param sessionKey A unique session identifier.
     */
    public releaseValidationSession(code: string, sessionKey: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.releaseValidationSession(code, sessionKey, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the specified voucher by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped. If you want to change the amount on a gift card or the number of points on a loyalty card, use the [Adjust voucher balance](/api-reference/vouchers/adjust-voucher-balance) endpoint.
     * Update Voucher
     * @param code A unique **code** that identifies the voucher.
     * @param vouchersUpdateRequestBody Specify the parameters to be updated.
     */
    public updateVoucherWithHttpInfo(code: string, vouchersUpdateRequestBody: VouchersUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateVoucherWithHttpInfo(code, vouchersUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates the specified voucher by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped. If you want to change the amount on a gift card or the number of points on a loyalty card, use the [Adjust voucher balance](/api-reference/vouchers/adjust-voucher-balance) endpoint.
     * Update Voucher
     * @param code A unique **code** that identifies the voucher.
     * @param vouchersUpdateRequestBody Specify the parameters to be updated.
     */
    public updateVoucher(code: string, vouchersUpdateRequestBody: VouchersUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<VouchersUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateVoucher(code, vouchersUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Add balance to an existing gift card or loyalty card. For loyalty cards, it must be assigned to a holder.
     * Adjust Voucher Balance
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * @param vouchersBalanceUpdateRequestBody Provide the amount to be added to/subtracted from the voucher.
     */
    public updateVoucherBalanceWithHttpInfo(code: string, vouchersBalanceUpdateRequestBody: VouchersBalanceUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersBalanceUpdateResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateVoucherBalanceWithHttpInfo(code, vouchersBalanceUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Add balance to an existing gift card or loyalty card. For loyalty cards, it must be assigned to a holder.
     * Adjust Voucher Balance
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * @param vouchersBalanceUpdateRequestBody Provide the amount to be added to/subtracted from the voucher.
     */
    public updateVoucherBalance(code: string, vouchersBalanceUpdateRequestBody: VouchersBalanceUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<VouchersBalanceUpdateResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateVoucherBalance(code, vouchersBalanceUpdateRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates specific metadata parameters for each code, respectively, in one asynchronous operation. The request can include up to **10 MB** of data. Upserts are not supported.  🚧 Currently, only **metadata** updates are supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Vouchers in Bulk
     * @param vouchersUpdateInBulkItemRequestBody List the codes to be updated with the metadata key/value pairs for that code.
     */
    public updateVouchersInBulkWithHttpInfo(vouchersUpdateInBulkItemRequestBody: Array<VouchersUpdateInBulkItemRequestBody>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersUpdateInBulkResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateVouchersInBulkWithHttpInfo(vouchersUpdateInBulkItemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates specific metadata parameters for each code, respectively, in one asynchronous operation. The request can include up to **10 MB** of data. Upserts are not supported.  🚧 Currently, only **metadata** updates are supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Vouchers in Bulk
     * @param vouchersUpdateInBulkItemRequestBody List the codes to be updated with the metadata key/value pairs for that code.
     */
    public updateVouchersInBulk(vouchersUpdateInBulkItemRequestBody: Array<VouchersUpdateInBulkItemRequestBody>, _options?: PromiseConfigurationOptions): Promise<VouchersUpdateInBulkResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateVouchersInBulk(vouchersUpdateInBulkItemRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates metadata parameters for a list of codes. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. Upserts are not supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Vouchers\' Metadata in Bulk
     * @param vouchersMetadataUpdateInBulkRequestBody List the codes of the vouchers you would like to update with the metadata key/value pairs.
     */
    public updateVouchersMetadataInBulkWithHttpInfo(vouchersMetadataUpdateInBulkRequestBody: VouchersMetadataUpdateInBulkRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VouchersMetadataUpdateInBulkResponseBody>> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateVouchersMetadataInBulkWithHttpInfo(vouchersMetadataUpdateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }

    /**
     * Updates metadata parameters for a list of codes. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. Upserts are not supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Vouchers\' Metadata in Bulk
     * @param vouchersMetadataUpdateInBulkRequestBody List the codes of the vouchers you would like to update with the metadata key/value pairs.
     */
    public updateVouchersMetadataInBulk(vouchersMetadataUpdateInBulkRequestBody: VouchersMetadataUpdateInBulkRequestBody, _options?: PromiseConfigurationOptions): Promise<VouchersMetadataUpdateInBulkResponseBody> {
        const observableOptions = wrapOptions(_options);
        const apiResult = this.api.updateVouchersMetadataInBulk(vouchersMetadataUpdateInBulkRequestBody, observableOptions);
        return apiResult.toPromise();
    }


}



