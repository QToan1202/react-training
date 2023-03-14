import { useCallback, useState } from 'react';

const Overview = () => {
  const [value, setValue] = useState('');

  const handleChangeText = useCallback((e) => {
    setValue(e.target.value);
  }, [])

  return (
    <input type={'text'} value={value} onChange={handleChangeText} />
  );
};

export default Overview;
