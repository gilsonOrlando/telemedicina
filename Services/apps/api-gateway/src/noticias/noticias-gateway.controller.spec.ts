import { Test, TestingModule } from '@nestjs/testing';
import { ApiGatewayController } from './noticias-gateway.controller';
import { PublicidadService } from './noticias-gateway.service';

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