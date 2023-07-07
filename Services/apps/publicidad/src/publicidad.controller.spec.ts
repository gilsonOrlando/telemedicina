import { Test, TestingModule } from '@nestjs/testing';
import { PublicidadController } from './publicidad.controller';
import { PublicidadService } from './publicidad.service';

describe('PublicidadController', () => {
  let publicidadController: PublicidadController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PublicidadController],
      providers: [PublicidadService],
    }).compile();

    publicidadController = app.get<PublicidadController>(PublicidadController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(publicidadController.getHello()).toBe('Hello World!');
    });
  });
});
