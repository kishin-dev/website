# Scoreboard & tab list

The sidebar ([scoreboard.yml](?p=core&page=config-scoreboard)) and the tab list ([tab.yml](?p=core&page=config-tab)) share the same placeholders, conditions and **animations**. Changes apply with `/kishin reload`.

## Refresh rates

```yaml
update-interval-ticks: 2   # animation frame rate (1 = smoothest)
data-refresh-ticks: 20     # how often values like balance are re-read
```

Only animated lines are redrawn every frame, and only lines that changed are sent to players, so smooth animations stay cheap.

## Animations

Effect tags work in every line, title, header and footer:

| Tag | Effect |
|---|---|
| `<pulse:#A:#B[:#C..][:speed]>text</pulse>` | colour breathes between colours |
| `<pulsegradient:#A:#B[:speed[:strength]]>text</pulsegradient>` | a gradient that brightens and dims |
| `<flash:#A:#B[:interval]>text</flash>` | colour snaps between colours |
| `<blink[:on[:off]]>text</blink>` | text blinks |
| `<wave:#A:#B[:speed[:spread]]>text</wave>` | a moving gradient |
| `<flow[:speed[:spread]]>text</flow>` | a moving rainbow |
| `<shine:#base:#glow[:speed[:width]]>text</shine>` | a light sweeps across the text |
| `<typewriter[:speed[:hold]]>text</typewriter>` | types itself out, holds, repeats |
| `<scroll:width[:speed]>long text</scroll>` | a marquee |
| `<glitch[:chance[:interval]]>text</glitch>` | letters flicker |

Speeds are in ticks (20 = 1 second). `pulse`, `flash` and `blink` keep formatting inside them; the letter-by-letter effects need formatting **outside**:

```yaml
title: "<bold><pulsegradient:#D62839:#FF5A6A:60:40>✦ Kishin SkyBlock ✦</pulsegradient></bold>"
```

**Frame animations** switch between whole lines you list:

```yaml
animations:
  tips:
    interval: 120          # ticks per frame
    mode: loop             # loop | bounce | random
    frames:
      - "<gray>Tip: pets hatch from eggs"
      - "<gray>Tip: /buy opens the store"
```

Use it anywhere with `{anim:tips}`.

## Right column (scoreboard)

`{right}` puts the rest of the line on the right edge:

```yaml
- " <gray>Balance{right}<white>$<balance>"
```

## Conditions

Start a line with one or more conditions; `!` negates:

```
[has-island] [no-island] [staff] [not-staff] [prestiged]
[permission:node] [world:arenas] [rank:KISHIN] [min-rank:KITSUNE]
[flag:boss-alive] [flag:boss-nearby] [flag:event-active] [flag:has-pet] [flag:flying]
```

## Several boards

Extra boards replace the default one while their conditions hold - the highest `priority` wins. A board can also rotate `pages` every `page-seconds`:

```yaml
boards:
  boss:
    priority: 10
    conditions: "[flag:boss-nearby]"
    title: "<bold>☠ WORLD BOSS"
    lines: [...]
```

## Tab list grid

With `grid.enabled: true` the tab list is a fixed 4 x 20 grid of info cells (`grid.columns`), and real players are hidden from the list. With `false` it's the normal player list using `player-list-name`.

See [Placeholders](?p=core&page=placeholders) for every value you can show.
