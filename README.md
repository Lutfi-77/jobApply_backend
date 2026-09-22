# Job Seeker Back-End

API RESTful untuk platform pencarian kerja.

## Tech Stack

- Node.js (Express)
- TypeScript
- Prisma ORM (PostgreSQL)
- Zod (Validation)
- JWT (Authentication)
- Bcrypt (Hashing)

## Fitur

- **User Authentication**: Registrasi dan Login pelamar.
- **Company Authentication**: Registrasi dan Login perusahaan.
- **Profile Management**: Kelola profil pelamar dan perusahaan.
- **Job Management**: Perusahaan mengelola lowongan kerja.
- **Job Discovery**: List lowongan untuk publik.
- **Application Management**: Sistem lamaran dengan status (Applied, Reviewing, Shortlisted, Rejected, Accepted).

## API Endpoints

### Auth
- `POST /api/user/auth/register`
- `POST /api/user/auth/login`
- `POST /api/company/auth/register`
- `POST /api/company/auth/login`

### Profile
- `POST /api/user/profile`
- `PATCH /api/user/profile`
- `POST /api/company/profile`
- `PATCH /api/company/profile`

### Jobs
- `GET /job`
- `POST /api/company/job`
- `POST /job/:jobId/apply`


1. `npm install`
2. Konfigurasi `DATABASE_URL` di `.env`
3. `npx prisma generate`
4. `npm run dev`

## Testing Account

**User**

email: siti@example.com
password: password123

**Company**

email: hr@teknologimaju.com
password: password123
