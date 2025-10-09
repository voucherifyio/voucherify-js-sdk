import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AsyncActionsApiRequestFactory, AsyncActionsApiResponseProcessor} from "../apis/AsyncActionsApi";
export class ObservableAsyncActionsApi {
    private requestFactory: AsyncActionsApiRequestFactory;
    private responseProcessor: AsyncActionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AsyncActionsApiRequestFactory,
        responseProcessor?: AsyncActionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AsyncActionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AsyncActionsApiResponseProcessor();
    }

    /**
     * Check the result of a scheduled asynchronous operation.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       
     * Get Async Action
     * @param asyncActionId Unique ID of the asynchronous operation.
     */
    public getAsyncActionWithHttpInfo(asyncActionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<AsyncActionGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAsyncAction(asyncActionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAsyncActionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the result of a scheduled asynchronous operation.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       
     * Get Async Action
     * @param asyncActionId Unique ID of the asynchronous operation.
     */
    public getAsyncAction(asyncActionId: string, _options?: ConfigurationOptions): Observable<AsyncActionGetResponseBody> {
        return this.getAsyncActionWithHttpInfo(asyncActionId, _options).pipe(map((apiResponse: HttpInfo<AsyncActionGetResponseBody>) => apiResponse.data));
    }

    /**
     * Track asynchronous operations scheduled in your project.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       
     * List Async Actions
     * @param [limit] Limit the number of asynchronous actions that the API returns in the response.
     * @param [endDate] Limits results to actions scheduled before the end_date. The date format needs to be consistent with ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). 
     */
    public listAsyncActionsWithHttpInfo(limit?: number, endDate?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<AsyncActionsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAsyncActions(limit, endDate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAsyncActionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Track asynchronous operations scheduled in your project.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       
     * List Async Actions
     * @param [limit] Limit the number of asynchronous actions that the API returns in the response.
     * @param [endDate] Limits results to actions scheduled before the end_date. The date format needs to be consistent with ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). 
     */
    public listAsyncActions(limit?: number, endDate?: Date, _options?: ConfigurationOptions): Observable<AsyncActionsListResponseBody> {
        return this.listAsyncActionsWithHttpInfo(limit, endDate, _options).pipe(map((apiResponse: HttpInfo<AsyncActionsListResponseBody>) => apiResponse.data));
    }

}

import { BinApiRequestFactory, BinApiResponseProcessor} from "../apis/BinApi";
export class ObservableBinApi {
    private requestFactory: BinApiRequestFactory;
    private responseProcessor: BinApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BinApiRequestFactory,
        responseProcessor?: BinApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BinApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BinApiResponseProcessor();
    }

    /**
     * Deletes permanently a bin entry with a given ID.The following resources can be moved to the bin and permanently deleted: - campaigns - vouchers - products - SKUs To use this endpoint and delete a given resource type, you must have the following permissions: - vouchers.delete to delete a voucher, - campaigns.delete to delete a campaign, - products.delete to delete a product or SKU.
     * Delete Bin Entry
     * @param binEntryId Provide the unique identifier of the bin entry.
     */
    public deleteBinEntryWithHttpInfo(binEntryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteBinEntry(binEntryId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBinEntryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes permanently a bin entry with a given ID.The following resources can be moved to the bin and permanently deleted: - campaigns - vouchers - products - SKUs To use this endpoint and delete a given resource type, you must have the following permissions: - vouchers.delete to delete a voucher, - campaigns.delete to delete a campaign, - products.delete to delete a product or SKU.
     * Delete Bin Entry
     * @param binEntryId Provide the unique identifier of the bin entry.
     */
    public deleteBinEntry(binEntryId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteBinEntryWithHttpInfo(binEntryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a list of resources moved to the bin. The following resources can be moved to the bin: - campaigns - vouchers - products - SKUs To use this endpoint, you must have the following permissions: - vouchers.read - campaigns.read - products.read
     * List Bin Entries
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Orders the bin entries according to the bin entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     * @param [filters] Filters for listing bin entries.
     */
    public listBinEntriesWithHttpInfo(limit?: number, order?: ParameterOrderListBin, startingAfterId?: string, filters?: ParameterFiltersListBin, _options?: ConfigurationOptions): Observable<HttpInfo<TrashBinListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listBinEntries(limit, order, startingAfterId, filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listBinEntriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of resources moved to the bin. The following resources can be moved to the bin: - campaigns - vouchers - products - SKUs To use this endpoint, you must have the following permissions: - vouchers.read - campaigns.read - products.read
     * List Bin Entries
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Orders the bin entries according to the bin entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     * @param [filters] Filters for listing bin entries.
     */
    public listBinEntries(limit?: number, order?: ParameterOrderListBin, startingAfterId?: string, filters?: ParameterFiltersListBin, _options?: ConfigurationOptions): Observable<TrashBinListResponseBody> {
        return this.listBinEntriesWithHttpInfo(limit, order, startingAfterId, filters, _options).pipe(map((apiResponse: HttpInfo<TrashBinListResponseBody>) => apiResponse.data));
    }

}

import { CampaignsApiRequestFactory, CampaignsApiResponseProcessor} from "../apis/CampaignsApi";
export class ObservableCampaignsApi {
    private requestFactory: CampaignsApiRequestFactory;
    private responseProcessor: CampaignsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CampaignsApiRequestFactory,
        responseProcessor?: CampaignsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CampaignsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CampaignsApiResponseProcessor();
    }

    /**
     * This method gives a possibility to add a new voucher to an existing campaign. The voucher definition will be inherited from the definition kept in the campaign profile. However, you are able to overwrite a few properties inherited from the campaign.
     * Add Voucher with Specific Code to Campaign
     * @param campaignId The campaign ID or name of the campaign to which voucher will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param code A custom **code** that identifies the voucher.
     * @param [campaignsVouchersCreateRequestBody] Specify the voucher parameters that you would like to overwrite.
     */
    public addVoucherWithSpecificCodeToCampaignWithHttpInfo(campaignId: string, code: string, campaignsVouchersCreateRequestBody?: CampaignsVouchersCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsVouchersCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addVoucherWithSpecificCodeToCampaign(campaignId, code, campaignsVouchersCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addVoucherWithSpecificCodeToCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method gives a possibility to add a new voucher to an existing campaign. The voucher definition will be inherited from the definition kept in the campaign profile. However, you are able to overwrite a few properties inherited from the campaign.
     * Add Voucher with Specific Code to Campaign
     * @param campaignId The campaign ID or name of the campaign to which voucher will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param code A custom **code** that identifies the voucher.
     * @param [campaignsVouchersCreateRequestBody] Specify the voucher parameters that you would like to overwrite.
     */
    public addVoucherWithSpecificCodeToCampaign(campaignId: string, code: string, campaignsVouchersCreateRequestBody?: CampaignsVouchersCreateRequestBody, _options?: ConfigurationOptions): Observable<CampaignsVouchersCreateResponseBody> {
        return this.addVoucherWithSpecificCodeToCampaignWithHttpInfo(campaignId, code, campaignsVouchersCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<CampaignsVouchersCreateResponseBody>) => apiResponse.data));
    }

    /**
     * This method gives the possibility to push new vouchers to an existing campaign. New vouchers will inherit properties from the campaign profile. However, it is possible to overwrite some of them in the request body. If you provide an optional code_config parameter with a voucher code configuration, then it will be used to generate new voucher codes. Otherwise, the voucher code configuration from the campaign will be used. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Add Vouchers to Campaign
     * @param campaignId The campaign ID or name of the campaign to which voucher(s) will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [vouchersCount] Number of vouchers that should be added.
     * @param [campaignsVouchersCreateInBulkRequestBody] Specify the voucher parameters that you would like to overwrite.
     */
    public addVouchersToCampaignWithHttpInfo(campaignId: string, vouchersCount?: number, campaignsVouchersCreateInBulkRequestBody?: CampaignsVouchersCreateInBulkRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsVouchersCreateCombinedResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addVouchersToCampaign(campaignId, vouchersCount, campaignsVouchersCreateInBulkRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addVouchersToCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method gives the possibility to push new vouchers to an existing campaign. New vouchers will inherit properties from the campaign profile. However, it is possible to overwrite some of them in the request body. If you provide an optional code_config parameter with a voucher code configuration, then it will be used to generate new voucher codes. Otherwise, the voucher code configuration from the campaign will be used. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Add Vouchers to Campaign
     * @param campaignId The campaign ID or name of the campaign to which voucher(s) will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [vouchersCount] Number of vouchers that should be added.
     * @param [campaignsVouchersCreateInBulkRequestBody] Specify the voucher parameters that you would like to overwrite.
     */
    public addVouchersToCampaign(campaignId: string, vouchersCount?: number, campaignsVouchersCreateInBulkRequestBody?: CampaignsVouchersCreateInBulkRequestBody, _options?: ConfigurationOptions): Observable<CampaignsVouchersCreateCombinedResponseBody> {
        return this.addVouchersToCampaignWithHttpInfo(campaignId, vouchersCount, campaignsVouchersCreateInBulkRequestBody, _options).pipe(map((apiResponse: HttpInfo<CampaignsVouchersCreateCombinedResponseBody>) => apiResponse.data));
    }

    /**
     * Method to create a batch of vouchers aggregated in one campaign. You can choose a variety of voucher types and define a unique pattern for generating codes.    📘 Global uniqueness  All campaign codes are unique across the whole project. Voucherify will not allow you to generate 2 campaigns with the same coupon code.    🚧 Code generation status  This is an asynchronous action; you cant read or modify a newly created campaign until the code generation is completed. See the creation_status field in the [campaign object](/api-reference/campaigns/campaign-object) description. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, you cannot create a standalone discount or gift voucher campaign with the type: STANDALONE through the API. Voucherify developers work on adding that feature. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Create Campaign
     * @param [campaignsCreateRequestBody] Specify the details of the campaign that you would like to create.
     */
    public createCampaignWithHttpInfo(campaignsCreateRequestBody?: CampaignsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCampaign(campaignsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * Method to create a batch of vouchers aggregated in one campaign. You can choose a variety of voucher types and define a unique pattern for generating codes.    📘 Global uniqueness  All campaign codes are unique across the whole project. Voucherify will not allow you to generate 2 campaigns with the same coupon code.    🚧 Code generation status  This is an asynchronous action; you cant read or modify a newly created campaign until the code generation is completed. See the creation_status field in the [campaign object](/api-reference/campaigns/campaign-object) description. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, you cannot create a standalone discount or gift voucher campaign with the type: STANDALONE through the API. Voucherify developers work on adding that feature. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Create Campaign
     * @param [campaignsCreateRequestBody] Specify the details of the campaign that you would like to create.
     */
    public createCampaign(campaignsCreateRequestBody?: CampaignsCreateRequestBody, _options?: ConfigurationOptions): Observable<CampaignsCreateResponseBody> {
        return this.createCampaignWithHttpInfo(campaignsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<CampaignsCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Deletes a campaign and all related vouchers. This action cannot be undone. Also, this method immediately removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the campaign and all related vouchers will be moved to [the bin](/api-reference/bin/list-bin-entries). This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Delete Campaign
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [force] If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the campaign and related vouchers will be moved to the bin. Going forward, the user will be able to create the next campaign with exactly the same name.
     */
    public deleteCampaignWithHttpInfo(campaignId: string, force?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsDeleteResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCampaign(campaignId, force, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a campaign and all related vouchers. This action cannot be undone. Also, this method immediately removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the campaign and all related vouchers will be moved to [the bin](/api-reference/bin/list-bin-entries). This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Delete Campaign
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [force] If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the campaign and related vouchers will be moved to the bin. Going forward, the user will be able to create the next campaign with exactly the same name.
     */
    public deleteCampaign(campaignId: string, force?: boolean, _options?: ConfigurationOptions): Observable<CampaignsDeleteResponseBody> {
        return this.deleteCampaignWithHttpInfo(campaignId, force, _options).pipe(map((apiResponse: HttpInfo<CampaignsDeleteResponseBody>) => apiResponse.data));
    }

    /**
     * There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **inactive**. The vouchers in this campaign can no longer be redeemed.
     * Disable Campaign
     * @param campaignId The campaign ID or name of the campaign being disabled. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     */
    public disableCampaignWithHttpInfo(campaignId: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.disableCampaign(campaignId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disableCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **inactive**. The vouchers in this campaign can no longer be redeemed.
     * Disable Campaign
     * @param campaignId The campaign ID or name of the campaign being disabled. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     */
    public disableCampaign(campaignId: string, _options?: ConfigurationOptions): Observable<any> {
        return this.disableCampaignWithHttpInfo(campaignId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **active**. The vouchers in this campaign can be redeemed - only if the redemption occurs after the start date of the campaign and voucher and the voucher and campaign are not expired.
     * Enable Campaign
     * @param campaignId The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
     */
    public enableCampaignWithHttpInfo(campaignId: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.enableCampaign(campaignId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enableCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **active**. The vouchers in this campaign can be redeemed - only if the redemption occurs after the start date of the campaign and voucher and the voucher and campaign are not expired.
     * Enable Campaign
     * @param campaignId The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
     */
    public enableCampaign(campaignId: string, _options?: ConfigurationOptions): Observable<any> {
        return this.enableCampaignWithHttpInfo(campaignId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Export transactions is an asynchronous process that generates a CSV file with the data about credit movements on all gift cards or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Loyalty Campaign Transactions  For loyalty campaigns, this method works in the same way the [POST Export Loyalty Campaign Transactions](/api-reference/loyalties/export-loyalty-campaign-transactions) does.
     * Export Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [campaignsTransactionsExportCreateRequestBody] Specify the parameters for the transaction export.
     */
    public exportCampaignTransactionsWithHttpInfo(campaignId: string, campaignsTransactionsExportCreateRequestBody?: CampaignsTransactionsExportCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsTransactionsExportCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.exportCampaignTransactions(campaignId, campaignsTransactionsExportCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportCampaignTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export transactions is an asynchronous process that generates a CSV file with the data about credit movements on all gift cards or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Loyalty Campaign Transactions  For loyalty campaigns, this method works in the same way the [POST Export Loyalty Campaign Transactions](/api-reference/loyalties/export-loyalty-campaign-transactions) does.
     * Export Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [campaignsTransactionsExportCreateRequestBody] Specify the parameters for the transaction export.
     */
    public exportCampaignTransactions(campaignId: string, campaignsTransactionsExportCreateRequestBody?: CampaignsTransactionsExportCreateRequestBody, _options?: ConfigurationOptions): Observable<CampaignsTransactionsExportCreateResponseBody> {
        return this.exportCampaignTransactionsWithHttpInfo(campaignId, campaignsTransactionsExportCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<CampaignsTransactionsExportCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieves the campaign with the given campaign ID or campaign name.
     * Get Campaign
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     */
    public getCampaignWithHttpInfo(campaignId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCampaign(campaignId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the campaign with the given campaign ID or campaign name.
     * Get Campaign
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     */
    public getCampaign(campaignId: string, _options?: ConfigurationOptions): Observable<CampaignsGetResponseBody> {
        return this.getCampaignWithHttpInfo(campaignId, _options).pipe(map((apiResponse: HttpInfo<CampaignsGetResponseBody>) => apiResponse.data));
    }

    /**
     * Returns data for campaign analytics, covering validations, redemptions, publications, and other details specific to a given campaign type. Use start_date and end_date to narrow down the data to specific periods. 🚧 Campaigns created before v20250602 version This endpoint returns analytics data for campaigns that were created after the [v20250602 version](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20250602) was released on 17 June 2025. Older campaigns return empty data.
     * Get Campaign Summary
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [startDate] Timestamp representing the date which results must begin on. Represented in ISO 8601 format.
     * @param [endDate] Timestamp representing the date which results must end on. Represented in ISO 8601 format.
     */
    public getCampaignSummaryWithHttpInfo(campaignId: string, startDate?: string, endDate?: string, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsSummaryGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCampaignSummary(campaignId, startDate, endDate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignSummaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns data for campaign analytics, covering validations, redemptions, publications, and other details specific to a given campaign type. Use start_date and end_date to narrow down the data to specific periods. 🚧 Campaigns created before v20250602 version This endpoint returns analytics data for campaigns that were created after the [v20250602 version](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20250602) was released on 17 June 2025. Older campaigns return empty data.
     * Get Campaign Summary
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [startDate] Timestamp representing the date which results must begin on. Represented in ISO 8601 format.
     * @param [endDate] Timestamp representing the date which results must end on. Represented in ISO 8601 format.
     */
    public getCampaignSummary(campaignId: string, startDate?: string, endDate?: string, _options?: ConfigurationOptions): Observable<CampaignsSummaryGetResponseBody> {
        return this.getCampaignSummaryWithHttpInfo(campaignId, startDate, endDate, _options).pipe(map((apiResponse: HttpInfo<CampaignsSummaryGetResponseBody>) => apiResponse.data));
    }

    /**
     * Imports vouchers to an **existing** campaign. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Vouchers to Campaign
     * @param campaignId The ID of an existing campaign to which youre importing the codes. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [campaignsImportVoucherItem] Discount type, expiration date and the remaining attributes will be taken from the [Campaign](/api-reference/campaigns/get-campaign) settings.
     */
    public importVouchersToCampaignWithHttpInfo(campaignId: string, campaignsImportVoucherItem?: Array<CampaignsImportVoucherItem>, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsImportCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.importVouchersToCampaign(campaignId, campaignsImportVoucherItem, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importVouchersToCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * Imports vouchers to an **existing** campaign. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Vouchers to Campaign
     * @param campaignId The ID of an existing campaign to which youre importing the codes. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [campaignsImportVoucherItem] Discount type, expiration date and the remaining attributes will be taken from the [Campaign](/api-reference/campaigns/get-campaign) settings.
     */
    public importVouchersToCampaign(campaignId: string, campaignsImportVoucherItem?: Array<CampaignsImportVoucherItem>, _options?: ConfigurationOptions): Observable<CampaignsImportCreateResponseBody> {
        return this.importVouchersToCampaignWithHttpInfo(campaignId, campaignsImportVoucherItem, _options).pipe(map((apiResponse: HttpInfo<CampaignsImportCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Imports vouchers to an **existing** campaign.   The CSV file has to include headers in the first line.  This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Vouchers to Campaign by CSV
     * @param campaignId The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
     * @param [file] File path.
     */
    public importVouchersToCampaignUsingCsvWithHttpInfo(campaignId: string, file?: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsImportCsvCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.importVouchersToCampaignUsingCsv(campaignId, file, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importVouchersToCampaignUsingCsvWithHttpInfo(rsp)));
            }));
    }

    /**
     * Imports vouchers to an **existing** campaign.   The CSV file has to include headers in the first line.  This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Vouchers to Campaign by CSV
     * @param campaignId The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
     * @param [file] File path.
     */
    public importVouchersToCampaignUsingCsv(campaignId: string, file?: HttpFile, _options?: ConfigurationOptions): Observable<CampaignsImportCsvCreateResponseBody> {
        return this.importVouchersToCampaignUsingCsvWithHttpInfo(campaignId, file, _options).pipe(map((apiResponse: HttpInfo<CampaignsImportCsvCreateResponseBody>) => apiResponse.data));
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
    public listCampaignTransactionsWithHttpInfo(campaignId: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, filters?: ParametersFiltersListCampaignTransactions, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsTransactionsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCampaignTransactions(campaignId, limit, order, startingAfterId, filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCampaignTransactionsWithHttpInfo(rsp)));
            }));
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
    public listCampaignTransactions(campaignId: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, filters?: ParametersFiltersListCampaignTransactions, _options?: ConfigurationOptions): Observable<CampaignsTransactionsListResponseBody> {
        return this.listCampaignTransactionsWithHttpInfo(campaignId, limit, order, startingAfterId, filters, _options).pipe(map((apiResponse: HttpInfo<CampaignsTransactionsListResponseBody>) => apiResponse.data));
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
    public listCampaignsWithHttpInfo(limit?: number, page?: number, campaignType?: ParameterCampaignType, expand?: ParameterExpandListCampaigns, campaignStatus?: ParameterCampaignStatusListCampaigns, isReferralCode?: boolean, order?: ParameterOrderListCampaigns, filters?: ParameterFiltersListCampaigns, accessSettings?: ParameterCampaignsAccessSetttings, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCampaigns(limit, page, campaignType, expand, campaignStatus, isReferralCode, order, filters, accessSettings, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCampaignsWithHttpInfo(rsp)));
            }));
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
    public listCampaigns(limit?: number, page?: number, campaignType?: ParameterCampaignType, expand?: ParameterExpandListCampaigns, campaignStatus?: ParameterCampaignStatusListCampaigns, isReferralCode?: boolean, order?: ParameterOrderListCampaigns, filters?: ParameterFiltersListCampaigns, accessSettings?: ParameterCampaignsAccessSetttings, _options?: ConfigurationOptions): Observable<CampaignsListResponseBody> {
        return this.listCampaignsWithHttpInfo(limit, page, campaignType, expand, campaignStatus, isReferralCode, order, filters, accessSettings, _options).pipe(map((apiResponse: HttpInfo<CampaignsListResponseBody>) => apiResponse.data));
    }

    /**
     * Updates the specified campaign by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.  Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped.     🚧 Vouchers will be affected  This method will update vouchers aggregated in the campaign. It will affect all vouchers that are not published or redeemed yet.
     * Update Campaign
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [campaignsUpdateRequestBody] Specify the campaign parameters to be updated.
     */
    public updateCampaignWithHttpInfo(campaignId: string, campaignsUpdateRequestBody?: CampaignsUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCampaign(campaignId, campaignsUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the specified campaign by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.  Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped.     🚧 Vouchers will be affected  This method will update vouchers aggregated in the campaign. It will affect all vouchers that are not published or redeemed yet.
     * Update Campaign
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [campaignsUpdateRequestBody] Specify the campaign parameters to be updated.
     */
    public updateCampaign(campaignId: string, campaignsUpdateRequestBody?: CampaignsUpdateRequestBody, _options?: ConfigurationOptions): Observable<CampaignsUpdateResponseBody> {
        return this.updateCampaignWithHttpInfo(campaignId, campaignsUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<CampaignsUpdateResponseBody>) => apiResponse.data));
    }

}

import { CategoriesApiRequestFactory, CategoriesApiResponseProcessor} from "../apis/CategoriesApi";
export class ObservableCategoriesApi {
    private requestFactory: CategoriesApiRequestFactory;
    private responseProcessor: CategoriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoriesApiRequestFactory,
        responseProcessor?: CategoriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CategoriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CategoriesApiResponseProcessor();
    }

    /**
     * Create category with a specific name and hierarchy.
     * Create Category
     * @param [categoriesCreateRequestBody] Specify the details of the category that you would like to create.
     */
    public createCategoryWithHttpInfo(categoriesCreateRequestBody?: CategoriesCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CategoriesCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCategory(categoriesCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create category with a specific name and hierarchy.
     * Create Category
     * @param [categoriesCreateRequestBody] Specify the details of the category that you would like to create.
     */
    public createCategory(categoriesCreateRequestBody?: CategoriesCreateRequestBody, _options?: ConfigurationOptions): Observable<CategoriesCreateResponseBody> {
        return this.createCategoryWithHttpInfo(categoriesCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<CategoriesCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Delete a category by the category ID.
     * Delete Category
     * @param categoryId Unique category ID assigned by Voucherify.
     */
    public deleteCategoryWithHttpInfo(categoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCategory(categoryId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a category by the category ID.
     * Delete Category
     * @param categoryId Unique category ID assigned by Voucherify.
     */
    public deleteCategory(categoryId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteCategoryWithHttpInfo(categoryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve a category by the category ID.
     * Get Category
     * @param categoryId Unique category ID assigned by Voucherify.
     */
    public getCategoryWithHttpInfo(categoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CategoriesGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCategory(categoryId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a category by the category ID.
     * Get Category
     * @param categoryId Unique category ID assigned by Voucherify.
     */
    public getCategory(categoryId: string, _options?: ConfigurationOptions): Observable<CategoriesGetResponseBody> {
        return this.getCategoryWithHttpInfo(categoryId, _options).pipe(map((apiResponse: HttpInfo<CategoriesGetResponseBody>) => apiResponse.data));
    }

    /**
     * List all categories.
     * List Categories
     */
    public listCategoriesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<CategoriesListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCategories(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCategoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all categories.
     * List Categories
     */
    public listCategories(_options?: ConfigurationOptions): Observable<CategoriesListResponseBody> {
        return this.listCategoriesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<CategoriesListResponseBody>) => apiResponse.data));
    }

    /**
     * Update a category using the category ID.
     * Update Category
     * @param categoryId Unique category ID assigned by Voucherify.
     * @param [categoriesUpdateRequestBody] Specify the details of the category that you would like to update.
     */
    public updateCategoryWithHttpInfo(categoryId: string, categoriesUpdateRequestBody?: CategoriesUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CategoriesUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCategory(categoryId, categoriesUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a category using the category ID.
     * Update Category
     * @param categoryId Unique category ID assigned by Voucherify.
     * @param [categoriesUpdateRequestBody] Specify the details of the category that you would like to update.
     */
    public updateCategory(categoryId: string, categoriesUpdateRequestBody?: CategoriesUpdateRequestBody, _options?: ConfigurationOptions): Observable<CategoriesUpdateResponseBody> {
        return this.updateCategoryWithHttpInfo(categoryId, categoriesUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<CategoriesUpdateResponseBody>) => apiResponse.data));
    }

}

import { ClientSideApiRequestFactory, ClientSideApiResponseProcessor} from "../apis/ClientSideApi";
export class ObservableClientSideApi {
    private requestFactory: ClientSideApiRequestFactory;
    private responseProcessor: ClientSideApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ClientSideApiRequestFactory,
        responseProcessor?: ClientSideApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClientSideApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClientSideApiResponseProcessor();
    }

    /**
     * Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read our dedicated guide to learn about some use cases this endpoint can cover [here](/guides/checking-eligibility). # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.
     * Check Eligibility (client-side)
     * @param [clientQualificationsCheckEligibilityRequestBody] Define order and customer context.
     */
    public checkEligibilityClientSideWithHttpInfo(clientQualificationsCheckEligibilityRequestBody?: ClientQualificationsCheckEligibilityRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ClientQualificationsCheckEligibilityResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.checkEligibilityClientSide(clientQualificationsCheckEligibilityRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkEligibilityClientSideWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read our dedicated guide to learn about some use cases this endpoint can cover [here](/guides/checking-eligibility). # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.
     * Check Eligibility (client-side)
     * @param [clientQualificationsCheckEligibilityRequestBody] Define order and customer context.
     */
    public checkEligibilityClientSide(clientQualificationsCheckEligibilityRequestBody?: ClientQualificationsCheckEligibilityRequestBody, _options?: ConfigurationOptions): Observable<ClientQualificationsCheckEligibilityResponseBody> {
        return this.checkEligibilityClientSideWithHttpInfo(clientQualificationsCheckEligibilityRequestBody, _options).pipe(map((apiResponse: HttpInfo<ClientQualificationsCheckEligibilityResponseBody>) => apiResponse.data));
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
    public listPromotionTiersClientSideWithHttpInfo(origin: string, isAvailable?: boolean, limit?: number, page?: number, order?: ParameterOrderListPromotionTiersClientSide, _options?: ConfigurationOptions): Observable<HttpInfo<ClientPromotionsTiersListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPromotionTiersClientSide(origin, isAvailable, limit, page, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPromotionTiersClientSideWithHttpInfo(rsp)));
            }));
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
    public listPromotionTiersClientSide(origin: string, isAvailable?: boolean, limit?: number, page?: number, order?: ParameterOrderListPromotionTiersClientSide, _options?: ConfigurationOptions): Observable<ClientPromotionsTiersListResponseBody> {
        return this.listPromotionTiersClientSideWithHttpInfo(origin, isAvailable, limit, page, order, _options).pipe(map((apiResponse: HttpInfo<ClientPromotionsTiersListResponseBody>) => apiResponse.data));
    }

    /**
     * This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications. # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:    📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).
     * Redeem Stackable Discounts (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [clientRedemptionsRedeemRequestBody]
     */
    public redeemStackedDiscountsClientSideWithHttpInfo(origin: string, clientRedemptionsRedeemRequestBody?: ClientRedemptionsRedeemRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ClientRedemptionsRedeemResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.redeemStackedDiscountsClientSide(origin, clientRedemptionsRedeemRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.redeemStackedDiscountsClientSideWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications. # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:    📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).
     * Redeem Stackable Discounts (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [clientRedemptionsRedeemRequestBody]
     */
    public redeemStackedDiscountsClientSide(origin: string, clientRedemptionsRedeemRequestBody?: ClientRedemptionsRedeemRequestBody, _options?: ConfigurationOptions): Observable<ClientRedemptionsRedeemResponseBody> {
        return this.redeemStackedDiscountsClientSideWithHttpInfo(origin, clientRedemptionsRedeemRequestBody, _options).pipe(map((apiResponse: HttpInfo<ClientRedemptionsRedeemResponseBody>) => apiResponse.data));
    }

    /**
     * To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.
     * Track Custom Event (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [clientEventsCreateRequestBody] Specify the details of the custom event.
     */
    public trackCustomEventClientSideWithHttpInfo(origin: string, clientEventsCreateRequestBody?: ClientEventsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ClientEventsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.trackCustomEventClientSide(origin, clientEventsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.trackCustomEventClientSideWithHttpInfo(rsp)));
            }));
    }

    /**
     * To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.
     * Track Custom Event (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [clientEventsCreateRequestBody] Specify the details of the custom event.
     */
    public trackCustomEventClientSide(origin: string, clientEventsCreateRequestBody?: ClientEventsCreateRequestBody, _options?: ConfigurationOptions): Observable<ClientEventsCreateResponseBody> {
        return this.trackCustomEventClientSideWithHttpInfo(origin, clientEventsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ClientEventsCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Verify redeemables provided in the request. This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications.
     * Validate Stackable Discounts (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [clientValidationsValidateRequestBody]
     */
    public validateStackedDiscountsClientSideWithHttpInfo(origin: string, clientValidationsValidateRequestBody?: ClientValidationsValidateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ClientValidationsValidateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.validateStackedDiscountsClientSide(origin, clientValidationsValidateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateStackedDiscountsClientSideWithHttpInfo(rsp)));
            }));
    }

    /**
     * Verify redeemables provided in the request. This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications.
     * Validate Stackable Discounts (client-side)
     * @param origin Indicates the origin (scheme, hostname, and port).
     * @param [clientValidationsValidateRequestBody]
     */
    public validateStackedDiscountsClientSide(origin: string, clientValidationsValidateRequestBody?: ClientValidationsValidateRequestBody, _options?: ConfigurationOptions): Observable<ClientValidationsValidateResponseBody> {
        return this.validateStackedDiscountsClientSideWithHttpInfo(origin, clientValidationsValidateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ClientValidationsValidateResponseBody>) => apiResponse.data));
    }

}

import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";
export class ObservableCustomersApi {
    private requestFactory: CustomersApiRequestFactory;
    private responseProcessor: CustomersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomersApiRequestFactory,
        responseProcessor?: CustomersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomersApiResponseProcessor();
    }

    /**
     * Creates a customer object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the customer database, Voucherify will return a related customer object with updated fields.
     * Create Customer
     * @param [customersCreateRequestBody] Create a customer with specified parameters.
     */
    public createCustomerWithHttpInfo(customersCreateRequestBody?: CustomersCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CustomersCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCustomer(customersCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a customer object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the customer database, Voucherify will return a related customer object with updated fields.
     * Create Customer
     * @param [customersCreateRequestBody] Create a customer with specified parameters.
     */
    public createCustomer(customersCreateRequestBody?: CustomersCreateRequestBody, _options?: ConfigurationOptions): Observable<CustomersCreateResponseBody> {
        return this.createCustomerWithHttpInfo(customersCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<CustomersCreateResponseBody>) => apiResponse.data));
    }

    /**
     * The organization user can remove consumer data permanently from the Voucherify system by using this API method. It deletes all customer data and connected resources. It makes the customer profile forgotten by Voucherify.
     * Delete Customer Permanently
     * @param customerId A Voucherify customers id or source_id.
     */
    public customerPermanentlyDeletionWithHttpInfo(customerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CustomersPermanentDeletionCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.customerPermanentlyDeletion(customerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerPermanentlyDeletionWithHttpInfo(rsp)));
            }));
    }

    /**
     * The organization user can remove consumer data permanently from the Voucherify system by using this API method. It deletes all customer data and connected resources. It makes the customer profile forgotten by Voucherify.
     * Delete Customer Permanently
     * @param customerId A Voucherify customers id or source_id.
     */
    public customerPermanentlyDeletion(customerId: string, _options?: ConfigurationOptions): Observable<CustomersPermanentDeletionCreateResponseBody> {
        return this.customerPermanentlyDeletionWithHttpInfo(customerId, _options).pipe(map((apiResponse: HttpInfo<CustomersPermanentDeletionCreateResponseBody>) => apiResponse.data));
    }

    /**
     * This method deletes a customer.
     * Delete Customer
     * @param customerId A Voucherify customers id or source_id.
     */
    public deleteCustomerWithHttpInfo(customerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCustomer(customerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method deletes a customer.
     * Delete Customer
     * @param customerId A Voucherify customers id or source_id.
     */
    public deleteCustomer(customerId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteCustomerWithHttpInfo(customerId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves details of a given customer by customers id or source_id.
     * Get Customer
     * @param customerId A Voucherify customers id or source_id.
     */
    public getCustomerWithHttpInfo(customerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CustomersGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCustomer(customerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves details of a given customer by customers id or source_id.
     * Get Customer
     * @param customerId A Voucherify customers id or source_id.
     */
    public getCustomer(customerId: string, _options?: ConfigurationOptions): Observable<CustomersGetResponseBody> {
        return this.getCustomerWithHttpInfo(customerId, _options).pipe(map((apiResponse: HttpInfo<CustomersGetResponseBody>) => apiResponse.data));
    }

    /**
     * This API method lets you import or update customer data. To get a proper and valid response, please send a CSV file with data separated by commas.   # Request Example # CSV File Format The CSV file has to include headers in the first line. All properties which cannot be mapped to standard customer fields will be added to the metadata object.  📘 Standard customer fields mapping  **No spaces allowed in field names**    Id, Name, Email, Phone, Birthdate, Source_id, Address_line_1, Address_line_2, Address_Postal_Code, Address_City, Address_State, Address_Country, Description, Metadata_name_1, Metadata_name_2 # Update Customers using CSV If you would like to update customers data, you can do it using the CSV file with new data. However, remember to include a source_id in your CSV file to manage the update successfully. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import and Update Customers using CSV
     * @param [file] File path.
     */
    public importCustomersUsingCsvWithHttpInfo(file?: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<CustomersImportCsvCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.importCustomersUsingCsv(file, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importCustomersUsingCsvWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API method lets you import or update customer data. To get a proper and valid response, please send a CSV file with data separated by commas.   # Request Example # CSV File Format The CSV file has to include headers in the first line. All properties which cannot be mapped to standard customer fields will be added to the metadata object.  📘 Standard customer fields mapping  **No spaces allowed in field names**    Id, Name, Email, Phone, Birthdate, Source_id, Address_line_1, Address_line_2, Address_Postal_Code, Address_City, Address_State, Address_Country, Description, Metadata_name_1, Metadata_name_2 # Update Customers using CSV If you would like to update customers data, you can do it using the CSV file with new data. However, remember to include a source_id in your CSV file to manage the update successfully. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import and Update Customers using CSV
     * @param [file] File path.
     */
    public importCustomersUsingCsv(file?: HttpFile, _options?: ConfigurationOptions): Observable<CustomersImportCsvCreateResponseBody> {
        return this.importCustomersUsingCsvWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<CustomersImportCsvCreateResponseBody>) => apiResponse.data));
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
    public listCustomerActivityWithHttpInfo(customerId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, startDate?: Date, endDate?: Date, campaignId?: string, campaignType?: ParameterCampaignType, category?: ParameterActivityCategory, type?: ParameterCustomerEvent, _options?: ConfigurationOptions): Observable<HttpInfo<CustomersActivityListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCustomerActivity(customerId, limit, order, startingAfterId, startDate, endDate, campaignId, campaignType, category, type, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCustomerActivityWithHttpInfo(rsp)));
            }));
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
    public listCustomerActivity(customerId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, startDate?: Date, endDate?: Date, campaignId?: string, campaignType?: ParameterCampaignType, category?: ParameterActivityCategory, type?: ParameterCustomerEvent, _options?: ConfigurationOptions): Observable<CustomersActivityListResponseBody> {
        return this.listCustomerActivityWithHttpInfo(customerId, limit, order, startingAfterId, startDate, endDate, campaignId, campaignType, category, type, _options).pipe(map((apiResponse: HttpInfo<CustomersActivityListResponseBody>) => apiResponse.data));
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
    public listCustomerRedeemablesWithHttpInfo(customerId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListCustomerRedeemables, _options?: ConfigurationOptions): Observable<HttpInfo<CustomersRedeemablesListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCustomerRedeemables(customerId, limit, order, startingAfterId, filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCustomerRedeemablesWithHttpInfo(rsp)));
            }));
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
    public listCustomerRedeemables(customerId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListCustomerRedeemables, _options?: ConfigurationOptions): Observable<CustomersRedeemablesListResponseBody> {
        return this.listCustomerRedeemablesWithHttpInfo(customerId, limit, order, startingAfterId, filters, _options).pipe(map((apiResponse: HttpInfo<CustomersRedeemablesListResponseBody>) => apiResponse.data));
    }

    /**
     * Returns the list of segments IDs to which the customer belongs to.   If you pass a customerId which is not stored and recognized by Voucherify as an existing customer in the system, the response will generate a list of segments that the customer would potentialy qualify for if they were to become a customer tracked in the system.
     * List Customer\'s Segments
     * @param customerId Unique identifier of a customer represented by an internal customer ID or customer source ID.
     */
    public listCustomerSegmentsWithHttpInfo(customerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CustomersSegmentsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCustomerSegments(customerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCustomerSegmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the list of segments IDs to which the customer belongs to.   If you pass a customerId which is not stored and recognized by Voucherify as an existing customer in the system, the response will generate a list of segments that the customer would potentialy qualify for if they were to become a customer tracked in the system.
     * List Customer\'s Segments
     * @param customerId Unique identifier of a customer represented by an internal customer ID or customer source ID.
     */
    public listCustomerSegments(customerId: string, _options?: ConfigurationOptions): Observable<CustomersSegmentsListResponseBody> {
        return this.listCustomerSegmentsWithHttpInfo(customerId, _options).pipe(map((apiResponse: HttpInfo<CustomersSegmentsListResponseBody>) => apiResponse.data));
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
    public listCustomersWithHttpInfo(limit?: number, page?: number, email?: string, city?: string, name?: string, segmentId?: string, createdAtBefore?: Date, createdAtAfter?: Date, updatedAtBefore?: Date, updatedAtAfter?: Date, order?: ParameterOrderListCustomers, startingAfter?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<CustomersListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCustomers(limit, page, email, city, name, segmentId, createdAtBefore, createdAtAfter, updatedAtBefore, updatedAtAfter, order, startingAfter, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCustomersWithHttpInfo(rsp)));
            }));
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
    public listCustomers(limit?: number, page?: number, email?: string, city?: string, name?: string, segmentId?: string, createdAtBefore?: Date, createdAtAfter?: Date, updatedAtBefore?: Date, updatedAtAfter?: Date, order?: ParameterOrderListCustomers, startingAfter?: Date, _options?: ConfigurationOptions): Observable<CustomersListResponseBody> {
        return this.listCustomersWithHttpInfo(limit, page, email, city, name, segmentId, createdAtBefore, createdAtAfter, updatedAtBefore, updatedAtAfter, order, startingAfter, _options).pipe(map((apiResponse: HttpInfo<CustomersListResponseBody>) => apiResponse.data));
    }

    /**
     * Updates the specified customer by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.
     * Update Customer
     * @param customerId A Voucherify customers id or source_id.
     * @param [customersUpdateRequestBody] Specify the parameters to be updated.
     */
    public updateCustomerWithHttpInfo(customerId: string, customersUpdateRequestBody?: CustomersUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CustomersUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCustomer(customerId, customersUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the specified customer by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.
     * Update Customer
     * @param customerId A Voucherify customers id or source_id.
     * @param [customersUpdateRequestBody] Specify the parameters to be updated.
     */
    public updateCustomer(customerId: string, customersUpdateRequestBody?: CustomersUpdateRequestBody, _options?: ConfigurationOptions): Observable<CustomersUpdateResponseBody> {
        return this.updateCustomerWithHttpInfo(customerId, customersUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<CustomersUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * Updates customers in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a customer object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Customers in Bulk
     * @param [customersUpdateInBulkRequestBody] List the customer fields to be updated in each customer object.
     */
    public updateCustomersInBulkWithHttpInfo(customersUpdateInBulkRequestBody?: Array<CustomersUpdateInBulkRequestBody>, _options?: ConfigurationOptions): Observable<HttpInfo<CustomersUpdateInBulkResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCustomersInBulk(customersUpdateInBulkRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCustomersInBulkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates customers in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a customer object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Customers in Bulk
     * @param [customersUpdateInBulkRequestBody] List the customer fields to be updated in each customer object.
     */
    public updateCustomersInBulk(customersUpdateInBulkRequestBody?: Array<CustomersUpdateInBulkRequestBody>, _options?: ConfigurationOptions): Observable<CustomersUpdateInBulkResponseBody> {
        return this.updateCustomersInBulkWithHttpInfo(customersUpdateInBulkRequestBody, _options).pipe(map((apiResponse: HttpInfo<CustomersUpdateInBulkResponseBody>) => apiResponse.data));
    }

    /**
     * Updates metadata parameters for a list of customers. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Customers\' Metadata in Bulk
     * @param [customersMetadataUpdateInBulkRequestBody] List the source_ids of the customers you would like to update with the metadata key/value pairs.
     */
    public updateCustomersMetadataInBulkWithHttpInfo(customersMetadataUpdateInBulkRequestBody?: CustomersMetadataUpdateInBulkRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CustomersMetadataUpdateInBulkResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCustomersMetadataInBulk(customersMetadataUpdateInBulkRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCustomersMetadataInBulkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates metadata parameters for a list of customers. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Customers\' Metadata in Bulk
     * @param [customersMetadataUpdateInBulkRequestBody] List the source_ids of the customers you would like to update with the metadata key/value pairs.
     */
    public updateCustomersMetadataInBulk(customersMetadataUpdateInBulkRequestBody?: CustomersMetadataUpdateInBulkRequestBody, _options?: ConfigurationOptions): Observable<CustomersMetadataUpdateInBulkResponseBody> {
        return this.updateCustomersMetadataInBulkWithHttpInfo(customersMetadataUpdateInBulkRequestBody, _options).pipe(map((apiResponse: HttpInfo<CustomersMetadataUpdateInBulkResponseBody>) => apiResponse.data));
    }

}

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class ObservableEventsApi {
    private requestFactory: EventsApiRequestFactory;
    private responseProcessor: EventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
    }

    /**
     * To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.
     * Track Custom Event
     * @param [eventsCreateRequestBody] Specify the details of the custom event.
     */
    public trackCustomEventWithHttpInfo(eventsCreateRequestBody?: EventsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<EventsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.trackCustomEvent(eventsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.trackCustomEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.
     * Track Custom Event
     * @param [eventsCreateRequestBody] Specify the details of the custom event.
     */
    public trackCustomEvent(eventsCreateRequestBody?: EventsCreateRequestBody, _options?: ConfigurationOptions): Observable<EventsCreateResponseBody> {
        return this.trackCustomEventWithHttpInfo(eventsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<EventsCreateResponseBody>) => apiResponse.data));
    }

}

import { ExportsApiRequestFactory, ExportsApiResponseProcessor} from "../apis/ExportsApi";
export class ObservableExportsApi {
    private requestFactory: ExportsApiRequestFactory;
    private responseProcessor: ExportsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExportsApiRequestFactory,
        responseProcessor?: ExportsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExportsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExportsApiResponseProcessor();
    }

    /**
     * Create export object. The export can be any of the following types: voucher, redemption, publication, customer, order, points_expiration, voucher_transactions, product, or sku.   # Defaults If you only specify the object type in the request body without specifying the fields, the API will return the following fields per export object:    📘 Date and time in the export API  The exported date and times are always provided in the UTC time zone. # Fetching particular data sets Using the parameters body parameter, you can narrow down which fields to export and how to filter the results. The fields are an array of strings containing the data that you would like to export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields: # Orders     # Vouchers        # Publications   # Redemptions    # Customers       # Points Expirations    # Gift Card Transactions    # Loyalty Card Transactions   
     * Create Export
     * @param [exportsCreateRequestBody] Specify the details of the export that you would like to create.
     */
    public createExportWithHttpInfo(exportsCreateRequestBody?: ExportsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ExportsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createExport(exportsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createExportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create export object. The export can be any of the following types: voucher, redemption, publication, customer, order, points_expiration, voucher_transactions, product, or sku.   # Defaults If you only specify the object type in the request body without specifying the fields, the API will return the following fields per export object:    📘 Date and time in the export API  The exported date and times are always provided in the UTC time zone. # Fetching particular data sets Using the parameters body parameter, you can narrow down which fields to export and how to filter the results. The fields are an array of strings containing the data that you would like to export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields: # Orders     # Vouchers        # Publications   # Redemptions    # Customers       # Points Expirations    # Gift Card Transactions    # Loyalty Card Transactions   
     * Create Export
     * @param [exportsCreateRequestBody] Specify the details of the export that you would like to create.
     */
    public createExport(exportsCreateRequestBody?: ExportsCreateRequestBody, _options?: ConfigurationOptions): Observable<ExportsCreateResponseBody> {
        return this.createExportWithHttpInfo(exportsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ExportsCreateResponseBody>) => apiResponse.data));
    }

    /**
     * This method deletes a previously created export object.
     * Delete Export
     * @param exportId Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
     */
    public deleteExportWithHttpInfo(exportId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteExport(exportId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteExportWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method deletes a previously created export object.
     * Delete Export
     * @param exportId Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
     */
    public deleteExport(exportId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteExportWithHttpInfo(exportId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Download the contents of the exported CSV file.   📘 Important notes  **Base URL:**   - https://download.voucherify.io (Europe)   - https://us1.download.voucherify.io (US)   - https://as1.download.voucherify.io (Asia)   **Token:** Can be found within the result parameter of the [Get Export](/api-reference/exports/get-export) method response.
     * Download Export
     * @param exportId Unique export object ID.
     * @param [token] Token that was issued to the export, to get this token, get the export first
     */
    public downloadExportWithHttpInfo(exportId: string, token?: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.downloadExport(exportId, token, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadExportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Download the contents of the exported CSV file.   📘 Important notes  **Base URL:**   - https://download.voucherify.io (Europe)   - https://us1.download.voucherify.io (US)   - https://as1.download.voucherify.io (Asia)   **Token:** Can be found within the result parameter of the [Get Export](/api-reference/exports/get-export) method response.
     * Download Export
     * @param exportId Unique export object ID.
     * @param [token] Token that was issued to the export, to get this token, get the export first
     */
    public downloadExport(exportId: string, token?: string, _options?: ConfigurationOptions): Observable<string> {
        return this.downloadExportWithHttpInfo(exportId, token, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Retrieves the URL of the downloadable file, which was generated via the [Create Export](/api-reference/exports/create-export) method.
     * Get Export
     * @param exportId Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
     */
    public getExportWithHttpInfo(exportId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ExportsGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getExport(exportId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the URL of the downloadable file, which was generated via the [Create Export](/api-reference/exports/create-export) method.
     * Get Export
     * @param exportId Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
     */
    public getExport(exportId: string, _options?: ConfigurationOptions): Observable<ExportsGetResponseBody> {
        return this.getExportWithHttpInfo(exportId, _options).pipe(map((apiResponse: HttpInfo<ExportsGetResponseBody>) => apiResponse.data));
    }

    /**
     * List all exports. 
     * List Exports
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listExportsWithHttpInfo(limit?: number, page?: number, order?: ParameterOrderListExports, _options?: ConfigurationOptions): Observable<HttpInfo<ExportsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listExports(limit, page, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listExportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all exports. 
     * List Exports
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listExports(limit?: number, page?: number, order?: ParameterOrderListExports, _options?: ConfigurationOptions): Observable<ExportsListResponseBody> {
        return this.listExportsWithHttpInfo(limit, page, order, _options).pipe(map((apiResponse: HttpInfo<ExportsListResponseBody>) => apiResponse.data));
    }

}

import { LocationsApiRequestFactory, LocationsApiResponseProcessor} from "../apis/LocationsApi";
export class ObservableLocationsApi {
    private requestFactory: LocationsApiRequestFactory;
    private responseProcessor: LocationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationsApiRequestFactory,
        responseProcessor?: LocationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationsApiResponseProcessor();
    }

    /**
     * Returns a location object.
     * Get Location
     * @param locationId The unique location ID.
     */
    public getLocationWithHttpInfo(locationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LocationsGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLocation(locationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLocationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a location object.
     * Get Location
     * @param locationId The unique location ID.
     */
    public getLocation(locationId: string, _options?: ConfigurationOptions): Observable<LocationsGetResponseBody> {
        return this.getLocationWithHttpInfo(locationId, _options).pipe(map((apiResponse: HttpInfo<LocationsGetResponseBody>) => apiResponse.data));
    }

    /**
     * Returns a list of your locations.
     * List Locations
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [filters] Filter the locations using one of the available filters.
     * @param [endDate] A filter on the list based on the end date. This will filter out all locations whose end date falls before the specified date and time. A date value must be presented in the ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16).
     */
    public listLocationsWithHttpInfo(limit?: number, order?: ParameterOrderListLocations, filters?: ParameterFiltersListLocations, endDate?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<LocationsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLocations(limit, order, filters, endDate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLocationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of your locations.
     * List Locations
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [filters] Filter the locations using one of the available filters.
     * @param [endDate] A filter on the list based on the end date. This will filter out all locations whose end date falls before the specified date and time. A date value must be presented in the ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16).
     */
    public listLocations(limit?: number, order?: ParameterOrderListLocations, filters?: ParameterFiltersListLocations, endDate?: Date, _options?: ConfigurationOptions): Observable<LocationsListResponseBody> {
        return this.listLocationsWithHttpInfo(limit, order, filters, endDate, _options).pipe(map((apiResponse: HttpInfo<LocationsListResponseBody>) => apiResponse.data));
    }

}

import { LoyaltiesApiRequestFactory, LoyaltiesApiResponseProcessor} from "../apis/LoyaltiesApi";
export class ObservableLoyaltiesApi {
    private requestFactory: LoyaltiesApiRequestFactory;
    private responseProcessor: LoyaltiesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LoyaltiesApiRequestFactory,
        responseProcessor?: LoyaltiesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LoyaltiesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LoyaltiesApiResponseProcessor();
    }

    /**
     * Activate manually the pending points and add them to the loyalty card. The pending points are determined by the pending point ID. Once activated, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Activate Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     */
    public activateMemberPendingPointsWithHttpInfo(memberId: string, pendingPointsId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersPendingPointsActivateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.activateMemberPendingPoints(memberId, pendingPointsId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.activateMemberPendingPointsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Activate manually the pending points and add them to the loyalty card. The pending points are determined by the pending point ID. Once activated, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Activate Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     */
    public activateMemberPendingPoints(memberId: string, pendingPointsId: string, _options?: ConfigurationOptions): Observable<LoyaltiesMembersPendingPointsActivateResponseBody> {
        return this.activateMemberPendingPointsWithHttpInfo(memberId, pendingPointsId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersPendingPointsActivateResponseBody>) => apiResponse.data));
    }

    /**
     * This method assigns a loyalty card to a customer. It selects a [loyalty card](/api-reference/vouchers/get-voucher) suitable for publication, adds a publish entry, and returns the published voucher.   A voucher is suitable for publication when its active and hasnt been published yet.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use **auto-update** campaign.
     * Add Member
     * @param campaignId Unique campaign ID of the loyalty program.
     * @param [loyaltiesMembersCreateRequestBody] Provide details to whom the loyalty card should be assigned.     You can choose to either specify the exact loyalty card code that you want to publish from existin (non-assigned) codes, or choose not to specify a voucher code. If you choose not to specify a code in the request paylaod, then the system will choose the next available voucher code available to be assigned to a customer.   You can also include metadata in the request payload. This metadata will be assigned to the publication object, but will not be returned in the response to this endpoint. To see of publications (assignments of particular codes to customers) and publication metadata, use the [List Publications](/api-reference/publications/list-publications) endpoint.
     */
    public addMemberWithHttpInfo(campaignId: string, loyaltiesMembersCreateRequestBody?: LoyaltiesMembersCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addMember(campaignId, loyaltiesMembersCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method assigns a loyalty card to a customer. It selects a [loyalty card](/api-reference/vouchers/get-voucher) suitable for publication, adds a publish entry, and returns the published voucher.   A voucher is suitable for publication when its active and hasnt been published yet.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use **auto-update** campaign.
     * Add Member
     * @param campaignId Unique campaign ID of the loyalty program.
     * @param [loyaltiesMembersCreateRequestBody] Provide details to whom the loyalty card should be assigned.     You can choose to either specify the exact loyalty card code that you want to publish from existin (non-assigned) codes, or choose not to specify a voucher code. If you choose not to specify a code in the request paylaod, then the system will choose the next available voucher code available to be assigned to a customer.   You can also include metadata in the request payload. This metadata will be assigned to the publication object, but will not be returned in the response to this endpoint. To see of publications (assignments of particular codes to customers) and publication metadata, use the [List Publications](/api-reference/publications/list-publications) endpoint.
     */
    public addMember(campaignId: string, loyaltiesMembersCreateRequestBody?: LoyaltiesMembersCreateRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesMembersCreateResponseBody> {
        return this.addMemberWithHttpInfo(campaignId, loyaltiesMembersCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Adjusts the pending points with a given ID. You can add or subtract the number of points. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Adjust Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     * @param [loyaltiesMembersPendingPointsBalanceRequestBody] Define the number of pending points to be added or subtracted.
     */
    public adjustMemberPendingPointsWithHttpInfo(memberId: string, pendingPointsId: string, loyaltiesMembersPendingPointsBalanceRequestBody?: LoyaltiesMembersPendingPointsBalanceRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersPendingPointsBalanceResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.adjustMemberPendingPoints(memberId, pendingPointsId, loyaltiesMembersPendingPointsBalanceRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.adjustMemberPendingPointsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adjusts the pending points with a given ID. You can add or subtract the number of points. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Adjust Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     * @param [loyaltiesMembersPendingPointsBalanceRequestBody] Define the number of pending points to be added or subtracted.
     */
    public adjustMemberPendingPoints(memberId: string, pendingPointsId: string, loyaltiesMembersPendingPointsBalanceRequestBody?: LoyaltiesMembersPendingPointsBalanceRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesMembersPendingPointsBalanceResponseBody> {
        return this.adjustMemberPendingPointsWithHttpInfo(memberId, pendingPointsId, loyaltiesMembersPendingPointsBalanceRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersPendingPointsBalanceResponseBody>) => apiResponse.data));
    }

    /**
     * Cancel manually the pending points for the loyalty card. The pending points are determined by the pending point ID. Once canceled, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body and it returns an empty, 204, response. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Cancel Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     */
    public cancelMemberPendingPointsWithHttpInfo(memberId: string, pendingPointsId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.cancelMemberPendingPoints(memberId, pendingPointsId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelMemberPendingPointsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancel manually the pending points for the loyalty card. The pending points are determined by the pending point ID. Once canceled, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body and it returns an empty, 204, response. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Cancel Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param pendingPointsId Unique pending point identifier, assigned by Voucherify.
     */
    public cancelMemberPendingPoints(memberId: string, pendingPointsId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.cancelMemberPendingPointsWithHttpInfo(memberId, pendingPointsId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create earning rules for a loyalty campaign.  🚧 Maximum number of earning rules  You can create up to 100 earning rules per project. The limit can be customized for clients with a single-tenant setup.
     * Create Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [loyaltiesEarningRulesCreateRequestBodyItem] Customize the request body based on the type of earning rules you would like to create. The request body is an array of objects. The required minimum properties to include in the payload for each object are event and loyalty. Additionally, if you choose to add a validity_timeframe, you must include a start_date. Furthermore, an earning rule event type:   - customer.segment.entered requires a segment object - a custom event requires a custom_event object - a customer.loyalty.tier.joined, customer.loyalty.tier.left, customer.loyalty.tier.upgraded, customer.loyalty.tier.downgraded, customer.loyalty.tier.prolonged requires a loyalty_tier object
     */
    public createEarningRuleWithHttpInfo(campaignId: string, loyaltiesEarningRulesCreateRequestBodyItem?: Array<LoyaltiesEarningRulesCreateRequestBodyItem>, _options?: ConfigurationOptions): Observable<HttpInfo<Array<LoyaltiesEarningRulesCreateResponseBody>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createEarningRule(campaignId, loyaltiesEarningRulesCreateRequestBodyItem, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEarningRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create earning rules for a loyalty campaign.  🚧 Maximum number of earning rules  You can create up to 100 earning rules per project. The limit can be customized for clients with a single-tenant setup.
     * Create Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [loyaltiesEarningRulesCreateRequestBodyItem] Customize the request body based on the type of earning rules you would like to create. The request body is an array of objects. The required minimum properties to include in the payload for each object are event and loyalty. Additionally, if you choose to add a validity_timeframe, you must include a start_date. Furthermore, an earning rule event type:   - customer.segment.entered requires a segment object - a custom event requires a custom_event object - a customer.loyalty.tier.joined, customer.loyalty.tier.left, customer.loyalty.tier.upgraded, customer.loyalty.tier.downgraded, customer.loyalty.tier.prolonged requires a loyalty_tier object
     */
    public createEarningRule(campaignId: string, loyaltiesEarningRulesCreateRequestBodyItem?: Array<LoyaltiesEarningRulesCreateRequestBodyItem>, _options?: ConfigurationOptions): Observable<Array<LoyaltiesEarningRulesCreateResponseBody>> {
        return this.createEarningRuleWithHttpInfo(campaignId, loyaltiesEarningRulesCreateRequestBodyItem, _options).pipe(map((apiResponse: HttpInfo<Array<LoyaltiesEarningRulesCreateResponseBody>>) => apiResponse.data));
    }

    /**
     * Creates loyalty tiers for desired campaign.
     * Create loyalty tiers
     * @param campaignId Unique loyalty campaign ID or name.
     * @param [loyaltiesTiersCreateInBulkRequestBodyItem] Provide tier definitions you want to add to existing loyalty campaign.
     */
    public createInBulkLoyaltyTiersWithHttpInfo(campaignId: string, loyaltiesTiersCreateInBulkRequestBodyItem?: Array<LoyaltiesTiersCreateInBulkRequestBodyItem>, _options?: ConfigurationOptions): Observable<HttpInfo<Array<LoyaltyTier>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createInBulkLoyaltyTiers(campaignId, loyaltiesTiersCreateInBulkRequestBodyItem, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInBulkLoyaltyTiersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates loyalty tiers for desired campaign.
     * Create loyalty tiers
     * @param campaignId Unique loyalty campaign ID or name.
     * @param [loyaltiesTiersCreateInBulkRequestBodyItem] Provide tier definitions you want to add to existing loyalty campaign.
     */
    public createInBulkLoyaltyTiers(campaignId: string, loyaltiesTiersCreateInBulkRequestBodyItem?: Array<LoyaltiesTiersCreateInBulkRequestBodyItem>, _options?: ConfigurationOptions): Observable<Array<LoyaltyTier>> {
        return this.createInBulkLoyaltyTiersWithHttpInfo(campaignId, loyaltiesTiersCreateInBulkRequestBodyItem, _options).pipe(map((apiResponse: HttpInfo<Array<LoyaltyTier>>) => apiResponse.data));
    }

    /**
     * Creates a batch of [loyalty cards](/api-reference/loyalties/get-member) aggregated in a single loyalty campaign. It also allows you to define a custom codes pattern.    📘 Global uniqueness  All codes are unique across the whole project. Voucherify wont allow to generate the same codes in any of your campaigns.  🚧 Asynchronous action!  This is an asynchronous action, you cant read or modify a newly created campaign until the code generation is completed. See creation_status field in the [loyalty campaign object](/api-reference/loyalties/loyalty-campaign-object) description.
     * Create Loyalty Campaign
     * @param [loyaltiesCreateCampaignRequestBody] Specify the loyalty campaign details.
     */
    public createLoyaltyProgramWithHttpInfo(loyaltiesCreateCampaignRequestBody?: LoyaltiesCreateCampaignRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesCreateCampaignResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createLoyaltyProgram(loyaltiesCreateCampaignRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLoyaltyProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a batch of [loyalty cards](/api-reference/loyalties/get-member) aggregated in a single loyalty campaign. It also allows you to define a custom codes pattern.    📘 Global uniqueness  All codes are unique across the whole project. Voucherify wont allow to generate the same codes in any of your campaigns.  🚧 Asynchronous action!  This is an asynchronous action, you cant read or modify a newly created campaign until the code generation is completed. See creation_status field in the [loyalty campaign object](/api-reference/loyalties/loyalty-campaign-object) description.
     * Create Loyalty Campaign
     * @param [loyaltiesCreateCampaignRequestBody] Specify the loyalty campaign details.
     */
    public createLoyaltyProgram(loyaltiesCreateCampaignRequestBody?: LoyaltiesCreateCampaignRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesCreateCampaignResponseBody> {
        return this.createLoyaltyProgramWithHttpInfo(loyaltiesCreateCampaignRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesCreateCampaignResponseBody>) => apiResponse.data));
    }

    /**
     * Schedule the generation of a point expiration CSV file for a particular campaign. It can list point buckets, which can have an ACTIVE or EXPIRED status.
     * Export Loyalty Campaign Point Expiration
     * @param campaignId Unique campaign ID or name.
     * @param [loyaltiesPointsExpirationExportCreateRequestBody] Specify the data filters, types of data to return and order in which the results should be returned.
     */
    public createPointsExpirationExportWithHttpInfo(campaignId: string, loyaltiesPointsExpirationExportCreateRequestBody?: LoyaltiesPointsExpirationExportCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesPointsExpirationExportCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPointsExpirationExport(campaignId, loyaltiesPointsExpirationExportCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPointsExpirationExportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Schedule the generation of a point expiration CSV file for a particular campaign. It can list point buckets, which can have an ACTIVE or EXPIRED status.
     * Export Loyalty Campaign Point Expiration
     * @param campaignId Unique campaign ID or name.
     * @param [loyaltiesPointsExpirationExportCreateRequestBody] Specify the data filters, types of data to return and order in which the results should be returned.
     */
    public createPointsExpirationExport(campaignId: string, loyaltiesPointsExpirationExportCreateRequestBody?: LoyaltiesPointsExpirationExportCreateRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesPointsExpirationExportCreateResponseBody> {
        return this.createPointsExpirationExportWithHttpInfo(campaignId, loyaltiesPointsExpirationExportCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesPointsExpirationExportCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Add rewards to a loyalty campaign.
     * Create Loyalty Campaign Reward Assignment
     * @param campaignId Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [loyaltiesRewardsCreateAssignmentItemRequestBody] Define the cost of the rewards in loyalty points.
     */
    public createRewardAssignment1WithHttpInfo(campaignId: string, loyaltiesRewardsCreateAssignmentItemRequestBody?: Array<LoyaltiesRewardsCreateAssignmentItemRequestBody>, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesRewardsCreateAssignmentResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createRewardAssignment1(campaignId, loyaltiesRewardsCreateAssignmentItemRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRewardAssignment1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Add rewards to a loyalty campaign.
     * Create Loyalty Campaign Reward Assignment
     * @param campaignId Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [loyaltiesRewardsCreateAssignmentItemRequestBody] Define the cost of the rewards in loyalty points.
     */
    public createRewardAssignment1(campaignId: string, loyaltiesRewardsCreateAssignmentItemRequestBody?: Array<LoyaltiesRewardsCreateAssignmentItemRequestBody>, _options?: ConfigurationOptions): Observable<LoyaltiesRewardsCreateAssignmentResponseBody> {
        return this.createRewardAssignment1WithHttpInfo(campaignId, loyaltiesRewardsCreateAssignmentItemRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesRewardsCreateAssignmentResponseBody>) => apiResponse.data));
    }

    /**
     * This method deletes an earning rule for a specific loyalty campaign.
     * Delete Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     */
    public deleteEarningRuleWithHttpInfo(campaignId: string, earningRuleId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteEarningRule(campaignId, earningRuleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEarningRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method deletes an earning rule for a specific loyalty campaign.
     * Delete Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     */
    public deleteEarningRule(campaignId: string, earningRuleId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteEarningRuleWithHttpInfo(campaignId, earningRuleId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a loyalty campaign and all related loyalty cards. This action cannot be undone. Also, it immediately removes any redemptions on loyalty cards. If the force parameter is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [force] If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to the bin. Going forward, the user will be able to create the next campaign with the same name.
     */
    public deleteLoyaltyProgramWithHttpInfo(campaignId: string, force?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesDeleteResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteLoyaltyProgram(campaignId, force, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLoyaltyProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a loyalty campaign and all related loyalty cards. This action cannot be undone. Also, it immediately removes any redemptions on loyalty cards. If the force parameter is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [force] If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to the bin. Going forward, the user will be able to create the next campaign with the same name.
     */
    public deleteLoyaltyProgram(campaignId: string, force?: boolean, _options?: ConfigurationOptions): Observable<LoyaltiesDeleteResponseBody> {
        return this.deleteLoyaltyProgramWithHttpInfo(campaignId, force, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesDeleteResponseBody>) => apiResponse.data));
    }

    /**
     * This method deletes a reward assignment for a particular loyalty campaign.
     * Delete Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     */
    public deleteRewardAssignment1WithHttpInfo(campaignId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteRewardAssignment1(campaignId, assignmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRewardAssignment1WithHttpInfo(rsp)));
            }));
    }

    /**
     * This method deletes a reward assignment for a particular loyalty campaign.
     * Delete Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     */
    public deleteRewardAssignment1(campaignId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteRewardAssignment1WithHttpInfo(campaignId, assignmentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Disable an earning rule.
     * Disable Earning Rule
     * @param campaignId Unique campaign ID or name.
     * @param earningRuleId Unique identifier of an earning rule, assigned by Voucherify.
     */
    public disableEarningRuleWithHttpInfo(campaignId: string, earningRuleId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesEarningRulesDisableResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.disableEarningRule(campaignId, earningRuleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disableEarningRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Disable an earning rule.
     * Disable Earning Rule
     * @param campaignId Unique campaign ID or name.
     * @param earningRuleId Unique identifier of an earning rule, assigned by Voucherify.
     */
    public disableEarningRule(campaignId: string, earningRuleId: string, _options?: ConfigurationOptions): Observable<LoyaltiesEarningRulesDisableResponseBody> {
        return this.disableEarningRuleWithHttpInfo(campaignId, earningRuleId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesEarningRulesDisableResponseBody>) => apiResponse.data));
    }

    /**
     * Enable an earning rule.
     * Enable Earning Rule
     * @param campaignId Unique campaign ID or name.
     * @param earningRuleId Unique identifier of an earning rule, assigned by Voucherify.
     */
    public enableEarningRuleWithHttpInfo(campaignId: string, earningRuleId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesEarningRulesEnableResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.enableEarningRule(campaignId, earningRuleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enableEarningRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Enable an earning rule.
     * Enable Earning Rule
     * @param campaignId Unique campaign ID or name.
     * @param earningRuleId Unique identifier of an earning rule, assigned by Voucherify.
     */
    public enableEarningRule(campaignId: string, earningRuleId: string, _options?: ConfigurationOptions): Observable<LoyaltiesEarningRulesEnableResponseBody> {
        return this.enableEarningRuleWithHttpInfo(campaignId, earningRuleId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesEarningRulesEnableResponseBody>) => apiResponse.data));
    }

    /**
     * Export transactions is an asynchronous process that generates a CSV file with the data about or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Campaign Transactions  This method works in the same way the [POST Export Campaign Transactions](/api-reference/campaigns/export-campaign-transactions) does, but it is limited to loyalty campaigns only. The POST Export Campaign Transactions method can also export gift card campaign transactions.
     * Export Loyalty Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [loyaltiesTransactionsExportCreateRequestBody] Specify the parameters for the transaction export.
     */
    public exportLoyaltyCampaignTransactionsWithHttpInfo(campaignId: string, loyaltiesTransactionsExportCreateRequestBody?: LoyaltiesTransactionsExportCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CampaignsTransactionsExportCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.exportLoyaltyCampaignTransactions(campaignId, loyaltiesTransactionsExportCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportLoyaltyCampaignTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export transactions is an asynchronous process that generates a CSV file with the data about or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Campaign Transactions  This method works in the same way the [POST Export Campaign Transactions](/api-reference/campaigns/export-campaign-transactions) does, but it is limited to loyalty campaigns only. The POST Export Campaign Transactions method can also export gift card campaign transactions.
     * Export Loyalty Campaign Transactions
     * @param campaignId You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * @param [loyaltiesTransactionsExportCreateRequestBody] Specify the parameters for the transaction export.
     */
    public exportLoyaltyCampaignTransactions(campaignId: string, loyaltiesTransactionsExportCreateRequestBody?: LoyaltiesTransactionsExportCreateRequestBody, _options?: ConfigurationOptions): Observable<CampaignsTransactionsExportCreateResponseBody> {
        return this.exportLoyaltyCampaignTransactionsWithHttpInfo(campaignId, loyaltiesTransactionsExportCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<CampaignsTransactionsExportCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions
     * @param memberId A unique code identifying the loyalty card that you are looking to export transaction data for.
     * @param [loyaltiesMembersTransactionsExportCreateRequestBody] Specify the parameters and filters for the transaction export.
     */
    public exportLoyaltyCardTransactionsWithHttpInfo(memberId: string, loyaltiesMembersTransactionsExportCreateRequestBody?: LoyaltiesMembersTransactionsExportCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersTransactionsExportCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.exportLoyaltyCardTransactions(memberId, loyaltiesMembersTransactionsExportCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportLoyaltyCardTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions
     * @param memberId A unique code identifying the loyalty card that you are looking to export transaction data for.
     * @param [loyaltiesMembersTransactionsExportCreateRequestBody] Specify the parameters and filters for the transaction export.
     */
    public exportLoyaltyCardTransactions(memberId: string, loyaltiesMembersTransactionsExportCreateRequestBody?: LoyaltiesMembersTransactionsExportCreateRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesMembersTransactionsExportCreateResponseBody> {
        return this.exportLoyaltyCardTransactionsWithHttpInfo(memberId, loyaltiesMembersTransactionsExportCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersTransactionsExportCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions with campaign ID
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to export.
     * @param memberId A unique code identifying the loyalty card that you are looking to export transaction data for.
     * @param [loyaltiesMembersTransactionsExportCreateRequestBody] Specify the parameters and filters for the transaction export.
     */
    public exportLoyaltyCardTransactions1WithHttpInfo(campaignId: string, memberId: string, loyaltiesMembersTransactionsExportCreateRequestBody?: LoyaltiesMembersTransactionsExportCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersTransactionsExportCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.exportLoyaltyCardTransactions1(campaignId, memberId, loyaltiesMembersTransactionsExportCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportLoyaltyCardTransactions1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions with campaign ID
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to export.
     * @param memberId A unique code identifying the loyalty card that you are looking to export transaction data for.
     * @param [loyaltiesMembersTransactionsExportCreateRequestBody] Specify the parameters and filters for the transaction export.
     */
    public exportLoyaltyCardTransactions1(campaignId: string, memberId: string, loyaltiesMembersTransactionsExportCreateRequestBody?: LoyaltiesMembersTransactionsExportCreateRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesMembersTransactionsExportCreateResponseBody> {
        return this.exportLoyaltyCardTransactions1WithHttpInfo(campaignId, memberId, loyaltiesMembersTransactionsExportCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersTransactionsExportCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieves an earning rule assigned to a campaign.
     * Get Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     */
    public getEarningRuleWithHttpInfo(campaignId: string, earningRuleId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesEarningRulesGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEarningRule(campaignId, earningRuleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEarningRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves an earning rule assigned to a campaign.
     * Get Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     */
    public getEarningRule(campaignId: string, earningRuleId: string, _options?: ConfigurationOptions): Observable<LoyaltiesEarningRulesGetResponseBody> {
        return this.getEarningRuleWithHttpInfo(campaignId, earningRuleId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesEarningRulesGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve a specific loyalty campaign.
     * Get Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     */
    public getLoyaltyProgramWithHttpInfo(campaignId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesGetCampaignResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLoyaltyProgram(campaignId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLoyaltyProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a specific loyalty campaign.
     * Get Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     */
    public getLoyaltyProgram(campaignId: string, _options?: ConfigurationOptions): Observable<LoyaltiesGetCampaignResponseBody> {
        return this.getLoyaltyProgramWithHttpInfo(campaignId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesGetCampaignResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve a loyalty tier from a loyalty campaign by the loyalty tier ID.
     * Get Loyalty Tier
     * @param campaignId Unique loyalty campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     */
    public getLoyaltyTierWithHttpInfo(campaignId: string, loyaltyTierId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesTiersGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLoyaltyTier(campaignId, loyaltyTierId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLoyaltyTierWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a loyalty tier from a loyalty campaign by the loyalty tier ID.
     * Get Loyalty Tier
     * @param campaignId Unique loyalty campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     */
    public getLoyaltyTier(campaignId: string, loyaltyTierId: string, _options?: ConfigurationOptions): Observable<LoyaltiesTiersGetResponseBody> {
        return this.getLoyaltyTierWithHttpInfo(campaignId, loyaltyTierId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesTiersGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve loyalty card with the given member ID (i.e. voucher code).      📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-member-with-campaign-id). The URL was re-designed to allow you to retrieve loyalty card details without having to provide the campaignId as a path parameter.
     * Get Member
     * @param memberId Unique loyalty card code assigned to a particular customer.
     */
    public getMemberWithHttpInfo(memberId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMember(memberId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve loyalty card with the given member ID (i.e. voucher code).      📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-member-with-campaign-id). The URL was re-designed to allow you to retrieve loyalty card details without having to provide the campaignId as a path parameter.
     * Get Member
     * @param memberId Unique loyalty card code assigned to a particular customer.
     */
    public getMember(memberId: string, _options?: ConfigurationOptions): Observable<LoyaltiesMembersGetResponseBody> {
        return this.getMemberWithHttpInfo(memberId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieves the loyalty card with the given member ID (i.e. voucher code).
     * Get Member with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId Unique code that identifies the loyalty card.
     */
    public getMember1WithHttpInfo(campaignId: string, memberId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMember1(campaignId, memberId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMember1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the loyalty card with the given member ID (i.e. voucher code).
     * Get Member with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId Unique code that identifies the loyalty card.
     */
    public getMember1(campaignId: string, memberId: string, _options?: ConfigurationOptions): Observable<LoyaltiesMembersGetResponseBody> {
        return this.getMember1WithHttpInfo(campaignId, memberId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve specific reward assignment.
     * Get Campaign Reward Assignments
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId Unique reward assignment ID.
     */
    public getRewardAssignment1WithHttpInfo(campaignId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesRewardAssignmentsGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRewardAssignment1(campaignId, assignmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRewardAssignment1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve specific reward assignment.
     * Get Campaign Reward Assignments
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId Unique reward assignment ID.
     */
    public getRewardAssignment1(campaignId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<LoyaltiesRewardAssignmentsGetResponseBody> {
        return this.getRewardAssignment1WithHttpInfo(campaignId, assignmentId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesRewardAssignmentsGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve specific reward assignment.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-campaign-reward-assignments). 
     * Get Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     */
    public getRewardAssignment2WithHttpInfo(campaignId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesRewardsGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRewardAssignment2(campaignId, assignmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRewardAssignment2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve specific reward assignment.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-campaign-reward-assignments). 
     * Get Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     */
    public getRewardAssignment2(campaignId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<LoyaltiesRewardsGetResponseBody> {
        return this.getRewardAssignment2WithHttpInfo(campaignId, assignmentId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesRewardsGetResponseBody>) => apiResponse.data));
    }

    /**
     * Get reward details in the context of a loyalty campaign and reward assignment ID.
     * Get Reward Details
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId Unique reward assignment ID.
     */
    public getRewardDetailsWithHttpInfo(campaignId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesRewardAssignmentsRewardGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRewardDetails(campaignId, assignmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRewardDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get reward details in the context of a loyalty campaign and reward assignment ID.
     * Get Reward Details
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId Unique reward assignment ID.
     */
    public getRewardDetails(campaignId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<LoyaltiesRewardAssignmentsRewardGetResponseBody> {
        return this.getRewardDetailsWithHttpInfo(campaignId, assignmentId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesRewardAssignmentsRewardGetResponseBody>) => apiResponse.data));
    }

    /**
     * Lists all pending points that are currently assigned to all loyalty cards in a campaign. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Campaign Pending Points
     * @param campaignId Unique campaign ID.
     * @param [limit] Limit the number of the pending point entries that the API returns in the response.
     * @param [order] Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public listCampaignPendingPointsWithHttpInfo(campaignId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesPendingPointsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCampaignPendingPoints(campaignId, limit, order, startingAfterId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCampaignPendingPointsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists all pending points that are currently assigned to all loyalty cards in a campaign. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Campaign Pending Points
     * @param campaignId Unique campaign ID.
     * @param [limit] Limit the number of the pending point entries that the API returns in the response.
     * @param [order] Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public listCampaignPendingPoints(campaignId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: ConfigurationOptions): Observable<LoyaltiesPendingPointsListResponseBody> {
        return this.listCampaignPendingPointsWithHttpInfo(campaignId, limit, order, startingAfterId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesPendingPointsListResponseBody>) => apiResponse.data));
    }

    /**
     * Returns a list of all earning rules within a given campaign.
     * List Earning Rules
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listEarningRulesWithHttpInfo(campaignId: string, limit?: number, page?: number, order?: ParameterOrderListEarningRules, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesEarningRulesListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listEarningRules(campaignId, limit, page, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEarningRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of all earning rules within a given campaign.
     * List Earning Rules
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listEarningRules(campaignId: string, limit?: number, page?: number, order?: ParameterOrderListEarningRules, _options?: ConfigurationOptions): Observable<LoyaltiesEarningRulesListResponseBody> {
        return this.listEarningRulesWithHttpInfo(campaignId, limit, page, order, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesEarningRulesListResponseBody>) => apiResponse.data));
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
    public listLoyaltyCampaignTransactionsWithHttpInfo(campaignId: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, filters?: ParametersFiltersListCampaignTransactions, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesTransactionsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLoyaltyCampaignTransactions(campaignId, limit, order, startingAfterId, filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLoyaltyCampaignTransactionsWithHttpInfo(rsp)));
            }));
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
    public listLoyaltyCampaignTransactions(campaignId: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, filters?: ParametersFiltersListCampaignTransactions, _options?: ConfigurationOptions): Observable<LoyaltiesTransactionsListResponseBody> {
        return this.listLoyaltyCampaignTransactionsWithHttpInfo(campaignId, limit, order, startingAfterId, filters, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesTransactionsListResponseBody>) => apiResponse.data));
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
    public listLoyaltyCardTransactionsWithHttpInfo(memberId: string, limit?: number, order?: ParameterOrderListTransactions, filters?: ParameterFiltersListMemberTransactions, startingAfterId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersTransactionsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLoyaltyCardTransactions(memberId, limit, order, filters, startingAfterId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLoyaltyCardTransactionsWithHttpInfo(rsp)));
            }));
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
    public listLoyaltyCardTransactions(memberId: string, limit?: number, order?: ParameterOrderListTransactions, filters?: ParameterFiltersListMemberTransactions, startingAfterId?: string, _options?: ConfigurationOptions): Observable<LoyaltiesMembersTransactionsListResponseBody> {
        return this.listLoyaltyCardTransactionsWithHttpInfo(memberId, limit, order, filters, startingAfterId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersTransactionsListResponseBody>) => apiResponse.data));
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
    public listLoyaltyCardTransactions1WithHttpInfo(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListTransactions, filters?: ParameterFiltersListMemberTransactions, startingAfterId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersTransactionsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLoyaltyCardTransactions1(campaignId, memberId, limit, order, filters, startingAfterId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLoyaltyCardTransactions1WithHttpInfo(rsp)));
            }));
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
    public listLoyaltyCardTransactions1(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListTransactions, filters?: ParameterFiltersListMemberTransactions, startingAfterId?: string, _options?: ConfigurationOptions): Observable<LoyaltiesMembersTransactionsListResponseBody> {
        return this.listLoyaltyCardTransactions1WithHttpInfo(campaignId, memberId, limit, order, filters, startingAfterId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersTransactionsListResponseBody>) => apiResponse.data));
    }

    /**
     * Returns a list of your loyalty campaigns.
     * List Loyalty Campaigns
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [expand] Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listLoyaltyProgramsWithHttpInfo(limit?: number, page?: number, expand?: ParameterExpandListCampaigns, order?: ParameterOrderListCampaigns, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesListCampaignsResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLoyaltyPrograms(limit, page, expand, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLoyaltyProgramsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of your loyalty campaigns.
     * List Loyalty Campaigns
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [expand] Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listLoyaltyPrograms(limit?: number, page?: number, expand?: ParameterExpandListCampaigns, order?: ParameterOrderListCampaigns, _options?: ConfigurationOptions): Observable<LoyaltiesListCampaignsResponseBody> {
        return this.listLoyaltyProgramsWithHttpInfo(limit, page, expand, order, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesListCampaignsResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve available earning rules for a given tier and the calculation method for earning points.
     * List Loyalty Tier Earning Rules
     * @param campaignId Unique campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     */
    public listLoyaltyTierEarningRulesWithHttpInfo(campaignId: string, loyaltyTierId: string, limit?: number, page?: number, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesTiersEarningRulesListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLoyaltyTierEarningRules(campaignId, loyaltyTierId, limit, page, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLoyaltyTierEarningRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve available earning rules for a given tier and the calculation method for earning points.
     * List Loyalty Tier Earning Rules
     * @param campaignId Unique campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     */
    public listLoyaltyTierEarningRules(campaignId: string, loyaltyTierId: string, limit?: number, page?: number, _options?: ConfigurationOptions): Observable<LoyaltiesTiersEarningRulesListResponseBody> {
        return this.listLoyaltyTierEarningRulesWithHttpInfo(campaignId, loyaltyTierId, limit, page, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesTiersEarningRulesListResponseBody>) => apiResponse.data));
    }

    /**
     * Get available rewards for a given tier.
     * List Loyalty Tier Rewards
     * @param campaignId Unique campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     */
    public listLoyaltyTierRewardsWithHttpInfo(campaignId: string, loyaltyTierId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesTiersRewardsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLoyaltyTierRewards(campaignId, loyaltyTierId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLoyaltyTierRewardsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get available rewards for a given tier.
     * List Loyalty Tier Rewards
     * @param campaignId Unique campaign ID or name.
     * @param loyaltyTierId Unique loyalty tier ID.
     */
    public listLoyaltyTierRewards(campaignId: string, loyaltyTierId: string, _options?: ConfigurationOptions): Observable<LoyaltiesTiersRewardsListResponseBody> {
        return this.listLoyaltyTierRewardsWithHttpInfo(campaignId, loyaltyTierId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesTiersRewardsListResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve a list of loyalty tiers which were added to the loyalty program.
     * List Loyalty Tiers
     * @param campaignId Unique loyalty campaign ID or name.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listLoyaltyTiersWithHttpInfo(campaignId: string, limit?: number, order?: ParameterOrderListLoyaltyTiers, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesTiersListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLoyaltyTiers(campaignId, limit, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLoyaltyTiersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of loyalty tiers which were added to the loyalty program.
     * List Loyalty Tiers
     * @param campaignId Unique loyalty campaign ID or name.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listLoyaltyTiers(campaignId: string, limit?: number, order?: ParameterOrderListLoyaltyTiers, _options?: ConfigurationOptions): Observable<LoyaltiesTiersListResponseBody> {
        return this.listLoyaltyTiersWithHttpInfo(campaignId, limit, order, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesTiersListResponseBody>) => apiResponse.data));
    }

    /**
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-activity-with-campaign-id). The URL was re-designed to allow you to get member activities without having to provide the campaignId as a path parameter. Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.
     * List Member Activity
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     */
    public listMemberActivityWithHttpInfo(memberId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMemberActivityListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listMemberActivity(memberId, limit, order, startingAfterId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMemberActivityWithHttpInfo(rsp)));
            }));
    }

    /**
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-activity-with-campaign-id). The URL was re-designed to allow you to get member activities without having to provide the campaignId as a path parameter. Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.
     * List Member Activity
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the events starting after an event with the given ID.
     */
    public listMemberActivity(memberId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, _options?: ConfigurationOptions): Observable<LoyaltiesMemberActivityListResponseBody> {
        return this.listMemberActivityWithHttpInfo(memberId, limit, order, startingAfterId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMemberActivityListResponseBody>) => apiResponse.data));
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
    public listMemberActivity1WithHttpInfo(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMemberActivityListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listMemberActivity1(campaignId, memberId, limit, order, startingAfterId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMemberActivity1WithHttpInfo(rsp)));
            }));
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
    public listMemberActivity1(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderCreatedAt, startingAfterId?: string, _options?: ConfigurationOptions): Observable<LoyaltiesMemberActivityListResponseBody> {
        return this.listMemberActivity1WithHttpInfo(campaignId, memberId, limit, order, startingAfterId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMemberActivityListResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve member tiers using the loyalty card ID.
     * List Member\'s Loyalty Tiers
     * @param memberId Unique loyalty card assigned to a particular customer.
     */
    public listMemberLoyaltyTierWithHttpInfo(memberId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersTiersListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listMemberLoyaltyTier(memberId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMemberLoyaltyTierWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve member tiers using the loyalty card ID.
     * List Member\'s Loyalty Tiers
     * @param memberId Unique loyalty card assigned to a particular customer.
     */
    public listMemberLoyaltyTier(memberId: string, _options?: ConfigurationOptions): Observable<LoyaltiesMembersTiersListResponseBody> {
        return this.listMemberLoyaltyTierWithHttpInfo(memberId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersTiersListResponseBody>) => apiResponse.data));
    }

    /**
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-pending-points-with-campaign-id). The URL was re-designed to list member pending points without having to provide the campaignId as a path parameter. Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param [limit] Limit the number of the pending point entries that the API returns in the response.
     * @param [order] Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public listMemberPendingPointsWithHttpInfo(memberId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersPendingPointsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listMemberPendingPoints(memberId, limit, order, startingAfterId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMemberPendingPointsWithHttpInfo(rsp)));
            }));
    }

    /**
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-pending-points-with-campaign-id). The URL was re-designed to list member pending points without having to provide the campaignId as a path parameter. Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Member Pending Points
     * @param memberId Unique loyalty card code assigned to a particular customer.
     * @param [limit] Limit the number of the pending point entries that the API returns in the response.
     * @param [order] Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the results starting after a result with the given ID.
     */
    public listMemberPendingPoints(memberId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: ConfigurationOptions): Observable<LoyaltiesMembersPendingPointsListResponseBody> {
        return this.listMemberPendingPointsWithHttpInfo(memberId, limit, order, startingAfterId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersPendingPointsListResponseBody>) => apiResponse.data));
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
    public listMemberPendingPoints1WithHttpInfo(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersPendingPointsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listMemberPendingPoints1(campaignId, memberId, limit, order, startingAfterId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMemberPendingPoints1WithHttpInfo(rsp)));
            }));
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
    public listMemberPendingPoints1(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListPendingPoints, startingAfterId?: string, _options?: ConfigurationOptions): Observable<LoyaltiesMembersPendingPointsListResponseBody> {
        return this.listMemberPendingPoints1WithHttpInfo(campaignId, memberId, limit, order, startingAfterId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersPendingPointsListResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieves the list of rewards that the given customer (identified by member_id, which is a loyalty card assigned to a particular customer) **can get in exchange for loyalty points**.   You can use the affordable_only parameter to limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card).   Please note that rewards that are disabled (i.e. set to Not Available in the Dashboard) for a given loyalty tier reward mapping will not be returned in this endpoint.
     * List Member Rewards
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [affordableOnly] Limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card). Set this flag to true to return rewards which the customer can actually afford.
     */
    public listMemberRewardsWithHttpInfo(memberId: string, affordableOnly?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersRewardsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listMemberRewards(memberId, affordableOnly, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMemberRewardsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the list of rewards that the given customer (identified by member_id, which is a loyalty card assigned to a particular customer) **can get in exchange for loyalty points**.   You can use the affordable_only parameter to limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card).   Please note that rewards that are disabled (i.e. set to Not Available in the Dashboard) for a given loyalty tier reward mapping will not be returned in this endpoint.
     * List Member Rewards
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [affordableOnly] Limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card). Set this flag to true to return rewards which the customer can actually afford.
     */
    public listMemberRewards(memberId: string, affordableOnly?: boolean, _options?: ConfigurationOptions): Observable<LoyaltiesMembersRewardsListResponseBody> {
        return this.listMemberRewardsWithHttpInfo(memberId, affordableOnly, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersRewardsListResponseBody>) => apiResponse.data));
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
    public listMembersWithHttpInfo(campaignId: string, limit?: number, page?: number, customer?: string, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, order?: ParameterOrderVouchers, code?: string, ids?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesListMembersResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listMembers(campaignId, limit, page, customer, createdAt, updatedAt, order, code, ids, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMembersWithHttpInfo(rsp)));
            }));
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
    public listMembers(campaignId: string, limit?: number, page?: number, customer?: string, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, order?: ParameterOrderVouchers, code?: string, ids?: Array<string>, _options?: ConfigurationOptions): Observable<LoyaltiesListMembersResponseBody> {
        return this.listMembersWithHttpInfo(campaignId, limit, page, customer, createdAt, updatedAt, order, code, ids, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesListMembersResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve loyalty point expiration buckets for a given loyalty card. Expired point buckets are not returned in this endpoint. You can use the [Exports API](/api-reference/exports/create-export) to retrieve a list of both ACTIVE and EXPIRED point buckets.
     * List Loyalty Card Point Expiration
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param memberId Loyalty card code.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     */
    public listPointsExpirationWithHttpInfo(campaignId: string, memberId: string, limit?: number, page?: number, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersPointsExpirationListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPointsExpiration(campaignId, memberId, limit, page, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPointsExpirationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve loyalty point expiration buckets for a given loyalty card. Expired point buckets are not returned in this endpoint. You can use the [Exports API](/api-reference/exports/create-export) to retrieve a list of both ACTIVE and EXPIRED point buckets.
     * List Loyalty Card Point Expiration
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param memberId Loyalty card code.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     */
    public listPointsExpiration(campaignId: string, memberId: string, limit?: number, page?: number, _options?: ConfigurationOptions): Observable<LoyaltiesMembersPointsExpirationListResponseBody> {
        return this.listPointsExpirationWithHttpInfo(campaignId, memberId, limit, page, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersPointsExpirationListResponseBody>) => apiResponse.data));
    }

    /**
     * Returns reward assignments from a given loyalty campaign.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-campaign-rewards). The URL was re-designed to be more contextual to the type of data returned in the response.
     * List Reward Assignments with campaign ID
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [assignmentId] A unique reward assignment ID.
     */
    public listRewardAssignments1WithHttpInfo(campaignId: string, limit?: number, page?: number, assignmentId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesRewardAssignmentsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listRewardAssignments1(campaignId, limit, page, assignmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRewardAssignments1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns reward assignments from a given loyalty campaign.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-campaign-rewards). The URL was re-designed to be more contextual to the type of data returned in the response.
     * List Reward Assignments with campaign ID
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [assignmentId] A unique reward assignment ID.
     */
    public listRewardAssignments1(campaignId: string, limit?: number, page?: number, assignmentId?: string, _options?: ConfigurationOptions): Observable<LoyaltiesRewardAssignmentsListResponseBody> {
        return this.listRewardAssignments1WithHttpInfo(campaignId, limit, page, assignmentId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesRewardAssignmentsListResponseBody>) => apiResponse.data));
    }

    /**
     * Returns active rewards from a given loyalty campaign.
     * List Campaign Rewards
     * @param campaignId Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [assignmentId] A unique reward assignment ID.
     */
    public listRewardAssignments2WithHttpInfo(campaignId: string, limit?: number, page?: number, assignmentId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesRewardsListAssignmentsResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listRewardAssignments2(campaignId, limit, page, assignmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRewardAssignments2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns active rewards from a given loyalty campaign.
     * List Campaign Rewards
     * @param campaignId Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [assignmentId] A unique reward assignment ID.
     */
    public listRewardAssignments2(campaignId: string, limit?: number, page?: number, assignmentId?: string, _options?: ConfigurationOptions): Observable<LoyaltiesRewardsListAssignmentsResponseBody> {
        return this.listRewardAssignments2WithHttpInfo(campaignId, limit, page, assignmentId, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesRewardsListAssignmentsResponseBody>) => apiResponse.data));
    }

    /**
     *   📘 Alternative endpoint This endpoint is an alternative to this [endpoint](/api-reference/loyalties/redeem-reward-with-campaign-id). The URL was re-designed to allow you to redeem a reward without having to provide the campaignId as a path parameter.
     * Redeem Reward
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [loyaltiesMembersRedemptionRedeemRequestBody] Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order.
     */
    public redeemRewardWithHttpInfo(memberId: string, loyaltiesMembersRedemptionRedeemRequestBody?: LoyaltiesMembersRedemptionRedeemRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersRedemptionRedeemResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.redeemReward(memberId, loyaltiesMembersRedemptionRedeemRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.redeemRewardWithHttpInfo(rsp)));
            }));
    }

    /**
     *   📘 Alternative endpoint This endpoint is an alternative to this [endpoint](/api-reference/loyalties/redeem-reward-with-campaign-id). The URL was re-designed to allow you to redeem a reward without having to provide the campaignId as a path parameter.
     * Redeem Reward
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [loyaltiesMembersRedemptionRedeemRequestBody] Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order.
     */
    public redeemReward(memberId: string, loyaltiesMembersRedemptionRedeemRequestBody?: LoyaltiesMembersRedemptionRedeemRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesMembersRedemptionRedeemResponseBody> {
        return this.redeemRewardWithHttpInfo(memberId, loyaltiesMembersRedemptionRedeemRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersRedemptionRedeemResponseBody>) => apiResponse.data));
    }

    /**
     * Exchange points from a loyalty card for a specified reward. This API method returns an assigned award in the response. It means that if a requesting customer gets a coupon code with a discount for the next order, that discount code will be visible in response as part of the reward object definition.
     * Redeem Reward with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param [loyaltiesMembersRedemptionRedeemRequestBody] Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order.
     */
    public redeemReward1WithHttpInfo(campaignId: string, memberId: string, loyaltiesMembersRedemptionRedeemRequestBody?: LoyaltiesMembersRedemptionRedeemRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersRedemptionRedeemResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.redeemReward1(campaignId, memberId, loyaltiesMembersRedemptionRedeemRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.redeemReward1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Exchange points from a loyalty card for a specified reward. This API method returns an assigned award in the response. It means that if a requesting customer gets a coupon code with a discount for the next order, that discount code will be visible in response as part of the reward object definition.
     * Redeem Reward with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param [loyaltiesMembersRedemptionRedeemRequestBody] Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order.
     */
    public redeemReward1(campaignId: string, memberId: string, loyaltiesMembersRedemptionRedeemRequestBody?: LoyaltiesMembersRedemptionRedeemRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesMembersRedemptionRedeemResponseBody> {
        return this.redeemReward1WithHttpInfo(campaignId, memberId, loyaltiesMembersRedemptionRedeemRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersRedemptionRedeemResponseBody>) => apiResponse.data));
    }

    /**
     * Transfer points between different loyalty cards which have holders. Provide the campaign ID and the loyalty card ID you want the points to be transferred to as path parameters. In the request body, provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card. Transfer works only for loyalty cards that have holders, meaning the cards were published to customers. The transferred points expire according to the target program expiration rules.
     * Transfer Loyalty Points
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher to which the loyalty points will be sent (destination).
     * @param memberId A unique code identifying the loyalty card to which the user wants to transfer loyalty points (destination).
     * @param [loyaltiesTransferPoints] Provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card.
     */
    public transferPointsWithHttpInfo(campaignId: string, memberId: string, loyaltiesTransferPoints?: Array<LoyaltiesTransferPoints>, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersTransfersCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.transferPoints(campaignId, memberId, loyaltiesTransferPoints, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transferPointsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Transfer points between different loyalty cards which have holders. Provide the campaign ID and the loyalty card ID you want the points to be transferred to as path parameters. In the request body, provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card. Transfer works only for loyalty cards that have holders, meaning the cards were published to customers. The transferred points expire according to the target program expiration rules.
     * Transfer Loyalty Points
     * @param campaignId A unique identifier of the loyalty campaign containing the voucher to which the loyalty points will be sent (destination).
     * @param memberId A unique code identifying the loyalty card to which the user wants to transfer loyalty points (destination).
     * @param [loyaltiesTransferPoints] Provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card.
     */
    public transferPoints(campaignId: string, memberId: string, loyaltiesTransferPoints?: Array<LoyaltiesTransferPoints>, _options?: ConfigurationOptions): Observable<LoyaltiesMembersTransfersCreateResponseBody> {
        return this.transferPointsWithHttpInfo(campaignId, memberId, loyaltiesTransferPoints, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersTransfersCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Update an earning rule definition.
     * Update Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     * @param [loyaltiesEarningRulesUpdateRequestBody] Specify the parameters that you would like to update for the given earning rule.
     */
    public updateEarningRuleWithHttpInfo(campaignId: string, earningRuleId: string, loyaltiesEarningRulesUpdateRequestBody?: LoyaltiesEarningRulesUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesEarningRulesUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateEarningRule(campaignId, earningRuleId, loyaltiesEarningRulesUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEarningRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an earning rule definition.
     * Update Earning Rule
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param earningRuleId A unique earning rule ID.
     * @param [loyaltiesEarningRulesUpdateRequestBody] Specify the parameters that you would like to update for the given earning rule.
     */
    public updateEarningRule(campaignId: string, earningRuleId: string, loyaltiesEarningRulesUpdateRequestBody?: LoyaltiesEarningRulesUpdateRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesEarningRulesUpdateResponseBody> {
        return this.updateEarningRuleWithHttpInfo(campaignId, earningRuleId, loyaltiesEarningRulesUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesEarningRulesUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * This method gives adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/adjust-loyalty-card-balance-with-campaign-id). The URL was re-designed to allow you to add or remove loyalty card balance without having to provide the campaignId as a path parameter.
     * Adjust Loyalty Card Balance
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [loyaltiesMembersBalanceUpdateRequestBody] Specify the point adjustment along with the expiration mechanism.
     */
    public updateLoyaltyCardBalanceWithHttpInfo(memberId: string, loyaltiesMembersBalanceUpdateRequestBody?: LoyaltiesMembersBalanceUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersBalanceUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateLoyaltyCardBalance(memberId, loyaltiesMembersBalanceUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLoyaltyCardBalanceWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method gives adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/adjust-loyalty-card-balance-with-campaign-id). The URL was re-designed to allow you to add or remove loyalty card balance without having to provide the campaignId as a path parameter.
     * Adjust Loyalty Card Balance
     * @param memberId Unique loyalty card assigned to a particular customer.
     * @param [loyaltiesMembersBalanceUpdateRequestBody] Specify the point adjustment along with the expiration mechanism.
     */
    public updateLoyaltyCardBalance(memberId: string, loyaltiesMembersBalanceUpdateRequestBody?: LoyaltiesMembersBalanceUpdateRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesMembersBalanceUpdateResponseBody> {
        return this.updateLoyaltyCardBalanceWithHttpInfo(memberId, loyaltiesMembersBalanceUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersBalanceUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * This method adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.
     * Adjust Loyalty Card Balance with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param [loyaltiesMembersBalanceUpdateRequestBody] Specify the point adjustment along with the expiration mechanism.
     */
    public updateLoyaltyCardBalance1WithHttpInfo(campaignId: string, memberId: string, loyaltiesMembersBalanceUpdateRequestBody?: LoyaltiesMembersBalanceUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesMembersBalanceUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateLoyaltyCardBalance1(campaignId, memberId, loyaltiesMembersBalanceUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLoyaltyCardBalance1WithHttpInfo(rsp)));
            }));
    }

    /**
     * This method adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.
     * Adjust Loyalty Card Balance with campaign ID
     * @param campaignId Unique campaign ID.
     * @param memberId A code that identifies the loyalty card.
     * @param [loyaltiesMembersBalanceUpdateRequestBody] Specify the point adjustment along with the expiration mechanism.
     */
    public updateLoyaltyCardBalance1(campaignId: string, memberId: string, loyaltiesMembersBalanceUpdateRequestBody?: LoyaltiesMembersBalanceUpdateRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesMembersBalanceUpdateResponseBody> {
        return this.updateLoyaltyCardBalance1WithHttpInfo(campaignId, memberId, loyaltiesMembersBalanceUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesMembersBalanceUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * Updates a loyalty program.  Fields other than those specified in the allowed request body payload wont be modified (even if provided they are silently skipped). Any parameters not provided will be left unchanged.  This method will update the [loyalty cards](/api-reference/loyalties/get-member) which have not been published or redeemed yet.
     * Update Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [loyaltiesUpdateCampaignRequestBody] Specify the new values for the parameters that you would like to update for the given loyalty campaign.
     */
    public updateLoyaltyProgramWithHttpInfo(campaignId: string, loyaltiesUpdateCampaignRequestBody?: LoyaltiesUpdateCampaignRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesUpdateCampaignResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateLoyaltyProgram(campaignId, loyaltiesUpdateCampaignRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLoyaltyProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a loyalty program.  Fields other than those specified in the allowed request body payload wont be modified (even if provided they are silently skipped). Any parameters not provided will be left unchanged.  This method will update the [loyalty cards](/api-reference/loyalties/get-member) which have not been published or redeemed yet.
     * Update Loyalty Campaign
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param [loyaltiesUpdateCampaignRequestBody] Specify the new values for the parameters that you would like to update for the given loyalty campaign.
     */
    public updateLoyaltyProgram(campaignId: string, loyaltiesUpdateCampaignRequestBody?: LoyaltiesUpdateCampaignRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesUpdateCampaignResponseBody> {
        return this.updateLoyaltyProgramWithHttpInfo(campaignId, loyaltiesUpdateCampaignRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesUpdateCampaignResponseBody>) => apiResponse.data));
    }

    /**
     * Updates rewards parameters, i.e. the points cost for the specific reward.
     * Update Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     * @param [loyaltiesRewardsUpdateAssignmentRequestBody] Update the points cost for the reward assignment.
     */
    public updateRewardAssignment1WithHttpInfo(campaignId: string, assignmentId: string, loyaltiesRewardsUpdateAssignmentRequestBody?: LoyaltiesRewardsUpdateAssignmentRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<LoyaltiesRewardsUpdateAssignmentResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateRewardAssignment1(campaignId, assignmentId, loyaltiesRewardsUpdateAssignmentRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRewardAssignment1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates rewards parameters, i.e. the points cost for the specific reward.
     * Update Campaign Reward Assignment
     * @param campaignId The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * @param assignmentId A unique reward assignment ID.
     * @param [loyaltiesRewardsUpdateAssignmentRequestBody] Update the points cost for the reward assignment.
     */
    public updateRewardAssignment1(campaignId: string, assignmentId: string, loyaltiesRewardsUpdateAssignmentRequestBody?: LoyaltiesRewardsUpdateAssignmentRequestBody, _options?: ConfigurationOptions): Observable<LoyaltiesRewardsUpdateAssignmentResponseBody> {
        return this.updateRewardAssignment1WithHttpInfo(campaignId, assignmentId, loyaltiesRewardsUpdateAssignmentRequestBody, _options).pipe(map((apiResponse: HttpInfo<LoyaltiesRewardsUpdateAssignmentResponseBody>) => apiResponse.data));
    }

}

import { ManagementApiRequestFactory, ManagementApiResponseProcessor} from "../apis/ManagementApi";
export class ObservableManagementApi {
    private requestFactory: ManagementApiRequestFactory;
    private responseProcessor: ManagementApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ManagementApiRequestFactory,
        responseProcessor?: ManagementApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ManagementApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ManagementApiResponseProcessor();
    }

    /**
     * Assigns a user to a given project. The user must be an existing user in Voucherify.  🚧 Correct Use of Data To avoid errors, use the role key with either id or login keys.
     * Assign User
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsUsersAssignRequestBody] Defines the user details.
     */
    public assignUserWithHttpInfo(projectId: string, managementProjectsUsersAssignRequestBody?: ManagementProjectsUsersAssignRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsUsersAssignResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.assignUser(projectId, managementProjectsUsersAssignRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns a user to a given project. The user must be an existing user in Voucherify.  🚧 Correct Use of Data To avoid errors, use the role key with either id or login keys.
     * Assign User
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsUsersAssignRequestBody] Defines the user details.
     */
    public assignUser(projectId: string, managementProjectsUsersAssignRequestBody?: ManagementProjectsUsersAssignRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsUsersAssignResponseBody> {
        return this.assignUserWithHttpInfo(projectId, managementProjectsUsersAssignRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsUsersAssignResponseBody>) => apiResponse.data));
    }

    /**
     * Creates a new brand configuration. You can have only one brand configured for a project.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.
     * Create Brand
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsBrandingCreateRequestBody] Defines a brand configuration.
     */
    public createBrandWithHttpInfo(projectId: string, managementProjectsBrandingCreateRequestBody?: ManagementProjectsBrandingCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsBrandingCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createBrand(projectId, managementProjectsBrandingCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBrandWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new brand configuration. You can have only one brand configured for a project.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.
     * Create Brand
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsBrandingCreateRequestBody] Defines a brand configuration.
     */
    public createBrand(projectId: string, managementProjectsBrandingCreateRequestBody?: ManagementProjectsBrandingCreateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsBrandingCreateResponseBody> {
        return this.createBrandWithHttpInfo(projectId, managementProjectsBrandingCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsBrandingCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Creates a custom event schema. The properties object is required, but it can be empty, however. This object is for optional custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Create Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsCustomEventSchemasCreateRequestBody] Defines the custom event schema.
     */
    public createCustomEventSchemaWithHttpInfo(projectId: string, managementProjectsCustomEventSchemasCreateRequestBody?: ManagementProjectsCustomEventSchemasCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsCustomEventSchemasCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCustomEventSchema(projectId, managementProjectsCustomEventSchemasCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCustomEventSchemaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom event schema. The properties object is required, but it can be empty, however. This object is for optional custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Create Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsCustomEventSchemasCreateRequestBody] Defines the custom event schema.
     */
    public createCustomEventSchema(projectId: string, managementProjectsCustomEventSchemasCreateRequestBody?: ManagementProjectsCustomEventSchemasCreateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsCustomEventSchemasCreateResponseBody> {
        return this.createCustomEventSchemaWithHttpInfo(projectId, managementProjectsCustomEventSchemasCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsCustomEventSchemasCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Creates a new metadata (custom attribute) schema for a given resource. The schema consists of a set of key-value pairs to customize Voucherify resources.  You can nest your object within a standard metadata schema, e.g. within a campaign or customer schema. However, your nested object cant include another nested object. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward Use this endpoint to define a metadata schema of a given resource for the first time. Once you configure a metadata schema for a given related_object, use the PUT [Update metadata schema](/api-reference/management/update-metadata-schema) endpoint to either update or add new metadata key-value pairs. For example, use this endpoint to define a metadata schema for related_object: campaign for the first time. If you want define a new metadata property for campaign, use the [PUT Update metadata schema](/api-reference/management/update-metadata-schema) endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Create Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsMetadataSchemasCreateRequestBody] Defines the metadata schema.
     */
    public createMetadataSchemaWithHttpInfo(projectId: string, managementProjectsMetadataSchemasCreateRequestBody?: ManagementProjectsMetadataSchemasCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsMetadataSchemasCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createMetadataSchema(projectId, managementProjectsMetadataSchemasCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createMetadataSchemaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new metadata (custom attribute) schema for a given resource. The schema consists of a set of key-value pairs to customize Voucherify resources.  You can nest your object within a standard metadata schema, e.g. within a campaign or customer schema. However, your nested object cant include another nested object. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward Use this endpoint to define a metadata schema of a given resource for the first time. Once you configure a metadata schema for a given related_object, use the PUT [Update metadata schema](/api-reference/management/update-metadata-schema) endpoint to either update or add new metadata key-value pairs. For example, use this endpoint to define a metadata schema for related_object: campaign for the first time. If you want define a new metadata property for campaign, use the [PUT Update metadata schema](/api-reference/management/update-metadata-schema) endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Create Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsMetadataSchemasCreateRequestBody] Defines the metadata schema.
     */
    public createMetadataSchema(projectId: string, managementProjectsMetadataSchemasCreateRequestBody?: ManagementProjectsMetadataSchemasCreateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsMetadataSchemasCreateResponseBody> {
        return this.createMetadataSchemaWithHttpInfo(projectId, managementProjectsMetadataSchemasCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsMetadataSchemasCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Creates a new project. You can add users, specify the cluster, timezone, currency, and other details. All owners are added to the project by default.
     * Create Project
     * @param [managementProjectsCreateRequestBody] Define project details.
     */
    public createProjectWithHttpInfo(managementProjectsCreateRequestBody?: ManagementProjectsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createProject(managementProjectsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new project. You can add users, specify the cluster, timezone, currency, and other details. All owners are added to the project by default.
     * Create Project
     * @param [managementProjectsCreateRequestBody] Define project details.
     */
    public createProject(managementProjectsCreateRequestBody?: ManagementProjectsCreateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsCreateResponseBody> {
        return this.createProjectWithHttpInfo(managementProjectsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Overwrites the default stacking rules. If new stacking rules have been created for the project earlier (e.g. in the user interface), it returns an error. Use [Update stacking rules](/api-reference/management/update-stacking-rules) endpoint to change the rules.  📘 Stacking rules documentation  Read [the Stacking rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Create Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsStackingRulesCreateRequestBody] Defines the stacking rule parameters.
     */
    public createStackingRulesWithHttpInfo(projectId: string, managementProjectsStackingRulesCreateRequestBody?: ManagementProjectsStackingRulesCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsStackingRulesCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createStackingRules(projectId, managementProjectsStackingRulesCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createStackingRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Overwrites the default stacking rules. If new stacking rules have been created for the project earlier (e.g. in the user interface), it returns an error. Use [Update stacking rules](/api-reference/management/update-stacking-rules) endpoint to change the rules.  📘 Stacking rules documentation  Read [the Stacking rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Create Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsStackingRulesCreateRequestBody] Defines the stacking rule parameters.
     */
    public createStackingRules(projectId: string, managementProjectsStackingRulesCreateRequestBody?: ManagementProjectsStackingRulesCreateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsStackingRulesCreateResponseBody> {
        return this.createStackingRulesWithHttpInfo(projectId, managementProjectsStackingRulesCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsStackingRulesCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Creates a new webhook configuration.  📘 Webhook Documentation  Read [Webhooks v2024-01-01](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Create Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsWebhooksCreateRequestBody] Defines a webhook configuration.
     */
    public createWebhookWithHttpInfo(projectId: string, managementProjectsWebhooksCreateRequestBody?: ManagementProjectsWebhooksCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsWebhooksCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createWebhook(projectId, managementProjectsWebhooksCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new webhook configuration.  📘 Webhook Documentation  Read [Webhooks v2024-01-01](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Create Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsWebhooksCreateRequestBody] Defines a webhook configuration.
     */
    public createWebhook(projectId: string, managementProjectsWebhooksCreateRequestBody?: ManagementProjectsWebhooksCreateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsWebhooksCreateResponseBody> {
        return this.createWebhookWithHttpInfo(projectId, managementProjectsWebhooksCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsWebhooksCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Deletes permanently a brand configuration.
     * Delete Brand
     * @param projectId Provide the unique identifier of the project.
     * @param brandingId Provide the unique identifier of the brand configuration.
     */
    public deleteBrandWithHttpInfo(projectId: string, brandingId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteBrand(projectId, brandingId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBrandWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes permanently a brand configuration.
     * Delete Brand
     * @param projectId Provide the unique identifier of the project.
     * @param brandingId Provide the unique identifier of the brand configuration.
     */
    public deleteBrand(projectId: string, brandingId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteBrandWithHttpInfo(projectId, brandingId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes permanently the custom event schema with its custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Delete Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param customEventSchemaId Provide the unique identifier of the custom event schema.
     */
    public deleteCustomEventSchemaWithHttpInfo(projectId: string, customEventSchemaId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCustomEventSchema(projectId, customEventSchemaId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCustomEventSchemaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes permanently the custom event schema with its custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Delete Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param customEventSchemaId Provide the unique identifier of the custom event schema.
     */
    public deleteCustomEventSchema(projectId: string, customEventSchemaId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteCustomEventSchemaWithHttpInfo(projectId, customEventSchemaId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes permanently the metadata schema. In standard metadata schemas, this endpoint removes permanently all definitions. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward If you want to delete only one definition, use the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. In the request, provide the deleted: true pair in the definition object. This definition will be moved to Removed definitions. If you want to create a new standard metadata schema, use the [Create Metadata Schema](/api-reference/management/create-metadata-schema) endpoint.  🚧 Metadata Purging This endpoint deletes permanently the metadata schemas only. However, it does not purge the metadata from associated entities, so the metadata added to those entities will remain. If you want to purge metadata from the entities: 1. Remove all the definitions you want to purge. You can do this either in Voucherify Project Settings > Metadata Schema tab or with the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. 2. In Voucherify Project Settings > Metadata Schema tab, go to the relevant metadata schema. 3. In Removed definitions, click the bin button next to the definitions whose metadata you want to purge from entities. Note: - This is an asynchronous action. You will be notified when it has been completed. - You cannot purge metadata for the Redemption and Publication schemas. 4. Use the Delete Metadata Schema request to delete the metadata schema from Voucherify.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Delete Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param metadataSchemaId Provide the unique identifier of the metadata schema.
     */
    public deleteMetadataSchemaWithHttpInfo(projectId: string, metadataSchemaId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteMetadataSchema(projectId, metadataSchemaId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteMetadataSchemaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes permanently the metadata schema. In standard metadata schemas, this endpoint removes permanently all definitions. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward If you want to delete only one definition, use the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. In the request, provide the deleted: true pair in the definition object. This definition will be moved to Removed definitions. If you want to create a new standard metadata schema, use the [Create Metadata Schema](/api-reference/management/create-metadata-schema) endpoint.  🚧 Metadata Purging This endpoint deletes permanently the metadata schemas only. However, it does not purge the metadata from associated entities, so the metadata added to those entities will remain. If you want to purge metadata from the entities: 1. Remove all the definitions you want to purge. You can do this either in Voucherify Project Settings > Metadata Schema tab or with the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. 2. In Voucherify Project Settings > Metadata Schema tab, go to the relevant metadata schema. 3. In Removed definitions, click the bin button next to the definitions whose metadata you want to purge from entities. Note: - This is an asynchronous action. You will be notified when it has been completed. - You cannot purge metadata for the Redemption and Publication schemas. 4. Use the Delete Metadata Schema request to delete the metadata schema from Voucherify.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Delete Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param metadataSchemaId Provide the unique identifier of the metadata schema.
     */
    public deleteMetadataSchema(projectId: string, metadataSchemaId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteMetadataSchemaWithHttpInfo(projectId, metadataSchemaId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes an existing project. The users currently using the deleted project will be automatically logged out.  🚧 Sandbox Project The sandbox project cannot be deleted.
     * Delete Project
     * @param projectId Provide the unique identifier of the project.
     */
    public deleteProjectWithHttpInfo(projectId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteProject(projectId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an existing project. The users currently using the deleted project will be automatically logged out.  🚧 Sandbox Project The sandbox project cannot be deleted.
     * Delete Project
     * @param projectId Provide the unique identifier of the project.
     */
    public deleteProject(projectId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteProjectWithHttpInfo(projectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes permanently the current settings for the stacking rules. The stacking rules are restored to default values.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Delete Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param stackingRulesId Provide the unique identifier of the stacking rules.
     */
    public deleteStackingRulesWithHttpInfo(projectId: string, stackingRulesId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteStackingRules(projectId, stackingRulesId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteStackingRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes permanently the current settings for the stacking rules. The stacking rules are restored to default values.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Delete Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param stackingRulesId Provide the unique identifier of the stacking rules.
     */
    public deleteStackingRules(projectId: string, stackingRulesId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteStackingRulesWithHttpInfo(projectId, stackingRulesId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Delete Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param webhookId Provide the unique identifier of the webhook configuration.
     */
    public deleteWebhookWithHttpInfo(projectId: string, webhookId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteWebhook(projectId, webhookId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Delete Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param webhookId Provide the unique identifier of the webhook configuration.
     */
    public deleteWebhook(projectId: string, webhookId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteWebhookWithHttpInfo(projectId, webhookId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a brand configuration.
     * Get Brand
     * @param projectId Provide the unique identifier of the project.
     * @param brandingId Provide the unique identifier of the brand configuration.
     */
    public getBrandWithHttpInfo(projectId: string, brandingId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsBrandingGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBrand(projectId, brandingId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBrandWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a brand configuration.
     * Get Brand
     * @param projectId Provide the unique identifier of the project.
     * @param brandingId Provide the unique identifier of the brand configuration.
     */
    public getBrand(projectId: string, brandingId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsBrandingGetResponseBody> {
        return this.getBrandWithHttpInfo(projectId, brandingId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsBrandingGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieves a custom event schema.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Get Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param customEventSchemaId Provide the unique identifier of the custom event schema.
     */
    public getCustomEventSchemaWithHttpInfo(projectId: string, customEventSchemaId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsCustomEventSchemasGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCustomEventSchema(projectId, customEventSchemaId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomEventSchemaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a custom event schema.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Get Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param customEventSchemaId Provide the unique identifier of the custom event schema.
     */
    public getCustomEventSchema(projectId: string, customEventSchemaId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsCustomEventSchemasGetResponseBody> {
        return this.getCustomEventSchemaWithHttpInfo(projectId, customEventSchemaId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsCustomEventSchemasGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieves a metadata schema.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Get Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param metadataSchemaId Provide the unique identifier of the metadata schema.
     */
    public getMetadataSchema1WithHttpInfo(projectId: string, metadataSchemaId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsMetadataSchemasGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMetadataSchema1(projectId, metadataSchemaId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMetadataSchema1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a metadata schema.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Get Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param metadataSchemaId Provide the unique identifier of the metadata schema.
     */
    public getMetadataSchema1(projectId: string, metadataSchemaId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsMetadataSchemasGetResponseBody> {
        return this.getMetadataSchema1WithHttpInfo(projectId, metadataSchemaId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsMetadataSchemasGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieves an existing project.
     * Get Project
     * @param projectId Provide the unique identifier of the project.
     */
    public getProjectWithHttpInfo(projectId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProject(projectId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves an existing project.
     * Get Project
     * @param projectId Provide the unique identifier of the project.
     */
    public getProject(projectId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsGetResponseBody> {
        return this.getProjectWithHttpInfo(projectId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieves the stacking rules for the project.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Get Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param stackingRulesId Provide the unique identifier of the stacking rules.
     */
    public getStackingRulesWithHttpInfo(projectId: string, stackingRulesId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsStackingRulesGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getStackingRules(projectId, stackingRulesId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStackingRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the stacking rules for the project.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Get Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param stackingRulesId Provide the unique identifier of the stacking rules.
     */
    public getStackingRules(projectId: string, stackingRulesId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsStackingRulesGetResponseBody> {
        return this.getStackingRulesWithHttpInfo(projectId, stackingRulesId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsStackingRulesGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieves the project users details.
     * Get User
     * @param projectId Provide the unique identifier of the project.
     * @param userId Provide the unique identifier of the user. Alternatively, provide the users login.
     */
    public getUserWithHttpInfo(projectId: string, userId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsUsersGetUserResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUser(projectId, userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the project users details.
     * Get User
     * @param projectId Provide the unique identifier of the project.
     * @param userId Provide the unique identifier of the user. Alternatively, provide the users login.
     */
    public getUser(projectId: string, userId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsUsersGetUserResponseBody> {
        return this.getUserWithHttpInfo(projectId, userId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsUsersGetUserResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieves a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Get Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param webhookId Provide the unique identifier of the webhook configuration.
     */
    public getWebhookWithHttpInfo(projectId: string, webhookId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsWebhooksGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getWebhook(projectId, webhookId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Get Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param webhookId Provide the unique identifier of the webhook configuration.
     */
    public getWebhook(projectId: string, webhookId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsWebhooksGetResponseBody> {
        return this.getWebhookWithHttpInfo(projectId, webhookId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsWebhooksGetResponseBody>) => apiResponse.data));
    }

    /**
     * Sends an invitation to an email address that has not been used yet as a Voucherify user login. You can specify the projects to which the invited user will be assigned and define their roles.
     * Invite a New User
     * @param [managementProjectsUsersInviteCreateRequestBody] Defines the details of the invitation, the project, and roles to which the user will be assigned.
     */
    public inviteUserWithHttpInfo(managementProjectsUsersInviteCreateRequestBody?: ManagementProjectsUsersInviteCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.inviteUser(managementProjectsUsersInviteCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.inviteUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sends an invitation to an email address that has not been used yet as a Voucherify user login. You can specify the projects to which the invited user will be assigned and define their roles.
     * Invite a New User
     * @param [managementProjectsUsersInviteCreateRequestBody] Defines the details of the invitation, the project, and roles to which the user will be assigned.
     */
    public inviteUser(managementProjectsUsersInviteCreateRequestBody?: ManagementProjectsUsersInviteCreateRequestBody, _options?: ConfigurationOptions): Observable<void> {
        return this.inviteUserWithHttpInfo(managementProjectsUsersInviteCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Lists all brand configurations. Because a project can have only one brand, it always returns a list with one item. This endpoint can be used to retrieve the brand configuration created with the Voucherify Dashboard and the ID.
     * List Brands
     * @param projectId Provide the unique identifier of the project.
     */
    public listBrandsWithHttpInfo(projectId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsBrandingListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listBrands(projectId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listBrandsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists all brand configurations. Because a project can have only one brand, it always returns a list with one item. This endpoint can be used to retrieve the brand configuration created with the Voucherify Dashboard and the ID.
     * List Brands
     * @param projectId Provide the unique identifier of the project.
     */
    public listBrands(projectId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsBrandingListResponseBody> {
        return this.listBrandsWithHttpInfo(projectId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsBrandingListResponseBody>) => apiResponse.data));
    }

    /**
     * Lists all custom event schemas available in the project.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * List Custom Event Schemas
     * @param projectId Provide the unique identifier of the project.
     */
    public listCustomEventSchemasWithHttpInfo(projectId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsCustomEventSchemasListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCustomEventSchemas(projectId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCustomEventSchemasWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists all custom event schemas available in the project.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * List Custom Event Schemas
     * @param projectId Provide the unique identifier of the project.
     */
    public listCustomEventSchemas(projectId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsCustomEventSchemasListResponseBody> {
        return this.listCustomEventSchemasWithHttpInfo(projectId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsCustomEventSchemasListResponseBody>) => apiResponse.data));
    }

    /**
     * Lists all metadata schemas available in the project.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * List Metadata Schemas
     * @param projectId Provide the unique identifier of the project.
     */
    public listMetadataSchemas1WithHttpInfo(projectId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsMetadataSchemasListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listMetadataSchemas1(projectId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMetadataSchemas1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists all metadata schemas available in the project.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * List Metadata Schemas
     * @param projectId Provide the unique identifier of the project.
     */
    public listMetadataSchemas1(projectId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsMetadataSchemasListResponseBody> {
        return this.listMetadataSchemas1WithHttpInfo(projectId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsMetadataSchemasListResponseBody>) => apiResponse.data));
    }

    /**
     * Lists all projects for the organization. The endpoint does not require any query parameters.
     * List Projects
     */
    public listProjectsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProjects(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProjectsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists all projects for the organization. The endpoint does not require any query parameters.
     * List Projects
     */
    public listProjects(_options?: ConfigurationOptions): Observable<ManagementProjectsListResponseBody> {
        return this.listProjectsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ManagementProjectsListResponseBody>) => apiResponse.data));
    }

    /**
     * Lists all stacking rules. Returns always a list with one item. This endpoint can be used to retrieve the default stacking rules. The default stacking rules do not have an ID that could be used with the [Get Stacking Rules](/api-reference/management/get-stacking-rules) or [Update Stacking Rules](/api-reference/management/update-stacking-rules) endpoints.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * List Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     */
    public listStackingRulesWithHttpInfo(projectId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsStackingRulesListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listStackingRules(projectId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listStackingRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists all stacking rules. Returns always a list with one item. This endpoint can be used to retrieve the default stacking rules. The default stacking rules do not have an ID that could be used with the [Get Stacking Rules](/api-reference/management/get-stacking-rules) or [Update Stacking Rules](/api-reference/management/update-stacking-rules) endpoints.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * List Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     */
    public listStackingRules(projectId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsStackingRulesListResponseBody> {
        return this.listStackingRulesWithHttpInfo(projectId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsStackingRulesListResponseBody>) => apiResponse.data));
    }

    /**
     * Lists all users assigned to the project.
     * List Users
     * @param projectId Provide the unique identifier of the project.
     */
    public listUsersWithHttpInfo(projectId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsUsersListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listUsers(projectId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists all users assigned to the project.
     * List Users
     * @param projectId Provide the unique identifier of the project.
     */
    public listUsers(projectId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsUsersListResponseBody> {
        return this.listUsersWithHttpInfo(projectId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsUsersListResponseBody>) => apiResponse.data));
    }

    /**
     * Lists all webhook configurations for the project.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * List Webhooks
     * @param projectId Provide the unique identifier of the project.
     */
    public listWebhooksWithHttpInfo(projectId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsWebhooksListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listWebhooks(projectId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWebhooksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists all webhook configurations for the project.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * List Webhooks
     * @param projectId Provide the unique identifier of the project.
     */
    public listWebhooks(projectId: string, _options?: ConfigurationOptions): Observable<ManagementProjectsWebhooksListResponseBody> {
        return this.listWebhooksWithHttpInfo(projectId, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsWebhooksListResponseBody>) => apiResponse.data));
    }

    /**
     * Copies a campaign template to another project. The resources, like validation rules or products, will not be copied to the destination project yet. When the template is used to create a new campaign or add a new promotion tier, the resources will be created in the destination project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Copy Campaign Template to a Project
     * @param projectId Provide the unique identifier of the project.
     * @param campaignTemplateId Provide the unique identifier of the campaign template.
     * @param [managementProjectsTemplatesCampaignsCopyCreateRequestBody] Determines the details about the template in the destination project as well as the destination project itself.
     */
    public managementCopyCampaignTemplateWithHttpInfo(projectId: string, campaignTemplateId: string, managementProjectsTemplatesCampaignsCopyCreateRequestBody?: ManagementProjectsTemplatesCampaignsCopyCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsTemplatesCampaignsCopyCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.managementCopyCampaignTemplate(projectId, campaignTemplateId, managementProjectsTemplatesCampaignsCopyCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.managementCopyCampaignTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Copies a campaign template to another project. The resources, like validation rules or products, will not be copied to the destination project yet. When the template is used to create a new campaign or add a new promotion tier, the resources will be created in the destination project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Copy Campaign Template to a Project
     * @param projectId Provide the unique identifier of the project.
     * @param campaignTemplateId Provide the unique identifier of the campaign template.
     * @param [managementProjectsTemplatesCampaignsCopyCreateRequestBody] Determines the details about the template in the destination project as well as the destination project itself.
     */
    public managementCopyCampaignTemplate(projectId: string, campaignTemplateId: string, managementProjectsTemplatesCampaignsCopyCreateRequestBody?: ManagementProjectsTemplatesCampaignsCopyCreateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsTemplatesCampaignsCopyCreateResponseBody> {
        return this.managementCopyCampaignTemplateWithHttpInfo(projectId, campaignTemplateId, managementProjectsTemplatesCampaignsCopyCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsTemplatesCampaignsCopyCreateResponseBody>) => apiResponse.data));
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
    public managementListCampaignTemplatesWithHttpInfo(projectId: string, limit?: number, startingAfterId?: string, order?: ParameterTemplatesList, includeTotal?: boolean, filters?: ParameterFiltersListTemplates, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsTemplatesCampaignsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.managementListCampaignTemplates(projectId, limit, startingAfterId, order, includeTotal, filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.managementListCampaignTemplatesWithHttpInfo(rsp)));
            }));
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
    public managementListCampaignTemplates(projectId: string, limit?: number, startingAfterId?: string, order?: ParameterTemplatesList, includeTotal?: boolean, filters?: ParameterFiltersListTemplates, _options?: ConfigurationOptions): Observable<ManagementProjectsTemplatesCampaignsListResponseBody> {
        return this.managementListCampaignTemplatesWithHttpInfo(projectId, limit, startingAfterId, order, includeTotal, filters, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsTemplatesCampaignsListResponseBody>) => apiResponse.data));
    }

    /**
     * Unassigns the user from the project. If the user is currently logged in, they are automatically logged out. If the user is assigned to only one project, they cannot be unassigned from that project.
     * Unassign User
     * @param projectId Provide the unique identifier of the project.
     * @param userId Provide the unique identifier of the user. Alternatively, provide the users login.
     */
    public unassignUserWithHttpInfo(projectId: string, userId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.unassignUser(projectId, userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unassignUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unassigns the user from the project. If the user is currently logged in, they are automatically logged out. If the user is assigned to only one project, they cannot be unassigned from that project.
     * Unassign User
     * @param projectId Provide the unique identifier of the project.
     * @param userId Provide the unique identifier of the user. Alternatively, provide the users login.
     */
    public unassignUser(projectId: string, userId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.unassignUserWithHttpInfo(projectId, userId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates a brand configuration. Only the fields sent in the request will be updated. The fields omitted in the request will remain unchanged.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.
     * Update Brand
     * @param projectId Provide the unique identifier of the project.
     * @param brandingId Provide the unique identifier of the brand configuration.
     * @param [managementProjectsBrandingUpdateRequestBody] Defines the brand configuration to be updated.
     */
    public updateBrandWithHttpInfo(projectId: string, brandingId: string, managementProjectsBrandingUpdateRequestBody?: ManagementProjectsBrandingUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsBrandingUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateBrand(projectId, brandingId, managementProjectsBrandingUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBrandWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a brand configuration. Only the fields sent in the request will be updated. The fields omitted in the request will remain unchanged.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.
     * Update Brand
     * @param projectId Provide the unique identifier of the project.
     * @param brandingId Provide the unique identifier of the brand configuration.
     * @param [managementProjectsBrandingUpdateRequestBody] Defines the brand configuration to be updated.
     */
    public updateBrand(projectId: string, brandingId: string, managementProjectsBrandingUpdateRequestBody?: ManagementProjectsBrandingUpdateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsBrandingUpdateResponseBody> {
        return this.updateBrandWithHttpInfo(projectId, brandingId, managementProjectsBrandingUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsBrandingUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * Updates a custom event schema. With this request, you can: - Add a nonexistent property to a custom event schema. - Update an existing property. In the request, you can provide only those properties you want to add or update. Definitions omitted in the request remain unchanged.  👍 Additional Notes - You can change the type of an existing property, e.g. from string to number. - You can remove a custom property with this endpoint by providing deleted: true in the request. However, you cannot permanently remove an event definition or its property with this endpoint.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Update Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param customEventSchemaId Provide the unique identifier of the custom event schema.
     * @param [managementProjectsCustomEventSchemasUpdateRequestBody] Defines the custom event schema to be updated.
     */
    public updateCustomEventSchemaWithHttpInfo(projectId: string, customEventSchemaId: string, managementProjectsCustomEventSchemasUpdateRequestBody?: ManagementProjectsCustomEventSchemasUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsCustomEventSchemasUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCustomEventSchema(projectId, customEventSchemaId, managementProjectsCustomEventSchemasUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCustomEventSchemaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom event schema. With this request, you can: - Add a nonexistent property to a custom event schema. - Update an existing property. In the request, you can provide only those properties you want to add or update. Definitions omitted in the request remain unchanged.  👍 Additional Notes - You can change the type of an existing property, e.g. from string to number. - You can remove a custom property with this endpoint by providing deleted: true in the request. However, you cannot permanently remove an event definition or its property with this endpoint.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Update Custom Event Schema
     * @param projectId Provide the unique identifier of the project.
     * @param customEventSchemaId Provide the unique identifier of the custom event schema.
     * @param [managementProjectsCustomEventSchemasUpdateRequestBody] Defines the custom event schema to be updated.
     */
    public updateCustomEventSchema(projectId: string, customEventSchemaId: string, managementProjectsCustomEventSchemasUpdateRequestBody?: ManagementProjectsCustomEventSchemasUpdateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsCustomEventSchemasUpdateResponseBody> {
        return this.updateCustomEventSchemaWithHttpInfo(projectId, customEventSchemaId, managementProjectsCustomEventSchemasUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsCustomEventSchemasUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * Updates a metadata schema. With this request, you can: - Add a nonexistent attribute definition to the metadata schema. - Update an existing attribute definition by overwriting its current values. In the request, you can provide only those definitions you want to add or update. Definitions omitted in the request remain unchanged. However, if you want to update a definition, you will have to add all its current key-value pairs as well. Only the pairs sent in the request are saved for this definition. This means that the key-value pairs that are not sent in a request are restored to default values. For example, if your definition has an array with values and it is not sent in an update request, the array values will be deleted.  👍 Additional Notes - You cannot change the type of an existing schema, e.g. from string to number. - You can remove a definition with this endpoint by providing deleted: true in the request. It will be moved to the Removed definitions section in the user interface. However, you cannot permanently remove a definition with this endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Update Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param metadataSchemaId Provide the unique identifier of the metadata schema.
     * @param [managementProjectsMetadataSchemasUpdateRequestBody] Defines the metadata schema to be updated.
     */
    public updateMetadataSchemaWithHttpInfo(projectId: string, metadataSchemaId: string, managementProjectsMetadataSchemasUpdateRequestBody?: ManagementProjectsMetadataSchemasUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsMetadataSchemasUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateMetadataSchema(projectId, metadataSchemaId, managementProjectsMetadataSchemasUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateMetadataSchemaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a metadata schema. With this request, you can: - Add a nonexistent attribute definition to the metadata schema. - Update an existing attribute definition by overwriting its current values. In the request, you can provide only those definitions you want to add or update. Definitions omitted in the request remain unchanged. However, if you want to update a definition, you will have to add all its current key-value pairs as well. Only the pairs sent in the request are saved for this definition. This means that the key-value pairs that are not sent in a request are restored to default values. For example, if your definition has an array with values and it is not sent in an update request, the array values will be deleted.  👍 Additional Notes - You cannot change the type of an existing schema, e.g. from string to number. - You can remove a definition with this endpoint by providing deleted: true in the request. It will be moved to the Removed definitions section in the user interface. However, you cannot permanently remove a definition with this endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Update Metadata Schema
     * @param projectId Provide the unique identifier of the project.
     * @param metadataSchemaId Provide the unique identifier of the metadata schema.
     * @param [managementProjectsMetadataSchemasUpdateRequestBody] Defines the metadata schema to be updated.
     */
    public updateMetadataSchema(projectId: string, metadataSchemaId: string, managementProjectsMetadataSchemasUpdateRequestBody?: ManagementProjectsMetadataSchemasUpdateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsMetadataSchemasUpdateResponseBody> {
        return this.updateMetadataSchemaWithHttpInfo(projectId, metadataSchemaId, managementProjectsMetadataSchemasUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsMetadataSchemasUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * Updates an existing project. You can add or modify settings for timezone, currency, notifications, and other details. Only the fields sent in the request will be updated.
     * Update Project
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsUpdateRequestBody] Define the project details to be updated.
     */
    public updateProjectWithHttpInfo(projectId: string, managementProjectsUpdateRequestBody?: ManagementProjectsUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProject(projectId, managementProjectsUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing project. You can add or modify settings for timezone, currency, notifications, and other details. Only the fields sent in the request will be updated.
     * Update Project
     * @param projectId Provide the unique identifier of the project.
     * @param [managementProjectsUpdateRequestBody] Define the project details to be updated.
     */
    public updateProject(projectId: string, managementProjectsUpdateRequestBody?: ManagementProjectsUpdateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsUpdateResponseBody> {
        return this.updateProjectWithHttpInfo(projectId, managementProjectsUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * Updates the stacking rules. Only the provided fields will be updated. However, if you update an array, the content of the array is overwritten. This means that if you want to add new values to an array and retain existing ones, you need to provide both the existing and new values in the request.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Update Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param stackingRulesId Provide the unique identifier of the stacking rules.
     * @param [managementProjectsStackingRulesUpdateRequestBody] Defines the stacking rules to be updated.
     */
    public updateStackingRulesWithHttpInfo(projectId: string, stackingRulesId: string, managementProjectsStackingRulesUpdateRequestBody?: ManagementProjectsStackingRulesUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsStackingRulesUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateStackingRules(projectId, stackingRulesId, managementProjectsStackingRulesUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateStackingRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the stacking rules. Only the provided fields will be updated. However, if you update an array, the content of the array is overwritten. This means that if you want to add new values to an array and retain existing ones, you need to provide both the existing and new values in the request.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Update Stacking Rules
     * @param projectId Provide the unique identifier of the project.
     * @param stackingRulesId Provide the unique identifier of the stacking rules.
     * @param [managementProjectsStackingRulesUpdateRequestBody] Defines the stacking rules to be updated.
     */
    public updateStackingRules(projectId: string, stackingRulesId: string, managementProjectsStackingRulesUpdateRequestBody?: ManagementProjectsStackingRulesUpdateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsStackingRulesUpdateResponseBody> {
        return this.updateStackingRulesWithHttpInfo(projectId, stackingRulesId, managementProjectsStackingRulesUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsStackingRulesUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * Updates the users role.
     * Update User
     * @param projectId Provide the unique identifier of the project.
     * @param userId Provide the unique identifier of the user. Alternatively, provide the users login.
     * @param [managementProjectsUsersUpdateRoleRequestBody] Defines the users new role.
     */
    public updateUserWithHttpInfo(projectId: string, userId: string, managementProjectsUsersUpdateRoleRequestBody?: ManagementProjectsUsersUpdateRoleRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsUsersUpdateRoleResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateUser(projectId, userId, managementProjectsUsersUpdateRoleRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the users role.
     * Update User
     * @param projectId Provide the unique identifier of the project.
     * @param userId Provide the unique identifier of the user. Alternatively, provide the users login.
     * @param [managementProjectsUsersUpdateRoleRequestBody] Defines the users new role.
     */
    public updateUser(projectId: string, userId: string, managementProjectsUsersUpdateRoleRequestBody?: ManagementProjectsUsersUpdateRoleRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsUsersUpdateRoleResponseBody> {
        return this.updateUserWithHttpInfo(projectId, userId, managementProjectsUsersUpdateRoleRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsUsersUpdateRoleResponseBody>) => apiResponse.data));
    }

    /**
     * Updates a webhook configuration. The events listed in the request are overwritten. If you want to add more events, provide also the events that are already in the webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Update Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param webhookId Provide the unique identifier of the webhook configuration.
     * @param [managementProjectsWebhooksUpdateRequestBody] Defines the webhook configuration to be updated.
     */
    public updateWebhookWithHttpInfo(projectId: string, webhookId: string, managementProjectsWebhooksUpdateRequestBody?: ManagementProjectsWebhooksUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ManagementProjectsWebhooksUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateWebhook(projectId, webhookId, managementProjectsWebhooksUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a webhook configuration. The events listed in the request are overwritten. If you want to add more events, provide also the events that are already in the webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Update Webhook
     * @param projectId Provide the unique identifier of the project.
     * @param webhookId Provide the unique identifier of the webhook configuration.
     * @param [managementProjectsWebhooksUpdateRequestBody] Defines the webhook configuration to be updated.
     */
    public updateWebhook(projectId: string, webhookId: string, managementProjectsWebhooksUpdateRequestBody?: ManagementProjectsWebhooksUpdateRequestBody, _options?: ConfigurationOptions): Observable<ManagementProjectsWebhooksUpdateResponseBody> {
        return this.updateWebhookWithHttpInfo(projectId, webhookId, managementProjectsWebhooksUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ManagementProjectsWebhooksUpdateResponseBody>) => apiResponse.data));
    }

}

import { MetadataSchemasApiRequestFactory, MetadataSchemasApiResponseProcessor} from "../apis/MetadataSchemasApi";
export class ObservableMetadataSchemasApi {
    private requestFactory: MetadataSchemasApiRequestFactory;
    private responseProcessor: MetadataSchemasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataSchemasApiRequestFactory,
        responseProcessor?: MetadataSchemasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MetadataSchemasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MetadataSchemasApiResponseProcessor();
    }

    /**
     * Retrieves a metadata schema per resource type. # Resource types ## Standard You can retrieve metadata schemas for the standard metadata schema definitions listed below. Add one of these types as the resource path parameter. - campaign - customer - earning_rule - loyalty_tier - order - order_item - product - promotion_tier - publication - redemption - reward - voucher ## Custom If you have defined a [custom metadata schema](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata), provide its name in the resource field to retrieve its details. 📘 Management API If you have Management API enabled, you can also use the [Get Metadata Schemas](/api-reference/management/get-metadata-schema) endpoint to retrieve a metadata schema using its ID.
     * Get Metadata Schema
     * @param resource There is an infinite number of possibilities for retrieving metadata schemas by the resource type because you can define custom metadata schemas.
     */
    public getMetadataSchemaWithHttpInfo(resource: string, _options?: ConfigurationOptions): Observable<HttpInfo<MetadataSchemasGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMetadataSchema(resource, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMetadataSchemaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a metadata schema per resource type. # Resource types ## Standard You can retrieve metadata schemas for the standard metadata schema definitions listed below. Add one of these types as the resource path parameter. - campaign - customer - earning_rule - loyalty_tier - order - order_item - product - promotion_tier - publication - redemption - reward - voucher ## Custom If you have defined a [custom metadata schema](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata), provide its name in the resource field to retrieve its details. 📘 Management API If you have Management API enabled, you can also use the [Get Metadata Schemas](/api-reference/management/get-metadata-schema) endpoint to retrieve a metadata schema using its ID.
     * Get Metadata Schema
     * @param resource There is an infinite number of possibilities for retrieving metadata schemas by the resource type because you can define custom metadata schemas.
     */
    public getMetadataSchema(resource: string, _options?: ConfigurationOptions): Observable<MetadataSchemasGetResponseBody> {
        return this.getMetadataSchemaWithHttpInfo(resource, _options).pipe(map((apiResponse: HttpInfo<MetadataSchemasGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve metadata schema definitions. 📘 Management API If you have Management API enabled, you can also use the [List Metadata Schemas](/api-reference/management/list-metadata-schemas) endpoint to list all metadata schemas.
     * List Metadata Schema Definitions
     */
    public listMetadataSchemasWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<MetadataSchemasListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listMetadataSchemas(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMetadataSchemasWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve metadata schema definitions. 📘 Management API If you have Management API enabled, you can also use the [List Metadata Schemas](/api-reference/management/list-metadata-schemas) endpoint to list all metadata schemas.
     * List Metadata Schema Definitions
     */
    public listMetadataSchemas(_options?: ConfigurationOptions): Observable<MetadataSchemasListResponseBody> {
        return this.listMetadataSchemasWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MetadataSchemasListResponseBody>) => apiResponse.data));
    }

}

import { OAuthApiRequestFactory, OAuthApiResponseProcessor} from "../apis/OAuthApi";
export class ObservableOAuthApi {
    private requestFactory: OAuthApiRequestFactory;
    private responseProcessor: OAuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OAuthApiRequestFactory,
        responseProcessor?: OAuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OAuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OAuthApiResponseProcessor();
    }

    /**
     * Generate an OAuth 2.0 token for an API client. The token can be used to authorize access to the Voucherify API. The token inherits the permissions and IP whitelists of the API key that is used to generate the OAuth token. You can define the scope that limits its usage. You can generate up to 1000 OAuth tokens per project. The token expires in 900 seconds (15 minutes). If the API key that is used to generate the OAuth token is deleted or blocked, you cannot generate new OAuth tokens and the existing ones will stop working within one minute. If the API key used to generate an OAuth token is regenerated, the OAuth token can still be used. 🚧 Format of scope values Separate the values of the scope property with spaces.
     * Generate OAuth 2.0 Token
     * @param [grantType] Gives an access token outside of the context of a user.
     * @param [scope] Defines the scope of possible actions that can be done with the OAuth token. The &#x60;api&#x60; scope allows using the server-side API. The &#x60;client_api&#x60; scope allows using the whole client-side API. The values are space-delimited; do **not** use commas to separate the values.  Allowed values: &#x60;api&#x60;, &#x60;assets&#x60;, &#x60;async-actions&#x60;, &#x60;campaigns&#x60;, &#x60;categories&#x60;, &#x60;client_api&#x60;, &#x60;client_consents&#x60;, &#x60;client_customers&#x60;, &#x60;client_events&#x60;, &#x60;client_promotions&#x60;, &#x60;client_publish&#x60;, &#x60;client_qualifications&#x60;, &#x60;client_redeem&#x60;, &#x60;client_redemptions&#x60;, &#x60;client_validate&#x60;, &#x60;client_validations&#x60;, &#x60;client_vouchers&#x60;, &#x60;consents&#x60;, &#x60;customers&#x60;, &#x60;events&#x60;, &#x60;exports&#x60;, &#x60;locations&#x60;, &#x60;loyalties&#x60;, &#x60;metadata-schemas&#x60;, &#x60;orders&#x60;, &#x60;product-collections&#x60;, &#x60;products&#x60;, &#x60;promotions&#x60;, &#x60;publications&#x60;, &#x60;qualifications&#x60;, &#x60;redemptions&#x60;, &#x60;referrals&#x60;, &#x60;rewards&#x60;, &#x60;segments&#x60;, &#x60;SKUs&#x60;, &#x60;task-results&#x60;, &#x60;templates&#x60;, &#x60;trash-bin&#x60;, &#x60;validation-rules-assignments&#x60;, &#x60;validation-rules&#x60;, &#x60;validations&#x60;, &#x60;vouchers&#x60;.
     */
    public generateOauthTokenWithHttpInfo(grantType?: string, scope?: string, _options?: ConfigurationOptions): Observable<HttpInfo<OAuthTokenGenerateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.generateOauthToken(grantType, scope, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateOauthTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generate an OAuth 2.0 token for an API client. The token can be used to authorize access to the Voucherify API. The token inherits the permissions and IP whitelists of the API key that is used to generate the OAuth token. You can define the scope that limits its usage. You can generate up to 1000 OAuth tokens per project. The token expires in 900 seconds (15 minutes). If the API key that is used to generate the OAuth token is deleted or blocked, you cannot generate new OAuth tokens and the existing ones will stop working within one minute. If the API key used to generate an OAuth token is regenerated, the OAuth token can still be used. 🚧 Format of scope values Separate the values of the scope property with spaces.
     * Generate OAuth 2.0 Token
     * @param [grantType] Gives an access token outside of the context of a user.
     * @param [scope] Defines the scope of possible actions that can be done with the OAuth token. The &#x60;api&#x60; scope allows using the server-side API. The &#x60;client_api&#x60; scope allows using the whole client-side API. The values are space-delimited; do **not** use commas to separate the values.  Allowed values: &#x60;api&#x60;, &#x60;assets&#x60;, &#x60;async-actions&#x60;, &#x60;campaigns&#x60;, &#x60;categories&#x60;, &#x60;client_api&#x60;, &#x60;client_consents&#x60;, &#x60;client_customers&#x60;, &#x60;client_events&#x60;, &#x60;client_promotions&#x60;, &#x60;client_publish&#x60;, &#x60;client_qualifications&#x60;, &#x60;client_redeem&#x60;, &#x60;client_redemptions&#x60;, &#x60;client_validate&#x60;, &#x60;client_validations&#x60;, &#x60;client_vouchers&#x60;, &#x60;consents&#x60;, &#x60;customers&#x60;, &#x60;events&#x60;, &#x60;exports&#x60;, &#x60;locations&#x60;, &#x60;loyalties&#x60;, &#x60;metadata-schemas&#x60;, &#x60;orders&#x60;, &#x60;product-collections&#x60;, &#x60;products&#x60;, &#x60;promotions&#x60;, &#x60;publications&#x60;, &#x60;qualifications&#x60;, &#x60;redemptions&#x60;, &#x60;referrals&#x60;, &#x60;rewards&#x60;, &#x60;segments&#x60;, &#x60;SKUs&#x60;, &#x60;task-results&#x60;, &#x60;templates&#x60;, &#x60;trash-bin&#x60;, &#x60;validation-rules-assignments&#x60;, &#x60;validation-rules&#x60;, &#x60;validations&#x60;, &#x60;vouchers&#x60;.
     */
    public generateOauthToken(grantType?: string, scope?: string, _options?: ConfigurationOptions): Observable<OAuthTokenGenerateResponseBody> {
        return this.generateOauthTokenWithHttpInfo(grantType, scope, _options).pipe(map((apiResponse: HttpInfo<OAuthTokenGenerateResponseBody>) => apiResponse.data));
    }

    /**
     * Introspect an OAuth 2.0 token for an API client.
     * Introspect OAuth 2.0 Token
     * @param [accessToken] An OAuth 2.0 token generated with the API token and key.
     */
    public introspectOauthTokenWithHttpInfo(accessToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<OAuthTokenIntrospectResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.introspectOauthToken(accessToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.introspectOauthTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Introspect an OAuth 2.0 token for an API client.
     * Introspect OAuth 2.0 Token
     * @param [accessToken] An OAuth 2.0 token generated with the API token and key.
     */
    public introspectOauthToken(accessToken?: string, _options?: ConfigurationOptions): Observable<OAuthTokenIntrospectResponseBody> {
        return this.introspectOauthTokenWithHttpInfo(accessToken, _options).pipe(map((apiResponse: HttpInfo<OAuthTokenIntrospectResponseBody>) => apiResponse.data));
    }

    /**
     * Revoke an OAuth 2.0 token for an API client. Once revoked, the token cannot be used anymore.
     * Revoke OAuth 2.0 Token
     * @param [accessToken] An OAuth 2.0 token generated with the API token and key.
     */
    public revokeOauthTokenWithHttpInfo(accessToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.revokeOauthToken(accessToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revokeOauthTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Revoke an OAuth 2.0 token for an API client. Once revoked, the token cannot be used anymore.
     * Revoke OAuth 2.0 Token
     * @param [accessToken] An OAuth 2.0 token generated with the API token and key.
     */
    public revokeOauthToken(accessToken?: string, _options?: ConfigurationOptions): Observable<void> {
        return this.revokeOauthTokenWithHttpInfo(accessToken, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { OrdersApiRequestFactory, OrdersApiResponseProcessor} from "../apis/OrdersApi";
export class ObservableOrdersApi {
    private requestFactory: OrdersApiRequestFactory;
    private responseProcessor: OrdersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrdersApiRequestFactory,
        responseProcessor?: OrdersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrdersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrdersApiResponseProcessor();
    }

    /**
     * Creates an order object and triggers an order creation event.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the order database, Voucherify will return a related order object with updated fields.
     * Create Order
     * @param [ordersCreateRequestBody] Specify the order parameters.
     */
    public createOrderWithHttpInfo(ordersCreateRequestBody?: OrdersCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<OrdersCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOrder(ordersCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an order object and triggers an order creation event.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the order database, Voucherify will return a related order object with updated fields.
     * Create Order
     * @param [ordersCreateRequestBody] Specify the order parameters.
     */
    public createOrder(ordersCreateRequestBody?: OrdersCreateRequestBody, _options?: ConfigurationOptions): Observable<OrdersCreateResponseBody> {
        return this.createOrderWithHttpInfo(ordersCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<OrdersCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Creates a downloadable CSV file containing a list of orders. The parameters listed in the payload resembles headers in the CSV file. To include a parameter to the file, add it to the parameters.fields object in the request body. The available filters are all [order object](/api-reference/orders/order-calculated-object) attributes. Additionally, any metadata defined in the metadata schema can be exported. Passing an empty JSON will generate a file containing three default fields: id, source_id, and status. The fields array is an array of strings containing the data in the export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields:    
     * Create Orders Export
     * @param [ordersExportCreateRequestBody] Specify which order parameters you would like to export.
     */
    public createOrderExportWithHttpInfo(ordersExportCreateRequestBody?: OrdersExportCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<OrdersExportCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOrderExport(ordersExportCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderExportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a downloadable CSV file containing a list of orders. The parameters listed in the payload resembles headers in the CSV file. To include a parameter to the file, add it to the parameters.fields object in the request body. The available filters are all [order object](/api-reference/orders/order-calculated-object) attributes. Additionally, any metadata defined in the metadata schema can be exported. Passing an empty JSON will generate a file containing three default fields: id, source_id, and status. The fields array is an array of strings containing the data in the export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields:    
     * Create Orders Export
     * @param [ordersExportCreateRequestBody] Specify which order parameters you would like to export.
     */
    public createOrderExport(ordersExportCreateRequestBody?: OrdersExportCreateRequestBody, _options?: ConfigurationOptions): Observable<OrdersExportCreateResponseBody> {
        return this.createOrderExportWithHttpInfo(ordersExportCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<OrdersExportCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve a specific order by passing its ID.
     * Get Order
     * @param orderId Unique Voucherify order ID or order source ID.
     */
    public getOrderWithHttpInfo(orderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<OrdersGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOrder(orderId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a specific order by passing its ID.
     * Get Order
     * @param orderId Unique Voucherify order ID or order source ID.
     */
    public getOrder(orderId: string, _options?: ConfigurationOptions): Observable<OrdersGetResponseBody> {
        return this.getOrderWithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<OrdersGetResponseBody>) => apiResponse.data));
    }

    /**
     *   🚧 Historical orders  This endpoint should only be used to import historical orders into Voucherify. For on-going synchronization, the [update order](/api-reference/orders/update-order) endpoints should be used. This is critical because this endpoint does not store events or launch distributions. # Limitations ## Import volume There can be only a single on-going order import per tenant per project at a given time. The user can schedule more imports but those extra imports will be scheduled to run in sequence one by one.   ## Maximum count of orders in single import There is a 2000 limit but we might decide to change it to a lower / higher value at any given time depending if we find this value is too high or too low with time. # Notifications There are no notifications on the Dashboard because this import is launched via the API. # Triggered actions    If you import orders with customers, then a logic will be scheduled responsible for placing these customers into segments and refreshing the segments summary. Consequently, this update will trigger  - **customers entering into segments**  - **distributions** based on any rules tied to customer entering segment(s) - **earning rules** based on the customer entering segment(s) # What is not triggered 1. No webhooks are triggered during the import of orders - for both orders and upserted products / SKUs.   2. Distributions based on Order Update, Order Paid, Order Created and Order Cancelled. In other words if you have a distribution based on Order Paid and you import an order with a PAID status, the distribution is not going to be triggered.     3. No events are created during the import of orders - for both orders and upserted products / SKUs. In other words you wont see any events in the Activity tab in the Dashboard such as Order created or Order paid. If you are additionally upserting products / SKUs, then you wont see the Product created events listed, etc.    4. Earning rules based on Order Paid wont be triggered. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request with [GET Async Action](/api-reference/async-actions/get-async-action) endpoint.
     * Import Orders
     * @param [ordersImportCreateRequestBodyItem] The request body is sent in the form of an array of order objects.
     */
    public importOrdersWithHttpInfo(ordersImportCreateRequestBodyItem?: Array<OrdersImportCreateRequestBodyItem>, _options?: ConfigurationOptions): Observable<HttpInfo<OrdersImportCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.importOrders(ordersImportCreateRequestBodyItem, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importOrdersWithHttpInfo(rsp)));
            }));
    }

    /**
     *   🚧 Historical orders  This endpoint should only be used to import historical orders into Voucherify. For on-going synchronization, the [update order](/api-reference/orders/update-order) endpoints should be used. This is critical because this endpoint does not store events or launch distributions. # Limitations ## Import volume There can be only a single on-going order import per tenant per project at a given time. The user can schedule more imports but those extra imports will be scheduled to run in sequence one by one.   ## Maximum count of orders in single import There is a 2000 limit but we might decide to change it to a lower / higher value at any given time depending if we find this value is too high or too low with time. # Notifications There are no notifications on the Dashboard because this import is launched via the API. # Triggered actions    If you import orders with customers, then a logic will be scheduled responsible for placing these customers into segments and refreshing the segments summary. Consequently, this update will trigger  - **customers entering into segments**  - **distributions** based on any rules tied to customer entering segment(s) - **earning rules** based on the customer entering segment(s) # What is not triggered 1. No webhooks are triggered during the import of orders - for both orders and upserted products / SKUs.   2. Distributions based on Order Update, Order Paid, Order Created and Order Cancelled. In other words if you have a distribution based on Order Paid and you import an order with a PAID status, the distribution is not going to be triggered.     3. No events are created during the import of orders - for both orders and upserted products / SKUs. In other words you wont see any events in the Activity tab in the Dashboard such as Order created or Order paid. If you are additionally upserting products / SKUs, then you wont see the Product created events listed, etc.    4. Earning rules based on Order Paid wont be triggered. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request with [GET Async Action](/api-reference/async-actions/get-async-action) endpoint.
     * Import Orders
     * @param [ordersImportCreateRequestBodyItem] The request body is sent in the form of an array of order objects.
     */
    public importOrders(ordersImportCreateRequestBodyItem?: Array<OrdersImportCreateRequestBodyItem>, _options?: ConfigurationOptions): Observable<OrdersImportCreateResponseBody> {
        return this.importOrdersWithHttpInfo(ordersImportCreateRequestBodyItem, _options).pipe(map((apiResponse: HttpInfo<OrdersImportCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Returns a list of orders. 
     * List Orders
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listOrdersWithHttpInfo(limit?: number, page?: number, order?: ParameterOrderListOrders, _options?: ConfigurationOptions): Observable<HttpInfo<OrdersListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOrders(limit, page, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrdersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of orders. 
     * List Orders
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listOrders(limit?: number, page?: number, order?: ParameterOrderListOrders, _options?: ConfigurationOptions): Observable<OrdersListResponseBody> {
        return this.listOrdersWithHttpInfo(limit, page, order, _options).pipe(map((apiResponse: HttpInfo<OrdersListResponseBody>) => apiResponse.data));
    }

    /**
     * Updates the specified order by setting the values of the parameters passed in the request body. Any parameters not provided will be left unchanged.
     * Update Order
     * @param orderId Unique Voucherify order ID or order source ID.
     * @param [ordersUpdateRequestBody] Specify the parameters of the order that are to be updated.
     */
    public updateOrderWithHttpInfo(orderId: string, ordersUpdateRequestBody?: OrdersUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<OrdersUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOrder(orderId, ordersUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the specified order by setting the values of the parameters passed in the request body. Any parameters not provided will be left unchanged.
     * Update Order
     * @param orderId Unique Voucherify order ID or order source ID.
     * @param [ordersUpdateRequestBody] Specify the parameters of the order that are to be updated.
     */
    public updateOrder(orderId: string, ordersUpdateRequestBody?: OrdersUpdateRequestBody, _options?: ConfigurationOptions): Observable<OrdersUpdateResponseBody> {
        return this.updateOrderWithHttpInfo(orderId, ordersUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<OrdersUpdateResponseBody>) => apiResponse.data));
    }

}

import { ProductCollectionsApiRequestFactory, ProductCollectionsApiResponseProcessor} from "../apis/ProductCollectionsApi";
export class ObservableProductCollectionsApi {
    private requestFactory: ProductCollectionsApiRequestFactory;
    private responseProcessor: ProductCollectionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductCollectionsApiRequestFactory,
        responseProcessor?: ProductCollectionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductCollectionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductCollectionsApiResponseProcessor();
    }

    /**
     * This method creates a new product collection.
     * Create Product Collection
     * @param [productCollectionsCreateRequestBody]
     */
    public createProductCollectionWithHttpInfo(productCollectionsCreateRequestBody?: ProductCollectionsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ProductCollectionsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createProductCollection(productCollectionsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method creates a new product collection.
     * Create Product Collection
     * @param [productCollectionsCreateRequestBody]
     */
    public createProductCollection(productCollectionsCreateRequestBody?: ProductCollectionsCreateRequestBody, _options?: ConfigurationOptions): Observable<ProductCollectionsCreateResponseBody> {
        return this.createProductCollectionWithHttpInfo(productCollectionsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ProductCollectionsCreateResponseBody>) => apiResponse.data));
    }

    /**
     * This method deletes a product collection.
     * Delete Product Collection
     * @param productCollectionId A unique product collection ID.
     */
    public deleteProductCollectionWithHttpInfo(productCollectionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteProductCollection(productCollectionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method deletes a product collection.
     * Delete Product Collection
     * @param productCollectionId A unique product collection ID.
     */
    public deleteProductCollection(productCollectionId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteProductCollectionWithHttpInfo(productCollectionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves the product collection.
     * Get Product Collection
     * @param productCollectionId A unique product collection ID.
     */
    public getProductCollectionWithHttpInfo(productCollectionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ProductCollectionsGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProductCollection(productCollectionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the product collection.
     * Get Product Collection
     * @param productCollectionId A unique product collection ID.
     */
    public getProductCollection(productCollectionId: string, _options?: ConfigurationOptions): Observable<ProductCollectionsGetResponseBody> {
        return this.getProductCollectionWithHttpInfo(productCollectionId, _options).pipe(map((apiResponse: HttpInfo<ProductCollectionsGetResponseBody>) => apiResponse.data));
    }

    /**
     * This method returns a list of product collections.
     * List Product Collections
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listProductCollectionsWithHttpInfo(limit?: number, page?: number, order?: ParameterOrder, _options?: ConfigurationOptions): Observable<HttpInfo<ProductCollectionsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProductCollections(limit, page, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductCollectionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method returns a list of product collections.
     * List Product Collections
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listProductCollections(limit?: number, page?: number, order?: ParameterOrder, _options?: ConfigurationOptions): Observable<ProductCollectionsListResponseBody> {
        return this.listProductCollectionsWithHttpInfo(limit, page, order, _options).pipe(map((apiResponse: HttpInfo<ProductCollectionsListResponseBody>) => apiResponse.data));
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
    public listProductsInCollectionWithHttpInfo(productCollectionId: string, limit?: number, page?: number, order?: ParameterOrder, startingAfter?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<ProductCollectionsProductsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProductsInCollection(productCollectionId, limit, page, order, startingAfter, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductsInCollectionWithHttpInfo(rsp)));
            }));
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
    public listProductsInCollection(productCollectionId: string, limit?: number, page?: number, order?: ParameterOrder, startingAfter?: Date, _options?: ConfigurationOptions): Observable<ProductCollectionsProductsListResponseBody> {
        return this.listProductsInCollectionWithHttpInfo(productCollectionId, limit, page, order, startingAfter, _options).pipe(map((apiResponse: HttpInfo<ProductCollectionsProductsListResponseBody>) => apiResponse.data));
    }

}

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class ObservableProductsApi {
    private requestFactory: ProductsApiRequestFactory;
    private responseProcessor: ProductsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsApiResponseProcessor();
    }

    /**
     * Creates a product object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the product database, Voucherify will return a related product object with updated fields.
     * Create Product
     * @param [productsCreateRequestBody] Specify the product parameters.
     */
    public createProductWithHttpInfo(productsCreateRequestBody?: ProductsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ProductsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createProduct(productsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a product object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the product database, Voucherify will return a related product object with updated fields.
     * Create Product
     * @param [productsCreateRequestBody] Specify the product parameters.
     */
    public createProduct(productsCreateRequestBody?: ProductsCreateRequestBody, _options?: ConfigurationOptions): Observable<ProductsCreateResponseBody> {
        return this.createProductWithHttpInfo(productsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ProductsCreateResponseBody>) => apiResponse.data));
    }

    /**
     * This method adds product variants to a [created product](/api-reference/products/create-product).   📘 Upsert Mode  If you pass an id or a source_id that already exists in the sku database, Voucherify will return a related sku object with updated fields.
     * Create SKU
     * @param productId A Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param [productsSkusCreateRequestBody] Specify the SKU parameters to be created.
     */
    public createSkuWithHttpInfo(productId: string, productsSkusCreateRequestBody?: ProductsSkusCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ProductsSkusCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSku(productId, productsSkusCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSkuWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method adds product variants to a [created product](/api-reference/products/create-product).   📘 Upsert Mode  If you pass an id or a source_id that already exists in the sku database, Voucherify will return a related sku object with updated fields.
     * Create SKU
     * @param productId A Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param [productsSkusCreateRequestBody] Specify the SKU parameters to be created.
     */
    public createSku(productId: string, productsSkusCreateRequestBody?: ProductsSkusCreateRequestBody, _options?: ConfigurationOptions): Observable<ProductsSkusCreateResponseBody> {
        return this.createSkuWithHttpInfo(productId, productsSkusCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ProductsSkusCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Deletes a product and all related SKUs. This operation cannot be undone.  If the force parameter is set to false or not set at all, the product and all related SKUs will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Product
     * @param productId A Voucherify product ID or source ID.
     * @param [force] If this flag is set to true, the product and all related SKUs will be removed permanently. If it is set to false or not set at all, the product and all related SKUs will be moved to the bin. Going forward, the user will be able to create another product with exactly the same source_id.
     */
    public deleteProductWithHttpInfo(productId: string, force?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteProduct(productId, force, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a product and all related SKUs. This operation cannot be undone.  If the force parameter is set to false or not set at all, the product and all related SKUs will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Product
     * @param productId A Voucherify product ID or source ID.
     * @param [force] If this flag is set to true, the product and all related SKUs will be removed permanently. If it is set to false or not set at all, the product and all related SKUs will be moved to the bin. Going forward, the user will be able to create another product with exactly the same source_id.
     */
    public deleteProduct(productId: string, force?: boolean, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteProductWithHttpInfo(productId, force, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a product SKU. This operation cannot be undone.  If the force parameter is set to false or not set at all, the SKU will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete SKU
     * @param productId A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param skuId A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID.
     * @param [force] If this flag is set to true, the SKU will be removed permanently. If it is set to false or not set at all, the SKU will be moved to the bin. Going forward, the user will be able to create another SKU with exactly the same source_id.
     */
    public deleteSkuWithHttpInfo(productId: string, skuId: string, force?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteSku(productId, skuId, force, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSkuWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a product SKU. This operation cannot be undone.  If the force parameter is set to false or not set at all, the SKU will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete SKU
     * @param productId A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param skuId A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID.
     * @param [force] If this flag is set to true, the SKU will be removed permanently. If it is set to false or not set at all, the SKU will be moved to the bin. Going forward, the user will be able to create another SKU with exactly the same source_id.
     */
    public deleteSku(productId: string, skuId: string, force?: boolean, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteSkuWithHttpInfo(productId, skuId, force, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve details of a given product and its SKUs, if any.
     * Get Product
     * @param productId A Voucherify product ID or source ID.
     */
    public getProductWithHttpInfo(productId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ProductsGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProduct(productId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve details of a given product and its SKUs, if any.
     * Get Product
     * @param productId A Voucherify product ID or source ID.
     */
    public getProduct(productId: string, _options?: ConfigurationOptions): Observable<ProductsGetResponseBody> {
        return this.getProductWithHttpInfo(productId, _options).pipe(map((apiResponse: HttpInfo<ProductsGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve details of a SKU.
     * Get SKU
     * @param skuId A Voucherify SKU identifier or SKU source ID.
     */
    public getSkuWithHttpInfo(skuId: string, _options?: ConfigurationOptions): Observable<HttpInfo<SkusGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSku(skuId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSkuWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve details of a SKU.
     * Get SKU
     * @param skuId A Voucherify SKU identifier or SKU source ID.
     */
    public getSku(skuId: string, _options?: ConfigurationOptions): Observable<SkusGetResponseBody> {
        return this.getSkuWithHttpInfo(skuId, _options).pipe(map((apiResponse: HttpInfo<SkusGetResponseBody>) => apiResponse.data));
    }

    /**
     * Import products into the repository using a CSV file. The CSV file has to include headers in the first line.  📘 Standard product fields mapping  - Create a **comma separated value (CSV) file** or download our CSV import template. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b82ed68d51e779443f550/Import_products_template.csv).  - Supported CSV file headers: name,source_id,price,attributes,image_url,Metadata_property_name  - **Name** is a **required** field. The remaining fields in the CSV template are optional.  - Override/Update products **names** in Voucherify using this method. Data will be updated for each product included in the CSV file whose **source_id** matches a source ID in Voucherify. No other data can be updated other than the product name.  - Note that dates and date-time attributes need to be provided in compliance with the **ISO 8601 norms**. For example, 2022-03-11T09:00:00.000Z or 2022-03-11     - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Columns that cannot be mapped to standard fields, will be mapped to **Custom attributes** and added as **products metadata**. There is no limit on the number of custom attributes that you can import as metadata.   - To provide the proper data type, you need to add all custom attributes to the metadata schema **before importing the file**. Read more [here](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata).  - **Product attributes** (not custom attributes) need to be separated by a comma and enclosed in double quotes, i.e attribute1,attribute2.  - Headers with metadata names **cant contain white-space characters**.  - If you import metadata defined in the schema as **arrays (multiple)**, you need to separate each value using a comma, for example:       - array of strings: subscribed,premium       - array of numbers: 123,234.      - array of dates: 2000-01-01,2000-01-02 This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Products using CSV
     * @param [file] File path.
     */
    public importProductsUsingCsvWithHttpInfo(file?: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<ProductsImportCsvCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.importProductsUsingCsv(file, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importProductsUsingCsvWithHttpInfo(rsp)));
            }));
    }

    /**
     * Import products into the repository using a CSV file. The CSV file has to include headers in the first line.  📘 Standard product fields mapping  - Create a **comma separated value (CSV) file** or download our CSV import template. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b82ed68d51e779443f550/Import_products_template.csv).  - Supported CSV file headers: name,source_id,price,attributes,image_url,Metadata_property_name  - **Name** is a **required** field. The remaining fields in the CSV template are optional.  - Override/Update products **names** in Voucherify using this method. Data will be updated for each product included in the CSV file whose **source_id** matches a source ID in Voucherify. No other data can be updated other than the product name.  - Note that dates and date-time attributes need to be provided in compliance with the **ISO 8601 norms**. For example, 2022-03-11T09:00:00.000Z or 2022-03-11     - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Columns that cannot be mapped to standard fields, will be mapped to **Custom attributes** and added as **products metadata**. There is no limit on the number of custom attributes that you can import as metadata.   - To provide the proper data type, you need to add all custom attributes to the metadata schema **before importing the file**. Read more [here](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata).  - **Product attributes** (not custom attributes) need to be separated by a comma and enclosed in double quotes, i.e attribute1,attribute2.  - Headers with metadata names **cant contain white-space characters**.  - If you import metadata defined in the schema as **arrays (multiple)**, you need to separate each value using a comma, for example:       - array of strings: subscribed,premium       - array of numbers: 123,234.      - array of dates: 2000-01-01,2000-01-02 This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Products using CSV
     * @param [file] File path.
     */
    public importProductsUsingCsv(file?: HttpFile, _options?: ConfigurationOptions): Observable<ProductsImportCsvCreateResponseBody> {
        return this.importProductsUsingCsvWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<ProductsImportCsvCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Import SKUs into the repository using a CSV file. The CSV file has to include headers in the first line. All properties which cannot be mapped to standard SKU fields will be added to the metadata object. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b98d08c9b585083488a4c/Import_SKUS_template.csv).   🚧 Import sequence  First import products using the [dedicated endpoint](/api-reference/products/import-products-using-csv), then import SKUs using this endpoint to properly match SKUs to products.  📘 Standard SKU fields mapping  - **Required** fields are source_id and product_id.  - Supported CSV file headers: product_id,sku,source_id,price,image_url,attributes  - SKU **source_id** must be unique in the entire product catalog, no duplicates are allowed.  - SKU attributes need to be in the form of a stringy-fied json, i.e.{color:blue}. These attributes must be defined in the **product** beforehand so you can import them to the SKU.  - You can use this method to update the following parameters in bulk: **sku** and the sku **price**.  - Columns that cannot be mapped to standard fields will be mapped to Custom attributes and added as product metadata. There is no limit on the number of custom attributes that you can import as metadata. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import SKUs using CSV
     * @param [file] File path.
     */
    public importSKUsUsingCsvWithHttpInfo(file?: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<SkusImportCsvCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.importSKUsUsingCsv(file, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importSKUsUsingCsvWithHttpInfo(rsp)));
            }));
    }

    /**
     * Import SKUs into the repository using a CSV file. The CSV file has to include headers in the first line. All properties which cannot be mapped to standard SKU fields will be added to the metadata object. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b98d08c9b585083488a4c/Import_SKUS_template.csv).   🚧 Import sequence  First import products using the [dedicated endpoint](/api-reference/products/import-products-using-csv), then import SKUs using this endpoint to properly match SKUs to products.  📘 Standard SKU fields mapping  - **Required** fields are source_id and product_id.  - Supported CSV file headers: product_id,sku,source_id,price,image_url,attributes  - SKU **source_id** must be unique in the entire product catalog, no duplicates are allowed.  - SKU attributes need to be in the form of a stringy-fied json, i.e.{color:blue}. These attributes must be defined in the **product** beforehand so you can import them to the SKU.  - You can use this method to update the following parameters in bulk: **sku** and the sku **price**.  - Columns that cannot be mapped to standard fields will be mapped to Custom attributes and added as product metadata. There is no limit on the number of custom attributes that you can import as metadata. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import SKUs using CSV
     * @param [file] File path.
     */
    public importSKUsUsingCsv(file?: HttpFile, _options?: ConfigurationOptions): Observable<SkusImportCsvCreateResponseBody> {
        return this.importSKUsUsingCsvWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<SkusImportCsvCreateResponseBody>) => apiResponse.data));
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
    public listProductsWithHttpInfo(limit?: number, page?: number, order?: ParameterOrder, startDate?: Date, endDate?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<ProductsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProducts(limit, page, order, startDate, endDate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductsWithHttpInfo(rsp)));
            }));
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
    public listProducts(limit?: number, page?: number, order?: ParameterOrder, startDate?: Date, endDate?: Date, _options?: ConfigurationOptions): Observable<ProductsListResponseBody> {
        return this.listProductsWithHttpInfo(limit, page, order, startDate, endDate, _options).pipe(map((apiResponse: HttpInfo<ProductsListResponseBody>) => apiResponse.data));
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
    public listSKUsInProductWithHttpInfo(productId: string, limit?: number, page?: number, order?: ParameterOrder, startDate?: Date, endDate?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<ProductsSkusListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listSKUsInProduct(productId, limit, page, order, startDate, endDate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSKUsInProductWithHttpInfo(rsp)));
            }));
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
    public listSKUsInProduct(productId: string, limit?: number, page?: number, order?: ParameterOrder, startDate?: Date, endDate?: Date, _options?: ConfigurationOptions): Observable<ProductsSkusListResponseBody> {
        return this.listSKUsInProductWithHttpInfo(productId, limit, page, order, startDate, endDate, _options).pipe(map((apiResponse: HttpInfo<ProductsSkusListResponseBody>) => apiResponse.data));
    }

    /**
     * Updates the specified product by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.
     * Update Product
     * @param productId A Voucherify product ID or source ID.
     * @param [productsUpdateRequestBody] Specify the parameters of the product that are to be updated.
     */
    public updateProductWithHttpInfo(productId: string, productsUpdateRequestBody?: ProductsUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ProductsUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProduct(productId, productsUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the specified product by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.
     * Update Product
     * @param productId A Voucherify product ID or source ID.
     * @param [productsUpdateRequestBody] Specify the parameters of the product that are to be updated.
     */
    public updateProduct(productId: string, productsUpdateRequestBody?: ProductsUpdateRequestBody, _options?: ConfigurationOptions): Observable<ProductsUpdateResponseBody> {
        return this.updateProductWithHttpInfo(productId, productsUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ProductsUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * Update products in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Products in Bulk
     * @param [productsUpdateInBulkRequestBody] List the product fields to be updated in each product object.
     */
    public updateProductsInBulkWithHttpInfo(productsUpdateInBulkRequestBody?: Array<ProductsUpdateInBulkRequestBody>, _options?: ConfigurationOptions): Observable<HttpInfo<ProductsUpdateInBulkResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductsInBulk(productsUpdateInBulkRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductsInBulkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update products in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Products in Bulk
     * @param [productsUpdateInBulkRequestBody] List the product fields to be updated in each product object.
     */
    public updateProductsInBulk(productsUpdateInBulkRequestBody?: Array<ProductsUpdateInBulkRequestBody>, _options?: ConfigurationOptions): Observable<ProductsUpdateInBulkResponseBody> {
        return this.updateProductsInBulkWithHttpInfo(productsUpdateInBulkRequestBody, _options).pipe(map((apiResponse: HttpInfo<ProductsUpdateInBulkResponseBody>) => apiResponse.data));
    }

    /**
     * Updates metadata parameters for a list of products. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Products\' Metadata in Bulk
     * @param [productsMetadataUpdateInBulkRequestBody] List the source_ids of the products you would like to update with the metadata key/value pairs.
     */
    public updateProductsMetadataInBulkWithHttpInfo(productsMetadataUpdateInBulkRequestBody?: ProductsMetadataUpdateInBulkRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ProductsMetadataUpdateInBulkResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductsMetadataInBulk(productsMetadataUpdateInBulkRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductsMetadataInBulkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates metadata parameters for a list of products. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Products\' Metadata in Bulk
     * @param [productsMetadataUpdateInBulkRequestBody] List the source_ids of the products you would like to update with the metadata key/value pairs.
     */
    public updateProductsMetadataInBulk(productsMetadataUpdateInBulkRequestBody?: ProductsMetadataUpdateInBulkRequestBody, _options?: ConfigurationOptions): Observable<ProductsMetadataUpdateInBulkResponseBody> {
        return this.updateProductsMetadataInBulkWithHttpInfo(productsMetadataUpdateInBulkRequestBody, _options).pipe(map((apiResponse: HttpInfo<ProductsMetadataUpdateInBulkResponseBody>) => apiResponse.data));
    }

    /**
     * Updates the specified SKU by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body schema wont be modified. Even if provided, they will be silently skipped.
     * Update SKU
     * @param productId A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param skuId A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID.
     * @param [productsSkusUpdateRequestBody] Specify the parameters to be updated.
     */
    public updateSkuWithHttpInfo(productId: string, skuId: string, productsSkusUpdateRequestBody?: ProductsSkusUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ProductsSkusUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSku(productId, skuId, productsSkusUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSkuWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the specified SKU by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body schema wont be modified. Even if provided, they will be silently skipped.
     * Update SKU
     * @param productId A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * @param skuId A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID.
     * @param [productsSkusUpdateRequestBody] Specify the parameters to be updated.
     */
    public updateSku(productId: string, skuId: string, productsSkusUpdateRequestBody?: ProductsSkusUpdateRequestBody, _options?: ConfigurationOptions): Observable<ProductsSkusUpdateResponseBody> {
        return this.updateSkuWithHttpInfo(productId, skuId, productsSkusUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ProductsSkusUpdateResponseBody>) => apiResponse.data));
    }

}

import { PromotionsApiRequestFactory, PromotionsApiResponseProcessor} from "../apis/PromotionsApi";
export class ObservablePromotionsApi {
    private requestFactory: PromotionsApiRequestFactory;
    private responseProcessor: PromotionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PromotionsApiRequestFactory,
        responseProcessor?: PromotionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PromotionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PromotionsApiResponseProcessor();
    }

    /**
     * This method allows you to add a new promotion tier to an existing campaign. The tier hierarchy will be set as the next consequtive integer following the lowest ranking tier.
     * Add Promotion Tier to Campaign
     * @param campaignId Unique campaign ID assigned by Voucherify.
     * @param [promotionsTiersCreateRequestBody] Specify the promotion tier parameters.
     */
    public addPromotionTierToCampaignWithHttpInfo(campaignId: string, promotionsTiersCreateRequestBody?: PromotionsTiersCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<PromotionsTiersCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addPromotionTierToCampaign(campaignId, promotionsTiersCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addPromotionTierToCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method allows you to add a new promotion tier to an existing campaign. The tier hierarchy will be set as the next consequtive integer following the lowest ranking tier.
     * Add Promotion Tier to Campaign
     * @param campaignId Unique campaign ID assigned by Voucherify.
     * @param [promotionsTiersCreateRequestBody] Specify the promotion tier parameters.
     */
    public addPromotionTierToCampaign(campaignId: string, promotionsTiersCreateRequestBody?: PromotionsTiersCreateRequestBody, _options?: ConfigurationOptions): Observable<PromotionsTiersCreateResponseBody> {
        return this.addPromotionTierToCampaignWithHttpInfo(campaignId, promotionsTiersCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<PromotionsTiersCreateResponseBody>) => apiResponse.data));
    }

    /**
     * This method creates one promotion stack. The sequence of promotion tier IDs will determine the promotion stacking order.
     * Create Promotion Stack
     * @param campaignId Unique campaign ID.
     * @param [promotionsStacksCreateRequestBody] Specify the order of promotion tiers for the promotion stack.
     */
    public createPromotionStackWithHttpInfo(campaignId: string, promotionsStacksCreateRequestBody?: PromotionsStacksCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<PromotionsStacksCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPromotionStack(campaignId, promotionsStacksCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPromotionStackWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method creates one promotion stack. The sequence of promotion tier IDs will determine the promotion stacking order.
     * Create Promotion Stack
     * @param campaignId Unique campaign ID.
     * @param [promotionsStacksCreateRequestBody] Specify the order of promotion tiers for the promotion stack.
     */
    public createPromotionStack(campaignId: string, promotionsStacksCreateRequestBody?: PromotionsStacksCreateRequestBody, _options?: ConfigurationOptions): Observable<PromotionsStacksCreateResponseBody> {
        return this.createPromotionStackWithHttpInfo(campaignId, promotionsStacksCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<PromotionsStacksCreateResponseBody>) => apiResponse.data));
    }

    /**
     * This method deletes a promotion stack.
     * Delete Promotion Stack
     * @param campaignId ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * @param stackId Promotion stack ID.
     */
    public deletePromotionStackWithHttpInfo(campaignId: string, stackId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deletePromotionStack(campaignId, stackId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePromotionStackWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method deletes a promotion stack.
     * Delete Promotion Stack
     * @param campaignId ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * @param stackId Promotion stack ID.
     */
    public deletePromotionStack(campaignId: string, stackId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deletePromotionStackWithHttpInfo(campaignId, stackId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This method deletes a promotion tier.
     * Delete Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public deletePromotionTierWithHttpInfo(promotionTierId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deletePromotionTier(promotionTierId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePromotionTierWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method deletes a promotion tier.
     * Delete Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public deletePromotionTier(promotionTierId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deletePromotionTierWithHttpInfo(promotionTierId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This method disables a promotion tier, i.e. makes the active parameter   false.
     * Disable Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public disablePromotionTierWithHttpInfo(promotionTierId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PromotionsTiersDisableResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.disablePromotionTier(promotionTierId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disablePromotionTierWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method disables a promotion tier, i.e. makes the active parameter   false.
     * Disable Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public disablePromotionTier(promotionTierId: string, _options?: ConfigurationOptions): Observable<PromotionsTiersDisableResponseBody> {
        return this.disablePromotionTierWithHttpInfo(promotionTierId, _options).pipe(map((apiResponse: HttpInfo<PromotionsTiersDisableResponseBody>) => apiResponse.data));
    }

    /**
     * This method enables a promotion tier, i.e. makes the active parameter   true.
     * Enable Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public enablePromotionTierWithHttpInfo(promotionTierId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PromotionsTiersEnableResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.enablePromotionTier(promotionTierId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enablePromotionTierWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method enables a promotion tier, i.e. makes the active parameter   true.
     * Enable Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public enablePromotionTier(promotionTierId: string, _options?: ConfigurationOptions): Observable<PromotionsTiersEnableResponseBody> {
        return this.enablePromotionTierWithHttpInfo(promotionTierId, _options).pipe(map((apiResponse: HttpInfo<PromotionsTiersEnableResponseBody>) => apiResponse.data));
    }

    /**
     * This method returns the details of a promotion stack, including the promotion tiers grouped within the stack.
     * Get Promotion Stack
     * @param campaignId ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * @param stackId Promotion stack ID.
     */
    public getPromotionStackWithHttpInfo(campaignId: string, stackId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PromotionsStacksGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPromotionStack(campaignId, stackId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPromotionStackWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method returns the details of a promotion stack, including the promotion tiers grouped within the stack.
     * Get Promotion Stack
     * @param campaignId ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * @param stackId Promotion stack ID.
     */
    public getPromotionStack(campaignId: string, stackId: string, _options?: ConfigurationOptions): Observable<PromotionsStacksGetResponseBody> {
        return this.getPromotionStackWithHttpInfo(campaignId, stackId, _options).pipe(map((apiResponse: HttpInfo<PromotionsStacksGetResponseBody>) => apiResponse.data));
    }

    /**
     * This method enables you to retrieve a specific promotion tier.
     * Get Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public getPromotionTierWithHttpInfo(promotionTierId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PromotionsTiersGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPromotionTier(promotionTierId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPromotionTierWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method enables you to retrieve a specific promotion tier.
     * Get Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     */
    public getPromotionTier(promotionTierId: string, _options?: ConfigurationOptions): Observable<PromotionsTiersGetResponseBody> {
        return this.getPromotionTierWithHttpInfo(promotionTierId, _options).pipe(map((apiResponse: HttpInfo<PromotionsTiersGetResponseBody>) => apiResponse.data));
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
    public listAllPromotionStacksWithHttpInfo(limit?: number, page?: number, order?: ParameterOrderListAllPromotionStacks, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, _options?: ConfigurationOptions): Observable<HttpInfo<PromotionsStacksListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllPromotionStacks(limit, page, order, createdAt, updatedAt, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllPromotionStacksWithHttpInfo(rsp)));
            }));
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
    public listAllPromotionStacks(limit?: number, page?: number, order?: ParameterOrderListAllPromotionStacks, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, _options?: ConfigurationOptions): Observable<PromotionsStacksListResponseBody> {
        return this.listAllPromotionStacksWithHttpInfo(limit, page, order, createdAt, updatedAt, _options).pipe(map((apiResponse: HttpInfo<PromotionsStacksListResponseBody>) => apiResponse.data));
    }

    /**
     * This method enables you to list promotion stacks from a specified campaign.
     * List Promotion Stacks in Campaign
     * @param campaignId Unique campaign ID.
     */
    public listPromotionStacksInCampaignWithHttpInfo(campaignId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PromotionsStacksListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPromotionStacksInCampaign(campaignId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPromotionStacksInCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method enables you to list promotion stacks from a specified campaign.
     * List Promotion Stacks in Campaign
     * @param campaignId Unique campaign ID.
     */
    public listPromotionStacksInCampaign(campaignId: string, _options?: ConfigurationOptions): Observable<PromotionsStacksListResponseBody> {
        return this.listPromotionStacksInCampaignWithHttpInfo(campaignId, _options).pipe(map((apiResponse: HttpInfo<PromotionsStacksListResponseBody>) => apiResponse.data));
    }

    /**
     * This method enables you to list promotion tiers.
     * List Promotion Tiers
     * @param [isAvailable] This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listPromotionTiersWithHttpInfo(isAvailable?: boolean, limit?: number, page?: number, order?: ParameterOrderListPromotionTiers, _options?: ConfigurationOptions): Observable<HttpInfo<PromotionsTiersListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPromotionTiers(isAvailable, limit, page, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPromotionTiersWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method enables you to list promotion tiers.
     * List Promotion Tiers
     * @param [isAvailable] This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listPromotionTiers(isAvailable?: boolean, limit?: number, page?: number, order?: ParameterOrderListPromotionTiers, _options?: ConfigurationOptions): Observable<PromotionsTiersListResponseBody> {
        return this.listPromotionTiersWithHttpInfo(isAvailable, limit, page, order, _options).pipe(map((apiResponse: HttpInfo<PromotionsTiersListResponseBody>) => apiResponse.data));
    }

    /**
     * This method enables you to list promotion tiers from a specified campaign.
     * List Promotion Tiers from Campaign
     * @param campaignId Unique campaign ID assigned by Voucherify.
     */
    public listPromotionTiersFromCampaignWithHttpInfo(campaignId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PromotionsTiersListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPromotionTiersFromCampaign(campaignId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPromotionTiersFromCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method enables you to list promotion tiers from a specified campaign.
     * List Promotion Tiers from Campaign
     * @param campaignId Unique campaign ID assigned by Voucherify.
     */
    public listPromotionTiersFromCampaign(campaignId: string, _options?: ConfigurationOptions): Observable<PromotionsTiersListResponseBody> {
        return this.listPromotionTiersFromCampaignWithHttpInfo(campaignId, _options).pipe(map((apiResponse: HttpInfo<PromotionsTiersListResponseBody>) => apiResponse.data));
    }

    /**
     * This methods allows for editing an existing stack.
     * Update Promotion Stack
     * @param campaignId ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * @param stackId Promotion stack ID.
     * @param [promotionsStacksUpdateRequestBody] Specify the promotion stack parameters that you would like to update.
     */
    public updatePromotionStackWithHttpInfo(campaignId: string, stackId: string, promotionsStacksUpdateRequestBody?: PromotionsStacksUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<PromotionsStacksUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updatePromotionStack(campaignId, stackId, promotionsStacksUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePromotionStackWithHttpInfo(rsp)));
            }));
    }

    /**
     * This methods allows for editing an existing stack.
     * Update Promotion Stack
     * @param campaignId ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * @param stackId Promotion stack ID.
     * @param [promotionsStacksUpdateRequestBody] Specify the promotion stack parameters that you would like to update.
     */
    public updatePromotionStack(campaignId: string, stackId: string, promotionsStacksUpdateRequestBody?: PromotionsStacksUpdateRequestBody, _options?: ConfigurationOptions): Observable<PromotionsStacksUpdateResponseBody> {
        return this.updatePromotionStackWithHttpInfo(campaignId, stackId, promotionsStacksUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<PromotionsStacksUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * This method updates a promotion tier.
     * Update Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     * @param [promotionsTiersUpdateRequestBody] Specify the promotion tier parameters that you would like to update.
     */
    public updatePromotionTierWithHttpInfo(promotionTierId: string, promotionsTiersUpdateRequestBody?: PromotionsTiersUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<PromotionsTiersUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updatePromotionTier(promotionTierId, promotionsTiersUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePromotionTierWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method updates a promotion tier.
     * Update Promotion Tier
     * @param promotionTierId Unique promotion tier ID.
     * @param [promotionsTiersUpdateRequestBody] Specify the promotion tier parameters that you would like to update.
     */
    public updatePromotionTier(promotionTierId: string, promotionsTiersUpdateRequestBody?: PromotionsTiersUpdateRequestBody, _options?: ConfigurationOptions): Observable<PromotionsTiersUpdateResponseBody> {
        return this.updatePromotionTierWithHttpInfo(promotionTierId, promotionsTiersUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<PromotionsTiersUpdateResponseBody>) => apiResponse.data));
    }

}

import { PublicationsApiRequestFactory, PublicationsApiResponseProcessor} from "../apis/PublicationsApi";
export class ObservablePublicationsApi {
    private requestFactory: PublicationsApiRequestFactory;
    private responseProcessor: PublicationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicationsApiRequestFactory,
        responseProcessor?: PublicationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublicationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublicationsApiResponseProcessor();
    }

    /**
     * This method selects vouchers that are suitable for publication, adds a publish entry and returns the publication. A voucher is suitable for publication when its active and hasnt been published yet.    🚧 Clearly define the source of the voucher  You must clearly define which source you want to publish the voucher code from. It can either be a code from a campaign or a specific voucher identified by a code.    🚧 Publish multiple vouchers  In case you want to publish multiple vouchers within a single publication, you need to specify the campaign name and number of vouchers you want to publish.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use an **auto-update** campaign.
     * Create Publication
     * @param [joinOnce] Through this flag, you can control if a particular person gets only one and always the same code even if the app sends multiple publication requests. It means that if you have a referral program, a referrer is assigned only to one code if an integration sends publication requests more than once for the same customer.
     * @param [publicationsCreateRequestBody] Specify the publication parameters.
     */
    public createPublicationWithHttpInfo(joinOnce?: boolean, publicationsCreateRequestBody?: PublicationsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<PublicationsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPublication(joinOnce, publicationsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPublicationWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method selects vouchers that are suitable for publication, adds a publish entry and returns the publication. A voucher is suitable for publication when its active and hasnt been published yet.    🚧 Clearly define the source of the voucher  You must clearly define which source you want to publish the voucher code from. It can either be a code from a campaign or a specific voucher identified by a code.    🚧 Publish multiple vouchers  In case you want to publish multiple vouchers within a single publication, you need to specify the campaign name and number of vouchers you want to publish.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use an **auto-update** campaign.
     * Create Publication
     * @param [joinOnce] Through this flag, you can control if a particular person gets only one and always the same code even if the app sends multiple publication requests. It means that if you have a referral program, a referrer is assigned only to one code if an integration sends publication requests more than once for the same customer.
     * @param [publicationsCreateRequestBody] Specify the publication parameters.
     */
    public createPublication(joinOnce?: boolean, publicationsCreateRequestBody?: PublicationsCreateRequestBody, _options?: ConfigurationOptions): Observable<PublicationsCreateResponseBody> {
        return this.createPublicationWithHttpInfo(joinOnce, publicationsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<PublicationsCreateResponseBody>) => apiResponse.data));
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
    public createPublication1WithHttpInfo(customer: Customer, joinOnce?: boolean, voucher?: string, campaign?: CreatePublicationCampaign, sourceId?: string, metadata?: any, _options?: ConfigurationOptions): Observable<HttpInfo<PublicationsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPublication1(customer, joinOnce, voucher, campaign, sourceId, metadata, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPublication1WithHttpInfo(rsp)));
            }));
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
    public createPublication1(customer: Customer, joinOnce?: boolean, voucher?: string, campaign?: CreatePublicationCampaign, sourceId?: string, metadata?: any, _options?: ConfigurationOptions): Observable<PublicationsCreateResponseBody> {
        return this.createPublication1WithHttpInfo(customer, joinOnce, voucher, campaign, sourceId, metadata, _options).pipe(map((apiResponse: HttpInfo<PublicationsCreateResponseBody>) => apiResponse.data));
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
    public listPublicationsWithHttpInfo(limit?: number, page?: number, order?: ParameterOrderListPublications, campaign?: string, customer?: string, voucher?: string, result?: ParameterResultListPublications, voucherType?: ParameterVoucherTypeListPublications, isReferralCode?: boolean, filters?: ParameterFiltersListPublications, sourceId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<PublicationsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPublications(limit, page, order, campaign, customer, voucher, result, voucherType, isReferralCode, filters, sourceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPublicationsWithHttpInfo(rsp)));
            }));
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
    public listPublications(limit?: number, page?: number, order?: ParameterOrderListPublications, campaign?: string, customer?: string, voucher?: string, result?: ParameterResultListPublications, voucherType?: ParameterVoucherTypeListPublications, isReferralCode?: boolean, filters?: ParameterFiltersListPublications, sourceId?: string, _options?: ConfigurationOptions): Observable<PublicationsListResponseBody> {
        return this.listPublicationsWithHttpInfo(limit, page, order, campaign, customer, voucher, result, voucherType, isReferralCode, filters, sourceId, _options).pipe(map((apiResponse: HttpInfo<PublicationsListResponseBody>) => apiResponse.data));
    }

}

import { QualificationsApiRequestFactory, QualificationsApiResponseProcessor} from "../apis/QualificationsApi";
export class ObservableQualificationsApi {
    private requestFactory: QualificationsApiRequestFactory;
    private responseProcessor: QualificationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: QualificationsApiRequestFactory,
        responseProcessor?: QualificationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new QualificationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new QualificationsApiResponseProcessor();
    }

    /**
     *   🚧 The Qualifications endpoint ignores the rules checking:    - Limit of total redeemed discount amount per campaign  - Limit of total redemptions count per campaign  - Redemptions per customer  - Redemptions per customer in a campaign  Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read [the dedicated guide](/guides/checking-eligibility) to learn about some use cases this endpoint can cover. # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.
     * Check Eligibility
     * @param [qualificationsCheckEligibilityRequestBody] Define order and customer context.
     */
    public checkEligibilityWithHttpInfo(qualificationsCheckEligibilityRequestBody?: QualificationsCheckEligibilityRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<QualificationsCheckEligibilityResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.checkEligibility(qualificationsCheckEligibilityRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkEligibilityWithHttpInfo(rsp)));
            }));
    }

    /**
     *   🚧 The Qualifications endpoint ignores the rules checking:    - Limit of total redeemed discount amount per campaign  - Limit of total redemptions count per campaign  - Redemptions per customer  - Redemptions per customer in a campaign  Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read [the dedicated guide](/guides/checking-eligibility) to learn about some use cases this endpoint can cover. # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.
     * Check Eligibility
     * @param [qualificationsCheckEligibilityRequestBody] Define order and customer context.
     */
    public checkEligibility(qualificationsCheckEligibilityRequestBody?: QualificationsCheckEligibilityRequestBody, _options?: ConfigurationOptions): Observable<QualificationsCheckEligibilityResponseBody> {
        return this.checkEligibilityWithHttpInfo(qualificationsCheckEligibilityRequestBody, _options).pipe(map((apiResponse: HttpInfo<QualificationsCheckEligibilityResponseBody>) => apiResponse.data));
    }

}

import { RedemptionsApiRequestFactory, RedemptionsApiResponseProcessor} from "../apis/RedemptionsApi";
export class ObservableRedemptionsApi {
    private requestFactory: RedemptionsApiRequestFactory;
    private responseProcessor: RedemptionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RedemptionsApiRequestFactory,
        responseProcessor?: RedemptionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RedemptionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RedemptionsApiResponseProcessor();
    }

    /**
     * Return a redemption or redemption rollback object. This object can either be a successfull or failed redemption or redemption rollback.
     * Get Redemption
     * @param redemptionId ID of previously created redemption.
     */
    public getRedemptionWithHttpInfo(redemptionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RedemptionsGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRedemption(redemptionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRedemptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return a redemption or redemption rollback object. This object can either be a successfull or failed redemption or redemption rollback.
     * Get Redemption
     * @param redemptionId ID of previously created redemption.
     */
    public getRedemption(redemptionId: string, _options?: ConfigurationOptions): Observable<RedemptionsGetResponseBody> {
        return this.getRedemptionWithHttpInfo(redemptionId, _options).pipe(map((apiResponse: HttpInfo<RedemptionsGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve the number of times a voucher was redeemed and each of the redemption details.
     * Get Voucher\'s Redemptions
     * @param code A **code** that identifies the voucher.
     */
    public getVoucherRedemptionsWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersRedemptionGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getVoucherRedemptions(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVoucherRedemptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the number of times a voucher was redeemed and each of the redemption details.
     * Get Voucher\'s Redemptions
     * @param code A **code** that identifies the voucher.
     */
    public getVoucherRedemptions(code: string, _options?: ConfigurationOptions): Observable<VouchersRedemptionGetResponseBody> {
        return this.getVoucherRedemptionsWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<VouchersRedemptionGetResponseBody>) => apiResponse.data));
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
    public listRedemptionsWithHttpInfo(limit?: number, page?: number, result?: string, campaign?: string, customer?: string, order?: ParameterOrderListRedemptions, createdAt?: ParameterCreatedBeforeAfter, filters?: ParameterFiltersListRedemptions, _options?: ConfigurationOptions): Observable<HttpInfo<RedemptionsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listRedemptions(limit, page, result, campaign, customer, order, createdAt, filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRedemptionsWithHttpInfo(rsp)));
            }));
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
    public listRedemptions(limit?: number, page?: number, result?: string, campaign?: string, customer?: string, order?: ParameterOrderListRedemptions, createdAt?: ParameterCreatedBeforeAfter, filters?: ParameterFiltersListRedemptions, _options?: ConfigurationOptions): Observable<RedemptionsListResponseBody> {
        return this.listRedemptionsWithHttpInfo(limit, page, result, campaign, customer, order, createdAt, filters, _options).pipe(map((apiResponse: HttpInfo<RedemptionsListResponseBody>) => apiResponse.data));
    }

    /**
     * # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:   API keys with a Merchant role cant use this endpoint.  📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).      📘 Also available on client-side  This method is also accessible through public keys which you can use in client-side​ apps: mobile and web browser apps. Go to the dedicated [endpoint](/api-reference/client-side/redeem-stackable-discounts-client-side) to learn more.  - Use X-Client-Application-Id as the application ID header.  - Use X-Client-Token as the appliction secret key header.  - Use client-side base URL.  - Use an origin header for your custom domain.
     * Redeem Stackable Discounts
     * @param [redemptionsRedeemRequestBody]
     */
    public redeemStackedDiscountsWithHttpInfo(redemptionsRedeemRequestBody?: RedemptionsRedeemRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<RedemptionsRedeemResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.redeemStackedDiscounts(redemptionsRedeemRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.redeemStackedDiscountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:   API keys with a Merchant role cant use this endpoint.  📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).      📘 Also available on client-side  This method is also accessible through public keys which you can use in client-side​ apps: mobile and web browser apps. Go to the dedicated [endpoint](/api-reference/client-side/redeem-stackable-discounts-client-side) to learn more.  - Use X-Client-Application-Id as the application ID header.  - Use X-Client-Token as the appliction secret key header.  - Use client-side base URL.  - Use an origin header for your custom domain.
     * Redeem Stackable Discounts
     * @param [redemptionsRedeemRequestBody]
     */
    public redeemStackedDiscounts(redemptionsRedeemRequestBody?: RedemptionsRedeemRequestBody, _options?: ConfigurationOptions): Observable<RedemptionsRedeemResponseBody> {
        return this.redeemStackedDiscountsWithHttpInfo(redemptionsRedeemRequestBody, _options).pipe(map((apiResponse: HttpInfo<RedemptionsRedeemResponseBody>) => apiResponse.data));
    }

    /**
     * Your business logic may include a case when you need to undo a redemption. You can revert a redemption by calling this API endpoint. This endpoint rolls back only single redemptions, meaning those that are not stacked. Stacked redemptions belong to a parent redemption. To roll back a parent redemption, including all of its individual redemptions, use the [POST Rollback Stackable Redemptions](/api-reference/redemptions/rollback-stackable-redemptions)  🚧  You can roll back a redemption up to 3 months back.   # Effect  The operation  - creates a rollback entry in vouchers redemption history (redemption.redemption_entries) and  - gives 1 redemption back to the pool (decreases redeemed_quantity by 1).  # Returned funds  In case of *gift card vouchers*, this method returns funds back according to the source redemption. In case of *loyalty card vouchers*, this method returns points back according to the source redemption.
     * Rollback Redemption
     * @param redemptionId The original redemption ID to be rolled back (undone).
     * @param [reason] Reason for the rollback.
     * @param [trackingId] Customers source_id.
     * @param [redemptionsRollbackCreateRequestBody] Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
     */
    public rollbackRedemptionWithHttpInfo(redemptionId: string, reason?: string, trackingId?: string, redemptionsRollbackCreateRequestBody?: RedemptionsRollbackCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<RedemptionsRollbackCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.rollbackRedemption(redemptionId, reason, trackingId, redemptionsRollbackCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rollbackRedemptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Your business logic may include a case when you need to undo a redemption. You can revert a redemption by calling this API endpoint. This endpoint rolls back only single redemptions, meaning those that are not stacked. Stacked redemptions belong to a parent redemption. To roll back a parent redemption, including all of its individual redemptions, use the [POST Rollback Stackable Redemptions](/api-reference/redemptions/rollback-stackable-redemptions)  🚧  You can roll back a redemption up to 3 months back.   # Effect  The operation  - creates a rollback entry in vouchers redemption history (redemption.redemption_entries) and  - gives 1 redemption back to the pool (decreases redeemed_quantity by 1).  # Returned funds  In case of *gift card vouchers*, this method returns funds back according to the source redemption. In case of *loyalty card vouchers*, this method returns points back according to the source redemption.
     * Rollback Redemption
     * @param redemptionId The original redemption ID to be rolled back (undone).
     * @param [reason] Reason for the rollback.
     * @param [trackingId] Customers source_id.
     * @param [redemptionsRollbackCreateRequestBody] Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
     */
    public rollbackRedemption(redemptionId: string, reason?: string, trackingId?: string, redemptionsRollbackCreateRequestBody?: RedemptionsRollbackCreateRequestBody, _options?: ConfigurationOptions): Observable<RedemptionsRollbackCreateResponseBody> {
        return this.rollbackRedemptionWithHttpInfo(redemptionId, reason, trackingId, redemptionsRollbackCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<RedemptionsRollbackCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Rollback a stackable redemption. When you roll back a stacked redemption, all child redemptions will be rolled back. Provide the parent redemption ID as the path parameter. However, you can use this endpoint to roll back a single redemption that does not have a parent, similarly to [POST Rollback redemption](/api-reference/redemptions/rollback-redemption). 🚧   You can roll back a redemption up to 3 months back.
     * Rollback Stackable Redemptions
     * @param parentRedemptionId Unique identifier of a parent redemption, e.g. r_JQfm73zWSJFQxs3bGxweYjgm.
     * @param [reason] Reason for the rollback.
     * @param [trackingId] Customers source_id.
     * @param [redemptionsRollbacksCreateRequestBody] Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
     */
    public rollbackStackedRedemptionsWithHttpInfo(parentRedemptionId: string, reason?: string, trackingId?: string, redemptionsRollbacksCreateRequestBody?: RedemptionsRollbacksCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<RedemptionsRollbacksCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.rollbackStackedRedemptions(parentRedemptionId, reason, trackingId, redemptionsRollbacksCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rollbackStackedRedemptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Rollback a stackable redemption. When you roll back a stacked redemption, all child redemptions will be rolled back. Provide the parent redemption ID as the path parameter. However, you can use this endpoint to roll back a single redemption that does not have a parent, similarly to [POST Rollback redemption](/api-reference/redemptions/rollback-redemption). 🚧   You can roll back a redemption up to 3 months back.
     * Rollback Stackable Redemptions
     * @param parentRedemptionId Unique identifier of a parent redemption, e.g. r_JQfm73zWSJFQxs3bGxweYjgm.
     * @param [reason] Reason for the rollback.
     * @param [trackingId] Customers source_id.
     * @param [redemptionsRollbacksCreateRequestBody] Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
     */
    public rollbackStackedRedemptions(parentRedemptionId: string, reason?: string, trackingId?: string, redemptionsRollbacksCreateRequestBody?: RedemptionsRollbacksCreateRequestBody, _options?: ConfigurationOptions): Observable<RedemptionsRollbacksCreateResponseBody> {
        return this.rollbackStackedRedemptionsWithHttpInfo(parentRedemptionId, reason, trackingId, redemptionsRollbacksCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<RedemptionsRollbacksCreateResponseBody>) => apiResponse.data));
    }

}

import { ReferralsApiRequestFactory, ReferralsApiResponseProcessor} from "../apis/ReferralsApi";
export class ObservableReferralsApi {
    private requestFactory: ReferralsApiRequestFactory;
    private responseProcessor: ReferralsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReferralsApiRequestFactory,
        responseProcessor?: ReferralsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReferralsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReferralsApiResponseProcessor();
    }

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.  📘 Alternative endpoint This endpoint is an alternative to the [Add Referral Code Holders endpoint](/api-reference/referrals/add-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Add Referral Code Holders
     * @param memberId Unique referral code or its identifier.
     * @param [referralsMembersHoldersCreateInBulkRequestBody] Specify the customer data to be upserted as redeemable holders.
     */
    public referralsAddHoldersWithHttpInfo(memberId: string, referralsMembersHoldersCreateInBulkRequestBody?: ReferralsMembersHoldersCreateInBulkRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ReferralsMembersHoldersCreateInBulkResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.referralsAddHolders(memberId, referralsMembersHoldersCreateInBulkRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.referralsAddHoldersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.  📘 Alternative endpoint This endpoint is an alternative to the [Add Referral Code Holders endpoint](/api-reference/referrals/add-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Add Referral Code Holders
     * @param memberId Unique referral code or its identifier.
     * @param [referralsMembersHoldersCreateInBulkRequestBody] Specify the customer data to be upserted as redeemable holders.
     */
    public referralsAddHolders(memberId: string, referralsMembersHoldersCreateInBulkRequestBody?: ReferralsMembersHoldersCreateInBulkRequestBody, _options?: ConfigurationOptions): Observable<ReferralsMembersHoldersCreateInBulkResponseBody> {
        return this.referralsAddHoldersWithHttpInfo(memberId, referralsMembersHoldersCreateInBulkRequestBody, _options).pipe(map((apiResponse: HttpInfo<ReferralsMembersHoldersCreateInBulkResponseBody>) => apiResponse.data));
    }

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.
     * Add Referral Code Holders with Campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param [referralsMembersHoldersCreateInBulkRequestBody] Specify the customer data to be upserted as redeemable holders.
     */
    public referralsAddHolders1WithHttpInfo(campaignId: string, memberId: string, referralsMembersHoldersCreateInBulkRequestBody?: ReferralsMembersHoldersCreateInBulkRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ReferralsMembersHoldersCreateInBulkResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.referralsAddHolders1(campaignId, memberId, referralsMembersHoldersCreateInBulkRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.referralsAddHolders1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.
     * Add Referral Code Holders with Campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param [referralsMembersHoldersCreateInBulkRequestBody] Specify the customer data to be upserted as redeemable holders.
     */
    public referralsAddHolders1(campaignId: string, memberId: string, referralsMembersHoldersCreateInBulkRequestBody?: ReferralsMembersHoldersCreateInBulkRequestBody, _options?: ConfigurationOptions): Observable<ReferralsMembersHoldersCreateInBulkResponseBody> {
        return this.referralsAddHolders1WithHttpInfo(campaignId, memberId, referralsMembersHoldersCreateInBulkRequestBody, _options).pipe(map((apiResponse: HttpInfo<ReferralsMembersHoldersCreateInBulkResponseBody>) => apiResponse.data));
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
    public referralsCodeHoldersWithHttpInfo(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListReferralsRedeemableHolders, _options?: ConfigurationOptions): Observable<HttpInfo<ReferralsMembersHoldersListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.referralsCodeHolders(campaignId, memberId, limit, order, startingAfterId, filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.referralsCodeHoldersWithHttpInfo(rsp)));
            }));
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
    public referralsCodeHolders(campaignId: string, memberId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListReferralsRedeemableHolders, _options?: ConfigurationOptions): Observable<ReferralsMembersHoldersListResponseBody> {
        return this.referralsCodeHoldersWithHttpInfo(campaignId, memberId, limit, order, startingAfterId, filters, _options).pipe(map((apiResponse: HttpInfo<ReferralsMembersHoldersListResponseBody>) => apiResponse.data));
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
    public referralsCodeHolders1WithHttpInfo(memberId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListReferralsRedeemableHolders, _options?: ConfigurationOptions): Observable<HttpInfo<ReferralsMembersHoldersListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.referralsCodeHolders1(memberId, limit, order, startingAfterId, filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.referralsCodeHolders1WithHttpInfo(rsp)));
            }));
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
    public referralsCodeHolders1(memberId: string, limit?: number, order?: ParameterOrderListRedeemables, startingAfterId?: string, filters?: ParameterFiltersListReferralsRedeemableHolders, _options?: ConfigurationOptions): Observable<ReferralsMembersHoldersListResponseBody> {
        return this.referralsCodeHolders1WithHttpInfo(memberId, limit, order, startingAfterId, filters, _options).pipe(map((apiResponse: HttpInfo<ReferralsMembersHoldersListResponseBody>) => apiResponse.data));
    }

    /**
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  📘 Alternative endpoint This endpoint is an alternative to the [Remove Referral Card Holder endpoint](/api-reference/referrals/remove-referral-card-holder-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Remove Referral Card Holder
     * @param memberId Unique referral code or its identifier.
     * @param holderId Unique identifier of a redeemable holder.
     */
    public referralsRemoveHolderWithHttpInfo(memberId: string, holderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.referralsRemoveHolder(memberId, holderId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.referralsRemoveHolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  📘 Alternative endpoint This endpoint is an alternative to the [Remove Referral Card Holder endpoint](/api-reference/referrals/remove-referral-card-holder-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Remove Referral Card Holder
     * @param memberId Unique referral code or its identifier.
     * @param holderId Unique identifier of a redeemable holder.
     */
    public referralsRemoveHolder(memberId: string, holderId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.referralsRemoveHolderWithHttpInfo(memberId, holderId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)
     * Remove Referral Card Holder with campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param holderId Unique identifier of a redeemable holder.
     */
    public referralsRemoveHolder1WithHttpInfo(campaignId: string, memberId: string, holderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.referralsRemoveHolder1(campaignId, memberId, holderId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.referralsRemoveHolder1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)
     * Remove Referral Card Holder with campaign ID
     * @param campaignId Unique identifier of a referral program campaign.
     * @param memberId Unique referral code or its identifier.
     * @param holderId Unique identifier of a redeemable holder.
     */
    public referralsRemoveHolder1(campaignId: string, memberId: string, holderId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.referralsRemoveHolder1WithHttpInfo(campaignId, memberId, holderId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { RewardsApiRequestFactory, RewardsApiResponseProcessor} from "../apis/RewardsApi";
export class ObservableRewardsApi {
    private requestFactory: RewardsApiRequestFactory;
    private responseProcessor: RewardsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RewardsApiRequestFactory,
        responseProcessor?: RewardsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RewardsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RewardsApiResponseProcessor();
    }

    /**
     * Create a new reward.
     * Create Reward
     * @param [rewardsCreateRequestBody] Define parameters of the new reward.
     */
    public createRewardWithHttpInfo(rewardsCreateRequestBody?: RewardsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<RewardsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createReward(rewardsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRewardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new reward.
     * Create Reward
     * @param [rewardsCreateRequestBody] Define parameters of the new reward.
     */
    public createReward(rewardsCreateRequestBody?: RewardsCreateRequestBody, _options?: ConfigurationOptions): Observable<RewardsCreateResponseBody> {
        return this.createRewardWithHttpInfo(rewardsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<RewardsCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Assigns a reward to a specified loyalty campaign.
     * Create Reward Assignment
     * @param rewardId A unique reward ID.
     * @param [rewardsAssignmentsCreateRequestBody] Provide the campaign ID of the campaign to which the reward is to be assigned and define the cost of the reward in terms of loyalty points.
     */
    public createRewardAssignmentWithHttpInfo(rewardId: string, rewardsAssignmentsCreateRequestBody?: RewardsAssignmentsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<RewardsAssignmentsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createRewardAssignment(rewardId, rewardsAssignmentsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRewardAssignmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns a reward to a specified loyalty campaign.
     * Create Reward Assignment
     * @param rewardId A unique reward ID.
     * @param [rewardsAssignmentsCreateRequestBody] Provide the campaign ID of the campaign to which the reward is to be assigned and define the cost of the reward in terms of loyalty points.
     */
    public createRewardAssignment(rewardId: string, rewardsAssignmentsCreateRequestBody?: RewardsAssignmentsCreateRequestBody, _options?: ConfigurationOptions): Observable<RewardsAssignmentsCreateResponseBody> {
        return this.createRewardAssignmentWithHttpInfo(rewardId, rewardsAssignmentsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<RewardsAssignmentsCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Delete a reward.
     * Delete Reward
     * @param rewardId A unique reward ID.
     */
    public deleteRewardWithHttpInfo(rewardId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteReward(rewardId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRewardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a reward.
     * Delete Reward
     * @param rewardId A unique reward ID.
     */
    public deleteReward(rewardId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteRewardWithHttpInfo(rewardId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This method deletes a reward assignment for a particular reward.
     * Delete Reward Assignment
     * @param rewardId A unique reward ID.
     * @param assignmentId A unique reward assignment ID.
     */
    public deleteRewardAssignmentWithHttpInfo(rewardId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteRewardAssignment(rewardId, assignmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRewardAssignmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method deletes a reward assignment for a particular reward.
     * Delete Reward Assignment
     * @param rewardId A unique reward ID.
     * @param assignmentId A unique reward assignment ID.
     */
    public deleteRewardAssignment(rewardId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteRewardAssignmentWithHttpInfo(rewardId, assignmentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve a reward by the reward ID.
     * Get Reward
     * @param rewardId A unique reward ID.
     */
    public getRewardWithHttpInfo(rewardId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Reward>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getReward(rewardId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRewardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a reward by the reward ID.
     * Get Reward
     * @param rewardId A unique reward ID.
     */
    public getReward(rewardId: string, _options?: ConfigurationOptions): Observable<Reward> {
        return this.getRewardWithHttpInfo(rewardId, _options).pipe(map((apiResponse: HttpInfo<Reward>) => apiResponse.data));
    }

    /**
     * Retrieve a reward assignment.
     * Get Reward Assignment
     * @param rewardId A unique reward ID.
     * @param assignmentId A unique reward assignment ID.
     */
    public getRewardAssignmentWithHttpInfo(rewardId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RewardsAssignmentsGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRewardAssignment(rewardId, assignmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRewardAssignmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a reward assignment.
     * Get Reward Assignment
     * @param rewardId A unique reward ID.
     * @param assignmentId A unique reward assignment ID.
     */
    public getRewardAssignment(rewardId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<RewardsAssignmentsGetResponseBody> {
        return this.getRewardAssignmentWithHttpInfo(rewardId, assignmentId, _options).pipe(map((apiResponse: HttpInfo<RewardsAssignmentsGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve reward assignments by the reward ID.
     * List Reward Assignments
     * @param rewardId A unique reward ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     */
    public listRewardAssignmentsWithHttpInfo(rewardId: string, limit?: number, page?: number, _options?: ConfigurationOptions): Observable<HttpInfo<RewardsAssignmentsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listRewardAssignments(rewardId, limit, page, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRewardAssignmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve reward assignments by the reward ID.
     * List Reward Assignments
     * @param rewardId A unique reward ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     */
    public listRewardAssignments(rewardId: string, limit?: number, page?: number, _options?: ConfigurationOptions): Observable<RewardsAssignmentsListResponseBody> {
        return this.listRewardAssignmentsWithHttpInfo(rewardId, limit, page, _options).pipe(map((apiResponse: HttpInfo<RewardsAssignmentsListResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve rewards.
     * List Rewards
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [assignmentId] A unique reward assignment ID. Use this parameter to get the reward details in the context of an assignment ID.
     */
    public listRewardsWithHttpInfo(limit?: number, page?: number, assignmentId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RewardsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listRewards(limit, page, assignmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRewardsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve rewards.
     * List Rewards
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [assignmentId] A unique reward assignment ID. Use this parameter to get the reward details in the context of an assignment ID.
     */
    public listRewards(limit?: number, page?: number, assignmentId?: string, _options?: ConfigurationOptions): Observable<RewardsListResponseBody> {
        return this.listRewardsWithHttpInfo(limit, page, assignmentId, _options).pipe(map((apiResponse: HttpInfo<RewardsListResponseBody>) => apiResponse.data));
    }

    /**
     * Update the details of a reward.
     * Update Reward
     * @param rewardId A unique reward ID.
     * @param [rewardsUpdateRequestBody] Define the parameters to be updated for the reward.
     */
    public updateRewardWithHttpInfo(rewardId: string, rewardsUpdateRequestBody?: RewardsUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<RewardsUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateReward(rewardId, rewardsUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRewardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the details of a reward.
     * Update Reward
     * @param rewardId A unique reward ID.
     * @param [rewardsUpdateRequestBody] Define the parameters to be updated for the reward.
     */
    public updateReward(rewardId: string, rewardsUpdateRequestBody?: RewardsUpdateRequestBody, _options?: ConfigurationOptions): Observable<RewardsUpdateResponseBody> {
        return this.updateRewardWithHttpInfo(rewardId, rewardsUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<RewardsUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * Update the number of points needed to successfully redeem the reward.
     * Update Reward Assignment
     * @param rewardId A unique reward ID.
     * @param assignmentId A unique reward assignment ID.
     * @param [rewardsAssignmentsUpdateRequestBody] Define the number of points required to exchange for the reward.
     */
    public updateRewardAssignmentWithHttpInfo(rewardId: string, assignmentId: string, rewardsAssignmentsUpdateRequestBody?: RewardsAssignmentsUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<RewardsAssignmentsUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateRewardAssignment(rewardId, assignmentId, rewardsAssignmentsUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRewardAssignmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the number of points needed to successfully redeem the reward.
     * Update Reward Assignment
     * @param rewardId A unique reward ID.
     * @param assignmentId A unique reward assignment ID.
     * @param [rewardsAssignmentsUpdateRequestBody] Define the number of points required to exchange for the reward.
     */
    public updateRewardAssignment(rewardId: string, assignmentId: string, rewardsAssignmentsUpdateRequestBody?: RewardsAssignmentsUpdateRequestBody, _options?: ConfigurationOptions): Observable<RewardsAssignmentsUpdateResponseBody> {
        return this.updateRewardAssignmentWithHttpInfo(rewardId, assignmentId, rewardsAssignmentsUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<RewardsAssignmentsUpdateResponseBody>) => apiResponse.data));
    }

}

import { SegmentsApiRequestFactory, SegmentsApiResponseProcessor} from "../apis/SegmentsApi";
export class ObservableSegmentsApi {
    private requestFactory: SegmentsApiRequestFactory;
    private responseProcessor: SegmentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SegmentsApiRequestFactory,
        responseProcessor?: SegmentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SegmentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SegmentsApiResponseProcessor();
    }

    /**
     * Create a customer segment.  🚧 Limit on static segments  There is a cap on the number of customers that you can assign to a static segment: **20,000**. If you would like to create a bigger segment, then you can use the unlimited auto-update or passive segment instead and use some customer metadata to build this segment.  🚧 Limit on Active and Passive segments  You can create a maximum of 100 passive and active segments.
     * Create Segment
     * @param [segmentsCreateRequestBody] Specify the boundary conditions for the customer segment.
     */
    public createSegmentWithHttpInfo(segmentsCreateRequestBody?: SegmentsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<SegmentsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSegment(segmentsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSegmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a customer segment.  🚧 Limit on static segments  There is a cap on the number of customers that you can assign to a static segment: **20,000**. If you would like to create a bigger segment, then you can use the unlimited auto-update or passive segment instead and use some customer metadata to build this segment.  🚧 Limit on Active and Passive segments  You can create a maximum of 100 passive and active segments.
     * Create Segment
     * @param [segmentsCreateRequestBody] Specify the boundary conditions for the customer segment.
     */
    public createSegment(segmentsCreateRequestBody?: SegmentsCreateRequestBody, _options?: ConfigurationOptions): Observable<SegmentsCreateResponseBody> {
        return this.createSegmentWithHttpInfo(segmentsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<SegmentsCreateResponseBody>) => apiResponse.data));
    }

    /**
     * This method deletes a customer segment.
     * Delete Segment
     * @param segmentId A unique customer segment ID.
     */
    public deleteSegmentWithHttpInfo(segmentId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteSegment(segmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSegmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method deletes a customer segment.
     * Delete Segment
     * @param segmentId A unique customer segment ID.
     */
    public deleteSegment(segmentId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteSegmentWithHttpInfo(segmentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves the segment with a given segment ID.
     * Get Segment
     * @param segmentId A unique customer segment ID.
     */
    public getSegmentWithHttpInfo(segmentId: string, _options?: ConfigurationOptions): Observable<HttpInfo<SegmentsGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSegment(segmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSegmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the segment with a given segment ID.
     * Get Segment
     * @param segmentId A unique customer segment ID.
     */
    public getSegment(segmentId: string, _options?: ConfigurationOptions): Observable<SegmentsGetResponseBody> {
        return this.getSegmentWithHttpInfo(segmentId, _options).pipe(map((apiResponse: HttpInfo<SegmentsGetResponseBody>) => apiResponse.data));
    }

}

import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor} from "../apis/TemplatesApi";
export class ObservableTemplatesApi {
    private requestFactory: TemplatesApiRequestFactory;
    private responseProcessor: TemplatesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplatesApiRequestFactory,
        responseProcessor?: TemplatesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TemplatesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TemplatesApiResponseProcessor();
    }

    /**
     * Creates a promotion tier out of a discount campaign template and adds it to an existing promotion campaign. To add a promotion tier to a campaign, you need to provide the name in the request and the campaign ID. Other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an action or an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the promotion tier. When the promotion tier has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rule-assignment).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Add Promotion Tier From Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param [templatesCampaignsTierSetupCreateRequestBody] Only name and campaign_id are required. The rest of the fields will overwrite the template configuration.
     */
    public addTierFromTemplateWithHttpInfo(campaignTemplateId: string, templatesCampaignsTierSetupCreateRequestBody?: TemplatesCampaignsTierSetupCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatesCampaignsTierSetupCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addTierFromTemplate(campaignTemplateId, templatesCampaignsTierSetupCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addTierFromTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a promotion tier out of a discount campaign template and adds it to an existing promotion campaign. To add a promotion tier to a campaign, you need to provide the name in the request and the campaign ID. Other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an action or an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the promotion tier. When the promotion tier has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rule-assignment).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Add Promotion Tier From Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param [templatesCampaignsTierSetupCreateRequestBody] Only name and campaign_id are required. The rest of the fields will overwrite the template configuration.
     */
    public addTierFromTemplate(campaignTemplateId: string, templatesCampaignsTierSetupCreateRequestBody?: TemplatesCampaignsTierSetupCreateRequestBody, _options?: ConfigurationOptions): Observable<TemplatesCampaignsTierSetupCreateResponseBody> {
        return this.addTierFromTemplateWithHttpInfo(campaignTemplateId, templatesCampaignsTierSetupCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<TemplatesCampaignsTierSetupCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Creates a campaign out of a campaign template. To create a campaign, you need to provide the name in the request, while other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the campaign. When the campaign has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rules-assignments).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign From Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param [templatesCampaignsCampaignSetupCreateRequestBody] Only name is required. The rest of the fields will overwrite the template configuration.
     */
    public createCampaignFromTemplateWithHttpInfo(campaignTemplateId: string, templatesCampaignsCampaignSetupCreateRequestBody?: TemplatesCampaignsCampaignSetupCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatesCampaignsCampaignSetupCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCampaignFromTemplate(campaignTemplateId, templatesCampaignsCampaignSetupCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCampaignFromTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a campaign out of a campaign template. To create a campaign, you need to provide the name in the request, while other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the campaign. When the campaign has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rules-assignments).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign From Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param [templatesCampaignsCampaignSetupCreateRequestBody] Only name is required. The rest of the fields will overwrite the template configuration.
     */
    public createCampaignFromTemplate(campaignTemplateId: string, templatesCampaignsCampaignSetupCreateRequestBody?: TemplatesCampaignsCampaignSetupCreateRequestBody, _options?: ConfigurationOptions): Observable<TemplatesCampaignsCampaignSetupCreateResponseBody> {
        return this.createCampaignFromTemplateWithHttpInfo(campaignTemplateId, templatesCampaignsCampaignSetupCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<TemplatesCampaignsCampaignSetupCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Creates a template for a discount or gift campaign, or a promotion tier. A template stores campaign configuration **without** the following details: - Campaign name - Category - Code count The following elements are not supported by campaign templates: - Redeeming API keys - Redeeming users - Customer loyalty tier - Static segments  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template), - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign Template
     * @param [templatesCampaignsCreateRequestBody] Provide details for a campaign template
     */
    public createCampaignTemplateWithHttpInfo(templatesCampaignsCreateRequestBody?: TemplatesCampaignsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatesCampaignsCreateTemplateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCampaignTemplate(templatesCampaignsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCampaignTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a template for a discount or gift campaign, or a promotion tier. A template stores campaign configuration **without** the following details: - Campaign name - Category - Code count The following elements are not supported by campaign templates: - Redeeming API keys - Redeeming users - Customer loyalty tier - Static segments  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template), - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign Template
     * @param [templatesCampaignsCreateRequestBody] Provide details for a campaign template
     */
    public createCampaignTemplate(templatesCampaignsCreateRequestBody?: TemplatesCampaignsCreateRequestBody, _options?: ConfigurationOptions): Observable<TemplatesCampaignsCreateTemplateResponseBody> {
        return this.createCampaignTemplateWithHttpInfo(templatesCampaignsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<TemplatesCampaignsCreateTemplateResponseBody>) => apiResponse.data));
    }

    /**
     * Deletes the campaign template permanently.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Delete Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     */
    public deleteCampaignTemplateWithHttpInfo(campaignTemplateId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCampaignTemplate(campaignTemplateId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCampaignTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the campaign template permanently.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Delete Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     */
    public deleteCampaignTemplate(campaignTemplateId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteCampaignTemplateWithHttpInfo(campaignTemplateId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a campaign template available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Get Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     */
    public getCampaignTemplateWithHttpInfo(campaignTemplateId: string, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatesCampaignsGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCampaignTemplate(campaignTemplateId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a campaign template available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Get Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     */
    public getCampaignTemplate(campaignTemplateId: string, _options?: ConfigurationOptions): Observable<TemplatesCampaignsGetResponseBody> {
        return this.getCampaignTemplateWithHttpInfo(campaignTemplateId, _options).pipe(map((apiResponse: HttpInfo<TemplatesCampaignsGetResponseBody>) => apiResponse.data));
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
    public listCampaignTemplatesWithHttpInfo(limit?: number, startingAfterId?: string, order?: ParameterTemplatesList, includeTotal?: boolean, filters?: ParameterFiltersListTemplates, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatesCampaignsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCampaignTemplates(limit, startingAfterId, order, includeTotal, filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCampaignTemplatesWithHttpInfo(rsp)));
            }));
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
    public listCampaignTemplates(limit?: number, startingAfterId?: string, order?: ParameterTemplatesList, includeTotal?: boolean, filters?: ParameterFiltersListTemplates, _options?: ConfigurationOptions): Observable<TemplatesCampaignsListResponseBody> {
        return this.listCampaignTemplatesWithHttpInfo(limit, startingAfterId, order, includeTotal, filters, _options).pipe(map((apiResponse: HttpInfo<TemplatesCampaignsListResponseBody>) => apiResponse.data));
    }

    /**
     * Updates the name or description of the campaign template.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Update Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param [templatesCampaignsUpdateRequestBody] Provide the new name or description for the campaign template
     */
    public updateCampaignTemplateWithHttpInfo(campaignTemplateId: string, templatesCampaignsUpdateRequestBody?: TemplatesCampaignsUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatesCampaignsUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCampaignTemplate(campaignTemplateId, templatesCampaignsUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCampaignTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the name or description of the campaign template.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Update Campaign Template
     * @param campaignTemplateId Pass the campaign template ID that was assigned by Voucherify.
     * @param [templatesCampaignsUpdateRequestBody] Provide the new name or description for the campaign template
     */
    public updateCampaignTemplate(campaignTemplateId: string, templatesCampaignsUpdateRequestBody?: TemplatesCampaignsUpdateRequestBody, _options?: ConfigurationOptions): Observable<TemplatesCampaignsUpdateResponseBody> {
        return this.updateCampaignTemplateWithHttpInfo(campaignTemplateId, templatesCampaignsUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<TemplatesCampaignsUpdateResponseBody>) => apiResponse.data));
    }

}

import { ValidationRulesApiRequestFactory, ValidationRulesApiResponseProcessor} from "../apis/ValidationRulesApi";
export class ObservableValidationRulesApi {
    private requestFactory: ValidationRulesApiRequestFactory;
    private responseProcessor: ValidationRulesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ValidationRulesApiRequestFactory,
        responseProcessor?: ValidationRulesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ValidationRulesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ValidationRulesApiResponseProcessor();
    }

    /**
     * Assign validation rule to either one of the following objects: voucher, campaign, promotion tier, earning rule, reward, distribution.
     * Create Validation Rules Assignments
     * @param validationRuleId Unique validation rule ID.
     * @param [force] If this flag is set to true, the previous assignment with the same data will be deleted and a new one will be added.
     * @param [validationRulesAssignmentsCreateRequestBody] Specify the resource that you would like to assign the validation rule to.
     */
    public createValidationRuleAssignmentWithHttpInfo(validationRuleId: string, force?: boolean, validationRulesAssignmentsCreateRequestBody?: ValidationRulesAssignmentsCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ValidationRulesAssignmentsCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createValidationRuleAssignment(validationRuleId, force, validationRulesAssignmentsCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createValidationRuleAssignmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assign validation rule to either one of the following objects: voucher, campaign, promotion tier, earning rule, reward, distribution.
     * Create Validation Rules Assignments
     * @param validationRuleId Unique validation rule ID.
     * @param [force] If this flag is set to true, the previous assignment with the same data will be deleted and a new one will be added.
     * @param [validationRulesAssignmentsCreateRequestBody] Specify the resource that you would like to assign the validation rule to.
     */
    public createValidationRuleAssignment(validationRuleId: string, force?: boolean, validationRulesAssignmentsCreateRequestBody?: ValidationRulesAssignmentsCreateRequestBody, _options?: ConfigurationOptions): Observable<ValidationRulesAssignmentsCreateResponseBody> {
        return this.createValidationRuleAssignmentWithHttpInfo(validationRuleId, force, validationRulesAssignmentsCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ValidationRulesAssignmentsCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Create a validation rule.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.
     * Create Validation Rules
     * @param [validationRulesCreateRequestBody] Specify the validation rules parameters.
     */
    public createValidationRulesWithHttpInfo(validationRulesCreateRequestBody?: ValidationRulesCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ValidationRulesCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createValidationRules(validationRulesCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createValidationRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a validation rule.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.
     * Create Validation Rules
     * @param [validationRulesCreateRequestBody] Specify the validation rules parameters.
     */
    public createValidationRules(validationRulesCreateRequestBody?: ValidationRulesCreateRequestBody, _options?: ConfigurationOptions): Observable<ValidationRulesCreateResponseBody> {
        return this.createValidationRulesWithHttpInfo(validationRulesCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ValidationRulesCreateResponseBody>) => apiResponse.data));
    }

    /**
     * This method deletes a validation rule assignment.
     * Delete Validation Rule Assignment
     * @param validationRuleId A unique validation rule ID.
     * @param assignmentId A unique validation rule assignment ID.
     */
    public deleteValidationRuleAssignmentWithHttpInfo(validationRuleId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteValidationRuleAssignment(validationRuleId, assignmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteValidationRuleAssignmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method deletes a validation rule assignment.
     * Delete Validation Rule Assignment
     * @param validationRuleId A unique validation rule ID.
     * @param assignmentId A unique validation rule assignment ID.
     */
    public deleteValidationRuleAssignment(validationRuleId: string, assignmentId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteValidationRuleAssignmentWithHttpInfo(validationRuleId, assignmentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This method deletes a validation rule.
     * Delete Validation Rule
     * @param validationRuleId A unique validation rule ID.
     */
    public deleteValidationRulesWithHttpInfo(validationRuleId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteValidationRules(validationRuleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteValidationRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method deletes a validation rule.
     * Delete Validation Rule
     * @param validationRuleId A unique validation rule ID.
     */
    public deleteValidationRules(validationRuleId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteValidationRulesWithHttpInfo(validationRuleId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a validation rule.
     * Get Validation Rule
     * @param validationRuleId A unique validation rule ID.
     */
    public getValidationRuleWithHttpInfo(validationRuleId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ValidationRulesGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationRule(validationRuleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a validation rule.
     * Get Validation Rule
     * @param validationRuleId A unique validation rule ID.
     */
    public getValidationRule(validationRuleId: string, _options?: ConfigurationOptions): Observable<ValidationRulesGetResponseBody> {
        return this.getValidationRuleWithHttpInfo(validationRuleId, _options).pipe(map((apiResponse: HttpInfo<ValidationRulesGetResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieve validation rule assignments for a specific validation rule.
     * List Validation Rule Assignments
     * @param validationRuleId Unique validation rule ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listValidationRuleAssignmentsWithHttpInfo(validationRuleId: string, limit?: number, page?: number, order?: ParameterOrderListValidationRuleAssignments, _options?: ConfigurationOptions): Observable<HttpInfo<ValidationRulesAssignmentsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listValidationRuleAssignments(validationRuleId, limit, page, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listValidationRuleAssignmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve validation rule assignments for a specific validation rule.
     * List Validation Rule Assignments
     * @param validationRuleId Unique validation rule ID.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [page] Which page of results to return. The lowest value is 1.
     * @param [order] This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     */
    public listValidationRuleAssignments(validationRuleId: string, limit?: number, page?: number, order?: ParameterOrderListValidationRuleAssignments, _options?: ConfigurationOptions): Observable<ValidationRulesAssignmentsListResponseBody> {
        return this.listValidationRuleAssignmentsWithHttpInfo(validationRuleId, limit, page, order, _options).pipe(map((apiResponse: HttpInfo<ValidationRulesAssignmentsListResponseBody>) => apiResponse.data));
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
    public listValidationRulesWithHttpInfo(limit?: number, page?: number, order?: ParameterOrderListValidationRules, startDate?: Date, endDate?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<ValidationRulesListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listValidationRules(limit, page, order, startDate, endDate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listValidationRulesWithHttpInfo(rsp)));
            }));
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
    public listValidationRules(limit?: number, page?: number, order?: ParameterOrderListValidationRules, startDate?: Date, endDate?: Date, _options?: ConfigurationOptions): Observable<ValidationRulesListResponseBody> {
        return this.listValidationRulesWithHttpInfo(limit, page, order, startDate, endDate, _options).pipe(map((apiResponse: HttpInfo<ValidationRulesListResponseBody>) => apiResponse.data));
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
    public listValidationRulesAssignmentsWithHttpInfo(relatedObjectId?: string, rule?: string, page?: number, limit?: number, order?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ValidationRulesAssignmentsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listValidationRulesAssignments(relatedObjectId, rule, page, limit, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listValidationRulesAssignmentsWithHttpInfo(rsp)));
            }));
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
    public listValidationRulesAssignments(relatedObjectId?: string, rule?: string, page?: number, limit?: number, order?: string, _options?: ConfigurationOptions): Observable<ValidationRulesAssignmentsListResponseBody> {
        return this.listValidationRulesAssignmentsWithHttpInfo(relatedObjectId, rule, page, limit, order, _options).pipe(map((apiResponse: HttpInfo<ValidationRulesAssignmentsListResponseBody>) => apiResponse.data));
    }

    /**
     * Update validation rule parameters.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.
     * Update Validation Rule
     * @param validationRuleId A unique validation rule ID.
     * @param [validationRulesUpdateRequestBody] Specify the parameters to be updated.
     */
    public updateValidationRuleWithHttpInfo(validationRuleId: string, validationRulesUpdateRequestBody?: ValidationRulesUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ValidationRulesUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateValidationRule(validationRuleId, validationRulesUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateValidationRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update validation rule parameters.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.
     * Update Validation Rule
     * @param validationRuleId A unique validation rule ID.
     * @param [validationRulesUpdateRequestBody] Specify the parameters to be updated.
     */
    public updateValidationRule(validationRuleId: string, validationRulesUpdateRequestBody?: ValidationRulesUpdateRequestBody, _options?: ConfigurationOptions): Observable<ValidationRulesUpdateResponseBody> {
        return this.updateValidationRuleWithHttpInfo(validationRuleId, validationRulesUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ValidationRulesUpdateResponseBody>) => apiResponse.data));
    }

}

import { ValidationsApiRequestFactory, ValidationsApiResponseProcessor} from "../apis/ValidationsApi";
export class ObservableValidationsApi {
    private requestFactory: ValidationsApiRequestFactory;
    private responseProcessor: ValidationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ValidationsApiRequestFactory,
        responseProcessor?: ValidationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ValidationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ValidationsApiResponseProcessor();
    }

    /**
     * Verify redeemables provided in the request. This method is designed for server side integration which means that it is accessible only through private keys. API keys with a Merchant role cant use this endpoint.
     * Validate Stackable Discounts
     * @param [validationsValidateRequestBody]
     */
    public validateStackedDiscountsWithHttpInfo(validationsValidateRequestBody?: ValidationsValidateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<ValidationsValidateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.validateStackedDiscounts(validationsValidateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateStackedDiscountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Verify redeemables provided in the request. This method is designed for server side integration which means that it is accessible only through private keys. API keys with a Merchant role cant use this endpoint.
     * Validate Stackable Discounts
     * @param [validationsValidateRequestBody]
     */
    public validateStackedDiscounts(validationsValidateRequestBody?: ValidationsValidateRequestBody, _options?: ConfigurationOptions): Observable<ValidationsValidateResponseBody> {
        return this.validateStackedDiscountsWithHttpInfo(validationsValidateRequestBody, _options).pipe(map((apiResponse: HttpInfo<ValidationsValidateResponseBody>) => apiResponse.data));
    }

}

import { VouchersApiRequestFactory, VouchersApiResponseProcessor} from "../apis/VouchersApi";
export class ObservableVouchersApi {
    private requestFactory: VouchersApiRequestFactory;
    private responseProcessor: VouchersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VouchersApiRequestFactory,
        responseProcessor?: VouchersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VouchersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VouchersApiResponseProcessor();
    }

    /**
     * Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD. The code path parameter can use all letters of the English alphabet, Arabic numerals and special characters. When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In the case of the loyalty card, a campaign name or ID is required. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Create Voucher
     * @param code A unique **code** that identifies the voucher.
     * @param [vouchersCreateWithSpecificCodeRequestBody] Specify the details of the voucher that you would like to create.
     */
    public createVoucherWithHttpInfo(code: string, vouchersCreateWithSpecificCodeRequestBody?: VouchersCreateWithSpecificCodeRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createVoucher(code, vouchersCreateWithSpecificCodeRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVoucherWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD. The code path parameter can use all letters of the English alphabet, Arabic numerals and special characters. When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In the case of the loyalty card, a campaign name or ID is required. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Create Voucher
     * @param code A unique **code** that identifies the voucher.
     * @param [vouchersCreateWithSpecificCodeRequestBody] Specify the details of the voucher that you would like to create.
     */
    public createVoucher(code: string, vouchersCreateWithSpecificCodeRequestBody?: VouchersCreateWithSpecificCodeRequestBody, _options?: ConfigurationOptions): Observable<VouchersCreateResponseBody> {
        return this.createVoucherWithHttpInfo(code, vouchersCreateWithSpecificCodeRequestBody, _options).pipe(map((apiResponse: HttpInfo<VouchersCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Deletes a voucher. This operation cannot be undone. Additionally, this operation removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the voucher will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Voucher
     * @param code A unique **code** that identifies the voucher.
     * @param [force] If this flag is set to true, the voucher will be removed permanently. If it is set to false or not set at all, the voucher will be moved to the bin. Going forward, the user will be able to create another voucher with exactly the same code.
     */
    public deleteVoucherWithHttpInfo(code: string, force?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteVoucher(code, force, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteVoucherWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a voucher. This operation cannot be undone. Additionally, this operation removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the voucher will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Voucher
     * @param code A unique **code** that identifies the voucher.
     * @param [force] If this flag is set to true, the voucher will be removed permanently. If it is set to false or not set at all, the voucher will be moved to the bin. Going forward, the user will be able to create another voucher with exactly the same code.
     */
    public deleteVoucher(code: string, force?: boolean, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteVoucherWithHttpInfo(code, force, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ This method sets the voucher state to **inactive**. The voucher cannot be redeemed.
     * Disable Voucher
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     */
    public disableVoucherWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersDisableResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.disableVoucher(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disableVoucherWithHttpInfo(rsp)));
            }));
    }

    /**
     * There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ This method sets the voucher state to **inactive**. The voucher cannot be redeemed.
     * Disable Voucher
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     */
    public disableVoucher(code: string, _options?: ConfigurationOptions): Observable<VouchersDisableResponseBody> {
        return this.disableVoucherWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<VouchersDisableResponseBody>) => apiResponse.data));
    }

    /**
     * There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ The method sets the voucher state to **active**. The voucher can be redeemed - only if the redemption occurs after the start date and the voucher is not expired.
     * Enable Voucher
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     */
    public enableVoucherWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersEnableResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.enableVoucher(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enableVoucherWithHttpInfo(rsp)));
            }));
    }

    /**
     * There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ The method sets the voucher state to **active**. The voucher can be redeemed - only if the redemption occurs after the start date and the voucher is not expired.
     * Enable Voucher
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     */
    public enableVoucher(code: string, _options?: ConfigurationOptions): Observable<VouchersEnableResponseBody> {
        return this.enableVoucherWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<VouchersEnableResponseBody>) => apiResponse.data));
    }

    /**
     * Export transactions that are associated with credit movements on a gift card or loyalty card.   
     * Export Voucher Transactions
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * @param [vouchersTransactionsExportCreateRequestBody] Specify the parameters for the camapign transaction export.
     */
    public exportVoucherTransactionsWithHttpInfo(code: string, vouchersTransactionsExportCreateRequestBody?: VouchersTransactionsExportCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersTransactionsExportCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.exportVoucherTransactions(code, vouchersTransactionsExportCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportVoucherTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export transactions that are associated with credit movements on a gift card or loyalty card.   
     * Export Voucher Transactions
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * @param [vouchersTransactionsExportCreateRequestBody] Specify the parameters for the camapign transaction export.
     */
    public exportVoucherTransactions(code: string, vouchersTransactionsExportCreateRequestBody?: VouchersTransactionsExportCreateRequestBody, _options?: ConfigurationOptions): Observable<VouchersTransactionsExportCreateResponseBody> {
        return this.exportVoucherTransactionsWithHttpInfo(code, vouchersTransactionsExportCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<VouchersTransactionsExportCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD.  When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In case of the loyalty card, a campaign name is required. You can optionally use the code parameter to define a specific code or the code_config parameter to design rules for Voucherify API to create a random code. If neither of the two parameters are passed, then a random code is generated by the Voucherify API. This method will return an error when trying to create a voucher that already exists. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Generate Random Code
     * @param [vouchersCreateRequestBody] Specify the details of the voucher that you would like to create.
     */
    public generateRandomCodeWithHttpInfo(vouchersCreateRequestBody?: VouchersCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.generateRandomCode(vouchersCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateRandomCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD.  When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In case of the loyalty card, a campaign name is required. You can optionally use the code parameter to define a specific code or the code_config parameter to design rules for Voucherify API to create a random code. If neither of the two parameters are passed, then a random code is generated by the Voucherify API. This method will return an error when trying to create a voucher that already exists. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Generate Random Code
     * @param [vouchersCreateRequestBody] Specify the details of the voucher that you would like to create.
     */
    public generateRandomCode(vouchersCreateRequestBody?: VouchersCreateRequestBody, _options?: ConfigurationOptions): Observable<VouchersCreateResponseBody> {
        return this.generateRandomCodeWithHttpInfo(vouchersCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<VouchersCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Retrieves the voucher with the given code or unique Voucherify ID. You can either pass the voucher ID which was assigned by Voucherify, e.g., v_7HxHkf4VAkMuc8u4lZs78lyRwhRze5UE, or the code of the voucher as the path parameter value, e.g., 7fjWdr.
     * Get Voucher
     * @param code A unique **code** that identifies the voucher.
     */
    public getVoucherWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersGetResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getVoucher(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVoucherWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the voucher with the given code or unique Voucherify ID. You can either pass the voucher ID which was assigned by Voucherify, e.g., v_7HxHkf4VAkMuc8u4lZs78lyRwhRze5UE, or the code of the voucher as the path parameter value, e.g., 7fjWdr.
     * Get Voucher
     * @param code A unique **code** that identifies the voucher.
     */
    public getVoucher(code: string, _options?: ConfigurationOptions): Observable<VouchersGetResponseBody> {
        return this.getVoucherWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<VouchersGetResponseBody>) => apiResponse.data));
    }

    /**
     * Import generic (standalone) vouchers and gift cards into the repository.  📘 Important notes  - **Start and expiration dates** need to be provided in compliance with the ISO 8601 norms. For example, 2020-03-11T09:00:00.000Z.  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify Project. Any parameters not provided in the payload will be left blank or null. For both **standalone discount vouchers and gift cards**, you can import the following fields:   - code - category - active - type - start_date - expiration_date - redemption.quantity - additional_info - metadata For **gift cards**, you can also import the following field: - gift.amount For **discount vouchers**, you can import the discount object. The object will slightly vary depending on the type of discount. Each discount type **requires** the type to be defined in the import.   Fields other than the ones listed above wont be imported. Even if provided, they will be silently skipped. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.
     * Import Vouchers
     * @param vouchersImportCreateItemRequestBody The request body is an array of objects. Each object contains details about a specific voucher. 
     */
    public importVouchersWithHttpInfo(vouchersImportCreateItemRequestBody: Array<VouchersImportCreateItemRequestBody>, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersImportCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.importVouchers(vouchersImportCreateItemRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importVouchersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Import generic (standalone) vouchers and gift cards into the repository.  📘 Important notes  - **Start and expiration dates** need to be provided in compliance with the ISO 8601 norms. For example, 2020-03-11T09:00:00.000Z.  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify Project. Any parameters not provided in the payload will be left blank or null. For both **standalone discount vouchers and gift cards**, you can import the following fields:   - code - category - active - type - start_date - expiration_date - redemption.quantity - additional_info - metadata For **gift cards**, you can also import the following field: - gift.amount For **discount vouchers**, you can import the discount object. The object will slightly vary depending on the type of discount. Each discount type **requires** the type to be defined in the import.   Fields other than the ones listed above wont be imported. Even if provided, they will be silently skipped. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.
     * Import Vouchers
     * @param vouchersImportCreateItemRequestBody The request body is an array of objects. Each object contains details about a specific voucher. 
     */
    public importVouchers(vouchersImportCreateItemRequestBody: Array<VouchersImportCreateItemRequestBody>, _options?: ConfigurationOptions): Observable<VouchersImportCreateResponseBody> {
        return this.importVouchersWithHttpInfo(vouchersImportCreateItemRequestBody, _options).pipe(map((apiResponse: HttpInfo<VouchersImportCreateResponseBody>) => apiResponse.data));
    }

    /**
     * Import generic (standalone) vouchers into the repository using a CSV file. The CSV file has to include headers in the first line. All properties listed in the file headers that cannot be mapped to standard voucher fields will be added to the metadata object.   You can find an example CSV file [here](https://support.voucherify.io/article/45-import-codes-and-share-them-digitally#coupons). ___  📘 Standard voucher fields mapping  - Go to the [import vouchers](/api-reference/vouchers/import-vouchers) endpoint to see all standard CSV fields description (body params section).  - Supported CSV file headers: Code,Voucher Type,Value,Discount Type,Category,Start Date,Expiration Date,Redemption Limit,Redeemed Quantity, Redeemed Amount,Active,Additional Info,Custom Metadata Property Name - **Start and expiration dates** need to be provided in compliance with the ISO 8601 standard. For example, 2020-03-11T09:00:00.000Z.       - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify project.  - You can, however, upload the same codes to update them.  📘 Categories  In the structure representing your data, you can define a category that the voucher belongs to. You can later use the category of a voucher to group and search by specific criteria in the Dashboard and using the [List Vouchers](/api-reference/vouchers/list-vouchers) endpoint. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). You can pass the webhooks_enable true parameter to trigger a webhook sendout for created or updated vouchers. Configure the [respective webhooks](/api-reference/introduction-to-webhooks) in Project settings. For updated webhooks, a webhook is sent even if the voucher hasnt been changed in the CSV file. 🚧 Generic (standalone) vouchers and campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.
     * Import Vouchers using CSV
     * @param [file] File path.
     * @param [webhooksEnable] Triggers a webhook sendout for new and updated vouchers if the voucher created and voucher updated webhooks are configured in Project settings.
     */
    public importVouchersUsingCsvWithHttpInfo(file?: HttpFile, webhooksEnable?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersImportCsvCreateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.importVouchersUsingCsv(file, webhooksEnable, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importVouchersUsingCsvWithHttpInfo(rsp)));
            }));
    }

    /**
     * Import generic (standalone) vouchers into the repository using a CSV file. The CSV file has to include headers in the first line. All properties listed in the file headers that cannot be mapped to standard voucher fields will be added to the metadata object.   You can find an example CSV file [here](https://support.voucherify.io/article/45-import-codes-and-share-them-digitally#coupons). ___  📘 Standard voucher fields mapping  - Go to the [import vouchers](/api-reference/vouchers/import-vouchers) endpoint to see all standard CSV fields description (body params section).  - Supported CSV file headers: Code,Voucher Type,Value,Discount Type,Category,Start Date,Expiration Date,Redemption Limit,Redeemed Quantity, Redeemed Amount,Active,Additional Info,Custom Metadata Property Name - **Start and expiration dates** need to be provided in compliance with the ISO 8601 standard. For example, 2020-03-11T09:00:00.000Z.       - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify project.  - You can, however, upload the same codes to update them.  📘 Categories  In the structure representing your data, you can define a category that the voucher belongs to. You can later use the category of a voucher to group and search by specific criteria in the Dashboard and using the [List Vouchers](/api-reference/vouchers/list-vouchers) endpoint. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). You can pass the webhooks_enable true parameter to trigger a webhook sendout for created or updated vouchers. Configure the [respective webhooks](/api-reference/introduction-to-webhooks) in Project settings. For updated webhooks, a webhook is sent even if the voucher hasnt been changed in the CSV file. 🚧 Generic (standalone) vouchers and campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.
     * Import Vouchers using CSV
     * @param [file] File path.
     * @param [webhooksEnable] Triggers a webhook sendout for new and updated vouchers if the voucher created and voucher updated webhooks are configured in Project settings.
     */
    public importVouchersUsingCsv(file?: HttpFile, webhooksEnable?: boolean, _options?: ConfigurationOptions): Observable<VouchersImportCsvCreateResponseBody> {
        return this.importVouchersUsingCsvWithHttpInfo(file, webhooksEnable, _options).pipe(map((apiResponse: HttpInfo<VouchersImportCsvCreateResponseBody>) => apiResponse.data));
    }

    /**
     * List transactions that are associated with credit movements on a gift card or loyalty card.
     * List Voucher Transactions
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     */
    public listVoucherTransactionsWithHttpInfo(code: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersTransactionsListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listVoucherTransactions(code, limit, order, startingAfterId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listVoucherTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List transactions that are associated with credit movements on a gift card or loyalty card.
     * List Voucher Transactions
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * @param [limit] Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * @param [order] Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * @param [startingAfterId] A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     */
    public listVoucherTransactions(code: string, limit?: number, order?: ParameterOrderListTransactions, startingAfterId?: string, _options?: ConfigurationOptions): Observable<VouchersTransactionsListResponseBody> {
        return this.listVoucherTransactionsWithHttpInfo(code, limit, order, startingAfterId, _options).pipe(map((apiResponse: HttpInfo<VouchersTransactionsListResponseBody>) => apiResponse.data));
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
    public listVouchersWithHttpInfo(limit?: number, page?: number, category?: string, campaignId?: string, customer?: string, campaign?: string, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, order?: ParameterOrderVouchers, code?: string, ids?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersListResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listVouchers(limit, page, category, campaignId, customer, campaign, createdAt, updatedAt, order, code, ids, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listVouchersWithHttpInfo(rsp)));
            }));
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
    public listVouchers(limit?: number, page?: number, category?: string, campaignId?: string, customer?: string, campaign?: string, createdAt?: ParameterCreatedBeforeAfter, updatedAt?: ParameterUpdatedBeforeAfter, order?: ParameterOrderVouchers, code?: string, ids?: Array<string>, _options?: ConfigurationOptions): Observable<VouchersListResponseBody> {
        return this.listVouchersWithHttpInfo(limit, page, category, campaignId, customer, campaign, createdAt, updatedAt, order, code, ids, _options).pipe(map((apiResponse: HttpInfo<VouchersListResponseBody>) => apiResponse.data));
    }

    /**
     * Manually release a validation session that has been set up for the voucher. This method undoes the actions that are explained in the [Locking validation session](/guides/locking-validation-session) guide.   📘 Release session in the Dashboard  You can also use the [Validations Manager](https://support.voucherify.io/article/16-dashboard-sections#sessions) in the Dashboard to unlock sessions.
     * Release Validation Session
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify.
     * @param sessionKey A unique session identifier.
     */
    public releaseValidationSessionWithHttpInfo(code: string, sessionKey: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.releaseValidationSession(code, sessionKey, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.releaseValidationSessionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Manually release a validation session that has been set up for the voucher. This method undoes the actions that are explained in the [Locking validation session](/guides/locking-validation-session) guide.   📘 Release session in the Dashboard  You can also use the [Validations Manager](https://support.voucherify.io/article/16-dashboard-sections#sessions) in the Dashboard to unlock sessions.
     * Release Validation Session
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify.
     * @param sessionKey A unique session identifier.
     */
    public releaseValidationSession(code: string, sessionKey: string, _options?: ConfigurationOptions): Observable<void> {
        return this.releaseValidationSessionWithHttpInfo(code, sessionKey, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates the specified voucher by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped. If you want to change the amount on a gift card or the number of points on a loyalty card, use the [Adjust voucher balance](/api-reference/vouchers/adjust-voucher-balance) endpoint.
     * Update Voucher
     * @param code A unique **code** that identifies the voucher.
     * @param vouchersUpdateRequestBody Specify the parameters to be updated.
     */
    public updateVoucherWithHttpInfo(code: string, vouchersUpdateRequestBody: VouchersUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateVoucher(code, vouchersUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateVoucherWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the specified voucher by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped. If you want to change the amount on a gift card or the number of points on a loyalty card, use the [Adjust voucher balance](/api-reference/vouchers/adjust-voucher-balance) endpoint.
     * Update Voucher
     * @param code A unique **code** that identifies the voucher.
     * @param vouchersUpdateRequestBody Specify the parameters to be updated.
     */
    public updateVoucher(code: string, vouchersUpdateRequestBody: VouchersUpdateRequestBody, _options?: ConfigurationOptions): Observable<VouchersUpdateResponseBody> {
        return this.updateVoucherWithHttpInfo(code, vouchersUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<VouchersUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * Add balance to an existing gift card or loyalty card. For loyalty cards, it must be assigned to a holder.
     * Adjust Voucher Balance
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * @param vouchersBalanceUpdateRequestBody Provide the amount to be added to/subtracted from the voucher.
     */
    public updateVoucherBalanceWithHttpInfo(code: string, vouchersBalanceUpdateRequestBody: VouchersBalanceUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersBalanceUpdateResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateVoucherBalance(code, vouchersBalanceUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateVoucherBalanceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add balance to an existing gift card or loyalty card. For loyalty cards, it must be assigned to a holder.
     * Adjust Voucher Balance
     * @param code A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * @param vouchersBalanceUpdateRequestBody Provide the amount to be added to/subtracted from the voucher.
     */
    public updateVoucherBalance(code: string, vouchersBalanceUpdateRequestBody: VouchersBalanceUpdateRequestBody, _options?: ConfigurationOptions): Observable<VouchersBalanceUpdateResponseBody> {
        return this.updateVoucherBalanceWithHttpInfo(code, vouchersBalanceUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<VouchersBalanceUpdateResponseBody>) => apiResponse.data));
    }

    /**
     * Updates specific metadata parameters for each code, respectively, in one asynchronous operation. The request can include up to **10 MB** of data. Upserts are not supported.  🚧 Currently, only **metadata** updates are supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Vouchers in Bulk
     * @param vouchersUpdateInBulkItemRequestBody List the codes to be updated with the metadata key/value pairs for that code.
     */
    public updateVouchersInBulkWithHttpInfo(vouchersUpdateInBulkItemRequestBody: Array<VouchersUpdateInBulkItemRequestBody>, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersUpdateInBulkResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateVouchersInBulk(vouchersUpdateInBulkItemRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateVouchersInBulkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates specific metadata parameters for each code, respectively, in one asynchronous operation. The request can include up to **10 MB** of data. Upserts are not supported.  🚧 Currently, only **metadata** updates are supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Vouchers in Bulk
     * @param vouchersUpdateInBulkItemRequestBody List the codes to be updated with the metadata key/value pairs for that code.
     */
    public updateVouchersInBulk(vouchersUpdateInBulkItemRequestBody: Array<VouchersUpdateInBulkItemRequestBody>, _options?: ConfigurationOptions): Observable<VouchersUpdateInBulkResponseBody> {
        return this.updateVouchersInBulkWithHttpInfo(vouchersUpdateInBulkItemRequestBody, _options).pipe(map((apiResponse: HttpInfo<VouchersUpdateInBulkResponseBody>) => apiResponse.data));
    }

    /**
     * Updates metadata parameters for a list of codes. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. Upserts are not supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Vouchers\' Metadata in Bulk
     * @param vouchersMetadataUpdateInBulkRequestBody List the codes of the vouchers you would like to update with the metadata key/value pairs.
     */
    public updateVouchersMetadataInBulkWithHttpInfo(vouchersMetadataUpdateInBulkRequestBody: VouchersMetadataUpdateInBulkRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<VouchersMetadataUpdateInBulkResponseBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateVouchersMetadataInBulk(vouchersMetadataUpdateInBulkRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateVouchersMetadataInBulkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates metadata parameters for a list of codes. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. Upserts are not supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Vouchers\' Metadata in Bulk
     * @param vouchersMetadataUpdateInBulkRequestBody List the codes of the vouchers you would like to update with the metadata key/value pairs.
     */
    public updateVouchersMetadataInBulk(vouchersMetadataUpdateInBulkRequestBody: VouchersMetadataUpdateInBulkRequestBody, _options?: ConfigurationOptions): Observable<VouchersMetadataUpdateInBulkResponseBody> {
        return this.updateVouchersMetadataInBulkWithHttpInfo(vouchersMetadataUpdateInBulkRequestBody, _options).pipe(map((apiResponse: HttpInfo<VouchersMetadataUpdateInBulkResponseBody>) => apiResponse.data));
    }

}
