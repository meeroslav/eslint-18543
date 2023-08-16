import { libA } from '@linter-18543/lib-a';
import _ from 'lodash';


export function libB(): string {
  return 'lib-b' + libA() + _.VERSION;
}
