# OpenReceipt

OpenReceipt is a proposed open standard for sending a shopper's digital receipt to a destination they control with one scan or tap.

The shopper can pay with cash, a card, a gift card, or someone else's payment method. The receipt identity remains separate from the payment identity.

## The idea in one minute

1. A shopper carries an OpenReceipt token as a barcode, QR code, or NFC tag.
2. The token identifies where the shopper wants the receipt delivered.
3. At checkout, the shopper scans or taps the token once.
4. The point-of-sale system sends its ordinary receipt text to that destination.
5. Any compatible application can store or interpret the receipt.

OpenReceipt is not a payment system, loyalty program, or accounting application. Its stable core routes receipts. Optional, interoperable layers can normalize products and attach semantic categories without forcing every application to depend on one proprietary merchant-code database. CountMoney can eventually be one application that uses these layers.

## Live demonstration

Try the [OpenReceipt checkout simulation](https://educryptor.github.io/open-receipt-protocol/). It uses fake products, sends nothing over the Internet, and demonstrates the intended one-token interaction.

## Current status

This repository is at the proposal and prototype stage. No major retailer currently supports OpenReceipt.

The first milestone is intentionally small:

> Buy five simulated grocery items, scan one receipt token, and make the exact receipt appear at its destination without typing personal information.

## Start here

- [Plain-language guide](docs/plain-language-guide.md)
- [Protocol proposal v0.1](docs/protocol-v0.1.md)
- [Semantic categorization model](docs/semantic-categorization.md)
- [Build roadmap](docs/roadmap.md)
- [How to contribute](CONTRIBUTING.md)

## Try the prototype

Open `prototype/index.html` in a web browser. It runs entirely on your device and sends nothing over the Internet.

## Principles

- One scan or tap
- Separate receipt identity from payment identity
- No payment credentials in the token
- No required retailer loyalty account
- Open implementation
- User-chosen destinations
- Plain receipt text first
- Privacy and consent by design

## License

Software and documentation in this repository are licensed under the MIT License. See [LICENSE](LICENSE).
