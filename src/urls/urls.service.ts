import { Injectable } from '@nestjs/common';

import { EncodeUrlDto } from './dto/encode-url.dto';
import { IUrl } from './interfaces/url.interface';
import {
  Status,
  DecodeResponse,
  EncodeResponse,
} from './interfaces/response.interface';
import { base62Encode } from './utils/decoder';

@Injectable()
export class UrlsService {
  private urls: IUrl[] = [];
  private counter = 10;

  decode(shortUrl: string): DecodeResponse {
    const originalUrl = this.urls.find(
      (url) => String(url.short) === shortUrl,
    )?.full;

    if (!originalUrl) {
      return {
        status: Status.error,
        message: 'URL not found',
      };
    }

    return {
      status: Status.success,
      data: originalUrl,
    };
  }

  encode(encodeUrlDto: EncodeUrlDto): EncodeResponse {
    if (!encodeUrlDto?.url) {
      return {
        status: Status.error,
        message: 'Please provide a full URL',
      };
    }

    const data: IUrl = {
      full: encodeUrlDto.url,
      short: base62Encode(this.counter++),
    };

    this.urls.push(data);

    return {
      status: Status.success,
      data: data,
    };
  }
}
