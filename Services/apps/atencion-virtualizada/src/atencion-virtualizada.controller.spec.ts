import { Test, TestingModule } from '@nestjs/testing';
import { AtencionVirtualizadaController } from './atencion-virtualizada.controller';
import { AtencionVirtualizadaService } from './atencion-virtualizada.service';

describe('AtencionVirtualizadaController', () => {
  let atencionVirtualizadaController: AtencionVirtualizadaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AtencionVirtualizadaController],
      providers: [AtencionVirtualizadaService],
    }).compile();

    atencionVirtualizadaController = app.get<AtencionVirtualizadaController>(AtencionVirtualizadaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(atencionVirtualizadaController.getHello()).toBe('Hello World!');
    });
  });
});
