# 🏛️ DevStack_v2 — Sovereign Software Factory

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](AOS/LICENSE)
[![Platform: Ubuntu](https://img.shields.io/badge/platform-Ubuntu%2024.04-E95420?logo=ubuntu&logoColor=white)](https://ubuntu.com/)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-3776AB?logo=python&logoColor=white)](https://python.org)

A fully local, privacy-first AI development stack that treats LLMs as first-class infrastructure. DevStack_v2 orchestrates model loading, energy-aware routing, GPU inference, and vector-backed RAG — all running on your own hardware, with zero cloud dependency.

---

## What This Is

Most AI setups send your data to someone else's server. This stack doesn't.

DevStack_v2 is a monorepo containing everything needed to run a **sovereign AI workstation** on Ubuntu. It hot-swaps quantized models in and out of GPU VRAM based on task complexity and real-time Intel RAPL energy readings, routes prompts to the cheapest-sufficient model, and stores long-term context locally via pgvector and an Obsidian vault.

## Repository Map

```
DevStack_v2/
├── AOS/                        ← Core gateway (FastAPI + Python)
├── AOS VS Codium Extension/    ← VS Codium sidebar for live telemetry
├── BitNet/                     ← 1-bit LLM inference engine (C++)
├── TurboQuant/                 ← 4-bit KV cache compression (llama.cpp fork)
├── Obsidian_Vault/             ← Agent memory & evaluation logs
└── docker-compose.yml          ← One-command orchestration
```

---

## Sub-Projects

### [AOS (AgenticOS)](AOS/README.md)

The brain of the stack. A FastAPI gateway that:

- **Routes prompts** to the right model based on complexity (tiny vs. heavy)
- **Measures energy** per inference via Intel RAPL (Joules, Watts)
- **Scores quality** using LLM-as-Judge evaluation
- **Runs model auctions** — an EMA broker picks the most cost-efficient model
- **Manages VRAM** — hot-swaps models without restarting servers

📐 [Architecture Guide (DDD)](AOS/ARCHITECTURE.md) · 📦 [Python package on PyPI-style install](AOS/pyproject.toml)

### [AOS VS Codium Extension](AOS%20VS%20Codium%20Extension/README.md)

A TypeScript VS Codium extension that surfaces AOS telemetry directly in your editor sidebar — energy consumption, model leaderboard, and inference stats in real time.

### [BitNet](BitNet/README.md)

Microsoft's 1-bit LLM framework, configured for local inference. Runs ultra-efficient models that use ternary weights (`{-1, 0, 1}`) for drastically reduced memory and compute requirements.

### [TurboQuant](TurboQuant/README.md)

A custom fork of `llama.cpp` with shared-memory KV cache optimizations. Designed for large context windows on consumer GPUs (tested on GTX 1070 eGPU). Runs as a standalone inference server on port `1235`.

### Obsidian_Vault

Markdown-based episodic memory. Agents write evaluation logs and benchmark results here. AOS reads from the vault for stigmergic coordination — agents communicate by modifying shared artifacts rather than direct messaging.

---

## Quick Start

### Option 1: Docker (recommended)

```bash
git clone https://github.com/maximilianwruhs-cyber/devstack_v2.git
cd devstack_v2
cp .env.example .env        # Configure your model paths and API keys
docker compose up -d         # Starts AOS, TurboQuant, and pgvector
```

Verify:
```bash
curl http://localhost:8000/health   # AOS Gateway
curl http://localhost:1235/health   # TurboQuant GPU Engine
```

### Option 2: Local Development

```bash
cd AOS
python3 -m venv .venv && source .venv/bin/activate
pip install -e .               # Core gateway
pip install -e '.[rag]'        # + RAG pipeline (pgvector + llama-index)
PYTHONPATH=src python3 -m aos.gateway.app
```

---

## Architecture Overview

```
┌────────────────────────────────────┐
│         VS Codium + Continue.dev   │  ← Developer IDE
└──────────────┬─────────────────────┘
               │ HTTP
┌──────────────▼─────────────────────┐
│       AOS Gateway (:8000)          │  ← FastAPI — prompt triage,
│  ┌─────────┐ ┌──────────┐         │     auth, energy metering,
│  │ Triage  │ │ Evaluator│         │     shadow evaluation
│  └────┬────┘ └──────────┘         │
│       │                            │
│  ┌────▼──────────────────────┐    │
│  │   Market Broker (EMA)     │    │  ← Picks cheapest-sufficient model
│  └────┬──────────────────────┘    │
└───────┼────────────────────────────┘
        │
   ┌────▼────┐    ┌──────────────┐
   │ LM      │    │ TurboQuant   │
   │ Studio  │    │ GPU Engine   │
   │ (:1234) │    │ (:1235)      │
   └─────────┘    └──────────────┘
        ▲                ▲
        │                │
   Tiny models      Heavy models
   (0.5B–3B)        (7B–35B)
```

---

## Services & Ports

| Service | Port | Purpose |
|---------|------|---------|
| **AOS Gateway** | `8000` | FastAPI inference router, energy metering, model auction |
| **LM Studio** | `1234` | Primary model server (tiny/medium models) |
| **TurboQuant** | `1235` | GPU-accelerated heavy model server |
| **pgvector** | `5432` | PostgreSQL + vector embeddings for RAG |

---

## Key Documentation

| Document | What It Covers |
|----------|----------------|
| [AOS Architecture Guide](AOS/ARCHITECTURE.md) | DDD structure, import paths, how to add features |
| [AOS README](AOS/README.md) | Installation, project structure, ecosystem links |
| [Extension CHANGELOG](AOS%20VS%20Codium%20Extension/CHANGELOG.md) | VS Codium extension release history |
| [Environment Variables](.env.example) | All configurable settings with defaults |

---

## License

MIT — see individual sub-project `LICENSE` files.
