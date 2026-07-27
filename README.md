# @opperai/n8n-nodes-opper

This is an n8n community node for [Opper](https://opper.ai) — the AI gateway for agents. It gives your n8n workflows access to 300+ AI models (Anthropic, OpenAI, Google, Mistral, and many more) through one EU-hosted, GDPR-compliant gateway, with unified billing, tracing, and Opper's control plane (Route, Observe, Steer, Guard, Comply).

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation:

**Settings → Community Nodes → Install** and enter `@opperai/n8n-nodes-opper`.

## Nodes

### Opper Chat Model

A chat-model sub-node, used the same way as the built-in OpenAI / OpenRouter chat model nodes: attach it to an **AI Agent**, **Basic LLM Chain**, or any other node that accepts a language-model connection.

- The model dropdown is loaded live from Opper's catalogue — pick any of 300+ models by their Opper ID (e.g. `anthropic/claude-sonnet-4-6`, `openai/gpt-5-nano`, `mistralai/mistral-large-eu`).
- Supports the standard sampling options (temperature, top-p, penalties, max tokens), JSON mode, timeouts, and retries.

## Credentials

Create an **Opper API** credential:

| Field | Value |
|---|---|
| API Key | Your Opper API key (`op-…`) from [platform.opper.ai](https://platform.opper.ai) |
| Base URL | `https://api.opper.ai/v3/compat` (default — leave as is) |

The credential test calls Opper's OpenAI-compatible `GET /models` endpoint.

## Why Opper?

- **EU-hosted, GDPR-compliant**: inference routed and processed in the EU.
- **One key, 300+ models**: no per-provider accounts or keys.
- **Unified billing and cost tracking** across all providers.
- **Control plane**: routing, observability/evals, steering, guardrails, and compliance controls on top of every call.

## Compatibility

Requires n8n version 1.94.0 or later (community sub-node support). Node.js 20.15+.

## Resources

- [Opper documentation](https://docs.opper.ai)
- [Opper model catalogue](https://opper.ai/models)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

## Development

```bash
npm install
npm run build     # compile TypeScript + copy icons to dist/
npm run lint
```

To test locally, link the package into your n8n custom nodes directory:

```bash
npm run build
npm link
mkdir -p ~/.n8n/custom && cd ~/.n8n/custom
npm link @opperai/n8n-nodes-opper
n8n start
```

## License

[MIT](LICENSE.md)
