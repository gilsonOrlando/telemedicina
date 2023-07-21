import { Test, TestingModule } from '@nestjs/testing';
import { ConsultasController } from './consultas.controller';
import { ConsultasService } from './consultas.service';

describe('ConsultasController', () => {
  let consultasController: ConsultasController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConsultasController],
      providers: [ConsultasService],
    }).compile();

    consultasController = app.get<ConsultasController>(ConsultasController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(consultasController.getHello()).toBe('Hello World!');
    });
  });
});
