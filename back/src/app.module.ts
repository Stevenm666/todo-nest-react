import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { PriorityModule } from './priority/priority.module'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ 
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'steven666',
      database: 'todo',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TaskModule,
    PriorityModule
  ],
})
export class AppModule {}
