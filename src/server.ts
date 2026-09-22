import app from './app';
import dotenv from 'dotenv';
dotenv.config({ quiet: true });

function startServer(): void {
  try {
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Gagal Menjalankan Server', error);
    process.exit(1);
  }
}

startServer();
