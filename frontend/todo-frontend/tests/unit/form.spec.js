import { Mount } from '@vue/test-utils'
import Todo from '@/components/Todo'
//Acceptance Test
describe('The todo.vue component', () => {
  it('Enables user to add todo ', () => {
    const wrapper = Mount(Todo,{
    props:{
      title: 'Todo-App'
    }
  })
  const tasks = [
    { ID: 1 , content: 'go for a walk '
    }
  ]
  axios.post = jest.fn().mockResolvedValue({
    data:[
      {
        ID: 1 , content: 'go for a walk '
      }
    ]
  })
  const result = await insertTodo()
  expect(axios.post).toHaveBeenCalledWith(`${postTodoUrl}/handlerequest`)
  expect(result.data).toEqual(tasks)
   })
})
