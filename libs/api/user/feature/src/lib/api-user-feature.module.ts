import { Module } from '@nestjs/common'
import { ApiUserDataAccessModule } from '@nxpm-v4140/api/user/data-access'

import { ApiUserFeatureResolver } from './api-user-feature.resolver'
import { ApiUserFeatureAdminResolver } from './api-user-feature-admin.resolver'

@Module({
  imports: [ApiUserDataAccessModule],
  providers: [ApiUserFeatureResolver, ApiUserFeatureAdminResolver],
})
export class ApiUserFeatureModule {}
