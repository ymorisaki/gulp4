import hoge from './sub/hoge';

const str = hoge();

function fnc() {
  return 'hogeho';
}
fnc();

document.body.textContent = str;
