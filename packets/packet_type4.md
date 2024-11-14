# Packet type 4

Packet senders:
- [x] Client
- [x] Server

This is one of most complicated packets. Also this is one of few packets which have known official name, which is Tank Packet. It contains it's own packet type together with static structure and data with dynamic length which can be placed on end of packet. Also when there is choosen variant packet as packet type, then you can pack onto it another layer of data.

So let's look at packet structure first (it is always 56 bytes, not counting extended data):
- uint8 - Packet type
- uint8 - ...
- uint8 - ...
- uint8 - ...
- uint32 - NetID
- uint32 - ...
- uint32 - ...
- uint32 - ...
- uint32 - ...
- float - ...
- float - ...
- float - ...
- float - ...
- float - ...
- uint32 - ...
- uint32 - ...
- uint32 - Extended data length




Packet types:
- [00 - Character Update State](tanks/type00.md)
- [01 - Variant Packet](tanks/type01.md)
- [02 - ...](tanks/type02.md)
- [03 - ...](tanks/type03.md)
- [04 - World Packet](tanks/type04.md)
- [05 - ...](tanks/type05.md)
- [06 - ...](tanks/type06.md)
- [07 - ...](tanks/type07.md)
- [08 - ...](tanks/type08.md)
- [09 - Inventory Update Packet](tanks/type09.md)
- [10 - ...](tanks/type10.md)
- [11 - ...](tanks/type11.md)
- [12 - ...](tanks/type12.md)
- [13 - ...](tanks/type13.md)
- [14 - ...](tanks/type14.md)
- [15 - ...](tanks/type15.md)
- [16 - Items Data Packet](tanks/type16.md)
- [17 - ...](tanks/type17.md)
- [18 - ...](tanks/type18.md)
- [19 - ...](tanks/type19.md)
- [20 - ...](tanks/type20.md)
- [21 - ...](tanks/type21.md)
