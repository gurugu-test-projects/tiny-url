import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { EncodeUrlDto } from './dto/encode-url.dto';
import { UrlsService } from './urls.service';
import type {
  DecodeResponse,
  EncodeResponse,
} from './interfaces/response.interface';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Get(':shortUrl')
  @HttpCode(HttpStatus.OK)
  decode(@Param('shortUrl') shortUrl: string): DecodeResponse {
    return this.urlsService.decode(shortUrl);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  encode(@Body() encodeUrlDto: EncodeUrlDto): EncodeResponse {
    return this.urlsService.encode(encodeUrlDto);
  }
}
