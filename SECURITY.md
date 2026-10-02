# Security Policy

TechSoc takes the security and integrity of our codebase and community platforms seriously.

---

## 1. Security Best Practices

When contributing to this repository, adhere strictly to the following security guidelines:

- **Never Commit Secrets**: Do not commit API keys, authentication tokens, passwords, private certificates, webhooks, or personal credentials to git history.
- **Use Environment Variables**: If secrets or configuration keys are introduced in the future, access them strictly through environment variables and ensure they are added to `.gitignore`.
- **Review Diffs Carefully**: Before pushing commits or opening pull requests, review all file changes and diffs to confirm no credentials or sensitive internal URLs are accidentally included.
- **Do Not Disclose Publicly**: If you observe or suspect exposed credentials or security vulnerabilities, do not file a public GitHub issue or discuss them publicly in pull requests or community channels.

---

## 2. Reporting a Vulnerability

If you discover a security vulnerability or accidental credential exposure in this project:

- **Report Privately**: Please report the issue privately to the repository maintainers or designated TechSoc leadership via GitHub Private Vulnerability Reporting or direct repository maintainer contact.
- **Provide Context**: Include a detailed description of the vulnerability, steps to reproduce, and potential impact.
- **Allow Time for Remediation**: Please give the maintainers reasonable time to address and resolve the vulnerability before any public disclosure.
