import * as React from 'react';

const NAME = 'Button';
const DEFAULT_TAG = 'button';

/** */
type ButtonOwnProps = {

}

/**  */

function Button(props: ButtonOwnProps) {
  const {
    as: Comp = DEFAULT_TAG,
  } = props;

  return (
    <Comp

    />
  )
}

Button.displayName = NAME;
