import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    productController = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
  });

  describe('first test', () => {
    it('should be defined', () => {
      const product = {};
      let spyFn = jest.spyOn(productService, 'save');
      productController.save(product);
      expect(spyFn).toHaveBeenCalled();
    });
  });
});
