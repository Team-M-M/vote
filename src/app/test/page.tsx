import { delay } from '@utils/formatting';
import { OneProps } from './oneprops';
import { TwoProps } from './twoprops';

export default function Test() {
  let data = '';
  const handling = async () => {
    await delay(3000);
    data = '딜레이 이후';
    return data;
  };

  return (
    <div>
      <p>실험</p>
      <OneProps elementProps={<TwoProps data={handling} />} />
    </div>
  );
}
