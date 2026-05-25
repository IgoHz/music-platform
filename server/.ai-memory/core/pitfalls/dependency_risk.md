title: Resilient Dependency Modeling
category: pitfalls
confidence: high
stability: high
tags: [resilience, dependencies, failure-handling]
---
## Rule
Any service or external dependency must be treated as unstable. All critical functionality dependent on external inputs must implement circuit breakers, sensible timeouts, and defined graceful degradation paths.
## Rationale
Ensures business continuity and system stability even when dependent external services fail or degrade.
## Applies to
Any code utilizing external APIs, network calls, or third-party services.
## Constraints
Failure scenarios must not impede core business workflows; degradation must always be graceful and predictable.
---