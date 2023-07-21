import { Test, TestingModule } from '@nestjs/testing';
import { NoticiasController } from './noticias.controller';
import { NoticiasService } from './noticias.service';


describe('NoticiasController', () => {
  let noticiasController: NoticiasController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NoticiasController],
      providers: [NoticiasService],
    }).compile();

    noticiasController = app.get<NoticiasController>(NoticiasController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(noticiasController.getHello()).toBe('Hello World!');
    });
  });
});