import { VuexModule, Module, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { User, Profile } from '../models'

@Module({
  namespaced: true,
  name: 'users',
  store
})
export class UsersModule extends VuexModule {
  user?: User | null = null
  profile?: Profile | null = null
}

export default getModule(UsersModule)
