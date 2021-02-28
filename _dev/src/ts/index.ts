import hoge from './sub/hoge';

const str = hoge();

function fnc() {
  return 'hogehoge';
}
fnc();

document.body.textContent = str;
