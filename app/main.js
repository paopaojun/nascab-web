'use strict';const _0x44f2cd=_0x2919;(function(_0x46e3b0,_0x3d28d3){const _0x55a8e0=_0x2919,_0x873bd9=_0x46e3b0();while(!![]){try{const _0x484f06=parseInt(_0x55a8e0(0x170))/0x1*(parseInt(_0x55a8e0(0xf5))/0x2)+parseInt(_0x55a8e0(0x104))/0x3*(-parseInt(_0x55a8e0(0x149))/0x4)+parseInt(_0x55a8e0(0x151))/0x5+-parseInt(_0x55a8e0(0x127))/0x6+-parseInt(_0x55a8e0(0x18a))/0x7+-parseInt(_0x55a8e0(0x124))/0x8+-parseInt(_0x55a8e0(0x12b))/0x9*(-parseInt(_0x55a8e0(0x17d))/0xa);if(_0x484f06===_0x3d28d3)break;else _0x873bd9['push'](_0x873bd9['shift']());}catch(_0x139a60){_0x873bd9['push'](_0x873bd9['shift']());}}}(_0x3c6b,0x40fb7));function _0x3c6b(){const _0x2972fb=['WebDav','launchWithSys','trash','START_WORKER_FILE_OPERATION','dbOther','showItemInFolder','./utils/initUtil','proxyWorker\x20exit','worker\x20send\x20msg\x20error','?token=','myWorkers/m3u8Worker.js','nasDdnsEnable','processList','getGlobalInfo','fail','initDbu','startSimilarPhotoWork','sha256','图书索引线程已退出[Books\x20indexing\x20worker\x20exited]','./db/dbConfigTable','nasProxyRestart','shell','FTP','createUserFolder','6ninVEi','count','myWorkers/bg/backupWorker.js','http://localhost:','FTPServer','Error\x20occurred\x20in\x20main\x20process','music','exit','shellType','START_WORKER_BG_TASK','NEW_TINY_IMAGE','then','close','1832420BDJDEi','Start\x20checking\x20for\x20updates','fileShareRestart','已经放入回收站','Relaunch','openPath','电影索引线程已退出[Movies\x20indexing\x20worker\x20exited]','run','log','START_PRE_GEN_SUBTITLE','requestSingleInstanceLock','source_type','path','1583778UMuXlB','relaunch','child_process','create','myWorkers/index/bookIndexWorker.js','fork','M3u8Transcode','Relaunch\x20Restart','放入回收站失败','focus','myWorkers/shareFolder/shareWebDav.js','addScanTaskWhenStart','nasAccountLogin','stringify','http://','OFF','./utils/messageUtil','get','myWorkers/ddnsWorker.js','aiFaceEnable','SELECT\x20count(*)\x20as\x20count\x20FROM\x20backup_task','getIpv4Address','已打开路径','createToken','value','getRootPath','isMinimized','stack','ddnsIpv4Address','openDev','type','uncaughtException','expressStartedHttps','myWorkers/subtitlesGenWorker.js','findByTitle','getAllByWhere','getExpressApiCount','killed','second-instance','myWorkers/ai/aiClassify.js','show','startClassesAiWork','Webdav\x20worker\x20is\x20stopped','69274kTjtvU','catch','NEW_PHOTO_INDEX','electron','saveMsg','webDavServer','\x20server_type=\x27FTP\x27','deleteByTitle','进程出错了','startScanPath','------Watch\x20worker\x20is\x20stopped------','cluster','isVisible','exressPort','getConfigApiPort','6kRTeEx','HTTP\x20服务正在运行[HTTP\x20server\x20is\x20running]\x20:','ready','./db/dbUserTable','关闭\x20proxyWorker','getAdmin','stop','ddnsIpv6Address','quit','reset','apiServer','照片索引线程已退出[Photos\x20indexing\x20worker\x20exited]','nasCabLogout','./utils/globalInfoUtil','刷新页面','checkWebClientAutoUpdate','init','restartWatcher','Closing\x20NasCab\x20ddns','UPDATE\x20bg_task\x20SET\x20task_state=3\x20where\x20task_state=1','did-fail-load','启用\x20frp','length','getFreePort','HTTPS\x20服务运行端口[HTTPS\x20server\x20running\x20on\x20port]:','expireTokenOnTime','NEW_MOVIE_INDEX','start','kill','isVip','resolve','myWorkers/bg/fileOperationWorker.js','3467656IqDDgK','webContents','message','2392176NgzPYW','app','myWorkers/ai/aiSimilarPhotos.js','loadURL','63Yhgxbr','createMainWindow','音乐索引线程已退出[Music\x20indexing\x20worker\x20exited]','movie','myWorkers/index/musicIndexWorker.js','Ftp\x20worker\x20is\x20stopped','main\x20err','打开路径失败','https://','stopIndexWorker','\x20server_type=\x27WebDav\x27','book','FRP\x20OFF','photo','nasRemoteState','runNewVersionTask','prepare','http://localhost/#/','exitApp','myWorkers/shareFolder/shareFtp.js','expressStarted','restore','myWorkers/index/movieIndexWorker.js','myWorkers/movieInfoWorker.js','SWITCH_MOVIE_INFO','initBackupWorker','HTTPS\x20服务正在运行[HTTPS\x20server\x20is\x20running]\x20:','error','nasDdnsState','username','902380ezlcor','send\x20message\x20callback\x20','autoLoginClient','setupPrimary','HTTP\x20服务运行端口[HTTP\x20server\x20running\x20on\x20port]:','startUpdate','/#/','SIGTERM','1426240wTUvVs','myWorkers/proxy/proxyWorker.js','isPackaged','initWindowEventAndLoadLoading','getTime','Clientless\x20service\x20mode','downloadTaskChange'];_0x3c6b=function(){return _0x2972fb;};return _0x3c6b();}let app,shell,ipcMain;try{app=require(_0x44f2cd(0xf8))[_0x44f2cd(0x128)],shell=require('electron')[_0x44f2cd(0x16d)],ipcMain=require(_0x44f2cd(0xf8))['ipcMain'];}catch(_0x49d3f3){console[_0x44f2cd(0x185)](_0x44f2cd(0x156));}let mainWindow,sha256=require(_0x44f2cd(0x169));const dbFileShare=require('./db/dbFileShare'),dbUserTable=require(_0x44f2cd(0x107));let nasAccountUtil=require('./express-server/utils/nasAccountUtils');function _0x2919(_0x1e6e87,_0x23bf72){const _0x3c6bdb=_0x3c6b();return _0x2919=function(_0x291908,_0x50f59b){_0x291908=_0x291908-0xeb;let _0x53ceb2=_0x3c6bdb[_0x291908];return _0x53ceb2;},_0x2919(_0x1e6e87,_0x23bf72);}const {fork}=require(_0x44f2cd(0x18c));let bgTaskWorkerIsRunning=![],tinyImgWorkerIsRunning=![],getMovieInfoWorkerIsRunning=![],aiFacesWorkerIsRunning=![],aiClassesWorkerIsRunning=![],aiSimilarPhotoWorker=![],globalInfoWorkerIsRunning=![],photoIndexWorkerIsRunning=![],movieIndexWorkerIsRunning=![],musicIndexWorkerIsRunning=![],bookIndexWorkerIsRunning=![],watchWorkerIsRunning=![];const messageUtil=require(_0x44f2cd(0x19a));let accountIsVip=![],backupWorkerIsRunning=![],m3u8WorkerIsRunning=![],subtitleGenWorkerIsRunning=![],loadUrl='';function workerSendMsg(_0x4faf61,_0x5dc109){const _0x3bf389=_0x44f2cd;try{_0x4faf61&&!_0x4faf61[_0x3bf389(0xef)]&&_0x4faf61['send'](_0x5dc109,undefined,undefined,_0x209359=>{const _0x40c902=_0x3bf389;_0x209359&&console[_0x40c902(0x185)](_0x40c902(0x14a),_0x209359);});}catch(_0x1fe73a){console[_0x3bf389(0x185)](_0x3bf389(0x160),_0x1fe73a);}}let dbu;function init(){const _0x19a665=_0x44f2cd;var _0x8d1fdc=require(_0x19a665(0x100));let _0x1a0489=require(_0x19a665(0x189)),_0x858b=require(_0x19a665(0x15e)),_0x2df412=require(_0x19a665(0x16b)),_0x5dd8cf=_0x858b[_0x19a665(0x16f)]();dbu=_0x858b[_0x19a665(0x167)]();function _0xe0db7d(_0x5305f9,_0x26f913){const _0x501061=_0x19a665;function _0x37525f(){const _0x517477=_0x2919;_0x5305f9[_0x517477(0x114)]();if(app)_0x858b[_0x517477(0x159)]();_0x858b['setLanguage']();if(app)mainWindow=_0x858b[_0x517477(0x12c)]();_0x858b[_0x517477(0x114)](_0x5305f9);if(app)_0x858b['initTray'](_0x5305f9,mainWindow);if(app)_0x858b[_0x517477(0x154)](_0x5305f9,mainWindow);_0x858b[_0x517477(0x11d)](),_0x858b[_0x517477(0x13a)](_0x5305f9);if(app)_0x858b[_0x517477(0x1a7)]();_0x858b[_0x517477(0x113)](),_0x26f913(mainWindow);}app?app['on'](_0x501061(0x106),()=>{_0x37525f();}):_0x37525f();}_0xe0db7d(dbu,_0x2da455=>{const _0x36f305=_0x19a665,_0x53c98d=_0x858b[_0x36f305(0x1a3)]();let _0x190c80=_0x858b[_0x36f305(0x103)]();_0x858b[_0x36f305(0x11b)](_0x190c80,_0x11f00d=>{const _0x1e2777=_0x36f305;function _0x31aa65(_0x4790ae){const _0x5e8e72=_0x2919,_0x1465b2=fork(_0x1a0489[_0x5e8e72(0x122)](__dirname,_0x4790ae),[],{'env':{'userDataFolder':_0x5dd8cf,'appRootPath':_0x53c98d},'detached':![],'killSignal':_0x5e8e72(0x150)});return _0x858b[_0x5e8e72(0x164)]['push'](_0x1465b2),_0x858b['addProcessRecord'](dbu[_0x5e8e72(0x15c)],_0x1465b2['pid']),_0x1465b2['on'](_0x5e8e72(0x177),function(_0x222125,_0x1beb20){}),_0x1465b2['on'](_0x5e8e72(0x146),function(_0x4613be){const _0x199d65=_0x5e8e72;console[_0x199d65(0x185)](_0x199d65(0xfd),_0x4613be);}),_0x1465b2;}function _0x2782f1(_0x520dd4){const _0x31e308=_0x2919;nasAccountUtil[_0x31e308(0x121)](null,dbu[_0x31e308(0x15c)])[_0x31e308(0x17b)](_0x23a6c7=>{accountIsVip=_0x23a6c7;if(_0x520dd4)_0x520dd4();})[_0x31e308(0xf6)](_0x2f2aeb=>{console['log'](_0x2f2aeb);});}dbu[_0x1e2777(0x15c)]['prepare'](_0x1e2777(0x117))['run'](),_0x2782f1(),setInterval(()=>{_0x4a5807();},0x258*0x3e8),setTimeout(()=>{const _0x442760=_0x1e2777;_0x858b[_0x442760(0x195)](dbu[_0x442760(0x15c)]),_0xf35bfd(),_0x7c49ef(),_0x7a8346(),_0x11c422(),_0x30d1cb(),_0x348a49(),_0x306d5c(),_0x299b91(),_0x39fc38();},0x1388);let _0x9ef0d5;function _0x11c422(){const _0x4f8233=_0x1e2777;if(bookIndexWorkerIsRunning)return;bookIndexWorkerIsRunning=!![],_0x9ef0d5=_0x31aa65(_0x4f8233(0x18e)),_0x9ef0d5['on'](_0x4f8233(0x126),function(_0x16ecd9){const _0x28f321=_0x4f8233;_0x16ecd9[_0x28f321(0x1a8)]==_0x28f321(0x17c)&&(bookIndexWorkerIsRunning=![]);}),_0x9ef0d5['on'](_0x4f8233(0x177),function(_0x328a8d,_0x5b7d1d,_0x75b726){const _0x45ebc7=_0x4f8233;console['log'](_0x45ebc7(0x16a),_0x5b7d1d||'',_0x75b726||''),bookIndexWorkerIsRunning=![];});}let _0xfd9821;function _0x7a8346(){const _0x1ecc96=_0x1e2777;if(musicIndexWorkerIsRunning)return;musicIndexWorkerIsRunning=!![],_0xfd9821=_0x31aa65(_0x1ecc96(0x12f)),_0xfd9821['on'](_0x1ecc96(0x126),function(_0x1b41dd){const _0x5b5777=_0x1ecc96;_0x1b41dd[_0x5b5777(0x1a8)]==_0x5b5777(0x17c)&&(musicIndexWorkerIsRunning=![]);}),_0xfd9821['on']('exit',function(_0x4fd309,_0x334990,_0x1a164f){const _0x3ef488=_0x1ecc96;console[_0x3ef488(0x185)](_0x3ef488(0x12d),_0x334990||'',_0x1a164f||''),musicIndexWorkerIsRunning=![];});}let _0x96563c;function _0x7da309(){const _0x126476=_0x1e2777;if(watchWorkerIsRunning)return;watchWorkerIsRunning=!![],_0x96563c=_0x31aa65('myWorkers/index/fileWatcherWorker.js'),_0x96563c['on']('message',function(_0x2a7c76){const _0x23f9e8=_0x2919;if(_0x2a7c76[_0x23f9e8(0x1a8)]==_0x23f9e8(0x17c))watchWorkerIsRunning=![];else{if(_0x2a7c76[_0x23f9e8(0x1a8)]==_0x23f9e8(0xf7))_0x30d1cb(),_0x299b91();else _0x2a7c76[_0x23f9e8(0x1a8)]==_0x23f9e8(0x11e)&&(_0x30d1cb(),_0x39fc38(),_0x13acaf());}}),_0x96563c['on'](_0x126476(0x177),function(_0x2fbc43,_0x106e8b,_0x394915){const _0x136588=_0x126476;console[_0x136588(0x185)](_0x136588(0xff),_0x106e8b,_0x394915),watchWorkerIsRunning=![];});}_0x7da309();let _0x32364d;function _0xf35bfd(){const _0x3588ac=_0x1e2777;if(photoIndexWorkerIsRunning)return;photoIndexWorkerIsRunning=!![],_0x32364d=_0x31aa65('myWorkers/index/photoIndexWorker.js'),_0x32364d['on'](_0x3588ac(0x126),function(_0x22d026){const _0x5aa43a=_0x3588ac;_0x22d026['type']=='close'&&(photoIndexWorkerIsRunning=![]),_0x22d026[_0x5aa43a(0x1a8)]==_0x5aa43a(0xf7)&&(_0x30d1cb(),_0x299b91());}),_0x32364d['on'](_0x3588ac(0x177),function(_0x2ef9c0,_0x5c0fc9,_0x209d12){const _0x44fa0c=_0x3588ac;console[_0x44fa0c(0x185)](_0x44fa0c(0x10f),_0x5c0fc9||'',_0x209d12||''),photoIndexWorkerIsRunning=![];});}let _0x2c7208;function _0x7c49ef(){const _0x12c747=_0x1e2777;if(movieIndexWorkerIsRunning)return;movieIndexWorkerIsRunning=!![],_0x2c7208=_0x31aa65(_0x12c747(0x141)),_0x2c7208['on']('message',function(_0x11c455){const _0x42461a=_0x12c747;if(_0x11c455[_0x42461a(0x1a8)]=='close')movieIndexWorkerIsRunning=![];else _0x11c455[_0x42461a(0x1a8)]=='NEW_MOVIE_INDEX'&&(_0x30d1cb(),_0x39fc38(),_0x13acaf());}),_0x2c7208['on'](_0x12c747(0x177),function(_0x354c20,_0x48704b,_0xa5b952){const _0x431f96=_0x12c747;console[_0x431f96(0x185)](_0x431f96(0x183),_0x48704b||'',_0xa5b952||''),movieIndexWorkerIsRunning=![];});}function _0x39fc38(){const _0x3934c0=_0x1e2777;if(getMovieInfoWorkerIsRunning)return;getMovieInfoWorkerIsRunning=!![];let _0x16a128=_0x31aa65(_0x3934c0(0x142));_0x16a128['on'](_0x3934c0(0x126),function(_0x316c42){const _0x24bf8b=_0x3934c0;_0x316c42[_0x24bf8b(0x1a8)]=='close'&&(getMovieInfoWorkerIsRunning=![]);}),_0x16a128['on'](_0x3934c0(0x177),function(){getMovieInfoWorkerIsRunning=![];});}function _0x30d1cb(){if(tinyImgWorkerIsRunning)return;tinyImgWorkerIsRunning=!![];let _0x35cc12=_0x31aa65('myWorkers/tinyImgWorker.js');_0x35cc12['on']('message',function(_0x248193){const _0x43ac53=_0x2919;if(_0x248193['type']==_0x43ac53(0x17c))tinyImgWorkerIsRunning=![];else _0x248193[_0x43ac53(0x1a8)]==_0x43ac53(0x17a)&&(_0x348a49(),_0x306d5c());}),_0x35cc12['on']('exit',function(){tinyImgWorkerIsRunning=![];});}let _0x2c5e11,_0x188753;function _0x368311(){const _0x1c15b9=_0x1e2777;let _0x127bc9=dbFileShare[_0x1c15b9(0xed)](dbu[_0x1c15b9(0x15c)],_0x1c15b9(0xfb),[]);if(_0x127bc9&&_0x127bc9[_0x1c15b9(0x11a)]>0x0)!_0x2c5e11&&(_0x2c5e11=_0x31aa65(_0x1c15b9(0x13e)),_0x2c5e11['on'](_0x1c15b9(0x177),function(){const _0x3b755f=_0x1c15b9;console['log'](_0x3b755f(0x130)),_0x2c5e11=null;}));else{_0x2df412['create'](dbu[_0x1c15b9(0x15c)],{'title':_0x1c15b9(0x174),'value':JSON['stringify']({'state':_0x1c15b9(0x10a)})});if(_0x2c5e11){let _0x4ded48=_0x2c5e11['kill']();_0x4ded48&&(_0x2c5e11=null,console[_0x1c15b9(0x185)]('Closing\x20FTP'));}}}function _0x1a32b0(){const _0x11c44e=_0x1e2777;let _0x51c02f=dbFileShare[_0x11c44e(0xed)](dbu[_0x11c44e(0x15c)],_0x11c44e(0x135),[]);if(_0x51c02f&&_0x51c02f[_0x11c44e(0x11a)]>0x0)!_0x188753&&(_0x188753=_0x31aa65(_0x11c44e(0x194)),_0x188753['on']('exit',function(){const _0x45e333=_0x11c44e;console[_0x45e333(0x185)](_0x45e333(0xf4)),_0x188753=null;}));else{_0x2df412['create'](dbu[_0x11c44e(0x15c)],{'title':_0x11c44e(0xfa),'value':JSON[_0x11c44e(0x197)]({'state':_0x11c44e(0x10a)})});if(_0x188753){let _0x5e77d6=_0x188753[_0x11c44e(0x120)]();_0x5e77d6&&(_0x188753=null);}}}let _0x31fcec;function _0xd3d77d(){const _0x1f5f01=_0x1e2777;let _0x1dd901=![],_0x3c182b=_0x2df412['findByTitle'](dbu[_0x1f5f01(0x15c)],_0x1f5f01(0x163));_0x3c182b&&_0x3c182b[_0x1f5f01(0x1a2)]==0x1&&(_0x1dd901=!![]);if(_0x1dd901)!_0x31fcec&&(_0x31fcec=_0x31aa65(_0x1f5f01(0x19c)),_0x31fcec['on']('message',function(_0x51c812){const _0x459b4a=_0x1f5f01;_0x51c812['type']==_0x459b4a(0x17c)&&(_0x31fcec=null);}),_0x31fcec['on'](_0x1f5f01(0x177),function(){const _0xda8f6e=_0x1f5f01;console[_0xda8f6e(0x185)]('DDNS\x20worker\x20is\x20stopped'),_0x31fcec=null;}));else{if(_0x31fcec){let _0x31c078=_0x31fcec[_0x1f5f01(0x120)]();_0x31c078&&(_0x31fcec=null,console[_0x1f5f01(0x185)](_0x1f5f01(0x116)));}_0x2df412['deleteByTitle'](dbu[_0x1f5f01(0x15c)],_0x1f5f01(0x10b)),_0x2df412[_0x1f5f01(0xfc)](dbu[_0x1f5f01(0x15c)],_0x1f5f01(0x1a6)),_0x2df412[_0x1f5f01(0x18d)](dbu['dbOther'],{'title':_0x1f5f01(0x147),'value':JSON[_0x1f5f01(0x197)]({'status':_0x1f5f01(0x166),'ddnsIp':'','error':_0x1f5f01(0x199)})});}}_0xd3d77d();let _0x57e06c;function _0xe6c6fb(){const _0x48d8b9=_0x1e2777;if(globalInfoWorkerIsRunning)return;globalInfoWorkerIsRunning=!![],_0x57e06c=_0x31aa65('myWorkers/globalInfoWorker.js'),_0x57e06c['on'](_0x48d8b9(0x126),function(_0x2c8bef){const _0x317d5f=_0x48d8b9;if(_0x2c8bef[_0x317d5f(0x1a8)]==_0x317d5f(0x17c))globalInfoWorkerIsRunning=![];else _0x2c8bef['type']==_0x317d5f(0xfe)&&_0x5dfb52(_0x2c8bef);}),_0x57e06c['on'](_0x48d8b9(0x177),function(){globalInfoWorkerIsRunning=![];});}_0xe6c6fb();function _0x306d5c(){const _0x313bf7=_0x1e2777;let _0x27b281=_0x2df412[_0x313bf7(0xec)](dbu[_0x313bf7(0x15c)],_0x313bf7(0x19d));if(_0x27b281&&_0x27b281['value']=='1'){if(aiFacesWorkerIsRunning)return;aiFacesWorkerIsRunning=!![];let _0x4eec4d=_0x31aa65('myWorkers/ai/aiFaceUtil.js');_0x4eec4d['on'](_0x313bf7(0x126),function(_0x50f6e3){const _0x47d535=_0x313bf7;_0x50f6e3[_0x47d535(0x1a8)]=='close'&&(aiFacesWorkerIsRunning=![]);}),_0x4eec4d['on'](_0x313bf7(0x177),function(_0x2144e4,_0x5a9825,_0x1f4c66){aiFacesWorkerIsRunning=![],_0x4eec4d=null;});}else{}}function _0x299b91(){const _0x54ae3d=_0x1e2777;let _0x269b55=_0x2df412[_0x54ae3d(0xec)](dbu['dbOther'],'aiSimilarPhotoEnable');if(_0x269b55&&_0x269b55[_0x54ae3d(0x1a2)]=='1'){if(aiSimilarPhotoWorker)return;aiSimilarPhotoWorker=!![];let _0x233254=_0x31aa65(_0x54ae3d(0x129));_0x233254['on'](_0x54ae3d(0x126),function(_0x3f4784){const _0x3fab06=_0x54ae3d;_0x3f4784[_0x3fab06(0x1a8)]=='close'&&(aiSimilarPhotoWorker=![]);}),_0x233254['on'](_0x54ae3d(0x177),()=>{_0x233254=![];});}else{}}function _0x348a49(){const _0x5b10b3=_0x1e2777;let _0x35dd8a=_0x2df412['findByTitle'](dbu[_0x5b10b3(0x15c)],'aiClassesEnable');if(_0x35dd8a&&_0x35dd8a['value']=='1'){if(aiClassesWorkerIsRunning)return;aiClassesWorkerIsRunning=!![];let _0x2b3766=_0x31aa65(_0x5b10b3(0xf1));_0x2b3766['on'](_0x5b10b3(0x126),function(_0x413586){const _0xef3cf9=_0x5b10b3;_0x413586[_0xef3cf9(0x1a8)]==_0xef3cf9(0x17c)&&(aiClassesWorkerIsRunning=![]);}),_0x2b3766['on'](_0x5b10b3(0x177),()=>{aiClassesWorkerIsRunning=![];});}else{}}let _0x4ffc81;function _0x44670e(){const _0x4dc5db=_0x1e2777;let _0x316a8f=dbu[_0x4dc5db(0x15c)][_0x4dc5db(0x13b)](_0x4dc5db(0x19e))[_0x4dc5db(0x19b)]();if(_0x316a8f[_0x4dc5db(0x171)]>0x0){if(backupWorkerIsRunning)return;backupWorkerIsRunning=!![],_0x4ffc81=_0x31aa65(_0x4dc5db(0x172)),_0x4ffc81['on']('message',function(_0x17e0d1){const _0x159613=_0x4dc5db;_0x17e0d1[_0x159613(0x1a8)]==_0x159613(0x17c)&&(backupWorkerIsRunning=![]);}),_0x4ffc81['on'](_0x4dc5db(0x177),()=>{backupWorkerIsRunning=![];});}else{if(_0x4ffc81){let _0x2793a6=_0x4ffc81['kill']();_0x2793a6&&(_0x4ffc81=null);}}}_0x44670e();let _0x467281;function _0x419af9(){const _0x4e3fe6=_0x1e2777;if(m3u8WorkerIsRunning)return;m3u8WorkerIsRunning=!![],_0x467281=_0x31aa65(_0x4e3fe6(0x162)),_0x467281['on'](_0x4e3fe6(0x126),function(_0x626ceb){const _0xac22d1=_0x4e3fe6;_0x626ceb['type']==_0xac22d1(0x17c)&&(m3u8WorkerIsRunning=![]);}),_0x467281['on'](_0x4e3fe6(0x177),function(_0x3d8b62){m3u8WorkerIsRunning=![];});}let _0x1dfa7d,_0x43d808=![];function _0x4a5807(){const _0xdbad57=_0x1e2777;_0x43d808&&(!_0x1dfa7d&&(_0x1dfa7d=_0x31aa65(_0xdbad57(0x152)),_0x1dfa7d['on']('exit',_0x4361c8=>{const _0x50acbf=_0xdbad57;console[_0x50acbf(0x185)](_0x50acbf(0x15f),_0x4361c8),_0x1dfa7d=null;}),console[_0xdbad57(0x185)](_0xdbad57(0x119))));}function _0x1514d8(){const _0x22a99d=_0x1e2777;let _0x5a288e=_0x2df412[_0x22a99d(0xec)](dbu[_0x22a99d(0x15c)],'nasRemoteEnable');!_0x5a288e||_0x5a288e&&_0x5a288e[_0x22a99d(0x1a2)]!=0x1&&_0x5a288e['value']!='1'?(_0x43d808=![],_0x1dfa7d&&(_0x1dfa7d['kill'](),_0x1dfa7d=null,console[_0x22a99d(0x185)](_0x22a99d(0x108))),_0x2df412[_0x22a99d(0x18d)](dbu[_0x22a99d(0x15c)],{'title':_0x22a99d(0x139),'value':JSON['stringify']({'status':_0x22a99d(0x166),'time':new Date()[_0x22a99d(0x155)]()+'','error':_0x22a99d(0x137)})})):(_0x43d808=!![],_0x4a5807());}_0x1514d8();let _0x1d402b;function _0x13acaf(){const _0x2e69aa=_0x1e2777;if(subtitleGenWorkerIsRunning)return;subtitleGenWorkerIsRunning=!![],_0x1d402b=_0x31aa65(_0x2e69aa(0xeb)),_0x1d402b['on'](_0x2e69aa(0x126),function(_0x4b54e2){const _0x59c36d=_0x2e69aa;_0x4b54e2[_0x59c36d(0x1a8)]==_0x59c36d(0x17c)&&(subtitleGenWorkerIsRunning=![]);}),_0x1d402b['on'](_0x2e69aa(0x177),function(_0x41e200){subtitleGenWorkerIsRunning=![];});}setTimeout(()=>{_0x13acaf();},0x1388);let _0x578c46=![],_0x280b56=![],_0x2a34d8=![];function _0x5d1a9b(_0x41196d){const _0x3987ce=_0x1e2777;try{!_0x2a34d8&&(_0x2a34d8=!![],setTimeout(()=>{const _0x5f5771=_0x2919;let _0x1da1a0=require(_0x5f5771(0x111)),_0x357c3c=_0x1da1a0[_0x5f5771(0x19f)](dbu[_0x5f5771(0x15c)]);_0x357c3c?console['log'](_0x5f5771(0x145),_0x5f5771(0x133)+_0x357c3c+':'+_0x41196d):console[_0x5f5771(0x185)](_0x5f5771(0x11c),_0x41196d);},0x3a98));}catch(_0x1766f2){console[_0x3987ce(0x185)](_0x1766f2);}}function _0x5514f(_0x2a5b02){const _0x36eb1b=_0x1e2777;_0x1a32b0(),setTimeout(()=>{_0x368311();},0x1388);!_0x280b56&&(_0x280b56=!![],setTimeout(()=>{const _0x4b85cf=_0x2919;let _0x94c865=require('./utils/globalInfoUtil'),_0x2b45dc=_0x94c865['getIpv4Address'](dbu['dbOther']);_0x2b45dc?console[_0x4b85cf(0x185)](_0x4b85cf(0x105),_0x4b85cf(0x198)+_0x2b45dc+':'+_0x2a5b02):console[_0x4b85cf(0x185)](_0x4b85cf(0x14d),_0x2a5b02);},0x3a98));_0x2df412[_0x36eb1b(0x18d)](dbu['dbOther'],{'title':_0x36eb1b(0x10e),'value':JSON['stringify']({'state':_0x36eb1b(0x184),'port':_0x2a5b02})});if(!_0x578c46){_0x578c46=!![];if(app){app[_0x36eb1b(0x153)]?loadUrl=_0x2a5b02=='80'?_0x36eb1b(0x13c):_0x36eb1b(0x173)+_0x2a5b02+_0x36eb1b(0x14f):loadUrl='http://localhost:8081/#/';let _0x1178eb=_0x2df412[_0x36eb1b(0xec)](dbu[_0x36eb1b(0x15c)],_0x36eb1b(0x14b));if(!_0x1178eb||_0x1178eb[_0x36eb1b(0x1a2)]=='1'){let _0x3e217f=dbUserTable[_0x36eb1b(0x109)](dbu['dbOther']);if(_0x3e217f){let _0x22ab19=sha256(new Date()[_0x36eb1b(0x155)]()+_0x3e217f[_0x36eb1b(0x148)]);dbUserTable[_0x36eb1b(0x1a1)](dbu[_0x36eb1b(0x15c)],_0x3e217f['id'],_0x22ab19,'localhost'),loadUrl+=_0x36eb1b(0x161)+_0x22ab19;}}_0x2da455[_0x36eb1b(0x12a)](loadUrl),_0x2da455[_0x36eb1b(0x125)]['on'](_0x36eb1b(0x118),function(){const _0x340e7a=_0x36eb1b;console[_0x340e7a(0x185)]('页面加载失败',loadUrl);}),ipcMain['on']('refresh',(_0x1138c6,_0x56e9a6)=>{const _0x1b542e=_0x36eb1b;console['log'](_0x1b542e(0x112),loadUrl),loadUrl&&_0x2da455['loadURL'](loadUrl);});}workerSendMsg(_0x1dfa7d,{'type':_0x36eb1b(0x11f)});}}let _0x4bbe7b=_0x858b[_0x1e2777(0xee)]();console['log']('NasCab\x20Api\x20进程数量\x20[NasCab\x20api\x20thread\x20count]:',_0x4bbe7b),_0x8d1fdc[_0x1e2777(0x14c)]({'exec':_0x1a0489['resolve'](__dirname,'myWorkers/expressWorker.js')}),_0x8d1fdc['on'](_0x1e2777(0x177),function(_0x10e7e6,_0x761ca8,_0x2ec0ec){const _0x412b82=_0x1e2777;console[_0x412b82(0x185)]('NasCab\x20api\x20server\x20restarting\x20',_0x761ca8,_0x2ec0ec),setTimeout(()=>{_0x44efe1();},0x1388);});for(let _0x540213=0x0;_0x540213<_0x4bbe7b;_0x540213++){_0x44efe1();}function _0x5dfb52(_0xcc13f8){const _0x41bbdc=_0x1e2777;if(_0xcc13f8[_0x41bbdc(0x188)]=='movie')_0x7c49ef();else{if(_0xcc13f8[_0x41bbdc(0x188)]==_0x41bbdc(0x138))_0xf35bfd();else{if(_0xcc13f8['source_type']==_0x41bbdc(0x176))_0x7a8346();else _0xcc13f8[_0x41bbdc(0x188)]==_0x41bbdc(0x136)&&_0x11c422();}}_0xcc13f8[_0x41bbdc(0x115)]&&(_0x7da309(),workerSendMsg(_0x96563c,_0xcc13f8));}function _0x44efe1(){const _0xba4aa=_0x1e2777,_0x3eb3ee=_0x8d1fdc[_0xba4aa(0x18f)]({'usePort':_0x11f00d,'userDataFolder':_0x5dd8cf,'appRootPath':_0x53c98d});_0x3eb3ee['on'](_0xba4aa(0x126),function(_0x160167){const _0x22443a=_0xba4aa;try{switch(_0x160167['type']){case _0x22443a(0x15b):let _0x56b7ff=_0x31aa65(_0x22443a(0x123));workerSendMsg(_0x56b7ff,_0x160167);break;case _0x22443a(0x179):if(!bgTaskWorkerIsRunning){bgTaskWorkerIsRunning=!![];let _0x348e20=_0x31aa65('myWorkers/bg/bgTaskWorker.js');_0x348e20['on'](_0x22443a(0x126),function(_0x56e7d2){const _0x34a531=_0x22443a;_0x56e7d2[_0x34a531(0x1a8)]==_0x34a531(0x17c)&&(bgTaskWorkerIsRunning=![]);});}break;case _0x22443a(0x143):_0x39fc38();break;case _0x22443a(0x186):_0x13acaf();break;case _0x22443a(0x190):_0x419af9(),workerSendMsg(_0x467281,_0x160167);break;case _0x22443a(0x16c):_0x1514d8(),workerSendMsg(_0x1dfa7d,{'type':_0x22443a(0x10d),'msg':_0x160167});break;case'nasCabLogout':_0x1514d8(),workerSendMsg(_0x1dfa7d,{'type':'stop'}),setTimeout(()=>{_0x2782f1(()=>{_0x39fc38();});},0x3e8);break;case _0x22443a(0x165):_0xe6c6fb(),workerSendMsg(_0x57e06c,_0x160167);break;case _0x22443a(0x14e):console[_0x22443a(0x185)](_0x22443a(0x17e)),_0x858b[_0x22443a(0x14e)]();break;case _0x22443a(0x144):_0x44670e();break;case _0x22443a(0x134):if(_0x160167[_0x22443a(0x188)]==_0x22443a(0x138))_0x32364d&&(_0x32364d['kill'](),_0x32364d=null,photoIndexWorkerIsRunning=![]);else{if(_0x160167[_0x22443a(0x188)]==_0x22443a(0x12e))_0x2c7208&&(_0x2c7208[_0x22443a(0x120)](),_0x2c7208=null,movieIndexWorkerIsRunning=![]);else{if(_0x160167[_0x22443a(0x188)]==_0x22443a(0x176))_0xfd9821&&(_0xfd9821[_0x22443a(0x120)](),_0xfd9821=null,musicIndexWorkerIsRunning=![]);else _0x160167[_0x22443a(0x188)]==_0x22443a(0x136)&&(_0x9ef0d5&&(_0x9ef0d5['kill'](),_0x9ef0d5=null,bookIndexWorkerIsRunning=![]));}}break;case'startScanPath':_0x5dfb52(_0x160167);break;case _0x22443a(0x17f):if(_0x160167['shareType']==_0x22443a(0x158))_0x1a32b0(),workerSendMsg(_0x188753,_0x160167);else _0x160167['shareType']==_0x22443a(0x16e)&&(_0x368311(),workerSendMsg(_0x2c5e11,_0x160167));break;case'nasDdnsRestart':_0xd3d77d(),workerSendMsg(_0x31fcec,{'type':'start','force':0x1});break;case _0x22443a(0x110):_0xd3d77d(),setTimeout(()=>{_0x2782f1(()=>{_0x39fc38();});},0x3e8);break;case _0x22443a(0x196):_0x1514d8(),workerSendMsg(_0x1dfa7d,{'type':'reset'}),_0xd3d77d(),setTimeout(()=>{_0x2782f1(()=>{_0x39fc38();});},0x3e8);break;case _0x22443a(0x16f):_0x858b[_0x22443a(0x16f)]();break;case _0x22443a(0xf3):_0x348a49();break;case'startFaceAiWork':_0x306d5c();break;case _0x22443a(0x168):_0x299b91();break;case _0x22443a(0x13f):_0x5514f(_0x160167[_0x22443a(0x102)]);break;case _0x22443a(0x1aa):_0x5d1a9b(_0x160167[_0x22443a(0x102)]);break;case _0x22443a(0x181):console[_0x22443a(0x185)](_0x22443a(0x191));if(app)app[_0x22443a(0x18b)]();_0x858b[_0x22443a(0x13d)](dbu);break;case'expressEnded':break;case _0x22443a(0x16d):if(shell){if(_0x160167[_0x22443a(0x178)]=='showItemInFolder')_0x160167[_0x22443a(0x189)]&&shell[_0x22443a(0x15d)](_0x160167[_0x22443a(0x189)]);else{if(_0x160167[_0x22443a(0x178)]=='openPath')_0x160167[_0x22443a(0x189)]&&shell[_0x22443a(0x182)](_0x160167['path'])[_0x22443a(0x17b)](_0x465bce=>{const _0x5b02aa=_0x22443a;console['log'](_0x5b02aa(0x1a0));})[_0x22443a(0xf6)](_0x5f5a77=>{const _0x3db4c1=_0x22443a;console[_0x3db4c1(0x185)](_0x3db4c1(0x132),_0x5f5a77);});else _0x160167[_0x22443a(0x178)]==_0x22443a(0x15a)&&(_0x160167[_0x22443a(0x189)]&&shell['trashItem'](_0x160167[_0x22443a(0x189)])[_0x22443a(0x17b)](_0x1ddee6=>{const _0x5c9180=_0x22443a;console[_0x5c9180(0x185)](_0x5c9180(0x180));})[_0x22443a(0xf6)](_0x54ddd7=>{const _0x18dbce=_0x22443a;console[_0x18dbce(0x185)](_0x18dbce(0x192),_0x54ddd7);}));}}break;case _0x22443a(0x157):}}catch(_0xdf9347){console[_0x22443a(0x185)](_0x22443a(0x131),_0xdf9347);}});}});});}if(app){const gotTheLock=app[_0x44f2cd(0x187)]();!gotTheLock?(app[_0x44f2cd(0x10c)](),process[_0x44f2cd(0x120)](process['pid'],'SIGTERM')):(app['on'](_0x44f2cd(0xf0),(_0x4c12c0,_0x354e21,_0x3fb6cf)=>{const _0x134c7b=_0x44f2cd;if(mainWindow){if(mainWindow[_0x134c7b(0x1a4)]())mainWindow[_0x134c7b(0x140)]();!mainWindow[_0x134c7b(0x101)]()&&mainWindow[_0x134c7b(0xf2)](),mainWindow[_0x134c7b(0x193)]();}}),init());}else init();process['on'](_0x44f2cd(0x1a9),(_0x1ee6e5,_0x1ce45c)=>{const _0x3077a1=_0x44f2cd;console[_0x3077a1(0x185)]('main\x20error:',_0x1ee6e5),dbu&&messageUtil[_0x3077a1(0xf9)](dbu[_0x3077a1(0x15c)],_0x3077a1(0x175),_0x3077a1(0x146),_0x1ee6e5[_0x3077a1(0x1a5)]||_0x1ee6e5[_0x3077a1(0x126)]);});