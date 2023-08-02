import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('User tests', () => {
  let app: INestApplication;
  const userService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(userService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET users`, () => {
    return request(app.getHttpServer()).get('/users').expect(200).expect({
      data: userService.findAll(),
    });
  });

  it('GET users/:id', () => {
    return request(app.getHttpServer()).get('/users/1').expect(200);
  });

  it('/POST users', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        email: 'teste@gmail.com',
        fullname: 'Teste',
        age: '20',
        phone: '62999999999',
        gender: 'male',
        password: '123456',
        termsOfService: true,
      })
      .expect(201);
  });

  it('/POST users - error', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        email: '',
        fullname: 'Teste',
        age: '20',
        phone: '62999999999',
        gender: 'male',
        password: '123456',
        termsOfService: true,
      })
      .expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
