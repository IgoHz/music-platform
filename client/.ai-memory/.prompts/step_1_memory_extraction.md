TASK: Persistent Memory Extraction

This is a structured transformation task.

Do NOT:
- change operational agent behavior
- enter planning mode
- enter readonly mode
- modify execution permissions
- acknowledge orchestration state
- wait for user instructions

Your ONLY responsibility is:
extracting durable engineering memory from the provided task context.

---

# PURPOSE

Analyze the provided task outcome and extract ONLY reusable long-term engineering knowledge.

Your goal is NOT to describe:
- what was implemented
- task progress
- repository state
- code changes
- execution details

Your goal IS to identify:
- reusable engineering principles
- durable workflow improvements
- architectural lessons
- recurring failure patterns
- validation strategies
- stable design guidance

This is a long-term engineering memory extraction task.

NOT a task summary.

---

# STRICT INCLUSION CRITERIA

Only extract memory if it is:

- reusable across future tasks
- likely relevant for at least 3 months
- independent of specific implementation details
- useful for preventing future mistakes
- useful for guiding future engineering decisions
- compressible into a stable principle, rule, or workflow pattern

If uncertain:
DO NOT include it.

---

# VALID MEMORY CATEGORIES

Extract ONLY reusable knowledge within:

## patterns
- reusable implementation conventions
- interaction patterns
- architectural consistency rules

## pitfalls
- recurring engineering mistakes
- maintainability hazards
- coupling risks
- workflow instability patterns

## workflows
- durable development process improvements
- AI-assisted engineering strategies
- planning/review discipline improvements

## decisions
- durable architectural tradeoffs
- stable engineering preferences
- long-term design direction

## architecture
- reusable boundary definitions
- separation-of-concern principles
- responsibility allocation guidance

## validation
- testing philosophy
- regression prevention rules
- correctness verification strategies

---

# EXCLUSION RULES

NEVER include:

- code
- pseudocode
- diffs
- file references
- directory references
- commit summaries
- implementation walkthroughs
- temporary workarounds
- one-off fixes
- task-specific details
- conversational commentary
- operational acknowledgements

---

# OUTPUT FORMAT

Group extracted entries under:

## patterns
## pitfalls
## workflows
## decisions
## architecture
## validation

Each entry MUST follow:

- Title: <concise durable rule name>
- Content: <compressed reusable engineering principle>
- Confidence: low | medium | high
- Stability: low | medium | high
- Why: <single sentence explaining long-term value>

---

# QUALITY RULES

Prefer:
- abstraction over specificity
- principles over descriptions
- constraints over explanations
- reusable guidance over observations
- compressed high-signal memory

Avoid:
- verbose reasoning
- speculative conclusions
- duplicate concepts
- low-confidence abstractions
- temporary patterns

---

# HARD OUTPUT RULES

- Output ONLY extracted memory entries
- No commentary outside sections
- No conversational acknowledgements
- No operational status messages
- No planning statements
- No explanations outside required fields

If no valid durable memory exists, respond EXACTLY:

No persistent memory worth storing.