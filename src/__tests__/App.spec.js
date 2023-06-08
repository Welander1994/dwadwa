import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import formTest from '../components/ToDoForm.vue';

describe('ToDoForm', () => {
  it('should render a button with text "Add"', () => {
    const wrapper = mount(formTest);
    const button = wrapper.find('button');
    expect(button.text()).toEqual('Add');
  });
});
