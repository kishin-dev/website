# Pets

Pets are yokai companions that float next to you and give bonuses. They're configured in [pets.yml](?p=core&page=config-pets).

## Slots and storage

- **Storage** holds every pet a player owns (up to `storage-limit`, 250 by default).
- **Summon slots** decide how many pets are out at once. A pet in a slot is *summoned*: it follows you and its perks work. Slots come from the player's rank:

```yaml
slots:
  default: 1
  YUREI: 1
  KAPPA: 2
  NAMAHAGE: 3
  KITSUNE: 4
  KISHIN: 5
  staff: 5
```

A permission `kishin.pets.slots.<n>` gives `n` slots if that's more (up to 7). If a player loses a rank, extra pets are put away automatically.

## Rarities and upgrading

Pets come in five rarities: **common, uncommon, rare, epic, legendary**. Rarer pets start with small bonuses but gain much more per level and have a higher max level.

Pets level up by **upgrading** in `/pets` with in-game **XP levels + money**:

```
XP levels = levels + levels-per-level * (level - 1)
money     = money * money-growth ^ (level - 1)
perk      = base + per-level * (level - 1)
```

Shift-click the upgrade button to upgrade as many times as you can afford. Passive levelling from skill XP can be turned back on with `xp-share` (0 = off).

## Merging

Two pets of the same rarity merge into **one random pet of the next rarity** (level 1). Each pet's `merge-weight` sets its chance, and `merge-cost` on the rarity is the money price. The result hatches in front of the player with the egg animation.

## Disposal

Unwanted pets turn into in-game **XP points**: `dispose-xp + dispose-xp-per-level * (level - 1)`. Players can dispose one pet, or every pet of a rarity at once - locked and summoned pets are always skipped.

## Locking

Locked pets can't be merged, disposed or taken out as an item. Players toggle it on the pet's page.

## Pet eggs

Eggs are textured heads with a weighted pool of pets. Right-click one to play the hatching animation - the egg wobbles, cracks and bursts, and the pet rises out of it.

```
/pets egg <player> <rarity> [amount]
```

In rewards (crates, daily, challenges, boss rewards):

```yaml
reward: {pet-eggs: ["RARE:1"]}
```

## Pet items

`/pets give <player> <type> [level]` gives a tradeable pet item. Players right-click it to add the pet to their storage, and can turn a stored pet back into an item from its page.

## Heads

Every pet, egg and store rank uses a custom head. `texture` accepts a textures.minecraft.net hash, a full texture URL, or a base64 "Value" from a head website.
