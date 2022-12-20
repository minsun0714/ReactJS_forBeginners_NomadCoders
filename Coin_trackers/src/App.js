import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [initial, setInitial] = useState(0);
  const onChange = (event) => {
    setInitial(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setInitial(0);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coins! {loading ? "" : `(총 ${coins.length}개) `}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <h4>시세 확인</h4>
      <select>
        {coins.map((coin) => (
          <option key={coin.id}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <h4>최초 투자 금액에 따른 코인 별 구입 가능 개수</h4>

      <form onSubmit={onSubmit}>
        <input
          value={initial}
          onChange={onChange}
          type='number'
          placeholder='가진 돈 얼마?'
        ></input>
        <button>reset</button>
      </form>
      <select>
        {coins.map((coin) => (
          <option key={coin.id}>
            {coin.name} ({coin.symbol})은 {initial}달러를 가지고 있으면{" "}
            {initial / coin.quotes.USD.price}개 구입 가능!
          </option>
        ))}
      </select>
      <h6>{initial}달러 밖에 없으면 적금이나 들어 애송아!</h6>
    </div>
  );
}

export default App;
