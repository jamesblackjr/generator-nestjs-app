import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { <%= kebabToPascal(config.name) %>sResolvers } from './<%= kebabToCamel(config.name) %>s.resolvers'

@Module({
  providers: [<%= kebabToPascal(config.name) %>sResolvers],
  imports: [PrismaModule],
})
export class <%= kebabToPascal(config.name) %>sModule {}
