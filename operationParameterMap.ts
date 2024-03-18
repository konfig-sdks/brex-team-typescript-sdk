type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v2/cards-POST': {
        parameters: [
            {
                name: 'owner'
            },
            {
                name: 'card_name'
            },
            {
                name: 'card_type'
            },
            {
                name: 'limit_type'
            },
            {
                name: 'Idempotency-Key'
            },
            {
                name: 'spend_controls'
            },
            {
                name: 'mailing_address'
            },
            {
                name: 'metadata'
            },
            {
                name: 'card_attribute_preferences'
            },
        ]
    },
    '/v2/cards/{id}/secure_email-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'Idempotency-Key'
            },
            {
                name: 'recipient_email'
            },
            {
                name: 'sender_name'
            },
            {
                name: 'message'
            },
            {
                name: 'expiry_days'
            },
        ]
    },
    '/v2/cards/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/cards/{id}/pan-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/cards-GET': {
        parameters: [
            {
                name: 'user_id'
            },
            {
                name: 'cursor'
            },
            {
                name: 'limit'
            },
        ]
    },
    '/v2/cards/{id}/lock-POST': {
        parameters: [
            {
                name: 'reason'
            },
            {
                name: 'id'
            },
            {
                name: 'description'
            },
            {
                name: 'Idempotency-Key'
            },
        ]
    },
    '/v2/cards/{id}/terminate-POST': {
        parameters: [
            {
                name: 'reason'
            },
            {
                name: 'id'
            },
            {
                name: 'description'
            },
            {
                name: 'Idempotency-Key'
            },
        ]
    },
    '/v2/cards/{id}/unlock-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'Idempotency-Key'
            },
        ]
    },
    '/v2/cards/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'spend_controls'
            },
            {
                name: 'metadata'
            },
            {
                name: 'Idempotency-Key'
            },
        ]
    },
    '/v2/company-GET': {
        parameters: [
        ]
    },
    '/v2/departments-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'description'
            },
            {
                name: 'Idempotency-Key'
            },
        ]
    },
    '/v2/departments/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/departments-GET': {
        parameters: [
            {
                name: 'cursor'
            },
            {
                name: 'limit'
            },
            {
                name: 'name'
            },
        ]
    },
    '/v2/locations-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'description'
            },
            {
                name: 'Idempotency-Key'
            },
        ]
    },
    '/v2/locations-GET': {
        parameters: [
            {
                name: 'cursor'
            },
            {
                name: 'limit'
            },
            {
                name: 'name'
            },
        ]
    },
    '/v2/locations/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/titles-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'Idempotency-Key'
            },
        ]
    },
    '/v2/titles-GET': {
        parameters: [
            {
                name: 'cursor'
            },
            {
                name: 'limit'
            },
            {
                name: 'name'
            },
        ]
    },
    '/v2/titles/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/users/me-GET': {
        parameters: [
        ]
    },
    '/v2/users/{id}/limit-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/users/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/users-POST': {
        parameters: [
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'email'
            },
            {
                name: 'manager_id'
            },
            {
                name: 'department_id'
            },
            {
                name: 'location_id'
            },
            {
                name: 'title_id'
            },
            {
                name: 'metadata'
            },
            {
                name: 'Idempotency-Key'
            },
        ]
    },
    '/v2/users-GET': {
        parameters: [
            {
                name: 'cursor'
            },
            {
                name: 'limit'
            },
            {
                name: 'email'
            },
            {
                name: 'remote_display_id'
            },
            {
                name: 'expand[]'
            },
        ]
    },
    '/v2/users/{id}/limit-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'monthly_limit'
            },
            {
                name: 'Idempotency-Key'
            },
        ]
    },
    '/v2/users/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'status'
            },
            {
                name: 'manager_id'
            },
            {
                name: 'department_id'
            },
            {
                name: 'location_id'
            },
            {
                name: 'title_id'
            },
            {
                name: 'metadata'
            },
            {
                name: 'Idempotency-Key'
            },
        ]
    },
}