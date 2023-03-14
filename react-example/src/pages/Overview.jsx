import { useCallback, useState } from 'react';

const Overview = () => {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeText = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleChangeCheck = useCallback(() => {
    setIsChecked(prevState => !prevState);
  }, []);

  return (
    <>
      <input type={'text'} value={value} onChange={handleChangeText} />
      {value.length > 0 && <p>Your input length: {value.length}</p>}
      <div>
        <label> Click here</label>
        <input
          type={'checkbox'}
          checked={isChecked}
          onChange={handleChangeCheck}
        />
      </div>
      <p>Above checkbox is {isChecked ? 'checked' : 'un-checked'}</p>
    </>
  );
};

export default Overview;
