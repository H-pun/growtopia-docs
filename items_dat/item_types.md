# Type Field in `items.dat`

If you're wondering about the meaning of the `type` or `clothing type` found in `items.dat`, I've got your back.

## Clothing Types

In the game, there are only 9 distinct clothing types. These categories define how clothing items are classified in items.dat. Here's the full list:
| Type | Name     |
|------|----------|
| 0    | Hat      |
| 1    | Shirt    |
| 2    | Pants    |
| 3    | Feet     |
| 4    | Face     |
| 5    | Hand     |
| 6    | Back     |
| 7    | Hair     |
| 8    | Necklace |

Each number corresponds to a specific clothing category, helping the game determine how an item is equipped or displayed.

## Spread Types

There are various spread types that define how items are displayed or interact with the environment. Here's the full list:

| Type | Name                          |
|------|-------------------------------|
| 1    | Single                        |
| 2    | Eight Direction               |
| 3    | Horizontal                    |
| 4    | Attach To Wall Five Sprites   |
| 5    | Four Direction                |
| 6    | Random                        |
| 7    | Vertical                      |
| 8    | Cave Platform Horizontal      |
| 9    | Attach To Wall Four Sprites   |
| 10   | Diagonal                      |

## Material Types

I think material types are used to determine the hit sound effect (but idk). Here's the list of material types:

| Type  | Name  |
|-------|-------|
| 0     | Wood  |
| 1     | Glass |
| 2     | Rock  |
| 3     | Metal |

## Collision Types

Collision types define how tiles interact with players and other objects in the game. Here's the list of collision types:

| Value | Name                          | Comment                                                                    |
|-------|-------------------------------|----------------------------------------------------------------------------|
| 0     | Tile Collision None           | No collision, players can pass through freely.                             |
| 1     | Tile Collision Jump Through   | Players can jump through from below but not fall through from above.       |
| 2     | Tile Collision Jump Down      | Players can jump down through the tile.                                    |
| 3     | Tile Collision Gateway        | Acts as a gateway or portal to another location.                           |
| 4     | Tile Collision If Off         | Collision is active when the tile is off.                                  |
| 5     | Tile Collision If On          | Collision is active when the tile is on.                                   |
| 6     | Tile Collision One Way        | Allows movement in one direction only.                                     |
| 7     | Tile Collision Vip            | Restricted to VIP players only.                                            |
| 8     | Tile Collision Adventure      | Used in adventure mode for specific interactions.                          |
| 9     | Tile Collision Faction        | Restricted to players of a specific faction.                               |
| 10    | Tile Collision Guild          | Restricted to guild members only.                                          |
| 11    | Tile Collision Cloud          | Acts like a cloud, allowing players to pass through in certain conditions. |

## Visual Effects

The `visual_effect` enum defines various visual effects that can be applied to items in the game. Here's the list of visual effects:

| Value | Name                          | Description |
|-------|-------------------------------|-------------|
| 0     | Normal                        | TODO        |
| 1     | Flame Lick                    | TODO        |
| 2     | Smoking                       | TODO        |
| 3     | Glow Tint1                    | TODO        |
| 4     | Anim                          | TODO        |
| 5     | Bubbles                       | TODO        |
| 6     | Pet                           | TODO        |
| 7     | Pet Anim                      | TODO        |
| 8     | No Arms                       | TODO        |
| 9     | Wavey                         | TODO        |
| 10    | Wavey Anim                    | TODO        |
| 11    | Both Arms                     | TODO        |
| 12    | Low Hair                      | TODO        |
| 13    | Under Face                    | TODO        |
| 14    | Skin Tint                     | TODO        |
| 15    | Mask                          | TODO        |
| 16    | Anim Mask                     | TODO        |
| 17    | Low Hair Mask                 | TODO        |
| 18    | Ghost                         | TODO        |
| 19    | Pulse                         | TODO        |
| 20    | Colorize                      | TODO        |
| 21    | Colorize to Shirt             | TODO        |
| 22    | Colorize Anim                 | TODO        |
| 23    | High Face                     | TODO        |
| 24    | High Face Anim                | TODO        |
| 25    | Rainbow Shift                 | TODO        |
| 26    | Back Fore                     | TODO        |
| 27    | Colorize with Skin            | TODO        |
| 28    | No Render                     | TODO        |
| 29    | Spin                          | TODO        |
| 30    | Offhand                       | TODO        |
| 31    | Winged                        | TODO        |
| 32    | Sink                          | TODO        |
| 33    | Darkness                      | TODO        |
| 34    | Light Source                  | TODO        |
| 35    | Light if On                   | TODO        |
| 36    | Discolor                      | TODO        |
| 37    | Step Spin                     | TODO        |
| 38    | Pet Colored                   | TODO        |
| 39    | Silk Foot                     | TODO        |
| 40    | Tilty                         | TODO        |
| 41    | Tilty Dark                    | TODO        |
| 42    | Next Frame if On              | TODO        |
| 43    | Wobble                        | TODO        |
| 44    | Scroll                        | TODO        |
| 45    | Light Source Pulse            | TODO        |
| 46    | Bubble Machine                | TODO        |
| 47    | Very Low Hair                 | TODO        |
| 48    | Very Low Hair Mask            | TODO        |

