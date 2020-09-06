import HelloWorld from '@/components/HelloWorld.vue';
import {mount} from '@vue/test-utils'

let wrapper;

beforeEach(() => {
    wrapper = mount(HelloWorld, {
        propsData: {
            msg: 'Hi there'
        }
    })
});

describe('DOM interaction', () => {
    it('should display "msg" property in the h1 tag', () => {
        expect(wrapper.find('h1').text()).toBe(wrapper.vm.msg);
    });
}); // DOM interaction

describe('computed properties', () => {

}); // computed properties

describe('methods', () => {

}); // methods