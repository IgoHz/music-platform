title: StrictCompileTargetSeparation
category: decisions
confidence: high
stability: high
tags: typescript, build, deployment
---
Rule
Compile and manage dependency artifacts using distinct and explicit build configurations for runtime versus development/build targets, ensuring that only necessary code paths and dependencies are present in the final deployment artifact.
Rationale
This minimizes the attack surface, reduces deployment size, and ensures that dependencies required only for local development or testing are never bundled into the production runtime.
Applies to
The entire build pipeline and definition of service boundaries.
Constraints
Development-only logging, unused external mocks, and development-specific utilities must have build-time conditional compilation guards and fail compilation if activated in a production build.