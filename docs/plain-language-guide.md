# OpenReceipt in plain language

## What problem are we solving?

A bank transaction can show that $48.70 went to Walmart. It usually cannot show that the purchase contained groceries, detergent, motor oil, and toothpaste. The itemized receipt contains that missing information.

Typing an email address at every checkout is too slow and unreliable. Linking receipts to a payment card also fails when a shopper uses cash, changes cards, or sends someone else to shop.

OpenReceipt gives the receipt its own destination, independent of payment.

## What is a receipt token?

A receipt token is a short machine-readable address. It can be carried in several forms:

| Form | How it is used |
|---|---|
| QR or Data Matrix | Present it to an imaging scanner |
| Barcode | Present it to a compatible checkout scanner |
| NFC tag | Tap it on a compatible reader |
| Text | Enter it manually as a fallback |

The token must not contain payment credentials. A first prototype may use a URL such as:

```text
https://example.org/r/demo-user
```

## What happens at checkout?

| Step | Action |
|---:|---|
| 1 | The store builds the shopping basket normally. |
| 2 | The shopper pays by any accepted method. |
| 3 | The shopper presents an OpenReceipt token. |
| 4 | The register recognizes it as a receipt destination. |
| 5 | The store sends the ordinary receipt text. |
| 6 | The shopper's chosen software receives it. |

## What does the store need to change?

The scanner can read a code, but the point-of-sale software must be taught what that code means. There is no universal, zero-change method that works on all existing registers.

The intended change is narrow: add “send to receipt token” beside print, email, and text receipt options. The retailer does not need to categorize purchases or install CountMoney.

## What happens later?

CountMoney or another application may convert receipt text into item rows, categories, price histories, and ledger entries. That work is downstream and outside the first OpenReceipt milestone.
