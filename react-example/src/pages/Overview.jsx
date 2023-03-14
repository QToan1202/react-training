import { memo, useCallback, useState } from 'react';

const Blog = memo(() => {
  const [theme, setTheme] = useState('primary');
  const themes = ['primary', 'secondary', 'light', 'dark']

  const handleChangeTheme = useCallback(() => {
    setTheme(themes[Math.floor(Math.random()*themes.length)])
  }, [])

  return (
    <>
      <Post theme={theme} onChangeTheme={handleChangeTheme} />
      <Post theme={theme} onChangeTheme={handleChangeTheme} />
      <Post theme={theme} onChangeTheme={handleChangeTheme} />
    </>
  );
});

const Post = memo(({ theme, onChangeTheme }) => {
  return (
    <>
      <h2>My blog have {theme} theme</h2>
      <button onClick={onChangeTheme}>Change Theme</button>
    </>
  );
});

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
      <Blog />
    </>
  );
};

export default Overview;
