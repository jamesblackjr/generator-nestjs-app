import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql'
import { <%= kebabToPascal(config.name) %> } from '../../graphql.schema'
import { BatchPayload } from '../prisma/prisma.binding'
import { PrismaService } from '../prisma/prisma.service'

@Resolver()
export class <%= kebabToPascal(config.name) %>sResolvers {
  constructor(private readonly prisma: PrismaService) {}

  @Query('<%= kebabToCamel(config.name) %>s')
  async get<%= kebabToPascal(config.name) %>s(@Args() args, @Info() info): Promise<<%= kebabToPascal(config.name) %>[]> {
    return await this.prisma.query.<%= kebabToCamel(config.name) %>s(args, info)
  }

  @Query('<%= kebabToCamel(config.name) %>')
  async get<%= kebabToPascal(config.name) %>(@Args() args, @Info() info): Promise<<%= kebabToPascal(config.name) %>> {
    return await this.prisma.query.<%= kebabToCamel(config.name) %>(args, info)
  }

  @Mutation('create<%= kebabToPascal(config.name) %>')
  async create<%= kebabToPascal(config.name) %>(@Args() args, @Info() info): Promise<<%= kebabToPascal(config.name) %>> {
    return await this.prisma.mutation.create<%= kebabToPascal(config.name) %>(args, info)
  }

  @Mutation('update<%= kebabToPascal(config.name) %>')
  async update<%= kebabToPascal(config.name) %>(@Args() args, @Info() info): Promise<<%= kebabToPascal(config.name) %>> {
    return await this.prisma.mutation.update<%= kebabToPascal(config.name) %>(args, info)
  }

  @Mutation('updateMany<%= kebabToPascal(config.name) %>s')
  async updateMany<%= kebabToPascal(config.name) %>s(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.updateMany<%= kebabToPascal(config.name) %>s(args, info)
  }

  @Mutation('delete<%= kebabToPascal(config.name) %>')
  async delete<%= kebabToPascal(config.name) %>(@Args() args, @Info() info): Promise<<%= kebabToPascal(config.name) %>> {
    return await this.prisma.mutation.delete<%= kebabToPascal(config.name) %>(args, info)
  }

  @Mutation('deleteMany<%= kebabToPascal(config.name) %>s')
  async deleteMany<%= kebabToPascal(config.name) %>s(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteMany<%= kebabToPascal(config.name) %>s(args, info)
  }

  @Subscription('<%= kebabToCamel(config.name) %>')
  on<%= kebabToPascal(config.name) %>Mutation(@Args() args, @Info() info) {
    return this.prisma.subscription.<%= kebabToCamel(config.name) %>(args, info)
  }
}
