import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//random số
//chia các component, 1 thành phần UI có thể được gọi là 1 component

//Render và lifecycle của Reactjs
//Render : cập nhật UI
// => state thay đổi thì component sẽ render lại => ảnh hưởng performance của app
//=> Đảm bảo set state khi thực sự cần thiết
//=> Các tối ưu performance: sử dụng useMemo, useCallBack, React.memo
// Lifecycle: mouting - updating - unmounting.

//ush : viết tắt cho use state
//ueh : viết tắt cho use effect
//useEffect(()=>  {}, [])
//sử dụng mounting 