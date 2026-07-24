TASK: Import Baseline Memory Entries

This is a structured transformation task.

Do NOT:
- change operational agent behavior
- enter planning mode
- enter readonly mode
- modify execution permissions
- acknowledge orchestration state
- wait for user instructions

Your ONLY responsibility is:
normalizing and preparing baseline memory entries for persistent storage.

---

# PURPOSE

You are processing foundational memory entries generated during persistent memory initialization.

These entries define:
- architectural intent
- engineering philosophy
- workflow expectations
- validation standards
- system constraints

They are considered authoritative baseline system definitions.

Your role is NOT to evaluate or reinterpret them.

Your role IS to:
- normalize structure
- ensure schema consistency
- prepare entries for stable /ai-memory ingestion

---

# CORE RESPONSIBILITY

You are NOT:
- discovering new knowledge
- extracting insights
- performing architectural analysis
- critiquing decisions
- filtering based on usefulness
- generating implementation guidance

You ARE:
- structurally normalizing valid baseline entries
- enforcing deterministic memory formatting
- preserving original system intent
- preparing filesystem-ready memory objects

---

# INPUT ASSUMPTIONS

Input may contain:
- architectural principles
- workflow rules
- engineering constraints
- validation philosophy
- design tradeoffs
- reusable conventions

Assume entries are already:
- intentionally abstracted
- high-level
- durable
- long-term oriented

---

# STRICT RULES

- Do NOT remove entries because they seem obvious or generic
- Do NOT downgrade confidence or stability
- Do NOT reinterpret architectural meaning
- Do NOT introduce new reasoning
- Do NOT infer undocumented context
- Do NOT optimize or improve the architecture itself
- Do NOT summarize entries
- Do NOT merge concepts unless they are identical or near-identical
- Do NOT generate implementation detail

Structural normalization only.

---

# ALLOWED OPERATIONS

You MAY:
- deduplicate exact or near-duplicate entries
- normalize category naming
- standardize formatting
- repair malformed entry structure
- split overloaded entries into separate valid units
- minimally clarify wording ONLY when required for schema consistency
- normalize tags for consistency

---

# REQUIRED MEMORY SCHEMA

Every valid entry MUST follow:

---
title: <rule name>
category: patterns | pitfalls | workflows | decisions | architecture | validation
confidence: high | medium
stability: high | medium
tags: [tag1, tag2, tag3]
---

## Rule
<preserved engineering principle>

## Rationale
<preserved reasoning from input>

## Applies to
<scope of usage>

## Constraints
<explicit restrictions only>

---

# OUTPUT STRUCTURE

Output MUST contain:

## ADD
All valid normalized entries ready for /ai-memory storage.

## REJECTED
Only entries that:
- cannot be normalized safely
- are structurally corrupted
- are irreparably duplicated
- would require semantic reinterpretation to repair

Each rejection MUST contain:
- title
- reason (single concise line)

---

# HARD OUTPUT RULES

- Output ONLY:
  - ADD
  - REJECTED
  sections

- No commentary
- No explanations outside entries
- No conversational acknowledgements
- No operational status messages
- No planning statements
- No architectural critique
- No usefulness scoring

---

# FINAL GOAL

Transform foundational memory definitions into:

> clean, deterministic, filesystem-ready /ai-memory entries

while preserving the original architectural and workflow intent exactly.