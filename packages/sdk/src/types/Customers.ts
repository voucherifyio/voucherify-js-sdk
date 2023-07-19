export interface SimpleCustomer {
  id: string;
  name?: string;
  email?: string;
  source_id?: string;
  metadata?: Record<string, any>;
  object: "customer";
}


export type CustomerUnconfirmed = Pick<CustomerObject, "summary" | "email" | "loyalty"> & {
  object: "unconfirmed_customer"
}

export interface ValidateVoucherCustomerId {
  //6_req_validate_voucher_customer_id
  id: string;
}

export interface ValidateVoucherSourceId {
  //6_req_validate_voucher_customer_source_id
  source_id: string;
}

export interface CreateCustomer {
  source_id?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: {
    city?: string
    state?: string
    line_1?: string
    line_2?: string
    country?: string
    postal_code?: string
  };
  birthdate?: string;
  birthday?: string;
  metadata?: Record<string, any>;
} //9_req_create_customer
export interface CustomerRequest {
  id?: string;
  source_id?: string;
  name?: string;
  email?: string;
  metadata?: Record<string, any>;
  description?: string;
  address?: {
    city?: string
    state?: string
    line_1?: string
    line_2?: string
    country?: string
    postal_code?: string
  };
  phone?: string;
}

export interface CustomersCommonListRequest {
  limit?: number;
  page?: number;
  email?: string;
  city?: string;
  name?: string;
  order?: "created_at" | "-created_at";
  starting_after?: Date | string;
}

export interface CustomersCommonListResponse {
  object: "list";
  total: number;
  data_ref: "customers";
  customers: CustomerObject[];
  has_more?: boolean;
}

export interface CustomerActivitiesListQueryParams {
  limit?: number;
  order?: | "created_at" |
    "-created_at" |
    "updated_at" |
    "-updated_at" |
    "type" |
    "-type" |
    "code" |
    "-code" |
    "campaign" |
    "-campaign" |
    "category" |
    "-category";
  starting_after?: string;
  starting_after_id?: string;
  campaign_type?: "LOYALTY_PROGRAM" | "PROMOTION" | "DISCOUNT_COUPONS" | "GIFT_VOUCHERS" | "REFERRAL_PROGRAM";
  campaign_id?: string;
}

export interface CustomerActivitiesListResponse {
  object: "list";
  total: number;
  data_ref: "data";
  data: {
    type: "customer.confirmed" |
      "customer.created" |
      "customer.updated" |
      "customer.deleted" |
      "customer.referred" |
      "customer.custom_event" |
      "customer.segment_entered" |
      "customer.segment.left" |
      "customer.sms.sent" |
      "customer.sms.failed" |
      "customer.email.sent" |
      "customer.email.failed" |
      "customer.activecampaign.sent" |
      "customer.braze.sent" |
      "customer.mailchimp.sent" |
      "customer.intercom.sent" |
      "customer.intercom.failed" |
      "customer.rewarded" |
      "customer.rewarded.loyalty_points" |
      "customer.voucher.gift.balance_added" |
      "customer.voucher.loyalty_card.points_added" |
      "customer.voucher.loyalty_card.points_transferred" |
      "customer.publication.succeeded" |
      "customer.publication.failed" |
      "customer.redemption.succeeded" |
      "customer.redemption.failed" |
      "customer.redemption.rollback.succeeded" |
      "customer.redemption.rollback.failed" |
      "customer.consents.given" |
      "customer.consents.revoked"
    created_at: string
    data: CustomerActivityObjectData
    id: string
  }[];
}

type CustomerActivityObjectData =//9_obj_customer_activity_object_data
  CustomerActivityObjectDataCustomerConfirmed
  | CustomerActivityObjectDataCustomerCreated
  | CustomerActivityObjectDataCustomerUpdated
  | CustomerActivityObjectDataCustomerDeleted
  | CustomerActivityObjectDataCustomerReferred
  | CustomerActivityObjectDataCustomEvent
  | CustomerActivityObjectDataCustomerSegmentEntered
  | CustomerActivityObjectDataCustomerSegmentLeft
  | CustomerActivityObjectDataCustomerSmsSent
  | CustomerActivityObjectDataCustomerSmsFailed
  | CustomerActivityObjectDataCustomerEmailSent
  | CustomerActivityObjectDataCustomerEmailFailed
  | CustomerActivityObjectDataCustomerActivecampaignSent
  | CustomerActivityObjectDataCustomerActivecampaignFailed
  | CustomerActivityObjectDataCustomerBrazeSent
  | CustomerActivityObjectDataCustomerBrazeFailed
  | CustomerActivityObjectDataCustomerMailchimpSent
  | CustomerActivityObjectDataCustomerMailchimpFailed
  | CustomerActivityObjectDataCustomerIntercomSent
  | CustomerActivityObjectDataCustomerIntercomFailed
  | CustomerActivityObjectDataCustomerRewarded
  | CustomerActivityObjectDataCustomerRewardedLoyaltyPoints
  | CustomerActivityObjectDataCustomerVoucherBalanceAdded
  | CustomerActivityObjectDataCustomerVoucherLoyaltyCardPointsAdded
  | CustomerActivityObjectDataCustomerVoucherLoyaltyCardPointsTransferred
  | CustomerActivityObjectDataCustomerPublicationSucceeded
  | CustomerActivityObjectDataCustomerPublicationFailed
  | CustomerActivityObjectDataCustomerRedemptionSucceeded
  | CustomerActivityObjectDataCustomerRedemptionFailed
  | CustomerActivityObjectDataCustomerRedemptionRollbackSucceeded
  | CustomerActivityObjectDataCustomerRedemptionRollbackFailed
  | CustomerActivityObjectDataCustomerConsentsGiven
  | CustomerActivityObjectDataCustomerConsentsRevoked

