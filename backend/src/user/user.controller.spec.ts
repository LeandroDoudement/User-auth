import { Test } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaService],
    }).compile();

    userService = moduleRef.get<UserService>(UserService);
    userController = moduleRef.get<UserController>(UserController);
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const userList: any = [
        {
          id: 1,
          age: '20',
          email: 'johndoe@example.com',
          fullname: 'John Doe',
          phone: '1234567890',
          gender: 'male',
          termsOfService: true,
          password: '123456',
        },
      ];

      const result = {
        totalCount: userList.length,
        entries: [userList],
      };

      jest
        .spyOn(userService, 'findAll')
        .mockImplementation(() => Promise.resolve(result));

      expect(await userController.findAll({})).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const result: any = {
        id: 1,
        age: 20,
        email: 'johndoe@example.com',
        fullname: 'John Doe',
        phone: '1234567890',
        gender: 'male',
        password: '123456',
        termsOfService: true,
      };
      jest
        .spyOn(userService, 'findOne')
        .mockImplementation(() => Promise.resolve(result));

      expect(await userController.findOne('1')).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a user', async () => {
      const user: any = {
        age: 20,
        email: 'johndoe@example.com',
        fullname: 'John Doe',
        phone: '1234567890',
        gender: 'male',
        password: '123456',
        termsOfService: true,
      };

      jest
        .spyOn(userService, 'create')
        .mockImplementation(() => Promise.resolve(user));

      expect(await userController.create(user)).toBe(user);
    });
  });
});
