const _0x559a4e=_0x92a4;(function(_0x3dc669,_0x1025dc){const _0x58ac93=_0x92a4,_0x4e6e51=_0x3dc669();while(!![]){try{const _0x23c5ad=parseInt(_0x58ac93(0x1b1))/0x1+-parseInt(_0x58ac93(0x1af))/0x2*(-parseInt(_0x58ac93(0x1b7))/0x3)+parseInt(_0x58ac93(0x1bb))/0x4*(-parseInt(_0x58ac93(0x1b9))/0x5)+-parseInt(_0x58ac93(0x1aa))/0x6*(parseInt(_0x58ac93(0x1bd))/0x7)+-parseInt(_0x58ac93(0x1b4))/0x8+parseInt(_0x58ac93(0x1be))/0x9+parseInt(_0x58ac93(0x1ac))/0xa;if(_0x23c5ad===_0x1025dc)break;else _0x4e6e51['push'](_0x4e6e51['shift']());}catch(_0x212f70){_0x4e6e51['push'](_0x4e6e51['shift']());}}}(_0x28de,0x36d57));function _0x92a4(_0x42ebfc,_0x6a405c){const _0x28dee5=_0x28de();return _0x92a4=function(_0x92a495,_0x47c191){_0x92a495=_0x92a495-0x1aa;let _0x1d9e76=_0x28dee5[_0x92a495];return _0x1d9e76;},_0x92a4(_0x42ebfc,_0x6a405c);}function _0x28de(){const _0x541daf=['createReadStream','16ePCuoQ','encodeStream','897617chytyC','2969757mxVCyS','chardet','toLowerCase','12BoJVyk','转码输出txt，原编码','519680LtWhmP','log','ascii','18746oYQnNz','startsWith','135495qqhAbT','utf8','pipe','1621344eWBLJF','exports','path','111wGZkIE','windows','225635LiwWQO'];_0x28de=function(){return _0x541daf;};return _0x28de();}let encodingUtil={},fs=require('fs'),path=require(_0x559a4e(0x1b6)),iconv=require('iconv-lite');const chardet=require(_0x559a4e(0x1bf));encodingUtil['getUtf8FileStream']=function(_0x4a12b4){return new Promise((_0x5cfe76,_0x494d13)=>{let _0x54af75;fs['stat'](_0x4a12b4,(_0x45d80a,_0x13231a)=>{const _0x3bff8e=_0x92a4;if(_0x45d80a)return console[_0x3bff8e(0x1ad)](_0x45d80a),_0x5cfe76(null);try{_0x54af75=fs[_0x3bff8e(0x1ba)](_0x4a12b4),chardet['detectFile'](_0x4a12b4,{'sampleSize':0x400})['then'](_0x93f664=>{const _0x1cdb3c=_0x3bff8e;if(_0x93f664&&!_0x93f664['toLowerCase']()[_0x1cdb3c(0x1b0)]('utf')&&!_0x93f664[_0x1cdb3c(0x1c0)]()['startsWith'](_0x1cdb3c(0x1ae))&&!_0x93f664[_0x1cdb3c(0x1c0)]()[_0x1cdb3c(0x1b0)](_0x1cdb3c(0x1b8))){let _0x1302c0=_0x54af75[_0x1cdb3c(0x1b3)](iconv['decodeStream'](_0x93f664))[_0x1cdb3c(0x1b3)](iconv[_0x1cdb3c(0x1bc)](_0x1cdb3c(0x1b2)));console[_0x1cdb3c(0x1ad)](_0x1cdb3c(0x1ab),_0x93f664),_0x5cfe76(_0x1302c0);}else _0x5cfe76(_0x54af75);})['catch'](_0x501328=>{_0x5cfe76(_0x54af75);});}catch(_0x12d6b4){_0x54af75?_0x5cfe76(_0x54af75):_0x5cfe76(null);}});});},module[_0x559a4e(0x1b5)]=encodingUtil;