import { Module } from '@nestjs/common';
import { PrismaModule } from '@dream/prisma';
import { TenorModule } from '@dream/external-api/tenor';
import { CommunityResolver } from './community.resolver';
import { ChannelResolver } from './channel.resolver';
import { ChannelMessageResolver } from './message.resolver';

@Module({
  imports: [PrismaModule, TenorModule],
  providers: [CommunityResolver, ChannelResolver, ChannelMessageResolver],
  exports: [],
})
export class CommunityModule {}
