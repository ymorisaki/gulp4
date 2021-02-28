import hoge from './sub/hoge';

const str = hoge();

function fnc() {
  return 'hogehogyote';
}
fnc();

document.body.textContent = str;
