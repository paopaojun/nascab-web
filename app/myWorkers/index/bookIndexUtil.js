const _0x1b1bf7=_0x2292;function _0x2292(_0x49cfab,_0x5f17b1){const _0x18e3c=_0x18e3();return _0x2292=function(_0x2292fc,_0x5a20c5){_0x2292fc=_0x2292fc-0xcb;let _0x266816=_0x18e3c[_0x2292fc];return _0x266816;},_0x2292(_0x49cfab,_0x5f17b1);}(function(_0x195d72,_0x232f29){const _0x71d067=_0x2292,_0x5a666d=_0x195d72();while(!![]){try{const _0x11ee3f=-parseInt(_0x71d067(0x109))/0x1+-parseInt(_0x71d067(0xfa))/0x2+-parseInt(_0x71d067(0xed))/0x3+parseInt(_0x71d067(0x11c))/0x4*(-parseInt(_0x71d067(0xe9))/0x5)+parseInt(_0x71d067(0xf2))/0x6+-parseInt(_0x71d067(0x10d))/0x7*(parseInt(_0x71d067(0xd0))/0x8)+parseInt(_0x71d067(0xf0))/0x9*(parseInt(_0x71d067(0xf1))/0xa);if(_0x11ee3f===_0x232f29)break;else _0x5a666d['push'](_0x5a666d['shift']());}catch(_0x2eb424){_0x5a666d['push'](_0x5a666d['shift']());}}}(_0x18e3,0xc5832));const path=require(_0x1b1bf7(0x108)),fs=require('fs');let pinyin=require(_0x1b1bf7(0x11f));const sharp=require('sharp'),{Worker}=require(_0x1b1bf7(0x114));let letterList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];const dbSourceFolderTable=require(_0x1b1bf7(0x120)),dbFileIndexTable=require(_0x1b1bf7(0x110)),dbConfigTable=require(_0x1b1bf7(0xe2)),config=require('../../myConfig/config'),indexUtil=require(_0x1b1bf7(0x11a)),nfoUtil=require('../../utils/nfoUtil'),indexTableName=dbFileIndexTable[_0x1b1bf7(0xcb)],bookIndexUtil={};bookIndexUtil['sharpWriteCover']=async function(_0x278c54,_0x27e17f){return new Promise((_0x3f7ab9,_0x3492f5)=>{const _0x59db38=_0x2292;sharp(_0x278c54,{'failOnError':![]})[_0x59db38(0xf3)]({'quality':0x4d})[_0x59db38(0xf4)]({'width':0x1f4})[_0x59db38(0xd9)]()[_0x59db38(0xf5)](_0x38ff52=>{const _0x207494=_0x59db38;fs[_0x207494(0x117)](_0x27e17f,_0x38ff52,_0x11ccca=>{if(_0x11ccca)return _0x3492f5();return _0x3f7ab9(_0x27e17f);});})['catch'](_0x32f7df=>{const _0x42eda7=_0x59db38;return console[_0x42eda7(0xff)](_0x42eda7(0x112),_0x32f7df),_0x3492f5();});});},bookIndexUtil[_0x1b1bf7(0x11d)]=function(_0x4d0369,_0x4c9719,_0x142a93=![]){return new Promise((_0x3e4c3d,_0x40dd0a)=>{const _0x4221a3=_0x2292;let _0x396d22=new Worker(path[_0x4221a3(0xfe)](__dirname,'bookInfoWorker.js'),{'workerData':{'indexObj':_0x4d0369,'bookCoverCachePath':_0x4c9719,'onlyGenCover':_0x142a93}}),_0x13eae0=setTimeout(()=>{const _0x30a7b0=_0x4221a3;_0x396d22&&(console[_0x30a7b0(0xff)](_0x30a7b0(0x12a)),_0x396d22[_0x30a7b0(0xcc)](),_0x396d22=null,_0x40dd0a());},0x7530);_0x396d22['on'](_0x4221a3(0xda),_0x408d8e=>{_0x408d8e['code']==0x0&&(_0x13eae0&&clearTimeout(_0x13eae0),_0x3e4c3d(_0x408d8e));}),_0x396d22['on'](_0x4221a3(0xe7),_0x48e537=>{const _0x2f891f=_0x4221a3;console[_0x2f891f(0xe7)](_0x2f891f(0x126),_0x48e537),_0x396d22&&(_0x396d22[_0x2f891f(0xcc)](),_0x396d22=null),_0x40dd0a();}),_0x396d22['on'](_0x4221a3(0x125),_0x5e4bc0=>{const _0x1bd485=_0x4221a3;if(_0x5e4bc0!==0x0)console[_0x1bd485(0xe7)](_0x1bd485(0xe1),_0x5e4bc0);else{}});});},bookIndexUtil[_0x1b1bf7(0x122)]=async function(_0x3b9024,_0x49c9d7){const _0x1c2bba=_0x1b1bf7;let _0x177fff=![];if(_0x49c9d7[_0x1c2bba(0x118)]==0x1&&_0x49c9d7[_0x1c2bba(0x104)]&&config[_0x1c2bba(0x124)]['includes'](_0x49c9d7[_0x1c2bba(0x104)][_0x1c2bba(0x129)]())){!_0x49c9d7[_0x1c2bba(0x10c)]&&(_0x49c9d7[_0x1c2bba(0x10c)]=bookIndexUtil[_0x1c2bba(0x10e)](_0x49c9d7));let _0x3fbb27=config['getMediaCoverCachePath'](_0x49c9d7);try{let _0x4a9bdf=await bookIndexUtil[_0x1c2bba(0x11d)](_0x49c9d7,_0x3fbb27);if(_0x4a9bdf['coverData'])try{let _0x46f24c=await bookIndexUtil[_0x1c2bba(0xd3)](_0x4a9bdf['coverData'],_0x3fbb27);_0x46f24c&&(console[_0x1c2bba(0xff)](_0x1c2bba(0xeb),_0x46f24c),_0x4a9bdf['indexObj'][_0x1c2bba(0x106)]=_0x46f24c);}catch(_0x448905){console[_0x1c2bba(0xff)](_0x448905);}return console['log'](_0x1c2bba(0xcd),_0x4a9bdf[_0x1c2bba(0x113)][_0x1c2bba(0x127)],_0x4a9bdf[_0x1c2bba(0x113)][_0x1c2bba(0xe0)]),bookIndexUtil['addOriginalDate'](_0x3b9024,_0x4a9bdf['originalTime'],_0x4a9bdf[_0x1c2bba(0x113)]);}catch(_0x3425c7){return console[_0x1c2bba(0xff)](_0x1c2bba(0xf9),_0x3425c7),bookIndexUtil[_0x1c2bba(0xef)](_0x3b9024,_0x177fff,_0x49c9d7);}}else{if(_0x49c9d7[_0x1c2bba(0x118)]==0x1)return;return bookIndexUtil[_0x1c2bba(0xef)](_0x3b9024,_0x177fff,_0x49c9d7);}},bookIndexUtil['getBookType']=function(_0x2607a6){const _0x1f5576=_0x1b1bf7;let _0x49a322=[_0x1f5576(0xe6),_0x1f5576(0xf6),_0x1f5576(0x103),_0x1f5576(0x11e)];return _0x2607a6[_0x1f5576(0x104)]&&_0x49a322[_0x1f5576(0x116)](_0x2607a6[_0x1f5576(0x104)]['toLowerCase']())?0x2:0x1;},bookIndexUtil[_0x1b1bf7(0xfd)]=function(_0x5bca2a){const _0x2d14b1=_0x1b1bf7;let _0x5a97ad='(\x27.cbz\x27,\x27.cbr\x27,\x27.rar\x27,\x27.zip\x27,\x27.CBZ\x27,\x27.CBR\x27,\x27.RAR\x27,\x27.ZIP\x27)',_0x666ffe=_0x2d14b1(0xec)+_0x5a97ad;_0x5bca2a['prepare'](_0x666ffe)[_0x2d14b1(0xcf)](),_0x666ffe=_0x2d14b1(0xd1)+_0x5a97ad,_0x5bca2a['prepare'](_0x666ffe)[_0x2d14b1(0xcf)]();},bookIndexUtil[_0x1b1bf7(0xd4)]=async function(_0x2e3cb5,_0x55d895,_0x35c45a){const _0x36b8a4=_0x1b1bf7;return await indexUtil[_0x36b8a4(0xd4)](_0x2e3cb5,_0x55d895,indexTableName,_0x36b8a4(0x10a),_0x35c45a,bookIndexUtil[_0x36b8a4(0x111)]);},bookIndexUtil[_0x1b1bf7(0x111)]=async function(_0x20a057,_0x182abd,_0x26ba57,_0x4be568,_0xb4db5a,_0x41b78a){const _0xc68793=_0x1b1bf7;let _0x444ec5=indexUtil[_0xc68793(0xd6)](_0x20a057,_0xc68793(0x10a),config,_0x26ba57,_0x4be568);if(!_0x444ec5)return;let _0x30ddf1=_0x41b78a['birthtimeMs'];_0x41b78a[_0xc68793(0xdc)]<_0x30ddf1&&(_0x30ddf1=_0x41b78a[_0xc68793(0xdc)]);_0x41b78a[_0xc68793(0xd5)]<_0x30ddf1&&(_0x30ddf1=_0x41b78a['atimeMs']);_0x41b78a[_0xc68793(0x10b)]<_0x30ddf1&&(_0x30ddf1=_0x41b78a[_0xc68793(0x10b)]);let _0x321b02={'path':_0x26ba57,'filename':_0x4be568,'is_file':_0xb4db5a,'ctime':_0x41b78a['ctimeMs'],'mtime':_0x41b78a['mtimeMs'],'ext':path[_0xc68793(0xdd)](_0x4be568),'birthtime':Math[_0xc68793(0xf7)](_0x30ddf1),'size':_0x41b78a[_0xc68793(0xde)],'check_time':new Date()[_0xc68793(0xce)]()};_0x321b02=await bookIndexUtil[_0xc68793(0x122)](_0x182abd,_0x321b02);},bookIndexUtil[_0x1b1bf7(0xd7)]=async function(_0x570648,_0x3b70ab,_0x51bcdb){const _0x2fb476=_0x1b1bf7;await indexUtil[_0x2fb476(0xd7)](_0x570648,_0x3b70ab,_0x51bcdb,indexTableName,bookIndexUtil['addFileIndexToDb'],bookIndexUtil[_0x2fb476(0xd4)]);return;},bookIndexUtil[_0x1b1bf7(0xef)]=function(_0x5ae38b,_0x2cde44,_0x1fbcba){const _0x22df3f=_0x1b1bf7;nfoUtil[_0x22df3f(0xf8)](_0x1fbcba)[_0x22df3f(0xf5)](_0x4e6376=>{_0x162d96(_0x4e6376);})[_0x22df3f(0xe3)](_0x36ef88=>{_0x162d96(_0x1fbcba);});function _0x162d96(_0x46d7f3){const _0x718c8=_0x22df3f;_0x2cde44&&_0x2cde44<config[_0x718c8(0xdf)]&&(_0x2cde44=![]);(!_0x2cde44||_0x2cde44==_0x718c8(0x123)||_0x2cde44==_0x718c8(0xe5)||_0x2cde44==_0x718c8(0x123)||_0x2cde44==_0x718c8(0xee))&&(_0x2cde44=_0x46d7f3[_0x718c8(0x107)]||_0x46d7f3[_0x718c8(0xe8)]);let _0x348488=new Date(_0x2cde44);_0x46d7f3[_0x718c8(0xfc)]=_0x348488['getTime']();let _0x21bec3=_0x348488['getFullYear'](),_0x4a990d=_0x348488[_0x718c8(0x128)]()+0x1;_0x4a990d=_0x4a990d>=0xa?_0x4a990d:'0'+_0x4a990d;let _0xb2a95b=_0x348488[_0x718c8(0xe4)]();_0xb2a95b=_0xb2a95b>=0xa?_0xb2a95b:'0'+_0xb2a95b,_0x46d7f3[_0x718c8(0x10f)]=_0x21bec3+'-'+_0x4a990d+'-'+_0xb2a95b;let _0x3cf3a8=dbFileIndexTable[_0x718c8(0x119)](_0x5ae38b,_0x46d7f3,indexTableName);if(_0x3cf3a8&&_0x3cf3a8['lastInsertRowid']){let _0xe2881e=dbFileIndexTable['getById'](_0x5ae38b,_0x3cf3a8[_0x718c8(0xdb)],dbFileIndexTable['INDEX_TABLE_NAME_BOOK']);_0xe2881e&&bookIndexUtil[_0x718c8(0xd8)](_0x5ae38b,_0xe2881e);}}},bookIndexUtil[_0x1b1bf7(0x115)]=function(_0x40bc5c){const _0x59a126=_0x1b1bf7;let _0x5094b3=_0x59a126(0x102),_0x272efd=_0x40bc5c['prepare'](_0x5094b3)[_0x59a126(0x105)]();for(let _0x5326f1 in _0x272efd){bookIndexUtil[_0x59a126(0xd8)](_0x40bc5c,_0x272efd[_0x5326f1]);}};function _0x18e3(){const _0x5dc7ce=['ceil','restoreBookNfo','err\x205','2709486XHtEFQ','initials','original_time','setAllBookType','resolve','log','title','exports','SELECT\x20id,filename,artist,album,title\x20FROM\x20file_index_book\x20WHERE\x20filename_fl\x20is\x20null','.rar','ext','all','coverPath','birthtime','path','1174253kLCjTa','book','ctimeMs','type','49693jEKgKy','getBookType','original_date','../../db/dbFileIndexTable','addFileIndexToDb','err1','indexObj','worker_threads','dealFirstLetterAll','includes','writeFile','is_file','create','./indexUtil','length','44xPkwqY','runGetBookInfoWorker','.zip','node-pinyin','../../db/dbSourceFolderTable','test','dealBookInfo','NaN','bookTypeList','exit','Worker\x20error:','filename','getMonth','toLowerCase','已超时\x20结束处理worker','INDEX_TABLE_NAME_BOOK','terminate','处理成功','getTime','run','312PYKXSI','UPDATE\x20file_index_book\x20SET\x20type=1\x20WHERE\x20type\x20=\x20\x27\x27\x20and\x20ext\x20not\x20in\x20','toUpperCase','sharpWriteCover','recursionFilesAddIndex','atimeMs','doesPathCanAddToDb','dealFileChange','dealFirstLetterSingle','toBuffer','message','lastInsertRowid','mtimeMs','extname','size','exifMinTimeStamp','total_page','Worker\x20stopped\x20with\x20exit\x20code:','../../db/dbConfigTable','catch','getDate','Nan','.cbz','error','ctime','136015WmgqKJ','UPDATE\x20file_index_book\x20set\x20filename_fl=?,artist_fl=?,title_fl=?\x20where\x20id=?','封面写入成功','UPDATE\x20file_index_book\x20SET\x20type=2\x20WHERE\x20type\x20=\x20\x27\x27\x20and\x20ext\x20in\x20','4683030MbGjPO','Null','addOriginalDate','46401921aSsJJP','10eZomZJ','1916046MejPkw','jpeg','resize','then','.cbr'];_0x18e3=function(){return _0x5dc7ce;};return _0x18e3();}function isChinese(_0xc7c921){const _0xa0ea71=_0x1b1bf7;var _0x42e25c=/[^\\u4e00-\\u9fa5]/;return _0x42e25c[_0xa0ea71(0x121)](_0xc7c921);}bookIndexUtil['dealFirstLetterSingle']=function(_0x5cc5ce,_0x33997a){const _0x1dd51c=_0x1b1bf7;function _0x3e00c5(_0x3fb15b){const _0x16c121=_0x2292;if(_0x3fb15b&&_0x3fb15b[_0x16c121(0x11b)]>0x0){let _0x15dd47=_0x3fb15b[0x0];if(letterList[_0x16c121(0x116)](_0x15dd47))return _0x15dd47;else{if(isChinese(_0x15dd47)){let _0xb90336=pinyin(_0x15dd47,{'style':_0x16c121(0xfb)});return _0xb90336&&_0xb90336[_0x16c121(0x11b)]>0x0&&_0xb90336[0x0]['length']>0x0&&_0xb90336[0x0][0x0]['length']>0x0?_0xb90336[0x0][0x0][0x0]:'#';}else return'#';}}else return'';}let _0x1144f5=_0x3e00c5(_0x33997a[_0x1dd51c(0x127)]?_0x33997a['filename'][_0x1dd51c(0xd2)]():'')[_0x1dd51c(0xd2)](),_0x4126b6=_0x3e00c5(_0x33997a['artist']?_0x33997a['artist'][_0x1dd51c(0xd2)]():'')[_0x1dd51c(0xd2)](),_0xceec69=_0x3e00c5(_0x33997a[_0x1dd51c(0x100)]?_0x33997a[_0x1dd51c(0x100)][_0x1dd51c(0xd2)]():'')[_0x1dd51c(0xd2)]();_0x5cc5ce['prepare'](_0x1dd51c(0xea))['run'](_0x1144f5,_0x4126b6,_0xceec69,_0x33997a['id']);},module[_0x1b1bf7(0x101)]=bookIndexUtil;