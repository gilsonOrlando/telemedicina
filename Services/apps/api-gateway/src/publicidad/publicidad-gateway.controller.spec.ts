import { Test, TestingModule } from '@nestjs/testing';
import { ApiGatewayController } from './publicidad-gateway.controller';
import { PublicidadService } from './publicidad-gateway.service';

describe('ApiGatewayController', () => {
  let apiGatewayController: ApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiGatewayController],
      providers: [PublicidadService],
    }).compile();

    apiGatewayController = app.get<ApiGatewayController>(ApiGatewayController);
  });
});
