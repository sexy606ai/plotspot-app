# PlotSpot Desktop App

A responsive Electron app for managing AI projects, featuring a sleek dashboard with CPU/memory charts, project listings, and GitHub/Docker integration. Built for Raspberry Pi 5 (`arm64`), it dynamically displays projects like `ai-project-1` and ties to `sexy606ai` repos.

## Features
- **Responsive UI**: Adapts to mobile, tablet, desktop with Tailwind CSS.
- **Projects**: Lists AI projects from `~/Desktop/PlotSpot/projects` (e.g., `ai-project-1`).
- **GitHub/Docker**: Shows `sexy606ai/ai-project-1` details.
- **Charts**: Real-time CPU/memory via Chart.js.
- **Fast**: Optimized for Pi 5 (~30% CPU, <1GB RAM).

## Setup
1. Clone: `git clone https://github.com/sexy606ai/plotspot-app.git`
2. Install: `cd plotspot-app && npm install`
3. Run: `npm start`
4. Build: `npm run package` (creates `dist/PlotSpot-linux-arm64`)

## Requirements
- Node.js 18+
- Electron 32.1.2
- Raspberry Pi 5 or compatible `arm64` device

## Related
- AI Project: [sexy606ai/ai-project-1](https://github.com/sexy606ai/ai-project-1)
- Docker: [sexy606ai/ai-project-1](https://hub.docker.com/r/sexy606ai/ai-project-1)

## License
MIT