interface CustomerObjectEmailParameter {
  //9_obj_customer_object_email_parameter
  id: string;
  source_id: string;
  name: string;
  description: string;
  email: string;
  phone: string;
  birthdate: string;
  birthday: string;
  address: {
    city: string
    state: string
    line_1: string
    line_2: string
    country: string
    postal_code: string
  };
  summary: {
    redemptions: {
      total_failed: number
      total_redeemed: number
      total_rollback_failed: number
      total_rollback_succeeded: number
      total_rolled_back: number
      total_succeeded: number
      gift: {
        redeemed_amount: number
        amount_to_go: number
      }
      loyalty_card: {
        redeemed_points: number
        points_to_go: number
      }
    }
    orders: {
      total_amount: number
      total_count: number
      average_amount: number
      last_order_amount: number
      last_order_date: string
    }
  };
  loyalty: {
    points: number
    referred_customers: number
    campaigns: {
      campaign_name: {
        points: number
        loyalty_tier: string
        referred_customers: number
      }
    }
  };
  referrals: {
    total: number
    campaigns: {
      campaign_id: string
      referrer_id: string
      related_object_id: string
      related_object_type: string
      date: string
    }[]
  };
  metadata: Record<string, any>;
  system_metadata: {
    consents: Record<string, any>
    source: string
  };
  created_at: string;
  updated_at: string;
  assets: {
    cockpit_url: string
  };
  object: "customer";
  email_unsubscribed: boolean;
}


interface CustomerActivityObjectDataCustomerCreated {
  customer: CustomerObjectEmailParameter;
}

type CustomerActivityObjectDataCustomerConfirmed = CustomerActivityObjectDataCustomerCreated & {
  unconfirmed_customer: string
}

type CustomerActivityObjectDataCustomerUpdated = CustomerActivityObjectDataCustomerCreated
type CustomerActivityObjectDataCustomerDeleted = CustomerActivityObjectDataCustomerCreated

interface CustomerActivityObjectDataCustomerReferred {
  voucher: Record<string, any>;
  campaign: Record<string, any>;
  customer: Record<string, any>;
  referrer: Record<string, any>;
  redemption: Record<string, any>;
  custom_event: Record<string, any>;
}

interface CustomerActivityObjectDataCustomEvent {
  event: Record<string, any>;
  loyalty: Record<string, any>;
  customer: Record<string, any>;
  referral: Record<string, any>;
  event_schema: Record<string, any>;
}

interface CustomerActivityObjectDataCustomerSegmentEntered {
  segment: Record<string, any>;
  customer: Record<string, any>;
}

type CustomerActivityObjectDataCustomerSegmentLeft = CustomerActivityObjectDataCustomerSegmentEntered
type CustomerActivityObjectDataCustomerSmsSent = Record<string, any>
type CustomerActivityObjectDataCustomerSmsFailed = Record<string, any>
type CustomerActivityObjectDataCustomerEmailSent = Record<string, any>
type CustomerActivityObjectDataCustomerEmailFailed = Record<string, any>
type CustomerActivityObjectDataCustomerActivecampaignSent = Record<string, any>
type CustomerActivityObjectDataCustomerActivecampaignFailed = Record<string, any>
type CustomerActivityObjectDataCustomerBrazeSent = Record<string, any>
type CustomerActivityObjectDataCustomerBrazeFailed = Record<string, any>
type CustomerActivityObjectDataCustomerMailchimpSent = Record<string, any>
type CustomerActivityObjectDataCustomerMailchimpFailed = Record<string, any>
type CustomerActivityObjectDataCustomerIntercomSent = Record<string, any>
type CustomerActivityObjectDataCustomerIntercomFailed = Record<string, any>

interface CustomerActivityObjectDataCustomerRewarded {
  holder: Record<string, any>;
  reward: Record<string, any>;
  balance: Record<string, any>;
  voucher: Record<string, any>;
  campaign: Record<string, any>;
  customer: Record<string, any>;
  redemption: Record<string, any>;
  custom_event: Record<string, any>;
  referral_tier: Record<string, any>;
  customer_event: Record<string, any>;
}

