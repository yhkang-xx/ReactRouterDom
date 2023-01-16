import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

const About = () => {
  // url에 입력된 조회 또는 수정하는 메소드들이 담긴 객체를  얻는다.
  // * 첫번째 인자
  //  - get 메서드를 통해 query parameter를 조회
  //  - set 메서드를 통해 query parameter를 업데이트
  //  - query parameter가 없을시에는 null 반환
  // * 두번째 인자
  //  - query parameter를 객체형태로 업데이트할 수 있는 함수를 반환
  // * query parameter의 조회결과값는 항상 string 형이다.
  //  - 비교할 경우 true도 문자열 형태의 'true'로 비교해야 한다.
  //  - 숫자형으로 다루고자 한다면, parseInt를 사용하여 숫자타입으로 빈환시켜야 한다.
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const detail = urlSearchParams.get('detail');
  const mode = urlSearchParams.get('mode');

  const onToggleDetail = () => {
    setUrlSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null | 'NaN' ? 1 : parseInt(mode) + 1;
    setUrlSearchParams({ mode: nextMode, detail });
    console.log('Inc:', mode, nextMode);
  };

  const onDecreaseMode = () => {
    const nextMode = mode === null | 'NaN' ? 1 : parseInt(mode) - 1;
    setUrlSearchParams({ mode: nextMode, detail });
    console.log('Dec:', mode, nextMode);
  };

  // url에서 발생하는 query('?'이후 문자열)를 찾을 수 있다
  const query = useLocation().search;
  return (
    <div>
      <h1>소개</h1>
      <p>
        <Link to="/">홈으로</Link>
      </p>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>쿼리스티링: {query}</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
      <button onClick={onDecreaseMode}>mode - 1</button>
    </div>
  );
};

export default About;
