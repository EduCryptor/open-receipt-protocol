# Roadmap

| Stage | Deliverable | Pass condition |
|---|---|---|
| 0 | Public problem statement | A non-programmer can explain the problem and proposed interaction. |
| 1 | Browser simulation | A five-item checkout produces receipt text after one token action. |
| 2 | Local receiver | Two local devices can demonstrate delivery without using real customer data. |
| 3 | QR and NFC prototype | The same opaque token works from a printed code and NFC tag. |
| 4 | One test POS integration | An open or sandbox POS sends the receipt without repeated typing. |
| 5 | Security and privacy design | Threat model, consent rules, rotation, revocation, and encryption are reviewed. |
| 6 | Independent implementation | A second developer implements the draft without private instructions. |
| 7 | Limited merchant pilot | A consenting merchant tests fake data, then controlled real transactions. |
| 8 | Standards outreach | POS vendors and retail standards groups review the proposal. |
| 9 | Semantic extension | Applications exchange product identities, category suggestions, and user-controlled classification profiles. |

## What to do now

1. Publish this repository publicly.
2. Publish and run the browser prototype; record every confusing step.
3. Replace the placeholder name only after a basic trademark and naming check.
4. Open one GitHub issue for each unresolved protocol decision.
5. Recruit one POS developer and one retail operator for critical feedback.
6. Do not manufacture cards or approach national retailers yet.

## Not yet

- Full CountMoney application
- Receipt parsing or AI classification
- Banking connections
- Production receipt server
- Custom card electronics
- Walmart or Target outreach
- Claims of universal compatibility

Semantic categorization belongs after reliable receipt acquisition. Building it first would produce another categorization tool without solving how item-level data arrives.
