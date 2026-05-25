title: Plan-Driven Development Cadence
category: workflows
confidence: high
stability: high
tags: [workflow, planning, discipline]
---
## Rule
Development cycles must enforce a mandatory sequence: Requirement Definition $\to$ Architecture Planning $\to$ Implementation $\to$ Structured Review. Implementation (BUILD) is never permitted before documented plan approval (THINK $\to$ REVIEW).
## Rationale
Reduces overhead by ensuring that engineering effort is always focused on solving a pre-validated design problem.
## Applies to
All non-trivial feature implementation and significant architectural changes.
## Constraints
No code commits are permitted that do not correspond directly to the immediate steps outlined in an approved design plan.
---