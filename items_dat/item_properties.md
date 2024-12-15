# Properties Field in `items.dat`

The `properties` field in the `items.dat` file is represented as an integer. This integer value is used to determine specific characteristics or features of an item. Each bit in this integer corresponds to a particular property. The table below explains how to interpret the integer value of the `properties` field.

## Property Descriptions

There are four kinds of flags used to determine the properties of an item:

1. **Flag**: These are the primary properties that define the basic characteristics of an item.
2. **Flag2**: These properties are additional characteristics that provide more specific functionalities.
3. **Flag3**: These properties are used for even more specialized functionalities and behaviors.
4. **FlagFX**: These properties are related to visual effects and animations associated with the item.

> [!NOTE]
> The properties for **Flag3** are still under research due to the extensive number of properties and their complex interactions. Any contribution will be much appreciated.

Each flag type has its own set of bit positions and corresponding integer values that determine the active properties for an item.
The following table summarizes the properties that can be derived from the integer value:


| Bit Position | Integer Value | Flag          | Description                                                                                  |
|--------------|---------------|---------------|--------------------------------------------------------------------------------------------- |
| 0            | 1             | Flipable      | This item can be placed in two directions, depending on the direction you're facing.         |
| 1            | 2             | Editable      | This item has special properties you can adjust with the wrench.                             |
| 2            | 4             | Seedless      | This item never drops any seeds.                                                             |
| 3            | 8             | Permanent     | This item is permanent.                                                                      |
| 4            | 16            | Dropless      | TODO                                                                                         |
| 5            | 32            | NoSelf        | This item can't be used on yourself.                                                         |
| 6            | 64            | NoShadow      | This item has no shadow.                                                                     |
| 7            | 128           | WorldLocked   | This item can only be used in World-Locked worlds.                                           |
| 8            | 256           | Beta          | This item is in beta.                                                                        |
| 9            | 512           | AutoPickup    | This item can't be destroyed - smashing it will return it to your backpack if you have room! |
| 10           | 1024          | Mod           | This item is a (mod) item                                                                    |
| 11           | 2048          | RandomGrow    | A tree of this type can bear surprising fruit!                                               |
| 12           | 4096          | Public        | This item is PUBLIC: Even if it's locked, anyone can smash it.                               |
| 13           | 8192          | Foreground    | This item is in the foreground.                                                              |
| 14           | 16384         | Holiday       | This item can only be created during WinterFest!                                             |
| 15           | 32768         | Untradeable   | This item cannot be dropped or traded.                                                       |

> [!WARNING]
> Some of the properties might be out of order. If you know the correct order or have any additional information, feel free to open an issue or contribute. This applies to both **Flag2** and **FlagFX** properties. 

| Bit Position | Integer Value | Flag2                  | Description          |
|--------------|---------------|------------------------|----------------------|
| 0            | 1             | RobotDeadly            | TODO                 |
| 1            | 2             | RobotShootLeft         | TODO                 |
| 2            | 4             | RobotShootRight        | TODO                 |
| 3            | 8             | RobotShootDown         | TODO                 |
| 4            | 16            | RobotShootUp           | TODO                 |
| 5            | 32            | RobotCanShoot          | TODO                 |
| 6            | 64            | RobotLava              | TODO                 |
| 7            | 128           | RobotPointy            | TODO                 |
| 8            | 256           | RobotShootDeadly       | TODO                 |
| 9            | 512           | GuildItem              | TODO                 |
| 10           | 1024          | GuildFlag              | TODO                 |
| 11           | 2048          | StarshipHelm           | TODO                 |
| 12           | 4096          | StarshipReactor        | TODO                 |
| 13           | 8192          | StarshipViewScreen     | TODO                 |
| 14           | 16384         | Smod                   | TODO                 |
| 15           | 32768         | TileDeadlyIfOn         | TODO                 |
| 16           | 65536         | LongHandItem64x32      | TODO                 |
| 17           | 131072        | Gemless                | TODO                 |
| 18           | 262144        | Transmutable           | TODO                 |
| 19           | 524288        | DungeonItem            | TODO                 |
| 20           | 1048576       | OneInWorld             | TODO                 |
| 21           | 2097152       | OnlyForWorldOwner      | TODO                 |
| 22           | 4194304       | PveMelee               | TODO                 |
| 23           | 8388608       | PveRanged              | TODO                 |
| 24           | 16777216      | PveAutoAim             | TODO                 |
| 25           | 33554432      | NoUpgrade              | TODO                 |
| 26           | 67108864      | ExtinguishFire         | TODO                 |
| 27           | 134217728     | ExtinguishFireNoDamage | TODO                 |
| 28           | 268435456     | NeedReceptionDesk      | TODO                 |
| 29           | 536870912     | UsePaint               | TODO                 |


