# NEXT-COMMERCE

## About The Project

An exploratory Next.js e-commerce prototype for selling digital products, from the original project description. It is marked as abandoned in that description.

It has product management and an administration area for sales. The Prisma schema models products (with a file and an image), users, orders and expiring downloads, stored in PostgreSQL.

### Built With

- Next.js 14 and React 18
- TypeScript
- Prisma and PostgreSQL
- Tailwind CSS and Radix UI
- Biome
- Docker Compose

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js and npm

### Installation

```sh
cp .env.example .env   # then set the PostgreSQL values
```

### Running

```sh
make docker-watch      # builds and runs the app and PostgreSQL with Compose watch
make prisma-migrate    # generates the Prisma client and applies the initial migration
```

The app is served on http://localhost:3000.

## Roadmap

The project is abandoned and not planned to be developed further.

## License

No license file is present in this repository.

## Contact

Dyrits - https://github.com/Dyrits
