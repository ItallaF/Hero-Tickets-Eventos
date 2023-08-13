import { User } from '../entities/user';

interface UserRepository {
  add(user: User): Promise<User>;
	verifyIsUserExists(email: string): Promise<any>;
}

export { UserRepository }