interface CustomerActivityObjectDataCustomerRewardedLoyaltyPoints {
  order: Record<string, any>;
  holder: Record<string, any>;
  balance: Record<string, any>;
  voucher: Record<string, any>;
  campaign: Record<string, any>;
  customer: Record<string, any>;
  earning_rule: Record<string, any>;
  loyalty_tier: Record<string, any>;
}

interface CustomerActivityObjectDataCustomerVoucherBalanceAdded {
  balance: Record<string, any>;
  voucher: Record<string, any>;
  campaign: Record<string, any>;
  customer: Record<string, any>;
}

type CustomerActivityObjectDataCustomerVoucherLoyaltyCardPointsAdded = CustomerActivityObjectDataCustomerVoucherBalanceAdded
type CustomerActivityObjectDataCustomerVoucherLoyaltyCardPointsTransferred = Record<string, any>

interface CustomerActivityObjectDataCustomerPublicationSucceeded {
  campaign: Record<string, any>;
  customer: Record<string, any>;
  publication: Record<string, any>;
}

type CustomerActivityObjectDataCustomerPublicationFailed = CustomerActivityObjectDataCustomerPublicationSucceeded

interface CustomerActivityObjectDataCustomerRedemptionSucceeded {
  order: Record<string, any>;
  holder: Record<string, any>;
  voucher: Record<string, any>;
  campaign: Record<string, any>;
  customer: Record<string, any>;
  redemption: Record<string, any>;
  promotion_tier: Record<string, any>;
}

type CustomerActivityObjectDataCustomerRedemptionFailed = CustomerActivityObjectDataCustomerRedemptionSucceeded

interface CustomerActivityObjectDataCustomerRedemptionRollbackSucceeded {
  order: Record<string, any>;
  holder: Record<string, any>;
  voucher: Record<string, any>;
  campaign: Record<string, any>;
  customer: Record<string, any>;
  redemption: Record<string, any>;
  promotion_tier: Record<string, any>;
  redemption_rollback: Record<string, any>;
}

type CustomerActivityObjectDataCustomerRedemptionRollbackFailed = Omit<CustomerActivityObjectDataCustomerRedemptionRollbackSucceeded, "voucher">

interface CustomerActivityObjectDataCustomerConsentsGiven {
  consents: Record<string, any>;
  customer: Record<string, any>;
}

type CustomerActivityObjectDataCustomerConsentsRevoked = CustomerActivityObjectDataCustomerConsentsGiven

export type CustomersCreateBody = CreateCustomer
export type CustomersCreateResponse = CustomerObject

export type CustomersGetResponse = CustomerObject

export interface CustomersListParams {
  limit?: number;
  page?: number;
  email?: string;
  city?: string;
  name?: string;
  order?: "created_at" | "-created_at" | "updated_at" | "-updated_at" | "source_id" | "-source_id";
  starting_after?: string;
}

export type CustomersListResponse = CustomersCommonListResponse

export type CustomersScrollParams = CustomersCommonListRequest
export type CustomersScrollResponse = CustomersCommonListResponse
export type CustomersScrollYield = CustomerObject

type IdOrSourceId = { id: string } | { source_id: string }
export type CustomersUpdateParams = CustomerRequest & IdOrSourceId

export type CustomersUpdateResponse = CustomerObject

export type CustomersUpdateConsentsBody = Record<string, boolean>

export interface ListCustomers {
  //9_res_list_customers
  object: "list";
  data_ref: "customers";
  customers: CustomerObject[]; //9_obj_customer_object
  total: number;
}

export interface CustomerObject {
  //9_obj_customer_object
  id: string;
  source_id: string;
  name: string;
  birthday: string;
  email: string;
  phone: string;
  birthdate: string;
  description: string;
  address?: {
    city?: string
    state?: string
    line_1?: string
    line_2?: string
    country?: string
    postal_code?: string
  };
  summary: {
    redemptions: {
      total_redeemed: number
      total_failed: number
      total_succeeded: number
      total_rolled_back: number
      total_rollback_succeeded: number
      total_rollback_failed: number
      gift: {
        redeemed_amount: number
        amount_to_go: number
      }
      loyalty_card: {
        redeemed_points: number
        points_to_go: number
      }
    }
    orders: {
      total_amount: number
      total_count: number
      average_amount: number
      last_order_amount: number
      last_order_date: string
    }
  };
  loyalty: {
    points: number
    referred_customers: number
    campaigns: {
      campaign_name: {
        points: number
        loyalty_tier: string
        referred_customers: number
      }
    }
  };
  referrals: {
    total: number
    campaigns: {
      campaign_id: string
      referrer_id: string
      related_object_id: string
      related_object_type: string
      date: string
    }[]
  };
  metadata: Record<string, any>;
  system_metadata: {
    consents: {
      consentId: {
        date: string
        value: boolean
      }
    }
    source: string
  };
  created_at: string;
  updated_at: string;
  assets: {
    cockpit_url: string
  };
  object: "customer";
}
