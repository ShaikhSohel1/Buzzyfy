import { type } from "os";
import Stripe from "stripe";

export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string;
    full_name?: string;
    avatar_url?: string;
    billing_address?: string;
    payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}




export interface Product {
    id: string;
    active?: boolean;
    name?: string;
    description?: string;
    images?: string;
    metadata?: Stripe.Metadata;
}


export interface Price {
    id: string;
    product_id?: string;
    active?: boolean;
    description?: string;
    currency?: string;
    unit_amount?: number;
    type?: Stripe.Price.Type;
    interval?: Stripe.Price.Recurring.Interval;
    trail_period_days?: number | null;
    metadata?: Stripe.Metadata;
    product?: Product;
}



export interface Subscription {
    id: string;
    user_id: string;
    status?: Stripe.Subscription.Status;
    metadata?: Stripe.Metadata;
    price_id?: string;
    qunatity?: number;
    cancel_at_period_end?: boolean;
    current_period_end?: number;
    current_period_start?: number;
    created: string;
    ended_at?: string;
    canceled_at?: string;
    trail_end?: string;
    trial_start?: string;
    prices?: Price; 
}
