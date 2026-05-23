title: Explicit State Mutation Protocol
category: patterns
confidence: high
stability: high
tags: workflow, predictability
---
Rule
Any workflow that results in a change to domain state must traverse a mandatory, traceable cycle: (Event $\to$ Handler $\to$ Dispatch $\to$ State Update $\to$ UI Re-render).
Rationale
Establishes a predictable, observable data flow that severely simplifies debugging and ensures every state change is demonstrably linked back to a specific user or system initiating event.
Applies to
Any user interaction or background process that ultimately triggers a change in the application's core data state.
Constraints
Direct, uncontrolled manipulation of state stores from outside the defined dispatch/reducer pattern is forbidden.