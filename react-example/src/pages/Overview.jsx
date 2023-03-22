import {
  createContext,
  memo,
  Profiler,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const ThemeContext = createContext('light');
const ProductContext = createContext(null);

const Blog = memo(() => {
  const [theme, setTheme] = useState('primary');
  const themes = ['primary', 'secondary', 'light', 'dark'];
  const product = useContext(ProductContext)
  const defaultTheme = useContext(ThemeContext)

  const handleChangeTheme = useCallback(() => {
    setTheme(themes[Math.floor(Math.random() * themes.length)]);
  }, []);

  return (
    <>
      <Post theme={theme} onChangeTheme={handleChangeTheme} />
      <Post theme={theme} onChangeTheme={handleChangeTheme} />
      <Post theme={theme} onChangeTheme={handleChangeTheme} />
      <p>Default theme of this page is {defaultTheme}</p>
      <p>I have a about {product?.name}, I bought it only {product?.price} </p>
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
  const product = useMemo(() => ({
    name: 'adventures',
    price: 123,
  }), []);

  const handleChangeText = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleChangeCheck = useCallback(() => {
    setIsChecked((prevState) => !prevState);
  }, []);

  const onRender = useCallback((id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log(actualDuration, baseDuration)
  }, [])

  return (
    <ThemeContext.Provider value='dark'>
      <ProductContext.Provider value={product}>
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
        <Profiler id="Blog" onRender={onRender}>
          <Blog />
        </Profiler>
      </ProductContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Overview;
