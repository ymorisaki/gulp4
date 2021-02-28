import hoge from './sub/hoge';

const str = hoge();

function fnc() {
  return 'hogeh';
}
fnc();

document.body.textContent = str;