## Item Types

If you're delving into the world of `items.dat` and need clarity on the various item types, you're in the right place.

Please note that some type numbers are skipped for unknown reasons:
> [!NOTE]
> The following item types are not used by any items in `items.dat` at the time this file was last updated. These types were discovered through reverse engineering, thanks to [FakeLeq](https://github.com/FakeLeq/growtopia-utility/blob/main/items_dat/item_flags.h) and [badewen](https://github.com/badewen/Growtopia-Things/blob/main/parsers/ItemInfo.h).

- Type No. 30 // RaceFlag
- Type No. 48 // Toybox
- Type No. 121 // Autodelete
- Type No. 133 // PveNpc
- Type No. 137 // Completionist
- Type No. 139 // AnzuBlock
- Type No. 143 // Pearl

Refer to the table below for detailed information on each item type found in `items.dat`:
> [!NOTE]
> The `flag` field mentioned here isn’t part of `items.dat` itself; it’s something I use to help identify and differentiate certain unordinary items.

| Type | System Name                    | Wiki Name                       | Flag    |
|------|--------------------------------|---------------------------------|---------|
| 0    | Fist                           | Fist                            | Special |
| 1    | Wrench                         | Wrench                          | Special |
| 2    | UserDoor                       | Door                            |         |
| 3    | Lock                           | Lock                            |         |
| 4    | Gems                           | Gems                            | Special |
| 5    | Treasure                       | Treasure                        |         |
| 6    | Deadly                         | Deadly Block                    |         |
| 7    | Trampoline                     | Trampoline Block                |         |
| 8    | Consumable                     | Consumable                      |         |
| 9    | Gateway                        | Entrance                        |         |
| 10   | Sign                           | Sign                            |         |
| 11   | SfxWithExtraFrame              | SFX Block                       |         |
| 12   | Boombox                        | Toggleable Animated Block       |         |
| 13   | Door                           | Main Door                       | Special |
| 14   | Platform                       | Platform                        |         |
| 15   | Bedrock                        | Bedrock                         | Special |
| 16   | Lava                           | Pain Block (Lava)               |         |
| 17   | Normal                         | Foreground Block                |         |
| 18   | Background                     | Background Block                |         |
| 19   | Seed                           | Seed                            | Special |
| 20   | Clothes                        | Clothes                         |         |
| 21   | NormalWithExtraFrame           | Animated Block                  |         |
| 22   | BackgdSfxExtraFrame            | SFX Wallpaper                   |         |
| 23   | BackBoombox                    | Toggleable Wallpaper            |         |
| 24   | Bouncy                         | Bouncy Block                    |         |
| 25   | Pointy                         | Pain Block (Spike)              |         |
| 26   | Portal                         | Portal                          |         |
| 27   | Checkpoint                     | Checkpoint                      |         |
| 28   | Musicnote                      | Sheet Music                     |         |
| 29   | Ice                            | Slippery Block                  |         |
| 30   | RaceFlag                       |                                 |         |
| 31   | Switcheroo                     | Toggleable Block                |         |
| 32   | Chest                          | Chest                           |         |
| 33   | Mailbox                        | Mailbox                         |         |
| 34   | Bulletin                       | Bulletin Board                  |         |
| 35   | Pinata                         | Event Mystery Block             |         |
| 36   | Dice                           | Random Block                    |         |
| 37   | Component                      | Component                       |         |
| 38   | Provider                       | Provider                        |         |
| 39   | Lab                            | Chemical Combiner               |         |
| 40   | Achievement                    | Achievement Block               |         |
| 41   | WeatherMachine                 | Weather Machine                 |         |
| 42   | Scoreboard                     | Scoreboard                      |         |
| 43   | Sungate                        | Sungate                         |         |
| 44   | Profile                        | Internal                        | Special |
| 45   | DeadlyIfOn                     | Toggleable Deadly Block         |         |
| 46   | HeartMonitor                   | Heart Monitor                   |         |
| 47   | DonationBox                    | Donation Box                    |         |
| 48   | Toybox                         |                                 |         |
| 49   | Mannequin                      | Mannequin                       |         |
| 50   | Camera                         | Security Camera                 |         |
| 51   | Magicegg                       | Magic Egg                       |         |
| 52   | Team                           | Game Block                      |         |
| 53   | GameGen                        | Game Generator                  |         |
| 54   | Xenonite                       | Xenonite Crystal                |         |
| 55   | Dressup                        | Phone Booth                     |         |
| 56   | Crystal                        | Crystal                         |         |
| 57   | Burglar                        | Crime Villain                   |         |
| 58   | Compactor                      | Clothing Compactor              |         |
| 59   | Spotlight                      | Spotlight                       |         |
| 60   | Wind                           | Pushing Block                   |         |
| 61   | DisplayBlock                   | Display Block                   |         |
| 62   | Vending                        | Vending Machine                 |         |
| 63   | Fishtank                       | Fish Tank Port                  |         |
| 64   | Petfish                        | Fish                            |         |
| 65   | Solar                          | Solar Collector                 |         |
| 66   | Forge                          | Forge                           |         |
| 67   | GivingTree                     | Giving Tree                     |         |
| 68   | GivingTreeStump                | Giving Tree Stump               |         |
| 69   | Steampunk                      | Steam Block                     |         |
| 70   | SteamLavaIfOn                  | Pain Block (Steam)              |         |
| 71   | SteamOrgan                     | Music Block (Steam)             |         |
| 72   | Tamagotchi                     | Silkworm                        |         |
| 73   | Sewing                         | Sewing Machine                  |         |
| 74   | Flag                           | Country Flag                    |         |
| 75   | LobsterTrap                    | Lobster Trap                    |         |
| 76   | Artcanvas                      | Painting Easel                  |         |
| 77   | BattleCage                     | Battle Pet Cage                 |         |
| 78   | PetTrainer                     | Pet Trainer                     |         |
| 79   | SteamEngine                    | Steam Engine                    |         |
| 80   | LockBot                        | Lock-Bot                        |         |
| 81   | WeatherSpecial                 | Weather Machine                 |         |
| 82   | SpiritStorage                  | Spirit Storage                  |         |
| 83   | DisplayShelf                   | Display Shelf                   |         |
| 84   | VipDoor                        | VIP Entrance                    |         |
| 85   | ChalTimer                      | Challenge Timer                 |         |
| 86   | ChalFlag                       | Challenge Flag                  |         |
| 87   | FishMount                      | Fish Mount                      |         |
| 88   | Portrait                       | Portrait                        |         |
| 89   | WeatherSpecial2                | Weather Machine                 |         |
| 90   | Fossil                         | Fossil                          |         |
| 91   | FossilPrep                     | Fossil Prep Station             |         |
| 92   | DnaMachine                     | DNA Processor                   |         |
| 93   | Blaster                        | Howler                          |         |
| 94   | Valhowla                       | Valhowla Treasure               |         |
| 95   | Chemsynth                      | Chemsynth Processor             |         |
| 96   | Chemtank                       | Chemsynth Tank                  |         |
| 97   | Storage                        | Storage Box                     |         |
| 98   | Oven                           | Cooking Oven                    |         |
| 99   | SuperMusic                     | Audio Block                     |         |
| 100  | Geigercharge                   | Geiger Charger                  |         |
| 101  | AdventureReset                 | Adventure Begin                 |         |
| 102  | TombRobber                     | Tomb Robber                     |         |
| 103  | Faction                        | Balloon                         |         |
| 104  | RedFaction                     | Entrance (Punch)                |         |
| 105  | GreenFaction                   | Entrance (Grow)                 |         |
| 106  | BlueFaction                    | Entrance (Build)                |         |
| 107  | Artifact                       | Artifact                        |         |
| 108  | TrampolineMomentum             | Jelly Block                     |         |
| 109  | FishgotchiTank                 | Training Port                   |         |
| 110  | FishingBlock                   | Fishing Block                   |         |
| 111  | ItemSucker                     | Magplant                        |         |
| 112  | ItemPlanter                    | Magplant Remote                 |         |
| 113  | Robot                          | CyBlock Bot                     |         |
| 114  | Command                        | CyBlock Command                 |         |
| 115  | LuckyTicket                    | Lucky Token                     |         |
| 116  | StatsBlock                     | GrowScan 9000                   |         |
| 117  | FieldNode                      | Containment Field Power Node    |         |
| 118  | OuijaBoard                     | Spirit Board                    |         |
| 119  | ArchitectMachine               | World Architect                 |         |
| 120  | Starship                       | Startopia Block                 |         |
| 121  | Autodelete                     |                                 |         |
| 122  | Boombox2                       | Toggleable Multi-Framed Animated Block |         |
| 123  | AutoActionBreak                | Autobreak (Block)               |         |
| 124  | AutoActionHarvest              | Autobreak (Trees)               |         |
| 125  | AutoActionHarvestSuck          | Autobreak                       |         |
| 126  | LightningCloud                 | Storm Cloud                     |         |
| 127  | PhasedBlock                    | Disappear when stepped on       |         |
| 128  | Mud                            | Puddle Block                    |         |
| 129  | RootCutting                    | Background Block                |         |
| 130  | PasswordStorage                | Safe Vault                      |         |
| 131  | PhasedBlock2                   | Angelic Counting Cloud          |         |
| 132  | Bomb                           | Mining Explosives               |         |
| 133  | PveNpc                         |                                 |         |
| 134  | InfinityWeatherMachine         | Infinity Weather Machine        |         |
| 135  | Slime                          | Sliming Block                   |         |
| 136  | Acid                           | Pain Block (Acid)               |         |
| 137  | Completionist                  |                                 |         |
| 138  | PunchToggle                    | Waving Inflatable Arm Guy       |         |
| 139  | AnzuBlock                      |                                 |         |
| 140  | FeedingBlock                   | Pineapple Guzzler               |         |
| 141  | KrankensBlock                  | Kranken's Galactic Block        |         |
| 142  | FriendsEntrance                | Friends Entrance                |         |
| 143  | Pearls                         |                                 |         |
