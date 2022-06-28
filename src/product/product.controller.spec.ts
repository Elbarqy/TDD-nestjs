import { SaveProductRequest } from './../dtos/SaveProductDto';
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

  describe('SaveTesting', () => {
    it('should be defined', () => {
      const product: SaveProductRequest = {
        shopId: 'okay',
        name: 'testProduct',
        images: ['a'],
        price: 300,
      }; 
      let spyFn = jest.spyOn(productService, 'save');
      productController.save(product);
      expect(spyFn).toHaveBeenCalled();
    });
  });
});
