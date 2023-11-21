import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GeneralResponse } from '../interfaces/general-response.interface';
import { Observable, map } from 'rxjs';

@Injectable()
export class GeneralResponseInterseptor<T>
  implements NestInterceptor<T, GeneralResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<GeneralResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        const res = context.switchToHttp().getResponse();
        return {
          statusCode: res.statusCode,
          message: 'ok',
          data,
        };
      }),
    );
  }
}
