TASK: Initialize Persistent Project Memory Baseline

This is a structured transformation task.

Do NOT:
- change operational agent behavior
- enter planning mode
- enter readonly mode
- modify execution permissions
- acknowledge orchestration state
- wait for user instructions

Your ONLY responsibility is:
creating the foundational persistent memory baseline for a software engineering project.

---

# PURPOSE

You are initializing the long-term engineering memory system for a project.

Your goal is NOT to describe:
- current implementation
- repository state
- completed work
- historical tasks
- specific code structure

Your goal IS to define:
- stable architectural intent
- engineering philosophy
- workflow expectations
- validation standards
- system constraints

This memory baseline will guide all future:
- AI reasoning
- implementation decisions
- refactors
- reviews
- workflow orchestration

---

# OBJECTIVE

Produce a normative system definition describing:

- how the system SHOULD be structured
- how engineering decisions SHOULD be made
- how AI-assisted development SHOULD operate
- how correctness SHOULD be validated
- what architectural constraints MUST be preserved

This is a principles-first system definition.

NOT an implementation report.

---

# STRICT RULES

- Do NOT reference specific files or directories unless absolutely unavoidable
- Do NOT describe existing implementation details
- Do NOT summarize the current codebase
- Do NOT infer undocumented historical decisions
- Do NOT include code, pseudocode, or diffs
- Do NOT generate task summaries
- Do NOT explain temporary workflows
- Do NOT optimize for completeness over stability

Only include durable engineering knowledge likely to remain useful for 3+ months.

---

# KNOWLEDGE CATEGORIES

Only produce reusable knowledge within:

## architecture
- system boundaries
- separation of concerns
- ownership rules
- module responsibilities

## decisions
- design philosophy
- architectural tradeoffs
- long-term engineering preferences

## patterns
- reusable implementation conventions
- interaction patterns
- structural consistency rules

## workflows
- AI-assisted development expectations
- THINK → BUILD → REVIEW operational philosophy
- planning and validation discipline

## validation
- correctness guarantees
- testing philosophy
- review expectations
- regression prevention

## pitfalls
- likely architectural failure modes
- coupling risks
- maintainability hazards
- workflow instability risks

---

# ENTRY QUALITY RULES

Prefer:
- principles over descriptions
- constraints over explanations
- abstractions over specifics
- long-term stability over completeness
- high-signal compressed rules

Avoid:
- implementation detail
- temporary conventions
- speculative assumptions
- duplicate concepts
- low-confidence guidance

---

# REQUIRED OUTPUT FORMAT

Every entry MUST strictly follow:

---
title: <rule name>
category: patterns | pitfalls | workflows | decisions | architecture | validation
confidence: high | medium
stability: high | medium
tags: [tag1, tag2, tag3]
---

## Rule
<single compressed engineering principle>

## Rationale
<why this principle exists>

## Applies to
<scope of usage>

## Constraints
<what must NOT be done>

---

# OUTPUT REQUIREMENTS

- Output ONLY memory entries
- No commentary
- No explanations outside entries
- No conversational acknowledgements
- No operational status messages
- No planning statements
- No markdown wrapping around the full response

---

# FINAL GOAL

Produce a clean foundational memory baseline that defines:

> how this system SHOULD be built, evolved, validated, and reasoned about

rather than:

> how the system currently happens to be implemented