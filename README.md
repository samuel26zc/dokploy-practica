# Práctica: Administración de Contenedores con Dokploy PaaS

**Universidad del Quindío**  
**Facultad de Ingeniería de Sistemas y Computación**  
**Curso:** Administración de Infraestructura de TI  
**Estudiante:** Samuel (samuel26zc)

---

## Descripción del Proyecto

Este repositorio contiene la aplicación Node.js / Express y las configuraciones de infraestructura correspondientes a la práctica integral de administración y despliegue de contenedores utilizando **Dokploy PaaS**, **Docker Swarm**, **Traefik**, y **Docker Compose**.

## Estructura del Repositorio

- `package.json`: Definición del proyecto Node.js Express y dependencias (`express`, `mysql2`).
- `src/index.js`: Servidor API Express con endpoints `/`, `/health`, y `/info`.
- `docker-compose.yml`: Configuración multi-servicio para la Fase 5 (Node.js, MongoDB, MySQL, PHPMyAdmin).
- `.dockerignore`: Archivos y directorios excluidos de los contextos de compilación.
- `.env`: Variables de entorno base para despliegue.

## Endpoints de la Aplicación

- `GET /`: Información general del despliegue, institución y plataforma PaaS.
- `GET /health`: Estado de salud, uptime del proceso y versión de Dokploy.
- `GET /info`: Información de la plataforma (versión Node, arquitectura, memoria del sistema).

## Tecnologías Utilizadas

- **PaaS:** Dokploy v0.30+
- **Reverse Proxy:** Traefik v3
- **Container Orchestration:** Docker Engine / Docker Swarm
- **Runtime:** Node.js 20 LTS (Nixpacks / Docker)
- **Databases:** MySQL 8.0, PostgreSQL 16, Redis 7, MongoDB 7
