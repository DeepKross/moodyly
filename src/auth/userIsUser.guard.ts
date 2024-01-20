import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class UserIsUserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const userId = request.user.sub;
    const personId = request.params.personId;

    if (userId !== personId) {
      throw new UnauthorizedException('You are not authorized to view this person\'s data');
    }

    return true;
  }
}
