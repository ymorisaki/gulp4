import hoge from './sub/hoge';

const str = hoge();

function fnc() {
  return 'hogehsdf';
}

fnc();

document.body.textContent = str;
