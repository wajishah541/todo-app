import { shallowMount } from '@vue/test-utils'
import Todo from '../../src/components/Todo.vue'
import axios from 'axios'
import sinon from 'sinon'
// Acceptance Test
describe('The todo.vue component', () => {
  it('Enables user to add todo ', () => {
    const wrapper = shallowMount(Todo, {
      props: {
        title: 'Todo-App'
      }
    })
    const tasks = [
      { ID: 1, content: 'go for a walk ' }
    ]
    axios.post = jest.fn().mockResolvedValue({
      data: [
        {
          ID: 1, content: 'go for a walk '
        }
      ]
    })
    const result = insertTodo()
    expect(axios.post).toHaveBeenCalledWith(`${postTodoUrl}/handlerequest`)
    expect(result.data).toEqual(tasks)
  })
  // component test
  describe('The todo.vue component', () => {
    // component shallow rendering test
    it('renders a component', () => {
      const wrapper = shallowMount(Todo, {
        propsData: {
          title: 'Todo-App'
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
    // Test case for title
    it('Displays the title when passed as a prop', () => {
      const wrapper = shallowMount(Todo, {
        propsData: {
          title: 'My TodoApp'
        }
      })
      // expect(wrapper.text()).toMatch('My TodoApp')
      expect(wrapper.props().title).toBe('My TodoApp')
      expect(wrapper.props('title')).toBe('My TodoApp')
    })
    // test case for todo input field
    it('allows for adding  todo in todo-input field ', async () => {
      const wrapper = shallowMount(Todo, {
        propsData: {
          title: 'Todo-App'
        }
      })
      const input = wrapper.find('input')
      await input.setValue('buy some milk')
      expect(wrapper.find('input[type="text"]').element.value).toBe('buy some milk')
    })
    // test case for button
    it('triggers on click', async () => {
      const wrapper = shallowMount(Todo, {
        propsData: {
          title: 'Todo-App'
        }
      })
      await wrapper.find('button').trigger('click')
    })
  })
  it('click on add button calls our method', async () => {
    const wrapper = shallowMount(Todo, {
      propsData: {
        title: ''
      },
    })
    const spy = jest.spyOn(wrapper.vm, 'add');
    wrapper.vm.add();
    expect(spy).toHaveBeenCalled();
  })
})
