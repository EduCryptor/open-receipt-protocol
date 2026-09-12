# OpenReceipt Protocol proposal v0.1

Status: exploratory draft; not production-ready.

## Scope

Version 0.1 defines a minimal demonstration contract between a receipt token, a point-of-sale system, and a receipt destination.

It does not define payment, product categorization, receipt parsing, loyalty accounts, or permanent identity.

## Token

The demonstration token is an HTTPS URI:

```text
https://{resolver}/r/{opaque-id}
```

Requirements:

- `{opaque-id}` must not contain a name, email address, payment credential, or predictable customer number.
- The same URI may be encoded in a QR code and an NFC NDEF URI record.
- A production design must define rotation, revocation, abuse prevention, authentication, and destination portability before real purchase data is used.

## Demonstration delivery request

```http
POST /r/{opaque-id}/receipts HTTP/1.1
Content-Type: text/plain; charset=utf-8
OpenReceipt-Version: 0.1
```

The request body is the ordinary human-readable receipt text.

## Demonstration response

| Status | Meaning |
|---:|---|
| 202 | Receipt accepted for delivery |
| 400 | Invalid receipt request |
| 404 | Token is unknown or inactive |
| 413 | Receipt is too large |
| 429 | Request limit exceeded |

## Required POS behavior

1. Read the token only when the shopper deliberately presents it for this transaction.
2. Confirm that the scanned value is a supported OpenReceipt token.
3. Send only the receipt belonging to the active checkout.
4. Do not include full payment-card numbers or unnecessary customer information.
5. Show whether delivery succeeded or failed.
6. Offer a normal printed receipt if delivery fails.

## Unresolved decisions

- A vendor-neutral URI scheme and governance process
- Proof that a sender is an authorized merchant
- End-to-end encryption and key recovery
- Token rotation and one-time tokens
- Relay discovery and destination portability
- Refunds, returns, corrected receipts, and duplicate delivery
- Retention and deletion expectations
- Threat model and privacy review

These are deliberately unresolved. Pretending v0.1 is already a secure universal standard would be dishonest.