| Bit Position | Integer Value | FlagFX                 | Description          |
|--------------|---------------|------------------------|----------------------|
| 0            | 1             | MultiAnimStart         | TODO                 |
| 1            | 2             | MultiAnim2Start        | TODO                 |
| 2            | 4             | PingPongAnimStart      | TODO                 |
| 3            | 8             | OverlayObject          | TODO                 |
| 4            | 16            | RenderFXVariantVersion | TODO                 |
| 5            | 32            | OffsetUp               | TODO                 |
| 6            | 64            | DualLayer              | TODO                 |
| 7            | 128           | UseSkinTint            | TODO                 |
| 8            | 256           | SeedTintLayer1         | TODO                 |
| 9            | 512           | SeedTintLayer2         | TODO                 |
| 10           | 1024          | RainbowTintLayer1      | TODO                 |
| 11           | 2048          | RainbowTintLayer2      | TODO                 |
| 12           | 4096          | Glow                   | TODO                 |
| 13           | 8192          | NoArms                 | TODO                 |
| 14           | 16384         | RenderOffHand          | TODO                 |
| 15           | 32768         | FrontArmPunch          | TODO                 |
| 16           | 65536         | SlowFallObject         | TODO                 |
| 17           | 131072        | ReplacementSprite      | TODO                 |
| 18           | 262144        | OrbFloat               | TODO                 |


## How to Determine Properties

To determine which properties are active for a specific item, follow these steps:

1. Retrieve the `properties` integer value from the item and convert it to binary
2. Check each bit of the value, if a bit is active (i.e., the result of the **bitwise AND** operation with its corresponding integer value is greater than 0), include the corresponding property description.

### Example: Evaluating the Properties of **(World Lock)**

Let's evaluate the properties of the **World Lock** with a properties value of **526**.

1. **Convert 526 to binary:**

   > `526` in binary is `1000001110`.

   | Bit position | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
   | ------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
   | 526(bin)     | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 1   | 1   | 0   |

2. **Check each relevant bit:**

   If the bit value is 1, it means the bit in that position is active, therefore the corresponding property is applicable to the item.

   | Bit Position | Active | Description                                                                                  |
   | ------------ | ------ | -------------------------------------------------------------------------------------------- |
   | 0            | No     | This item can be placed in two directions, depending on the direction you're facing.         |
   | 1            | Yes    | This item has special properties you can adjust with the wrench.                             |
   | 2            | Yes    | This item never drops any seeds.                                                             |
   | rest...      | ...    | ...                                                                                          |
   | 9            | Yes    | This item can't be destroyed - smashing it will return it to your backpack if you have room! |
   | 11           | No     | A tree of this type can bear surprising fruit!                                               |
   | rest...      | ...    | ...                                                                                          |

### Resulting Properties

Based on the evaluation, the following properties are active for an item with the properties value of **526**:

- "This item has special properties you can adjust with the wrench."
- "This item never drops any seeds."
- "This item can't be destroyed - smashing it will return it to your backpack if you have room!"

> [!NOTE]
> Some properties aren't meant to be shown in the game description. For example, "This item is permanent" is not displayed in the game.

### Missing Properties

Additionally, there are some properties that have not yet been fully determined.

The following properties are still under investigation:

- A lock makes it so only you (and designated friends) can edit an area.
- This item can kill zombies during a Pandemic!
- This item can only be used in World-Locked worlds.
- This item has no use... by itself.
- This item can be upgraded.
- This item can't be spliced.
- This item can be transmuted.

If you know anything about these properties, feel free to open an issue for discussions.
