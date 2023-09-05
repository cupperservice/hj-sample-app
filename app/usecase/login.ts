import userRepository from "../repository/user_repository"

export default async function login(login_id: string, password: string) {
  const user = await userRepository.find(login_id)

  if (user && user.verify_password(password)) {
    console.log('login success')
    return user
  } else {
    console.log('login failed')
    return null
  }
}
