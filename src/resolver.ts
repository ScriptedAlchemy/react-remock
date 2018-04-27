import {AnyElement, PartialElement, getMocks, mock} from "./mocks";
import {Remocking} from './Components';

const resolver = (type: AnyElement, props: any): PartialElement => {
  if (type === Remocking) {
    mock(props.component);
  }
  const mocks = getMocks().filter(match => match.test(type, props || {}));
  if (mocks.length) {
    return mocks[mocks.length - 1].replace(type, props)
  }
  return {type, props};
};


export {
  resolver
}