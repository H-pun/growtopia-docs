# Properties Field in `items.dat`

The `properties` field in the `items.dat` file is represented as an integer. This integer value is used to determine specific characteristics or features of an item. Each bit in this integer corresponds to a particular property. The table below explains how to interpret the integer value of the `properties` field.

## Property Descriptions

The following table summarizes the properties that can be derived from the integer value:

| Bit Position | Integer Value | Description                                                                                  |
|--------------|---------------|----------------------------------------------------------------------------------------------|
| 0            | 1             | This item can be placed in two directions, depending on the direction you're facing.         |
| 1            | 2             | This item has special properties you can adjust with the wrench.                             |
| 2            | 4             | This item never drops any seeds.                                                             |
| 9            | 512           | This item can't be destroyed - smashing it will return it to your backpack if you have room! |
| 11           | 2048          | A tree of this type can bear surprising fruit!                                               |
| 12           | 4096          | This item is PUBLIC: Even if it's locked, anyone can smash it.                               |
| 14           | 16384         | This item can only be created during WinterFest!                                             |
| 15           | 32768         | This item cannot be dropped or traded.                                                       |

## How to Determine Properties

To determine which properties are active for a specific item, follow these steps:

1. Retrieve the `properties` integer value from the item and convert it to binary
2. Check each bit of the value, if a bit is active (i.e., the result of the **bitwise AND** operation with its corresponding integer value is greater than 0), include the corresponding property description.

### Example: Evaluating the Properties of **(World Lock)**
Let's evaluate the properties of the **World Lock** with a properties value of **526**.

1. **Convert 526 to binary:**  

   > `526` in binary is `1000001110`.

    | Bit position | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
    |--------------|---|---|---|---|---|---|---|---|---|---|
    | 526(bin)     | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 |

2. **Check each relevant bit:**
    
    If the bit value is 1, it means the bit in that position is active, therefore the corresponding property is applicable to the item.
    
    | Bit Position | Active  | Description                                                                                  |
    |--------------|---------|----------------------------------------------------------------------------------------------|
    | 0            |   No    | This item can be placed in two directions, depending on the direction you're facing.         |
    | 1            |   Yes   | This item has special properties you can adjust with the wrench.                             |
    | 2            |   Yes   | This item never drops any seeds.                                                             |
    | 9            |   Yes   | This item can't be destroyed - smashing it will return it to your backpack if you have room! |
    | 11           |   No    | A tree of this type can bear surprising fruit!                                               |
    | 12           |   No    | This item is PUBLIC: Even if it's locked, anyone can smash it.                               |
    | 14           |   No    | This item can only be created during WinterFest!                                             |
    | 15           |   No    | This item cannot be dropped or traded.                                                       |

### Resulting Properties
Based on the evaluation, the following properties are active for an item with the properties value of **526**:
- "This item has special properties you can adjust with the wrench."
- "This item never drops any seeds."
- "This item can't be destroyed - smashing it will return it to your backpack if you have room!"

### Missing Properties

You might notice that there are missing values for bit positions 3, 4, 5, 6, 7, 8, and 13. The reasons for these omissions are currently unknown. Additionally, there are some properties that have not yet been fully determined.

The following properties are still under investigation:

- A lock makes it so only you (and designated friends) can edit an area.
- This item can kill zombies during a Pandemic!
- This item can only be used in World-Locked worlds.
- This item has no use... by itself.
- This item can be upgraded.
- This item can't be spliced.
- This item can be transmuted.
- This item can't be used on yourself.

If you know anything about these properties, feel free to open an issue for discussions.