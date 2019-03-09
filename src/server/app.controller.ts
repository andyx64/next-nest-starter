import { Controller, Get, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';

import * as Index from './views/serverless/pages/index';
import * as About from './views/serverless/pages/about';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

   props = {test: 5};

  @Get()
  async getHello(@Request() request, @Response() response) {
    request.props = this.props;
    // @ts-ignore
    return Index.render(request, response);
  }

  @Get('/about')
  async getAbout(@Request() request, @Response() response) {
    request.props = this.props;
    // @ts-ignore
    return About.render(request, response);
  }
}
