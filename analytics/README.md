# Analytics — How to Diagnose a Video

Fill `performance-tracker.csv` 48 h and 7 days after posting (one row per platform). Then diagnose with this order — stop at the first failing stage:

| Stage | Signal | If weak → it's a... | Fix next time |
|---|---|---|---|
| 1. Stop | 1s/3s retention below channel median | **Hook failure** | New first frame / first line; keep product |
| 2. Hold | Big drop mid-video, low avg watch | **Retention / creative failure** | Tighter pacing, earlier payoff |
| 3. Believe | Comments mention "AI", "fake", glitches | **Generation-quality failure** | Simplify shots; regenerate |
| 4. Love | Low shares/saves/comments but OK watch time | **Creative failure** (not funny enough) | Stronger character beat |
| 5. Click | Good engagement, low profile visits / link clicks | **CTA failure** | Clearer product frame + CTA line |
| 6. Buy | Clicks OK, few orders | **Product failure** (price, reviews, fit) | Try backup product |

Never judge a product on one video. A product is only "failed" after 2+ videos passed stages 1–4 but failed stage 6.
