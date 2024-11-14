# items.dat
This is special file, which is used for getting items names, texture files and coordinates, behavior and other stuff. It is also useful to know as it is used in multiple packets.

It is possible to first decoded items database on [this page](https://wombat.platymuus.com/growtopia/itemdb.php). Also based on this page was first [items dat decoder](https://github.com/GrowtopiaNoobs/Growtopia_ItemsDecoder) created.

## Items data structure
This structure begins with information about file and then this is followed by adding all items one after another.

Beginning structure:

uint16 for file version - this is updated when new fields are added
uint32 for item count


## Types Description
The size of the field is determined by the following values:
| Type   | Size     |
|--------|----------|
| uint32 | 4 bytes  |
| uint16 | 2 bytes  |
| uint8  | 1 byte   |

> [!NOTE]
> For more information, refer to [Types Definitions](types_definitions.md).

## Items Fields Description
The table below details each field in the items data structure, including its type and purpose.


| #   | Field                | Type    | Description                                                                 |
|-----|----------------------|---------|-----------------------------------------------------------------------------|
| 1   | Item ID              | uint32  | Starting from zero                                                          |
| 2   | Flags                | uint16  | [Properties](item_properties.md) of the item such untradable, etc           |
| 3   | Type                 | uint8   | [Type](item_types.md) of the item EX: 17 (foreground) or 20 (clothing)      |
| 4   | Material             | uint8   | [Type](item_types.md) of item material EX: 1 (glass) or 0 (wood)            |
| 5   | Item name            | string  | it is encoded using [simple cypher](cypher.md)                              |
| 6   | Texture file name    | string  | Used to load the item's sprite                                              |
| 7   | Texture hash         | uint32  | Used to check if the item's sprite is up to date                            |
| 8   | Visual effect        | uint8   | 25 makes it rainbow like the Shifty Block                                   |
| 9   | Cook time            | uint32  | TODO: Docs                                                                  |
| 10  | Texture X            | uint8   | The X coordinate of the sprite in the sprite sheet, in multiples of 32      |
| 11  | Texture Y            | uint8   | The Y coordinate of the sprite in the sprite sheet, in multiples of 32      |
| 12  | Render Type          | uint8   | [Type](item_types.md) of the render the sprite Ex: 1 (spread like dirt)     |
| 13  | Layer                | uint8   | TODO: Docs                                                                  |
| 14  | Collision type       | uint8   | 0 - no collision, 1 - full collision                                        |
| 15  | Block health         | uint8   | Damage points needed to destroy the tile (6 per punch, 7.5 with pickaxe)    |
| 16  | Regen time           | uint32  | Time needed to reset punch damage on item                                   |
| 17  | Clothing type        | uint8   | [Type](item_types.md) of the clothes EX: 7 (hair) or 1 (shirt)              |
| 18  | Rarity               | uint16  | Item rarity (set to 999 if none)                                            |
| 19  | Max items            | uint8   | 200 usually, 2 on the Growtorial Entrance                                   |
| 20  | Extra file name      | string  | Usually used for audio, by default an empty string                          |
| 21  | Extra file hash      | uint32  | To check if the extra file is up to date                                    |
| 22  | Animation length     | uint32  | In milliseconds                                                             |
| 23  | Pet Name             | string  | TODO: Docs (v4)                                                             |
| 24  | Pet Prefix           | string  | TODO: Docs (v4)                                                             |
| 25  | Pet Suffix           | string  | TODO: Docs (v4)                                                             |
| 26  | Pet Ability          | string  | TODO: Docs (v4)                                                             |
| 27  | Seed base sprite     | uint8   | TODO: Docs                                                                  |
| 28  | Seed overlay sprite  | uint8   | TODO: Docs                                                                  |
| 29  | Tree base sprite     | uint8   | TODO: Docs                                                                  |
| 30  | Tree overlay sprite  | uint8   | TODO: Docs                                                                  |
| 31  | Base color           | uint32  | Seed color in uint32 format, convert to hex to get BGRA format              |
| 32  | Overlay color        | uint32  | Seed color in uint32 format, convert to hex to get BGRA format              |
| 33  | Seed1                | uint16  | TODO: Docs                                                                  |
| 34  | seed2                | uint16  | TODO: Docs                                                                  |
| 35  | Tree grow time       | uint32  | Time to grow in second                                                      |
| 36  | Anim Type            | uint32  | TODO: Docs (v7)                                                             |
| 37  | Anim String          | string  | TODO: Docs (v7)                                                             |
| 38  | Anim Tex             | string  | TODO: Docs (v8)                                                             |
| 39  | Anim String2         | string  | TODO: Docs (v8)                                                             |
| 40  | Dlayer1              | uint32  | TODO: Docs (v8)                                                             |
| 41  | Dlayer2              | uint32  | TODO: Docs (v8)                                                             |
| 42  | Properties2          | uint16  | TODO: Docs (v9)                                                             |
| 43  | Unknown Data         | ?       | TODO: Docs (v9)                                                             |
| 44  | Tile Range           | uint32  | Domain range (like extractor dynamo)                                        |
| 45  | Pile Range           | uint32  | Vault capacity (like storage vault capcity)                                 |
| 46  | Custom Punch         | string  | TODO: Docs (v11)                                                            |
| 47  | Unknown Data         | ?       | TODO: Docs (v12)                                                            |
| 48  | Clock Div            | uint32  | TODO: Docs (v13)                                                            |
| 49  | Parent Id            | uint32  | TODO: Docs (v14)                                                            |
| 50  | Unknown Data         | ?       | TODO: Docs (v15)                                                            |
| 51  | Alt Sit Path         | string  | TODO: Docs (v15)                                                            |
| 52  | Unknown Data         | string  | TODO: Docs (v16)                                                            |
| 53  | Unknown Data         | uint32  | TODO: Docs (v17)                                                            |
| 54  | Unknown Data         | uint32  | TODO: Docs (v18)                                                            |
