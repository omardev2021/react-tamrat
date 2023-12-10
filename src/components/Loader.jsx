import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';

const Loader = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <BeatLoader color={'#36D7B7'} loading css={override} size={100} />
  );
};

export default Loader;