import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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

import { ObservableAsyncActionsApi } from "./ObservableAPI";
import { AsyncActionsApiRequestFactory, AsyncActionsApiResponseProcessor} from "../apis/AsyncActionsApi";

export interface AsyncActionsApiGetAsyncActionRequest {
    /**
     * Unique ID of the asynchronous operation.
     * Defaults to: undefined
     * @type string
     * @memberof AsyncActionsApigetAsyncAction
     */
    asyncActionId: string
}

export interface AsyncActionsApiListAsyncActionsRequest {
    /**
     * Limit the number of asynchronous actions that the API returns in the response.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof AsyncActionsApilistAsyncActions
     */
    limit?: number
    /**
     * Limits results to actions scheduled before the end_date. The date format needs to be consistent with ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). 
     * Defaults to: undefined
     * @type Date
     * @memberof AsyncActionsApilistAsyncActions
     */
    endDate?: Date
}

export class ObjectAsyncActionsApi {
    private api: ObservableAsyncActionsApi

    public constructor(configuration: Configuration, requestFactory?: AsyncActionsApiRequestFactory, responseProcessor?: AsyncActionsApiResponseProcessor) {
        this.api = new ObservableAsyncActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check the result of a scheduled asynchronous operation.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       
     * Get Async Action
     * @param param the request object
     */
    public getAsyncActionWithHttpInfo(param: AsyncActionsApiGetAsyncActionRequest, options?: ConfigurationOptions): Promise<HttpInfo<AsyncActionGetResponseBody>> {
        return this.api.getAsyncActionWithHttpInfo(param.asyncActionId,  options).toPromise();
    }

    /**
     * Check the result of a scheduled asynchronous operation.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       
     * Get Async Action
     * @param param the request object
     */
    public getAsyncAction(param: AsyncActionsApiGetAsyncActionRequest, options?: ConfigurationOptions): Promise<AsyncActionGetResponseBody> {
        return this.api.getAsyncAction(param.asyncActionId,  options).toPromise();
    }

    /**
     * Track asynchronous operations scheduled in your project.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       
     * List Async Actions
     * @param param the request object
     */
    public listAsyncActionsWithHttpInfo(param: AsyncActionsApiListAsyncActionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<AsyncActionsListResponseBody>> {
        return this.api.listAsyncActionsWithHttpInfo(param.limit, param.endDate,  options).toPromise();
    }

    /**
     * Track asynchronous operations scheduled in your project.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       
     * List Async Actions
     * @param param the request object
     */
    public listAsyncActions(param: AsyncActionsApiListAsyncActionsRequest = {}, options?: ConfigurationOptions): Promise<AsyncActionsListResponseBody> {
        return this.api.listAsyncActions(param.limit, param.endDate,  options).toPromise();
    }

}

import { ObservableBinApi } from "./ObservableAPI";
import { BinApiRequestFactory, BinApiResponseProcessor} from "../apis/BinApi";

export interface BinApiDeleteBinEntryRequest {
    /**
     * Provide the unique identifier of the bin entry.
     * Defaults to: undefined
     * @type string
     * @memberof BinApideleteBinEntry
     */
    binEntryId: string
}

export interface BinApiListBinEntriesRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof BinApilistBinEntries
     */
    limit?: number
    /**
     * Orders the bin entries according to the bin entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListBin
     * @memberof BinApilistBinEntries
     */
    order?: ParameterOrderListBin
    /**
     * A cursor for pagination. It retrieves the results starting after a result with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof BinApilistBinEntries
     */
    startingAfterId?: string
    /**
     * Filters for listing bin entries.
     * Defaults to: undefined
     * @type ParameterFiltersListBin
     * @memberof BinApilistBinEntries
     */
    filters?: ParameterFiltersListBin
}

export class ObjectBinApi {
    private api: ObservableBinApi

    public constructor(configuration: Configuration, requestFactory?: BinApiRequestFactory, responseProcessor?: BinApiResponseProcessor) {
        this.api = new ObservableBinApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes permanently a bin entry with a given ID.The following resources can be moved to the bin and permanently deleted: - campaigns - vouchers - products - SKUs To use this endpoint and delete a given resource type, you must have the following permissions: - vouchers.delete to delete a voucher, - campaigns.delete to delete a campaign, - products.delete to delete a product or SKU.
     * Delete Bin Entry
     * @param param the request object
     */
    public deleteBinEntryWithHttpInfo(param: BinApiDeleteBinEntryRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteBinEntryWithHttpInfo(param.binEntryId,  options).toPromise();
    }

    /**
     * Deletes permanently a bin entry with a given ID.The following resources can be moved to the bin and permanently deleted: - campaigns - vouchers - products - SKUs To use this endpoint and delete a given resource type, you must have the following permissions: - vouchers.delete to delete a voucher, - campaigns.delete to delete a campaign, - products.delete to delete a product or SKU.
     * Delete Bin Entry
     * @param param the request object
     */
    public deleteBinEntry(param: BinApiDeleteBinEntryRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteBinEntry(param.binEntryId,  options).toPromise();
    }

    /**
     * Retrieves a list of resources moved to the bin. The following resources can be moved to the bin: - campaigns - vouchers - products - SKUs To use this endpoint, you must have the following permissions: - vouchers.read - campaigns.read - products.read
     * List Bin Entries
     * @param param the request object
     */
    public listBinEntriesWithHttpInfo(param: BinApiListBinEntriesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TrashBinListResponseBody>> {
        return this.api.listBinEntriesWithHttpInfo(param.limit, param.order, param.startingAfterId, param.filters,  options).toPromise();
    }

    /**
     * Retrieves a list of resources moved to the bin. The following resources can be moved to the bin: - campaigns - vouchers - products - SKUs To use this endpoint, you must have the following permissions: - vouchers.read - campaigns.read - products.read
     * List Bin Entries
     * @param param the request object
     */
    public listBinEntries(param: BinApiListBinEntriesRequest = {}, options?: ConfigurationOptions): Promise<TrashBinListResponseBody> {
        return this.api.listBinEntries(param.limit, param.order, param.startingAfterId, param.filters,  options).toPromise();
    }

}

import { ObservableCampaignsApi } from "./ObservableAPI";
import { CampaignsApiRequestFactory, CampaignsApiResponseProcessor} from "../apis/CampaignsApi";

export interface CampaignsApiAddVoucherWithSpecificCodeToCampaignRequest {
    /**
     * The campaign ID or name of the campaign to which voucher will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApiaddVoucherWithSpecificCodeToCampaign
     */
    campaignId: string
    /**
     * A custom **code** that identifies the voucher.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApiaddVoucherWithSpecificCodeToCampaign
     */
    code: string
    /**
     * Specify the voucher parameters that you would like to overwrite.
     * @type CampaignsVouchersCreateRequestBody
     * @memberof CampaignsApiaddVoucherWithSpecificCodeToCampaign
     */
    campaignsVouchersCreateRequestBody?: CampaignsVouchersCreateRequestBody
}

export interface CampaignsApiAddVouchersToCampaignRequest {
    /**
     * The campaign ID or name of the campaign to which voucher(s) will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApiaddVouchersToCampaign
     */
    campaignId: string
    /**
     * Number of vouchers that should be added.
     * Defaults to: undefined
     * @type number
     * @memberof CampaignsApiaddVouchersToCampaign
     */
    vouchersCount?: number
    /**
     * Specify the voucher parameters that you would like to overwrite.
     * @type CampaignsVouchersCreateInBulkRequestBody
     * @memberof CampaignsApiaddVouchersToCampaign
     */
    campaignsVouchersCreateInBulkRequestBody?: CampaignsVouchersCreateInBulkRequestBody
}

export interface CampaignsApiCreateCampaignRequest {
    /**
     * Specify the details of the campaign that you would like to create.
     * @type CampaignsCreateRequestBody
     * @memberof CampaignsApicreateCampaign
     */
    campaignsCreateRequestBody?: CampaignsCreateRequestBody
}

export interface CampaignsApiDeleteCampaignRequest {
    /**
     * You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApideleteCampaign
     */
    campaignId: string
    /**
     * If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the campaign and related vouchers will be moved to the bin. Going forward, the user will be able to create the next campaign with exactly the same name.
     * Defaults to: undefined
     * @type boolean
     * @memberof CampaignsApideleteCampaign
     */
    force?: boolean
}

export interface CampaignsApiDisableCampaignRequest {
    /**
     * The campaign ID or name of the campaign being disabled. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApidisableCampaign
     */
    campaignId: string
}

export interface CampaignsApiEnableCampaignRequest {
    /**
     * The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApienableCampaign
     */
    campaignId: string
}

export interface CampaignsApiExportCampaignTransactionsRequest {
    /**
     * You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApiexportCampaignTransactions
     */
    campaignId: string
    /**
     * Specify the parameters for the transaction export.
     * @type CampaignsTransactionsExportCreateRequestBody
     * @memberof CampaignsApiexportCampaignTransactions
     */
    campaignsTransactionsExportCreateRequestBody?: CampaignsTransactionsExportCreateRequestBody
}

export interface CampaignsApiGetCampaignRequest {
    /**
     * You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApigetCampaign
     */
    campaignId: string
}

export interface CampaignsApiGetCampaignSummaryRequest {
    /**
     * You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApigetCampaignSummary
     */
    campaignId: string
    /**
     * Timestamp representing the date which results must begin on. Represented in ISO 8601 format.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApigetCampaignSummary
     */
    startDate?: string
    /**
     * Timestamp representing the date which results must end on. Represented in ISO 8601 format.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApigetCampaignSummary
     */
    endDate?: string
}

export interface CampaignsApiImportVouchersToCampaignRequest {
    /**
     * The ID of an existing campaign to which youre importing the codes. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApiimportVouchersToCampaign
     */
    campaignId: string
    /**
     * Discount type, expiration date and the remaining attributes will be taken from the [Campaign](/api-reference/campaigns/get-campaign) settings.
     * @type Array&lt;CampaignsImportVoucherItem&gt;
     * @memberof CampaignsApiimportVouchersToCampaign
     */
    campaignsImportVoucherItem?: Array<CampaignsImportVoucherItem>
}

export interface CampaignsApiImportVouchersToCampaignUsingCsvRequest {
    /**
     * The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApiimportVouchersToCampaignUsingCsv
     */
    campaignId: string
    /**
     * File path.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof CampaignsApiimportVouchersToCampaignUsingCsv
     */
    file?: HttpFile
}

export interface CampaignsApiListCampaignTransactionsRequest {
    /**
     * You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApilistCampaignTransactions
     */
    campaignId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof CampaignsApilistCampaignTransactions
     */
    limit?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListTransactions
     * @memberof CampaignsApilistCampaignTransactions
     */
    order?: ParameterOrderListTransactions
    /**
     * A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApilistCampaignTransactions
     */
    startingAfterId?: string
    /**
     * Filters for listing responses.
     * Defaults to: undefined
     * @type ParametersFiltersListCampaignTransactions
     * @memberof CampaignsApilistCampaignTransactions
     */
    filters?: ParametersFiltersListCampaignTransactions
}

export interface CampaignsApiListCampaignsRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof CampaignsApilistCampaigns
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof CampaignsApilistCampaigns
     */
    page?: number
    /**
     * This attribute allows filtering by campaign type.
     * Defaults to: undefined
     * @type ParameterCampaignType
     * @memberof CampaignsApilistCampaigns
     */
    campaignType?: ParameterCampaignType
    /**
     * Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores.
     * Defaults to: undefined
     * @type ParameterExpandListCampaigns
     * @memberof CampaignsApilistCampaigns
     */
    expand?: ParameterExpandListCampaigns
    /**
     * Sorts the results by the status of the campaign.
     * Defaults to: undefined
     * @type ParameterCampaignStatusListCampaigns
     * @memberof CampaignsApilistCampaigns
     */
    campaignStatus?: ParameterCampaignStatusListCampaigns
    /**
     * Sorts the results that are or are not referral campaigns.
     * Defaults to: undefined
     * @type boolean
     * @memberof CampaignsApilistCampaigns
     */
    isReferralCode?: boolean
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListCampaigns
     * @memberof CampaignsApilistCampaigns
     */
    order?: ParameterOrderListCampaigns
    /**
     * Filters the results by various campaign properties.
     * Defaults to: undefined
     * @type ParameterFiltersListCampaigns
     * @memberof CampaignsApilistCampaigns
     */
    filters?: ParameterFiltersListCampaigns
    /**
     * Filter by areas and stores IDs to return campaigns that are assigned to areas, stores, and all stores in an area.
     * Defaults to: undefined
     * @type ParameterCampaignsAccessSetttings
     * @memberof CampaignsApilistCampaigns
     */
    accessSettings?: ParameterCampaignsAccessSetttings
}

export interface CampaignsApiUpdateCampaignRequest {
    /**
     * You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof CampaignsApiupdateCampaign
     */
    campaignId: string
    /**
     * Specify the campaign parameters to be updated.
     * @type CampaignsUpdateRequestBody
     * @memberof CampaignsApiupdateCampaign
     */
    campaignsUpdateRequestBody?: CampaignsUpdateRequestBody
}

export class ObjectCampaignsApi {
    private api: ObservableCampaignsApi

    public constructor(configuration: Configuration, requestFactory?: CampaignsApiRequestFactory, responseProcessor?: CampaignsApiResponseProcessor) {
        this.api = new ObservableCampaignsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This method gives a possibility to add a new voucher to an existing campaign. The voucher definition will be inherited from the definition kept in the campaign profile. However, you are able to overwrite a few properties inherited from the campaign.
     * Add Voucher with Specific Code to Campaign
     * @param param the request object
     */
    public addVoucherWithSpecificCodeToCampaignWithHttpInfo(param: CampaignsApiAddVoucherWithSpecificCodeToCampaignRequest, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsVouchersCreateResponseBody>> {
        return this.api.addVoucherWithSpecificCodeToCampaignWithHttpInfo(param.campaignId, param.code, param.campaignsVouchersCreateRequestBody,  options).toPromise();
    }

    /**
     * This method gives a possibility to add a new voucher to an existing campaign. The voucher definition will be inherited from the definition kept in the campaign profile. However, you are able to overwrite a few properties inherited from the campaign.
     * Add Voucher with Specific Code to Campaign
     * @param param the request object
     */
    public addVoucherWithSpecificCodeToCampaign(param: CampaignsApiAddVoucherWithSpecificCodeToCampaignRequest, options?: ConfigurationOptions): Promise<CampaignsVouchersCreateResponseBody> {
        return this.api.addVoucherWithSpecificCodeToCampaign(param.campaignId, param.code, param.campaignsVouchersCreateRequestBody,  options).toPromise();
    }

    /**
     * This method gives the possibility to push new vouchers to an existing campaign. New vouchers will inherit properties from the campaign profile. However, it is possible to overwrite some of them in the request body. If you provide an optional code_config parameter with a voucher code configuration, then it will be used to generate new voucher codes. Otherwise, the voucher code configuration from the campaign will be used. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Add Vouchers to Campaign
     * @param param the request object
     */
    public addVouchersToCampaignWithHttpInfo(param: CampaignsApiAddVouchersToCampaignRequest, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsVouchersCreateCombinedResponseBody>> {
        return this.api.addVouchersToCampaignWithHttpInfo(param.campaignId, param.vouchersCount, param.campaignsVouchersCreateInBulkRequestBody,  options).toPromise();
    }

    /**
     * This method gives the possibility to push new vouchers to an existing campaign. New vouchers will inherit properties from the campaign profile. However, it is possible to overwrite some of them in the request body. If you provide an optional code_config parameter with a voucher code configuration, then it will be used to generate new voucher codes. Otherwise, the voucher code configuration from the campaign will be used. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Add Vouchers to Campaign
     * @param param the request object
     */
    public addVouchersToCampaign(param: CampaignsApiAddVouchersToCampaignRequest, options?: ConfigurationOptions): Promise<CampaignsVouchersCreateCombinedResponseBody> {
        return this.api.addVouchersToCampaign(param.campaignId, param.vouchersCount, param.campaignsVouchersCreateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Method to create a batch of vouchers aggregated in one campaign. You can choose a variety of voucher types and define a unique pattern for generating codes.    📘 Global uniqueness  All campaign codes are unique across the whole project. Voucherify will not allow you to generate 2 campaigns with the same coupon code.    🚧 Code generation status  This is an asynchronous action; you cant read or modify a newly created campaign until the code generation is completed. See the creation_status field in the [campaign object](/api-reference/campaigns/campaign-object) description. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, you cannot create a standalone discount or gift voucher campaign with the type: STANDALONE through the API. Voucherify developers work on adding that feature. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Create Campaign
     * @param param the request object
     */
    public createCampaignWithHttpInfo(param: CampaignsApiCreateCampaignRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsCreateResponseBody>> {
        return this.api.createCampaignWithHttpInfo(param.campaignsCreateRequestBody,  options).toPromise();
    }

    /**
     * Method to create a batch of vouchers aggregated in one campaign. You can choose a variety of voucher types and define a unique pattern for generating codes.    📘 Global uniqueness  All campaign codes are unique across the whole project. Voucherify will not allow you to generate 2 campaigns with the same coupon code.    🚧 Code generation status  This is an asynchronous action; you cant read or modify a newly created campaign until the code generation is completed. See the creation_status field in the [campaign object](/api-reference/campaigns/campaign-object) description. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, you cannot create a standalone discount or gift voucher campaign with the type: STANDALONE through the API. Voucherify developers work on adding that feature. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Create Campaign
     * @param param the request object
     */
    public createCampaign(param: CampaignsApiCreateCampaignRequest = {}, options?: ConfigurationOptions): Promise<CampaignsCreateResponseBody> {
        return this.api.createCampaign(param.campaignsCreateRequestBody,  options).toPromise();
    }

    /**
     * Deletes a campaign and all related vouchers. This action cannot be undone. Also, this method immediately removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the campaign and all related vouchers will be moved to [the bin](/api-reference/bin/list-bin-entries). This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Delete Campaign
     * @param param the request object
     */
    public deleteCampaignWithHttpInfo(param: CampaignsApiDeleteCampaignRequest, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsDeleteResponseBody>> {
        return this.api.deleteCampaignWithHttpInfo(param.campaignId, param.force,  options).toPromise();
    }

    /**
     * Deletes a campaign and all related vouchers. This action cannot be undone. Also, this method immediately removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the campaign and all related vouchers will be moved to [the bin](/api-reference/bin/list-bin-entries). This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Delete Campaign
     * @param param the request object
     */
    public deleteCampaign(param: CampaignsApiDeleteCampaignRequest, options?: ConfigurationOptions): Promise<CampaignsDeleteResponseBody> {
        return this.api.deleteCampaign(param.campaignId, param.force,  options).toPromise();
    }

    /**
     * There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **inactive**. The vouchers in this campaign can no longer be redeemed.
     * Disable Campaign
     * @param param the request object
     */
    public disableCampaignWithHttpInfo(param: CampaignsApiDisableCampaignRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.disableCampaignWithHttpInfo(param.campaignId,  options).toPromise();
    }

    /**
     * There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **inactive**. The vouchers in this campaign can no longer be redeemed.
     * Disable Campaign
     * @param param the request object
     */
    public disableCampaign(param: CampaignsApiDisableCampaignRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.disableCampaign(param.campaignId,  options).toPromise();
    }

    /**
     * There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **active**. The vouchers in this campaign can be redeemed - only if the redemption occurs after the start date of the campaign and voucher and the voucher and campaign are not expired.
     * Enable Campaign
     * @param param the request object
     */
    public enableCampaignWithHttpInfo(param: CampaignsApiEnableCampaignRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.enableCampaignWithHttpInfo(param.campaignId,  options).toPromise();
    }

    /**
     * There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **active**. The vouchers in this campaign can be redeemed - only if the redemption occurs after the start date of the campaign and voucher and the voucher and campaign are not expired.
     * Enable Campaign
     * @param param the request object
     */
    public enableCampaign(param: CampaignsApiEnableCampaignRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.enableCampaign(param.campaignId,  options).toPromise();
    }

    /**
     * Export transactions is an asynchronous process that generates a CSV file with the data about credit movements on all gift cards or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Loyalty Campaign Transactions  For loyalty campaigns, this method works in the same way the [POST Export Loyalty Campaign Transactions](/api-reference/loyalties/export-loyalty-campaign-transactions) does.
     * Export Campaign Transactions
     * @param param the request object
     */
    public exportCampaignTransactionsWithHttpInfo(param: CampaignsApiExportCampaignTransactionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsTransactionsExportCreateResponseBody>> {
        return this.api.exportCampaignTransactionsWithHttpInfo(param.campaignId, param.campaignsTransactionsExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Export transactions is an asynchronous process that generates a CSV file with the data about credit movements on all gift cards or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Loyalty Campaign Transactions  For loyalty campaigns, this method works in the same way the [POST Export Loyalty Campaign Transactions](/api-reference/loyalties/export-loyalty-campaign-transactions) does.
     * Export Campaign Transactions
     * @param param the request object
     */
    public exportCampaignTransactions(param: CampaignsApiExportCampaignTransactionsRequest, options?: ConfigurationOptions): Promise<CampaignsTransactionsExportCreateResponseBody> {
        return this.api.exportCampaignTransactions(param.campaignId, param.campaignsTransactionsExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Retrieves the campaign with the given campaign ID or campaign name.
     * Get Campaign
     * @param param the request object
     */
    public getCampaignWithHttpInfo(param: CampaignsApiGetCampaignRequest, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsGetResponseBody>> {
        return this.api.getCampaignWithHttpInfo(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves the campaign with the given campaign ID or campaign name.
     * Get Campaign
     * @param param the request object
     */
    public getCampaign(param: CampaignsApiGetCampaignRequest, options?: ConfigurationOptions): Promise<CampaignsGetResponseBody> {
        return this.api.getCampaign(param.campaignId,  options).toPromise();
    }

    /**
     * Returns data for campaign analytics, covering validations, redemptions, publications, and other details specific to a given campaign type. Use start_date and end_date to narrow down the data to specific periods. 🚧 Campaigns created before v20250602 version This endpoint returns analytics data for campaigns that were created after the [v20250602 version](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20250602) was released on 17 June 2025. Older campaigns return empty data.
     * Get Campaign Summary
     * @param param the request object
     */
    public getCampaignSummaryWithHttpInfo(param: CampaignsApiGetCampaignSummaryRequest, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsSummaryGetResponseBody>> {
        return this.api.getCampaignSummaryWithHttpInfo(param.campaignId, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * Returns data for campaign analytics, covering validations, redemptions, publications, and other details specific to a given campaign type. Use start_date and end_date to narrow down the data to specific periods. 🚧 Campaigns created before v20250602 version This endpoint returns analytics data for campaigns that were created after the [v20250602 version](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20250602) was released on 17 June 2025. Older campaigns return empty data.
     * Get Campaign Summary
     * @param param the request object
     */
    public getCampaignSummary(param: CampaignsApiGetCampaignSummaryRequest, options?: ConfigurationOptions): Promise<CampaignsSummaryGetResponseBody> {
        return this.api.getCampaignSummary(param.campaignId, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * Imports vouchers to an **existing** campaign. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Vouchers to Campaign
     * @param param the request object
     */
    public importVouchersToCampaignWithHttpInfo(param: CampaignsApiImportVouchersToCampaignRequest, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsImportCreateResponseBody>> {
        return this.api.importVouchersToCampaignWithHttpInfo(param.campaignId, param.campaignsImportVoucherItem,  options).toPromise();
    }

    /**
     * Imports vouchers to an **existing** campaign. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Vouchers to Campaign
     * @param param the request object
     */
    public importVouchersToCampaign(param: CampaignsApiImportVouchersToCampaignRequest, options?: ConfigurationOptions): Promise<CampaignsImportCreateResponseBody> {
        return this.api.importVouchersToCampaign(param.campaignId, param.campaignsImportVoucherItem,  options).toPromise();
    }

    /**
     * Imports vouchers to an **existing** campaign.   The CSV file has to include headers in the first line.  This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Vouchers to Campaign by CSV
     * @param param the request object
     */
    public importVouchersToCampaignUsingCsvWithHttpInfo(param: CampaignsApiImportVouchersToCampaignUsingCsvRequest, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsImportCsvCreateResponseBody>> {
        return this.api.importVouchersToCampaignUsingCsvWithHttpInfo(param.campaignId, param.file,  options).toPromise();
    }

    /**
     * Imports vouchers to an **existing** campaign.   The CSV file has to include headers in the first line.  This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Vouchers to Campaign by CSV
     * @param param the request object
     */
    public importVouchersToCampaignUsingCsv(param: CampaignsApiImportVouchersToCampaignUsingCsvRequest, options?: ConfigurationOptions): Promise<CampaignsImportCsvCreateResponseBody> {
        return this.api.importVouchersToCampaignUsingCsv(param.campaignId, param.file,  options).toPromise();
    }

    /**
     * Retrieves all transactions for the campaign with the given campaign ID or campaign name. The id filter denotes the unique transaction identifier.  🚧  The endpoint works only for gift card and loyalty campaigns.
     * List Campaign Transactions
     * @param param the request object
     */
    public listCampaignTransactionsWithHttpInfo(param: CampaignsApiListCampaignTransactionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsTransactionsListResponseBody>> {
        return this.api.listCampaignTransactionsWithHttpInfo(param.campaignId, param.limit, param.order, param.startingAfterId, param.filters,  options).toPromise();
    }

    /**
     * Retrieves all transactions for the campaign with the given campaign ID or campaign name. The id filter denotes the unique transaction identifier.  🚧  The endpoint works only for gift card and loyalty campaigns.
     * List Campaign Transactions
     * @param param the request object
     */
    public listCampaignTransactions(param: CampaignsApiListCampaignTransactionsRequest, options?: ConfigurationOptions): Promise<CampaignsTransactionsListResponseBody> {
        return this.api.listCampaignTransactions(param.campaignId, param.limit, param.order, param.startingAfterId, param.filters,  options).toPromise();
    }

    /**
     * Retrieve a list of campaigns in a project.  The campaigns are returned sorted by creation date, with the most recent campaigns appearing first.   When you get a list of campaigns, you can optionally specify query parameters to customize the amount of campaigns returned per call using limit, which page of campaigns to return using page, sort the campaigns using the order query parameter and filter the results by the campaign_type. This method will return an error when trying to return a limit of more than 100 campaigns.
     * List Campaigns
     * @param param the request object
     */
    public listCampaignsWithHttpInfo(param: CampaignsApiListCampaignsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsListResponseBody>> {
        return this.api.listCampaignsWithHttpInfo(param.limit, param.page, param.campaignType, param.expand, param.campaignStatus, param.isReferralCode, param.order, param.filters, param.accessSettings,  options).toPromise();
    }

    /**
     * Retrieve a list of campaigns in a project.  The campaigns are returned sorted by creation date, with the most recent campaigns appearing first.   When you get a list of campaigns, you can optionally specify query parameters to customize the amount of campaigns returned per call using limit, which page of campaigns to return using page, sort the campaigns using the order query parameter and filter the results by the campaign_type. This method will return an error when trying to return a limit of more than 100 campaigns.
     * List Campaigns
     * @param param the request object
     */
    public listCampaigns(param: CampaignsApiListCampaignsRequest = {}, options?: ConfigurationOptions): Promise<CampaignsListResponseBody> {
        return this.api.listCampaigns(param.limit, param.page, param.campaignType, param.expand, param.campaignStatus, param.isReferralCode, param.order, param.filters, param.accessSettings,  options).toPromise();
    }

    /**
     * Updates the specified campaign by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.  Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped.     🚧 Vouchers will be affected  This method will update vouchers aggregated in the campaign. It will affect all vouchers that are not published or redeemed yet.
     * Update Campaign
     * @param param the request object
     */
    public updateCampaignWithHttpInfo(param: CampaignsApiUpdateCampaignRequest, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsUpdateResponseBody>> {
        return this.api.updateCampaignWithHttpInfo(param.campaignId, param.campaignsUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates the specified campaign by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.  Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped.     🚧 Vouchers will be affected  This method will update vouchers aggregated in the campaign. It will affect all vouchers that are not published or redeemed yet.
     * Update Campaign
     * @param param the request object
     */
    public updateCampaign(param: CampaignsApiUpdateCampaignRequest, options?: ConfigurationOptions): Promise<CampaignsUpdateResponseBody> {
        return this.api.updateCampaign(param.campaignId, param.campaignsUpdateRequestBody,  options).toPromise();
    }

}

import { ObservableCategoriesApi } from "./ObservableAPI";
import { CategoriesApiRequestFactory, CategoriesApiResponseProcessor} from "../apis/CategoriesApi";

export interface CategoriesApiCreateCategoryRequest {
    /**
     * Specify the details of the category that you would like to create.
     * @type CategoriesCreateRequestBody
     * @memberof CategoriesApicreateCategory
     */
    categoriesCreateRequestBody?: CategoriesCreateRequestBody
}

export interface CategoriesApiDeleteCategoryRequest {
    /**
     * Unique category ID assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof CategoriesApideleteCategory
     */
    categoryId: string
}

export interface CategoriesApiGetCategoryRequest {
    /**
     * Unique category ID assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof CategoriesApigetCategory
     */
    categoryId: string
}

export interface CategoriesApiListCategoriesRequest {
}

export interface CategoriesApiUpdateCategoryRequest {
    /**
     * Unique category ID assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof CategoriesApiupdateCategory
     */
    categoryId: string
    /**
     * Specify the details of the category that you would like to update.
     * @type CategoriesUpdateRequestBody
     * @memberof CategoriesApiupdateCategory
     */
    categoriesUpdateRequestBody?: CategoriesUpdateRequestBody
}

export class ObjectCategoriesApi {
    private api: ObservableCategoriesApi

    public constructor(configuration: Configuration, requestFactory?: CategoriesApiRequestFactory, responseProcessor?: CategoriesApiResponseProcessor) {
        this.api = new ObservableCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create category with a specific name and hierarchy.
     * Create Category
     * @param param the request object
     */
    public createCategoryWithHttpInfo(param: CategoriesApiCreateCategoryRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CategoriesCreateResponseBody>> {
        return this.api.createCategoryWithHttpInfo(param.categoriesCreateRequestBody,  options).toPromise();
    }

    /**
     * Create category with a specific name and hierarchy.
     * Create Category
     * @param param the request object
     */
    public createCategory(param: CategoriesApiCreateCategoryRequest = {}, options?: ConfigurationOptions): Promise<CategoriesCreateResponseBody> {
        return this.api.createCategory(param.categoriesCreateRequestBody,  options).toPromise();
    }

    /**
     * Delete a category by the category ID.
     * Delete Category
     * @param param the request object
     */
    public deleteCategoryWithHttpInfo(param: CategoriesApiDeleteCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCategoryWithHttpInfo(param.categoryId,  options).toPromise();
    }

    /**
     * Delete a category by the category ID.
     * Delete Category
     * @param param the request object
     */
    public deleteCategory(param: CategoriesApiDeleteCategoryRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCategory(param.categoryId,  options).toPromise();
    }

    /**
     * Retrieve a category by the category ID.
     * Get Category
     * @param param the request object
     */
    public getCategoryWithHttpInfo(param: CategoriesApiGetCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<CategoriesGetResponseBody>> {
        return this.api.getCategoryWithHttpInfo(param.categoryId,  options).toPromise();
    }

    /**
     * Retrieve a category by the category ID.
     * Get Category
     * @param param the request object
     */
    public getCategory(param: CategoriesApiGetCategoryRequest, options?: ConfigurationOptions): Promise<CategoriesGetResponseBody> {
        return this.api.getCategory(param.categoryId,  options).toPromise();
    }

    /**
     * List all categories.
     * List Categories
     * @param param the request object
     */
    public listCategoriesWithHttpInfo(param: CategoriesApiListCategoriesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CategoriesListResponseBody>> {
        return this.api.listCategoriesWithHttpInfo( options).toPromise();
    }

    /**
     * List all categories.
     * List Categories
     * @param param the request object
     */
    public listCategories(param: CategoriesApiListCategoriesRequest = {}, options?: ConfigurationOptions): Promise<CategoriesListResponseBody> {
        return this.api.listCategories( options).toPromise();
    }

    /**
     * Update a category using the category ID.
     * Update Category
     * @param param the request object
     */
    public updateCategoryWithHttpInfo(param: CategoriesApiUpdateCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<CategoriesUpdateResponseBody>> {
        return this.api.updateCategoryWithHttpInfo(param.categoryId, param.categoriesUpdateRequestBody,  options).toPromise();
    }

    /**
     * Update a category using the category ID.
     * Update Category
     * @param param the request object
     */
    public updateCategory(param: CategoriesApiUpdateCategoryRequest, options?: ConfigurationOptions): Promise<CategoriesUpdateResponseBody> {
        return this.api.updateCategory(param.categoryId, param.categoriesUpdateRequestBody,  options).toPromise();
    }

}

import { ObservableClientSideApi } from "./ObservableAPI";
import { ClientSideApiRequestFactory, ClientSideApiResponseProcessor} from "../apis/ClientSideApi";

export interface ClientSideApiCheckEligibilityClientSideRequest {
    /**
     * Define order and customer context.
     * @type ClientQualificationsCheckEligibilityRequestBody
     * @memberof ClientSideApicheckEligibilityClientSide
     */
    clientQualificationsCheckEligibilityRequestBody?: ClientQualificationsCheckEligibilityRequestBody
}

export interface ClientSideApiListPromotionTiersClientSideRequest {
    /**
     * Indicates the origin (scheme, hostname, and port).
     * Defaults to: undefined
     * @type string
     * @memberof ClientSideApilistPromotionTiersClientSide
     */
    origin: string
    /**
     * This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientSideApilistPromotionTiersClientSide
     */
    isAvailable?: boolean
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ClientSideApilistPromotionTiersClientSide
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Defaults to: undefined
     * @type number
     * @memberof ClientSideApilistPromotionTiersClientSide
     */
    page?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListPromotionTiersClientSide
     * @memberof ClientSideApilistPromotionTiersClientSide
     */
    order?: ParameterOrderListPromotionTiersClientSide
}

export interface ClientSideApiRedeemStackedDiscountsClientSideRequest {
    /**
     * Indicates the origin (scheme, hostname, and port).
     * Defaults to: undefined
     * @type string
     * @memberof ClientSideApiredeemStackedDiscountsClientSide
     */
    origin: string
    /**
     * 
     * @type ClientRedemptionsRedeemRequestBody
     * @memberof ClientSideApiredeemStackedDiscountsClientSide
     */
    clientRedemptionsRedeemRequestBody?: ClientRedemptionsRedeemRequestBody
}

export interface ClientSideApiTrackCustomEventClientSideRequest {
    /**
     * Indicates the origin (scheme, hostname, and port).
     * Defaults to: undefined
     * @type string
     * @memberof ClientSideApitrackCustomEventClientSide
     */
    origin: string
    /**
     * Specify the details of the custom event.
     * @type ClientEventsCreateRequestBody
     * @memberof ClientSideApitrackCustomEventClientSide
     */
    clientEventsCreateRequestBody?: ClientEventsCreateRequestBody
}

export interface ClientSideApiValidateStackedDiscountsClientSideRequest {
    /**
     * Indicates the origin (scheme, hostname, and port).
     * Defaults to: undefined
     * @type string
     * @memberof ClientSideApivalidateStackedDiscountsClientSide
     */
    origin: string
    /**
     * 
     * @type ClientValidationsValidateRequestBody
     * @memberof ClientSideApivalidateStackedDiscountsClientSide
     */
    clientValidationsValidateRequestBody?: ClientValidationsValidateRequestBody
}

export class ObjectClientSideApi {
    private api: ObservableClientSideApi

    public constructor(configuration: Configuration, requestFactory?: ClientSideApiRequestFactory, responseProcessor?: ClientSideApiResponseProcessor) {
        this.api = new ObservableClientSideApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read our dedicated guide to learn about some use cases this endpoint can cover [here](/guides/checking-eligibility). # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.
     * Check Eligibility (client-side)
     * @param param the request object
     */
    public checkEligibilityClientSideWithHttpInfo(param: ClientSideApiCheckEligibilityClientSideRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ClientQualificationsCheckEligibilityResponseBody>> {
        return this.api.checkEligibilityClientSideWithHttpInfo(param.clientQualificationsCheckEligibilityRequestBody,  options).toPromise();
    }

    /**
     * Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read our dedicated guide to learn about some use cases this endpoint can cover [here](/guides/checking-eligibility). # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.
     * Check Eligibility (client-side)
     * @param param the request object
     */
    public checkEligibilityClientSide(param: ClientSideApiCheckEligibilityClientSideRequest = {}, options?: ConfigurationOptions): Promise<ClientQualificationsCheckEligibilityResponseBody> {
        return this.api.checkEligibilityClientSide(param.clientQualificationsCheckEligibilityRequestBody,  options).toPromise();
    }

    /**
     * This method enables you to list promotion tiers.
     * List Promotion Tiers (client-side)
     * @param param the request object
     */
    public listPromotionTiersClientSideWithHttpInfo(param: ClientSideApiListPromotionTiersClientSideRequest, options?: ConfigurationOptions): Promise<HttpInfo<ClientPromotionsTiersListResponseBody>> {
        return this.api.listPromotionTiersClientSideWithHttpInfo(param.origin, param.isAvailable, param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * This method enables you to list promotion tiers.
     * List Promotion Tiers (client-side)
     * @param param the request object
     */
    public listPromotionTiersClientSide(param: ClientSideApiListPromotionTiersClientSideRequest, options?: ConfigurationOptions): Promise<ClientPromotionsTiersListResponseBody> {
        return this.api.listPromotionTiersClientSide(param.origin, param.isAvailable, param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications. # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:    📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).
     * Redeem Stackable Discounts (client-side)
     * @param param the request object
     */
    public redeemStackedDiscountsClientSideWithHttpInfo(param: ClientSideApiRedeemStackedDiscountsClientSideRequest, options?: ConfigurationOptions): Promise<HttpInfo<ClientRedemptionsRedeemResponseBody>> {
        return this.api.redeemStackedDiscountsClientSideWithHttpInfo(param.origin, param.clientRedemptionsRedeemRequestBody,  options).toPromise();
    }

    /**
     * This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications. # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:    📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).
     * Redeem Stackable Discounts (client-side)
     * @param param the request object
     */
    public redeemStackedDiscountsClientSide(param: ClientSideApiRedeemStackedDiscountsClientSideRequest, options?: ConfigurationOptions): Promise<ClientRedemptionsRedeemResponseBody> {
        return this.api.redeemStackedDiscountsClientSide(param.origin, param.clientRedemptionsRedeemRequestBody,  options).toPromise();
    }

    /**
     * To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.
     * Track Custom Event (client-side)
     * @param param the request object
     */
    public trackCustomEventClientSideWithHttpInfo(param: ClientSideApiTrackCustomEventClientSideRequest, options?: ConfigurationOptions): Promise<HttpInfo<ClientEventsCreateResponseBody>> {
        return this.api.trackCustomEventClientSideWithHttpInfo(param.origin, param.clientEventsCreateRequestBody,  options).toPromise();
    }

    /**
     * To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.
     * Track Custom Event (client-side)
     * @param param the request object
     */
    public trackCustomEventClientSide(param: ClientSideApiTrackCustomEventClientSideRequest, options?: ConfigurationOptions): Promise<ClientEventsCreateResponseBody> {
        return this.api.trackCustomEventClientSide(param.origin, param.clientEventsCreateRequestBody,  options).toPromise();
    }

    /**
     * Verify redeemables provided in the request. This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications.
     * Validate Stackable Discounts (client-side)
     * @param param the request object
     */
    public validateStackedDiscountsClientSideWithHttpInfo(param: ClientSideApiValidateStackedDiscountsClientSideRequest, options?: ConfigurationOptions): Promise<HttpInfo<ClientValidationsValidateResponseBody>> {
        return this.api.validateStackedDiscountsClientSideWithHttpInfo(param.origin, param.clientValidationsValidateRequestBody,  options).toPromise();
    }

    /**
     * Verify redeemables provided in the request. This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications.
     * Validate Stackable Discounts (client-side)
     * @param param the request object
     */
    public validateStackedDiscountsClientSide(param: ClientSideApiValidateStackedDiscountsClientSideRequest, options?: ConfigurationOptions): Promise<ClientValidationsValidateResponseBody> {
        return this.api.validateStackedDiscountsClientSide(param.origin, param.clientValidationsValidateRequestBody,  options).toPromise();
    }

}

import { ObservableCustomersApi } from "./ObservableAPI";
import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";

export interface CustomersApiCreateCustomerRequest {
    /**
     * Create a customer with specified parameters.
     * @type CustomersCreateRequestBody
     * @memberof CustomersApicreateCustomer
     */
    customersCreateRequestBody?: CustomersCreateRequestBody
}

export interface CustomersApiCustomerPermanentlyDeletionRequest {
    /**
     * A Voucherify customers id or source_id.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApicustomerPermanentlyDeletion
     */
    customerId: string
}

export interface CustomersApiDeleteCustomerRequest {
    /**
     * A Voucherify customers id or source_id.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApideleteCustomer
     */
    customerId: string
}

export interface CustomersApiGetCustomerRequest {
    /**
     * A Voucherify customers id or source_id.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApigetCustomer
     */
    customerId: string
}

export interface CustomersApiImportCustomersUsingCsvRequest {
    /**
     * File path.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof CustomersApiimportCustomersUsingCsv
     */
    file?: HttpFile
}

export interface CustomersApiListCustomerActivityRequest {
    /**
     * A Voucherify customers id or source ID of the customer who performed the activities.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApilistCustomerActivity
     */
    customerId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof CustomersApilistCustomerActivity
     */
    limit?: number
    /**
     * Apply this filter to order the events according the date and time when it was created. 
     * Defaults to: undefined
     * @type ParameterOrderCreatedAt
     * @memberof CustomersApilistCustomerActivity
     */
    order?: ParameterOrderCreatedAt
    /**
     * A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApilistCustomerActivity
     */
    startingAfterId?: string
    /**
     * Timestamp representing the date and time which results must begin on. Represented in ISO 8601 format.
     * Defaults to: undefined
     * @type Date
     * @memberof CustomersApilistCustomerActivity
     */
    startDate?: Date
    /**
     * Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     * Defaults to: undefined
     * @type Date
     * @memberof CustomersApilistCustomerActivity
     */
    endDate?: Date
    /**
     * Requests only events related to specific campaign identified by its ID.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApilistCustomerActivity
     */
    campaignId?: string
    /**
     * Filters related customers activity for the selected campaign types. Allowed values:  DISCOUNT_COUPONS, REFERRAL_PROGRAM, GIFT_VOUCHERS, PROMOTION, LOYALTY_PROGRAM.
     * Defaults to: undefined
     * @type ParameterCampaignType
     * @memberof CustomersApilistCustomerActivity
     */
    campaignType?: ParameterCampaignType
    /**
     * Filters activities for actions or effects. Allowed values:  ACTION, EFFECT.
     * Defaults to: undefined
     * @type ParameterActivityCategory
     * @memberof CustomersApilistCustomerActivity
     */
    category?: ParameterActivityCategory
    /**
     * Event name of the customer event.
     * Defaults to: undefined
     * @type ParameterCustomerEvent
     * @memberof CustomersApilistCustomerActivity
     */
    type?: ParameterCustomerEvent
}

export interface CustomersApiListCustomerRedeemablesRequest {
    /**
     * Unique identifier of a customer represented by an internal customer ID or customer source ID.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApilistCustomerRedeemables
     */
    customerId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof CustomersApilistCustomerRedeemables
     */
    limit?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListRedeemables
     * @memberof CustomersApilistCustomerRedeemables
     */
    order?: ParameterOrderListRedeemables
    /**
     * A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApilistCustomerRedeemables
     */
    startingAfterId?: string
    /**
     * Filters for listing customer redeemables.
     * Defaults to: undefined
     * @type ParameterFiltersListCustomerRedeemables
     * @memberof CustomersApilistCustomerRedeemables
     */
    filters?: ParameterFiltersListCustomerRedeemables
}

export interface CustomersApiListCustomerSegmentsRequest {
    /**
     * Unique identifier of a customer represented by an internal customer ID or customer source ID.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApilistCustomerSegments
     */
    customerId: string
}

export interface CustomersApiListCustomersRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof CustomersApilistCustomers
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1, the highest value is 99.
     * Minimum: 1
     * Maximum: 99
     * Defaults to: undefined
     * @type number
     * @memberof CustomersApilistCustomers
     */
    page?: number
    /**
     * Limit the customers to the ones that have this specific email address.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApilistCustomers
     */
    email?: string
    /**
     * Limit the customers to the ones that are located in the specified city.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApilistCustomers
     */
    city?: string
    /**
     * Filter customers by the name property.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApilistCustomers
     */
    name?: string
    /**
     * Filter customers by the segment id.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApilistCustomers
     */
    segmentId?: string
    /**
     * Filter customers by date customer was created.
     * Defaults to: undefined
     * @type Date
     * @memberof CustomersApilistCustomers
     */
    createdAtBefore?: Date
    /**
     * Filter customers by date customer was created.
     * Defaults to: undefined
     * @type Date
     * @memberof CustomersApilistCustomers
     */
    createdAtAfter?: Date
    /**
     * Filter customers by date customer was updated last time.
     * Defaults to: undefined
     * @type Date
     * @memberof CustomersApilistCustomers
     */
    updatedAtBefore?: Date
    /**
     * Filter customers by date customer was updated last time.
     * Defaults to: undefined
     * @type Date
     * @memberof CustomersApilistCustomers
     */
    updatedAtAfter?: Date
    /**
     * This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListCustomers
     * @memberof CustomersApilistCustomers
     */
    order?: ParameterOrderListCustomers
    /**
     * A cursor for pagination. This is a date-time value that defines your place in the list based on created_at property from the customer object. For instance, if you make a list request and receive 100 objects, ending with an object created at 2020-05-24T13:43:09.024Z, your subsequent call can include starting_after 2020-05-24T13:43:09.024Z in order to fetch the next page of the list.  
     * Defaults to: undefined
     * @type Date
     * @memberof CustomersApilistCustomers
     */
    startingAfter?: Date
}

export interface CustomersApiUpdateCustomerRequest {
    /**
     * A Voucherify customers id or source_id.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApiupdateCustomer
     */
    customerId: string
    /**
     * Specify the parameters to be updated.
     * @type CustomersUpdateRequestBody
     * @memberof CustomersApiupdateCustomer
     */
    customersUpdateRequestBody?: CustomersUpdateRequestBody
}

export interface CustomersApiUpdateCustomersInBulkRequest {
    /**
     * List the customer fields to be updated in each customer object.
     * @type Array&lt;CustomersUpdateInBulkRequestBody&gt;
     * @memberof CustomersApiupdateCustomersInBulk
     */
    customersUpdateInBulkRequestBody?: Array<CustomersUpdateInBulkRequestBody>
}

export interface CustomersApiUpdateCustomersMetadataInBulkRequest {
    /**
     * List the source_ids of the customers you would like to update with the metadata key/value pairs.
     * @type CustomersMetadataUpdateInBulkRequestBody
     * @memberof CustomersApiupdateCustomersMetadataInBulk
     */
    customersMetadataUpdateInBulkRequestBody?: CustomersMetadataUpdateInBulkRequestBody
}

export class ObjectCustomersApi {
    private api: ObservableCustomersApi

    public constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor) {
        this.api = new ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a customer object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the customer database, Voucherify will return a related customer object with updated fields.
     * Create Customer
     * @param param the request object
     */
    public createCustomerWithHttpInfo(param: CustomersApiCreateCustomerRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CustomersCreateResponseBody>> {
        return this.api.createCustomerWithHttpInfo(param.customersCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a customer object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the customer database, Voucherify will return a related customer object with updated fields.
     * Create Customer
     * @param param the request object
     */
    public createCustomer(param: CustomersApiCreateCustomerRequest = {}, options?: ConfigurationOptions): Promise<CustomersCreateResponseBody> {
        return this.api.createCustomer(param.customersCreateRequestBody,  options).toPromise();
    }

    /**
     * The organization user can remove consumer data permanently from the Voucherify system by using this API method. It deletes all customer data and connected resources. It makes the customer profile forgotten by Voucherify.
     * Delete Customer Permanently
     * @param param the request object
     */
    public customerPermanentlyDeletionWithHttpInfo(param: CustomersApiCustomerPermanentlyDeletionRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomersPermanentDeletionCreateResponseBody>> {
        return this.api.customerPermanentlyDeletionWithHttpInfo(param.customerId,  options).toPromise();
    }

    /**
     * The organization user can remove consumer data permanently from the Voucherify system by using this API method. It deletes all customer data and connected resources. It makes the customer profile forgotten by Voucherify.
     * Delete Customer Permanently
     * @param param the request object
     */
    public customerPermanentlyDeletion(param: CustomersApiCustomerPermanentlyDeletionRequest, options?: ConfigurationOptions): Promise<CustomersPermanentDeletionCreateResponseBody> {
        return this.api.customerPermanentlyDeletion(param.customerId,  options).toPromise();
    }

    /**
     * This method deletes a customer.
     * Delete Customer
     * @param param the request object
     */
    public deleteCustomerWithHttpInfo(param: CustomersApiDeleteCustomerRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCustomerWithHttpInfo(param.customerId,  options).toPromise();
    }

    /**
     * This method deletes a customer.
     * Delete Customer
     * @param param the request object
     */
    public deleteCustomer(param: CustomersApiDeleteCustomerRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCustomer(param.customerId,  options).toPromise();
    }

    /**
     * Retrieves details of a given customer by customers id or source_id.
     * Get Customer
     * @param param the request object
     */
    public getCustomerWithHttpInfo(param: CustomersApiGetCustomerRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomersGetResponseBody>> {
        return this.api.getCustomerWithHttpInfo(param.customerId,  options).toPromise();
    }

    /**
     * Retrieves details of a given customer by customers id or source_id.
     * Get Customer
     * @param param the request object
     */
    public getCustomer(param: CustomersApiGetCustomerRequest, options?: ConfigurationOptions): Promise<CustomersGetResponseBody> {
        return this.api.getCustomer(param.customerId,  options).toPromise();
    }

    /**
     * This API method lets you import or update customer data. To get a proper and valid response, please send a CSV file with data separated by commas.   # Request Example # CSV File Format The CSV file has to include headers in the first line. All properties which cannot be mapped to standard customer fields will be added to the metadata object.  📘 Standard customer fields mapping  **No spaces allowed in field names**    Id, Name, Email, Phone, Birthdate, Source_id, Address_line_1, Address_line_2, Address_Postal_Code, Address_City, Address_State, Address_Country, Description, Metadata_name_1, Metadata_name_2 # Update Customers using CSV If you would like to update customers data, you can do it using the CSV file with new data. However, remember to include a source_id in your CSV file to manage the update successfully. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import and Update Customers using CSV
     * @param param the request object
     */
    public importCustomersUsingCsvWithHttpInfo(param: CustomersApiImportCustomersUsingCsvRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CustomersImportCsvCreateResponseBody>> {
        return this.api.importCustomersUsingCsvWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * This API method lets you import or update customer data. To get a proper and valid response, please send a CSV file with data separated by commas.   # Request Example # CSV File Format The CSV file has to include headers in the first line. All properties which cannot be mapped to standard customer fields will be added to the metadata object.  📘 Standard customer fields mapping  **No spaces allowed in field names**    Id, Name, Email, Phone, Birthdate, Source_id, Address_line_1, Address_line_2, Address_Postal_Code, Address_City, Address_State, Address_Country, Description, Metadata_name_1, Metadata_name_2 # Update Customers using CSV If you would like to update customers data, you can do it using the CSV file with new data. However, remember to include a source_id in your CSV file to manage the update successfully. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import and Update Customers using CSV
     * @param param the request object
     */
    public importCustomersUsingCsv(param: CustomersApiImportCustomersUsingCsvRequest = {}, options?: ConfigurationOptions): Promise<CustomersImportCsvCreateResponseBody> {
        return this.api.importCustomersUsingCsv(param.file,  options).toPromise();
    }

    /**
     * Retrieves activity details of a given customer by customers id or source_id.
     * List Customer Activity
     * @param param the request object
     */
    public listCustomerActivityWithHttpInfo(param: CustomersApiListCustomerActivityRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomersActivityListResponseBody>> {
        return this.api.listCustomerActivityWithHttpInfo(param.customerId, param.limit, param.order, param.startingAfterId, param.startDate, param.endDate, param.campaignId, param.campaignType, param.category, param.type,  options).toPromise();
    }

    /**
     * Retrieves activity details of a given customer by customers id or source_id.
     * List Customer Activity
     * @param param the request object
     */
    public listCustomerActivity(param: CustomersApiListCustomerActivityRequest, options?: ConfigurationOptions): Promise<CustomersActivityListResponseBody> {
        return this.api.listCustomerActivity(param.customerId, param.limit, param.order, param.startingAfterId, param.startDate, param.endDate, param.campaignId, param.campaignType, param.category, param.type,  options).toPromise();
    }

    /**
     * Retrieves all the redeemables that have been assigned to the customer. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)
     * List Customer\'s Redeemables
     * @param param the request object
     */
    public listCustomerRedeemablesWithHttpInfo(param: CustomersApiListCustomerRedeemablesRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomersRedeemablesListResponseBody>> {
        return this.api.listCustomerRedeemablesWithHttpInfo(param.customerId, param.limit, param.order, param.startingAfterId, param.filters,  options).toPromise();
    }

    /**
     * Retrieves all the redeemables that have been assigned to the customer. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)
     * List Customer\'s Redeemables
     * @param param the request object
     */
    public listCustomerRedeemables(param: CustomersApiListCustomerRedeemablesRequest, options?: ConfigurationOptions): Promise<CustomersRedeemablesListResponseBody> {
        return this.api.listCustomerRedeemables(param.customerId, param.limit, param.order, param.startingAfterId, param.filters,  options).toPromise();
    }

    /**
     * Returns the list of segments IDs to which the customer belongs to.   If you pass a customerId which is not stored and recognized by Voucherify as an existing customer in the system, the response will generate a list of segments that the customer would potentialy qualify for if they were to become a customer tracked in the system.
     * List Customer\'s Segments
     * @param param the request object
     */
    public listCustomerSegmentsWithHttpInfo(param: CustomersApiListCustomerSegmentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomersSegmentsListResponseBody>> {
        return this.api.listCustomerSegmentsWithHttpInfo(param.customerId,  options).toPromise();
    }

    /**
     * Returns the list of segments IDs to which the customer belongs to.   If you pass a customerId which is not stored and recognized by Voucherify as an existing customer in the system, the response will generate a list of segments that the customer would potentialy qualify for if they were to become a customer tracked in the system.
     * List Customer\'s Segments
     * @param param the request object
     */
    public listCustomerSegments(param: CustomersApiListCustomerSegmentsRequest, options?: ConfigurationOptions): Promise<CustomersSegmentsListResponseBody> {
        return this.api.listCustomerSegments(param.customerId,  options).toPromise();
    }

    /**
     * Returns a list of customers.
     * List Customers
     * @param param the request object
     */
    public listCustomersWithHttpInfo(param: CustomersApiListCustomersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CustomersListResponseBody>> {
        return this.api.listCustomersWithHttpInfo(param.limit, param.page, param.email, param.city, param.name, param.segmentId, param.createdAtBefore, param.createdAtAfter, param.updatedAtBefore, param.updatedAtAfter, param.order, param.startingAfter,  options).toPromise();
    }

    /**
     * Returns a list of customers.
     * List Customers
     * @param param the request object
     */
    public listCustomers(param: CustomersApiListCustomersRequest = {}, options?: ConfigurationOptions): Promise<CustomersListResponseBody> {
        return this.api.listCustomers(param.limit, param.page, param.email, param.city, param.name, param.segmentId, param.createdAtBefore, param.createdAtAfter, param.updatedAtBefore, param.updatedAtAfter, param.order, param.startingAfter,  options).toPromise();
    }

    /**
     * Updates the specified customer by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.
     * Update Customer
     * @param param the request object
     */
    public updateCustomerWithHttpInfo(param: CustomersApiUpdateCustomerRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomersUpdateResponseBody>> {
        return this.api.updateCustomerWithHttpInfo(param.customerId, param.customersUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates the specified customer by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.
     * Update Customer
     * @param param the request object
     */
    public updateCustomer(param: CustomersApiUpdateCustomerRequest, options?: ConfigurationOptions): Promise<CustomersUpdateResponseBody> {
        return this.api.updateCustomer(param.customerId, param.customersUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates customers in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a customer object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Customers in Bulk
     * @param param the request object
     */
    public updateCustomersInBulkWithHttpInfo(param: CustomersApiUpdateCustomersInBulkRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CustomersUpdateInBulkResponseBody>> {
        return this.api.updateCustomersInBulkWithHttpInfo(param.customersUpdateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Updates customers in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a customer object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Customers in Bulk
     * @param param the request object
     */
    public updateCustomersInBulk(param: CustomersApiUpdateCustomersInBulkRequest = {}, options?: ConfigurationOptions): Promise<CustomersUpdateInBulkResponseBody> {
        return this.api.updateCustomersInBulk(param.customersUpdateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Updates metadata parameters for a list of customers. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Customers\' Metadata in Bulk
     * @param param the request object
     */
    public updateCustomersMetadataInBulkWithHttpInfo(param: CustomersApiUpdateCustomersMetadataInBulkRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CustomersMetadataUpdateInBulkResponseBody>> {
        return this.api.updateCustomersMetadataInBulkWithHttpInfo(param.customersMetadataUpdateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Updates metadata parameters for a list of customers. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Customers\' Metadata in Bulk
     * @param param the request object
     */
    public updateCustomersMetadataInBulk(param: CustomersApiUpdateCustomersMetadataInBulkRequest = {}, options?: ConfigurationOptions): Promise<CustomersMetadataUpdateInBulkResponseBody> {
        return this.api.updateCustomersMetadataInBulk(param.customersMetadataUpdateInBulkRequestBody,  options).toPromise();
    }

}

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiTrackCustomEventRequest {
    /**
     * Specify the details of the custom event.
     * @type EventsCreateRequestBody
     * @memberof EventsApitrackCustomEvent
     */
    eventsCreateRequestBody?: EventsCreateRequestBody
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.
     * Track Custom Event
     * @param param the request object
     */
    public trackCustomEventWithHttpInfo(param: EventsApiTrackCustomEventRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<EventsCreateResponseBody>> {
        return this.api.trackCustomEventWithHttpInfo(param.eventsCreateRequestBody,  options).toPromise();
    }

    /**
     * To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.
     * Track Custom Event
     * @param param the request object
     */
    public trackCustomEvent(param: EventsApiTrackCustomEventRequest = {}, options?: ConfigurationOptions): Promise<EventsCreateResponseBody> {
        return this.api.trackCustomEvent(param.eventsCreateRequestBody,  options).toPromise();
    }

}

import { ObservableExportsApi } from "./ObservableAPI";
import { ExportsApiRequestFactory, ExportsApiResponseProcessor} from "../apis/ExportsApi";

export interface ExportsApiCreateExportRequest {
    /**
     * Specify the details of the export that you would like to create.
     * @type ExportsCreateRequestBody
     * @memberof ExportsApicreateExport
     */
    exportsCreateRequestBody?: ExportsCreateRequestBody
}

export interface ExportsApiDeleteExportRequest {
    /**
     * Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
     * Defaults to: undefined
     * @type string
     * @memberof ExportsApideleteExport
     */
    exportId: string
}

export interface ExportsApiDownloadExportRequest {
    /**
     * Unique export object ID.
     * Defaults to: undefined
     * @type string
     * @memberof ExportsApidownloadExport
     */
    exportId: string
    /**
     * Token that was issued to the export, to get this token, get the export first
     * Defaults to: undefined
     * @type string
     * @memberof ExportsApidownloadExport
     */
    token?: string
}

export interface ExportsApiGetExportRequest {
    /**
     * Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
     * Defaults to: undefined
     * @type string
     * @memberof ExportsApigetExport
     */
    exportId: string
}

export interface ExportsApiListExportsRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ExportsApilistExports
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ExportsApilistExports
     */
    page?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListExports
     * @memberof ExportsApilistExports
     */
    order?: ParameterOrderListExports
}

export class ObjectExportsApi {
    private api: ObservableExportsApi

    public constructor(configuration: Configuration, requestFactory?: ExportsApiRequestFactory, responseProcessor?: ExportsApiResponseProcessor) {
        this.api = new ObservableExportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create export object. The export can be any of the following types: voucher, redemption, publication, customer, order, points_expiration, voucher_transactions, product, or sku.   # Defaults If you only specify the object type in the request body without specifying the fields, the API will return the following fields per export object:    📘 Date and time in the export API  The exported date and times are always provided in the UTC time zone. # Fetching particular data sets Using the parameters body parameter, you can narrow down which fields to export and how to filter the results. The fields are an array of strings containing the data that you would like to export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields: # Orders     # Vouchers        # Publications   # Redemptions    # Customers       # Points Expirations    # Gift Card Transactions    # Loyalty Card Transactions   
     * Create Export
     * @param param the request object
     */
    public createExportWithHttpInfo(param: ExportsApiCreateExportRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ExportsCreateResponseBody>> {
        return this.api.createExportWithHttpInfo(param.exportsCreateRequestBody,  options).toPromise();
    }

    /**
     * Create export object. The export can be any of the following types: voucher, redemption, publication, customer, order, points_expiration, voucher_transactions, product, or sku.   # Defaults If you only specify the object type in the request body without specifying the fields, the API will return the following fields per export object:    📘 Date and time in the export API  The exported date and times are always provided in the UTC time zone. # Fetching particular data sets Using the parameters body parameter, you can narrow down which fields to export and how to filter the results. The fields are an array of strings containing the data that you would like to export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields: # Orders     # Vouchers        # Publications   # Redemptions    # Customers       # Points Expirations    # Gift Card Transactions    # Loyalty Card Transactions   
     * Create Export
     * @param param the request object
     */
    public createExport(param: ExportsApiCreateExportRequest = {}, options?: ConfigurationOptions): Promise<ExportsCreateResponseBody> {
        return this.api.createExport(param.exportsCreateRequestBody,  options).toPromise();
    }

    /**
     * This method deletes a previously created export object.
     * Delete Export
     * @param param the request object
     */
    public deleteExportWithHttpInfo(param: ExportsApiDeleteExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteExportWithHttpInfo(param.exportId,  options).toPromise();
    }

    /**
     * This method deletes a previously created export object.
     * Delete Export
     * @param param the request object
     */
    public deleteExport(param: ExportsApiDeleteExportRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteExport(param.exportId,  options).toPromise();
    }

    /**
     * Download the contents of the exported CSV file.   📘 Important notes  **Base URL:**   - https://download.voucherify.io (Europe)   - https://us1.download.voucherify.io (US)   - https://as1.download.voucherify.io (Asia)   **Token:** Can be found within the result parameter of the [Get Export](/api-reference/exports/get-export) method response.
     * Download Export
     * @param param the request object
     */
    public downloadExportWithHttpInfo(param: ExportsApiDownloadExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.downloadExportWithHttpInfo(param.exportId, param.token,  options).toPromise();
    }

    /**
     * Download the contents of the exported CSV file.   📘 Important notes  **Base URL:**   - https://download.voucherify.io (Europe)   - https://us1.download.voucherify.io (US)   - https://as1.download.voucherify.io (Asia)   **Token:** Can be found within the result parameter of the [Get Export](/api-reference/exports/get-export) method response.
     * Download Export
     * @param param the request object
     */
    public downloadExport(param: ExportsApiDownloadExportRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.downloadExport(param.exportId, param.token,  options).toPromise();
    }

    /**
     * Retrieves the URL of the downloadable file, which was generated via the [Create Export](/api-reference/exports/create-export) method.
     * Get Export
     * @param param the request object
     */
    public getExportWithHttpInfo(param: ExportsApiGetExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<ExportsGetResponseBody>> {
        return this.api.getExportWithHttpInfo(param.exportId,  options).toPromise();
    }

    /**
     * Retrieves the URL of the downloadable file, which was generated via the [Create Export](/api-reference/exports/create-export) method.
     * Get Export
     * @param param the request object
     */
    public getExport(param: ExportsApiGetExportRequest, options?: ConfigurationOptions): Promise<ExportsGetResponseBody> {
        return this.api.getExport(param.exportId,  options).toPromise();
    }

    /**
     * List all exports. 
     * List Exports
     * @param param the request object
     */
    public listExportsWithHttpInfo(param: ExportsApiListExportsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ExportsListResponseBody>> {
        return this.api.listExportsWithHttpInfo(param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * List all exports. 
     * List Exports
     * @param param the request object
     */
    public listExports(param: ExportsApiListExportsRequest = {}, options?: ConfigurationOptions): Promise<ExportsListResponseBody> {
        return this.api.listExports(param.limit, param.page, param.order,  options).toPromise();
    }

}

import { ObservableLocationsApi } from "./ObservableAPI";
import { LocationsApiRequestFactory, LocationsApiResponseProcessor} from "../apis/LocationsApi";

export interface LocationsApiGetLocationRequest {
    /**
     * The unique location ID.
     * Defaults to: undefined
     * @type string
     * @memberof LocationsApigetLocation
     */
    locationId: string
}

export interface LocationsApiListLocationsRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LocationsApilistLocations
     */
    limit?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListLocations
     * @memberof LocationsApilistLocations
     */
    order?: ParameterOrderListLocations
    /**
     * Filter the locations using one of the available filters.
     * Defaults to: undefined
     * @type ParameterFiltersListLocations
     * @memberof LocationsApilistLocations
     */
    filters?: ParameterFiltersListLocations
    /**
     * A filter on the list based on the end date. This will filter out all locations whose end date falls before the specified date and time. A date value must be presented in the ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16).
     * Defaults to: undefined
     * @type Date
     * @memberof LocationsApilistLocations
     */
    endDate?: Date
}

export class ObjectLocationsApi {
    private api: ObservableLocationsApi

    public constructor(configuration: Configuration, requestFactory?: LocationsApiRequestFactory, responseProcessor?: LocationsApiResponseProcessor) {
        this.api = new ObservableLocationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a location object.
     * Get Location
     * @param param the request object
     */
    public getLocationWithHttpInfo(param: LocationsApiGetLocationRequest, options?: ConfigurationOptions): Promise<HttpInfo<LocationsGetResponseBody>> {
        return this.api.getLocationWithHttpInfo(param.locationId,  options).toPromise();
    }

    /**
     * Returns a location object.
     * Get Location
     * @param param the request object
     */
    public getLocation(param: LocationsApiGetLocationRequest, options?: ConfigurationOptions): Promise<LocationsGetResponseBody> {
        return this.api.getLocation(param.locationId,  options).toPromise();
    }

    /**
     * Returns a list of your locations.
     * List Locations
     * @param param the request object
     */
    public listLocationsWithHttpInfo(param: LocationsApiListLocationsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<LocationsListResponseBody>> {
        return this.api.listLocationsWithHttpInfo(param.limit, param.order, param.filters, param.endDate,  options).toPromise();
    }

    /**
     * Returns a list of your locations.
     * List Locations
     * @param param the request object
     */
    public listLocations(param: LocationsApiListLocationsRequest = {}, options?: ConfigurationOptions): Promise<LocationsListResponseBody> {
        return this.api.listLocations(param.limit, param.order, param.filters, param.endDate,  options).toPromise();
    }

}

import { ObservableLoyaltiesApi } from "./ObservableAPI";
import { LoyaltiesApiRequestFactory, LoyaltiesApiResponseProcessor} from "../apis/LoyaltiesApi";

export interface LoyaltiesApiActivateMemberPendingPointsRequest {
    /**
     * Unique loyalty card code assigned to a particular customer.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiactivateMemberPendingPoints
     */
    memberId: string
    /**
     * Unique pending point identifier, assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiactivateMemberPendingPoints
     */
    pendingPointsId: string
}

export interface LoyaltiesApiAddMemberRequest {
    /**
     * Unique campaign ID of the loyalty program.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiaddMember
     */
    campaignId: string
    /**
     * Provide details to whom the loyalty card should be assigned.     You can choose to either specify the exact loyalty card code that you want to publish from existin (non-assigned) codes, or choose not to specify a voucher code. If you choose not to specify a code in the request paylaod, then the system will choose the next available voucher code available to be assigned to a customer.   You can also include metadata in the request payload. This metadata will be assigned to the publication object, but will not be returned in the response to this endpoint. To see of publications (assignments of particular codes to customers) and publication metadata, use the [List Publications](/api-reference/publications/list-publications) endpoint.
     * @type LoyaltiesMembersCreateRequestBody
     * @memberof LoyaltiesApiaddMember
     */
    loyaltiesMembersCreateRequestBody?: LoyaltiesMembersCreateRequestBody
}

export interface LoyaltiesApiAdjustMemberPendingPointsRequest {
    /**
     * Unique loyalty card code assigned to a particular customer.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiadjustMemberPendingPoints
     */
    memberId: string
    /**
     * Unique pending point identifier, assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiadjustMemberPendingPoints
     */
    pendingPointsId: string
    /**
     * Define the number of pending points to be added or subtracted.
     * @type LoyaltiesMembersPendingPointsBalanceRequestBody
     * @memberof LoyaltiesApiadjustMemberPendingPoints
     */
    loyaltiesMembersPendingPointsBalanceRequestBody?: LoyaltiesMembersPendingPointsBalanceRequestBody
}

export interface LoyaltiesApiCancelMemberPendingPointsRequest {
    /**
     * Unique loyalty card code assigned to a particular customer.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApicancelMemberPendingPoints
     */
    memberId: string
    /**
     * Unique pending point identifier, assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApicancelMemberPendingPoints
     */
    pendingPointsId: string
}

export interface LoyaltiesApiCreateEarningRuleRequest {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApicreateEarningRule
     */
    campaignId: string
    /**
     * Customize the request body based on the type of earning rules you would like to create. The request body is an array of objects. The required minimum properties to include in the payload for each object are event and loyalty. Additionally, if you choose to add a validity_timeframe, you must include a start_date. Furthermore, an earning rule event type:   - customer.segment.entered requires a segment object - a custom event requires a custom_event object - a customer.loyalty.tier.joined, customer.loyalty.tier.left, customer.loyalty.tier.upgraded, customer.loyalty.tier.downgraded, customer.loyalty.tier.prolonged requires a loyalty_tier object
     * @type Array&lt;LoyaltiesEarningRulesCreateRequestBodyItem&gt;
     * @memberof LoyaltiesApicreateEarningRule
     */
    loyaltiesEarningRulesCreateRequestBodyItem?: Array<LoyaltiesEarningRulesCreateRequestBodyItem>
}

export interface LoyaltiesApiCreateInBulkLoyaltyTiersRequest {
    /**
     * Unique loyalty campaign ID or name.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApicreateInBulkLoyaltyTiers
     */
    campaignId: string
    /**
     * Provide tier definitions you want to add to existing loyalty campaign.
     * @type Array&lt;LoyaltiesTiersCreateInBulkRequestBodyItem&gt;
     * @memberof LoyaltiesApicreateInBulkLoyaltyTiers
     */
    loyaltiesTiersCreateInBulkRequestBodyItem?: Array<LoyaltiesTiersCreateInBulkRequestBodyItem>
}

export interface LoyaltiesApiCreateLoyaltyProgramRequest {
    /**
     * Specify the loyalty campaign details.
     * @type LoyaltiesCreateCampaignRequestBody
     * @memberof LoyaltiesApicreateLoyaltyProgram
     */
    loyaltiesCreateCampaignRequestBody?: LoyaltiesCreateCampaignRequestBody
}

export interface LoyaltiesApiCreatePointsExpirationExportRequest {
    /**
     * Unique campaign ID or name.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApicreatePointsExpirationExport
     */
    campaignId: string
    /**
     * Specify the data filters, types of data to return and order in which the results should be returned.
     * @type LoyaltiesPointsExpirationExportCreateRequestBody
     * @memberof LoyaltiesApicreatePointsExpirationExport
     */
    loyaltiesPointsExpirationExportCreateRequestBody?: LoyaltiesPointsExpirationExportCreateRequestBody
}

export interface LoyaltiesApiCreateRewardAssignment1Request {
    /**
     * Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApicreateRewardAssignment1
     */
    campaignId: string
    /**
     * Define the cost of the rewards in loyalty points.
     * @type Array&lt;LoyaltiesRewardsCreateAssignmentItemRequestBody&gt;
     * @memberof LoyaltiesApicreateRewardAssignment1
     */
    loyaltiesRewardsCreateAssignmentItemRequestBody?: Array<LoyaltiesRewardsCreateAssignmentItemRequestBody>
}

export interface LoyaltiesApiDeleteEarningRuleRequest {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApideleteEarningRule
     */
    campaignId: string
    /**
     * A unique earning rule ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApideleteEarningRule
     */
    earningRuleId: string
}

export interface LoyaltiesApiDeleteLoyaltyProgramRequest {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApideleteLoyaltyProgram
     */
    campaignId: string
    /**
     * If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to the bin. Going forward, the user will be able to create the next campaign with the same name.
     * Defaults to: undefined
     * @type boolean
     * @memberof LoyaltiesApideleteLoyaltyProgram
     */
    force?: boolean
}

export interface LoyaltiesApiDeleteRewardAssignment1Request {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApideleteRewardAssignment1
     */
    campaignId: string
    /**
     * A unique reward assignment ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApideleteRewardAssignment1
     */
    assignmentId: string
}

export interface LoyaltiesApiDisableEarningRuleRequest {
    /**
     * Unique campaign ID or name.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApidisableEarningRule
     */
    campaignId: string
    /**
     * Unique identifier of an earning rule, assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApidisableEarningRule
     */
    earningRuleId: string
}

export interface LoyaltiesApiEnableEarningRuleRequest {
    /**
     * Unique campaign ID or name.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApienableEarningRule
     */
    campaignId: string
    /**
     * Unique identifier of an earning rule, assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApienableEarningRule
     */
    earningRuleId: string
}

export interface LoyaltiesApiExportLoyaltyCampaignTransactionsRequest {
    /**
     * You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiexportLoyaltyCampaignTransactions
     */
    campaignId: string
    /**
     * Specify the parameters for the transaction export.
     * @type LoyaltiesTransactionsExportCreateRequestBody
     * @memberof LoyaltiesApiexportLoyaltyCampaignTransactions
     */
    loyaltiesTransactionsExportCreateRequestBody?: LoyaltiesTransactionsExportCreateRequestBody
}

export interface LoyaltiesApiExportLoyaltyCardTransactionsRequest {
    /**
     * A unique code identifying the loyalty card that you are looking to export transaction data for.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiexportLoyaltyCardTransactions
     */
    memberId: string
    /**
     * Specify the parameters and filters for the transaction export.
     * @type LoyaltiesMembersTransactionsExportCreateRequestBody
     * @memberof LoyaltiesApiexportLoyaltyCardTransactions
     */
    loyaltiesMembersTransactionsExportCreateRequestBody?: LoyaltiesMembersTransactionsExportCreateRequestBody
}

export interface LoyaltiesApiExportLoyaltyCardTransactions1Request {
    /**
     * A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to export.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiexportLoyaltyCardTransactions1
     */
    campaignId: string
    /**
     * A unique code identifying the loyalty card that you are looking to export transaction data for.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiexportLoyaltyCardTransactions1
     */
    memberId: string
    /**
     * Specify the parameters and filters for the transaction export.
     * @type LoyaltiesMembersTransactionsExportCreateRequestBody
     * @memberof LoyaltiesApiexportLoyaltyCardTransactions1
     */
    loyaltiesMembersTransactionsExportCreateRequestBody?: LoyaltiesMembersTransactionsExportCreateRequestBody
}

export interface LoyaltiesApiGetEarningRuleRequest {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetEarningRule
     */
    campaignId: string
    /**
     * A unique earning rule ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetEarningRule
     */
    earningRuleId: string
}

export interface LoyaltiesApiGetLoyaltyProgramRequest {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetLoyaltyProgram
     */
    campaignId: string
}

export interface LoyaltiesApiGetLoyaltyTierRequest {
    /**
     * Unique loyalty campaign ID or name.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetLoyaltyTier
     */
    campaignId: string
    /**
     * Unique loyalty tier ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetLoyaltyTier
     */
    loyaltyTierId: string
}

export interface LoyaltiesApiGetMemberRequest {
    /**
     * Unique loyalty card code assigned to a particular customer.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetMember
     */
    memberId: string
}

export interface LoyaltiesApiGetMember1Request {
    /**
     * Unique campaign ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetMember1
     */
    campaignId: string
    /**
     * Unique code that identifies the loyalty card.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetMember1
     */
    memberId: string
}

export interface LoyaltiesApiGetRewardAssignment1Request {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetRewardAssignment1
     */
    campaignId: string
    /**
     * Unique reward assignment ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetRewardAssignment1
     */
    assignmentId: string
}

export interface LoyaltiesApiGetRewardAssignment2Request {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetRewardAssignment2
     */
    campaignId: string
    /**
     * A unique reward assignment ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetRewardAssignment2
     */
    assignmentId: string
}

export interface LoyaltiesApiGetRewardDetailsRequest {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetRewardDetails
     */
    campaignId: string
    /**
     * Unique reward assignment ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApigetRewardDetails
     */
    assignmentId: string
}

export interface LoyaltiesApiListCampaignPendingPointsRequest {
    /**
     * Unique campaign ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistCampaignPendingPoints
     */
    campaignId: string
    /**
     * Limit the number of the pending point entries that the API returns in the response.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistCampaignPendingPoints
     */
    limit?: number
    /**
     * Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListPendingPoints
     * @memberof LoyaltiesApilistCampaignPendingPoints
     */
    order?: ParameterOrderListPendingPoints
    /**
     * A cursor for pagination. It retrieves the results starting after a result with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistCampaignPendingPoints
     */
    startingAfterId?: string
}

export interface LoyaltiesApiListEarningRulesRequest {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistEarningRules
     */
    campaignId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistEarningRules
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistEarningRules
     */
    page?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListEarningRules
     * @memberof LoyaltiesApilistEarningRules
     */
    order?: ParameterOrderListEarningRules
}

export interface LoyaltiesApiListLoyaltyCampaignTransactionsRequest {
    /**
     * You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistLoyaltyCampaignTransactions
     */
    campaignId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistLoyaltyCampaignTransactions
     */
    limit?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListTransactions
     * @memberof LoyaltiesApilistLoyaltyCampaignTransactions
     */
    order?: ParameterOrderListTransactions
    /**
     * A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistLoyaltyCampaignTransactions
     */
    startingAfterId?: string
    /**
     * Filters for listing responses. The id filter denotes the unique transaction identifier.
     * Defaults to: undefined
     * @type ParametersFiltersListCampaignTransactions
     * @memberof LoyaltiesApilistLoyaltyCampaignTransactions
     */
    filters?: ParametersFiltersListCampaignTransactions
}

export interface LoyaltiesApiListLoyaltyCardTransactionsRequest {
    /**
     * A unique code identifying the loyalty card that you are looking to retrieve transaction data for.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistLoyaltyCardTransactions
     */
    memberId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistLoyaltyCardTransactions
     */
    limit?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListTransactions
     * @memberof LoyaltiesApilistLoyaltyCardTransactions
     */
    order?: ParameterOrderListTransactions
    /**
     * Filters for listing member transactions. id is the unique identifier of the transaction.
     * Defaults to: undefined
     * @type ParameterFiltersListMemberTransactions
     * @memberof LoyaltiesApilistLoyaltyCardTransactions
     */
    filters?: ParameterFiltersListMemberTransactions
    /**
     * A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistLoyaltyCardTransactions
     */
    startingAfterId?: string
}

export interface LoyaltiesApiListLoyaltyCardTransactions1Request {
    /**
     * A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to return.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistLoyaltyCardTransactions1
     */
    campaignId: string
    /**
     * A unique code identifying the loyalty card that you are looking to retrieve transaction data for.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistLoyaltyCardTransactions1
     */
    memberId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistLoyaltyCardTransactions1
     */
    limit?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListTransactions
     * @memberof LoyaltiesApilistLoyaltyCardTransactions1
     */
    order?: ParameterOrderListTransactions
    /**
     * Filters for listing member transactions. id is the unique identifier of the transaction.
     * Defaults to: undefined
     * @type ParameterFiltersListMemberTransactions
     * @memberof LoyaltiesApilistLoyaltyCardTransactions1
     */
    filters?: ParameterFiltersListMemberTransactions
    /**
     * A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistLoyaltyCardTransactions1
     */
    startingAfterId?: string
}

export interface LoyaltiesApiListLoyaltyProgramsRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistLoyaltyPrograms
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistLoyaltyPrograms
     */
    page?: number
    /**
     * Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores.
     * Defaults to: undefined
     * @type ParameterExpandListCampaigns
     * @memberof LoyaltiesApilistLoyaltyPrograms
     */
    expand?: ParameterExpandListCampaigns
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListCampaigns
     * @memberof LoyaltiesApilistLoyaltyPrograms
     */
    order?: ParameterOrderListCampaigns
}

export interface LoyaltiesApiListLoyaltyTierEarningRulesRequest {
    /**
     * Unique campaign ID or name.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistLoyaltyTierEarningRules
     */
    campaignId: string
    /**
     * Unique loyalty tier ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistLoyaltyTierEarningRules
     */
    loyaltyTierId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistLoyaltyTierEarningRules
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistLoyaltyTierEarningRules
     */
    page?: number
}

export interface LoyaltiesApiListLoyaltyTierRewardsRequest {
    /**
     * Unique campaign ID or name.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistLoyaltyTierRewards
     */
    campaignId: string
    /**
     * Unique loyalty tier ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistLoyaltyTierRewards
     */
    loyaltyTierId: string
}

export interface LoyaltiesApiListLoyaltyTiersRequest {
    /**
     * Unique loyalty campaign ID or name.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistLoyaltyTiers
     */
    campaignId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistLoyaltyTiers
     */
    limit?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListLoyaltyTiers
     * @memberof LoyaltiesApilistLoyaltyTiers
     */
    order?: ParameterOrderListLoyaltyTiers
}

export interface LoyaltiesApiListMemberActivityRequest {
    /**
     * Unique loyalty card assigned to a particular customer.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMemberActivity
     */
    memberId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistMemberActivity
     */
    limit?: number
    /**
     * Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderCreatedAt
     * @memberof LoyaltiesApilistMemberActivity
     */
    order?: ParameterOrderCreatedAt
    /**
     * A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMemberActivity
     */
    startingAfterId?: string
}

export interface LoyaltiesApiListMemberActivity1Request {
    /**
     * Unique campaign ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMemberActivity1
     */
    campaignId: string
    /**
     * A code that identifies the loyalty card.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMemberActivity1
     */
    memberId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistMemberActivity1
     */
    limit?: number
    /**
     * Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderCreatedAt
     * @memberof LoyaltiesApilistMemberActivity1
     */
    order?: ParameterOrderCreatedAt
    /**
     * A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMemberActivity1
     */
    startingAfterId?: string
}

export interface LoyaltiesApiListMemberLoyaltyTierRequest {
    /**
     * Unique loyalty card assigned to a particular customer.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMemberLoyaltyTier
     */
    memberId: string
}

export interface LoyaltiesApiListMemberPendingPointsRequest {
    /**
     * Unique loyalty card code assigned to a particular customer.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMemberPendingPoints
     */
    memberId: string
    /**
     * Limit the number of the pending point entries that the API returns in the response.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistMemberPendingPoints
     */
    limit?: number
    /**
     * Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListPendingPoints
     * @memberof LoyaltiesApilistMemberPendingPoints
     */
    order?: ParameterOrderListPendingPoints
    /**
     * A cursor for pagination. It retrieves the results starting after a result with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMemberPendingPoints
     */
    startingAfterId?: string
}

export interface LoyaltiesApiListMemberPendingPoints1Request {
    /**
     * Unique campaign ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMemberPendingPoints1
     */
    campaignId: string
    /**
     * Unique loyalty card code assigned to a particular customer.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMemberPendingPoints1
     */
    memberId: string
    /**
     * Limit the number of the pending point entries that the API returns in the response.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistMemberPendingPoints1
     */
    limit?: number
    /**
     * Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListPendingPoints
     * @memberof LoyaltiesApilistMemberPendingPoints1
     */
    order?: ParameterOrderListPendingPoints
    /**
     * A cursor for pagination. It retrieves the results starting after a result with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMemberPendingPoints1
     */
    startingAfterId?: string
}

export interface LoyaltiesApiListMemberRewardsRequest {
    /**
     * Unique loyalty card assigned to a particular customer.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMemberRewards
     */
    memberId: string
    /**
     * Limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card). Set this flag to true to return rewards which the customer can actually afford.
     * Defaults to: undefined
     * @type boolean
     * @memberof LoyaltiesApilistMemberRewards
     */
    affordableOnly?: boolean
}

export interface LoyaltiesApiListMembersRequest {
    /**
     * Unique campaign ID of the loyalty program.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMembers
     */
    campaignId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistMembers
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistMembers
     */
    page?: number
    /**
     * A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMembers
     */
    customer?: string
    /**
     * A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * Defaults to: undefined
     * @type ParameterCreatedBeforeAfter
     * @memberof LoyaltiesApilistMembers
     */
    createdAt?: ParameterCreatedBeforeAfter
    /**
     * A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z
     * Defaults to: undefined
     * @type ParameterUpdatedBeforeAfter
     * @memberof LoyaltiesApilistMembers
     */
    updatedAt?: ParameterUpdatedBeforeAfter
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderVouchers
     * @memberof LoyaltiesApilistMembers
     */
    order?: ParameterOrderVouchers
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistMembers
     */
    code?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof LoyaltiesApilistMembers
     */
    ids?: Array<string>
}

export interface LoyaltiesApiListPointsExpirationRequest {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistPointsExpiration
     */
    campaignId: string
    /**
     * Loyalty card code.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistPointsExpiration
     */
    memberId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistPointsExpiration
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistPointsExpiration
     */
    page?: number
}

export interface LoyaltiesApiListRewardAssignments1Request {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistRewardAssignments1
     */
    campaignId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistRewardAssignments1
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistRewardAssignments1
     */
    page?: number
    /**
     * A unique reward assignment ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistRewardAssignments1
     */
    assignmentId?: string
}

export interface LoyaltiesApiListRewardAssignments2Request {
    /**
     * Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistRewardAssignments2
     */
    campaignId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistRewardAssignments2
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof LoyaltiesApilistRewardAssignments2
     */
    page?: number
    /**
     * A unique reward assignment ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApilistRewardAssignments2
     */
    assignmentId?: string
}

export interface LoyaltiesApiRedeemRewardRequest {
    /**
     * Unique loyalty card assigned to a particular customer.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiredeemReward
     */
    memberId: string
    /**
     * Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order.
     * @type LoyaltiesMembersRedemptionRedeemRequestBody
     * @memberof LoyaltiesApiredeemReward
     */
    loyaltiesMembersRedemptionRedeemRequestBody?: LoyaltiesMembersRedemptionRedeemRequestBody
}

export interface LoyaltiesApiRedeemReward1Request {
    /**
     * Unique campaign ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiredeemReward1
     */
    campaignId: string
    /**
     * A code that identifies the loyalty card.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiredeemReward1
     */
    memberId: string
    /**
     * Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order.
     * @type LoyaltiesMembersRedemptionRedeemRequestBody
     * @memberof LoyaltiesApiredeemReward1
     */
    loyaltiesMembersRedemptionRedeemRequestBody?: LoyaltiesMembersRedemptionRedeemRequestBody
}

export interface LoyaltiesApiTransferPointsRequest {
    /**
     * A unique identifier of the loyalty campaign containing the voucher to which the loyalty points will be sent (destination).
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApitransferPoints
     */
    campaignId: string
    /**
     * A unique code identifying the loyalty card to which the user wants to transfer loyalty points (destination).
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApitransferPoints
     */
    memberId: string
    /**
     * Provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card.
     * @type Array&lt;LoyaltiesTransferPoints&gt;
     * @memberof LoyaltiesApitransferPoints
     */
    loyaltiesTransferPoints?: Array<LoyaltiesTransferPoints>
}

export interface LoyaltiesApiUpdateEarningRuleRequest {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiupdateEarningRule
     */
    campaignId: string
    /**
     * A unique earning rule ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiupdateEarningRule
     */
    earningRuleId: string
    /**
     * Specify the parameters that you would like to update for the given earning rule.
     * @type LoyaltiesEarningRulesUpdateRequestBody
     * @memberof LoyaltiesApiupdateEarningRule
     */
    loyaltiesEarningRulesUpdateRequestBody?: LoyaltiesEarningRulesUpdateRequestBody
}

export interface LoyaltiesApiUpdateLoyaltyCardBalanceRequest {
    /**
     * Unique loyalty card assigned to a particular customer.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiupdateLoyaltyCardBalance
     */
    memberId: string
    /**
     * Specify the point adjustment along with the expiration mechanism.
     * @type LoyaltiesMembersBalanceUpdateRequestBody
     * @memberof LoyaltiesApiupdateLoyaltyCardBalance
     */
    loyaltiesMembersBalanceUpdateRequestBody?: LoyaltiesMembersBalanceUpdateRequestBody
}

export interface LoyaltiesApiUpdateLoyaltyCardBalance1Request {
    /**
     * Unique campaign ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiupdateLoyaltyCardBalance1
     */
    campaignId: string
    /**
     * A code that identifies the loyalty card.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiupdateLoyaltyCardBalance1
     */
    memberId: string
    /**
     * Specify the point adjustment along with the expiration mechanism.
     * @type LoyaltiesMembersBalanceUpdateRequestBody
     * @memberof LoyaltiesApiupdateLoyaltyCardBalance1
     */
    loyaltiesMembersBalanceUpdateRequestBody?: LoyaltiesMembersBalanceUpdateRequestBody
}

export interface LoyaltiesApiUpdateLoyaltyProgramRequest {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiupdateLoyaltyProgram
     */
    campaignId: string
    /**
     * Specify the new values for the parameters that you would like to update for the given loyalty campaign.
     * @type LoyaltiesUpdateCampaignRequestBody
     * @memberof LoyaltiesApiupdateLoyaltyProgram
     */
    loyaltiesUpdateCampaignRequestBody?: LoyaltiesUpdateCampaignRequestBody
}

export interface LoyaltiesApiUpdateRewardAssignment1Request {
    /**
     * The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiupdateRewardAssignment1
     */
    campaignId: string
    /**
     * A unique reward assignment ID.
     * Defaults to: undefined
     * @type string
     * @memberof LoyaltiesApiupdateRewardAssignment1
     */
    assignmentId: string
    /**
     * Update the points cost for the reward assignment.
     * @type LoyaltiesRewardsUpdateAssignmentRequestBody
     * @memberof LoyaltiesApiupdateRewardAssignment1
     */
    loyaltiesRewardsUpdateAssignmentRequestBody?: LoyaltiesRewardsUpdateAssignmentRequestBody
}

export class ObjectLoyaltiesApi {
    private api: ObservableLoyaltiesApi

    public constructor(configuration: Configuration, requestFactory?: LoyaltiesApiRequestFactory, responseProcessor?: LoyaltiesApiResponseProcessor) {
        this.api = new ObservableLoyaltiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Activate manually the pending points and add them to the loyalty card. The pending points are determined by the pending point ID. Once activated, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Activate Member Pending Points
     * @param param the request object
     */
    public activateMemberPendingPointsWithHttpInfo(param: LoyaltiesApiActivateMemberPendingPointsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersPendingPointsActivateResponseBody>> {
        return this.api.activateMemberPendingPointsWithHttpInfo(param.memberId, param.pendingPointsId,  options).toPromise();
    }

    /**
     * Activate manually the pending points and add them to the loyalty card. The pending points are determined by the pending point ID. Once activated, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Activate Member Pending Points
     * @param param the request object
     */
    public activateMemberPendingPoints(param: LoyaltiesApiActivateMemberPendingPointsRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersPendingPointsActivateResponseBody> {
        return this.api.activateMemberPendingPoints(param.memberId, param.pendingPointsId,  options).toPromise();
    }

    /**
     * This method assigns a loyalty card to a customer. It selects a [loyalty card](/api-reference/vouchers/get-voucher) suitable for publication, adds a publish entry, and returns the published voucher.   A voucher is suitable for publication when its active and hasnt been published yet.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use **auto-update** campaign.
     * Add Member
     * @param param the request object
     */
    public addMemberWithHttpInfo(param: LoyaltiesApiAddMemberRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersCreateResponseBody>> {
        return this.api.addMemberWithHttpInfo(param.campaignId, param.loyaltiesMembersCreateRequestBody,  options).toPromise();
    }

    /**
     * This method assigns a loyalty card to a customer. It selects a [loyalty card](/api-reference/vouchers/get-voucher) suitable for publication, adds a publish entry, and returns the published voucher.   A voucher is suitable for publication when its active and hasnt been published yet.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use **auto-update** campaign.
     * Add Member
     * @param param the request object
     */
    public addMember(param: LoyaltiesApiAddMemberRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersCreateResponseBody> {
        return this.api.addMember(param.campaignId, param.loyaltiesMembersCreateRequestBody,  options).toPromise();
    }

    /**
     * Adjusts the pending points with a given ID. You can add or subtract the number of points. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Adjust Member Pending Points
     * @param param the request object
     */
    public adjustMemberPendingPointsWithHttpInfo(param: LoyaltiesApiAdjustMemberPendingPointsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersPendingPointsBalanceResponseBody>> {
        return this.api.adjustMemberPendingPointsWithHttpInfo(param.memberId, param.pendingPointsId, param.loyaltiesMembersPendingPointsBalanceRequestBody,  options).toPromise();
    }

    /**
     * Adjusts the pending points with a given ID. You can add or subtract the number of points. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Adjust Member Pending Points
     * @param param the request object
     */
    public adjustMemberPendingPoints(param: LoyaltiesApiAdjustMemberPendingPointsRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersPendingPointsBalanceResponseBody> {
        return this.api.adjustMemberPendingPoints(param.memberId, param.pendingPointsId, param.loyaltiesMembersPendingPointsBalanceRequestBody,  options).toPromise();
    }

    /**
     * Cancel manually the pending points for the loyalty card. The pending points are determined by the pending point ID. Once canceled, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body and it returns an empty, 204, response. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Cancel Member Pending Points
     * @param param the request object
     */
    public cancelMemberPendingPointsWithHttpInfo(param: LoyaltiesApiCancelMemberPendingPointsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.cancelMemberPendingPointsWithHttpInfo(param.memberId, param.pendingPointsId,  options).toPromise();
    }

    /**
     * Cancel manually the pending points for the loyalty card. The pending points are determined by the pending point ID. Once canceled, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body and it returns an empty, 204, response. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * Cancel Member Pending Points
     * @param param the request object
     */
    public cancelMemberPendingPoints(param: LoyaltiesApiCancelMemberPendingPointsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.cancelMemberPendingPoints(param.memberId, param.pendingPointsId,  options).toPromise();
    }

    /**
     * Create earning rules for a loyalty campaign.  🚧 Maximum number of earning rules  You can create up to 100 earning rules per project. The limit can be customized for clients with a single-tenant setup.
     * Create Earning Rule
     * @param param the request object
     */
    public createEarningRuleWithHttpInfo(param: LoyaltiesApiCreateEarningRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<LoyaltiesEarningRulesCreateResponseBody>>> {
        return this.api.createEarningRuleWithHttpInfo(param.campaignId, param.loyaltiesEarningRulesCreateRequestBodyItem,  options).toPromise();
    }

    /**
     * Create earning rules for a loyalty campaign.  🚧 Maximum number of earning rules  You can create up to 100 earning rules per project. The limit can be customized for clients with a single-tenant setup.
     * Create Earning Rule
     * @param param the request object
     */
    public createEarningRule(param: LoyaltiesApiCreateEarningRuleRequest, options?: ConfigurationOptions): Promise<Array<LoyaltiesEarningRulesCreateResponseBody>> {
        return this.api.createEarningRule(param.campaignId, param.loyaltiesEarningRulesCreateRequestBodyItem,  options).toPromise();
    }

    /**
     * Creates loyalty tiers for desired campaign.
     * Create loyalty tiers
     * @param param the request object
     */
    public createInBulkLoyaltyTiersWithHttpInfo(param: LoyaltiesApiCreateInBulkLoyaltyTiersRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<LoyaltyTier>>> {
        return this.api.createInBulkLoyaltyTiersWithHttpInfo(param.campaignId, param.loyaltiesTiersCreateInBulkRequestBodyItem,  options).toPromise();
    }

    /**
     * Creates loyalty tiers for desired campaign.
     * Create loyalty tiers
     * @param param the request object
     */
    public createInBulkLoyaltyTiers(param: LoyaltiesApiCreateInBulkLoyaltyTiersRequest, options?: ConfigurationOptions): Promise<Array<LoyaltyTier>> {
        return this.api.createInBulkLoyaltyTiers(param.campaignId, param.loyaltiesTiersCreateInBulkRequestBodyItem,  options).toPromise();
    }

    /**
     * Creates a batch of [loyalty cards](/api-reference/loyalties/get-member) aggregated in a single loyalty campaign. It also allows you to define a custom codes pattern.    📘 Global uniqueness  All codes are unique across the whole project. Voucherify wont allow to generate the same codes in any of your campaigns.  🚧 Asynchronous action!  This is an asynchronous action, you cant read or modify a newly created campaign until the code generation is completed. See creation_status field in the [loyalty campaign object](/api-reference/loyalties/loyalty-campaign-object) description.
     * Create Loyalty Campaign
     * @param param the request object
     */
    public createLoyaltyProgramWithHttpInfo(param: LoyaltiesApiCreateLoyaltyProgramRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesCreateCampaignResponseBody>> {
        return this.api.createLoyaltyProgramWithHttpInfo(param.loyaltiesCreateCampaignRequestBody,  options).toPromise();
    }

    /**
     * Creates a batch of [loyalty cards](/api-reference/loyalties/get-member) aggregated in a single loyalty campaign. It also allows you to define a custom codes pattern.    📘 Global uniqueness  All codes are unique across the whole project. Voucherify wont allow to generate the same codes in any of your campaigns.  🚧 Asynchronous action!  This is an asynchronous action, you cant read or modify a newly created campaign until the code generation is completed. See creation_status field in the [loyalty campaign object](/api-reference/loyalties/loyalty-campaign-object) description.
     * Create Loyalty Campaign
     * @param param the request object
     */
    public createLoyaltyProgram(param: LoyaltiesApiCreateLoyaltyProgramRequest = {}, options?: ConfigurationOptions): Promise<LoyaltiesCreateCampaignResponseBody> {
        return this.api.createLoyaltyProgram(param.loyaltiesCreateCampaignRequestBody,  options).toPromise();
    }

    /**
     * Schedule the generation of a point expiration CSV file for a particular campaign. It can list point buckets, which can have an ACTIVE or EXPIRED status.
     * Export Loyalty Campaign Point Expiration
     * @param param the request object
     */
    public createPointsExpirationExportWithHttpInfo(param: LoyaltiesApiCreatePointsExpirationExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesPointsExpirationExportCreateResponseBody>> {
        return this.api.createPointsExpirationExportWithHttpInfo(param.campaignId, param.loyaltiesPointsExpirationExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Schedule the generation of a point expiration CSV file for a particular campaign. It can list point buckets, which can have an ACTIVE or EXPIRED status.
     * Export Loyalty Campaign Point Expiration
     * @param param the request object
     */
    public createPointsExpirationExport(param: LoyaltiesApiCreatePointsExpirationExportRequest, options?: ConfigurationOptions): Promise<LoyaltiesPointsExpirationExportCreateResponseBody> {
        return this.api.createPointsExpirationExport(param.campaignId, param.loyaltiesPointsExpirationExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Add rewards to a loyalty campaign.
     * Create Loyalty Campaign Reward Assignment
     * @param param the request object
     */
    public createRewardAssignment1WithHttpInfo(param: LoyaltiesApiCreateRewardAssignment1Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardsCreateAssignmentResponseBody>> {
        return this.api.createRewardAssignment1WithHttpInfo(param.campaignId, param.loyaltiesRewardsCreateAssignmentItemRequestBody,  options).toPromise();
    }

    /**
     * Add rewards to a loyalty campaign.
     * Create Loyalty Campaign Reward Assignment
     * @param param the request object
     */
    public createRewardAssignment1(param: LoyaltiesApiCreateRewardAssignment1Request, options?: ConfigurationOptions): Promise<LoyaltiesRewardsCreateAssignmentResponseBody> {
        return this.api.createRewardAssignment1(param.campaignId, param.loyaltiesRewardsCreateAssignmentItemRequestBody,  options).toPromise();
    }

    /**
     * This method deletes an earning rule for a specific loyalty campaign.
     * Delete Earning Rule
     * @param param the request object
     */
    public deleteEarningRuleWithHttpInfo(param: LoyaltiesApiDeleteEarningRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteEarningRuleWithHttpInfo(param.campaignId, param.earningRuleId,  options).toPromise();
    }

    /**
     * This method deletes an earning rule for a specific loyalty campaign.
     * Delete Earning Rule
     * @param param the request object
     */
    public deleteEarningRule(param: LoyaltiesApiDeleteEarningRuleRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteEarningRule(param.campaignId, param.earningRuleId,  options).toPromise();
    }

    /**
     * Deletes a loyalty campaign and all related loyalty cards. This action cannot be undone. Also, it immediately removes any redemptions on loyalty cards. If the force parameter is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Loyalty Campaign
     * @param param the request object
     */
    public deleteLoyaltyProgramWithHttpInfo(param: LoyaltiesApiDeleteLoyaltyProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesDeleteResponseBody>> {
        return this.api.deleteLoyaltyProgramWithHttpInfo(param.campaignId, param.force,  options).toPromise();
    }

    /**
     * Deletes a loyalty campaign and all related loyalty cards. This action cannot be undone. Also, it immediately removes any redemptions on loyalty cards. If the force parameter is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Loyalty Campaign
     * @param param the request object
     */
    public deleteLoyaltyProgram(param: LoyaltiesApiDeleteLoyaltyProgramRequest, options?: ConfigurationOptions): Promise<LoyaltiesDeleteResponseBody> {
        return this.api.deleteLoyaltyProgram(param.campaignId, param.force,  options).toPromise();
    }

    /**
     * This method deletes a reward assignment for a particular loyalty campaign.
     * Delete Campaign Reward Assignment
     * @param param the request object
     */
    public deleteRewardAssignment1WithHttpInfo(param: LoyaltiesApiDeleteRewardAssignment1Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteRewardAssignment1WithHttpInfo(param.campaignId, param.assignmentId,  options).toPromise();
    }

    /**
     * This method deletes a reward assignment for a particular loyalty campaign.
     * Delete Campaign Reward Assignment
     * @param param the request object
     */
    public deleteRewardAssignment1(param: LoyaltiesApiDeleteRewardAssignment1Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteRewardAssignment1(param.campaignId, param.assignmentId,  options).toPromise();
    }

    /**
     * Disable an earning rule.
     * Disable Earning Rule
     * @param param the request object
     */
    public disableEarningRuleWithHttpInfo(param: LoyaltiesApiDisableEarningRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesEarningRulesDisableResponseBody>> {
        return this.api.disableEarningRuleWithHttpInfo(param.campaignId, param.earningRuleId,  options).toPromise();
    }

    /**
     * Disable an earning rule.
     * Disable Earning Rule
     * @param param the request object
     */
    public disableEarningRule(param: LoyaltiesApiDisableEarningRuleRequest, options?: ConfigurationOptions): Promise<LoyaltiesEarningRulesDisableResponseBody> {
        return this.api.disableEarningRule(param.campaignId, param.earningRuleId,  options).toPromise();
    }

    /**
     * Enable an earning rule.
     * Enable Earning Rule
     * @param param the request object
     */
    public enableEarningRuleWithHttpInfo(param: LoyaltiesApiEnableEarningRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesEarningRulesEnableResponseBody>> {
        return this.api.enableEarningRuleWithHttpInfo(param.campaignId, param.earningRuleId,  options).toPromise();
    }

    /**
     * Enable an earning rule.
     * Enable Earning Rule
     * @param param the request object
     */
    public enableEarningRule(param: LoyaltiesApiEnableEarningRuleRequest, options?: ConfigurationOptions): Promise<LoyaltiesEarningRulesEnableResponseBody> {
        return this.api.enableEarningRule(param.campaignId, param.earningRuleId,  options).toPromise();
    }

    /**
     * Export transactions is an asynchronous process that generates a CSV file with the data about or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Campaign Transactions  This method works in the same way the [POST Export Campaign Transactions](/api-reference/campaigns/export-campaign-transactions) does, but it is limited to loyalty campaigns only. The POST Export Campaign Transactions method can also export gift card campaign transactions.
     * Export Loyalty Campaign Transactions
     * @param param the request object
     */
    public exportLoyaltyCampaignTransactionsWithHttpInfo(param: LoyaltiesApiExportLoyaltyCampaignTransactionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CampaignsTransactionsExportCreateResponseBody>> {
        return this.api.exportLoyaltyCampaignTransactionsWithHttpInfo(param.campaignId, param.loyaltiesTransactionsExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Export transactions is an asynchronous process that generates a CSV file with the data about or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Campaign Transactions  This method works in the same way the [POST Export Campaign Transactions](/api-reference/campaigns/export-campaign-transactions) does, but it is limited to loyalty campaigns only. The POST Export Campaign Transactions method can also export gift card campaign transactions.
     * Export Loyalty Campaign Transactions
     * @param param the request object
     */
    public exportLoyaltyCampaignTransactions(param: LoyaltiesApiExportLoyaltyCampaignTransactionsRequest, options?: ConfigurationOptions): Promise<CampaignsTransactionsExportCreateResponseBody> {
        return this.api.exportLoyaltyCampaignTransactions(param.campaignId, param.loyaltiesTransactionsExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions
     * @param param the request object
     */
    public exportLoyaltyCardTransactionsWithHttpInfo(param: LoyaltiesApiExportLoyaltyCardTransactionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersTransactionsExportCreateResponseBody>> {
        return this.api.exportLoyaltyCardTransactionsWithHttpInfo(param.memberId, param.loyaltiesMembersTransactionsExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions
     * @param param the request object
     */
    public exportLoyaltyCardTransactions(param: LoyaltiesApiExportLoyaltyCardTransactionsRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersTransactionsExportCreateResponseBody> {
        return this.api.exportLoyaltyCardTransactions(param.memberId, param.loyaltiesMembersTransactionsExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions with campaign ID
     * @param param the request object
     */
    public exportLoyaltyCardTransactions1WithHttpInfo(param: LoyaltiesApiExportLoyaltyCardTransactions1Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersTransactionsExportCreateResponseBody>> {
        return this.api.exportLoyaltyCardTransactions1WithHttpInfo(param.campaignId, param.memberId, param.loyaltiesMembersTransactionsExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Export transactions that are associated with point movements on a loyalty card.   
     * Export Loyalty Card Transactions with campaign ID
     * @param param the request object
     */
    public exportLoyaltyCardTransactions1(param: LoyaltiesApiExportLoyaltyCardTransactions1Request, options?: ConfigurationOptions): Promise<LoyaltiesMembersTransactionsExportCreateResponseBody> {
        return this.api.exportLoyaltyCardTransactions1(param.campaignId, param.memberId, param.loyaltiesMembersTransactionsExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Retrieves an earning rule assigned to a campaign.
     * Get Earning Rule
     * @param param the request object
     */
    public getEarningRuleWithHttpInfo(param: LoyaltiesApiGetEarningRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesEarningRulesGetResponseBody>> {
        return this.api.getEarningRuleWithHttpInfo(param.campaignId, param.earningRuleId,  options).toPromise();
    }

    /**
     * Retrieves an earning rule assigned to a campaign.
     * Get Earning Rule
     * @param param the request object
     */
    public getEarningRule(param: LoyaltiesApiGetEarningRuleRequest, options?: ConfigurationOptions): Promise<LoyaltiesEarningRulesGetResponseBody> {
        return this.api.getEarningRule(param.campaignId, param.earningRuleId,  options).toPromise();
    }

    /**
     * Retrieve a specific loyalty campaign.
     * Get Loyalty Campaign
     * @param param the request object
     */
    public getLoyaltyProgramWithHttpInfo(param: LoyaltiesApiGetLoyaltyProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesGetCampaignResponseBody>> {
        return this.api.getLoyaltyProgramWithHttpInfo(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieve a specific loyalty campaign.
     * Get Loyalty Campaign
     * @param param the request object
     */
    public getLoyaltyProgram(param: LoyaltiesApiGetLoyaltyProgramRequest, options?: ConfigurationOptions): Promise<LoyaltiesGetCampaignResponseBody> {
        return this.api.getLoyaltyProgram(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieve a loyalty tier from a loyalty campaign by the loyalty tier ID.
     * Get Loyalty Tier
     * @param param the request object
     */
    public getLoyaltyTierWithHttpInfo(param: LoyaltiesApiGetLoyaltyTierRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesTiersGetResponseBody>> {
        return this.api.getLoyaltyTierWithHttpInfo(param.campaignId, param.loyaltyTierId,  options).toPromise();
    }

    /**
     * Retrieve a loyalty tier from a loyalty campaign by the loyalty tier ID.
     * Get Loyalty Tier
     * @param param the request object
     */
    public getLoyaltyTier(param: LoyaltiesApiGetLoyaltyTierRequest, options?: ConfigurationOptions): Promise<LoyaltiesTiersGetResponseBody> {
        return this.api.getLoyaltyTier(param.campaignId, param.loyaltyTierId,  options).toPromise();
    }

    /**
     * Retrieve loyalty card with the given member ID (i.e. voucher code).      📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-member-with-campaign-id). The URL was re-designed to allow you to retrieve loyalty card details without having to provide the campaignId as a path parameter.
     * Get Member
     * @param param the request object
     */
    public getMemberWithHttpInfo(param: LoyaltiesApiGetMemberRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersGetResponseBody>> {
        return this.api.getMemberWithHttpInfo(param.memberId,  options).toPromise();
    }

    /**
     * Retrieve loyalty card with the given member ID (i.e. voucher code).      📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-member-with-campaign-id). The URL was re-designed to allow you to retrieve loyalty card details without having to provide the campaignId as a path parameter.
     * Get Member
     * @param param the request object
     */
    public getMember(param: LoyaltiesApiGetMemberRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersGetResponseBody> {
        return this.api.getMember(param.memberId,  options).toPromise();
    }

    /**
     * Retrieves the loyalty card with the given member ID (i.e. voucher code).
     * Get Member with campaign ID
     * @param param the request object
     */
    public getMember1WithHttpInfo(param: LoyaltiesApiGetMember1Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersGetResponseBody>> {
        return this.api.getMember1WithHttpInfo(param.campaignId, param.memberId,  options).toPromise();
    }

    /**
     * Retrieves the loyalty card with the given member ID (i.e. voucher code).
     * Get Member with campaign ID
     * @param param the request object
     */
    public getMember1(param: LoyaltiesApiGetMember1Request, options?: ConfigurationOptions): Promise<LoyaltiesMembersGetResponseBody> {
        return this.api.getMember1(param.campaignId, param.memberId,  options).toPromise();
    }

    /**
     * Retrieve specific reward assignment.
     * Get Campaign Reward Assignments
     * @param param the request object
     */
    public getRewardAssignment1WithHttpInfo(param: LoyaltiesApiGetRewardAssignment1Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardAssignmentsGetResponseBody>> {
        return this.api.getRewardAssignment1WithHttpInfo(param.campaignId, param.assignmentId,  options).toPromise();
    }

    /**
     * Retrieve specific reward assignment.
     * Get Campaign Reward Assignments
     * @param param the request object
     */
    public getRewardAssignment1(param: LoyaltiesApiGetRewardAssignment1Request, options?: ConfigurationOptions): Promise<LoyaltiesRewardAssignmentsGetResponseBody> {
        return this.api.getRewardAssignment1(param.campaignId, param.assignmentId,  options).toPromise();
    }

    /**
     * Retrieve specific reward assignment.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-campaign-reward-assignments). 
     * Get Campaign Reward Assignment
     * @param param the request object
     */
    public getRewardAssignment2WithHttpInfo(param: LoyaltiesApiGetRewardAssignment2Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardsGetResponseBody>> {
        return this.api.getRewardAssignment2WithHttpInfo(param.campaignId, param.assignmentId,  options).toPromise();
    }

    /**
     * Retrieve specific reward assignment.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-campaign-reward-assignments). 
     * Get Campaign Reward Assignment
     * @param param the request object
     */
    public getRewardAssignment2(param: LoyaltiesApiGetRewardAssignment2Request, options?: ConfigurationOptions): Promise<LoyaltiesRewardsGetResponseBody> {
        return this.api.getRewardAssignment2(param.campaignId, param.assignmentId,  options).toPromise();
    }

    /**
     * Get reward details in the context of a loyalty campaign and reward assignment ID.
     * Get Reward Details
     * @param param the request object
     */
    public getRewardDetailsWithHttpInfo(param: LoyaltiesApiGetRewardDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardAssignmentsRewardGetResponseBody>> {
        return this.api.getRewardDetailsWithHttpInfo(param.campaignId, param.assignmentId,  options).toPromise();
    }

    /**
     * Get reward details in the context of a loyalty campaign and reward assignment ID.
     * Get Reward Details
     * @param param the request object
     */
    public getRewardDetails(param: LoyaltiesApiGetRewardDetailsRequest, options?: ConfigurationOptions): Promise<LoyaltiesRewardAssignmentsRewardGetResponseBody> {
        return this.api.getRewardDetails(param.campaignId, param.assignmentId,  options).toPromise();
    }

    /**
     * Lists all pending points that are currently assigned to all loyalty cards in a campaign. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Campaign Pending Points
     * @param param the request object
     */
    public listCampaignPendingPointsWithHttpInfo(param: LoyaltiesApiListCampaignPendingPointsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesPendingPointsListResponseBody>> {
        return this.api.listCampaignPendingPointsWithHttpInfo(param.campaignId, param.limit, param.order, param.startingAfterId,  options).toPromise();
    }

    /**
     * Lists all pending points that are currently assigned to all loyalty cards in a campaign. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Campaign Pending Points
     * @param param the request object
     */
    public listCampaignPendingPoints(param: LoyaltiesApiListCampaignPendingPointsRequest, options?: ConfigurationOptions): Promise<LoyaltiesPendingPointsListResponseBody> {
        return this.api.listCampaignPendingPoints(param.campaignId, param.limit, param.order, param.startingAfterId,  options).toPromise();
    }

    /**
     * Returns a list of all earning rules within a given campaign.
     * List Earning Rules
     * @param param the request object
     */
    public listEarningRulesWithHttpInfo(param: LoyaltiesApiListEarningRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesEarningRulesListResponseBody>> {
        return this.api.listEarningRulesWithHttpInfo(param.campaignId, param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * Returns a list of all earning rules within a given campaign.
     * List Earning Rules
     * @param param the request object
     */
    public listEarningRules(param: LoyaltiesApiListEarningRulesRequest, options?: ConfigurationOptions): Promise<LoyaltiesEarningRulesListResponseBody> {
        return this.api.listEarningRules(param.campaignId, param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * Retrieves all transactions for the campaign with the given campaign ID or campaign name.
     * List Loyalty Campaign Transactions
     * @param param the request object
     */
    public listLoyaltyCampaignTransactionsWithHttpInfo(param: LoyaltiesApiListLoyaltyCampaignTransactionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesTransactionsListResponseBody>> {
        return this.api.listLoyaltyCampaignTransactionsWithHttpInfo(param.campaignId, param.limit, param.order, param.startingAfterId, param.filters,  options).toPromise();
    }

    /**
     * Retrieves all transactions for the campaign with the given campaign ID or campaign name.
     * List Loyalty Campaign Transactions
     * @param param the request object
     */
    public listLoyaltyCampaignTransactions(param: LoyaltiesApiListLoyaltyCampaignTransactionsRequest, options?: ConfigurationOptions): Promise<LoyaltiesTransactionsListResponseBody> {
        return this.api.listLoyaltyCampaignTransactions(param.campaignId, param.limit, param.order, param.startingAfterId, param.filters,  options).toPromise();
    }

    /**
     * Retrieve transaction data related to point movements for a specific loyalty card.
     * List Loyalty Card Transactions
     * @param param the request object
     */
    public listLoyaltyCardTransactionsWithHttpInfo(param: LoyaltiesApiListLoyaltyCardTransactionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersTransactionsListResponseBody>> {
        return this.api.listLoyaltyCardTransactionsWithHttpInfo(param.memberId, param.limit, param.order, param.filters, param.startingAfterId,  options).toPromise();
    }

    /**
     * Retrieve transaction data related to point movements for a specific loyalty card.
     * List Loyalty Card Transactions
     * @param param the request object
     */
    public listLoyaltyCardTransactions(param: LoyaltiesApiListLoyaltyCardTransactionsRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersTransactionsListResponseBody> {
        return this.api.listLoyaltyCardTransactions(param.memberId, param.limit, param.order, param.filters, param.startingAfterId,  options).toPromise();
    }

    /**
     * Retrieve transaction data related to point movements for a specific loyalty card.
     * List Loyalty Card Transactions with campaign ID
     * @param param the request object
     */
    public listLoyaltyCardTransactions1WithHttpInfo(param: LoyaltiesApiListLoyaltyCardTransactions1Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersTransactionsListResponseBody>> {
        return this.api.listLoyaltyCardTransactions1WithHttpInfo(param.campaignId, param.memberId, param.limit, param.order, param.filters, param.startingAfterId,  options).toPromise();
    }

    /**
     * Retrieve transaction data related to point movements for a specific loyalty card.
     * List Loyalty Card Transactions with campaign ID
     * @param param the request object
     */
    public listLoyaltyCardTransactions1(param: LoyaltiesApiListLoyaltyCardTransactions1Request, options?: ConfigurationOptions): Promise<LoyaltiesMembersTransactionsListResponseBody> {
        return this.api.listLoyaltyCardTransactions1(param.campaignId, param.memberId, param.limit, param.order, param.filters, param.startingAfterId,  options).toPromise();
    }

    /**
     * Returns a list of your loyalty campaigns.
     * List Loyalty Campaigns
     * @param param the request object
     */
    public listLoyaltyProgramsWithHttpInfo(param: LoyaltiesApiListLoyaltyProgramsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesListCampaignsResponseBody>> {
        return this.api.listLoyaltyProgramsWithHttpInfo(param.limit, param.page, param.expand, param.order,  options).toPromise();
    }

    /**
     * Returns a list of your loyalty campaigns.
     * List Loyalty Campaigns
     * @param param the request object
     */
    public listLoyaltyPrograms(param: LoyaltiesApiListLoyaltyProgramsRequest = {}, options?: ConfigurationOptions): Promise<LoyaltiesListCampaignsResponseBody> {
        return this.api.listLoyaltyPrograms(param.limit, param.page, param.expand, param.order,  options).toPromise();
    }

    /**
     * Retrieve available earning rules for a given tier and the calculation method for earning points.
     * List Loyalty Tier Earning Rules
     * @param param the request object
     */
    public listLoyaltyTierEarningRulesWithHttpInfo(param: LoyaltiesApiListLoyaltyTierEarningRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesTiersEarningRulesListResponseBody>> {
        return this.api.listLoyaltyTierEarningRulesWithHttpInfo(param.campaignId, param.loyaltyTierId, param.limit, param.page,  options).toPromise();
    }

    /**
     * Retrieve available earning rules for a given tier and the calculation method for earning points.
     * List Loyalty Tier Earning Rules
     * @param param the request object
     */
    public listLoyaltyTierEarningRules(param: LoyaltiesApiListLoyaltyTierEarningRulesRequest, options?: ConfigurationOptions): Promise<LoyaltiesTiersEarningRulesListResponseBody> {
        return this.api.listLoyaltyTierEarningRules(param.campaignId, param.loyaltyTierId, param.limit, param.page,  options).toPromise();
    }

    /**
     * Get available rewards for a given tier.
     * List Loyalty Tier Rewards
     * @param param the request object
     */
    public listLoyaltyTierRewardsWithHttpInfo(param: LoyaltiesApiListLoyaltyTierRewardsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesTiersRewardsListResponseBody>> {
        return this.api.listLoyaltyTierRewardsWithHttpInfo(param.campaignId, param.loyaltyTierId,  options).toPromise();
    }

    /**
     * Get available rewards for a given tier.
     * List Loyalty Tier Rewards
     * @param param the request object
     */
    public listLoyaltyTierRewards(param: LoyaltiesApiListLoyaltyTierRewardsRequest, options?: ConfigurationOptions): Promise<LoyaltiesTiersRewardsListResponseBody> {
        return this.api.listLoyaltyTierRewards(param.campaignId, param.loyaltyTierId,  options).toPromise();
    }

    /**
     * Retrieve a list of loyalty tiers which were added to the loyalty program.
     * List Loyalty Tiers
     * @param param the request object
     */
    public listLoyaltyTiersWithHttpInfo(param: LoyaltiesApiListLoyaltyTiersRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesTiersListResponseBody>> {
        return this.api.listLoyaltyTiersWithHttpInfo(param.campaignId, param.limit, param.order,  options).toPromise();
    }

    /**
     * Retrieve a list of loyalty tiers which were added to the loyalty program.
     * List Loyalty Tiers
     * @param param the request object
     */
    public listLoyaltyTiers(param: LoyaltiesApiListLoyaltyTiersRequest, options?: ConfigurationOptions): Promise<LoyaltiesTiersListResponseBody> {
        return this.api.listLoyaltyTiers(param.campaignId, param.limit, param.order,  options).toPromise();
    }

    /**
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-activity-with-campaign-id). The URL was re-designed to allow you to get member activities without having to provide the campaignId as a path parameter. Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.
     * List Member Activity
     * @param param the request object
     */
    public listMemberActivityWithHttpInfo(param: LoyaltiesApiListMemberActivityRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMemberActivityListResponseBody>> {
        return this.api.listMemberActivityWithHttpInfo(param.memberId, param.limit, param.order, param.startingAfterId,  options).toPromise();
    }

    /**
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-activity-with-campaign-id). The URL was re-designed to allow you to get member activities without having to provide the campaignId as a path parameter. Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.
     * List Member Activity
     * @param param the request object
     */
    public listMemberActivity(param: LoyaltiesApiListMemberActivityRequest, options?: ConfigurationOptions): Promise<LoyaltiesMemberActivityListResponseBody> {
        return this.api.listMemberActivity(param.memberId, param.limit, param.order, param.startingAfterId,  options).toPromise();
    }

    /**
     * Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.
     * List Member Activity with campaign ID
     * @param param the request object
     */
    public listMemberActivity1WithHttpInfo(param: LoyaltiesApiListMemberActivity1Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMemberActivityListResponseBody>> {
        return this.api.listMemberActivity1WithHttpInfo(param.campaignId, param.memberId, param.limit, param.order, param.startingAfterId,  options).toPromise();
    }

    /**
     * Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.
     * List Member Activity with campaign ID
     * @param param the request object
     */
    public listMemberActivity1(param: LoyaltiesApiListMemberActivity1Request, options?: ConfigurationOptions): Promise<LoyaltiesMemberActivityListResponseBody> {
        return this.api.listMemberActivity1(param.campaignId, param.memberId, param.limit, param.order, param.startingAfterId,  options).toPromise();
    }

    /**
     * Retrieve member tiers using the loyalty card ID.
     * List Member\'s Loyalty Tiers
     * @param param the request object
     */
    public listMemberLoyaltyTierWithHttpInfo(param: LoyaltiesApiListMemberLoyaltyTierRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersTiersListResponseBody>> {
        return this.api.listMemberLoyaltyTierWithHttpInfo(param.memberId,  options).toPromise();
    }

    /**
     * Retrieve member tiers using the loyalty card ID.
     * List Member\'s Loyalty Tiers
     * @param param the request object
     */
    public listMemberLoyaltyTier(param: LoyaltiesApiListMemberLoyaltyTierRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersTiersListResponseBody> {
        return this.api.listMemberLoyaltyTier(param.memberId,  options).toPromise();
    }

    /**
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-pending-points-with-campaign-id). The URL was re-designed to list member pending points without having to provide the campaignId as a path parameter. Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Member Pending Points
     * @param param the request object
     */
    public listMemberPendingPointsWithHttpInfo(param: LoyaltiesApiListMemberPendingPointsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersPendingPointsListResponseBody>> {
        return this.api.listMemberPendingPointsWithHttpInfo(param.memberId, param.limit, param.order, param.startingAfterId,  options).toPromise();
    }

    /**
     *   📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-pending-points-with-campaign-id). The URL was re-designed to list member pending points without having to provide the campaignId as a path parameter. Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Member Pending Points
     * @param param the request object
     */
    public listMemberPendingPoints(param: LoyaltiesApiListMemberPendingPointsRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersPendingPointsListResponseBody> {
        return this.api.listMemberPendingPoints(param.memberId, param.limit, param.order, param.startingAfterId,  options).toPromise();
    }

    /**
     * Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Member Pending Points with campaign ID
     * @param param the request object
     */
    public listMemberPendingPoints1WithHttpInfo(param: LoyaltiesApiListMemberPendingPoints1Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersPendingPointsListResponseBody>> {
        return this.api.listMemberPendingPoints1WithHttpInfo(param.campaignId, param.memberId, param.limit, param.order, param.startingAfterId,  options).toPromise();
    }

    /**
     * Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).
     * List Member Pending Points with campaign ID
     * @param param the request object
     */
    public listMemberPendingPoints1(param: LoyaltiesApiListMemberPendingPoints1Request, options?: ConfigurationOptions): Promise<LoyaltiesMembersPendingPointsListResponseBody> {
        return this.api.listMemberPendingPoints1(param.campaignId, param.memberId, param.limit, param.order, param.startingAfterId,  options).toPromise();
    }

    /**
     * Retrieves the list of rewards that the given customer (identified by member_id, which is a loyalty card assigned to a particular customer) **can get in exchange for loyalty points**.   You can use the affordable_only parameter to limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card).   Please note that rewards that are disabled (i.e. set to Not Available in the Dashboard) for a given loyalty tier reward mapping will not be returned in this endpoint.
     * List Member Rewards
     * @param param the request object
     */
    public listMemberRewardsWithHttpInfo(param: LoyaltiesApiListMemberRewardsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersRewardsListResponseBody>> {
        return this.api.listMemberRewardsWithHttpInfo(param.memberId, param.affordableOnly,  options).toPromise();
    }

    /**
     * Retrieves the list of rewards that the given customer (identified by member_id, which is a loyalty card assigned to a particular customer) **can get in exchange for loyalty points**.   You can use the affordable_only parameter to limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card).   Please note that rewards that are disabled (i.e. set to Not Available in the Dashboard) for a given loyalty tier reward mapping will not be returned in this endpoint.
     * List Member Rewards
     * @param param the request object
     */
    public listMemberRewards(param: LoyaltiesApiListMemberRewardsRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersRewardsListResponseBody> {
        return this.api.listMemberRewards(param.memberId, param.affordableOnly,  options).toPromise();
    }

    /**
     * Returns a list of your loyalty cards. The loyalty cards are sorted by creation date, with the most recent loyalty cards appearing first.
     * List Members
     * @param param the request object
     */
    public listMembersWithHttpInfo(param: LoyaltiesApiListMembersRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesListMembersResponseBody>> {
        return this.api.listMembersWithHttpInfo(param.campaignId, param.limit, param.page, param.customer, param.createdAt, param.updatedAt, param.order, param.code, param.ids,  options).toPromise();
    }

    /**
     * Returns a list of your loyalty cards. The loyalty cards are sorted by creation date, with the most recent loyalty cards appearing first.
     * List Members
     * @param param the request object
     */
    public listMembers(param: LoyaltiesApiListMembersRequest, options?: ConfigurationOptions): Promise<LoyaltiesListMembersResponseBody> {
        return this.api.listMembers(param.campaignId, param.limit, param.page, param.customer, param.createdAt, param.updatedAt, param.order, param.code, param.ids,  options).toPromise();
    }

    /**
     * Retrieve loyalty point expiration buckets for a given loyalty card. Expired point buckets are not returned in this endpoint. You can use the [Exports API](/api-reference/exports/create-export) to retrieve a list of both ACTIVE and EXPIRED point buckets.
     * List Loyalty Card Point Expiration
     * @param param the request object
     */
    public listPointsExpirationWithHttpInfo(param: LoyaltiesApiListPointsExpirationRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersPointsExpirationListResponseBody>> {
        return this.api.listPointsExpirationWithHttpInfo(param.campaignId, param.memberId, param.limit, param.page,  options).toPromise();
    }

    /**
     * Retrieve loyalty point expiration buckets for a given loyalty card. Expired point buckets are not returned in this endpoint. You can use the [Exports API](/api-reference/exports/create-export) to retrieve a list of both ACTIVE and EXPIRED point buckets.
     * List Loyalty Card Point Expiration
     * @param param the request object
     */
    public listPointsExpiration(param: LoyaltiesApiListPointsExpirationRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersPointsExpirationListResponseBody> {
        return this.api.listPointsExpiration(param.campaignId, param.memberId, param.limit, param.page,  options).toPromise();
    }

    /**
     * Returns reward assignments from a given loyalty campaign.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-campaign-rewards). The URL was re-designed to be more contextual to the type of data returned in the response.
     * List Reward Assignments with campaign ID
     * @param param the request object
     */
    public listRewardAssignments1WithHttpInfo(param: LoyaltiesApiListRewardAssignments1Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardAssignmentsListResponseBody>> {
        return this.api.listRewardAssignments1WithHttpInfo(param.campaignId, param.limit, param.page, param.assignmentId,  options).toPromise();
    }

    /**
     * Returns reward assignments from a given loyalty campaign.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-campaign-rewards). The URL was re-designed to be more contextual to the type of data returned in the response.
     * List Reward Assignments with campaign ID
     * @param param the request object
     */
    public listRewardAssignments1(param: LoyaltiesApiListRewardAssignments1Request, options?: ConfigurationOptions): Promise<LoyaltiesRewardAssignmentsListResponseBody> {
        return this.api.listRewardAssignments1(param.campaignId, param.limit, param.page, param.assignmentId,  options).toPromise();
    }

    /**
     * Returns active rewards from a given loyalty campaign.
     * List Campaign Rewards
     * @param param the request object
     */
    public listRewardAssignments2WithHttpInfo(param: LoyaltiesApiListRewardAssignments2Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardsListAssignmentsResponseBody>> {
        return this.api.listRewardAssignments2WithHttpInfo(param.campaignId, param.limit, param.page, param.assignmentId,  options).toPromise();
    }

    /**
     * Returns active rewards from a given loyalty campaign.
     * List Campaign Rewards
     * @param param the request object
     */
    public listRewardAssignments2(param: LoyaltiesApiListRewardAssignments2Request, options?: ConfigurationOptions): Promise<LoyaltiesRewardsListAssignmentsResponseBody> {
        return this.api.listRewardAssignments2(param.campaignId, param.limit, param.page, param.assignmentId,  options).toPromise();
    }

    /**
     *   📘 Alternative endpoint This endpoint is an alternative to this [endpoint](/api-reference/loyalties/redeem-reward-with-campaign-id). The URL was re-designed to allow you to redeem a reward without having to provide the campaignId as a path parameter.
     * Redeem Reward
     * @param param the request object
     */
    public redeemRewardWithHttpInfo(param: LoyaltiesApiRedeemRewardRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersRedemptionRedeemResponseBody>> {
        return this.api.redeemRewardWithHttpInfo(param.memberId, param.loyaltiesMembersRedemptionRedeemRequestBody,  options).toPromise();
    }

    /**
     *   📘 Alternative endpoint This endpoint is an alternative to this [endpoint](/api-reference/loyalties/redeem-reward-with-campaign-id). The URL was re-designed to allow you to redeem a reward without having to provide the campaignId as a path parameter.
     * Redeem Reward
     * @param param the request object
     */
    public redeemReward(param: LoyaltiesApiRedeemRewardRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersRedemptionRedeemResponseBody> {
        return this.api.redeemReward(param.memberId, param.loyaltiesMembersRedemptionRedeemRequestBody,  options).toPromise();
    }

    /**
     * Exchange points from a loyalty card for a specified reward. This API method returns an assigned award in the response. It means that if a requesting customer gets a coupon code with a discount for the next order, that discount code will be visible in response as part of the reward object definition.
     * Redeem Reward with campaign ID
     * @param param the request object
     */
    public redeemReward1WithHttpInfo(param: LoyaltiesApiRedeemReward1Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersRedemptionRedeemResponseBody>> {
        return this.api.redeemReward1WithHttpInfo(param.campaignId, param.memberId, param.loyaltiesMembersRedemptionRedeemRequestBody,  options).toPromise();
    }

    /**
     * Exchange points from a loyalty card for a specified reward. This API method returns an assigned award in the response. It means that if a requesting customer gets a coupon code with a discount for the next order, that discount code will be visible in response as part of the reward object definition.
     * Redeem Reward with campaign ID
     * @param param the request object
     */
    public redeemReward1(param: LoyaltiesApiRedeemReward1Request, options?: ConfigurationOptions): Promise<LoyaltiesMembersRedemptionRedeemResponseBody> {
        return this.api.redeemReward1(param.campaignId, param.memberId, param.loyaltiesMembersRedemptionRedeemRequestBody,  options).toPromise();
    }

    /**
     * Transfer points between different loyalty cards which have holders. Provide the campaign ID and the loyalty card ID you want the points to be transferred to as path parameters. In the request body, provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card. Transfer works only for loyalty cards that have holders, meaning the cards were published to customers. The transferred points expire according to the target program expiration rules.
     * Transfer Loyalty Points
     * @param param the request object
     */
    public transferPointsWithHttpInfo(param: LoyaltiesApiTransferPointsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersTransfersCreateResponseBody>> {
        return this.api.transferPointsWithHttpInfo(param.campaignId, param.memberId, param.loyaltiesTransferPoints,  options).toPromise();
    }

    /**
     * Transfer points between different loyalty cards which have holders. Provide the campaign ID and the loyalty card ID you want the points to be transferred to as path parameters. In the request body, provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card. Transfer works only for loyalty cards that have holders, meaning the cards were published to customers. The transferred points expire according to the target program expiration rules.
     * Transfer Loyalty Points
     * @param param the request object
     */
    public transferPoints(param: LoyaltiesApiTransferPointsRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersTransfersCreateResponseBody> {
        return this.api.transferPoints(param.campaignId, param.memberId, param.loyaltiesTransferPoints,  options).toPromise();
    }

    /**
     * Update an earning rule definition.
     * Update Earning Rule
     * @param param the request object
     */
    public updateEarningRuleWithHttpInfo(param: LoyaltiesApiUpdateEarningRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesEarningRulesUpdateResponseBody>> {
        return this.api.updateEarningRuleWithHttpInfo(param.campaignId, param.earningRuleId, param.loyaltiesEarningRulesUpdateRequestBody,  options).toPromise();
    }

    /**
     * Update an earning rule definition.
     * Update Earning Rule
     * @param param the request object
     */
    public updateEarningRule(param: LoyaltiesApiUpdateEarningRuleRequest, options?: ConfigurationOptions): Promise<LoyaltiesEarningRulesUpdateResponseBody> {
        return this.api.updateEarningRule(param.campaignId, param.earningRuleId, param.loyaltiesEarningRulesUpdateRequestBody,  options).toPromise();
    }

    /**
     * This method gives adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/adjust-loyalty-card-balance-with-campaign-id). The URL was re-designed to allow you to add or remove loyalty card balance without having to provide the campaignId as a path parameter.
     * Adjust Loyalty Card Balance
     * @param param the request object
     */
    public updateLoyaltyCardBalanceWithHttpInfo(param: LoyaltiesApiUpdateLoyaltyCardBalanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersBalanceUpdateResponseBody>> {
        return this.api.updateLoyaltyCardBalanceWithHttpInfo(param.memberId, param.loyaltiesMembersBalanceUpdateRequestBody,  options).toPromise();
    }

    /**
     * This method gives adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/adjust-loyalty-card-balance-with-campaign-id). The URL was re-designed to allow you to add or remove loyalty card balance without having to provide the campaignId as a path parameter.
     * Adjust Loyalty Card Balance
     * @param param the request object
     */
    public updateLoyaltyCardBalance(param: LoyaltiesApiUpdateLoyaltyCardBalanceRequest, options?: ConfigurationOptions): Promise<LoyaltiesMembersBalanceUpdateResponseBody> {
        return this.api.updateLoyaltyCardBalance(param.memberId, param.loyaltiesMembersBalanceUpdateRequestBody,  options).toPromise();
    }

    /**
     * This method adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.
     * Adjust Loyalty Card Balance with campaign ID
     * @param param the request object
     */
    public updateLoyaltyCardBalance1WithHttpInfo(param: LoyaltiesApiUpdateLoyaltyCardBalance1Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesMembersBalanceUpdateResponseBody>> {
        return this.api.updateLoyaltyCardBalance1WithHttpInfo(param.campaignId, param.memberId, param.loyaltiesMembersBalanceUpdateRequestBody,  options).toPromise();
    }

    /**
     * This method adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.
     * Adjust Loyalty Card Balance with campaign ID
     * @param param the request object
     */
    public updateLoyaltyCardBalance1(param: LoyaltiesApiUpdateLoyaltyCardBalance1Request, options?: ConfigurationOptions): Promise<LoyaltiesMembersBalanceUpdateResponseBody> {
        return this.api.updateLoyaltyCardBalance1(param.campaignId, param.memberId, param.loyaltiesMembersBalanceUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates a loyalty program.  Fields other than those specified in the allowed request body payload wont be modified (even if provided they are silently skipped). Any parameters not provided will be left unchanged.  This method will update the [loyalty cards](/api-reference/loyalties/get-member) which have not been published or redeemed yet.
     * Update Loyalty Campaign
     * @param param the request object
     */
    public updateLoyaltyProgramWithHttpInfo(param: LoyaltiesApiUpdateLoyaltyProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesUpdateCampaignResponseBody>> {
        return this.api.updateLoyaltyProgramWithHttpInfo(param.campaignId, param.loyaltiesUpdateCampaignRequestBody,  options).toPromise();
    }

    /**
     * Updates a loyalty program.  Fields other than those specified in the allowed request body payload wont be modified (even if provided they are silently skipped). Any parameters not provided will be left unchanged.  This method will update the [loyalty cards](/api-reference/loyalties/get-member) which have not been published or redeemed yet.
     * Update Loyalty Campaign
     * @param param the request object
     */
    public updateLoyaltyProgram(param: LoyaltiesApiUpdateLoyaltyProgramRequest, options?: ConfigurationOptions): Promise<LoyaltiesUpdateCampaignResponseBody> {
        return this.api.updateLoyaltyProgram(param.campaignId, param.loyaltiesUpdateCampaignRequestBody,  options).toPromise();
    }

    /**
     * Updates rewards parameters, i.e. the points cost for the specific reward.
     * Update Campaign Reward Assignment
     * @param param the request object
     */
    public updateRewardAssignment1WithHttpInfo(param: LoyaltiesApiUpdateRewardAssignment1Request, options?: ConfigurationOptions): Promise<HttpInfo<LoyaltiesRewardsUpdateAssignmentResponseBody>> {
        return this.api.updateRewardAssignment1WithHttpInfo(param.campaignId, param.assignmentId, param.loyaltiesRewardsUpdateAssignmentRequestBody,  options).toPromise();
    }

    /**
     * Updates rewards parameters, i.e. the points cost for the specific reward.
     * Update Campaign Reward Assignment
     * @param param the request object
     */
    public updateRewardAssignment1(param: LoyaltiesApiUpdateRewardAssignment1Request, options?: ConfigurationOptions): Promise<LoyaltiesRewardsUpdateAssignmentResponseBody> {
        return this.api.updateRewardAssignment1(param.campaignId, param.assignmentId, param.loyaltiesRewardsUpdateAssignmentRequestBody,  options).toPromise();
    }

}

import { ObservableManagementApi } from "./ObservableAPI";
import { ManagementApiRequestFactory, ManagementApiResponseProcessor} from "../apis/ManagementApi";

export interface ManagementApiAssignUserRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiassignUser
     */
    projectId: string
    /**
     * Defines the user details.
     * @type ManagementProjectsUsersAssignRequestBody
     * @memberof ManagementApiassignUser
     */
    managementProjectsUsersAssignRequestBody?: ManagementProjectsUsersAssignRequestBody
}

export interface ManagementApiCreateBrandRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApicreateBrand
     */
    projectId: string
    /**
     * Defines a brand configuration.
     * @type ManagementProjectsBrandingCreateRequestBody
     * @memberof ManagementApicreateBrand
     */
    managementProjectsBrandingCreateRequestBody?: ManagementProjectsBrandingCreateRequestBody
}

export interface ManagementApiCreateCustomEventSchemaRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApicreateCustomEventSchema
     */
    projectId: string
    /**
     * Defines the custom event schema.
     * @type ManagementProjectsCustomEventSchemasCreateRequestBody
     * @memberof ManagementApicreateCustomEventSchema
     */
    managementProjectsCustomEventSchemasCreateRequestBody?: ManagementProjectsCustomEventSchemasCreateRequestBody
}

export interface ManagementApiCreateMetadataSchemaRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApicreateMetadataSchema
     */
    projectId: string
    /**
     * Defines the metadata schema.
     * @type ManagementProjectsMetadataSchemasCreateRequestBody
     * @memberof ManagementApicreateMetadataSchema
     */
    managementProjectsMetadataSchemasCreateRequestBody?: ManagementProjectsMetadataSchemasCreateRequestBody
}

export interface ManagementApiCreateProjectRequest {
    /**
     * Define project details.
     * @type ManagementProjectsCreateRequestBody
     * @memberof ManagementApicreateProject
     */
    managementProjectsCreateRequestBody?: ManagementProjectsCreateRequestBody
}

export interface ManagementApiCreateStackingRulesRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApicreateStackingRules
     */
    projectId: string
    /**
     * Defines the stacking rule parameters.
     * @type ManagementProjectsStackingRulesCreateRequestBody
     * @memberof ManagementApicreateStackingRules
     */
    managementProjectsStackingRulesCreateRequestBody?: ManagementProjectsStackingRulesCreateRequestBody
}

export interface ManagementApiCreateWebhookRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApicreateWebhook
     */
    projectId: string
    /**
     * Defines a webhook configuration.
     * @type ManagementProjectsWebhooksCreateRequestBody
     * @memberof ManagementApicreateWebhook
     */
    managementProjectsWebhooksCreateRequestBody?: ManagementProjectsWebhooksCreateRequestBody
}

export interface ManagementApiDeleteBrandRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApideleteBrand
     */
    projectId: string
    /**
     * Provide the unique identifier of the brand configuration.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApideleteBrand
     */
    brandingId: string
}

export interface ManagementApiDeleteCustomEventSchemaRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApideleteCustomEventSchema
     */
    projectId: string
    /**
     * Provide the unique identifier of the custom event schema.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApideleteCustomEventSchema
     */
    customEventSchemaId: string
}

export interface ManagementApiDeleteMetadataSchemaRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApideleteMetadataSchema
     */
    projectId: string
    /**
     * Provide the unique identifier of the metadata schema.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApideleteMetadataSchema
     */
    metadataSchemaId: string
}

export interface ManagementApiDeleteProjectRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApideleteProject
     */
    projectId: string
}

export interface ManagementApiDeleteStackingRulesRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApideleteStackingRules
     */
    projectId: string
    /**
     * Provide the unique identifier of the stacking rules.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApideleteStackingRules
     */
    stackingRulesId: string
}

export interface ManagementApiDeleteWebhookRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApideleteWebhook
     */
    projectId: string
    /**
     * Provide the unique identifier of the webhook configuration.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApideleteWebhook
     */
    webhookId: string
}

export interface ManagementApiGetBrandRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetBrand
     */
    projectId: string
    /**
     * Provide the unique identifier of the brand configuration.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetBrand
     */
    brandingId: string
}

export interface ManagementApiGetCustomEventSchemaRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetCustomEventSchema
     */
    projectId: string
    /**
     * Provide the unique identifier of the custom event schema.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetCustomEventSchema
     */
    customEventSchemaId: string
}

export interface ManagementApiGetMetadataSchema1Request {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetMetadataSchema1
     */
    projectId: string
    /**
     * Provide the unique identifier of the metadata schema.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetMetadataSchema1
     */
    metadataSchemaId: string
}

export interface ManagementApiGetProjectRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetProject
     */
    projectId: string
}

export interface ManagementApiGetStackingRulesRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetStackingRules
     */
    projectId: string
    /**
     * Provide the unique identifier of the stacking rules.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetStackingRules
     */
    stackingRulesId: string
}

export interface ManagementApiGetUserRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetUser
     */
    projectId: string
    /**
     * Provide the unique identifier of the user. Alternatively, provide the users login.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetUser
     */
    userId: string
}

export interface ManagementApiGetWebhookRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetWebhook
     */
    projectId: string
    /**
     * Provide the unique identifier of the webhook configuration.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApigetWebhook
     */
    webhookId: string
}

export interface ManagementApiInviteUserRequest {
    /**
     * Defines the details of the invitation, the project, and roles to which the user will be assigned.
     * @type ManagementProjectsUsersInviteCreateRequestBody
     * @memberof ManagementApiinviteUser
     */
    managementProjectsUsersInviteCreateRequestBody?: ManagementProjectsUsersInviteCreateRequestBody
}

export interface ManagementApiListBrandsRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApilistBrands
     */
    projectId: string
}

export interface ManagementApiListCustomEventSchemasRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApilistCustomEventSchemas
     */
    projectId: string
}

export interface ManagementApiListMetadataSchemas1Request {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApilistMetadataSchemas1
     */
    projectId: string
}

export interface ManagementApiListProjectsRequest {
}

export interface ManagementApiListStackingRulesRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApilistStackingRules
     */
    projectId: string
}

export interface ManagementApiListUsersRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApilistUsers
     */
    projectId: string
}

export interface ManagementApiListWebhooksRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApilistWebhooks
     */
    projectId: string
}

export interface ManagementApiManagementCopyCampaignTemplateRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApimanagementCopyCampaignTemplate
     */
    projectId: string
    /**
     * Provide the unique identifier of the campaign template.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApimanagementCopyCampaignTemplate
     */
    campaignTemplateId: string
    /**
     * Determines the details about the template in the destination project as well as the destination project itself.
     * @type ManagementProjectsTemplatesCampaignsCopyCreateRequestBody
     * @memberof ManagementApimanagementCopyCampaignTemplate
     */
    managementProjectsTemplatesCampaignsCopyCreateRequestBody?: ManagementProjectsTemplatesCampaignsCopyCreateRequestBody
}

export interface ManagementApiManagementListCampaignTemplatesRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApimanagementListCampaignTemplates
     */
    projectId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ManagementApimanagementListCampaignTemplates
     */
    limit?: number
    /**
     * A cursor for pagination. It retrieves the campaign templates created after a template with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApimanagementListCampaignTemplates
     */
    startingAfterId?: string
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterTemplatesList
     * @memberof ManagementApimanagementListCampaignTemplates
     */
    order?: ParameterTemplatesList
    /**
     * If set to true, the response returns the number of all campaign templates, regardless of the applied filters or limits. Set to false by default.
     * Defaults to: undefined
     * @type boolean
     * @memberof ManagementApimanagementListCampaignTemplates
     */
    includeTotal?: boolean
    /**
     * Filters for listing templates.
     * Defaults to: undefined
     * @type ParameterFiltersListTemplates
     * @memberof ManagementApimanagementListCampaignTemplates
     */
    filters?: ParameterFiltersListTemplates
}

export interface ManagementApiUnassignUserRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiunassignUser
     */
    projectId: string
    /**
     * Provide the unique identifier of the user. Alternatively, provide the users login.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiunassignUser
     */
    userId: string
}

export interface ManagementApiUpdateBrandRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateBrand
     */
    projectId: string
    /**
     * Provide the unique identifier of the brand configuration.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateBrand
     */
    brandingId: string
    /**
     * Defines the brand configuration to be updated.
     * @type ManagementProjectsBrandingUpdateRequestBody
     * @memberof ManagementApiupdateBrand
     */
    managementProjectsBrandingUpdateRequestBody?: ManagementProjectsBrandingUpdateRequestBody
}

export interface ManagementApiUpdateCustomEventSchemaRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateCustomEventSchema
     */
    projectId: string
    /**
     * Provide the unique identifier of the custom event schema.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateCustomEventSchema
     */
    customEventSchemaId: string
    /**
     * Defines the custom event schema to be updated.
     * @type ManagementProjectsCustomEventSchemasUpdateRequestBody
     * @memberof ManagementApiupdateCustomEventSchema
     */
    managementProjectsCustomEventSchemasUpdateRequestBody?: ManagementProjectsCustomEventSchemasUpdateRequestBody
}

export interface ManagementApiUpdateMetadataSchemaRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateMetadataSchema
     */
    projectId: string
    /**
     * Provide the unique identifier of the metadata schema.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateMetadataSchema
     */
    metadataSchemaId: string
    /**
     * Defines the metadata schema to be updated.
     * @type ManagementProjectsMetadataSchemasUpdateRequestBody
     * @memberof ManagementApiupdateMetadataSchema
     */
    managementProjectsMetadataSchemasUpdateRequestBody?: ManagementProjectsMetadataSchemasUpdateRequestBody
}

export interface ManagementApiUpdateProjectRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateProject
     */
    projectId: string
    /**
     * Define the project details to be updated.
     * @type ManagementProjectsUpdateRequestBody
     * @memberof ManagementApiupdateProject
     */
    managementProjectsUpdateRequestBody?: ManagementProjectsUpdateRequestBody
}

export interface ManagementApiUpdateStackingRulesRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateStackingRules
     */
    projectId: string
    /**
     * Provide the unique identifier of the stacking rules.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateStackingRules
     */
    stackingRulesId: string
    /**
     * Defines the stacking rules to be updated.
     * @type ManagementProjectsStackingRulesUpdateRequestBody
     * @memberof ManagementApiupdateStackingRules
     */
    managementProjectsStackingRulesUpdateRequestBody?: ManagementProjectsStackingRulesUpdateRequestBody
}

export interface ManagementApiUpdateUserRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateUser
     */
    projectId: string
    /**
     * Provide the unique identifier of the user. Alternatively, provide the users login.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateUser
     */
    userId: string
    /**
     * Defines the users new role.
     * @type ManagementProjectsUsersUpdateRoleRequestBody
     * @memberof ManagementApiupdateUser
     */
    managementProjectsUsersUpdateRoleRequestBody?: ManagementProjectsUsersUpdateRoleRequestBody
}

export interface ManagementApiUpdateWebhookRequest {
    /**
     * Provide the unique identifier of the project.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateWebhook
     */
    projectId: string
    /**
     * Provide the unique identifier of the webhook configuration.
     * Defaults to: undefined
     * @type string
     * @memberof ManagementApiupdateWebhook
     */
    webhookId: string
    /**
     * Defines the webhook configuration to be updated.
     * @type ManagementProjectsWebhooksUpdateRequestBody
     * @memberof ManagementApiupdateWebhook
     */
    managementProjectsWebhooksUpdateRequestBody?: ManagementProjectsWebhooksUpdateRequestBody
}

export class ObjectManagementApi {
    private api: ObservableManagementApi

    public constructor(configuration: Configuration, requestFactory?: ManagementApiRequestFactory, responseProcessor?: ManagementApiResponseProcessor) {
        this.api = new ObservableManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assigns a user to a given project. The user must be an existing user in Voucherify.  🚧 Correct Use of Data To avoid errors, use the role key with either id or login keys.
     * Assign User
     * @param param the request object
     */
    public assignUserWithHttpInfo(param: ManagementApiAssignUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsUsersAssignResponseBody>> {
        return this.api.assignUserWithHttpInfo(param.projectId, param.managementProjectsUsersAssignRequestBody,  options).toPromise();
    }

    /**
     * Assigns a user to a given project. The user must be an existing user in Voucherify.  🚧 Correct Use of Data To avoid errors, use the role key with either id or login keys.
     * Assign User
     * @param param the request object
     */
    public assignUser(param: ManagementApiAssignUserRequest, options?: ConfigurationOptions): Promise<ManagementProjectsUsersAssignResponseBody> {
        return this.api.assignUser(param.projectId, param.managementProjectsUsersAssignRequestBody,  options).toPromise();
    }

    /**
     * Creates a new brand configuration. You can have only one brand configured for a project.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.
     * Create Brand
     * @param param the request object
     */
    public createBrandWithHttpInfo(param: ManagementApiCreateBrandRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsBrandingCreateResponseBody>> {
        return this.api.createBrandWithHttpInfo(param.projectId, param.managementProjectsBrandingCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a new brand configuration. You can have only one brand configured for a project.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.
     * Create Brand
     * @param param the request object
     */
    public createBrand(param: ManagementApiCreateBrandRequest, options?: ConfigurationOptions): Promise<ManagementProjectsBrandingCreateResponseBody> {
        return this.api.createBrand(param.projectId, param.managementProjectsBrandingCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a custom event schema. The properties object is required, but it can be empty, however. This object is for optional custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Create Custom Event Schema
     * @param param the request object
     */
    public createCustomEventSchemaWithHttpInfo(param: ManagementApiCreateCustomEventSchemaRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsCustomEventSchemasCreateResponseBody>> {
        return this.api.createCustomEventSchemaWithHttpInfo(param.projectId, param.managementProjectsCustomEventSchemasCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a custom event schema. The properties object is required, but it can be empty, however. This object is for optional custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Create Custom Event Schema
     * @param param the request object
     */
    public createCustomEventSchema(param: ManagementApiCreateCustomEventSchemaRequest, options?: ConfigurationOptions): Promise<ManagementProjectsCustomEventSchemasCreateResponseBody> {
        return this.api.createCustomEventSchema(param.projectId, param.managementProjectsCustomEventSchemasCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a new metadata (custom attribute) schema for a given resource. The schema consists of a set of key-value pairs to customize Voucherify resources.  You can nest your object within a standard metadata schema, e.g. within a campaign or customer schema. However, your nested object cant include another nested object. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward Use this endpoint to define a metadata schema of a given resource for the first time. Once you configure a metadata schema for a given related_object, use the PUT [Update metadata schema](/api-reference/management/update-metadata-schema) endpoint to either update or add new metadata key-value pairs. For example, use this endpoint to define a metadata schema for related_object: campaign for the first time. If you want define a new metadata property for campaign, use the [PUT Update metadata schema](/api-reference/management/update-metadata-schema) endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Create Metadata Schema
     * @param param the request object
     */
    public createMetadataSchemaWithHttpInfo(param: ManagementApiCreateMetadataSchemaRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsMetadataSchemasCreateResponseBody>> {
        return this.api.createMetadataSchemaWithHttpInfo(param.projectId, param.managementProjectsMetadataSchemasCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a new metadata (custom attribute) schema for a given resource. The schema consists of a set of key-value pairs to customize Voucherify resources.  You can nest your object within a standard metadata schema, e.g. within a campaign or customer schema. However, your nested object cant include another nested object. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward Use this endpoint to define a metadata schema of a given resource for the first time. Once you configure a metadata schema for a given related_object, use the PUT [Update metadata schema](/api-reference/management/update-metadata-schema) endpoint to either update or add new metadata key-value pairs. For example, use this endpoint to define a metadata schema for related_object: campaign for the first time. If you want define a new metadata property for campaign, use the [PUT Update metadata schema](/api-reference/management/update-metadata-schema) endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Create Metadata Schema
     * @param param the request object
     */
    public createMetadataSchema(param: ManagementApiCreateMetadataSchemaRequest, options?: ConfigurationOptions): Promise<ManagementProjectsMetadataSchemasCreateResponseBody> {
        return this.api.createMetadataSchema(param.projectId, param.managementProjectsMetadataSchemasCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a new project. You can add users, specify the cluster, timezone, currency, and other details. All owners are added to the project by default.
     * Create Project
     * @param param the request object
     */
    public createProjectWithHttpInfo(param: ManagementApiCreateProjectRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsCreateResponseBody>> {
        return this.api.createProjectWithHttpInfo(param.managementProjectsCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a new project. You can add users, specify the cluster, timezone, currency, and other details. All owners are added to the project by default.
     * Create Project
     * @param param the request object
     */
    public createProject(param: ManagementApiCreateProjectRequest = {}, options?: ConfigurationOptions): Promise<ManagementProjectsCreateResponseBody> {
        return this.api.createProject(param.managementProjectsCreateRequestBody,  options).toPromise();
    }

    /**
     * Overwrites the default stacking rules. If new stacking rules have been created for the project earlier (e.g. in the user interface), it returns an error. Use [Update stacking rules](/api-reference/management/update-stacking-rules) endpoint to change the rules.  📘 Stacking rules documentation  Read [the Stacking rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Create Stacking Rules
     * @param param the request object
     */
    public createStackingRulesWithHttpInfo(param: ManagementApiCreateStackingRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsStackingRulesCreateResponseBody>> {
        return this.api.createStackingRulesWithHttpInfo(param.projectId, param.managementProjectsStackingRulesCreateRequestBody,  options).toPromise();
    }

    /**
     * Overwrites the default stacking rules. If new stacking rules have been created for the project earlier (e.g. in the user interface), it returns an error. Use [Update stacking rules](/api-reference/management/update-stacking-rules) endpoint to change the rules.  📘 Stacking rules documentation  Read [the Stacking rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Create Stacking Rules
     * @param param the request object
     */
    public createStackingRules(param: ManagementApiCreateStackingRulesRequest, options?: ConfigurationOptions): Promise<ManagementProjectsStackingRulesCreateResponseBody> {
        return this.api.createStackingRules(param.projectId, param.managementProjectsStackingRulesCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a new webhook configuration.  📘 Webhook Documentation  Read [Webhooks v2024-01-01](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Create Webhook
     * @param param the request object
     */
    public createWebhookWithHttpInfo(param: ManagementApiCreateWebhookRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsWebhooksCreateResponseBody>> {
        return this.api.createWebhookWithHttpInfo(param.projectId, param.managementProjectsWebhooksCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a new webhook configuration.  📘 Webhook Documentation  Read [Webhooks v2024-01-01](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Create Webhook
     * @param param the request object
     */
    public createWebhook(param: ManagementApiCreateWebhookRequest, options?: ConfigurationOptions): Promise<ManagementProjectsWebhooksCreateResponseBody> {
        return this.api.createWebhook(param.projectId, param.managementProjectsWebhooksCreateRequestBody,  options).toPromise();
    }

    /**
     * Deletes permanently a brand configuration.
     * Delete Brand
     * @param param the request object
     */
    public deleteBrandWithHttpInfo(param: ManagementApiDeleteBrandRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteBrandWithHttpInfo(param.projectId, param.brandingId,  options).toPromise();
    }

    /**
     * Deletes permanently a brand configuration.
     * Delete Brand
     * @param param the request object
     */
    public deleteBrand(param: ManagementApiDeleteBrandRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteBrand(param.projectId, param.brandingId,  options).toPromise();
    }

    /**
     * Deletes permanently the custom event schema with its custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Delete Custom Event Schema
     * @param param the request object
     */
    public deleteCustomEventSchemaWithHttpInfo(param: ManagementApiDeleteCustomEventSchemaRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCustomEventSchemaWithHttpInfo(param.projectId, param.customEventSchemaId,  options).toPromise();
    }

    /**
     * Deletes permanently the custom event schema with its custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Delete Custom Event Schema
     * @param param the request object
     */
    public deleteCustomEventSchema(param: ManagementApiDeleteCustomEventSchemaRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCustomEventSchema(param.projectId, param.customEventSchemaId,  options).toPromise();
    }

    /**
     * Deletes permanently the metadata schema. In standard metadata schemas, this endpoint removes permanently all definitions. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward If you want to delete only one definition, use the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. In the request, provide the deleted: true pair in the definition object. This definition will be moved to Removed definitions. If you want to create a new standard metadata schema, use the [Create Metadata Schema](/api-reference/management/create-metadata-schema) endpoint.  🚧 Metadata Purging This endpoint deletes permanently the metadata schemas only. However, it does not purge the metadata from associated entities, so the metadata added to those entities will remain. If you want to purge metadata from the entities: 1. Remove all the definitions you want to purge. You can do this either in Voucherify Project Settings > Metadata Schema tab or with the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. 2. In Voucherify Project Settings > Metadata Schema tab, go to the relevant metadata schema. 3. In Removed definitions, click the bin button next to the definitions whose metadata you want to purge from entities. Note: - This is an asynchronous action. You will be notified when it has been completed. - You cannot purge metadata for the Redemption and Publication schemas. 4. Use the Delete Metadata Schema request to delete the metadata schema from Voucherify.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Delete Metadata Schema
     * @param param the request object
     */
    public deleteMetadataSchemaWithHttpInfo(param: ManagementApiDeleteMetadataSchemaRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteMetadataSchemaWithHttpInfo(param.projectId, param.metadataSchemaId,  options).toPromise();
    }

    /**
     * Deletes permanently the metadata schema. In standard metadata schemas, this endpoint removes permanently all definitions. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward If you want to delete only one definition, use the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. In the request, provide the deleted: true pair in the definition object. This definition will be moved to Removed definitions. If you want to create a new standard metadata schema, use the [Create Metadata Schema](/api-reference/management/create-metadata-schema) endpoint.  🚧 Metadata Purging This endpoint deletes permanently the metadata schemas only. However, it does not purge the metadata from associated entities, so the metadata added to those entities will remain. If you want to purge metadata from the entities: 1. Remove all the definitions you want to purge. You can do this either in Voucherify Project Settings > Metadata Schema tab or with the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. 2. In Voucherify Project Settings > Metadata Schema tab, go to the relevant metadata schema. 3. In Removed definitions, click the bin button next to the definitions whose metadata you want to purge from entities. Note: - This is an asynchronous action. You will be notified when it has been completed. - You cannot purge metadata for the Redemption and Publication schemas. 4. Use the Delete Metadata Schema request to delete the metadata schema from Voucherify.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Delete Metadata Schema
     * @param param the request object
     */
    public deleteMetadataSchema(param: ManagementApiDeleteMetadataSchemaRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteMetadataSchema(param.projectId, param.metadataSchemaId,  options).toPromise();
    }

    /**
     * Deletes an existing project. The users currently using the deleted project will be automatically logged out.  🚧 Sandbox Project The sandbox project cannot be deleted.
     * Delete Project
     * @param param the request object
     */
    public deleteProjectWithHttpInfo(param: ManagementApiDeleteProjectRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteProjectWithHttpInfo(param.projectId,  options).toPromise();
    }

    /**
     * Deletes an existing project. The users currently using the deleted project will be automatically logged out.  🚧 Sandbox Project The sandbox project cannot be deleted.
     * Delete Project
     * @param param the request object
     */
    public deleteProject(param: ManagementApiDeleteProjectRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteProject(param.projectId,  options).toPromise();
    }

    /**
     * Deletes permanently the current settings for the stacking rules. The stacking rules are restored to default values.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Delete Stacking Rules
     * @param param the request object
     */
    public deleteStackingRulesWithHttpInfo(param: ManagementApiDeleteStackingRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteStackingRulesWithHttpInfo(param.projectId, param.stackingRulesId,  options).toPromise();
    }

    /**
     * Deletes permanently the current settings for the stacking rules. The stacking rules are restored to default values.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Delete Stacking Rules
     * @param param the request object
     */
    public deleteStackingRules(param: ManagementApiDeleteStackingRulesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteStackingRules(param.projectId, param.stackingRulesId,  options).toPromise();
    }

    /**
     * Deletes a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Delete Webhook
     * @param param the request object
     */
    public deleteWebhookWithHttpInfo(param: ManagementApiDeleteWebhookRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteWebhookWithHttpInfo(param.projectId, param.webhookId,  options).toPromise();
    }

    /**
     * Deletes a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Delete Webhook
     * @param param the request object
     */
    public deleteWebhook(param: ManagementApiDeleteWebhookRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteWebhook(param.projectId, param.webhookId,  options).toPromise();
    }

    /**
     * Retrieves a brand configuration.
     * Get Brand
     * @param param the request object
     */
    public getBrandWithHttpInfo(param: ManagementApiGetBrandRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsBrandingGetResponseBody>> {
        return this.api.getBrandWithHttpInfo(param.projectId, param.brandingId,  options).toPromise();
    }

    /**
     * Retrieves a brand configuration.
     * Get Brand
     * @param param the request object
     */
    public getBrand(param: ManagementApiGetBrandRequest, options?: ConfigurationOptions): Promise<ManagementProjectsBrandingGetResponseBody> {
        return this.api.getBrand(param.projectId, param.brandingId,  options).toPromise();
    }

    /**
     * Retrieves a custom event schema.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Get Custom Event Schema
     * @param param the request object
     */
    public getCustomEventSchemaWithHttpInfo(param: ManagementApiGetCustomEventSchemaRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsCustomEventSchemasGetResponseBody>> {
        return this.api.getCustomEventSchemaWithHttpInfo(param.projectId, param.customEventSchemaId,  options).toPromise();
    }

    /**
     * Retrieves a custom event schema.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Get Custom Event Schema
     * @param param the request object
     */
    public getCustomEventSchema(param: ManagementApiGetCustomEventSchemaRequest, options?: ConfigurationOptions): Promise<ManagementProjectsCustomEventSchemasGetResponseBody> {
        return this.api.getCustomEventSchema(param.projectId, param.customEventSchemaId,  options).toPromise();
    }

    /**
     * Retrieves a metadata schema.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Get Metadata Schema
     * @param param the request object
     */
    public getMetadataSchema1WithHttpInfo(param: ManagementApiGetMetadataSchema1Request, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsMetadataSchemasGetResponseBody>> {
        return this.api.getMetadataSchema1WithHttpInfo(param.projectId, param.metadataSchemaId,  options).toPromise();
    }

    /**
     * Retrieves a metadata schema.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Get Metadata Schema
     * @param param the request object
     */
    public getMetadataSchema1(param: ManagementApiGetMetadataSchema1Request, options?: ConfigurationOptions): Promise<ManagementProjectsMetadataSchemasGetResponseBody> {
        return this.api.getMetadataSchema1(param.projectId, param.metadataSchemaId,  options).toPromise();
    }

    /**
     * Retrieves an existing project.
     * Get Project
     * @param param the request object
     */
    public getProjectWithHttpInfo(param: ManagementApiGetProjectRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsGetResponseBody>> {
        return this.api.getProjectWithHttpInfo(param.projectId,  options).toPromise();
    }

    /**
     * Retrieves an existing project.
     * Get Project
     * @param param the request object
     */
    public getProject(param: ManagementApiGetProjectRequest, options?: ConfigurationOptions): Promise<ManagementProjectsGetResponseBody> {
        return this.api.getProject(param.projectId,  options).toPromise();
    }

    /**
     * Retrieves the stacking rules for the project.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Get Stacking Rules
     * @param param the request object
     */
    public getStackingRulesWithHttpInfo(param: ManagementApiGetStackingRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsStackingRulesGetResponseBody>> {
        return this.api.getStackingRulesWithHttpInfo(param.projectId, param.stackingRulesId,  options).toPromise();
    }

    /**
     * Retrieves the stacking rules for the project.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Get Stacking Rules
     * @param param the request object
     */
    public getStackingRules(param: ManagementApiGetStackingRulesRequest, options?: ConfigurationOptions): Promise<ManagementProjectsStackingRulesGetResponseBody> {
        return this.api.getStackingRules(param.projectId, param.stackingRulesId,  options).toPromise();
    }

    /**
     * Retrieves the project users details.
     * Get User
     * @param param the request object
     */
    public getUserWithHttpInfo(param: ManagementApiGetUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsUsersGetUserResponseBody>> {
        return this.api.getUserWithHttpInfo(param.projectId, param.userId,  options).toPromise();
    }

    /**
     * Retrieves the project users details.
     * Get User
     * @param param the request object
     */
    public getUser(param: ManagementApiGetUserRequest, options?: ConfigurationOptions): Promise<ManagementProjectsUsersGetUserResponseBody> {
        return this.api.getUser(param.projectId, param.userId,  options).toPromise();
    }

    /**
     * Retrieves a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Get Webhook
     * @param param the request object
     */
    public getWebhookWithHttpInfo(param: ManagementApiGetWebhookRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsWebhooksGetResponseBody>> {
        return this.api.getWebhookWithHttpInfo(param.projectId, param.webhookId,  options).toPromise();
    }

    /**
     * Retrieves a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Get Webhook
     * @param param the request object
     */
    public getWebhook(param: ManagementApiGetWebhookRequest, options?: ConfigurationOptions): Promise<ManagementProjectsWebhooksGetResponseBody> {
        return this.api.getWebhook(param.projectId, param.webhookId,  options).toPromise();
    }

    /**
     * Sends an invitation to an email address that has not been used yet as a Voucherify user login. You can specify the projects to which the invited user will be assigned and define their roles.
     * Invite a New User
     * @param param the request object
     */
    public inviteUserWithHttpInfo(param: ManagementApiInviteUserRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.inviteUserWithHttpInfo(param.managementProjectsUsersInviteCreateRequestBody,  options).toPromise();
    }

    /**
     * Sends an invitation to an email address that has not been used yet as a Voucherify user login. You can specify the projects to which the invited user will be assigned and define their roles.
     * Invite a New User
     * @param param the request object
     */
    public inviteUser(param: ManagementApiInviteUserRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.inviteUser(param.managementProjectsUsersInviteCreateRequestBody,  options).toPromise();
    }

    /**
     * Lists all brand configurations. Because a project can have only one brand, it always returns a list with one item. This endpoint can be used to retrieve the brand configuration created with the Voucherify Dashboard and the ID.
     * List Brands
     * @param param the request object
     */
    public listBrandsWithHttpInfo(param: ManagementApiListBrandsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsBrandingListResponseBody>> {
        return this.api.listBrandsWithHttpInfo(param.projectId,  options).toPromise();
    }

    /**
     * Lists all brand configurations. Because a project can have only one brand, it always returns a list with one item. This endpoint can be used to retrieve the brand configuration created with the Voucherify Dashboard and the ID.
     * List Brands
     * @param param the request object
     */
    public listBrands(param: ManagementApiListBrandsRequest, options?: ConfigurationOptions): Promise<ManagementProjectsBrandingListResponseBody> {
        return this.api.listBrands(param.projectId,  options).toPromise();
    }

    /**
     * Lists all custom event schemas available in the project.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * List Custom Event Schemas
     * @param param the request object
     */
    public listCustomEventSchemasWithHttpInfo(param: ManagementApiListCustomEventSchemasRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsCustomEventSchemasListResponseBody>> {
        return this.api.listCustomEventSchemasWithHttpInfo(param.projectId,  options).toPromise();
    }

    /**
     * Lists all custom event schemas available in the project.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * List Custom Event Schemas
     * @param param the request object
     */
    public listCustomEventSchemas(param: ManagementApiListCustomEventSchemasRequest, options?: ConfigurationOptions): Promise<ManagementProjectsCustomEventSchemasListResponseBody> {
        return this.api.listCustomEventSchemas(param.projectId,  options).toPromise();
    }

    /**
     * Lists all metadata schemas available in the project.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * List Metadata Schemas
     * @param param the request object
     */
    public listMetadataSchemas1WithHttpInfo(param: ManagementApiListMetadataSchemas1Request, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsMetadataSchemasListResponseBody>> {
        return this.api.listMetadataSchemas1WithHttpInfo(param.projectId,  options).toPromise();
    }

    /**
     * Lists all metadata schemas available in the project.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * List Metadata Schemas
     * @param param the request object
     */
    public listMetadataSchemas1(param: ManagementApiListMetadataSchemas1Request, options?: ConfigurationOptions): Promise<ManagementProjectsMetadataSchemasListResponseBody> {
        return this.api.listMetadataSchemas1(param.projectId,  options).toPromise();
    }

    /**
     * Lists all projects for the organization. The endpoint does not require any query parameters.
     * List Projects
     * @param param the request object
     */
    public listProjectsWithHttpInfo(param: ManagementApiListProjectsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsListResponseBody>> {
        return this.api.listProjectsWithHttpInfo( options).toPromise();
    }

    /**
     * Lists all projects for the organization. The endpoint does not require any query parameters.
     * List Projects
     * @param param the request object
     */
    public listProjects(param: ManagementApiListProjectsRequest = {}, options?: ConfigurationOptions): Promise<ManagementProjectsListResponseBody> {
        return this.api.listProjects( options).toPromise();
    }

    /**
     * Lists all stacking rules. Returns always a list with one item. This endpoint can be used to retrieve the default stacking rules. The default stacking rules do not have an ID that could be used with the [Get Stacking Rules](/api-reference/management/get-stacking-rules) or [Update Stacking Rules](/api-reference/management/update-stacking-rules) endpoints.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * List Stacking Rules
     * @param param the request object
     */
    public listStackingRulesWithHttpInfo(param: ManagementApiListStackingRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsStackingRulesListResponseBody>> {
        return this.api.listStackingRulesWithHttpInfo(param.projectId,  options).toPromise();
    }

    /**
     * Lists all stacking rules. Returns always a list with one item. This endpoint can be used to retrieve the default stacking rules. The default stacking rules do not have an ID that could be used with the [Get Stacking Rules](/api-reference/management/get-stacking-rules) or [Update Stacking Rules](/api-reference/management/update-stacking-rules) endpoints.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * List Stacking Rules
     * @param param the request object
     */
    public listStackingRules(param: ManagementApiListStackingRulesRequest, options?: ConfigurationOptions): Promise<ManagementProjectsStackingRulesListResponseBody> {
        return this.api.listStackingRules(param.projectId,  options).toPromise();
    }

    /**
     * Lists all users assigned to the project.
     * List Users
     * @param param the request object
     */
    public listUsersWithHttpInfo(param: ManagementApiListUsersRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsUsersListResponseBody>> {
        return this.api.listUsersWithHttpInfo(param.projectId,  options).toPromise();
    }

    /**
     * Lists all users assigned to the project.
     * List Users
     * @param param the request object
     */
    public listUsers(param: ManagementApiListUsersRequest, options?: ConfigurationOptions): Promise<ManagementProjectsUsersListResponseBody> {
        return this.api.listUsers(param.projectId,  options).toPromise();
    }

    /**
     * Lists all webhook configurations for the project.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * List Webhooks
     * @param param the request object
     */
    public listWebhooksWithHttpInfo(param: ManagementApiListWebhooksRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsWebhooksListResponseBody>> {
        return this.api.listWebhooksWithHttpInfo(param.projectId,  options).toPromise();
    }

    /**
     * Lists all webhook configurations for the project.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * List Webhooks
     * @param param the request object
     */
    public listWebhooks(param: ManagementApiListWebhooksRequest, options?: ConfigurationOptions): Promise<ManagementProjectsWebhooksListResponseBody> {
        return this.api.listWebhooks(param.projectId,  options).toPromise();
    }

    /**
     * Copies a campaign template to another project. The resources, like validation rules or products, will not be copied to the destination project yet. When the template is used to create a new campaign or add a new promotion tier, the resources will be created in the destination project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Copy Campaign Template to a Project
     * @param param the request object
     */
    public managementCopyCampaignTemplateWithHttpInfo(param: ManagementApiManagementCopyCampaignTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsTemplatesCampaignsCopyCreateResponseBody>> {
        return this.api.managementCopyCampaignTemplateWithHttpInfo(param.projectId, param.campaignTemplateId, param.managementProjectsTemplatesCampaignsCopyCreateRequestBody,  options).toPromise();
    }

    /**
     * Copies a campaign template to another project. The resources, like validation rules or products, will not be copied to the destination project yet. When the template is used to create a new campaign or add a new promotion tier, the resources will be created in the destination project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Copy Campaign Template to a Project
     * @param param the request object
     */
    public managementCopyCampaignTemplate(param: ManagementApiManagementCopyCampaignTemplateRequest, options?: ConfigurationOptions): Promise<ManagementProjectsTemplatesCampaignsCopyCreateResponseBody> {
        return this.api.managementCopyCampaignTemplate(param.projectId, param.campaignTemplateId, param.managementProjectsTemplatesCampaignsCopyCreateRequestBody,  options).toPromise();
    }

    /**
     * Lists all campaign templates available in the project.  👍 List Campaign Templates  This endpoint works in the same way as the [List Campaign Templates endpoint](/api-reference/templates/list-campaign-templates).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * List Campaign Templates
     * @param param the request object
     */
    public managementListCampaignTemplatesWithHttpInfo(param: ManagementApiManagementListCampaignTemplatesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsTemplatesCampaignsListResponseBody>> {
        return this.api.managementListCampaignTemplatesWithHttpInfo(param.projectId, param.limit, param.startingAfterId, param.order, param.includeTotal, param.filters,  options).toPromise();
    }

    /**
     * Lists all campaign templates available in the project.  👍 List Campaign Templates  This endpoint works in the same way as the [List Campaign Templates endpoint](/api-reference/templates/list-campaign-templates).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * List Campaign Templates
     * @param param the request object
     */
    public managementListCampaignTemplates(param: ManagementApiManagementListCampaignTemplatesRequest, options?: ConfigurationOptions): Promise<ManagementProjectsTemplatesCampaignsListResponseBody> {
        return this.api.managementListCampaignTemplates(param.projectId, param.limit, param.startingAfterId, param.order, param.includeTotal, param.filters,  options).toPromise();
    }

    /**
     * Unassigns the user from the project. If the user is currently logged in, they are automatically logged out. If the user is assigned to only one project, they cannot be unassigned from that project.
     * Unassign User
     * @param param the request object
     */
    public unassignUserWithHttpInfo(param: ManagementApiUnassignUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.unassignUserWithHttpInfo(param.projectId, param.userId,  options).toPromise();
    }

    /**
     * Unassigns the user from the project. If the user is currently logged in, they are automatically logged out. If the user is assigned to only one project, they cannot be unassigned from that project.
     * Unassign User
     * @param param the request object
     */
    public unassignUser(param: ManagementApiUnassignUserRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.unassignUser(param.projectId, param.userId,  options).toPromise();
    }

    /**
     * Updates a brand configuration. Only the fields sent in the request will be updated. The fields omitted in the request will remain unchanged.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.
     * Update Brand
     * @param param the request object
     */
    public updateBrandWithHttpInfo(param: ManagementApiUpdateBrandRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsBrandingUpdateResponseBody>> {
        return this.api.updateBrandWithHttpInfo(param.projectId, param.brandingId, param.managementProjectsBrandingUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates a brand configuration. Only the fields sent in the request will be updated. The fields omitted in the request will remain unchanged.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.
     * Update Brand
     * @param param the request object
     */
    public updateBrand(param: ManagementApiUpdateBrandRequest, options?: ConfigurationOptions): Promise<ManagementProjectsBrandingUpdateResponseBody> {
        return this.api.updateBrand(param.projectId, param.brandingId, param.managementProjectsBrandingUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates a custom event schema. With this request, you can: - Add a nonexistent property to a custom event schema. - Update an existing property. In the request, you can provide only those properties you want to add or update. Definitions omitted in the request remain unchanged.  👍 Additional Notes - You can change the type of an existing property, e.g. from string to number. - You can remove a custom property with this endpoint by providing deleted: true in the request. However, you cannot permanently remove an event definition or its property with this endpoint.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Update Custom Event Schema
     * @param param the request object
     */
    public updateCustomEventSchemaWithHttpInfo(param: ManagementApiUpdateCustomEventSchemaRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsCustomEventSchemasUpdateResponseBody>> {
        return this.api.updateCustomEventSchemaWithHttpInfo(param.projectId, param.customEventSchemaId, param.managementProjectsCustomEventSchemasUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates a custom event schema. With this request, you can: - Add a nonexistent property to a custom event schema. - Update an existing property. In the request, you can provide only those properties you want to add or update. Definitions omitted in the request remain unchanged.  👍 Additional Notes - You can change the type of an existing property, e.g. from string to number. - You can remove a custom property with this endpoint by providing deleted: true in the request. However, you cannot permanently remove an event definition or its property with this endpoint.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).
     * Update Custom Event Schema
     * @param param the request object
     */
    public updateCustomEventSchema(param: ManagementApiUpdateCustomEventSchemaRequest, options?: ConfigurationOptions): Promise<ManagementProjectsCustomEventSchemasUpdateResponseBody> {
        return this.api.updateCustomEventSchema(param.projectId, param.customEventSchemaId, param.managementProjectsCustomEventSchemasUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates a metadata schema. With this request, you can: - Add a nonexistent attribute definition to the metadata schema. - Update an existing attribute definition by overwriting its current values. In the request, you can provide only those definitions you want to add or update. Definitions omitted in the request remain unchanged. However, if you want to update a definition, you will have to add all its current key-value pairs as well. Only the pairs sent in the request are saved for this definition. This means that the key-value pairs that are not sent in a request are restored to default values. For example, if your definition has an array with values and it is not sent in an update request, the array values will be deleted.  👍 Additional Notes - You cannot change the type of an existing schema, e.g. from string to number. - You can remove a definition with this endpoint by providing deleted: true in the request. It will be moved to the Removed definitions section in the user interface. However, you cannot permanently remove a definition with this endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Update Metadata Schema
     * @param param the request object
     */
    public updateMetadataSchemaWithHttpInfo(param: ManagementApiUpdateMetadataSchemaRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsMetadataSchemasUpdateResponseBody>> {
        return this.api.updateMetadataSchemaWithHttpInfo(param.projectId, param.metadataSchemaId, param.managementProjectsMetadataSchemasUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates a metadata schema. With this request, you can: - Add a nonexistent attribute definition to the metadata schema. - Update an existing attribute definition by overwriting its current values. In the request, you can provide only those definitions you want to add or update. Definitions omitted in the request remain unchanged. However, if you want to update a definition, you will have to add all its current key-value pairs as well. Only the pairs sent in the request are saved for this definition. This means that the key-value pairs that are not sent in a request are restored to default values. For example, if your definition has an array with values and it is not sent in an update request, the array values will be deleted.  👍 Additional Notes - You cannot change the type of an existing schema, e.g. from string to number. - You can remove a definition with this endpoint by providing deleted: true in the request. It will be moved to the Removed definitions section in the user interface. However, you cannot permanently remove a definition with this endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.
     * Update Metadata Schema
     * @param param the request object
     */
    public updateMetadataSchema(param: ManagementApiUpdateMetadataSchemaRequest, options?: ConfigurationOptions): Promise<ManagementProjectsMetadataSchemasUpdateResponseBody> {
        return this.api.updateMetadataSchema(param.projectId, param.metadataSchemaId, param.managementProjectsMetadataSchemasUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates an existing project. You can add or modify settings for timezone, currency, notifications, and other details. Only the fields sent in the request will be updated.
     * Update Project
     * @param param the request object
     */
    public updateProjectWithHttpInfo(param: ManagementApiUpdateProjectRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsUpdateResponseBody>> {
        return this.api.updateProjectWithHttpInfo(param.projectId, param.managementProjectsUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates an existing project. You can add or modify settings for timezone, currency, notifications, and other details. Only the fields sent in the request will be updated.
     * Update Project
     * @param param the request object
     */
    public updateProject(param: ManagementApiUpdateProjectRequest, options?: ConfigurationOptions): Promise<ManagementProjectsUpdateResponseBody> {
        return this.api.updateProject(param.projectId, param.managementProjectsUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates the stacking rules. Only the provided fields will be updated. However, if you update an array, the content of the array is overwritten. This means that if you want to add new values to an array and retain existing ones, you need to provide both the existing and new values in the request.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Update Stacking Rules
     * @param param the request object
     */
    public updateStackingRulesWithHttpInfo(param: ManagementApiUpdateStackingRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsStackingRulesUpdateResponseBody>> {
        return this.api.updateStackingRulesWithHttpInfo(param.projectId, param.stackingRulesId, param.managementProjectsStackingRulesUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates the stacking rules. Only the provided fields will be updated. However, if you update an array, the content of the array is overwritten. This means that if you want to add new values to an array and retain existing ones, you need to provide both the existing and new values in the request.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.
     * Update Stacking Rules
     * @param param the request object
     */
    public updateStackingRules(param: ManagementApiUpdateStackingRulesRequest, options?: ConfigurationOptions): Promise<ManagementProjectsStackingRulesUpdateResponseBody> {
        return this.api.updateStackingRules(param.projectId, param.stackingRulesId, param.managementProjectsStackingRulesUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates the users role.
     * Update User
     * @param param the request object
     */
    public updateUserWithHttpInfo(param: ManagementApiUpdateUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsUsersUpdateRoleResponseBody>> {
        return this.api.updateUserWithHttpInfo(param.projectId, param.userId, param.managementProjectsUsersUpdateRoleRequestBody,  options).toPromise();
    }

    /**
     * Updates the users role.
     * Update User
     * @param param the request object
     */
    public updateUser(param: ManagementApiUpdateUserRequest, options?: ConfigurationOptions): Promise<ManagementProjectsUsersUpdateRoleResponseBody> {
        return this.api.updateUser(param.projectId, param.userId, param.managementProjectsUsersUpdateRoleRequestBody,  options).toPromise();
    }

    /**
     * Updates a webhook configuration. The events listed in the request are overwritten. If you want to add more events, provide also the events that are already in the webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Update Webhook
     * @param param the request object
     */
    public updateWebhookWithHttpInfo(param: ManagementApiUpdateWebhookRequest, options?: ConfigurationOptions): Promise<HttpInfo<ManagementProjectsWebhooksUpdateResponseBody>> {
        return this.api.updateWebhookWithHttpInfo(param.projectId, param.webhookId, param.managementProjectsWebhooksUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates a webhook configuration. The events listed in the request are overwritten. If you want to add more events, provide also the events that are already in the webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.
     * Update Webhook
     * @param param the request object
     */
    public updateWebhook(param: ManagementApiUpdateWebhookRequest, options?: ConfigurationOptions): Promise<ManagementProjectsWebhooksUpdateResponseBody> {
        return this.api.updateWebhook(param.projectId, param.webhookId, param.managementProjectsWebhooksUpdateRequestBody,  options).toPromise();
    }

}

import { ObservableMetadataSchemasApi } from "./ObservableAPI";
import { MetadataSchemasApiRequestFactory, MetadataSchemasApiResponseProcessor} from "../apis/MetadataSchemasApi";

export interface MetadataSchemasApiGetMetadataSchemaRequest {
    /**
     * There is an infinite number of possibilities for retrieving metadata schemas by the resource type because you can define custom metadata schemas.
     * Defaults to: undefined
     * @type string
     * @memberof MetadataSchemasApigetMetadataSchema
     */
    resource: string
}

export interface MetadataSchemasApiListMetadataSchemasRequest {
}

export class ObjectMetadataSchemasApi {
    private api: ObservableMetadataSchemasApi

    public constructor(configuration: Configuration, requestFactory?: MetadataSchemasApiRequestFactory, responseProcessor?: MetadataSchemasApiResponseProcessor) {
        this.api = new ObservableMetadataSchemasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a metadata schema per resource type. # Resource types ## Standard You can retrieve metadata schemas for the standard metadata schema definitions listed below. Add one of these types as the resource path parameter. - campaign - customer - earning_rule - loyalty_tier - order - order_item - product - promotion_tier - publication - redemption - reward - voucher ## Custom If you have defined a [custom metadata schema](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata), provide its name in the resource field to retrieve its details. 📘 Management API If you have Management API enabled, you can also use the [Get Metadata Schemas](/api-reference/management/get-metadata-schema) endpoint to retrieve a metadata schema using its ID.
     * Get Metadata Schema
     * @param param the request object
     */
    public getMetadataSchemaWithHttpInfo(param: MetadataSchemasApiGetMetadataSchemaRequest, options?: ConfigurationOptions): Promise<HttpInfo<MetadataSchemasGetResponseBody>> {
        return this.api.getMetadataSchemaWithHttpInfo(param.resource,  options).toPromise();
    }

    /**
     * Retrieves a metadata schema per resource type. # Resource types ## Standard You can retrieve metadata schemas for the standard metadata schema definitions listed below. Add one of these types as the resource path parameter. - campaign - customer - earning_rule - loyalty_tier - order - order_item - product - promotion_tier - publication - redemption - reward - voucher ## Custom If you have defined a [custom metadata schema](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata), provide its name in the resource field to retrieve its details. 📘 Management API If you have Management API enabled, you can also use the [Get Metadata Schemas](/api-reference/management/get-metadata-schema) endpoint to retrieve a metadata schema using its ID.
     * Get Metadata Schema
     * @param param the request object
     */
    public getMetadataSchema(param: MetadataSchemasApiGetMetadataSchemaRequest, options?: ConfigurationOptions): Promise<MetadataSchemasGetResponseBody> {
        return this.api.getMetadataSchema(param.resource,  options).toPromise();
    }

    /**
     * Retrieve metadata schema definitions. 📘 Management API If you have Management API enabled, you can also use the [List Metadata Schemas](/api-reference/management/list-metadata-schemas) endpoint to list all metadata schemas.
     * List Metadata Schema Definitions
     * @param param the request object
     */
    public listMetadataSchemasWithHttpInfo(param: MetadataSchemasApiListMetadataSchemasRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<MetadataSchemasListResponseBody>> {
        return this.api.listMetadataSchemasWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieve metadata schema definitions. 📘 Management API If you have Management API enabled, you can also use the [List Metadata Schemas](/api-reference/management/list-metadata-schemas) endpoint to list all metadata schemas.
     * List Metadata Schema Definitions
     * @param param the request object
     */
    public listMetadataSchemas(param: MetadataSchemasApiListMetadataSchemasRequest = {}, options?: ConfigurationOptions): Promise<MetadataSchemasListResponseBody> {
        return this.api.listMetadataSchemas( options).toPromise();
    }

}

import { ObservableOAuthApi } from "./ObservableAPI";
import { OAuthApiRequestFactory, OAuthApiResponseProcessor} from "../apis/OAuthApi";

export interface OAuthApiGenerateOauthTokenRequest {
    /**
     * Gives an access token outside of the context of a user.
     * Defaults to: &#39;client_credentials&#39;
     * @type string
     * @memberof OAuthApigenerateOauthToken
     */
    grantType?: string
    /**
     * Defines the scope of possible actions that can be done with the OAuth token. The &#x60;api&#x60; scope allows using the server-side API. The &#x60;client_api&#x60; scope allows using the whole client-side API. The values are space-delimited; do **not** use commas to separate the values.  Allowed values: &#x60;api&#x60;, &#x60;assets&#x60;, &#x60;async-actions&#x60;, &#x60;campaigns&#x60;, &#x60;categories&#x60;, &#x60;client_api&#x60;, &#x60;client_consents&#x60;, &#x60;client_customers&#x60;, &#x60;client_events&#x60;, &#x60;client_promotions&#x60;, &#x60;client_publish&#x60;, &#x60;client_qualifications&#x60;, &#x60;client_redeem&#x60;, &#x60;client_redemptions&#x60;, &#x60;client_validate&#x60;, &#x60;client_validations&#x60;, &#x60;client_vouchers&#x60;, &#x60;consents&#x60;, &#x60;customers&#x60;, &#x60;events&#x60;, &#x60;exports&#x60;, &#x60;locations&#x60;, &#x60;loyalties&#x60;, &#x60;metadata-schemas&#x60;, &#x60;orders&#x60;, &#x60;product-collections&#x60;, &#x60;products&#x60;, &#x60;promotions&#x60;, &#x60;publications&#x60;, &#x60;qualifications&#x60;, &#x60;redemptions&#x60;, &#x60;referrals&#x60;, &#x60;rewards&#x60;, &#x60;segments&#x60;, &#x60;SKUs&#x60;, &#x60;task-results&#x60;, &#x60;templates&#x60;, &#x60;trash-bin&#x60;, &#x60;validation-rules-assignments&#x60;, &#x60;validation-rules&#x60;, &#x60;validations&#x60;, &#x60;vouchers&#x60;.
     * Defaults to: undefined
     * @type string
     * @memberof OAuthApigenerateOauthToken
     */
    scope?: string
}

export interface OAuthApiIntrospectOauthTokenRequest {
    /**
     * An OAuth 2.0 token generated with the API token and key.
     * Defaults to: undefined
     * @type string
     * @memberof OAuthApiintrospectOauthToken
     */
    accessToken?: string
}

export interface OAuthApiRevokeOauthTokenRequest {
    /**
     * An OAuth 2.0 token generated with the API token and key.
     * Defaults to: undefined
     * @type string
     * @memberof OAuthApirevokeOauthToken
     */
    accessToken?: string
}

export class ObjectOAuthApi {
    private api: ObservableOAuthApi

    public constructor(configuration: Configuration, requestFactory?: OAuthApiRequestFactory, responseProcessor?: OAuthApiResponseProcessor) {
        this.api = new ObservableOAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate an OAuth 2.0 token for an API client. The token can be used to authorize access to the Voucherify API. The token inherits the permissions and IP whitelists of the API key that is used to generate the OAuth token. You can define the scope that limits its usage. You can generate up to 1000 OAuth tokens per project. The token expires in 900 seconds (15 minutes). If the API key that is used to generate the OAuth token is deleted or blocked, you cannot generate new OAuth tokens and the existing ones will stop working within one minute. If the API key used to generate an OAuth token is regenerated, the OAuth token can still be used. 🚧 Format of scope values Separate the values of the scope property with spaces.
     * Generate OAuth 2.0 Token
     * @param param the request object
     */
    public generateOauthTokenWithHttpInfo(param: OAuthApiGenerateOauthTokenRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<OAuthTokenGenerateResponseBody>> {
        return this.api.generateOauthTokenWithHttpInfo(param.grantType, param.scope,  options).toPromise();
    }

    /**
     * Generate an OAuth 2.0 token for an API client. The token can be used to authorize access to the Voucherify API. The token inherits the permissions and IP whitelists of the API key that is used to generate the OAuth token. You can define the scope that limits its usage. You can generate up to 1000 OAuth tokens per project. The token expires in 900 seconds (15 minutes). If the API key that is used to generate the OAuth token is deleted or blocked, you cannot generate new OAuth tokens and the existing ones will stop working within one minute. If the API key used to generate an OAuth token is regenerated, the OAuth token can still be used. 🚧 Format of scope values Separate the values of the scope property with spaces.
     * Generate OAuth 2.0 Token
     * @param param the request object
     */
    public generateOauthToken(param: OAuthApiGenerateOauthTokenRequest = {}, options?: ConfigurationOptions): Promise<OAuthTokenGenerateResponseBody> {
        return this.api.generateOauthToken(param.grantType, param.scope,  options).toPromise();
    }

    /**
     * Introspect an OAuth 2.0 token for an API client.
     * Introspect OAuth 2.0 Token
     * @param param the request object
     */
    public introspectOauthTokenWithHttpInfo(param: OAuthApiIntrospectOauthTokenRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<OAuthTokenIntrospectResponseBody>> {
        return this.api.introspectOauthTokenWithHttpInfo(param.accessToken,  options).toPromise();
    }

    /**
     * Introspect an OAuth 2.0 token for an API client.
     * Introspect OAuth 2.0 Token
     * @param param the request object
     */
    public introspectOauthToken(param: OAuthApiIntrospectOauthTokenRequest = {}, options?: ConfigurationOptions): Promise<OAuthTokenIntrospectResponseBody> {
        return this.api.introspectOauthToken(param.accessToken,  options).toPromise();
    }

    /**
     * Revoke an OAuth 2.0 token for an API client. Once revoked, the token cannot be used anymore.
     * Revoke OAuth 2.0 Token
     * @param param the request object
     */
    public revokeOauthTokenWithHttpInfo(param: OAuthApiRevokeOauthTokenRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.revokeOauthTokenWithHttpInfo(param.accessToken,  options).toPromise();
    }

    /**
     * Revoke an OAuth 2.0 token for an API client. Once revoked, the token cannot be used anymore.
     * Revoke OAuth 2.0 Token
     * @param param the request object
     */
    public revokeOauthToken(param: OAuthApiRevokeOauthTokenRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.revokeOauthToken(param.accessToken,  options).toPromise();
    }

}

import { ObservableOrdersApi } from "./ObservableAPI";
import { OrdersApiRequestFactory, OrdersApiResponseProcessor} from "../apis/OrdersApi";

export interface OrdersApiCreateOrderRequest {
    /**
     * Specify the order parameters.
     * @type OrdersCreateRequestBody
     * @memberof OrdersApicreateOrder
     */
    ordersCreateRequestBody?: OrdersCreateRequestBody
}

export interface OrdersApiCreateOrderExportRequest {
    /**
     * Specify which order parameters you would like to export.
     * @type OrdersExportCreateRequestBody
     * @memberof OrdersApicreateOrderExport
     */
    ordersExportCreateRequestBody?: OrdersExportCreateRequestBody
}

export interface OrdersApiGetOrderRequest {
    /**
     * Unique Voucherify order ID or order source ID.
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApigetOrder
     */
    orderId: string
}

export interface OrdersApiImportOrdersRequest {
    /**
     * The request body is sent in the form of an array of order objects.
     * @type Array&lt;OrdersImportCreateRequestBodyItem&gt;
     * @memberof OrdersApiimportOrders
     */
    ordersImportCreateRequestBodyItem?: Array<OrdersImportCreateRequestBodyItem>
}

export interface OrdersApiListOrdersRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof OrdersApilistOrders
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof OrdersApilistOrders
     */
    page?: number
    /**
     * This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListOrders
     * @memberof OrdersApilistOrders
     */
    order?: ParameterOrderListOrders
}

export interface OrdersApiUpdateOrderRequest {
    /**
     * Unique Voucherify order ID or order source ID.
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApiupdateOrder
     */
    orderId: string
    /**
     * Specify the parameters of the order that are to be updated.
     * @type OrdersUpdateRequestBody
     * @memberof OrdersApiupdateOrder
     */
    ordersUpdateRequestBody?: OrdersUpdateRequestBody
}

export class ObjectOrdersApi {
    private api: ObservableOrdersApi

    public constructor(configuration: Configuration, requestFactory?: OrdersApiRequestFactory, responseProcessor?: OrdersApiResponseProcessor) {
        this.api = new ObservableOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an order object and triggers an order creation event.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the order database, Voucherify will return a related order object with updated fields.
     * Create Order
     * @param param the request object
     */
    public createOrderWithHttpInfo(param: OrdersApiCreateOrderRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<OrdersCreateResponseBody>> {
        return this.api.createOrderWithHttpInfo(param.ordersCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates an order object and triggers an order creation event.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the order database, Voucherify will return a related order object with updated fields.
     * Create Order
     * @param param the request object
     */
    public createOrder(param: OrdersApiCreateOrderRequest = {}, options?: ConfigurationOptions): Promise<OrdersCreateResponseBody> {
        return this.api.createOrder(param.ordersCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a downloadable CSV file containing a list of orders. The parameters listed in the payload resembles headers in the CSV file. To include a parameter to the file, add it to the parameters.fields object in the request body. The available filters are all [order object](/api-reference/orders/order-calculated-object) attributes. Additionally, any metadata defined in the metadata schema can be exported. Passing an empty JSON will generate a file containing three default fields: id, source_id, and status. The fields array is an array of strings containing the data in the export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields:    
     * Create Orders Export
     * @param param the request object
     */
    public createOrderExportWithHttpInfo(param: OrdersApiCreateOrderExportRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<OrdersExportCreateResponseBody>> {
        return this.api.createOrderExportWithHttpInfo(param.ordersExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a downloadable CSV file containing a list of orders. The parameters listed in the payload resembles headers in the CSV file. To include a parameter to the file, add it to the parameters.fields object in the request body. The available filters are all [order object](/api-reference/orders/order-calculated-object) attributes. Additionally, any metadata defined in the metadata schema can be exported. Passing an empty JSON will generate a file containing three default fields: id, source_id, and status. The fields array is an array of strings containing the data in the export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields:    
     * Create Orders Export
     * @param param the request object
     */
    public createOrderExport(param: OrdersApiCreateOrderExportRequest = {}, options?: ConfigurationOptions): Promise<OrdersExportCreateResponseBody> {
        return this.api.createOrderExport(param.ordersExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Retrieve a specific order by passing its ID.
     * Get Order
     * @param param the request object
     */
    public getOrderWithHttpInfo(param: OrdersApiGetOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrdersGetResponseBody>> {
        return this.api.getOrderWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * Retrieve a specific order by passing its ID.
     * Get Order
     * @param param the request object
     */
    public getOrder(param: OrdersApiGetOrderRequest, options?: ConfigurationOptions): Promise<OrdersGetResponseBody> {
        return this.api.getOrder(param.orderId,  options).toPromise();
    }

    /**
     *   🚧 Historical orders  This endpoint should only be used to import historical orders into Voucherify. For on-going synchronization, the [update order](/api-reference/orders/update-order) endpoints should be used. This is critical because this endpoint does not store events or launch distributions. # Limitations ## Import volume There can be only a single on-going order import per tenant per project at a given time. The user can schedule more imports but those extra imports will be scheduled to run in sequence one by one.   ## Maximum count of orders in single import There is a 2000 limit but we might decide to change it to a lower / higher value at any given time depending if we find this value is too high or too low with time. # Notifications There are no notifications on the Dashboard because this import is launched via the API. # Triggered actions    If you import orders with customers, then a logic will be scheduled responsible for placing these customers into segments and refreshing the segments summary. Consequently, this update will trigger  - **customers entering into segments**  - **distributions** based on any rules tied to customer entering segment(s) - **earning rules** based on the customer entering segment(s) # What is not triggered 1. No webhooks are triggered during the import of orders - for both orders and upserted products / SKUs.   2. Distributions based on Order Update, Order Paid, Order Created and Order Cancelled. In other words if you have a distribution based on Order Paid and you import an order with a PAID status, the distribution is not going to be triggered.     3. No events are created during the import of orders - for both orders and upserted products / SKUs. In other words you wont see any events in the Activity tab in the Dashboard such as Order created or Order paid. If you are additionally upserting products / SKUs, then you wont see the Product created events listed, etc.    4. Earning rules based on Order Paid wont be triggered. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request with [GET Async Action](/api-reference/async-actions/get-async-action) endpoint.
     * Import Orders
     * @param param the request object
     */
    public importOrdersWithHttpInfo(param: OrdersApiImportOrdersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<OrdersImportCreateResponseBody>> {
        return this.api.importOrdersWithHttpInfo(param.ordersImportCreateRequestBodyItem,  options).toPromise();
    }

    /**
     *   🚧 Historical orders  This endpoint should only be used to import historical orders into Voucherify. For on-going synchronization, the [update order](/api-reference/orders/update-order) endpoints should be used. This is critical because this endpoint does not store events or launch distributions. # Limitations ## Import volume There can be only a single on-going order import per tenant per project at a given time. The user can schedule more imports but those extra imports will be scheduled to run in sequence one by one.   ## Maximum count of orders in single import There is a 2000 limit but we might decide to change it to a lower / higher value at any given time depending if we find this value is too high or too low with time. # Notifications There are no notifications on the Dashboard because this import is launched via the API. # Triggered actions    If you import orders with customers, then a logic will be scheduled responsible for placing these customers into segments and refreshing the segments summary. Consequently, this update will trigger  - **customers entering into segments**  - **distributions** based on any rules tied to customer entering segment(s) - **earning rules** based on the customer entering segment(s) # What is not triggered 1. No webhooks are triggered during the import of orders - for both orders and upserted products / SKUs.   2. Distributions based on Order Update, Order Paid, Order Created and Order Cancelled. In other words if you have a distribution based on Order Paid and you import an order with a PAID status, the distribution is not going to be triggered.     3. No events are created during the import of orders - for both orders and upserted products / SKUs. In other words you wont see any events in the Activity tab in the Dashboard such as Order created or Order paid. If you are additionally upserting products / SKUs, then you wont see the Product created events listed, etc.    4. Earning rules based on Order Paid wont be triggered. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request with [GET Async Action](/api-reference/async-actions/get-async-action) endpoint.
     * Import Orders
     * @param param the request object
     */
    public importOrders(param: OrdersApiImportOrdersRequest = {}, options?: ConfigurationOptions): Promise<OrdersImportCreateResponseBody> {
        return this.api.importOrders(param.ordersImportCreateRequestBodyItem,  options).toPromise();
    }

    /**
     * Returns a list of orders. 
     * List Orders
     * @param param the request object
     */
    public listOrdersWithHttpInfo(param: OrdersApiListOrdersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<OrdersListResponseBody>> {
        return this.api.listOrdersWithHttpInfo(param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * Returns a list of orders. 
     * List Orders
     * @param param the request object
     */
    public listOrders(param: OrdersApiListOrdersRequest = {}, options?: ConfigurationOptions): Promise<OrdersListResponseBody> {
        return this.api.listOrders(param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * Updates the specified order by setting the values of the parameters passed in the request body. Any parameters not provided will be left unchanged.
     * Update Order
     * @param param the request object
     */
    public updateOrderWithHttpInfo(param: OrdersApiUpdateOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrdersUpdateResponseBody>> {
        return this.api.updateOrderWithHttpInfo(param.orderId, param.ordersUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates the specified order by setting the values of the parameters passed in the request body. Any parameters not provided will be left unchanged.
     * Update Order
     * @param param the request object
     */
    public updateOrder(param: OrdersApiUpdateOrderRequest, options?: ConfigurationOptions): Promise<OrdersUpdateResponseBody> {
        return this.api.updateOrder(param.orderId, param.ordersUpdateRequestBody,  options).toPromise();
    }

}

import { ObservableProductCollectionsApi } from "./ObservableAPI";
import { ProductCollectionsApiRequestFactory, ProductCollectionsApiResponseProcessor} from "../apis/ProductCollectionsApi";

export interface ProductCollectionsApiCreateProductCollectionRequest {
    /**
     * 
     * @type ProductCollectionsCreateRequestBody
     * @memberof ProductCollectionsApicreateProductCollection
     */
    productCollectionsCreateRequestBody?: ProductCollectionsCreateRequestBody
}

export interface ProductCollectionsApiDeleteProductCollectionRequest {
    /**
     * A unique product collection ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductCollectionsApideleteProductCollection
     */
    productCollectionId: string
}

export interface ProductCollectionsApiGetProductCollectionRequest {
    /**
     * A unique product collection ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductCollectionsApigetProductCollection
     */
    productCollectionId: string
}

export interface ProductCollectionsApiListProductCollectionsRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ProductCollectionsApilistProductCollections
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ProductCollectionsApilistProductCollections
     */
    page?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrder
     * @memberof ProductCollectionsApilistProductCollections
     */
    order?: ParameterOrder
}

export interface ProductCollectionsApiListProductsInCollectionRequest {
    /**
     * Unique product collection ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductCollectionsApilistProductsInCollection
     */
    productCollectionId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ProductCollectionsApilistProductsInCollection
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ProductCollectionsApilistProductsInCollection
     */
    page?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrder
     * @memberof ProductCollectionsApilistProductsInCollection
     */
    order?: ParameterOrder
    /**
     * Timestamp representing the date and time to use in starting_after cursor to get more data. Represented in ISO 8601 format.
     * Defaults to: undefined
     * @type Date
     * @memberof ProductCollectionsApilistProductsInCollection
     */
    startingAfter?: Date
}

export class ObjectProductCollectionsApi {
    private api: ObservableProductCollectionsApi

    public constructor(configuration: Configuration, requestFactory?: ProductCollectionsApiRequestFactory, responseProcessor?: ProductCollectionsApiResponseProcessor) {
        this.api = new ObservableProductCollectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This method creates a new product collection.
     * Create Product Collection
     * @param param the request object
     */
    public createProductCollectionWithHttpInfo(param: ProductCollectionsApiCreateProductCollectionRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ProductCollectionsCreateResponseBody>> {
        return this.api.createProductCollectionWithHttpInfo(param.productCollectionsCreateRequestBody,  options).toPromise();
    }

    /**
     * This method creates a new product collection.
     * Create Product Collection
     * @param param the request object
     */
    public createProductCollection(param: ProductCollectionsApiCreateProductCollectionRequest = {}, options?: ConfigurationOptions): Promise<ProductCollectionsCreateResponseBody> {
        return this.api.createProductCollection(param.productCollectionsCreateRequestBody,  options).toPromise();
    }

    /**
     * This method deletes a product collection.
     * Delete Product Collection
     * @param param the request object
     */
    public deleteProductCollectionWithHttpInfo(param: ProductCollectionsApiDeleteProductCollectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteProductCollectionWithHttpInfo(param.productCollectionId,  options).toPromise();
    }

    /**
     * This method deletes a product collection.
     * Delete Product Collection
     * @param param the request object
     */
    public deleteProductCollection(param: ProductCollectionsApiDeleteProductCollectionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteProductCollection(param.productCollectionId,  options).toPromise();
    }

    /**
     * Retrieves the product collection.
     * Get Product Collection
     * @param param the request object
     */
    public getProductCollectionWithHttpInfo(param: ProductCollectionsApiGetProductCollectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductCollectionsGetResponseBody>> {
        return this.api.getProductCollectionWithHttpInfo(param.productCollectionId,  options).toPromise();
    }

    /**
     * Retrieves the product collection.
     * Get Product Collection
     * @param param the request object
     */
    public getProductCollection(param: ProductCollectionsApiGetProductCollectionRequest, options?: ConfigurationOptions): Promise<ProductCollectionsGetResponseBody> {
        return this.api.getProductCollection(param.productCollectionId,  options).toPromise();
    }

    /**
     * This method returns a list of product collections.
     * List Product Collections
     * @param param the request object
     */
    public listProductCollectionsWithHttpInfo(param: ProductCollectionsApiListProductCollectionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ProductCollectionsListResponseBody>> {
        return this.api.listProductCollectionsWithHttpInfo(param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * This method returns a list of product collections.
     * List Product Collections
     * @param param the request object
     */
    public listProductCollections(param: ProductCollectionsApiListProductCollectionsRequest = {}, options?: ConfigurationOptions): Promise<ProductCollectionsListResponseBody> {
        return this.api.listProductCollections(param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * Retrieves list of products from a product collection; works for both dynamic and static product collections.
     * List Products in Collection
     * @param param the request object
     */
    public listProductsInCollectionWithHttpInfo(param: ProductCollectionsApiListProductsInCollectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductCollectionsProductsListResponseBody>> {
        return this.api.listProductsInCollectionWithHttpInfo(param.productCollectionId, param.limit, param.page, param.order, param.startingAfter,  options).toPromise();
    }

    /**
     * Retrieves list of products from a product collection; works for both dynamic and static product collections.
     * List Products in Collection
     * @param param the request object
     */
    public listProductsInCollection(param: ProductCollectionsApiListProductsInCollectionRequest, options?: ConfigurationOptions): Promise<ProductCollectionsProductsListResponseBody> {
        return this.api.listProductsInCollection(param.productCollectionId, param.limit, param.page, param.order, param.startingAfter,  options).toPromise();
    }

}

import { ObservableProductsApi } from "./ObservableAPI";
import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";

export interface ProductsApiCreateProductRequest {
    /**
     * Specify the product parameters.
     * @type ProductsCreateRequestBody
     * @memberof ProductsApicreateProduct
     */
    productsCreateRequestBody?: ProductsCreateRequestBody
}

export interface ProductsApiCreateSkuRequest {
    /**
     * A Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicreateSku
     */
    productId: string
    /**
     * Specify the SKU parameters to be created.
     * @type ProductsSkusCreateRequestBody
     * @memberof ProductsApicreateSku
     */
    productsSkusCreateRequestBody?: ProductsSkusCreateRequestBody
}

export interface ProductsApiDeleteProductRequest {
    /**
     * A Voucherify product ID or source ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProduct
     */
    productId: string
    /**
     * If this flag is set to true, the product and all related SKUs will be removed permanently. If it is set to false or not set at all, the product and all related SKUs will be moved to the bin. Going forward, the user will be able to create another product with exactly the same source_id.
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductsApideleteProduct
     */
    force?: boolean
}

export interface ProductsApiDeleteSkuRequest {
    /**
     * A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteSku
     */
    productId: string
    /**
     * A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteSku
     */
    skuId: string
    /**
     * If this flag is set to true, the SKU will be removed permanently. If it is set to false or not set at all, the SKU will be moved to the bin. Going forward, the user will be able to create another SKU with exactly the same source_id.
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductsApideleteSku
     */
    force?: boolean
}

export interface ProductsApiGetProductRequest {
    /**
     * A Voucherify product ID or source ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApigetProduct
     */
    productId: string
}

export interface ProductsApiGetSkuRequest {
    /**
     * A Voucherify SKU identifier or SKU source ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApigetSku
     */
    skuId: string
}

export interface ProductsApiImportProductsUsingCsvRequest {
    /**
     * File path.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ProductsApiimportProductsUsingCsv
     */
    file?: HttpFile
}

export interface ProductsApiImportSKUsUsingCsvRequest {
    /**
     * File path.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ProductsApiimportSKUsUsingCsv
     */
    file?: HttpFile
}

export interface ProductsApiListProductsRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ProductsApilistProducts
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ProductsApilistProducts
     */
    page?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrder
     * @memberof ProductsApilistProducts
     */
    order?: ParameterOrder
    /**
     * Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     * Defaults to: undefined
     * @type Date
     * @memberof ProductsApilistProducts
     */
    startDate?: Date
    /**
     * Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     * Defaults to: undefined
     * @type Date
     * @memberof ProductsApilistProducts
     */
    endDate?: Date
}

export interface ProductsApiListSKUsInProductRequest {
    /**
     * A Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApilistSKUsInProduct
     */
    productId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ProductsApilistSKUsInProduct
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ProductsApilistSKUsInProduct
     */
    page?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrder
     * @memberof ProductsApilistSKUsInProduct
     */
    order?: ParameterOrder
    /**
     * Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     * Defaults to: undefined
     * @type Date
     * @memberof ProductsApilistSKUsInProduct
     */
    startDate?: Date
    /**
     * Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     * Defaults to: undefined
     * @type Date
     * @memberof ProductsApilistSKUsInProduct
     */
    endDate?: Date
}

export interface ProductsApiUpdateProductRequest {
    /**
     * A Voucherify product ID or source ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProduct
     */
    productId: string
    /**
     * Specify the parameters of the product that are to be updated.
     * @type ProductsUpdateRequestBody
     * @memberof ProductsApiupdateProduct
     */
    productsUpdateRequestBody?: ProductsUpdateRequestBody
}

export interface ProductsApiUpdateProductsInBulkRequest {
    /**
     * List the product fields to be updated in each product object.
     * @type Array&lt;ProductsUpdateInBulkRequestBody&gt;
     * @memberof ProductsApiupdateProductsInBulk
     */
    productsUpdateInBulkRequestBody?: Array<ProductsUpdateInBulkRequestBody>
}

export interface ProductsApiUpdateProductsMetadataInBulkRequest {
    /**
     * List the source_ids of the products you would like to update with the metadata key/value pairs.
     * @type ProductsMetadataUpdateInBulkRequestBody
     * @memberof ProductsApiupdateProductsMetadataInBulk
     */
    productsMetadataUpdateInBulkRequestBody?: ProductsMetadataUpdateInBulkRequestBody
}

export interface ProductsApiUpdateSkuRequest {
    /**
     * A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateSku
     */
    productId: string
    /**
     * A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateSku
     */
    skuId: string
    /**
     * Specify the parameters to be updated.
     * @type ProductsSkusUpdateRequestBody
     * @memberof ProductsApiupdateSku
     */
    productsSkusUpdateRequestBody?: ProductsSkusUpdateRequestBody
}

export class ObjectProductsApi {
    private api: ObservableProductsApi

    public constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a product object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the product database, Voucherify will return a related product object with updated fields.
     * Create Product
     * @param param the request object
     */
    public createProductWithHttpInfo(param: ProductsApiCreateProductRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ProductsCreateResponseBody>> {
        return this.api.createProductWithHttpInfo(param.productsCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a product object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the product database, Voucherify will return a related product object with updated fields.
     * Create Product
     * @param param the request object
     */
    public createProduct(param: ProductsApiCreateProductRequest = {}, options?: ConfigurationOptions): Promise<ProductsCreateResponseBody> {
        return this.api.createProduct(param.productsCreateRequestBody,  options).toPromise();
    }

    /**
     * This method adds product variants to a [created product](/api-reference/products/create-product).   📘 Upsert Mode  If you pass an id or a source_id that already exists in the sku database, Voucherify will return a related sku object with updated fields.
     * Create SKU
     * @param param the request object
     */
    public createSkuWithHttpInfo(param: ProductsApiCreateSkuRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductsSkusCreateResponseBody>> {
        return this.api.createSkuWithHttpInfo(param.productId, param.productsSkusCreateRequestBody,  options).toPromise();
    }

    /**
     * This method adds product variants to a [created product](/api-reference/products/create-product).   📘 Upsert Mode  If you pass an id or a source_id that already exists in the sku database, Voucherify will return a related sku object with updated fields.
     * Create SKU
     * @param param the request object
     */
    public createSku(param: ProductsApiCreateSkuRequest, options?: ConfigurationOptions): Promise<ProductsSkusCreateResponseBody> {
        return this.api.createSku(param.productId, param.productsSkusCreateRequestBody,  options).toPromise();
    }

    /**
     * Deletes a product and all related SKUs. This operation cannot be undone.  If the force parameter is set to false or not set at all, the product and all related SKUs will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Product
     * @param param the request object
     */
    public deleteProductWithHttpInfo(param: ProductsApiDeleteProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteProductWithHttpInfo(param.productId, param.force,  options).toPromise();
    }

    /**
     * Deletes a product and all related SKUs. This operation cannot be undone.  If the force parameter is set to false or not set at all, the product and all related SKUs will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Product
     * @param param the request object
     */
    public deleteProduct(param: ProductsApiDeleteProductRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteProduct(param.productId, param.force,  options).toPromise();
    }

    /**
     * Deletes a product SKU. This operation cannot be undone.  If the force parameter is set to false or not set at all, the SKU will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete SKU
     * @param param the request object
     */
    public deleteSkuWithHttpInfo(param: ProductsApiDeleteSkuRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteSkuWithHttpInfo(param.productId, param.skuId, param.force,  options).toPromise();
    }

    /**
     * Deletes a product SKU. This operation cannot be undone.  If the force parameter is set to false or not set at all, the SKU will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete SKU
     * @param param the request object
     */
    public deleteSku(param: ProductsApiDeleteSkuRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteSku(param.productId, param.skuId, param.force,  options).toPromise();
    }

    /**
     * Retrieve details of a given product and its SKUs, if any.
     * Get Product
     * @param param the request object
     */
    public getProductWithHttpInfo(param: ProductsApiGetProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductsGetResponseBody>> {
        return this.api.getProductWithHttpInfo(param.productId,  options).toPromise();
    }

    /**
     * Retrieve details of a given product and its SKUs, if any.
     * Get Product
     * @param param the request object
     */
    public getProduct(param: ProductsApiGetProductRequest, options?: ConfigurationOptions): Promise<ProductsGetResponseBody> {
        return this.api.getProduct(param.productId,  options).toPromise();
    }

    /**
     * Retrieve details of a SKU.
     * Get SKU
     * @param param the request object
     */
    public getSkuWithHttpInfo(param: ProductsApiGetSkuRequest, options?: ConfigurationOptions): Promise<HttpInfo<SkusGetResponseBody>> {
        return this.api.getSkuWithHttpInfo(param.skuId,  options).toPromise();
    }

    /**
     * Retrieve details of a SKU.
     * Get SKU
     * @param param the request object
     */
    public getSku(param: ProductsApiGetSkuRequest, options?: ConfigurationOptions): Promise<SkusGetResponseBody> {
        return this.api.getSku(param.skuId,  options).toPromise();
    }

    /**
     * Import products into the repository using a CSV file. The CSV file has to include headers in the first line.  📘 Standard product fields mapping  - Create a **comma separated value (CSV) file** or download our CSV import template. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b82ed68d51e779443f550/Import_products_template.csv).  - Supported CSV file headers: name,source_id,price,attributes,image_url,Metadata_property_name  - **Name** is a **required** field. The remaining fields in the CSV template are optional.  - Override/Update products **names** in Voucherify using this method. Data will be updated for each product included in the CSV file whose **source_id** matches a source ID in Voucherify. No other data can be updated other than the product name.  - Note that dates and date-time attributes need to be provided in compliance with the **ISO 8601 norms**. For example, 2022-03-11T09:00:00.000Z or 2022-03-11     - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Columns that cannot be mapped to standard fields, will be mapped to **Custom attributes** and added as **products metadata**. There is no limit on the number of custom attributes that you can import as metadata.   - To provide the proper data type, you need to add all custom attributes to the metadata schema **before importing the file**. Read more [here](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata).  - **Product attributes** (not custom attributes) need to be separated by a comma and enclosed in double quotes, i.e attribute1,attribute2.  - Headers with metadata names **cant contain white-space characters**.  - If you import metadata defined in the schema as **arrays (multiple)**, you need to separate each value using a comma, for example:       - array of strings: subscribed,premium       - array of numbers: 123,234.      - array of dates: 2000-01-01,2000-01-02 This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Products using CSV
     * @param param the request object
     */
    public importProductsUsingCsvWithHttpInfo(param: ProductsApiImportProductsUsingCsvRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ProductsImportCsvCreateResponseBody>> {
        return this.api.importProductsUsingCsvWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * Import products into the repository using a CSV file. The CSV file has to include headers in the first line.  📘 Standard product fields mapping  - Create a **comma separated value (CSV) file** or download our CSV import template. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b82ed68d51e779443f550/Import_products_template.csv).  - Supported CSV file headers: name,source_id,price,attributes,image_url,Metadata_property_name  - **Name** is a **required** field. The remaining fields in the CSV template are optional.  - Override/Update products **names** in Voucherify using this method. Data will be updated for each product included in the CSV file whose **source_id** matches a source ID in Voucherify. No other data can be updated other than the product name.  - Note that dates and date-time attributes need to be provided in compliance with the **ISO 8601 norms**. For example, 2022-03-11T09:00:00.000Z or 2022-03-11     - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Columns that cannot be mapped to standard fields, will be mapped to **Custom attributes** and added as **products metadata**. There is no limit on the number of custom attributes that you can import as metadata.   - To provide the proper data type, you need to add all custom attributes to the metadata schema **before importing the file**. Read more [here](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata).  - **Product attributes** (not custom attributes) need to be separated by a comma and enclosed in double quotes, i.e attribute1,attribute2.  - Headers with metadata names **cant contain white-space characters**.  - If you import metadata defined in the schema as **arrays (multiple)**, you need to separate each value using a comma, for example:       - array of strings: subscribed,premium       - array of numbers: 123,234.      - array of dates: 2000-01-01,2000-01-02 This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import Products using CSV
     * @param param the request object
     */
    public importProductsUsingCsv(param: ProductsApiImportProductsUsingCsvRequest = {}, options?: ConfigurationOptions): Promise<ProductsImportCsvCreateResponseBody> {
        return this.api.importProductsUsingCsv(param.file,  options).toPromise();
    }

    /**
     * Import SKUs into the repository using a CSV file. The CSV file has to include headers in the first line. All properties which cannot be mapped to standard SKU fields will be added to the metadata object. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b98d08c9b585083488a4c/Import_SKUS_template.csv).   🚧 Import sequence  First import products using the [dedicated endpoint](/api-reference/products/import-products-using-csv), then import SKUs using this endpoint to properly match SKUs to products.  📘 Standard SKU fields mapping  - **Required** fields are source_id and product_id.  - Supported CSV file headers: product_id,sku,source_id,price,image_url,attributes  - SKU **source_id** must be unique in the entire product catalog, no duplicates are allowed.  - SKU attributes need to be in the form of a stringy-fied json, i.e.{color:blue}. These attributes must be defined in the **product** beforehand so you can import them to the SKU.  - You can use this method to update the following parameters in bulk: **sku** and the sku **price**.  - Columns that cannot be mapped to standard fields will be mapped to Custom attributes and added as product metadata. There is no limit on the number of custom attributes that you can import as metadata. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import SKUs using CSV
     * @param param the request object
     */
    public importSKUsUsingCsvWithHttpInfo(param: ProductsApiImportSKUsUsingCsvRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SkusImportCsvCreateResponseBody>> {
        return this.api.importSKUsUsingCsvWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * Import SKUs into the repository using a CSV file. The CSV file has to include headers in the first line. All properties which cannot be mapped to standard SKU fields will be added to the metadata object. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b98d08c9b585083488a4c/Import_SKUS_template.csv).   🚧 Import sequence  First import products using the [dedicated endpoint](/api-reference/products/import-products-using-csv), then import SKUs using this endpoint to properly match SKUs to products.  📘 Standard SKU fields mapping  - **Required** fields are source_id and product_id.  - Supported CSV file headers: product_id,sku,source_id,price,image_url,attributes  - SKU **source_id** must be unique in the entire product catalog, no duplicates are allowed.  - SKU attributes need to be in the form of a stringy-fied json, i.e.{color:blue}. These attributes must be defined in the **product** beforehand so you can import them to the SKU.  - You can use this method to update the following parameters in bulk: **sku** and the sku **price**.  - Columns that cannot be mapped to standard fields will be mapped to Custom attributes and added as product metadata. There is no limit on the number of custom attributes that you can import as metadata. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).
     * Import SKUs using CSV
     * @param param the request object
     */
    public importSKUsUsingCsv(param: ProductsApiImportSKUsUsingCsvRequest = {}, options?: ConfigurationOptions): Promise<SkusImportCsvCreateResponseBody> {
        return this.api.importSKUsUsingCsv(param.file,  options).toPromise();
    }

    /**
     * Retrieve a list of products.
     * List Products
     * @param param the request object
     */
    public listProductsWithHttpInfo(param: ProductsApiListProductsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ProductsListResponseBody>> {
        return this.api.listProductsWithHttpInfo(param.limit, param.page, param.order, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * Retrieve a list of products.
     * List Products
     * @param param the request object
     */
    public listProducts(param: ProductsApiListProductsRequest = {}, options?: ConfigurationOptions): Promise<ProductsListResponseBody> {
        return this.api.listProducts(param.limit, param.page, param.order, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * Retrieve all SKUs for a given product.
     * List SKUs in Product
     * @param param the request object
     */
    public listSKUsInProductWithHttpInfo(param: ProductsApiListSKUsInProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductsSkusListResponseBody>> {
        return this.api.listSKUsInProductWithHttpInfo(param.productId, param.limit, param.page, param.order, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * Retrieve all SKUs for a given product.
     * List SKUs in Product
     * @param param the request object
     */
    public listSKUsInProduct(param: ProductsApiListSKUsInProductRequest, options?: ConfigurationOptions): Promise<ProductsSkusListResponseBody> {
        return this.api.listSKUsInProduct(param.productId, param.limit, param.page, param.order, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * Updates the specified product by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.
     * Update Product
     * @param param the request object
     */
    public updateProductWithHttpInfo(param: ProductsApiUpdateProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductsUpdateResponseBody>> {
        return this.api.updateProductWithHttpInfo(param.productId, param.productsUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates the specified product by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.
     * Update Product
     * @param param the request object
     */
    public updateProduct(param: ProductsApiUpdateProductRequest, options?: ConfigurationOptions): Promise<ProductsUpdateResponseBody> {
        return this.api.updateProduct(param.productId, param.productsUpdateRequestBody,  options).toPromise();
    }

    /**
     * Update products in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Products in Bulk
     * @param param the request object
     */
    public updateProductsInBulkWithHttpInfo(param: ProductsApiUpdateProductsInBulkRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ProductsUpdateInBulkResponseBody>> {
        return this.api.updateProductsInBulkWithHttpInfo(param.productsUpdateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Update products in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Products in Bulk
     * @param param the request object
     */
    public updateProductsInBulk(param: ProductsApiUpdateProductsInBulkRequest = {}, options?: ConfigurationOptions): Promise<ProductsUpdateInBulkResponseBody> {
        return this.api.updateProductsInBulk(param.productsUpdateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Updates metadata parameters for a list of products. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Products\' Metadata in Bulk
     * @param param the request object
     */
    public updateProductsMetadataInBulkWithHttpInfo(param: ProductsApiUpdateProductsMetadataInBulkRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ProductsMetadataUpdateInBulkResponseBody>> {
        return this.api.updateProductsMetadataInBulkWithHttpInfo(param.productsMetadataUpdateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Updates metadata parameters for a list of products. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Products\' Metadata in Bulk
     * @param param the request object
     */
    public updateProductsMetadataInBulk(param: ProductsApiUpdateProductsMetadataInBulkRequest = {}, options?: ConfigurationOptions): Promise<ProductsMetadataUpdateInBulkResponseBody> {
        return this.api.updateProductsMetadataInBulk(param.productsMetadataUpdateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Updates the specified SKU by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body schema wont be modified. Even if provided, they will be silently skipped.
     * Update SKU
     * @param param the request object
     */
    public updateSkuWithHttpInfo(param: ProductsApiUpdateSkuRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductsSkusUpdateResponseBody>> {
        return this.api.updateSkuWithHttpInfo(param.productId, param.skuId, param.productsSkusUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates the specified SKU by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body schema wont be modified. Even if provided, they will be silently skipped.
     * Update SKU
     * @param param the request object
     */
    public updateSku(param: ProductsApiUpdateSkuRequest, options?: ConfigurationOptions): Promise<ProductsSkusUpdateResponseBody> {
        return this.api.updateSku(param.productId, param.skuId, param.productsSkusUpdateRequestBody,  options).toPromise();
    }

}

import { ObservablePromotionsApi } from "./ObservableAPI";
import { PromotionsApiRequestFactory, PromotionsApiResponseProcessor} from "../apis/PromotionsApi";

export interface PromotionsApiAddPromotionTierToCampaignRequest {
    /**
     * Unique campaign ID assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApiaddPromotionTierToCampaign
     */
    campaignId: string
    /**
     * Specify the promotion tier parameters.
     * @type PromotionsTiersCreateRequestBody
     * @memberof PromotionsApiaddPromotionTierToCampaign
     */
    promotionsTiersCreateRequestBody?: PromotionsTiersCreateRequestBody
}

export interface PromotionsApiCreatePromotionStackRequest {
    /**
     * Unique campaign ID.
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApicreatePromotionStack
     */
    campaignId: string
    /**
     * Specify the order of promotion tiers for the promotion stack.
     * @type PromotionsStacksCreateRequestBody
     * @memberof PromotionsApicreatePromotionStack
     */
    promotionsStacksCreateRequestBody?: PromotionsStacksCreateRequestBody
}

export interface PromotionsApiDeletePromotionStackRequest {
    /**
     * ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApideletePromotionStack
     */
    campaignId: string
    /**
     * Promotion stack ID.
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApideletePromotionStack
     */
    stackId: string
}

export interface PromotionsApiDeletePromotionTierRequest {
    /**
     * Unique promotion tier ID.
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApideletePromotionTier
     */
    promotionTierId: string
}

export interface PromotionsApiDisablePromotionTierRequest {
    /**
     * Unique promotion tier ID.
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApidisablePromotionTier
     */
    promotionTierId: string
}

export interface PromotionsApiEnablePromotionTierRequest {
    /**
     * Unique promotion tier ID.
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApienablePromotionTier
     */
    promotionTierId: string
}

export interface PromotionsApiGetPromotionStackRequest {
    /**
     * ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApigetPromotionStack
     */
    campaignId: string
    /**
     * Promotion stack ID.
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApigetPromotionStack
     */
    stackId: string
}

export interface PromotionsApiGetPromotionTierRequest {
    /**
     * Unique promotion tier ID.
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApigetPromotionTier
     */
    promotionTierId: string
}

export interface PromotionsApiListAllPromotionStacksRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof PromotionsApilistAllPromotionStacks
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof PromotionsApilistAllPromotionStacks
     */
    page?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListAllPromotionStacks
     * @memberof PromotionsApilistAllPromotionStacks
     */
    order?: ParameterOrderListAllPromotionStacks
    /**
     * A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * Defaults to: undefined
     * @type ParameterCreatedBeforeAfter
     * @memberof PromotionsApilistAllPromotionStacks
     */
    createdAt?: ParameterCreatedBeforeAfter
    /**
     * A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z
     * Defaults to: undefined
     * @type ParameterUpdatedBeforeAfter
     * @memberof PromotionsApilistAllPromotionStacks
     */
    updatedAt?: ParameterUpdatedBeforeAfter
}

export interface PromotionsApiListPromotionStacksInCampaignRequest {
    /**
     * Unique campaign ID.
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApilistPromotionStacksInCampaign
     */
    campaignId: string
}

export interface PromotionsApiListPromotionTiersRequest {
    /**
     * This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions.
     * Defaults to: undefined
     * @type boolean
     * @memberof PromotionsApilistPromotionTiers
     */
    isAvailable?: boolean
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof PromotionsApilistPromotionTiers
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof PromotionsApilistPromotionTiers
     */
    page?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListPromotionTiers
     * @memberof PromotionsApilistPromotionTiers
     */
    order?: ParameterOrderListPromotionTiers
}

export interface PromotionsApiListPromotionTiersFromCampaignRequest {
    /**
     * Unique campaign ID assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApilistPromotionTiersFromCampaign
     */
    campaignId: string
}

export interface PromotionsApiUpdatePromotionStackRequest {
    /**
     * ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApiupdatePromotionStack
     */
    campaignId: string
    /**
     * Promotion stack ID.
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApiupdatePromotionStack
     */
    stackId: string
    /**
     * Specify the promotion stack parameters that you would like to update.
     * @type PromotionsStacksUpdateRequestBody
     * @memberof PromotionsApiupdatePromotionStack
     */
    promotionsStacksUpdateRequestBody?: PromotionsStacksUpdateRequestBody
}

export interface PromotionsApiUpdatePromotionTierRequest {
    /**
     * Unique promotion tier ID.
     * Defaults to: undefined
     * @type string
     * @memberof PromotionsApiupdatePromotionTier
     */
    promotionTierId: string
    /**
     * Specify the promotion tier parameters that you would like to update.
     * @type PromotionsTiersUpdateRequestBody
     * @memberof PromotionsApiupdatePromotionTier
     */
    promotionsTiersUpdateRequestBody?: PromotionsTiersUpdateRequestBody
}

export class ObjectPromotionsApi {
    private api: ObservablePromotionsApi

    public constructor(configuration: Configuration, requestFactory?: PromotionsApiRequestFactory, responseProcessor?: PromotionsApiResponseProcessor) {
        this.api = new ObservablePromotionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This method allows you to add a new promotion tier to an existing campaign. The tier hierarchy will be set as the next consequtive integer following the lowest ranking tier.
     * Add Promotion Tier to Campaign
     * @param param the request object
     */
    public addPromotionTierToCampaignWithHttpInfo(param: PromotionsApiAddPromotionTierToCampaignRequest, options?: ConfigurationOptions): Promise<HttpInfo<PromotionsTiersCreateResponseBody>> {
        return this.api.addPromotionTierToCampaignWithHttpInfo(param.campaignId, param.promotionsTiersCreateRequestBody,  options).toPromise();
    }

    /**
     * This method allows you to add a new promotion tier to an existing campaign. The tier hierarchy will be set as the next consequtive integer following the lowest ranking tier.
     * Add Promotion Tier to Campaign
     * @param param the request object
     */
    public addPromotionTierToCampaign(param: PromotionsApiAddPromotionTierToCampaignRequest, options?: ConfigurationOptions): Promise<PromotionsTiersCreateResponseBody> {
        return this.api.addPromotionTierToCampaign(param.campaignId, param.promotionsTiersCreateRequestBody,  options).toPromise();
    }

    /**
     * This method creates one promotion stack. The sequence of promotion tier IDs will determine the promotion stacking order.
     * Create Promotion Stack
     * @param param the request object
     */
    public createPromotionStackWithHttpInfo(param: PromotionsApiCreatePromotionStackRequest, options?: ConfigurationOptions): Promise<HttpInfo<PromotionsStacksCreateResponseBody>> {
        return this.api.createPromotionStackWithHttpInfo(param.campaignId, param.promotionsStacksCreateRequestBody,  options).toPromise();
    }

    /**
     * This method creates one promotion stack. The sequence of promotion tier IDs will determine the promotion stacking order.
     * Create Promotion Stack
     * @param param the request object
     */
    public createPromotionStack(param: PromotionsApiCreatePromotionStackRequest, options?: ConfigurationOptions): Promise<PromotionsStacksCreateResponseBody> {
        return this.api.createPromotionStack(param.campaignId, param.promotionsStacksCreateRequestBody,  options).toPromise();
    }

    /**
     * This method deletes a promotion stack.
     * Delete Promotion Stack
     * @param param the request object
     */
    public deletePromotionStackWithHttpInfo(param: PromotionsApiDeletePromotionStackRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deletePromotionStackWithHttpInfo(param.campaignId, param.stackId,  options).toPromise();
    }

    /**
     * This method deletes a promotion stack.
     * Delete Promotion Stack
     * @param param the request object
     */
    public deletePromotionStack(param: PromotionsApiDeletePromotionStackRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deletePromotionStack(param.campaignId, param.stackId,  options).toPromise();
    }

    /**
     * This method deletes a promotion tier.
     * Delete Promotion Tier
     * @param param the request object
     */
    public deletePromotionTierWithHttpInfo(param: PromotionsApiDeletePromotionTierRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deletePromotionTierWithHttpInfo(param.promotionTierId,  options).toPromise();
    }

    /**
     * This method deletes a promotion tier.
     * Delete Promotion Tier
     * @param param the request object
     */
    public deletePromotionTier(param: PromotionsApiDeletePromotionTierRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deletePromotionTier(param.promotionTierId,  options).toPromise();
    }

    /**
     * This method disables a promotion tier, i.e. makes the active parameter   false.
     * Disable Promotion Tier
     * @param param the request object
     */
    public disablePromotionTierWithHttpInfo(param: PromotionsApiDisablePromotionTierRequest, options?: ConfigurationOptions): Promise<HttpInfo<PromotionsTiersDisableResponseBody>> {
        return this.api.disablePromotionTierWithHttpInfo(param.promotionTierId,  options).toPromise();
    }

    /**
     * This method disables a promotion tier, i.e. makes the active parameter   false.
     * Disable Promotion Tier
     * @param param the request object
     */
    public disablePromotionTier(param: PromotionsApiDisablePromotionTierRequest, options?: ConfigurationOptions): Promise<PromotionsTiersDisableResponseBody> {
        return this.api.disablePromotionTier(param.promotionTierId,  options).toPromise();
    }

    /**
     * This method enables a promotion tier, i.e. makes the active parameter   true.
     * Enable Promotion Tier
     * @param param the request object
     */
    public enablePromotionTierWithHttpInfo(param: PromotionsApiEnablePromotionTierRequest, options?: ConfigurationOptions): Promise<HttpInfo<PromotionsTiersEnableResponseBody>> {
        return this.api.enablePromotionTierWithHttpInfo(param.promotionTierId,  options).toPromise();
    }

    /**
     * This method enables a promotion tier, i.e. makes the active parameter   true.
     * Enable Promotion Tier
     * @param param the request object
     */
    public enablePromotionTier(param: PromotionsApiEnablePromotionTierRequest, options?: ConfigurationOptions): Promise<PromotionsTiersEnableResponseBody> {
        return this.api.enablePromotionTier(param.promotionTierId,  options).toPromise();
    }

    /**
     * This method returns the details of a promotion stack, including the promotion tiers grouped within the stack.
     * Get Promotion Stack
     * @param param the request object
     */
    public getPromotionStackWithHttpInfo(param: PromotionsApiGetPromotionStackRequest, options?: ConfigurationOptions): Promise<HttpInfo<PromotionsStacksGetResponseBody>> {
        return this.api.getPromotionStackWithHttpInfo(param.campaignId, param.stackId,  options).toPromise();
    }

    /**
     * This method returns the details of a promotion stack, including the promotion tiers grouped within the stack.
     * Get Promotion Stack
     * @param param the request object
     */
    public getPromotionStack(param: PromotionsApiGetPromotionStackRequest, options?: ConfigurationOptions): Promise<PromotionsStacksGetResponseBody> {
        return this.api.getPromotionStack(param.campaignId, param.stackId,  options).toPromise();
    }

    /**
     * This method enables you to retrieve a specific promotion tier.
     * Get Promotion Tier
     * @param param the request object
     */
    public getPromotionTierWithHttpInfo(param: PromotionsApiGetPromotionTierRequest, options?: ConfigurationOptions): Promise<HttpInfo<PromotionsTiersGetResponseBody>> {
        return this.api.getPromotionTierWithHttpInfo(param.promotionTierId,  options).toPromise();
    }

    /**
     * This method enables you to retrieve a specific promotion tier.
     * Get Promotion Tier
     * @param param the request object
     */
    public getPromotionTier(param: PromotionsApiGetPromotionTierRequest, options?: ConfigurationOptions): Promise<PromotionsTiersGetResponseBody> {
        return this.api.getPromotionTier(param.promotionTierId,  options).toPromise();
    }

    /**
     * This method enables you to list promotion stacks irrespective of the campaign they are associated with.  You can use filters in the query parameters to specify the stacks to be returned in the response. # Advanced filters for fetching promotion stacks  
     * List Promotion Stacks
     * @param param the request object
     */
    public listAllPromotionStacksWithHttpInfo(param: PromotionsApiListAllPromotionStacksRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PromotionsStacksListResponseBody>> {
        return this.api.listAllPromotionStacksWithHttpInfo(param.limit, param.page, param.order, param.createdAt, param.updatedAt,  options).toPromise();
    }

    /**
     * This method enables you to list promotion stacks irrespective of the campaign they are associated with.  You can use filters in the query parameters to specify the stacks to be returned in the response. # Advanced filters for fetching promotion stacks  
     * List Promotion Stacks
     * @param param the request object
     */
    public listAllPromotionStacks(param: PromotionsApiListAllPromotionStacksRequest = {}, options?: ConfigurationOptions): Promise<PromotionsStacksListResponseBody> {
        return this.api.listAllPromotionStacks(param.limit, param.page, param.order, param.createdAt, param.updatedAt,  options).toPromise();
    }

    /**
     * This method enables you to list promotion stacks from a specified campaign.
     * List Promotion Stacks in Campaign
     * @param param the request object
     */
    public listPromotionStacksInCampaignWithHttpInfo(param: PromotionsApiListPromotionStacksInCampaignRequest, options?: ConfigurationOptions): Promise<HttpInfo<PromotionsStacksListResponseBody>> {
        return this.api.listPromotionStacksInCampaignWithHttpInfo(param.campaignId,  options).toPromise();
    }

    /**
     * This method enables you to list promotion stacks from a specified campaign.
     * List Promotion Stacks in Campaign
     * @param param the request object
     */
    public listPromotionStacksInCampaign(param: PromotionsApiListPromotionStacksInCampaignRequest, options?: ConfigurationOptions): Promise<PromotionsStacksListResponseBody> {
        return this.api.listPromotionStacksInCampaign(param.campaignId,  options).toPromise();
    }

    /**
     * This method enables you to list promotion tiers.
     * List Promotion Tiers
     * @param param the request object
     */
    public listPromotionTiersWithHttpInfo(param: PromotionsApiListPromotionTiersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PromotionsTiersListResponseBody>> {
        return this.api.listPromotionTiersWithHttpInfo(param.isAvailable, param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * This method enables you to list promotion tiers.
     * List Promotion Tiers
     * @param param the request object
     */
    public listPromotionTiers(param: PromotionsApiListPromotionTiersRequest = {}, options?: ConfigurationOptions): Promise<PromotionsTiersListResponseBody> {
        return this.api.listPromotionTiers(param.isAvailable, param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * This method enables you to list promotion tiers from a specified campaign.
     * List Promotion Tiers from Campaign
     * @param param the request object
     */
    public listPromotionTiersFromCampaignWithHttpInfo(param: PromotionsApiListPromotionTiersFromCampaignRequest, options?: ConfigurationOptions): Promise<HttpInfo<PromotionsTiersListResponseBody>> {
        return this.api.listPromotionTiersFromCampaignWithHttpInfo(param.campaignId,  options).toPromise();
    }

    /**
     * This method enables you to list promotion tiers from a specified campaign.
     * List Promotion Tiers from Campaign
     * @param param the request object
     */
    public listPromotionTiersFromCampaign(param: PromotionsApiListPromotionTiersFromCampaignRequest, options?: ConfigurationOptions): Promise<PromotionsTiersListResponseBody> {
        return this.api.listPromotionTiersFromCampaign(param.campaignId,  options).toPromise();
    }

    /**
     * This methods allows for editing an existing stack.
     * Update Promotion Stack
     * @param param the request object
     */
    public updatePromotionStackWithHttpInfo(param: PromotionsApiUpdatePromotionStackRequest, options?: ConfigurationOptions): Promise<HttpInfo<PromotionsStacksUpdateResponseBody>> {
        return this.api.updatePromotionStackWithHttpInfo(param.campaignId, param.stackId, param.promotionsStacksUpdateRequestBody,  options).toPromise();
    }

    /**
     * This methods allows for editing an existing stack.
     * Update Promotion Stack
     * @param param the request object
     */
    public updatePromotionStack(param: PromotionsApiUpdatePromotionStackRequest, options?: ConfigurationOptions): Promise<PromotionsStacksUpdateResponseBody> {
        return this.api.updatePromotionStack(param.campaignId, param.stackId, param.promotionsStacksUpdateRequestBody,  options).toPromise();
    }

    /**
     * This method updates a promotion tier.
     * Update Promotion Tier
     * @param param the request object
     */
    public updatePromotionTierWithHttpInfo(param: PromotionsApiUpdatePromotionTierRequest, options?: ConfigurationOptions): Promise<HttpInfo<PromotionsTiersUpdateResponseBody>> {
        return this.api.updatePromotionTierWithHttpInfo(param.promotionTierId, param.promotionsTiersUpdateRequestBody,  options).toPromise();
    }

    /**
     * This method updates a promotion tier.
     * Update Promotion Tier
     * @param param the request object
     */
    public updatePromotionTier(param: PromotionsApiUpdatePromotionTierRequest, options?: ConfigurationOptions): Promise<PromotionsTiersUpdateResponseBody> {
        return this.api.updatePromotionTier(param.promotionTierId, param.promotionsTiersUpdateRequestBody,  options).toPromise();
    }

}

import { ObservablePublicationsApi } from "./ObservableAPI";
import { PublicationsApiRequestFactory, PublicationsApiResponseProcessor} from "../apis/PublicationsApi";

export interface PublicationsApiCreatePublicationRequest {
    /**
     * Through this flag, you can control if a particular person gets only one and always the same code even if the app sends multiple publication requests. It means that if you have a referral program, a referrer is assigned only to one code if an integration sends publication requests more than once for the same customer.
     * Defaults to: undefined
     * @type boolean
     * @memberof PublicationsApicreatePublication
     */
    joinOnce?: boolean
    /**
     * Specify the publication parameters.
     * @type PublicationsCreateRequestBody
     * @memberof PublicationsApicreatePublication
     */
    publicationsCreateRequestBody?: PublicationsCreateRequestBody
}

export interface PublicationsApiCreatePublication1Request {
    /**
     * Contains information about the customer to whom the publication was directed.
     * Defaults to: undefined
     * @type Customer
     * @memberof PublicationsApicreatePublication1
     */
    customer: Customer
    /**
     * Through this flag, you can control if a particular person gets only one and always the same code even if the app sends multiple publication requests. It means that if you have a referral program, a referrer is assigned only to one code if an integration sends publication requests more than once for the same customer.
     * Defaults to: undefined
     * @type boolean
     * @memberof PublicationsApicreatePublication1
     */
    joinOnce?: boolean
    /**
     * Code of voucher being published.
     * Defaults to: undefined
     * @type string
     * @memberof PublicationsApicreatePublication1
     */
    voucher?: string
    /**
     * Create publication with campaign.
     * Defaults to: undefined
     * @type CreatePublicationCampaign
     * @memberof PublicationsApicreatePublication1
     */
    campaign?: CreatePublicationCampaign
    /**
     * The merchants publication ID if it is different from the Voucherify publication ID. Its an optional tracking identifier of a publication. It is really useful in case of an integration between multiple systems. It can be a publication ID from a CRM system, database or 3rd-party service. If source_id is provided only 1 voucher can be published per request.
     * Defaults to: undefined
     * @type string
     * @memberof PublicationsApicreatePublication1
     */
    sourceId?: string
    /**
     * The metadata object stores all custom attributes assigned to the publication. A set of key/value pairs that you can attach to a publication object. It can be useful for storing additional information about the publication in a structured format.
     * Defaults to: undefined
     * @type any
     * @memberof PublicationsApicreatePublication1
     */
    metadata?: any
}

export interface PublicationsApiListPublicationsRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof PublicationsApilistPublications
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof PublicationsApilistPublications
     */
    page?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListPublications
     * @memberof PublicationsApilistPublications
     */
    order?: ParameterOrderListPublications
    /**
     * Filters by a given campaign name.
     * Defaults to: undefined
     * @type string
     * @memberof PublicationsApilistPublications
     */
    campaign?: string
    /**
     * Filters by a unique customer ID.
     * Defaults to: undefined
     * @type string
     * @memberof PublicationsApilistPublications
     */
    customer?: string
    /**
     * Filters by a given voucher code.
     * Defaults to: undefined
     * @type string
     * @memberof PublicationsApilistPublications
     */
    voucher?: string
    /**
     * Filters by a publication result.
     * Defaults to: undefined
     * @type ParameterResultListPublications
     * @memberof PublicationsApilistPublications
     */
    result?: ParameterResultListPublications
    /**
     * Filters by a voucher type.
     * Defaults to: undefined
     * @type ParameterVoucherTypeListPublications
     * @memberof PublicationsApilistPublications
     */
    voucherType?: ParameterVoucherTypeListPublications
    /**
     * This filter works only for the true option. If set to true, the query returns only publications of codes from referral campaigns. 
     * Defaults to: undefined
     * @type boolean
     * @memberof PublicationsApilistPublications
     */
    isReferralCode?: boolean
    /**
     * Filters for listing publications.
     * Defaults to: undefined
     * @type ParameterFiltersListPublications
     * @memberof PublicationsApilistPublications
     */
    filters?: ParameterFiltersListPublications
    /**
     * Using this endpoint with a particular publication source_id, which was sent with the original request to create a publication, returns in the response, exactly the same code published initially because the code was assigned to the given publication. As a result, you can use this endpoint as a reference and return a code that was assigned in a publication by using a particular source_id.
     * Defaults to: undefined
     * @type string
     * @memberof PublicationsApilistPublications
     */
    sourceId?: string
}

export class ObjectPublicationsApi {
    private api: ObservablePublicationsApi

    public constructor(configuration: Configuration, requestFactory?: PublicationsApiRequestFactory, responseProcessor?: PublicationsApiResponseProcessor) {
        this.api = new ObservablePublicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This method selects vouchers that are suitable for publication, adds a publish entry and returns the publication. A voucher is suitable for publication when its active and hasnt been published yet.    🚧 Clearly define the source of the voucher  You must clearly define which source you want to publish the voucher code from. It can either be a code from a campaign or a specific voucher identified by a code.    🚧 Publish multiple vouchers  In case you want to publish multiple vouchers within a single publication, you need to specify the campaign name and number of vouchers you want to publish.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use an **auto-update** campaign.
     * Create Publication
     * @param param the request object
     */
    public createPublicationWithHttpInfo(param: PublicationsApiCreatePublicationRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PublicationsCreateResponseBody>> {
        return this.api.createPublicationWithHttpInfo(param.joinOnce, param.publicationsCreateRequestBody,  options).toPromise();
    }

    /**
     * This method selects vouchers that are suitable for publication, adds a publish entry and returns the publication. A voucher is suitable for publication when its active and hasnt been published yet.    🚧 Clearly define the source of the voucher  You must clearly define which source you want to publish the voucher code from. It can either be a code from a campaign or a specific voucher identified by a code.    🚧 Publish multiple vouchers  In case you want to publish multiple vouchers within a single publication, you need to specify the campaign name and number of vouchers you want to publish.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use an **auto-update** campaign.
     * Create Publication
     * @param param the request object
     */
    public createPublication(param: PublicationsApiCreatePublicationRequest = {}, options?: ConfigurationOptions): Promise<PublicationsCreateResponseBody> {
        return this.api.createPublication(param.joinOnce, param.publicationsCreateRequestBody,  options).toPromise();
    }

    /**
     * This method selects vouchers that are suitable for publication, adds a publish entry and returns the publication. A voucher is suitable for publication when its active and hasnt been published yet.  ❗️ Limited access  Access to this endpoint is limited. This endpoint is designed for specific integrations and the API keys need to be configured to access this endpoint. Navigate to the **Dashboard** &rarr; **Project Settings** &rarr; **General** &rarr; **Integration Keys** to set up a pair of API keys and use them to send the request.    🚧 Clearly define the source of the voucher  You must clearly define which source you want to publish the voucher code from. It can either be a code from a campaign or a specific voucher identified by a code.    🚧 Publish multiple vouchers  This endpoint does not support the publishing of multiple vouchers from a single campaign. In case you want to publish multiple vouchers within a single publication, you need to use a [dedicated endpoint](/api-reference/publications/create-publication).    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use an **auto-update** campaign.   # Example Request      ❗️ Required    Query param voucher OR campaign MUST be filled out. If you provide both, campaign param will be skipped.
     * Create Publication with GET
     * @param param the request object
     */
    public createPublication1WithHttpInfo(param: PublicationsApiCreatePublication1Request, options?: ConfigurationOptions): Promise<HttpInfo<PublicationsCreateResponseBody>> {
        return this.api.createPublication1WithHttpInfo(param.customer, param.joinOnce, param.voucher, param.campaign, param.sourceId, param.metadata,  options).toPromise();
    }

    /**
     * This method selects vouchers that are suitable for publication, adds a publish entry and returns the publication. A voucher is suitable for publication when its active and hasnt been published yet.  ❗️ Limited access  Access to this endpoint is limited. This endpoint is designed for specific integrations and the API keys need to be configured to access this endpoint. Navigate to the **Dashboard** &rarr; **Project Settings** &rarr; **General** &rarr; **Integration Keys** to set up a pair of API keys and use them to send the request.    🚧 Clearly define the source of the voucher  You must clearly define which source you want to publish the voucher code from. It can either be a code from a campaign or a specific voucher identified by a code.    🚧 Publish multiple vouchers  This endpoint does not support the publishing of multiple vouchers from a single campaign. In case you want to publish multiple vouchers within a single publication, you need to use a [dedicated endpoint](/api-reference/publications/create-publication).    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use an **auto-update** campaign.   # Example Request      ❗️ Required    Query param voucher OR campaign MUST be filled out. If you provide both, campaign param will be skipped.
     * Create Publication with GET
     * @param param the request object
     */
    public createPublication1(param: PublicationsApiCreatePublication1Request, options?: ConfigurationOptions): Promise<PublicationsCreateResponseBody> {
        return this.api.createPublication1(param.customer, param.joinOnce, param.voucher, param.campaign, param.sourceId, param.metadata,  options).toPromise();
    }

    /**
     * Retrieve a list of publications. To return a **particular** publication, you can use the source_id query parameter and provide the source_id of the publication you are looking for specifically. # Pagination  🚧 Important!  If you want to scroll through a huge set of records, it is recommended to use the [Exports API](/api-reference/exports/create-export). This API will return an error page_over_limit if you reach a page above 1000. # Filter Query The filters query parameter allows for joining multiple parameters with logical operators. The syntax looks as follows:  ## Examples  
     * List Publications
     * @param param the request object
     */
    public listPublicationsWithHttpInfo(param: PublicationsApiListPublicationsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PublicationsListResponseBody>> {
        return this.api.listPublicationsWithHttpInfo(param.limit, param.page, param.order, param.campaign, param.customer, param.voucher, param.result, param.voucherType, param.isReferralCode, param.filters, param.sourceId,  options).toPromise();
    }

    /**
     * Retrieve a list of publications. To return a **particular** publication, you can use the source_id query parameter and provide the source_id of the publication you are looking for specifically. # Pagination  🚧 Important!  If you want to scroll through a huge set of records, it is recommended to use the [Exports API](/api-reference/exports/create-export). This API will return an error page_over_limit if you reach a page above 1000. # Filter Query The filters query parameter allows for joining multiple parameters with logical operators. The syntax looks as follows:  ## Examples  
     * List Publications
     * @param param the request object
     */
    public listPublications(param: PublicationsApiListPublicationsRequest = {}, options?: ConfigurationOptions): Promise<PublicationsListResponseBody> {
        return this.api.listPublications(param.limit, param.page, param.order, param.campaign, param.customer, param.voucher, param.result, param.voucherType, param.isReferralCode, param.filters, param.sourceId,  options).toPromise();
    }

}

import { ObservableQualificationsApi } from "./ObservableAPI";
import { QualificationsApiRequestFactory, QualificationsApiResponseProcessor} from "../apis/QualificationsApi";

export interface QualificationsApiCheckEligibilityRequest {
    /**
     * Define order and customer context.
     * @type QualificationsCheckEligibilityRequestBody
     * @memberof QualificationsApicheckEligibility
     */
    qualificationsCheckEligibilityRequestBody?: QualificationsCheckEligibilityRequestBody
}

export class ObjectQualificationsApi {
    private api: ObservableQualificationsApi

    public constructor(configuration: Configuration, requestFactory?: QualificationsApiRequestFactory, responseProcessor?: QualificationsApiResponseProcessor) {
        this.api = new ObservableQualificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *   🚧 The Qualifications endpoint ignores the rules checking:    - Limit of total redeemed discount amount per campaign  - Limit of total redemptions count per campaign  - Redemptions per customer  - Redemptions per customer in a campaign  Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read [the dedicated guide](/guides/checking-eligibility) to learn about some use cases this endpoint can cover. # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.
     * Check Eligibility
     * @param param the request object
     */
    public checkEligibilityWithHttpInfo(param: QualificationsApiCheckEligibilityRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<QualificationsCheckEligibilityResponseBody>> {
        return this.api.checkEligibilityWithHttpInfo(param.qualificationsCheckEligibilityRequestBody,  options).toPromise();
    }

    /**
     *   🚧 The Qualifications endpoint ignores the rules checking:    - Limit of total redeemed discount amount per campaign  - Limit of total redemptions count per campaign  - Redemptions per customer  - Redemptions per customer in a campaign  Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read [the dedicated guide](/guides/checking-eligibility) to learn about some use cases this endpoint can cover. # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.
     * Check Eligibility
     * @param param the request object
     */
    public checkEligibility(param: QualificationsApiCheckEligibilityRequest = {}, options?: ConfigurationOptions): Promise<QualificationsCheckEligibilityResponseBody> {
        return this.api.checkEligibility(param.qualificationsCheckEligibilityRequestBody,  options).toPromise();
    }

}

import { ObservableRedemptionsApi } from "./ObservableAPI";
import { RedemptionsApiRequestFactory, RedemptionsApiResponseProcessor} from "../apis/RedemptionsApi";

export interface RedemptionsApiGetRedemptionRequest {
    /**
     * ID of previously created redemption.
     * Defaults to: undefined
     * @type string
     * @memberof RedemptionsApigetRedemption
     */
    redemptionId: string
}

export interface RedemptionsApiGetVoucherRedemptionsRequest {
    /**
     * A **code** that identifies the voucher.
     * Defaults to: undefined
     * @type string
     * @memberof RedemptionsApigetVoucherRedemptions
     */
    code: string
}

export interface RedemptionsApiListRedemptionsRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof RedemptionsApilistRedemptions
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1, the highest value is 99.
     * Minimum: 1
     * Maximum: 99
     * Defaults to: undefined
     * @type number
     * @memberof RedemptionsApilistRedemptions
     */
    page?: number
    /**
     * A filter on the list based on the redemption result. Available options are: SUCCESS, FAILURE. You can provide multiple values by repeating the param.
     * Defaults to: undefined
     * @type string
     * @memberof RedemptionsApilistRedemptions
     */
    result?: string
    /**
     * A filter by the campaign **name** that the redemption resources originate from.
     * Defaults to: undefined
     * @type string
     * @memberof RedemptionsApilistRedemptions
     */
    campaign?: string
    /**
     * Return redemptions performed by the customer with given id or source_id.
     * Defaults to: undefined
     * @type string
     * @memberof RedemptionsApilistRedemptions
     */
    customer?: string
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListRedemptions
     * @memberof RedemptionsApilistRedemptions
     */
    order?: ParameterOrderListRedemptions
    /**
     * A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * Defaults to: undefined
     * @type ParameterCreatedBeforeAfter
     * @memberof RedemptionsApilistRedemptions
     */
    createdAt?: ParameterCreatedBeforeAfter
    /**
     * Filters for listing responses.
     * Defaults to: undefined
     * @type ParameterFiltersListRedemptions
     * @memberof RedemptionsApilistRedemptions
     */
    filters?: ParameterFiltersListRedemptions
}

export interface RedemptionsApiRedeemStackedDiscountsRequest {
    /**
     * 
     * @type RedemptionsRedeemRequestBody
     * @memberof RedemptionsApiredeemStackedDiscounts
     */
    redemptionsRedeemRequestBody?: RedemptionsRedeemRequestBody
}

export interface RedemptionsApiRollbackRedemptionRequest {
    /**
     * The original redemption ID to be rolled back (undone).
     * Defaults to: undefined
     * @type string
     * @memberof RedemptionsApirollbackRedemption
     */
    redemptionId: string
    /**
     * Reason for the rollback.
     * Defaults to: undefined
     * @type string
     * @memberof RedemptionsApirollbackRedemption
     */
    reason?: string
    /**
     * Customers source_id.
     * Defaults to: undefined
     * @type string
     * @memberof RedemptionsApirollbackRedemption
     */
    trackingId?: string
    /**
     * Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
     * @type RedemptionsRollbackCreateRequestBody
     * @memberof RedemptionsApirollbackRedemption
     */
    redemptionsRollbackCreateRequestBody?: RedemptionsRollbackCreateRequestBody
}

export interface RedemptionsApiRollbackStackedRedemptionsRequest {
    /**
     * Unique identifier of a parent redemption, e.g. r_JQfm73zWSJFQxs3bGxweYjgm.
     * Defaults to: undefined
     * @type string
     * @memberof RedemptionsApirollbackStackedRedemptions
     */
    parentRedemptionId: string
    /**
     * Reason for the rollback.
     * Defaults to: undefined
     * @type string
     * @memberof RedemptionsApirollbackStackedRedemptions
     */
    reason?: string
    /**
     * Customers source_id.
     * Defaults to: undefined
     * @type string
     * @memberof RedemptionsApirollbackStackedRedemptions
     */
    trackingId?: string
    /**
     * Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
     * @type RedemptionsRollbacksCreateRequestBody
     * @memberof RedemptionsApirollbackStackedRedemptions
     */
    redemptionsRollbacksCreateRequestBody?: RedemptionsRollbacksCreateRequestBody
}

export class ObjectRedemptionsApi {
    private api: ObservableRedemptionsApi

    public constructor(configuration: Configuration, requestFactory?: RedemptionsApiRequestFactory, responseProcessor?: RedemptionsApiResponseProcessor) {
        this.api = new ObservableRedemptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return a redemption or redemption rollback object. This object can either be a successfull or failed redemption or redemption rollback.
     * Get Redemption
     * @param param the request object
     */
    public getRedemptionWithHttpInfo(param: RedemptionsApiGetRedemptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<RedemptionsGetResponseBody>> {
        return this.api.getRedemptionWithHttpInfo(param.redemptionId,  options).toPromise();
    }

    /**
     * Return a redemption or redemption rollback object. This object can either be a successfull or failed redemption or redemption rollback.
     * Get Redemption
     * @param param the request object
     */
    public getRedemption(param: RedemptionsApiGetRedemptionRequest, options?: ConfigurationOptions): Promise<RedemptionsGetResponseBody> {
        return this.api.getRedemption(param.redemptionId,  options).toPromise();
    }

    /**
     * Retrieve the number of times a voucher was redeemed and each of the redemption details.
     * Get Voucher\'s Redemptions
     * @param param the request object
     */
    public getVoucherRedemptionsWithHttpInfo(param: RedemptionsApiGetVoucherRedemptionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<VouchersRedemptionGetResponseBody>> {
        return this.api.getVoucherRedemptionsWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Retrieve the number of times a voucher was redeemed and each of the redemption details.
     * Get Voucher\'s Redemptions
     * @param param the request object
     */
    public getVoucherRedemptions(param: RedemptionsApiGetVoucherRedemptionsRequest, options?: ConfigurationOptions): Promise<VouchersRedemptionGetResponseBody> {
        return this.api.getVoucherRedemptions(param.code,  options).toPromise();
    }

    /**
     * Returns a list of redemptions previously created. The redemptions are returned in a sorted order, with the most recent redemptions appearing first. The response returns a list of redemptions of all vouchers.  # Filtering results The result can be narrowed according to specified (or default) filters, for example, you can sort redemptions by date: https://api.voucherify.io/v1/redemptions?limit 3&[created_at][before] 2017-09-08T13:52:18.227Z. A filter based on the object created_at field narrows down the results and lists redemptions done before or after a particular date time. You can use the following options: [created_at][after], [created_at][before]. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z. # Failed Redemptions A redemption may fail for various reasons. You can figure out an exact reason from the failure_code: - resource_not_found - voucher with given code does not exist - voucher_not_active - voucher is not active yet (before start date) - voucher_expired - voucher has already expired (after expiration date) - voucher_disabled -  voucher has been disabled (active: false) - quantity_exceeded - vouchers redemptions limit has been exceeded - gift_amount_exceeded - gift amount has been exceeded - customer_rules_violated - customer did not match the segment - order_rules_violated - order did not match validation rules - invalid_order - order was specified incorrectly - invalid_amount - order amount was specified incorrectly - missing_amount - order amount was not specified - missing_order_items - order items were not specified - missing_customer - customer was not specified
     * List Redemptions
     * @param param the request object
     */
    public listRedemptionsWithHttpInfo(param: RedemptionsApiListRedemptionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RedemptionsListResponseBody>> {
        return this.api.listRedemptionsWithHttpInfo(param.limit, param.page, param.result, param.campaign, param.customer, param.order, param.createdAt, param.filters,  options).toPromise();
    }

    /**
     * Returns a list of redemptions previously created. The redemptions are returned in a sorted order, with the most recent redemptions appearing first. The response returns a list of redemptions of all vouchers.  # Filtering results The result can be narrowed according to specified (or default) filters, for example, you can sort redemptions by date: https://api.voucherify.io/v1/redemptions?limit 3&[created_at][before] 2017-09-08T13:52:18.227Z. A filter based on the object created_at field narrows down the results and lists redemptions done before or after a particular date time. You can use the following options: [created_at][after], [created_at][before]. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z. # Failed Redemptions A redemption may fail for various reasons. You can figure out an exact reason from the failure_code: - resource_not_found - voucher with given code does not exist - voucher_not_active - voucher is not active yet (before start date) - voucher_expired - voucher has already expired (after expiration date) - voucher_disabled -  voucher has been disabled (active: false) - quantity_exceeded - vouchers redemptions limit has been exceeded - gift_amount_exceeded - gift amount has been exceeded - customer_rules_violated - customer did not match the segment - order_rules_violated - order did not match validation rules - invalid_order - order was specified incorrectly - invalid_amount - order amount was specified incorrectly - missing_amount - order amount was not specified - missing_order_items - order items were not specified - missing_customer - customer was not specified
     * List Redemptions
     * @param param the request object
     */
    public listRedemptions(param: RedemptionsApiListRedemptionsRequest = {}, options?: ConfigurationOptions): Promise<RedemptionsListResponseBody> {
        return this.api.listRedemptions(param.limit, param.page, param.result, param.campaign, param.customer, param.order, param.createdAt, param.filters,  options).toPromise();
    }

    /**
     * # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:   API keys with a Merchant role cant use this endpoint.  📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).      📘 Also available on client-side  This method is also accessible through public keys which you can use in client-side​ apps: mobile and web browser apps. Go to the dedicated [endpoint](/api-reference/client-side/redeem-stackable-discounts-client-side) to learn more.  - Use X-Client-Application-Id as the application ID header.  - Use X-Client-Token as the appliction secret key header.  - Use client-side base URL.  - Use an origin header for your custom domain.
     * Redeem Stackable Discounts
     * @param param the request object
     */
    public redeemStackedDiscountsWithHttpInfo(param: RedemptionsApiRedeemStackedDiscountsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RedemptionsRedeemResponseBody>> {
        return this.api.redeemStackedDiscountsWithHttpInfo(param.redemptionsRedeemRequestBody,  options).toPromise();
    }

    /**
     * # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:   API keys with a Merchant role cant use this endpoint.  📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).      📘 Also available on client-side  This method is also accessible through public keys which you can use in client-side​ apps: mobile and web browser apps. Go to the dedicated [endpoint](/api-reference/client-side/redeem-stackable-discounts-client-side) to learn more.  - Use X-Client-Application-Id as the application ID header.  - Use X-Client-Token as the appliction secret key header.  - Use client-side base URL.  - Use an origin header for your custom domain.
     * Redeem Stackable Discounts
     * @param param the request object
     */
    public redeemStackedDiscounts(param: RedemptionsApiRedeemStackedDiscountsRequest = {}, options?: ConfigurationOptions): Promise<RedemptionsRedeemResponseBody> {
        return this.api.redeemStackedDiscounts(param.redemptionsRedeemRequestBody,  options).toPromise();
    }

    /**
     * Your business logic may include a case when you need to undo a redemption. You can revert a redemption by calling this API endpoint. This endpoint rolls back only single redemptions, meaning those that are not stacked. Stacked redemptions belong to a parent redemption. To roll back a parent redemption, including all of its individual redemptions, use the [POST Rollback Stackable Redemptions](/api-reference/redemptions/rollback-stackable-redemptions)  🚧  You can roll back a redemption up to 3 months back.   # Effect  The operation  - creates a rollback entry in vouchers redemption history (redemption.redemption_entries) and  - gives 1 redemption back to the pool (decreases redeemed_quantity by 1).  # Returned funds  In case of *gift card vouchers*, this method returns funds back according to the source redemption. In case of *loyalty card vouchers*, this method returns points back according to the source redemption.
     * Rollback Redemption
     * @param param the request object
     */
    public rollbackRedemptionWithHttpInfo(param: RedemptionsApiRollbackRedemptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<RedemptionsRollbackCreateResponseBody>> {
        return this.api.rollbackRedemptionWithHttpInfo(param.redemptionId, param.reason, param.trackingId, param.redemptionsRollbackCreateRequestBody,  options).toPromise();
    }

    /**
     * Your business logic may include a case when you need to undo a redemption. You can revert a redemption by calling this API endpoint. This endpoint rolls back only single redemptions, meaning those that are not stacked. Stacked redemptions belong to a parent redemption. To roll back a parent redemption, including all of its individual redemptions, use the [POST Rollback Stackable Redemptions](/api-reference/redemptions/rollback-stackable-redemptions)  🚧  You can roll back a redemption up to 3 months back.   # Effect  The operation  - creates a rollback entry in vouchers redemption history (redemption.redemption_entries) and  - gives 1 redemption back to the pool (decreases redeemed_quantity by 1).  # Returned funds  In case of *gift card vouchers*, this method returns funds back according to the source redemption. In case of *loyalty card vouchers*, this method returns points back according to the source redemption.
     * Rollback Redemption
     * @param param the request object
     */
    public rollbackRedemption(param: RedemptionsApiRollbackRedemptionRequest, options?: ConfigurationOptions): Promise<RedemptionsRollbackCreateResponseBody> {
        return this.api.rollbackRedemption(param.redemptionId, param.reason, param.trackingId, param.redemptionsRollbackCreateRequestBody,  options).toPromise();
    }

    /**
     * Rollback a stackable redemption. When you roll back a stacked redemption, all child redemptions will be rolled back. Provide the parent redemption ID as the path parameter. However, you can use this endpoint to roll back a single redemption that does not have a parent, similarly to [POST Rollback redemption](/api-reference/redemptions/rollback-redemption). 🚧   You can roll back a redemption up to 3 months back.
     * Rollback Stackable Redemptions
     * @param param the request object
     */
    public rollbackStackedRedemptionsWithHttpInfo(param: RedemptionsApiRollbackStackedRedemptionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<RedemptionsRollbacksCreateResponseBody>> {
        return this.api.rollbackStackedRedemptionsWithHttpInfo(param.parentRedemptionId, param.reason, param.trackingId, param.redemptionsRollbacksCreateRequestBody,  options).toPromise();
    }

    /**
     * Rollback a stackable redemption. When you roll back a stacked redemption, all child redemptions will be rolled back. Provide the parent redemption ID as the path parameter. However, you can use this endpoint to roll back a single redemption that does not have a parent, similarly to [POST Rollback redemption](/api-reference/redemptions/rollback-redemption). 🚧   You can roll back a redemption up to 3 months back.
     * Rollback Stackable Redemptions
     * @param param the request object
     */
    public rollbackStackedRedemptions(param: RedemptionsApiRollbackStackedRedemptionsRequest, options?: ConfigurationOptions): Promise<RedemptionsRollbacksCreateResponseBody> {
        return this.api.rollbackStackedRedemptions(param.parentRedemptionId, param.reason, param.trackingId, param.redemptionsRollbacksCreateRequestBody,  options).toPromise();
    }

}

import { ObservableReferralsApi } from "./ObservableAPI";
import { ReferralsApiRequestFactory, ReferralsApiResponseProcessor} from "../apis/ReferralsApi";

export interface ReferralsApiReferralsAddHoldersRequest {
    /**
     * Unique referral code or its identifier.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsAddHolders
     */
    memberId: string
    /**
     * Specify the customer data to be upserted as redeemable holders.
     * @type ReferralsMembersHoldersCreateInBulkRequestBody
     * @memberof ReferralsApireferralsAddHolders
     */
    referralsMembersHoldersCreateInBulkRequestBody?: ReferralsMembersHoldersCreateInBulkRequestBody
}

export interface ReferralsApiReferralsAddHolders1Request {
    /**
     * Unique identifier of a referral program campaign.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsAddHolders1
     */
    campaignId: string
    /**
     * Unique referral code or its identifier.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsAddHolders1
     */
    memberId: string
    /**
     * Specify the customer data to be upserted as redeemable holders.
     * @type ReferralsMembersHoldersCreateInBulkRequestBody
     * @memberof ReferralsApireferralsAddHolders1
     */
    referralsMembersHoldersCreateInBulkRequestBody?: ReferralsMembersHoldersCreateInBulkRequestBody
}

export interface ReferralsApiReferralsCodeHoldersRequest {
    /**
     * Unique identifier of a referral program campaign.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsCodeHolders
     */
    campaignId: string
    /**
     * Unique referral code or its identifier.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsCodeHolders
     */
    memberId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ReferralsApireferralsCodeHolders
     */
    limit?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListRedeemables
     * @memberof ReferralsApireferralsCodeHolders
     */
    order?: ParameterOrderListRedeemables
    /**
     * A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsCodeHolders
     */
    startingAfterId?: string
    /**
     * Filters for listing customer redeemables.
     * Defaults to: undefined
     * @type ParameterFiltersListReferralsRedeemableHolders
     * @memberof ReferralsApireferralsCodeHolders
     */
    filters?: ParameterFiltersListReferralsRedeemableHolders
}

export interface ReferralsApiReferralsCodeHolders1Request {
    /**
     * Unique referral code or its identifier.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsCodeHolders1
     */
    memberId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ReferralsApireferralsCodeHolders1
     */
    limit?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListRedeemables
     * @memberof ReferralsApireferralsCodeHolders1
     */
    order?: ParameterOrderListRedeemables
    /**
     * A cursor for pagination. It retrieves the events starting after an event with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsCodeHolders1
     */
    startingAfterId?: string
    /**
     * Filters for listing customer redeemables.
     * Defaults to: undefined
     * @type ParameterFiltersListReferralsRedeemableHolders
     * @memberof ReferralsApireferralsCodeHolders1
     */
    filters?: ParameterFiltersListReferralsRedeemableHolders
}

export interface ReferralsApiReferralsRemoveHolderRequest {
    /**
     * Unique referral code or its identifier.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsRemoveHolder
     */
    memberId: string
    /**
     * Unique identifier of a redeemable holder.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsRemoveHolder
     */
    holderId: string
}

export interface ReferralsApiReferralsRemoveHolder1Request {
    /**
     * Unique identifier of a referral program campaign.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsRemoveHolder1
     */
    campaignId: string
    /**
     * Unique referral code or its identifier.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsRemoveHolder1
     */
    memberId: string
    /**
     * Unique identifier of a redeemable holder.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApireferralsRemoveHolder1
     */
    holderId: string
}

export class ObjectReferralsApi {
    private api: ObservableReferralsApi

    public constructor(configuration: Configuration, requestFactory?: ReferralsApiRequestFactory, responseProcessor?: ReferralsApiResponseProcessor) {
        this.api = new ObservableReferralsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.  📘 Alternative endpoint This endpoint is an alternative to the [Add Referral Code Holders endpoint](/api-reference/referrals/add-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Add Referral Code Holders
     * @param param the request object
     */
    public referralsAddHoldersWithHttpInfo(param: ReferralsApiReferralsAddHoldersRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReferralsMembersHoldersCreateInBulkResponseBody>> {
        return this.api.referralsAddHoldersWithHttpInfo(param.memberId, param.referralsMembersHoldersCreateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.  📘 Alternative endpoint This endpoint is an alternative to the [Add Referral Code Holders endpoint](/api-reference/referrals/add-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Add Referral Code Holders
     * @param param the request object
     */
    public referralsAddHolders(param: ReferralsApiReferralsAddHoldersRequest, options?: ConfigurationOptions): Promise<ReferralsMembersHoldersCreateInBulkResponseBody> {
        return this.api.referralsAddHolders(param.memberId, param.referralsMembersHoldersCreateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.
     * Add Referral Code Holders with Campaign ID
     * @param param the request object
     */
    public referralsAddHolders1WithHttpInfo(param: ReferralsApiReferralsAddHolders1Request, options?: ConfigurationOptions): Promise<HttpInfo<ReferralsMembersHoldersCreateInBulkResponseBody>> {
        return this.api.referralsAddHolders1WithHttpInfo(param.campaignId, param.memberId, param.referralsMembersHoldersCreateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.
     * Add Referral Code Holders with Campaign ID
     * @param param the request object
     */
    public referralsAddHolders1(param: ReferralsApiReferralsAddHolders1Request, options?: ConfigurationOptions): Promise<ReferralsMembersHoldersCreateInBulkResponseBody> {
        return this.api.referralsAddHolders1(param.campaignId, param.memberId, param.referralsMembersHoldersCreateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Retrieves all the redeemables that have been assigned to the customer. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)
     * List Referral Code Holders with campaign ID
     * @param param the request object
     */
    public referralsCodeHoldersWithHttpInfo(param: ReferralsApiReferralsCodeHoldersRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReferralsMembersHoldersListResponseBody>> {
        return this.api.referralsCodeHoldersWithHttpInfo(param.campaignId, param.memberId, param.limit, param.order, param.startingAfterId, param.filters,  options).toPromise();
    }

    /**
     * Retrieves all the redeemables that have been assigned to the customer. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)
     * List Referral Code Holders with campaign ID
     * @param param the request object
     */
    public referralsCodeHolders(param: ReferralsApiReferralsCodeHoldersRequest, options?: ConfigurationOptions): Promise<ReferralsMembersHoldersListResponseBody> {
        return this.api.referralsCodeHolders(param.campaignId, param.memberId, param.limit, param.order, param.startingAfterId, param.filters,  options).toPromise();
    }

    /**
     * Retrieves the holders of the referral code from a referral campaign. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)  📘 Alternative endpoint This endpoint is an alternative to the [List Member Holders endpoint](/api-reference/referrals/list-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * List Referral Code Holders
     * @param param the request object
     */
    public referralsCodeHolders1WithHttpInfo(param: ReferralsApiReferralsCodeHolders1Request, options?: ConfigurationOptions): Promise<HttpInfo<ReferralsMembersHoldersListResponseBody>> {
        return this.api.referralsCodeHolders1WithHttpInfo(param.memberId, param.limit, param.order, param.startingAfterId, param.filters,  options).toPromise();
    }

    /**
     * Retrieves the holders of the referral code from a referral campaign. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)  📘 Alternative endpoint This endpoint is an alternative to the [List Member Holders endpoint](/api-reference/referrals/list-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * List Referral Code Holders
     * @param param the request object
     */
    public referralsCodeHolders1(param: ReferralsApiReferralsCodeHolders1Request, options?: ConfigurationOptions): Promise<ReferralsMembersHoldersListResponseBody> {
        return this.api.referralsCodeHolders1(param.memberId, param.limit, param.order, param.startingAfterId, param.filters,  options).toPromise();
    }

    /**
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  📘 Alternative endpoint This endpoint is an alternative to the [Remove Referral Card Holder endpoint](/api-reference/referrals/remove-referral-card-holder-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Remove Referral Card Holder
     * @param param the request object
     */
    public referralsRemoveHolderWithHttpInfo(param: ReferralsApiReferralsRemoveHolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.referralsRemoveHolderWithHttpInfo(param.memberId, param.holderId,  options).toPromise();
    }

    /**
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  📘 Alternative endpoint This endpoint is an alternative to the [Remove Referral Card Holder endpoint](/api-reference/referrals/remove-referral-card-holder-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.
     * Remove Referral Card Holder
     * @param param the request object
     */
    public referralsRemoveHolder(param: ReferralsApiReferralsRemoveHolderRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.referralsRemoveHolder(param.memberId, param.holderId,  options).toPromise();
    }

    /**
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)
     * Remove Referral Card Holder with campaign ID
     * @param param the request object
     */
    public referralsRemoveHolder1WithHttpInfo(param: ReferralsApiReferralsRemoveHolder1Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.referralsRemoveHolder1WithHttpInfo(param.campaignId, param.memberId, param.holderId,  options).toPromise();
    }

    /**
     * Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)
     * Remove Referral Card Holder with campaign ID
     * @param param the request object
     */
    public referralsRemoveHolder1(param: ReferralsApiReferralsRemoveHolder1Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.referralsRemoveHolder1(param.campaignId, param.memberId, param.holderId,  options).toPromise();
    }

}

import { ObservableRewardsApi } from "./ObservableAPI";
import { RewardsApiRequestFactory, RewardsApiResponseProcessor} from "../apis/RewardsApi";

export interface RewardsApiCreateRewardRequest {
    /**
     * Define parameters of the new reward.
     * @type RewardsCreateRequestBody
     * @memberof RewardsApicreateReward
     */
    rewardsCreateRequestBody?: RewardsCreateRequestBody
}

export interface RewardsApiCreateRewardAssignmentRequest {
    /**
     * A unique reward ID.
     * Defaults to: undefined
     * @type string
     * @memberof RewardsApicreateRewardAssignment
     */
    rewardId: string
    /**
     * Provide the campaign ID of the campaign to which the reward is to be assigned and define the cost of the reward in terms of loyalty points.
     * @type RewardsAssignmentsCreateRequestBody
     * @memberof RewardsApicreateRewardAssignment
     */
    rewardsAssignmentsCreateRequestBody?: RewardsAssignmentsCreateRequestBody
}

export interface RewardsApiDeleteRewardRequest {
    /**
     * A unique reward ID.
     * Defaults to: undefined
     * @type string
     * @memberof RewardsApideleteReward
     */
    rewardId: string
}

export interface RewardsApiDeleteRewardAssignmentRequest {
    /**
     * A unique reward ID.
     * Defaults to: undefined
     * @type string
     * @memberof RewardsApideleteRewardAssignment
     */
    rewardId: string
    /**
     * A unique reward assignment ID.
     * Defaults to: undefined
     * @type string
     * @memberof RewardsApideleteRewardAssignment
     */
    assignmentId: string
}

export interface RewardsApiGetRewardRequest {
    /**
     * A unique reward ID.
     * Defaults to: undefined
     * @type string
     * @memberof RewardsApigetReward
     */
    rewardId: string
}

export interface RewardsApiGetRewardAssignmentRequest {
    /**
     * A unique reward ID.
     * Defaults to: undefined
     * @type string
     * @memberof RewardsApigetRewardAssignment
     */
    rewardId: string
    /**
     * A unique reward assignment ID.
     * Defaults to: undefined
     * @type string
     * @memberof RewardsApigetRewardAssignment
     */
    assignmentId: string
}

export interface RewardsApiListRewardAssignmentsRequest {
    /**
     * A unique reward ID.
     * Defaults to: undefined
     * @type string
     * @memberof RewardsApilistRewardAssignments
     */
    rewardId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof RewardsApilistRewardAssignments
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof RewardsApilistRewardAssignments
     */
    page?: number
}

export interface RewardsApiListRewardsRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof RewardsApilistRewards
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof RewardsApilistRewards
     */
    page?: number
    /**
     * A unique reward assignment ID. Use this parameter to get the reward details in the context of an assignment ID.
     * Defaults to: undefined
     * @type string
     * @memberof RewardsApilistRewards
     */
    assignmentId?: string
}

export interface RewardsApiUpdateRewardRequest {
    /**
     * A unique reward ID.
     * Defaults to: undefined
     * @type string
     * @memberof RewardsApiupdateReward
     */
    rewardId: string
    /**
     * Define the parameters to be updated for the reward.
     * @type RewardsUpdateRequestBody
     * @memberof RewardsApiupdateReward
     */
    rewardsUpdateRequestBody?: RewardsUpdateRequestBody
}

export interface RewardsApiUpdateRewardAssignmentRequest {
    /**
     * A unique reward ID.
     * Defaults to: undefined
     * @type string
     * @memberof RewardsApiupdateRewardAssignment
     */
    rewardId: string
    /**
     * A unique reward assignment ID.
     * Defaults to: undefined
     * @type string
     * @memberof RewardsApiupdateRewardAssignment
     */
    assignmentId: string
    /**
     * Define the number of points required to exchange for the reward.
     * @type RewardsAssignmentsUpdateRequestBody
     * @memberof RewardsApiupdateRewardAssignment
     */
    rewardsAssignmentsUpdateRequestBody?: RewardsAssignmentsUpdateRequestBody
}

export class ObjectRewardsApi {
    private api: ObservableRewardsApi

    public constructor(configuration: Configuration, requestFactory?: RewardsApiRequestFactory, responseProcessor?: RewardsApiResponseProcessor) {
        this.api = new ObservableRewardsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new reward.
     * Create Reward
     * @param param the request object
     */
    public createRewardWithHttpInfo(param: RewardsApiCreateRewardRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RewardsCreateResponseBody>> {
        return this.api.createRewardWithHttpInfo(param.rewardsCreateRequestBody,  options).toPromise();
    }

    /**
     * Create a new reward.
     * Create Reward
     * @param param the request object
     */
    public createReward(param: RewardsApiCreateRewardRequest = {}, options?: ConfigurationOptions): Promise<RewardsCreateResponseBody> {
        return this.api.createReward(param.rewardsCreateRequestBody,  options).toPromise();
    }

    /**
     * Assigns a reward to a specified loyalty campaign.
     * Create Reward Assignment
     * @param param the request object
     */
    public createRewardAssignmentWithHttpInfo(param: RewardsApiCreateRewardAssignmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<RewardsAssignmentsCreateResponseBody>> {
        return this.api.createRewardAssignmentWithHttpInfo(param.rewardId, param.rewardsAssignmentsCreateRequestBody,  options).toPromise();
    }

    /**
     * Assigns a reward to a specified loyalty campaign.
     * Create Reward Assignment
     * @param param the request object
     */
    public createRewardAssignment(param: RewardsApiCreateRewardAssignmentRequest, options?: ConfigurationOptions): Promise<RewardsAssignmentsCreateResponseBody> {
        return this.api.createRewardAssignment(param.rewardId, param.rewardsAssignmentsCreateRequestBody,  options).toPromise();
    }

    /**
     * Delete a reward.
     * Delete Reward
     * @param param the request object
     */
    public deleteRewardWithHttpInfo(param: RewardsApiDeleteRewardRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteRewardWithHttpInfo(param.rewardId,  options).toPromise();
    }

    /**
     * Delete a reward.
     * Delete Reward
     * @param param the request object
     */
    public deleteReward(param: RewardsApiDeleteRewardRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteReward(param.rewardId,  options).toPromise();
    }

    /**
     * This method deletes a reward assignment for a particular reward.
     * Delete Reward Assignment
     * @param param the request object
     */
    public deleteRewardAssignmentWithHttpInfo(param: RewardsApiDeleteRewardAssignmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteRewardAssignmentWithHttpInfo(param.rewardId, param.assignmentId,  options).toPromise();
    }

    /**
     * This method deletes a reward assignment for a particular reward.
     * Delete Reward Assignment
     * @param param the request object
     */
    public deleteRewardAssignment(param: RewardsApiDeleteRewardAssignmentRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteRewardAssignment(param.rewardId, param.assignmentId,  options).toPromise();
    }

    /**
     * Retrieve a reward by the reward ID.
     * Get Reward
     * @param param the request object
     */
    public getRewardWithHttpInfo(param: RewardsApiGetRewardRequest, options?: ConfigurationOptions): Promise<HttpInfo<Reward>> {
        return this.api.getRewardWithHttpInfo(param.rewardId,  options).toPromise();
    }

    /**
     * Retrieve a reward by the reward ID.
     * Get Reward
     * @param param the request object
     */
    public getReward(param: RewardsApiGetRewardRequest, options?: ConfigurationOptions): Promise<Reward> {
        return this.api.getReward(param.rewardId,  options).toPromise();
    }

    /**
     * Retrieve a reward assignment.
     * Get Reward Assignment
     * @param param the request object
     */
    public getRewardAssignmentWithHttpInfo(param: RewardsApiGetRewardAssignmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<RewardsAssignmentsGetResponseBody>> {
        return this.api.getRewardAssignmentWithHttpInfo(param.rewardId, param.assignmentId,  options).toPromise();
    }

    /**
     * Retrieve a reward assignment.
     * Get Reward Assignment
     * @param param the request object
     */
    public getRewardAssignment(param: RewardsApiGetRewardAssignmentRequest, options?: ConfigurationOptions): Promise<RewardsAssignmentsGetResponseBody> {
        return this.api.getRewardAssignment(param.rewardId, param.assignmentId,  options).toPromise();
    }

    /**
     * Retrieve reward assignments by the reward ID.
     * List Reward Assignments
     * @param param the request object
     */
    public listRewardAssignmentsWithHttpInfo(param: RewardsApiListRewardAssignmentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<RewardsAssignmentsListResponseBody>> {
        return this.api.listRewardAssignmentsWithHttpInfo(param.rewardId, param.limit, param.page,  options).toPromise();
    }

    /**
     * Retrieve reward assignments by the reward ID.
     * List Reward Assignments
     * @param param the request object
     */
    public listRewardAssignments(param: RewardsApiListRewardAssignmentsRequest, options?: ConfigurationOptions): Promise<RewardsAssignmentsListResponseBody> {
        return this.api.listRewardAssignments(param.rewardId, param.limit, param.page,  options).toPromise();
    }

    /**
     * Retrieve rewards.
     * List Rewards
     * @param param the request object
     */
    public listRewardsWithHttpInfo(param: RewardsApiListRewardsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RewardsListResponseBody>> {
        return this.api.listRewardsWithHttpInfo(param.limit, param.page, param.assignmentId,  options).toPromise();
    }

    /**
     * Retrieve rewards.
     * List Rewards
     * @param param the request object
     */
    public listRewards(param: RewardsApiListRewardsRequest = {}, options?: ConfigurationOptions): Promise<RewardsListResponseBody> {
        return this.api.listRewards(param.limit, param.page, param.assignmentId,  options).toPromise();
    }

    /**
     * Update the details of a reward.
     * Update Reward
     * @param param the request object
     */
    public updateRewardWithHttpInfo(param: RewardsApiUpdateRewardRequest, options?: ConfigurationOptions): Promise<HttpInfo<RewardsUpdateResponseBody>> {
        return this.api.updateRewardWithHttpInfo(param.rewardId, param.rewardsUpdateRequestBody,  options).toPromise();
    }

    /**
     * Update the details of a reward.
     * Update Reward
     * @param param the request object
     */
    public updateReward(param: RewardsApiUpdateRewardRequest, options?: ConfigurationOptions): Promise<RewardsUpdateResponseBody> {
        return this.api.updateReward(param.rewardId, param.rewardsUpdateRequestBody,  options).toPromise();
    }

    /**
     * Update the number of points needed to successfully redeem the reward.
     * Update Reward Assignment
     * @param param the request object
     */
    public updateRewardAssignmentWithHttpInfo(param: RewardsApiUpdateRewardAssignmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<RewardsAssignmentsUpdateResponseBody>> {
        return this.api.updateRewardAssignmentWithHttpInfo(param.rewardId, param.assignmentId, param.rewardsAssignmentsUpdateRequestBody,  options).toPromise();
    }

    /**
     * Update the number of points needed to successfully redeem the reward.
     * Update Reward Assignment
     * @param param the request object
     */
    public updateRewardAssignment(param: RewardsApiUpdateRewardAssignmentRequest, options?: ConfigurationOptions): Promise<RewardsAssignmentsUpdateResponseBody> {
        return this.api.updateRewardAssignment(param.rewardId, param.assignmentId, param.rewardsAssignmentsUpdateRequestBody,  options).toPromise();
    }

}

import { ObservableSegmentsApi } from "./ObservableAPI";
import { SegmentsApiRequestFactory, SegmentsApiResponseProcessor} from "../apis/SegmentsApi";

export interface SegmentsApiCreateSegmentRequest {
    /**
     * Specify the boundary conditions for the customer segment.
     * @type SegmentsCreateRequestBody
     * @memberof SegmentsApicreateSegment
     */
    segmentsCreateRequestBody?: SegmentsCreateRequestBody
}

export interface SegmentsApiDeleteSegmentRequest {
    /**
     * A unique customer segment ID.
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsApideleteSegment
     */
    segmentId: string
}

export interface SegmentsApiGetSegmentRequest {
    /**
     * A unique customer segment ID.
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsApigetSegment
     */
    segmentId: string
}

export class ObjectSegmentsApi {
    private api: ObservableSegmentsApi

    public constructor(configuration: Configuration, requestFactory?: SegmentsApiRequestFactory, responseProcessor?: SegmentsApiResponseProcessor) {
        this.api = new ObservableSegmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a customer segment.  🚧 Limit on static segments  There is a cap on the number of customers that you can assign to a static segment: **20,000**. If you would like to create a bigger segment, then you can use the unlimited auto-update or passive segment instead and use some customer metadata to build this segment.  🚧 Limit on Active and Passive segments  You can create a maximum of 100 passive and active segments.
     * Create Segment
     * @param param the request object
     */
    public createSegmentWithHttpInfo(param: SegmentsApiCreateSegmentRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SegmentsCreateResponseBody>> {
        return this.api.createSegmentWithHttpInfo(param.segmentsCreateRequestBody,  options).toPromise();
    }

    /**
     * Create a customer segment.  🚧 Limit on static segments  There is a cap on the number of customers that you can assign to a static segment: **20,000**. If you would like to create a bigger segment, then you can use the unlimited auto-update or passive segment instead and use some customer metadata to build this segment.  🚧 Limit on Active and Passive segments  You can create a maximum of 100 passive and active segments.
     * Create Segment
     * @param param the request object
     */
    public createSegment(param: SegmentsApiCreateSegmentRequest = {}, options?: ConfigurationOptions): Promise<SegmentsCreateResponseBody> {
        return this.api.createSegment(param.segmentsCreateRequestBody,  options).toPromise();
    }

    /**
     * This method deletes a customer segment.
     * Delete Segment
     * @param param the request object
     */
    public deleteSegmentWithHttpInfo(param: SegmentsApiDeleteSegmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteSegmentWithHttpInfo(param.segmentId,  options).toPromise();
    }

    /**
     * This method deletes a customer segment.
     * Delete Segment
     * @param param the request object
     */
    public deleteSegment(param: SegmentsApiDeleteSegmentRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteSegment(param.segmentId,  options).toPromise();
    }

    /**
     * Retrieves the segment with a given segment ID.
     * Get Segment
     * @param param the request object
     */
    public getSegmentWithHttpInfo(param: SegmentsApiGetSegmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<SegmentsGetResponseBody>> {
        return this.api.getSegmentWithHttpInfo(param.segmentId,  options).toPromise();
    }

    /**
     * Retrieves the segment with a given segment ID.
     * Get Segment
     * @param param the request object
     */
    public getSegment(param: SegmentsApiGetSegmentRequest, options?: ConfigurationOptions): Promise<SegmentsGetResponseBody> {
        return this.api.getSegment(param.segmentId,  options).toPromise();
    }

}

import { ObservableTemplatesApi } from "./ObservableAPI";
import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor} from "../apis/TemplatesApi";

export interface TemplatesApiAddTierFromTemplateRequest {
    /**
     * Pass the campaign template ID that was assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApiaddTierFromTemplate
     */
    campaignTemplateId: string
    /**
     * Only name and campaign_id are required. The rest of the fields will overwrite the template configuration.
     * @type TemplatesCampaignsTierSetupCreateRequestBody
     * @memberof TemplatesApiaddTierFromTemplate
     */
    templatesCampaignsTierSetupCreateRequestBody?: TemplatesCampaignsTierSetupCreateRequestBody
}

export interface TemplatesApiCreateCampaignFromTemplateRequest {
    /**
     * Pass the campaign template ID that was assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApicreateCampaignFromTemplate
     */
    campaignTemplateId: string
    /**
     * Only name is required. The rest of the fields will overwrite the template configuration.
     * @type TemplatesCampaignsCampaignSetupCreateRequestBody
     * @memberof TemplatesApicreateCampaignFromTemplate
     */
    templatesCampaignsCampaignSetupCreateRequestBody?: TemplatesCampaignsCampaignSetupCreateRequestBody
}

export interface TemplatesApiCreateCampaignTemplateRequest {
    /**
     * Provide details for a campaign template
     * @type TemplatesCampaignsCreateRequestBody
     * @memberof TemplatesApicreateCampaignTemplate
     */
    templatesCampaignsCreateRequestBody?: TemplatesCampaignsCreateRequestBody
}

export interface TemplatesApiDeleteCampaignTemplateRequest {
    /**
     * Pass the campaign template ID that was assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApideleteCampaignTemplate
     */
    campaignTemplateId: string
}

export interface TemplatesApiGetCampaignTemplateRequest {
    /**
     * Pass the campaign template ID that was assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApigetCampaignTemplate
     */
    campaignTemplateId: string
}

export interface TemplatesApiListCampaignTemplatesRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof TemplatesApilistCampaignTemplates
     */
    limit?: number
    /**
     * A cursor for pagination. It retrieves the campaign templates created after a template with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApilistCampaignTemplates
     */
    startingAfterId?: string
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterTemplatesList
     * @memberof TemplatesApilistCampaignTemplates
     */
    order?: ParameterTemplatesList
    /**
     * If set to true, the response returns the number of all campaign templates, regardless of the applied filters or limits. Set to false by default.
     * Defaults to: undefined
     * @type boolean
     * @memberof TemplatesApilistCampaignTemplates
     */
    includeTotal?: boolean
    /**
     * Filters for listing templates.
     * Defaults to: undefined
     * @type ParameterFiltersListTemplates
     * @memberof TemplatesApilistCampaignTemplates
     */
    filters?: ParameterFiltersListTemplates
}

export interface TemplatesApiUpdateCampaignTemplateRequest {
    /**
     * Pass the campaign template ID that was assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApiupdateCampaignTemplate
     */
    campaignTemplateId: string
    /**
     * Provide the new name or description for the campaign template
     * @type TemplatesCampaignsUpdateRequestBody
     * @memberof TemplatesApiupdateCampaignTemplate
     */
    templatesCampaignsUpdateRequestBody?: TemplatesCampaignsUpdateRequestBody
}

export class ObjectTemplatesApi {
    private api: ObservableTemplatesApi

    public constructor(configuration: Configuration, requestFactory?: TemplatesApiRequestFactory, responseProcessor?: TemplatesApiResponseProcessor) {
        this.api = new ObservableTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a promotion tier out of a discount campaign template and adds it to an existing promotion campaign. To add a promotion tier to a campaign, you need to provide the name in the request and the campaign ID. Other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an action or an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the promotion tier. When the promotion tier has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rule-assignment).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Add Promotion Tier From Template
     * @param param the request object
     */
    public addTierFromTemplateWithHttpInfo(param: TemplatesApiAddTierFromTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatesCampaignsTierSetupCreateResponseBody>> {
        return this.api.addTierFromTemplateWithHttpInfo(param.campaignTemplateId, param.templatesCampaignsTierSetupCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a promotion tier out of a discount campaign template and adds it to an existing promotion campaign. To add a promotion tier to a campaign, you need to provide the name in the request and the campaign ID. Other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an action or an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the promotion tier. When the promotion tier has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rule-assignment).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Add Promotion Tier From Template
     * @param param the request object
     */
    public addTierFromTemplate(param: TemplatesApiAddTierFromTemplateRequest, options?: ConfigurationOptions): Promise<TemplatesCampaignsTierSetupCreateResponseBody> {
        return this.api.addTierFromTemplate(param.campaignTemplateId, param.templatesCampaignsTierSetupCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a campaign out of a campaign template. To create a campaign, you need to provide the name in the request, while other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the campaign. When the campaign has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rules-assignments).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign From Template
     * @param param the request object
     */
    public createCampaignFromTemplateWithHttpInfo(param: TemplatesApiCreateCampaignFromTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatesCampaignsCampaignSetupCreateResponseBody>> {
        return this.api.createCampaignFromTemplateWithHttpInfo(param.campaignTemplateId, param.templatesCampaignsCampaignSetupCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a campaign out of a campaign template. To create a campaign, you need to provide the name in the request, while other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the campaign. When the campaign has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rules-assignments).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign From Template
     * @param param the request object
     */
    public createCampaignFromTemplate(param: TemplatesApiCreateCampaignFromTemplateRequest, options?: ConfigurationOptions): Promise<TemplatesCampaignsCampaignSetupCreateResponseBody> {
        return this.api.createCampaignFromTemplate(param.campaignTemplateId, param.templatesCampaignsCampaignSetupCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a template for a discount or gift campaign, or a promotion tier. A template stores campaign configuration **without** the following details: - Campaign name - Category - Code count The following elements are not supported by campaign templates: - Redeeming API keys - Redeeming users - Customer loyalty tier - Static segments  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template), - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign Template
     * @param param the request object
     */
    public createCampaignTemplateWithHttpInfo(param: TemplatesApiCreateCampaignTemplateRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TemplatesCampaignsCreateTemplateResponseBody>> {
        return this.api.createCampaignTemplateWithHttpInfo(param.templatesCampaignsCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a template for a discount or gift campaign, or a promotion tier. A template stores campaign configuration **without** the following details: - Campaign name - Category - Code count The following elements are not supported by campaign templates: - Redeeming API keys - Redeeming users - Customer loyalty tier - Static segments  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template), - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Create Campaign Template
     * @param param the request object
     */
    public createCampaignTemplate(param: TemplatesApiCreateCampaignTemplateRequest = {}, options?: ConfigurationOptions): Promise<TemplatesCampaignsCreateTemplateResponseBody> {
        return this.api.createCampaignTemplate(param.templatesCampaignsCreateRequestBody,  options).toPromise();
    }

    /**
     * Deletes the campaign template permanently.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Delete Campaign Template
     * @param param the request object
     */
    public deleteCampaignTemplateWithHttpInfo(param: TemplatesApiDeleteCampaignTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCampaignTemplateWithHttpInfo(param.campaignTemplateId,  options).toPromise();
    }

    /**
     * Deletes the campaign template permanently.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Delete Campaign Template
     * @param param the request object
     */
    public deleteCampaignTemplate(param: TemplatesApiDeleteCampaignTemplateRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCampaignTemplate(param.campaignTemplateId,  options).toPromise();
    }

    /**
     * Retrieves a campaign template available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Get Campaign Template
     * @param param the request object
     */
    public getCampaignTemplateWithHttpInfo(param: TemplatesApiGetCampaignTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatesCampaignsGetResponseBody>> {
        return this.api.getCampaignTemplateWithHttpInfo(param.campaignTemplateId,  options).toPromise();
    }

    /**
     * Retrieves a campaign template available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Get Campaign Template
     * @param param the request object
     */
    public getCampaignTemplate(param: TemplatesApiGetCampaignTemplateRequest, options?: ConfigurationOptions): Promise<TemplatesCampaignsGetResponseBody> {
        return this.api.getCampaignTemplate(param.campaignTemplateId,  options).toPromise();
    }

    /**
     * Lists all campaign templates available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * List Campaign Templates
     * @param param the request object
     */
    public listCampaignTemplatesWithHttpInfo(param: TemplatesApiListCampaignTemplatesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TemplatesCampaignsListResponseBody>> {
        return this.api.listCampaignTemplatesWithHttpInfo(param.limit, param.startingAfterId, param.order, param.includeTotal, param.filters,  options).toPromise();
    }

    /**
     * Lists all campaign templates available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * List Campaign Templates
     * @param param the request object
     */
    public listCampaignTemplates(param: TemplatesApiListCampaignTemplatesRequest = {}, options?: ConfigurationOptions): Promise<TemplatesCampaignsListResponseBody> {
        return this.api.listCampaignTemplates(param.limit, param.startingAfterId, param.order, param.includeTotal, param.filters,  options).toPromise();
    }

    /**
     * Updates the name or description of the campaign template.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Update Campaign Template
     * @param param the request object
     */
    public updateCampaignTemplateWithHttpInfo(param: TemplatesApiUpdateCampaignTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatesCampaignsUpdateResponseBody>> {
        return this.api.updateCampaignTemplateWithHttpInfo(param.campaignTemplateId, param.templatesCampaignsUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates the name or description of the campaign template.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.
     * Update Campaign Template
     * @param param the request object
     */
    public updateCampaignTemplate(param: TemplatesApiUpdateCampaignTemplateRequest, options?: ConfigurationOptions): Promise<TemplatesCampaignsUpdateResponseBody> {
        return this.api.updateCampaignTemplate(param.campaignTemplateId, param.templatesCampaignsUpdateRequestBody,  options).toPromise();
    }

}

import { ObservableValidationRulesApi } from "./ObservableAPI";
import { ValidationRulesApiRequestFactory, ValidationRulesApiResponseProcessor} from "../apis/ValidationRulesApi";

export interface ValidationRulesApiCreateValidationRuleAssignmentRequest {
    /**
     * Unique validation rule ID.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationRulesApicreateValidationRuleAssignment
     */
    validationRuleId: string
    /**
     * If this flag is set to true, the previous assignment with the same data will be deleted and a new one will be added.
     * Defaults to: undefined
     * @type boolean
     * @memberof ValidationRulesApicreateValidationRuleAssignment
     */
    force?: boolean
    /**
     * Specify the resource that you would like to assign the validation rule to.
     * @type ValidationRulesAssignmentsCreateRequestBody
     * @memberof ValidationRulesApicreateValidationRuleAssignment
     */
    validationRulesAssignmentsCreateRequestBody?: ValidationRulesAssignmentsCreateRequestBody
}

export interface ValidationRulesApiCreateValidationRulesRequest {
    /**
     * Specify the validation rules parameters.
     * @type ValidationRulesCreateRequestBody
     * @memberof ValidationRulesApicreateValidationRules
     */
    validationRulesCreateRequestBody?: ValidationRulesCreateRequestBody
}

export interface ValidationRulesApiDeleteValidationRuleAssignmentRequest {
    /**
     * A unique validation rule ID.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationRulesApideleteValidationRuleAssignment
     */
    validationRuleId: string
    /**
     * A unique validation rule assignment ID.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationRulesApideleteValidationRuleAssignment
     */
    assignmentId: string
}

export interface ValidationRulesApiDeleteValidationRulesRequest {
    /**
     * A unique validation rule ID.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationRulesApideleteValidationRules
     */
    validationRuleId: string
}

export interface ValidationRulesApiGetValidationRuleRequest {
    /**
     * A unique validation rule ID.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationRulesApigetValidationRule
     */
    validationRuleId: string
}

export interface ValidationRulesApiListValidationRuleAssignmentsRequest {
    /**
     * Unique validation rule ID.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationRulesApilistValidationRuleAssignments
     */
    validationRuleId: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ValidationRulesApilistValidationRuleAssignments
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ValidationRulesApilistValidationRuleAssignments
     */
    page?: number
    /**
     * This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListValidationRuleAssignments
     * @memberof ValidationRulesApilistValidationRuleAssignments
     */
    order?: ParameterOrderListValidationRuleAssignments
}

export interface ValidationRulesApiListValidationRulesRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ValidationRulesApilistValidationRules
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ValidationRulesApilistValidationRules
     */
    page?: number
    /**
     * This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListValidationRules
     * @memberof ValidationRulesApilistValidationRules
     */
    order?: ParameterOrderListValidationRules
    /**
     * Timestamp representing the date and time which results must start on. Represented in ISO 8601 format.
     * Defaults to: undefined
     * @type Date
     * @memberof ValidationRulesApilistValidationRules
     */
    startDate?: Date
    /**
     * Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
     * Defaults to: undefined
     * @type Date
     * @memberof ValidationRulesApilistValidationRules
     */
    endDate?: Date
}

export interface ValidationRulesApiListValidationRulesAssignmentsRequest {
    /**
     * The resource ID to which the validation rule was assigned; this could be, for example, a resource ID of a voucher, campaign, earning rule, reward assignment, promotion tier, or distribution.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationRulesApilistValidationRulesAssignments
     */
    relatedObjectId?: string
    /**
     * Validation rule ID.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationRulesApilistValidationRulesAssignments
     */
    rule?: string
    /**
     * Which page of results to return. The lowest value is 1.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ValidationRulesApilistValidationRulesAssignments
     */
    page?: number
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof ValidationRulesApilistValidationRulesAssignments
     */
    limit?: number
    /**
     * Sorts the results using one of the filtering options: -created_at, created_at, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationRulesApilistValidationRulesAssignments
     */
    order?: string
}

export interface ValidationRulesApiUpdateValidationRuleRequest {
    /**
     * A unique validation rule ID.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationRulesApiupdateValidationRule
     */
    validationRuleId: string
    /**
     * Specify the parameters to be updated.
     * @type ValidationRulesUpdateRequestBody
     * @memberof ValidationRulesApiupdateValidationRule
     */
    validationRulesUpdateRequestBody?: ValidationRulesUpdateRequestBody
}

export class ObjectValidationRulesApi {
    private api: ObservableValidationRulesApi

    public constructor(configuration: Configuration, requestFactory?: ValidationRulesApiRequestFactory, responseProcessor?: ValidationRulesApiResponseProcessor) {
        this.api = new ObservableValidationRulesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assign validation rule to either one of the following objects: voucher, campaign, promotion tier, earning rule, reward, distribution.
     * Create Validation Rules Assignments
     * @param param the request object
     */
    public createValidationRuleAssignmentWithHttpInfo(param: ValidationRulesApiCreateValidationRuleAssignmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ValidationRulesAssignmentsCreateResponseBody>> {
        return this.api.createValidationRuleAssignmentWithHttpInfo(param.validationRuleId, param.force, param.validationRulesAssignmentsCreateRequestBody,  options).toPromise();
    }

    /**
     * Assign validation rule to either one of the following objects: voucher, campaign, promotion tier, earning rule, reward, distribution.
     * Create Validation Rules Assignments
     * @param param the request object
     */
    public createValidationRuleAssignment(param: ValidationRulesApiCreateValidationRuleAssignmentRequest, options?: ConfigurationOptions): Promise<ValidationRulesAssignmentsCreateResponseBody> {
        return this.api.createValidationRuleAssignment(param.validationRuleId, param.force, param.validationRulesAssignmentsCreateRequestBody,  options).toPromise();
    }

    /**
     * Create a validation rule.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.
     * Create Validation Rules
     * @param param the request object
     */
    public createValidationRulesWithHttpInfo(param: ValidationRulesApiCreateValidationRulesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ValidationRulesCreateResponseBody>> {
        return this.api.createValidationRulesWithHttpInfo(param.validationRulesCreateRequestBody,  options).toPromise();
    }

    /**
     * Create a validation rule.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.
     * Create Validation Rules
     * @param param the request object
     */
    public createValidationRules(param: ValidationRulesApiCreateValidationRulesRequest = {}, options?: ConfigurationOptions): Promise<ValidationRulesCreateResponseBody> {
        return this.api.createValidationRules(param.validationRulesCreateRequestBody,  options).toPromise();
    }

    /**
     * This method deletes a validation rule assignment.
     * Delete Validation Rule Assignment
     * @param param the request object
     */
    public deleteValidationRuleAssignmentWithHttpInfo(param: ValidationRulesApiDeleteValidationRuleAssignmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteValidationRuleAssignmentWithHttpInfo(param.validationRuleId, param.assignmentId,  options).toPromise();
    }

    /**
     * This method deletes a validation rule assignment.
     * Delete Validation Rule Assignment
     * @param param the request object
     */
    public deleteValidationRuleAssignment(param: ValidationRulesApiDeleteValidationRuleAssignmentRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteValidationRuleAssignment(param.validationRuleId, param.assignmentId,  options).toPromise();
    }

    /**
     * This method deletes a validation rule.
     * Delete Validation Rule
     * @param param the request object
     */
    public deleteValidationRulesWithHttpInfo(param: ValidationRulesApiDeleteValidationRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteValidationRulesWithHttpInfo(param.validationRuleId,  options).toPromise();
    }

    /**
     * This method deletes a validation rule.
     * Delete Validation Rule
     * @param param the request object
     */
    public deleteValidationRules(param: ValidationRulesApiDeleteValidationRulesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteValidationRules(param.validationRuleId,  options).toPromise();
    }

    /**
     * Retrieve the details of a validation rule.
     * Get Validation Rule
     * @param param the request object
     */
    public getValidationRuleWithHttpInfo(param: ValidationRulesApiGetValidationRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ValidationRulesGetResponseBody>> {
        return this.api.getValidationRuleWithHttpInfo(param.validationRuleId,  options).toPromise();
    }

    /**
     * Retrieve the details of a validation rule.
     * Get Validation Rule
     * @param param the request object
     */
    public getValidationRule(param: ValidationRulesApiGetValidationRuleRequest, options?: ConfigurationOptions): Promise<ValidationRulesGetResponseBody> {
        return this.api.getValidationRule(param.validationRuleId,  options).toPromise();
    }

    /**
     * Retrieve validation rule assignments for a specific validation rule.
     * List Validation Rule Assignments
     * @param param the request object
     */
    public listValidationRuleAssignmentsWithHttpInfo(param: ValidationRulesApiListValidationRuleAssignmentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ValidationRulesAssignmentsListResponseBody>> {
        return this.api.listValidationRuleAssignmentsWithHttpInfo(param.validationRuleId, param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * Retrieve validation rule assignments for a specific validation rule.
     * List Validation Rule Assignments
     * @param param the request object
     */
    public listValidationRuleAssignments(param: ValidationRulesApiListValidationRuleAssignmentsRequest, options?: ConfigurationOptions): Promise<ValidationRulesAssignmentsListResponseBody> {
        return this.api.listValidationRuleAssignments(param.validationRuleId, param.limit, param.page, param.order,  options).toPromise();
    }

    /**
     * Retrieve validation rules.
     * List Validation Rules
     * @param param the request object
     */
    public listValidationRulesWithHttpInfo(param: ValidationRulesApiListValidationRulesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ValidationRulesListResponseBody>> {
        return this.api.listValidationRulesWithHttpInfo(param.limit, param.page, param.order, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * Retrieve validation rules.
     * List Validation Rules
     * @param param the request object
     */
    public listValidationRules(param: ValidationRulesApiListValidationRulesRequest = {}, options?: ConfigurationOptions): Promise<ValidationRulesListResponseBody> {
        return this.api.listValidationRules(param.limit, param.page, param.order, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * List all validation rules assignments or filter the results using the related object ID or the validation rule ID query parameters.
     * List Validation Rules\' Assignment(s)
     * @param param the request object
     */
    public listValidationRulesAssignmentsWithHttpInfo(param: ValidationRulesApiListValidationRulesAssignmentsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ValidationRulesAssignmentsListResponseBody>> {
        return this.api.listValidationRulesAssignmentsWithHttpInfo(param.relatedObjectId, param.rule, param.page, param.limit, param.order,  options).toPromise();
    }

    /**
     * List all validation rules assignments or filter the results using the related object ID or the validation rule ID query parameters.
     * List Validation Rules\' Assignment(s)
     * @param param the request object
     */
    public listValidationRulesAssignments(param: ValidationRulesApiListValidationRulesAssignmentsRequest = {}, options?: ConfigurationOptions): Promise<ValidationRulesAssignmentsListResponseBody> {
        return this.api.listValidationRulesAssignments(param.relatedObjectId, param.rule, param.page, param.limit, param.order,  options).toPromise();
    }

    /**
     * Update validation rule parameters.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.
     * Update Validation Rule
     * @param param the request object
     */
    public updateValidationRuleWithHttpInfo(param: ValidationRulesApiUpdateValidationRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ValidationRulesUpdateResponseBody>> {
        return this.api.updateValidationRuleWithHttpInfo(param.validationRuleId, param.validationRulesUpdateRequestBody,  options).toPromise();
    }

    /**
     * Update validation rule parameters.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.
     * Update Validation Rule
     * @param param the request object
     */
    public updateValidationRule(param: ValidationRulesApiUpdateValidationRuleRequest, options?: ConfigurationOptions): Promise<ValidationRulesUpdateResponseBody> {
        return this.api.updateValidationRule(param.validationRuleId, param.validationRulesUpdateRequestBody,  options).toPromise();
    }

}

import { ObservableValidationsApi } from "./ObservableAPI";
import { ValidationsApiRequestFactory, ValidationsApiResponseProcessor} from "../apis/ValidationsApi";

export interface ValidationsApiValidateStackedDiscountsRequest {
    /**
     * 
     * @type ValidationsValidateRequestBody
     * @memberof ValidationsApivalidateStackedDiscounts
     */
    validationsValidateRequestBody?: ValidationsValidateRequestBody
}

export class ObjectValidationsApi {
    private api: ObservableValidationsApi

    public constructor(configuration: Configuration, requestFactory?: ValidationsApiRequestFactory, responseProcessor?: ValidationsApiResponseProcessor) {
        this.api = new ObservableValidationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Verify redeemables provided in the request. This method is designed for server side integration which means that it is accessible only through private keys. API keys with a Merchant role cant use this endpoint.
     * Validate Stackable Discounts
     * @param param the request object
     */
    public validateStackedDiscountsWithHttpInfo(param: ValidationsApiValidateStackedDiscountsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ValidationsValidateResponseBody>> {
        return this.api.validateStackedDiscountsWithHttpInfo(param.validationsValidateRequestBody,  options).toPromise();
    }

    /**
     * Verify redeemables provided in the request. This method is designed for server side integration which means that it is accessible only through private keys. API keys with a Merchant role cant use this endpoint.
     * Validate Stackable Discounts
     * @param param the request object
     */
    public validateStackedDiscounts(param: ValidationsApiValidateStackedDiscountsRequest = {}, options?: ConfigurationOptions): Promise<ValidationsValidateResponseBody> {
        return this.api.validateStackedDiscounts(param.validationsValidateRequestBody,  options).toPromise();
    }

}

import { ObservableVouchersApi } from "./ObservableAPI";
import { VouchersApiRequestFactory, VouchersApiResponseProcessor} from "../apis/VouchersApi";

export interface VouchersApiCreateVoucherRequest {
    /**
     * A unique **code** that identifies the voucher.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApicreateVoucher
     */
    code: string
    /**
     * Specify the details of the voucher that you would like to create.
     * @type VouchersCreateWithSpecificCodeRequestBody
     * @memberof VouchersApicreateVoucher
     */
    vouchersCreateWithSpecificCodeRequestBody?: VouchersCreateWithSpecificCodeRequestBody
}

export interface VouchersApiDeleteVoucherRequest {
    /**
     * A unique **code** that identifies the voucher.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApideleteVoucher
     */
    code: string
    /**
     * If this flag is set to true, the voucher will be removed permanently. If it is set to false or not set at all, the voucher will be moved to the bin. Going forward, the user will be able to create another voucher with exactly the same code.
     * Defaults to: undefined
     * @type boolean
     * @memberof VouchersApideleteVoucher
     */
    force?: boolean
}

export interface VouchersApiDisableVoucherRequest {
    /**
     * A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApidisableVoucher
     */
    code: string
}

export interface VouchersApiEnableVoucherRequest {
    /**
     * A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApienableVoucher
     */
    code: string
}

export interface VouchersApiExportVoucherTransactionsRequest {
    /**
     * A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApiexportVoucherTransactions
     */
    code: string
    /**
     * Specify the parameters for the camapign transaction export.
     * @type VouchersTransactionsExportCreateRequestBody
     * @memberof VouchersApiexportVoucherTransactions
     */
    vouchersTransactionsExportCreateRequestBody?: VouchersTransactionsExportCreateRequestBody
}

export interface VouchersApiGenerateRandomCodeRequest {
    /**
     * Specify the details of the voucher that you would like to create.
     * @type VouchersCreateRequestBody
     * @memberof VouchersApigenerateRandomCode
     */
    vouchersCreateRequestBody?: VouchersCreateRequestBody
}

export interface VouchersApiGetVoucherRequest {
    /**
     * A unique **code** that identifies the voucher.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApigetVoucher
     */
    code: string
}

export interface VouchersApiImportVouchersRequest {
    /**
     * The request body is an array of objects. Each object contains details about a specific voucher. 
     * @type Array&lt;VouchersImportCreateItemRequestBody&gt;
     * @memberof VouchersApiimportVouchers
     */
    vouchersImportCreateItemRequestBody: Array<VouchersImportCreateItemRequestBody>
}

export interface VouchersApiImportVouchersUsingCsvRequest {
    /**
     * File path.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof VouchersApiimportVouchersUsingCsv
     */
    file?: HttpFile
    /**
     * Triggers a webhook sendout for new and updated vouchers if the voucher created and voucher updated webhooks are configured in Project settings.
     * Defaults to: undefined
     * @type boolean
     * @memberof VouchersApiimportVouchersUsingCsv
     */
    webhooksEnable?: boolean
}

export interface VouchersApiListVoucherTransactionsRequest {
    /**
     * A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApilistVoucherTransactions
     */
    code: string
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof VouchersApilistVoucherTransactions
     */
    limit?: number
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderListTransactions
     * @memberof VouchersApilistVoucherTransactions
     */
    order?: ParameterOrderListTransactions
    /**
     * A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApilistVoucherTransactions
     */
    startingAfterId?: string
}

export interface VouchersApiListVouchersRequest {
    /**
     * Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof VouchersApilistVouchers
     */
    limit?: number
    /**
     * Which page of results to return. The lowest value is 1, the highest value is 99.
     * Minimum: 1
     * Maximum: 99
     * Defaults to: undefined
     * @type number
     * @memberof VouchersApilistVouchers
     */
    page?: number
    /**
     * Limit search results to vouchers within the specified category.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApilistVouchers
     */
    category?: string
    /**
     * Limit search results to vouchers within the specified campaign
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApilistVouchers
     */
    campaignId?: string
    /**
     * A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApilistVouchers
     */
    customer?: string
    /**
     * A unique campaign name, identifies the parent campaign.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApilistVouchers
     */
    campaign?: string
    /**
     * A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
     * Defaults to: undefined
     * @type ParameterCreatedBeforeAfter
     * @memberof VouchersApilistVouchers
     */
    createdAt?: ParameterCreatedBeforeAfter
    /**
     * A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z
     * Defaults to: undefined
     * @type ParameterUpdatedBeforeAfter
     * @memberof VouchersApilistVouchers
     */
    updatedAt?: ParameterUpdatedBeforeAfter
    /**
     * Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
     * Defaults to: undefined
     * @type ParameterOrderVouchers
     * @memberof VouchersApilistVouchers
     */
    order?: ParameterOrderVouchers
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApilistVouchers
     */
    code?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof VouchersApilistVouchers
     */
    ids?: Array<string>
}

export interface VouchersApiReleaseValidationSessionRequest {
    /**
     * A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApireleaseValidationSession
     */
    code: string
    /**
     * A unique session identifier.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApireleaseValidationSession
     */
    sessionKey: string
}

export interface VouchersApiUpdateVoucherRequest {
    /**
     * A unique **code** that identifies the voucher.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApiupdateVoucher
     */
    code: string
    /**
     * Specify the parameters to be updated.
     * @type VouchersUpdateRequestBody
     * @memberof VouchersApiupdateVoucher
     */
    vouchersUpdateRequestBody: VouchersUpdateRequestBody
}

export interface VouchersApiUpdateVoucherBalanceRequest {
    /**
     * A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
     * Defaults to: undefined
     * @type string
     * @memberof VouchersApiupdateVoucherBalance
     */
    code: string
    /**
     * Provide the amount to be added to/subtracted from the voucher.
     * @type VouchersBalanceUpdateRequestBody
     * @memberof VouchersApiupdateVoucherBalance
     */
    vouchersBalanceUpdateRequestBody: VouchersBalanceUpdateRequestBody
}

export interface VouchersApiUpdateVouchersInBulkRequest {
    /**
     * List the codes to be updated with the metadata key/value pairs for that code.
     * @type Array&lt;VouchersUpdateInBulkItemRequestBody&gt;
     * @memberof VouchersApiupdateVouchersInBulk
     */
    vouchersUpdateInBulkItemRequestBody: Array<VouchersUpdateInBulkItemRequestBody>
}

export interface VouchersApiUpdateVouchersMetadataInBulkRequest {
    /**
     * List the codes of the vouchers you would like to update with the metadata key/value pairs.
     * @type VouchersMetadataUpdateInBulkRequestBody
     * @memberof VouchersApiupdateVouchersMetadataInBulk
     */
    vouchersMetadataUpdateInBulkRequestBody: VouchersMetadataUpdateInBulkRequestBody
}

export class ObjectVouchersApi {
    private api: ObservableVouchersApi

    public constructor(configuration: Configuration, requestFactory?: VouchersApiRequestFactory, responseProcessor?: VouchersApiResponseProcessor) {
        this.api = new ObservableVouchersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD. The code path parameter can use all letters of the English alphabet, Arabic numerals and special characters. When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In the case of the loyalty card, a campaign name or ID is required. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Create Voucher
     * @param param the request object
     */
    public createVoucherWithHttpInfo(param: VouchersApiCreateVoucherRequest, options?: ConfigurationOptions): Promise<HttpInfo<VouchersCreateResponseBody>> {
        return this.api.createVoucherWithHttpInfo(param.code, param.vouchersCreateWithSpecificCodeRequestBody,  options).toPromise();
    }

    /**
     * Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD. The code path parameter can use all letters of the English alphabet, Arabic numerals and special characters. When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In the case of the loyalty card, a campaign name or ID is required. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Create Voucher
     * @param param the request object
     */
    public createVoucher(param: VouchersApiCreateVoucherRequest, options?: ConfigurationOptions): Promise<VouchersCreateResponseBody> {
        return this.api.createVoucher(param.code, param.vouchersCreateWithSpecificCodeRequestBody,  options).toPromise();
    }

    /**
     * Deletes a voucher. This operation cannot be undone. Additionally, this operation removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the voucher will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Voucher
     * @param param the request object
     */
    public deleteVoucherWithHttpInfo(param: VouchersApiDeleteVoucherRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteVoucherWithHttpInfo(param.code, param.force,  options).toPromise();
    }

    /**
     * Deletes a voucher. This operation cannot be undone. Additionally, this operation removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the voucher will be moved to [the bin](/api-reference/bin/list-bin-entries).
     * Delete Voucher
     * @param param the request object
     */
    public deleteVoucher(param: VouchersApiDeleteVoucherRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteVoucher(param.code, param.force,  options).toPromise();
    }

    /**
     * There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ This method sets the voucher state to **inactive**. The voucher cannot be redeemed.
     * Disable Voucher
     * @param param the request object
     */
    public disableVoucherWithHttpInfo(param: VouchersApiDisableVoucherRequest, options?: ConfigurationOptions): Promise<HttpInfo<VouchersDisableResponseBody>> {
        return this.api.disableVoucherWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ This method sets the voucher state to **inactive**. The voucher cannot be redeemed.
     * Disable Voucher
     * @param param the request object
     */
    public disableVoucher(param: VouchersApiDisableVoucherRequest, options?: ConfigurationOptions): Promise<VouchersDisableResponseBody> {
        return this.api.disableVoucher(param.code,  options).toPromise();
    }

    /**
     * There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ The method sets the voucher state to **active**. The voucher can be redeemed - only if the redemption occurs after the start date and the voucher is not expired.
     * Enable Voucher
     * @param param the request object
     */
    public enableVoucherWithHttpInfo(param: VouchersApiEnableVoucherRequest, options?: ConfigurationOptions): Promise<HttpInfo<VouchersEnableResponseBody>> {
        return this.api.enableVoucherWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ The method sets the voucher state to **active**. The voucher can be redeemed - only if the redemption occurs after the start date and the voucher is not expired.
     * Enable Voucher
     * @param param the request object
     */
    public enableVoucher(param: VouchersApiEnableVoucherRequest, options?: ConfigurationOptions): Promise<VouchersEnableResponseBody> {
        return this.api.enableVoucher(param.code,  options).toPromise();
    }

    /**
     * Export transactions that are associated with credit movements on a gift card or loyalty card.   
     * Export Voucher Transactions
     * @param param the request object
     */
    public exportVoucherTransactionsWithHttpInfo(param: VouchersApiExportVoucherTransactionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<VouchersTransactionsExportCreateResponseBody>> {
        return this.api.exportVoucherTransactionsWithHttpInfo(param.code, param.vouchersTransactionsExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Export transactions that are associated with credit movements on a gift card or loyalty card.   
     * Export Voucher Transactions
     * @param param the request object
     */
    public exportVoucherTransactions(param: VouchersApiExportVoucherTransactionsRequest, options?: ConfigurationOptions): Promise<VouchersTransactionsExportCreateResponseBody> {
        return this.api.exportVoucherTransactions(param.code, param.vouchersTransactionsExportCreateRequestBody,  options).toPromise();
    }

    /**
     * Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD.  When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In case of the loyalty card, a campaign name is required. You can optionally use the code parameter to define a specific code or the code_config parameter to design rules for Voucherify API to create a random code. If neither of the two parameters are passed, then a random code is generated by the Voucherify API. This method will return an error when trying to create a voucher that already exists. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Generate Random Code
     * @param param the request object
     */
    public generateRandomCodeWithHttpInfo(param: VouchersApiGenerateRandomCodeRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<VouchersCreateResponseBody>> {
        return this.api.generateRandomCodeWithHttpInfo(param.vouchersCreateRequestBody,  options).toPromise();
    }

    /**
     * Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD.  When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In case of the loyalty card, a campaign name is required. You can optionally use the code parameter to define a specific code or the code_config parameter to design rules for Voucherify API to create a random code. If neither of the two parameters are passed, then a random code is generated by the Voucherify API. This method will return an error when trying to create a voucher that already exists. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.
     * Generate Random Code
     * @param param the request object
     */
    public generateRandomCode(param: VouchersApiGenerateRandomCodeRequest = {}, options?: ConfigurationOptions): Promise<VouchersCreateResponseBody> {
        return this.api.generateRandomCode(param.vouchersCreateRequestBody,  options).toPromise();
    }

    /**
     * Retrieves the voucher with the given code or unique Voucherify ID. You can either pass the voucher ID which was assigned by Voucherify, e.g., v_7HxHkf4VAkMuc8u4lZs78lyRwhRze5UE, or the code of the voucher as the path parameter value, e.g., 7fjWdr.
     * Get Voucher
     * @param param the request object
     */
    public getVoucherWithHttpInfo(param: VouchersApiGetVoucherRequest, options?: ConfigurationOptions): Promise<HttpInfo<VouchersGetResponseBody>> {
        return this.api.getVoucherWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Retrieves the voucher with the given code or unique Voucherify ID. You can either pass the voucher ID which was assigned by Voucherify, e.g., v_7HxHkf4VAkMuc8u4lZs78lyRwhRze5UE, or the code of the voucher as the path parameter value, e.g., 7fjWdr.
     * Get Voucher
     * @param param the request object
     */
    public getVoucher(param: VouchersApiGetVoucherRequest, options?: ConfigurationOptions): Promise<VouchersGetResponseBody> {
        return this.api.getVoucher(param.code,  options).toPromise();
    }

    /**
     * Import generic (standalone) vouchers and gift cards into the repository.  📘 Important notes  - **Start and expiration dates** need to be provided in compliance with the ISO 8601 norms. For example, 2020-03-11T09:00:00.000Z.  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify Project. Any parameters not provided in the payload will be left blank or null. For both **standalone discount vouchers and gift cards**, you can import the following fields:   - code - category - active - type - start_date - expiration_date - redemption.quantity - additional_info - metadata For **gift cards**, you can also import the following field: - gift.amount For **discount vouchers**, you can import the discount object. The object will slightly vary depending on the type of discount. Each discount type **requires** the type to be defined in the import.   Fields other than the ones listed above wont be imported. Even if provided, they will be silently skipped. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.
     * Import Vouchers
     * @param param the request object
     */
    public importVouchersWithHttpInfo(param: VouchersApiImportVouchersRequest, options?: ConfigurationOptions): Promise<HttpInfo<VouchersImportCreateResponseBody>> {
        return this.api.importVouchersWithHttpInfo(param.vouchersImportCreateItemRequestBody,  options).toPromise();
    }

    /**
     * Import generic (standalone) vouchers and gift cards into the repository.  📘 Important notes  - **Start and expiration dates** need to be provided in compliance with the ISO 8601 norms. For example, 2020-03-11T09:00:00.000Z.  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify Project. Any parameters not provided in the payload will be left blank or null. For both **standalone discount vouchers and gift cards**, you can import the following fields:   - code - category - active - type - start_date - expiration_date - redemption.quantity - additional_info - metadata For **gift cards**, you can also import the following field: - gift.amount For **discount vouchers**, you can import the discount object. The object will slightly vary depending on the type of discount. Each discount type **requires** the type to be defined in the import.   Fields other than the ones listed above wont be imported. Even if provided, they will be silently skipped. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.
     * Import Vouchers
     * @param param the request object
     */
    public importVouchers(param: VouchersApiImportVouchersRequest, options?: ConfigurationOptions): Promise<VouchersImportCreateResponseBody> {
        return this.api.importVouchers(param.vouchersImportCreateItemRequestBody,  options).toPromise();
    }

    /**
     * Import generic (standalone) vouchers into the repository using a CSV file. The CSV file has to include headers in the first line. All properties listed in the file headers that cannot be mapped to standard voucher fields will be added to the metadata object.   You can find an example CSV file [here](https://support.voucherify.io/article/45-import-codes-and-share-them-digitally#coupons). ___  📘 Standard voucher fields mapping  - Go to the [import vouchers](/api-reference/vouchers/import-vouchers) endpoint to see all standard CSV fields description (body params section).  - Supported CSV file headers: Code,Voucher Type,Value,Discount Type,Category,Start Date,Expiration Date,Redemption Limit,Redeemed Quantity, Redeemed Amount,Active,Additional Info,Custom Metadata Property Name - **Start and expiration dates** need to be provided in compliance with the ISO 8601 standard. For example, 2020-03-11T09:00:00.000Z.       - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify project.  - You can, however, upload the same codes to update them.  📘 Categories  In the structure representing your data, you can define a category that the voucher belongs to. You can later use the category of a voucher to group and search by specific criteria in the Dashboard and using the [List Vouchers](/api-reference/vouchers/list-vouchers) endpoint. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). You can pass the webhooks_enable true parameter to trigger a webhook sendout for created or updated vouchers. Configure the [respective webhooks](/api-reference/introduction-to-webhooks) in Project settings. For updated webhooks, a webhook is sent even if the voucher hasnt been changed in the CSV file. 🚧 Generic (standalone) vouchers and campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.
     * Import Vouchers using CSV
     * @param param the request object
     */
    public importVouchersUsingCsvWithHttpInfo(param: VouchersApiImportVouchersUsingCsvRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<VouchersImportCsvCreateResponseBody>> {
        return this.api.importVouchersUsingCsvWithHttpInfo(param.file, param.webhooksEnable,  options).toPromise();
    }

    /**
     * Import generic (standalone) vouchers into the repository using a CSV file. The CSV file has to include headers in the first line. All properties listed in the file headers that cannot be mapped to standard voucher fields will be added to the metadata object.   You can find an example CSV file [here](https://support.voucherify.io/article/45-import-codes-and-share-them-digitally#coupons). ___  📘 Standard voucher fields mapping  - Go to the [import vouchers](/api-reference/vouchers/import-vouchers) endpoint to see all standard CSV fields description (body params section).  - Supported CSV file headers: Code,Voucher Type,Value,Discount Type,Category,Start Date,Expiration Date,Redemption Limit,Redeemed Quantity, Redeemed Amount,Active,Additional Info,Custom Metadata Property Name - **Start and expiration dates** need to be provided in compliance with the ISO 8601 standard. For example, 2020-03-11T09:00:00.000Z.       - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify project.  - You can, however, upload the same codes to update them.  📘 Categories  In the structure representing your data, you can define a category that the voucher belongs to. You can later use the category of a voucher to group and search by specific criteria in the Dashboard and using the [List Vouchers](/api-reference/vouchers/list-vouchers) endpoint. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). You can pass the webhooks_enable true parameter to trigger a webhook sendout for created or updated vouchers. Configure the [respective webhooks](/api-reference/introduction-to-webhooks) in Project settings. For updated webhooks, a webhook is sent even if the voucher hasnt been changed in the CSV file. 🚧 Generic (standalone) vouchers and campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.
     * Import Vouchers using CSV
     * @param param the request object
     */
    public importVouchersUsingCsv(param: VouchersApiImportVouchersUsingCsvRequest = {}, options?: ConfigurationOptions): Promise<VouchersImportCsvCreateResponseBody> {
        return this.api.importVouchersUsingCsv(param.file, param.webhooksEnable,  options).toPromise();
    }

    /**
     * List transactions that are associated with credit movements on a gift card or loyalty card.
     * List Voucher Transactions
     * @param param the request object
     */
    public listVoucherTransactionsWithHttpInfo(param: VouchersApiListVoucherTransactionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<VouchersTransactionsListResponseBody>> {
        return this.api.listVoucherTransactionsWithHttpInfo(param.code, param.limit, param.order, param.startingAfterId,  options).toPromise();
    }

    /**
     * List transactions that are associated with credit movements on a gift card or loyalty card.
     * List Voucher Transactions
     * @param param the request object
     */
    public listVoucherTransactions(param: VouchersApiListVoucherTransactionsRequest, options?: ConfigurationOptions): Promise<VouchersTransactionsListResponseBody> {
        return this.api.listVoucherTransactions(param.code, param.limit, param.order, param.startingAfterId,  options).toPromise();
    }

    /**
     * Returns a list of vouchers. By default, the vouchers are returned sorted by creation date, with the most recent vouchers appearing first. A maximum of 100 vouchers are returned in the response. When you get a list of vouchers, you can optionally specify query parameters to customize the number of vouchers returned per call using limit, which page of vouchers to return using page, sort the vouchers using the order query parameter and more. This method will return an error when trying to return a limit of more than 100 vouchers. 
     * List Vouchers
     * @param param the request object
     */
    public listVouchersWithHttpInfo(param: VouchersApiListVouchersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<VouchersListResponseBody>> {
        return this.api.listVouchersWithHttpInfo(param.limit, param.page, param.category, param.campaignId, param.customer, param.campaign, param.createdAt, param.updatedAt, param.order, param.code, param.ids,  options).toPromise();
    }

    /**
     * Returns a list of vouchers. By default, the vouchers are returned sorted by creation date, with the most recent vouchers appearing first. A maximum of 100 vouchers are returned in the response. When you get a list of vouchers, you can optionally specify query parameters to customize the number of vouchers returned per call using limit, which page of vouchers to return using page, sort the vouchers using the order query parameter and more. This method will return an error when trying to return a limit of more than 100 vouchers. 
     * List Vouchers
     * @param param the request object
     */
    public listVouchers(param: VouchersApiListVouchersRequest = {}, options?: ConfigurationOptions): Promise<VouchersListResponseBody> {
        return this.api.listVouchers(param.limit, param.page, param.category, param.campaignId, param.customer, param.campaign, param.createdAt, param.updatedAt, param.order, param.code, param.ids,  options).toPromise();
    }

    /**
     * Manually release a validation session that has been set up for the voucher. This method undoes the actions that are explained in the [Locking validation session](/guides/locking-validation-session) guide.   📘 Release session in the Dashboard  You can also use the [Validations Manager](https://support.voucherify.io/article/16-dashboard-sections#sessions) in the Dashboard to unlock sessions.
     * Release Validation Session
     * @param param the request object
     */
    public releaseValidationSessionWithHttpInfo(param: VouchersApiReleaseValidationSessionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.releaseValidationSessionWithHttpInfo(param.code, param.sessionKey,  options).toPromise();
    }

    /**
     * Manually release a validation session that has been set up for the voucher. This method undoes the actions that are explained in the [Locking validation session](/guides/locking-validation-session) guide.   📘 Release session in the Dashboard  You can also use the [Validations Manager](https://support.voucherify.io/article/16-dashboard-sections#sessions) in the Dashboard to unlock sessions.
     * Release Validation Session
     * @param param the request object
     */
    public releaseValidationSession(param: VouchersApiReleaseValidationSessionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.releaseValidationSession(param.code, param.sessionKey,  options).toPromise();
    }

    /**
     * Updates the specified voucher by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped. If you want to change the amount on a gift card or the number of points on a loyalty card, use the [Adjust voucher balance](/api-reference/vouchers/adjust-voucher-balance) endpoint.
     * Update Voucher
     * @param param the request object
     */
    public updateVoucherWithHttpInfo(param: VouchersApiUpdateVoucherRequest, options?: ConfigurationOptions): Promise<HttpInfo<VouchersUpdateResponseBody>> {
        return this.api.updateVoucherWithHttpInfo(param.code, param.vouchersUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates the specified voucher by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped. If you want to change the amount on a gift card or the number of points on a loyalty card, use the [Adjust voucher balance](/api-reference/vouchers/adjust-voucher-balance) endpoint.
     * Update Voucher
     * @param param the request object
     */
    public updateVoucher(param: VouchersApiUpdateVoucherRequest, options?: ConfigurationOptions): Promise<VouchersUpdateResponseBody> {
        return this.api.updateVoucher(param.code, param.vouchersUpdateRequestBody,  options).toPromise();
    }

    /**
     * Add balance to an existing gift card or loyalty card. For loyalty cards, it must be assigned to a holder.
     * Adjust Voucher Balance
     * @param param the request object
     */
    public updateVoucherBalanceWithHttpInfo(param: VouchersApiUpdateVoucherBalanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<VouchersBalanceUpdateResponseBody>> {
        return this.api.updateVoucherBalanceWithHttpInfo(param.code, param.vouchersBalanceUpdateRequestBody,  options).toPromise();
    }

    /**
     * Add balance to an existing gift card or loyalty card. For loyalty cards, it must be assigned to a holder.
     * Adjust Voucher Balance
     * @param param the request object
     */
    public updateVoucherBalance(param: VouchersApiUpdateVoucherBalanceRequest, options?: ConfigurationOptions): Promise<VouchersBalanceUpdateResponseBody> {
        return this.api.updateVoucherBalance(param.code, param.vouchersBalanceUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates specific metadata parameters for each code, respectively, in one asynchronous operation. The request can include up to **10 MB** of data. Upserts are not supported.  🚧 Currently, only **metadata** updates are supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Vouchers in Bulk
     * @param param the request object
     */
    public updateVouchersInBulkWithHttpInfo(param: VouchersApiUpdateVouchersInBulkRequest, options?: ConfigurationOptions): Promise<HttpInfo<VouchersUpdateInBulkResponseBody>> {
        return this.api.updateVouchersInBulkWithHttpInfo(param.vouchersUpdateInBulkItemRequestBody,  options).toPromise();
    }

    /**
     * Updates specific metadata parameters for each code, respectively, in one asynchronous operation. The request can include up to **10 MB** of data. Upserts are not supported.  🚧 Currently, only **metadata** updates are supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Vouchers in Bulk
     * @param param the request object
     */
    public updateVouchersInBulk(param: VouchersApiUpdateVouchersInBulkRequest, options?: ConfigurationOptions): Promise<VouchersUpdateInBulkResponseBody> {
        return this.api.updateVouchersInBulk(param.vouchersUpdateInBulkItemRequestBody,  options).toPromise();
    }

    /**
     * Updates metadata parameters for a list of codes. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. Upserts are not supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Vouchers\' Metadata in Bulk
     * @param param the request object
     */
    public updateVouchersMetadataInBulkWithHttpInfo(param: VouchersApiUpdateVouchersMetadataInBulkRequest, options?: ConfigurationOptions): Promise<HttpInfo<VouchersMetadataUpdateInBulkResponseBody>> {
        return this.api.updateVouchersMetadataInBulkWithHttpInfo(param.vouchersMetadataUpdateInBulkRequestBody,  options).toPromise();
    }

    /**
     * Updates metadata parameters for a list of codes. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. Upserts are not supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.
     * Update Vouchers\' Metadata in Bulk
     * @param param the request object
     */
    public updateVouchersMetadataInBulk(param: VouchersApiUpdateVouchersMetadataInBulkRequest, options?: ConfigurationOptions): Promise<VouchersMetadataUpdateInBulkResponseBody> {
        return this.api.updateVouchersMetadataInBulk(param.vouchersMetadataUpdateInBulkRequestBody,  options).toPromise();
    }

}
