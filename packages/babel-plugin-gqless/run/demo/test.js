import { preload } from 'gqless'
import * as React from 'react'
import { query } from './client'
import testDefault, { Test, test } from './test2'
import * as test2 from './test2'
import TEST from 'react'

function fn(a) {
  a.name
}
export const App = ({ users, ...props }) => {
  users['0']

  // test2.hmm.hmm2.hmm3(users)
  test2.test(users)

  // props2.somethingElse
  // var user2 = props.user

  // var { name } = props.user

  // name.name2
  // user2.track({ a: 1, a: TEST })

  props.user.avatarUrl({ size: 100 + 50, userId: props.user.id })

  // return (
  //   <div>
  //     {props.user.age}
  //     {props.user.name}
  //   </div>
  // )
  // const [name, setName] = React.useState('bob')
  // const { age2 } = { age2: 100 }
  // const { age, ...rest } = { age: 100 + age2, a: 1, b: 2 }
  query.me
  test(query.me)
}
preload(App, { user, users })
// preload(test2.hmm, {})

// preload(AppFunc, user)
// preload(Test)
// preload(testDefault)
// preload(test2.Test)