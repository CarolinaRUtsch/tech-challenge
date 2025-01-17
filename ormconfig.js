module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 35432,
    username: 'docker',
    password: 'docker',
    database: 'movies',
    entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
    migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
    cli: {
      migrationsDir: './src/shared/infra/typeorm/migrations',
    },
  },
];
