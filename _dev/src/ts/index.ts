import hoge from './sub/hoge';

const str = hoge();

function fnc() {
  return 'hogehogy';
}
fnc();

document.body.textContent = str;
