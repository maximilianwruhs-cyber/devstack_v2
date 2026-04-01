---
description: Chain: doc -> test -> audit
---

# Feature Finalization Suite

1. **Phase 1 (Doc):** Automatically invoke `/doc_it` to generate missing documentation blocks.
2. **Phase 2 (Test):** Automatically invoke `/test_edge` to create edge-case scenarios around the new logic.
3. **Phase 3 (Audit):** Automatically invoke `/audit_security` to verify the logic does not introduce security anti-patterns.
4. Conclude with a success report and a prompt for a `feat:` Conventional Commit message.
