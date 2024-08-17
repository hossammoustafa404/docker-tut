import { PartialType } from '@nestjs/swagger';
import { IUpdateSiteUserDto } from '../../domain';
import { CreateSiteUserDto } from './create-site-user.dto';

export class UpdateSiteUserDto
  extends PartialType(CreateSiteUserDto)
  implements IUpdateSiteUserDto {}
