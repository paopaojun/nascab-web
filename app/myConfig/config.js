const _0x38e226=_0x4913;(function(_0x31cf53,_0x1a45ce){const _0x4abecf=_0x4913,_0x418c21=_0x31cf53();while(!![]){try{const _0x355eb9=-parseInt(_0x4abecf(0x189))/0x1+parseInt(_0x4abecf(0x128))/0x2*(-parseInt(_0x4abecf(0x172))/0x3)+parseInt(_0x4abecf(0x15f))/0x4*(parseInt(_0x4abecf(0x163))/0x5)+-parseInt(_0x4abecf(0x122))/0x6*(-parseInt(_0x4abecf(0x190))/0x7)+-parseInt(_0x4abecf(0x18b))/0x8+-parseInt(_0x4abecf(0x152))/0x9*(parseInt(_0x4abecf(0x127))/0xa)+parseInt(_0x4abecf(0x12e))/0xb;if(_0x355eb9===_0x1a45ce)break;else _0x418c21['push'](_0x418c21['shift']());}catch(_0x11d9e0){_0x418c21['push'](_0x418c21['shift']());}}}(_0x11f8,0x1b64a));let sha256=require(_0x38e226(0x18d)),path=require(_0x38e226(0x17a)),fs=require('fs');const dbConfigTable=require(_0x38e226(0x178)),os=require('os'),packageInfo=require(_0x38e226(0x16a)),mediaType=require(_0x38e226(0x168)),urlConfig=require('./urlConfig');let userDataFolder=process[_0x38e226(0x13c)][_0x38e226(0x17c)];if(!userDataFolder)try{const {app}=require(_0x38e226(0x154));if(app)userDataFolder=app['getPath'](_0x38e226(0x17b));}catch(_0x2064a1){}!userDataFolder&&(userDataFolder=process['env'][_0x38e226(0x148)]||(process[_0x38e226(0x144)]==_0x38e226(0x18e)?process[_0x38e226(0x13c)][_0x38e226(0x13f)]+_0x38e226(0x182):process[_0x38e226(0x13c)][_0x38e226(0x13f)]+_0x38e226(0x130)),userDataFolder=path[_0x38e226(0x15c)](userDataFolder,_0x38e226(0x160)));!fs[_0x38e226(0x13d)](userDataFolder)&&fs[_0x38e226(0x131)](userDataFolder,{'recursive':!![]});let appRootPath=process['env'][_0x38e226(0x183)];function _0x4913(_0x153947,_0x4a2406){const _0x11f8b6=_0x11f8();return _0x4913=function(_0x491376,_0x29e728){_0x491376=_0x491376-0x11b;let _0x201739=_0x11f8b6[_0x491376];return _0x201739;},_0x4913(_0x153947,_0x4a2406);}if(!appRootPath)try{const {app}=require(_0x38e226(0x154));app&&app[_0x38e226(0x158)]?(appRootPath=path['dirname'](app[_0x38e226(0x145)](_0x38e226(0x18c))),os[_0x38e226(0x144)]()=='darwin'&&(appRootPath=path[_0x38e226(0x185)](appRootPath))):appRootPath=path['join'](__dirname,_0x38e226(0x146));}catch(_0x738e72){appRootPath=path[_0x38e226(0x15c)](__dirname,_0x38e226(0x146));}let m3u8Path='',userSetCachePath='';const Database=require(_0x38e226(0x132));let dbPath=path[_0x38e226(0x15c)](userDataFolder,'database');if(fs[_0x38e226(0x13d)](dbPath)){let dbOther=new Database(path[_0x38e226(0x15c)](dbPath,_0x38e226(0x14d)),{});try{let configM3u8TmpPath=dbOther[_0x38e226(0x15b)]('SELECT\x20*\x20FROM\x20config\x20where\x20title=?')[_0x38e226(0x164)](_0x38e226(0x137));configM3u8TmpPath&&configM3u8TmpPath['value']&&(fs[_0x38e226(0x179)](configM3u8TmpPath[_0x38e226(0x184)],fs[_0x38e226(0x11b)][_0x38e226(0x174)]|fs['constants'][_0x38e226(0x12a)]),m3u8Path=configM3u8TmpPath[_0x38e226(0x184)],dbOther[_0x38e226(0x13b)]());}catch(_0xfc22d6){dbOther['close']();}dbOther=new Database(path[_0x38e226(0x15c)](dbPath,_0x38e226(0x14d)),{});try{let cacheParentPath=dbOther[_0x38e226(0x15b)](_0x38e226(0x14b))[_0x38e226(0x164)]('cacheParentPath');cacheParentPath&&cacheParentPath[_0x38e226(0x184)]&&(fs[_0x38e226(0x179)](cacheParentPath[_0x38e226(0x184)],fs[_0x38e226(0x11b)][_0x38e226(0x174)]|fs[_0x38e226(0x11b)]['R_OK']),userSetCachePath=cacheParentPath[_0x38e226(0x184)],dbOther[_0x38e226(0x13b)]());}catch(_0x5a8085){dbOther[_0x38e226(0x13b)]();}}function _0x11f8(){const _0xbe5562=['zh-CN','nascabisthebest','isPackaged','rawImgTypeList','frpc','prepare','join','torrentPath','subtitlePath','176284UbBhKV','nascab','linux','nascloudapikey123codecode','10xLtWZt','get','language','tempFilePath','/NasCabTransCodeTempPath','./mediaType','updateWebJsonUrl','../../package.json','posterPath','music_cover','musicCoverPath','nascabsaccountinfo112u2','nascabPublicUser','imgTypeList','dbFileIndex.db','43899QpsRYf','nascab.tmp.','W_OK','apiGetIpv4','ctime','updateJsonUrlMacX64','../db/dbConfigTable','accessSync','path','userData','userDataFolder','filename','m3u8segmentDuration','defaultLanguage','tokenPwdEncryptKey','updateJsonUrl','/Library/Preferences','appRootPath','value','dirname','torrents','cache_images','size','173528XKRWvJ','mtimeMs','660080DeSXZz','exe','sha256','darwin','faces','7PGIHxj','constants','updateJsonUrlLinuxX64','app/code/deviceIsPro','poster','apiGetIpv6','isDocker','.jpeg','435702flrrTc','mtime','subtitle','error-report','bookTypeList','70aYyPCI','18fjPiEF','nasAccountInfo','R_OK','cachePath','musicTypeList','NasCabTransCodeTempPath','3872022xkZYqy','exports','/.local/share','mkdirSync','better-sqlite3','cacheParentPath','upload','https://7463-tcb-5pz3fh9y3a1048-5dwlnda7744e5-1312474089.tcb.qcloud.la/poster/','cache','transcodePath','heicExt','m3u8TmpPath','app/code/activeCode','close','env','existsSync','downloadUrl','HOME','win32','0.51.3','findByTitle','procodenascabSD012012093uUh0','platform','getPath','../../','movie_info','APPDATA','updateJsonUrlMacArm64','facesPath','SELECT\x20*\x20FROM\x20config\x20where\x20title=?','prisssdSlskjwoaljwejkjq112u2','dbOther.db','subtitleUploadPath','getPrivateDbPath','temp.','getFileHashName','16488PPreBM','database','electron','nascabslskjwoaljwejkjq112u2'];_0x11f8=function(){return _0xbe5562;};return _0x11f8();}let apiBaseUrl='https://api.nascab.cn/',frpcFolder=path[_0x38e226(0x15c)](userDataFolder,'plugin',_0x38e226(0x15a),_0x38e226(0x141)),config={'dbPath':dbPath,'freeVersionSubuserCount':0x2,'frpcFolder':frpcFolder,'frpcPath':path[_0x38e226(0x15c)](frpcFolder,os['platform']()==_0x38e226(0x140)?'frpc.exe':'frpc'),'frpcTempPath':path['join'](frpcFolder,_0x38e226(0x150)+os['platform']()=='win32'?'frpc.exe':_0x38e226(0x15a)),'publicUserName':_0x38e226(0x16f),'apiGetIpv4':urlConfig[_0x38e226(0x175)],'apiGetIpv6':urlConfig[_0x38e226(0x11f)],'downloadUrl':urlConfig[_0x38e226(0x13e)],'updateJsonUrl':urlConfig[_0x38e226(0x181)],'updateJsonUrlMacArm64':urlConfig[_0x38e226(0x149)],'updateJsonUrlMacX64':urlConfig[_0x38e226(0x177)],'updateJsonUrlLinuxArm64':urlConfig['updateJsonUrlLinuxArm64'],'updateJsonUrlLinuxX64':urlConfig[_0x38e226(0x11c)],'updateWebJsonUrl':urlConfig[_0x38e226(0x169)],'exifMinTimeStamp':0x259e9d80,'nasAccountInfoPwd':_0x38e226(0x16e),'nasAccountInfoConfigKey':_0x38e226(0x129),'apiTokenKey':'nascloudapikey123aaddbc','apiBaseUrl':apiBaseUrl,'movieInfoUrl':apiBaseUrl+_0x38e226(0x147),'apiMusicInfoUrl':apiBaseUrl+'music_info','errorReportUrl':apiBaseUrl+_0x38e226(0x125),'moviePosterPrix':_0x38e226(0x135),'deviceIsActivedUrl':apiBaseUrl+_0x38e226(0x11d),'activeCodeUrl':apiBaseUrl+_0x38e226(0x13a),'activeCodeApiKey':_0x38e226(0x162),'apiPort':os[_0x38e226(0x144)]()=='linux'?parseInt(0xc08):parseInt(0x50),'apiPortHttps':os['platform']()==_0x38e226(0x161)?parseInt(0xd73):parseInt(0x1bb),'webDavPort':parseInt(0x5a),'webDavPortHttps':parseInt(0x24e3),'FTPPort':parseInt(0x15),'appRootPath':appRootPath,'userDataFolder':userDataFolder,'dbFileIndex':path['join'](userDataFolder,_0x38e226(0x153),_0x38e226(0x171)),'dbOther':path[_0x38e226(0x15c)](userDataFolder,_0x38e226(0x153),_0x38e226(0x14d)),'uploadTempFilePrefix':_0x38e226(0x173),'privateSpaceKey':_0x38e226(0x14c),'passwordKey':_0x38e226(0x155),'proCodeKey':_0x38e226(0x143),'heicExt':mediaType[_0x38e226(0x138)],'imgTypeList':mediaType[_0x38e226(0x170)],'rawImgTypeList':mediaType[_0x38e226(0x159)],'videoTypeList':mediaType['videoTypeList'],'musicTypeList':mediaType[_0x38e226(0x12c)],'bookTypeList':mediaType[_0x38e226(0x126)]};config['getFileHashNameByPathAndStat']=function(_0x444a81,_0x40703f,_0x16ee80){fs['stat'](_0x40703f,(_0x242137,_0x549ae3)=>{const _0x56b4e6=_0x4913;if(_0x242137)_0x16ee80(![]);let _0x220347=_0x40703f+_0x549ae3['ctimeMs']+_0x549ae3[_0x56b4e6(0x18a)]+_0x549ae3[_0x56b4e6(0x188)]+'',_0x304ae4=sha256(_0x220347)+_0x56b4e6(0x121);_0x444a81&&(_0x304ae4=_0x444a81+_0x304ae4),_0x16ee80(_0x304ae4);});},config[_0x38e226(0x151)]=function(_0x10d28e){const _0x10df0c=_0x38e226;let _0x5da68b=path['join'](_0x10d28e['path'],_0x10d28e[_0x10df0c(0x17d)])+_0x10d28e[_0x10df0c(0x176)]+_0x10d28e[_0x10df0c(0x123)]+_0x10d28e[_0x10df0c(0x188)]+'',_0x442d3c=sha256(_0x5da68b)+_0x10df0c(0x121);return _0x442d3c;};let cacheParentPath=userSetCachePath?userSetCachePath:path[_0x38e226(0x15c)](userDataFolder,_0x38e226(0x187));config[_0x38e226(0x133)]=cacheParentPath,config[_0x38e226(0x12b)]=path['join'](cacheParentPath,_0x38e226(0x136)),config[_0x38e226(0x16b)]=path[_0x38e226(0x15c)](cacheParentPath,_0x38e226(0x11e)),config[_0x38e226(0x14a)]=path[_0x38e226(0x15c)](cacheParentPath,_0x38e226(0x18f)),config[_0x38e226(0x16d)]=path['join'](cacheParentPath,_0x38e226(0x16c)),config[_0x38e226(0x15e)]=path['join'](cacheParentPath,_0x38e226(0x124)),config[_0x38e226(0x15d)]=path[_0x38e226(0x15c)](cacheParentPath,_0x38e226(0x186)),config[_0x38e226(0x14e)]=path[_0x38e226(0x15c)](cacheParentPath,_0x38e226(0x124),_0x38e226(0x134)),config[_0x38e226(0x166)]=path['join'](cacheParentPath,'tempFiles'),config['getMediaCoverCachePath']=function(_0x5ef26e,_0x79e28b){const _0x3a3ddd=_0x38e226;let _0x28e786=path['join'](_0x5ef26e['path'],_0x5ef26e[_0x3a3ddd(0x17d)])+_0x5ef26e[_0x3a3ddd(0x176)]+_0x5ef26e[_0x3a3ddd(0x123)]+_0x5ef26e[_0x3a3ddd(0x188)]+'',_0xfa3c0d=sha256(_0x28e786)+_0x3a3ddd(0x121);return _0x79e28b&&(_0xfa3c0d=_0x79e28b+_0xfa3c0d),path[_0x3a3ddd(0x15c)](config[_0x3a3ddd(0x16d)],_0xfa3c0d);};m3u8Path?config[_0x38e226(0x139)]=path[_0x38e226(0x15c)](m3u8Path,'NasCabTransCodeTempPath'):packageInfo[_0x38e226(0x120)]?config['m3u8TmpPath']=path[_0x38e226(0x15c)](_0x38e226(0x167)):config['m3u8TmpPath']=path['join'](userDataFolder,_0x38e226(0x12d));config[_0x38e226(0x17e)]=0x3,config[_0x38e226(0x14f)]=function(_0x26fe11){const _0x12819c=_0x38e226;return path[_0x12819c(0x15c)](_0x26fe11,'nascabconfig','dbnascab');};let defaultLanguage=_0x38e226(0x156);config['getLanguage']=function(_0x36dbd2){const _0x1e78e8=_0x38e226;let _0x188d94=dbConfigTable[_0x1e78e8(0x142)](_0x36dbd2,_0x1e78e8(0x165)),_0xbc3869=defaultLanguage;return _0x188d94&&(_0xbc3869=_0x188d94[_0x1e78e8(0x184)]),_0xbc3869;},config[_0x38e226(0x17f)]=defaultLanguage,config[_0x38e226(0x180)]=_0x38e226(0x157),module[_0x38e226(0x12f)]=config;