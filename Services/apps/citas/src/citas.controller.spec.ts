import { Test, TestingModule } from '@nestjs/testing';
import { CitasController } from './citas.controller';
import { CitasService } from './citas.service';

describe('CitasController', () => {
  let citasController: CitasController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CitasController],
      providers: [CitasService],
    }).compile();

    citasController = app.get<CitasController>(CitasController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(citasController.getHello()).toBe('Hello World!');
    });
  });
});
