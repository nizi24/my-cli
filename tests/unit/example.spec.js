import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Jestの基本', () => {
  beforeEach(() => {
    console.log(new Date().toLocaleString());
  })

  it('初めてのテスト', () => {
    expect(1 + 1).toBe(2)
  })
})
