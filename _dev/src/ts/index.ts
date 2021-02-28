import hoge from './sub/hoge';

const str = hoge();

function fnc() {
  return 'hoge';
}
fnc();

document.body.textContent = str;
