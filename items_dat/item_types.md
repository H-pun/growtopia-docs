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
> Some users on Discord mentioned that this exists in the `extra data` of `items.dat`, but I'm not sure what it means.
- Type No. 30
- Type No. 48 // Toybox
- Type No. 121 // Autodelete
- Type No. 133
- Type No. 137
- Type No. 139

Refer to the table below for detailed information on each item type found in `items.dat`:
> [!NOTE]
> The `flag` field mentioned here isn’t part of `items.dat` itself; it’s something I use to help identify and differentiate certain unordinary items.

| Type | name                                    | flag    |
|------|-----------------------------------------|---------|
| 0    | Fist                                    | Special |
| 1    | Wrench                                  | Special |
| 2    | Door                                    |         |
| 3    | Lock                                    |         |
| 4    | Gems                                    | Special |
| 5    | Treasure                                |         |
| 6    | Deadly Block                            |         |
| 7    | Trampoline Block                        |         |
| 8    | Consumable                              |         |
| 9    | Entrance                                |         |
| 10   | Sign                                    |         |
| 11   | SFX Block                               |         |
| 12   | Toggleable Animated Block               |         |
| 13   | Main Door                               | Special |
| 14   | Platform                                |         |
| 15   | Bedrock                                 | Special |
| 16   | Pain Block (Lava)                       |         |
| 17   | Foreground Block                        |         |
| 18   | Background Block                        |         |
| 19   | Seed                                    | Special |
| 20   | Clothes                                 |         |
| 21   | Animated Block                          |         |
| 22   | SFX Wallpaper                           |         |
| 23   | Toggleable Wallpaper                    |         |
| 24   | Bouncy Block                            |         |
| 25   | Pain Block (Spike)                      |         |
| 26   | Portal                                  |         |
| 27   | Checkpoint                              |         |
| 28   | Sheet Music                             |         |
| 29   | Slippery Block                          |         |
| 31   | Toggleable Block                        |         |
| 32   | Chest                                   |         |
| 33   | Mailbox                                 |         |
| 34   | Bulletin Board                          |         |
| 35   | Event Mystery Block                     |         |
| 36   | Random Block                            |         |
| 37   | Component                               |         |
| 38   | Provider                                |         |
| 39   | Chemical Combiner                       |         |
| 40   | Achievement Block                       |         |
| 41   | Weather Machine                         |         |
| 42   | Scoreboard                              |         |
| 43   | Sungate                                 |         |
| 44   | Internal                                | Special |
| 45   | Toggleable Deadly Block                 |         |
| 46   | Heart Monitor                           |         |
| 47   | Donation Box                            |         |
| 49   | Mannequin                               |         |
| 50   | Security Camera                         |         |
| 51   | Magic Egg                               |         |
| 52   | Game Block                              |         |
| 53   | Game Generator                          |         |
| 54   | Xenonite Crystal                        |         |
| 55   | Phone Booth                             |         |
| 56   | Crystal                                 |         |
| 57   | Crime Villain                           |         |
| 58   | Clothing Compactor                      |         |
| 59   | Spotlight                               |         |
| 60   | Pushing Block                           |         |
| 61   | Display Block                           |         |
| 62   | Vending Machine                         |         |
| 63   | Fish Tank Port                          |         |
| 64   | Fish                                    |         |
| 65   | Solar Collector                         |         |
| 66   | Forge                                   |         |
| 67   | Giving Tree                             |         |
| 68   | Giving Tree Stump                       |         |
| 69   | Steam Block                             |         |
| 70   | Pain Block (Steam)                      |         |
| 71   | Music Block (Steam)                     |         |
| 72   | Silkworm                                |         |
| 73   | Sewing Machine                          |         |
| 74   | Country Flag                            |         |
| 75   | Lobster Trap                            |         |
| 76   | Painting Easel                          |         |
| 77   | Battle Pet Cage                         |         |
| 78   | Pet Trainer                             |         |
| 79   | Steam Engine                            |         |
| 80   | Lock-Bot                                |         |
| 81   | Weather Machine                         |         |
| 82   | Spirit Storage                          |         |
| 83   | Display Shelf                           |         |
| 84   | VIP Entrance                            |         |
| 85   | Challenge Timer                         |         |
| 86   | Challenge Flag                          |         |
| 87   | Fish Mount                              |         |
| 88   | Portrait                                |         |
| 89   | Weather Machine                         |         |
| 90   | Fossil                                  |         |
| 91   | Fossil Prep Station                     |         |
| 92   | DNA Processor                           |         |
| 93   | Howler                                  |         |
| 94   | Valhowla Treasure                       |         |
| 95   | Chemsynth Processor                     |         |
| 96   | Chemsynth Tank                          |         |
| 97   | Storage Box                             |         |
| 98   | Cooking Oven                            |         |
| 99   | Audio Block                             |         |
| 100  | Geiger Charger                          |         |
| 101  | Adventure Begin                         |         |
| 102  | Tomb Robber                             |         |
| 103  | Balloon                                 |         |
| 104  | Entrance (Punch)                        |         |
| 105  | Entrance (Grow)                         |         |
| 106  | Entrance (Build)                        |         |
| 107  | Artifact                                |         |
| 108  | Jelly Block                             |         |
| 109  | Training Port                           |         |
| 110  | Fishing Block                           |         |
| 111  | Magplant                                |         |
| 112  | Magplant Remote                         |         |
| 113  | CyBlock Bot                             |         |
| 114  | CyBlock Command                         |         |
| 115  | Lucky Token                             |         |
| 116  | GrowScan 9000                           |         |
| 117  | Containment Field Power Node            |         |
| 118  | Spirit Board                            |         |
| 119  | World Architect                         |         |
| 120  | Startopia Block                         |         |
| 122  | Toggleable Multi-Framed Animated Block  |         |
| 123  | Autobreak (Block)                       |         |
| 124  | Autobreak (Trees)                       |         |
| 125  | Autobreak                               |         |
| 126  | Storm Cloud                             |         |
| 127  | Disappear when stepped on               |         |
| 128  | Puddle Block                            |         |
| 129  | Background Block                        |         |
| 130  | Safe Vault                              |         |
| 131  | Angelic Counting Cloud                  |         |
| 132  | Mining Explosives                       |         |
| 134  | Infinity Weather Machine                |         |
| 135  | Sliming Block                           |         |
| 136  | Pain Block (Acid)                       |         |
| 138  | Waving Inflatable Arm Guy               |         |
| 140  | Pineapple Guzzler                       |         |
| 141  | Kranken's Galactic Block                |         |
| 142  | Friends Entrance                        |         |
