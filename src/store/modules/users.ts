import { VuexModule, Module, getModule, MutationAction, Action, Mutation } from 'vuex-module-decorators'
import store from '@/store'
import { User, Profile, UserSubmit } from '../models'
import { loginUser } from '../api'

@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true
})
export class UsersModule extends VuexModule {
  user: User | null = null
  profile: Profile | null = null

  get username () {
    if (this.user) {
      return this.user.username
    } else {
      return null
    }
  }

  @Mutation
  setUser (user: User) {
    this.user = user
  }

  @Action({ commit: 'setUser' })
  async login (userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit)

    if (user) {
      const loggedInUser = user.user
      return loggedInUser
    }
  }
}

export default getModule(UsersModule)
