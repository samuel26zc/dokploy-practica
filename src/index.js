const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const appVersion = process.env.APP_VERSION || '2.0.0';

app.get('/', (req, res) => {
  res.json({
    mensaje: '¡Aplicación actualizada automáticamente con Dokploy CI/CD!',
    version: appVersion,
    institucion: 'Universidad del Quindío',
    programa: 'Ingeniería de Sistemas y Computación',
    curso: 'Administración de Infraestructura de TI',
    plataforma: 'Dokploy PaaS Self-Hosted',
    despliegue: 'Automático vía Git Webhook CI/CD',
    fecha: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    estado: 'saludable',
    app_version: appVersion,
    uptime: Math.round(process.uptime()) + 's',
    version_node: process.version,
    plataforma: 'Dokploy'
  });
});

app.get('/info', (req, res) => {
  res.json({
    app_version: appVersion,
    node_version: process.version,
    platform: process.platform,
    arch: process.arch,
    memory: {
      total: Math.round(require('os').totalmem() / 1024 / 1024) + ' MB',
      free: Math.round(require('os').freemem() / 1024 / 1024) + ' MB'
    },
    env: {
      node_env: process.env.NODE_ENV || 'production',
      app_name: process.env.APP_NAME || 'webapp-uni-quindio',
      db_host: process.env.DB_HOST || 'localhost'
    }
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${port} (v${appVersion})`);
  console.log(`Plataforma: Dokploy PaaS CI/CD`);
});
