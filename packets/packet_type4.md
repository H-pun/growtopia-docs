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
- [00 - Character Update State](Tanks/type00.md)
- [01 - Variant Packet](Tanks/type01.md)
- [02 - ...](Tanks/type02.md)
- [03 - ...](Tanks/type03.md)
- [04 - World Packet](Tanks/type04.md)
- [05 - ...](Tanks/type05.md)
- [06 - ...](Tanks/type06.md)
- [07 - ...](Tanks/type07.md)
- [08 - ...](Tanks/type08.md)
- [09 - Inventory Update Packet](Tanks/type09.md)
- [10 - ...](Tanks/type10.md)
- [11 - ...](Tanks/type11.md)
- [12 - ...](Tanks/type12.md)
- [13 - ...](Tanks/type13.md)
- [14 - ...](Tanks/type14.md)
- [15 - ...](Tanks/type15.md)
- [16 - Items Data Packet](Tanks/type16.md)
- [17 - ...](Tanks/type17.md)
- [18 - ...](Tanks/type18.md)
- [19 - ...](Tanks/type19.md)
- [20 - ...](Tanks/type20.md)
- [21 - ...](Tanks/type21.md)
