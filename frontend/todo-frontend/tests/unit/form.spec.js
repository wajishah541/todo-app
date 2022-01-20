import { shallowMount } from "@vue/test-utils"
import Todo from "../../src/components/Todo.vue"
import axios from 'axios'
//Acceptance Test
describe('The todo.vue component', () => {
  it('Enables user to add todo ', () => {
    const wrapper = shallowMount(Todo,{
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
  const result = insertTodo()
  expect(axios.post).toHaveBeenCalledWith(`${postTodoUrl}/handlerequest`)
  expect(result.data).toEqual(tasks)
   })
//component shallow rendering test
   it('renders a component', () => {
    const wrapper = shallowMount(Todo, {
      propsData: {
        title: 'Todo-App'
      }
    })
    expect(wrapper.html()).toMatchSnapshot();
   })



})
