# Tank packet Type 1

Packet senders:
- [ ] Client
- [x] Server

Fields used:
- [x] NetID
- [x] [Variant Packet](/Docs/Packets/Tanks/Variants/README.md)


This packet is known as variant packet. It contains in extended data format known as VariantList which is coming from ProtonSDK. First item in VariantList is always a string which is name of function which should be executed.
