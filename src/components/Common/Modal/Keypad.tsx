import { KeyButton } from '../Box/KeyBox';

export const KeyPad = () => {
  return (
    <div>
      <KeyButton size="large" variant="secondary" {...{ type: 'button', value: 1 }}>
        1
      </KeyButton>
      <KeyButton size="large" variant="secondary" {...{ type: 'button', value: 2 }}>
        2
      </KeyButton>
      <KeyButton size="large" variant="secondary" {...{ type: 'button', value: 3 }}>
        3
      </KeyButton>
      <KeyButton size="large" variant="primary" {...{ type: 'button', value: 4 }}>
        4
      </KeyButton>
    </div>
  );
};
