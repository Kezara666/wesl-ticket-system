# WESL Ticket System

Angular web application for event ticket verification and winner management, built for WESL (Workforce & Employment Services Lanka).

## Overview

Staff log in to verify tickets and manage winning entries through a lightweight admin UI. The app uses standalone Angular components with PrimeNG for a clean, responsive interface.

## Features

- Staff login and authentication flow
- Ticket verification screen (`/ticket`)
- Winner/ticket management UI
- Firebase hosting configuration included

## Tech Stack

- **Angular 18** (standalone components, routing)
- **PrimeNG 18** + PrimeUI themes
- **TypeScript 5.5**
- **Firebase** (deployment)

## Getting Started

### Prerequisites

- Node.js 18+
- Angular CLI 18+

### Install & run

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

### Build

```bash
npm run build
```

## Project Structure

```
src/app/
├── auth/          # Login components
└── ticket-win/    # Ticket verification & winner UI
```

## Author

Kezara Lakshan — [GitHub](https://github.com/Kezara666) · [Portfolio](https://kesara-68dbc.web.app/)
