
import 'dotenv/config'
import { getPayload } from 'payload'
import config from './src/payload.config'

const run = async () => {
  const payload = await getPayload({ config })

  const email = 'ТВІЙ_EMAIL_АДМІНІСТРАТОРА'
  const newPassword = 'НовийПароль123!'

  const result = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: email,
      },
    },
    limit: 1,
  })

  if (!result.docs.length) {
    console.log('Користувача з таким email не знайдено.')
    process.exitCode = 1
    return
  }

  await payload.update({
    collection: 'users',
    id: result.docs[0].id,
    data: {
      password: newPassword,
    },
    overrideAccess: true,
  })

  console.log('Пароль оновлено. Тепер увійди з новим паролем.')
  process.exitCode = 0
}

run().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
