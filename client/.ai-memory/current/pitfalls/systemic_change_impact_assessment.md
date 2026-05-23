title: High-Risk Utility Change Validation
category: pitfalls
confidence: high
stability: high
tags: Validation, UX
---
Rule: Treating a utility value change (e.g., altering base text size) as high-risk is mandatory. Validation must extend beyond visual aesthetic checks, encompassing functional layout, required interaction states, and overall component behavior.
Rationale: Minor aesthetic changes can cascade into major, unpredictable layout and behavioral regressions that fail even if the component 'looks stable.'
Applies to: Any modification affecting base design tokens such as font size, line height, or grid dimensions.
Constraints: Do not rely solely on visual Quality Assurance; automated tests for layout and state must be run (e.g., focus/disabled states).