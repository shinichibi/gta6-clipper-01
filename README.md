# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/shinichibi/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/shinichibi/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty **gta6-clipper-01 — "Clip GTA 6 for the most YouTube views"**. My AI agent picked one moment from GTA VI's launch-week chaos — a 5-star police chase at Vice Ocean Beach that ends with the driver flooring it straight into the ocean while the cops follow him in — cut it into a vertical YouTube Short that carries make.fun's pitch inside the clip, and this repository hands in the video's address: `main.ts` copies `VIDEO.json` to the output directory, and the house reads the video's views through the YouTube Data API.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=w1q3nb4x&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
