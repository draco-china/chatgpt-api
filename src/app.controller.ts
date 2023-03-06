import { Controller, Get, Post, Body, Headers, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get() {
    return `
    <style>
      body {
        background-color: #F7F7F7;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        max-width: 520px;
        margin: auto;
      }
      p {
        color: #666666;
        margin-bottom: 10px;
      }
      .code {
        background-color: #EEEEEE;
        border: 1px solid #CCCCCC;
        padding: 10px;
        margin-bottom: 20px;
      }
    </style>
    <div>
      <p>接口地址：</p>
      <div class="code">https://chatgpt.draco.icu</div>
      <p>请求方法：</p>
      <div class="code">POST</div>
      <p>请求参数：</p>
      <div class="code">{text: string, parentMessageId: string}</div>
      <p>返回参数：</p>
      <div class="code">{role: string, id: string, parentMessageId: string, text: string}</div>
    </div>
    `;
  }

  @Post()
  post(@Body() body) {
    return this.appService.post(body.text, body.parentMessageId);
  }
}
