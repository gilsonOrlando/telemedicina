import { Test, TestingModule } from '@nestjs/testing';
import { TuSaludController } from './tu-salud.controller';
import { TuSaludService } from './tu-salud.service';

describe('TuSaludController', () => {
  let tuSaludController: TuSaludController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TuSaludController],
      providers: [TuSaludService],
    }).compile();

    tuSaludController = app.get<TuSaludController>(TuSaludController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tuSaludController.getHello()).toBe('Hello World!');
    });
  });
});
