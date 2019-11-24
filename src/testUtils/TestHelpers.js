export const findTestId = (wrapper, testId) => wrapper.find(`[data-test-id="${testId}"]`);

export const clickTestId = (wrapper, testId) => findTestId(wrapper, testId).simulate('click');

export const clickTestIdAndUpdate = (wrapper, testId) => {
    findTestId(wrapper, testId).simulate('click');
    wrapper.update();
}