import bcrypt from 'bcrypt';
import { prisma } from '../src/config/postgres';

async function main() {
  await prisma.application.deleteMany();
  await prisma.job.deleteMany();
  await prisma.companyProfile.deleteMany();
  await prisma.companyAccount.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  const hashedPassword = await bcrypt.hash('password123', 10);

  const user1 = await prisma.user.create({
    data: {
      fullName: 'Budi Santoso',
      email: 'budi@example.com',
      password: hashedPassword,
      profile: {
        create: {
          address: 'Jl. Merdeka No. 10, Jakarta',
          skills: ['React', 'TypeScript', 'Node.js'],
          bio: 'Frontend developer dengan pengalaman 2 tahun.',
          cv: 'https://example.com/cv/budi.pdf',
          portfolio: 'https://budi-portfolio.example.com',
        },
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      fullName: 'Siti Aminah',
      email: 'siti@example.com',
      password: hashedPassword,
      profile: {
        create: {
          address: 'Jl. Sudirman No. 5, Bandung',
          skills: ['Node.js', 'Express', 'PostgreSQL'],
          bio: 'Backend developer yang suka membangun API.',
          cv: null,
          portfolio: null,
        },
      },
    },
  });

  const company1 = await prisma.companyAccount.create({
    data: {
      companyName: 'PT Teknologi Maju',
      email: 'hr@teknologimaju.com',
      password: hashedPassword,
      companyProfiles: {
        create: {
          address: 'Jl. Gatot Subroto No. 20, Jakarta',
          logo: 'https://example.com/logo/teknologi-maju.png',
          bio: 'Perusahaan teknologi yang fokus pada solusi digital untuk UMKM.',
        },
      },
    },
  });

  const company2 = await prisma.companyAccount.create({
    data: {
      companyName: 'Startup Digital Nusantara',
      email: 'hr@startupdigital.com',
      password: hashedPassword,
      companyProfiles: {
        create: {
          address: 'Jl. Diponegoro No. 8, Surabaya',
          logo: null,
          bio: 'Startup yang bergerak di bidang e-commerce.',
        },
      },
    },
  });

  const job1 = await prisma.job.create({
    data: {
      companyId: company1.id,
      title: 'Frontend Developer',
      description:
        'Mengembangkan antarmuka web menggunakan React dan TypeScript untuk produk internal perusahaan.',
      salary: '8000000',
      type: 'Full-time',
      location: 'Jakarta, Indonesia',
    },
  });

  const job2 = await prisma.job.create({
    data: {
      companyId: company1.id,
      title: 'UI/UX Designer',
      description:
        'Merancang antarmuka dan pengalaman pengguna untuk aplikasi mobile dan web.',
      salary: '7000000',
      type: 'Full-time',
      location: 'Jakarta, Indonesia',
    },
  });

  const job3 = await prisma.job.create({
    data: {
      companyId: company2.id,
      title: 'Backend Engineer Intern',
      description:
        'Membantu membangun REST API menggunakan Node.js dan Express untuk platform e-commerce.',
      salary: null,
      type: 'Internship',
      location: 'Remote',
    },
  });

  await prisma.application.create({
    data: {
      userId: user1.id,
      jobId: job1.id,
      status: 'Applied',
    },
  });

  await prisma.application.create({
    data: {
      userId: user1.id,
      jobId: job3.id,
      status: 'Reviewing',
    },
  });

  await prisma.application.create({
    data: {
      userId: user2.id,
      jobId: job2.id,
      status: 'Shortlisted',
    },
  });

  console.log('Seeding selesai ✅');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
