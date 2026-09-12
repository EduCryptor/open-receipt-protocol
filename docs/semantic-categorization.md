# Semantic categorization model

Status: architectural direction, not part of the v0.1 delivery contract.

## Purpose

Financial applications commonly classify a whole transaction using its merchant. That fails for mixed-category retailers. A single Walmart transaction may contain food, medicine, clothing, vehicle supplies, and business equipment.

OpenReceipt should allow categorization at the purchased-item level while avoiding dependence on one proprietary category provider.

## Four separate layers

| Layer | Question answered | Controlled by |
|---|---|---|
| Receipt delivery | What text did the merchant issue? | Merchant and receipt destination |
| Product normalization | What product does this line describe? | Open aliases, merchant identifiers, and applications |
| Semantic classification | What kind of economic activity is it? | Shared taxonomies and classification engines |
| User allocation | How should this purchase count for this user? | The user or their authorized bookkeeper |

These layers must remain separate. A product can have stable descriptive facts while its accounting treatment differs by purchaser and purpose.

For example, a laptop may be:

| Purchaser context | Possible allocation |
|---|---|
| Household purchase | Personal electronics |
| Freelance developer | Business equipment |
| Computer reseller | Inventory |
| School | Educational equipment |

No universal AI category can determine that context safely without user rules or confirmation.

## Portable classification profile

A user may maintain a portable set of preferences:

```json
{
  "profile_version": "0.1",
  "rules": [
    {
      "match": { "canonical_product": "whole-milk" },
      "allocate": { "category": "food.groceries" }
    },
    {
      "match": { "canonical_product": "laptop", "merchant": "electronics-store" },
      "allocate": { "category": "business.equipment" },
      "requires_confirmation": true
    }
  ]
}
```

This is illustrative, not a finalized schema.

## Role of AI

AI may:

- expand abbreviated receipt lines;
- suggest canonical product matches;
- propose categories in bulk;
- learn a user's confirmed allocation preferences;
- identify uncertain or conflicting classifications.

AI output must remain reviewable, reversible, and distinguishable from merchant-provided facts. Confidence scores are not substitutes for an audit trail.

## Interoperability objective

QuickBooks, Empower, Monarch Money, CountMoney, or an independent bookkeeper could consume the same delivered receipt and portable classification profile. Competing applications could improve their interpretation engines without taking ownership of the underlying receipt identity or user rules.

## What openness does not remove

An open protocol does not remove every database. Product aliases, taxonomies, regional tax rules, and user preferences still require maintained data. Openness changes who can inspect, export, improve, and replace those datasets.
