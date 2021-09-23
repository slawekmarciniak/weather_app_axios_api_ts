import { shallow } from "enzyme";
import SearchInput from "../SearchInput";

describe("<SearchInput/>", () => {
  it("should change input value", () => {
    const wrapper = shallow(<SearchInput handleClick={handleClick} />);
    let input = wrapper.find("input").at(0);
    input.simulate("change", { target: { value: "city" } });
    input = wrapper.find("input").at(0);
    expect(input.props().value).toEqual("city");
  });
});
