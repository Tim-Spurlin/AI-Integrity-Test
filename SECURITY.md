# Security Policy

## Supported Versions

This project follows semantic versioning (SemVer) where practical. Security fixes are provided for currently supported versions only. If you are unsure what you’re running, assume it is unsupported and upgrade to the latest supported release (or `main`).

| Version            | Supported          |
| ------------------ | ------------------ |
| `main` (rolling)   | :white_check_mark: |
| Latest release tag | :white_check_mark: |
| Older releases     | :x:                |

## Reporting a Vulnerability

Please report security issues **privately**. Do **not** open a public Issue, Pull Request, Discussion, or post details publicly until we have acknowledged and addressed the report.

### Preferred reporting method (GitHub)

1. Go to this repository’s **Security** tab.
2. Select **Advisories**.
3. Create a **New draft security advisory** (or use the **Report a vulnerability** button if visible).
4. Provide the details below.

### What to include in your report

To help us reproduce and fix the issue quickly, include:

- A clear description of the vulnerability and **security impact**
- Affected component(s), file path(s), and endpoint(s) if applicable
- The **exact version**, tag, or **commit SHA** you tested
- Reproduction steps (minimal, deterministic)
- Proof-of-concept (PoC) code or request samples (safe, minimal)
- Any relevant logs, stack traces, screenshots
- Your suggested severity (if you have one) and rationale
- Whether the issue is exploitable by default or requires special configuration

### Our response and disclosure process

- **Acknowledgement:** within **48 hours**
- **Initial triage:** within **5 business days** (severity + scope)
- **Status updates:** at least every **7 days** until resolution
- **Fix strategy:** we prioritize based on impact, exploitability, and affected users
- **Coordinated disclosure:** please allow a reasonable remediation window before public disclosure  
  - We will coordinate an agreed disclosure date once the fix is ready (or earlier if active exploitation is confirmed).

### Severity and scoring

We use **CVSS v3.1** as a guideline and will assign one of the following:

- **Critical:** remote code execution, auth bypass, secret exfiltration at scale
- **High:** significant data exposure, privilege escalation, serious injection flaws
- **Medium:** meaningful security weakness with constraints or mitigations
- **Low:** minor issues, hard-to-exploit scenarios, defense-in-depth gaps

### Safe harbor (good-faith security research)

We support good-faith research that:

- Avoids privacy violations, data destruction, and service disruption (no DoS/DDoS)
- Uses the minimum testing required to prove impact
- Does not access or modify data that is not your own
- Does not use social engineering, phishing, or physical attacks against maintainers/users
- Reports the issue privately and gives us time to remediate

If you follow the above, we will not pursue legal action related to your research.

### Out of scope

The following are generally out of scope unless there is clear, demonstrated security impact:

- Self-XSS without a realistic escalation path
- Missing security headers without exploitability
- Rate-limit issues without a real-world attack scenario
- Vulnerabilities in unsupported versions
- Issues only affecting users with already-compromised devices/accounts

### Credit

If you want public credit, include your preferred name and a link in the report. We will acknowledge valid reports in the advisory/release notes unless you request otherwise.
