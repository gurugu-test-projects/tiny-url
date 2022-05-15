import { Test, TestingModule } from '@nestjs/testing';
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';
import { Status } from './interfaces/response.interface';

describe('UrlsController', () => {
  let controller: UrlsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlsController],
      providers: [UrlsService],
    }).compile();

    controller = module.get<UrlsController>(UrlsController);
  });

  it('should decode a short URL into a full URL', async () => {
    const encodeResult = await controller.encode({
      url: 'https://www.google.com',
    });

    if (encodeResult.status === Status.success) {
      expect(controller.decode(encodeResult.data.short)).toStrictEqual({
        status: Status.success,
        data: encodeResult.data.full,
      });
    }
  });

  it('should return an error message if trying to decode non-existing short URL', async () => {
    expect(controller.decode('abc')).toStrictEqual({
      status: Status.error,
      message: 'URL not found',
    });
  });

  it('should encode a full URL into a short URL', async () => {
    const encodeResult = await controller.encode({
      url: 'https://www.google.com',
    });

    expect(encodeResult.status).toBe(Status.success);
  });

  it('should return an error message if trying to encode an empty string or undefined', async () => {
    expect(controller.encode({ url: '' })).toStrictEqual({
      status: Status.error,
      message: 'Please provide a full URL',
    });
  });
});
