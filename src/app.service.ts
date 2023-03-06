import { Injectable } from '@nestjs/common';
import type { SendMessageOptions } from 'chatgpt';
import { import_ } from '@brillout/import';

let ChatGPTAPI, api;
import_('chatgpt').then((module) => {
  ChatGPTAPI = module.ChatGPTAPI;
  api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
  });
});

@Injectable()
export class AppService {
  async post(text: string, options: SendMessageOptions) {
    try {
      const result = await api.sendMessage(text, options);
      return {
        data_list: [
          {
            role: result.role,
            id: result.id,
            parentMessageId: result.parentMessageId,
            text: result.text,
          },
        ],
        err_code: 0,
        err_msg: 'success',
      };
    } catch (error) {
      return {
        data_list: [
          {
            text: error.message,
          },
        ],
        err_code: 1,
        err_msg: 'error',
      };
    }
  }
}
