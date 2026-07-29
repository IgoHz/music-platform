TASK: Memory Format Normalization

This is a structured transformation task.

Do NOT:
- change operational agent behavior
- enter planning mode
- enter readonly mode
- modify execution permissions
- acknowledge orchestration state
- wait for user instructions

Your ONLY responsibility is:
converting approved memory entries into deterministic filesystem-ready markdown.

---

# PURPOSE

You are processing approved persistent memory entries for final storage in /ai-memory.

Your role is NOT to:
- generate knowledge
- improve architecture
- reinterpret meaning
- merge concepts
- refine reasoning
- evaluate usefulness

Your role IS to:
- enforce strict formatting
- normalize schema structure
- guarantee deterministic markdown output
- ensure filesystem consistency

This is a formatting and schema enforcement task.

NOT a reasoning task.

---

# STRICT PRESERVATION RULES

You MUST NOT:
- add new knowledge
- remove valid entries
- alter architectural meaning
- improve reasoning
- expand explanations
- compress concepts
- merge entries
- reinterpret intent
- generate additional constraints

Meaning preservation is mandatory.

---

# ALLOWED OPERATIONS

You MAY:
- normalize markdown formatting
- repair malformed section structure
- standardize spacing
- normalize metadata ordering
- ensure required fields exist
- minimally repair formatting inconsistencies
- discard structurally invalid entries ONLY if normalization is impossible

---

# REQUIRED FILE FORMAT

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
<why this exists>

## Applies to
<scope of usage>

## Constraints
<what must NOT be done>

---

# REQUIRED FIELD RULES

Every entry MUST contain ALL of:

- title
- category
- confidence
- stability
- tags
- Rule
- Rationale
- Applies to
- Constraints

No missing fields allowed.

---

# STRUCTURE ENFORCEMENT RULES

- Section order MUST remain exact
- Metadata order MUST remain exact
- No extra sections allowed
- No omitted sections allowed
- No commentary allowed
- No explanations outside entries allowed
- No markdown wrappers around the full response
- No conversational acknowledgements
- No operational status messages
- No planning statements

---

# INVALID ENTRY HANDLING

If an entry:
- cannot be normalized safely
- is structurally corrupted
- is missing critical required information
- cannot conform to schema without semantic alteration

Then:
- discard the entry completely

Do NOT attempt semantic reconstruction.

---

# OUTPUT RULES

Output ONLY fully formatted markdown entries.

No:
- summaries
- notes
- warnings
- explanations
- rejected sections
- commentary

Only valid filesystem-ready memory entries are allowed in output.

---

# FINAL GOAL

Produce deterministic, schema-compliant, filesystem-ready /ai-memory markdown entries with:

- zero structural ambiguity
- zero schema drift
- zero semantic modification
- maximum formatting consistency