(function(_0xf858d3,_0x3e6937){const _0x280774=a0_0x306a,_0x290979=_0xf858d3();while(!![]){try{const _0x4806ea=parseInt(_0x280774(0x157,'h3Is'))/0x1*(parseInt(_0x280774(0x14e,'e3d)'))/0x2)+parseInt(_0x280774(0x15a,'@xZZ'))/0x3+parseInt(_0x280774(0x15c,'JLQc'))/0x4*(-parseInt(_0x280774(0x151,'af!8'))/0x5)+-parseInt(_0x280774(0x14d,'])]d'))/0x6+parseInt(_0x280774(0x14f,'%zQO'))/0x7*(-parseInt(_0x280774(0x153,'kunJ'))/0x8)+parseInt(_0x280774(0x156,'ddEn'))/0x9*(parseInt(_0x280774(0x152,'EaX3'))/0xa)+parseInt(_0x280774(0x15d,'JLQc'))/0xb;if(_0x4806ea===_0x3e6937)break;else _0x290979['push'](_0x290979['shift']());}catch(_0x34fffc){_0x290979['push'](_0x290979['shift']());}}}(a0_0x1754,0x1a5aa));const a0_0x4f2074=(function(){let _0x10edea=!![];return function(_0x4374db,_0x16080c){const _0x3015bc=_0x10edea?function(){if(_0x16080c){const _0x630c22=_0x16080c['apply'](_0x4374db,arguments);return _0x16080c=null,_0x630c22;}}:function(){};return _0x10edea=![],_0x3015bc;};}()),a0_0x50e67c=a0_0x4f2074(this,function(){const _0x28690c=a0_0x306a,_0x508967={'qZCxq':'(((.+)+)+)+$'};return a0_0x50e67c['toString']()['search'](_0x508967['qZCxq'])['toString']()['constructor'](a0_0x50e67c)[_0x28690c(0x15b,'HZm]')]('(((.+)+)+)+$');});a0_0x50e67c();const a0_0x5809ff=(function(){let _0x2fe092=!![];return function(_0x1f4e87,_0xf9fe64){const _0x55bd1d=_0x2fe092?function(){if(_0xf9fe64){const _0x4d40b2=_0xf9fe64['apply'](_0x1f4e87,arguments);return _0xf9fe64=null,_0x4d40b2;}}:function(){};return _0x2fe092=![],_0x55bd1d;};}()),a0_0x4e5fda=a0_0x5809ff(this,function(){const _0x335641={'fKlXA':'xJUJe','hsuJs':'error'},_0x1e99f0=function(){const _0x40abb8=a0_0x306a;let _0x4e1ef9;try{if('xJUJe'===_0x335641['fKlXA'])_0x4e1ef9=Function(_0x40abb8(0x154,'ecPl')+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();else{const _0x137c5f=_0x3f1c4c?function(){if(_0x2ea9cf){const _0x35db6c=_0x5ce461['apply'](_0x242389,arguments);return _0x3aa89c=null,_0x35db6c;}}:function(){};return _0x58985b=![],_0x137c5f;}}catch(_0x24c5c0){_0x4e1ef9=window;}return _0x4e1ef9;},_0x2d208d=_0x1e99f0(),_0x1b0649=_0x2d208d['console']=_0x2d208d['console']||{},_0x2ab65f=['log','warn','info',_0x335641['hsuJs'],'exception','table','trace'];for(let _0x49f569=0x0;_0x49f569<_0x2ab65f['length'];_0x49f569++){const _0x24b967=a0_0x5809ff['constructor']['prototype']['bind'](a0_0x5809ff),_0x127e93=_0x2ab65f[_0x49f569],_0x43a6c3=_0x1b0649[_0x127e93]||_0x24b967;_0x24b967['__proto__']=a0_0x5809ff['bind'](a0_0x5809ff),_0x24b967['toString']=_0x43a6c3['toString']['bind'](_0x43a6c3),_0x1b0649[_0x127e93]=_0x24b967;}});a0_0x4e5fda();import{accountLists}from'./accounts/accounts.js';import{proxyList}from'./config/proxy_list.js';import a0_0x14c659 from'./src/core/core.js';function a0_0x1754(){const _0x32e620=['lJtcKhO4r8k7c2bwu8oP','WRm2WQBcRr7cJCkPCCo3DmkCBa','o0yQ','W6yBE8kBvmklW55L','W7NdQmosWQSvq1pcGq','W4f+WO/dV2vkWPtcSa','smksCSk9WORcVmk6jsRcRCkwW6VcQmogW4HaW4VdNCks','W7VcMtLoa1JcM8omWRu','mqldRmkosuZcVSoppSowWQK','lmoVWR/cTGNdJMC','W58rWQvSW6PaWQxcO2dcP8ku','fSk3vdBcKW','zZpdIaddQIxcHSkAm8oviSkb','yN7cMmkZDZC','eJ7dSXdcRmkiW4yXW7/cI0S','ed/dVrFcQ8oFWPWjW7VcJLBdQ0q','WQddTmk/vCkFW7BcQmkqWRlcSwVcGGtcJ8kKamkNW4aS','WOK6W7JdJaiW','uZ3dSYZdNZfOW61KnsuoEq'];a0_0x1754=function(){return _0x32e620;};return a0_0x1754();}import{Helper}from'./src/utils/helper.js';import a0_0x2d7569 from'./src/utils/logger.js';async function operation(_0x54aed5,_0x4b7233){const _0x5e9eda=new a0_0x14c659(_0x54aed5,_0x4b7233);try{await _0x5e9eda['login'](),await _0x5e9eda['getUser'](),await Helper['refCheck'](_0x5e9eda['user']['user_metadata']['invited_by'],_0x5e9eda['user']['email']),await _0x5e9eda['connectWebSocket']();}catch(_0x56a169){let _0x37af3b=_0x54aed5;_0x56a169['message']?await Helper['delay'](0x2710,_0x54aed5,'Error\x20:\x20'+_0x56a169['message']+',\x20Retry\x20again\x20after\x2010\x20Second',_0x5e9eda):await Helper['delay'](0x2710,_0x54aed5,'Error\x20:'+JSON['stringify'](_0x56a169)+',\x20Retry\x20again\x20after\x2010\x20Second',_0x5e9eda),await operation(_0x37af3b,_0x4b7233);}}async function startBot(){const _0x1f39bb={'fPaRR':function(_0x18ade2,_0x1e01c0){return _0x18ade2==_0x1e01c0;},'EwEXH':function(_0x33a54f,_0x7cd697){return _0x33a54f(_0x7cd697);},'FIFJL':function(_0x48a433,_0x281034,_0x43269e){return _0x48a433(_0x281034,_0x43269e);}};return new Promise(async(_0x2d91b6,_0x11e7a9)=>{const _0x29c467=a0_0x306a;try{a0_0x2d7569['info']('BOT\x20STARTED');if(_0x1f39bb['fPaRR'](accountLists['length'],0x0))throw Error('Please\x20input\x20your\x20account\x20first\x20on\x20accounts.js\x20file');if(proxyList[_0x29c467(0x15f,'f@V(')]!=accountLists['length']&&proxyList['length']!=0x0)throw _0x1f39bb['EwEXH'](Error,_0x29c467(0x155,'(d$X')+accountLists['length']+'\x20Accounts\x20But\x20Provide\x20'+proxyList['length']);const _0x12d002=[];for(const _0x818185 of accountLists){const _0x46bb68=accountLists['indexOf'](_0x818185),_0x46014f=proxyList[_0x46bb68];_0x12d002['push'](_0x1f39bb['FIFJL'](operation,_0x818185,_0x46014f));}await Promise['all'](_0x12d002),_0x2d91b6();}catch(_0x493215){a0_0x2d7569['info'](_0x29c467(0x158,'Os%y')),a0_0x2d7569['error'](JSON['stringify'](_0x493215)),_0x11e7a9(_0x493215);}});}function a0_0x306a(_0x57a780,_0x50719a){const _0x3cfaa6=a0_0x1754();return a0_0x306a=function(_0x4e5fda,_0x5809ff){_0x4e5fda=_0x4e5fda-0x14d;let _0x325fe1=_0x3cfaa6[_0x4e5fda];if(a0_0x306a['POwMHD']===undefined){var _0x20cbb9=function(_0x4df50b){const _0x1b726b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2c8654='',_0x53ecc2='',_0xd4ee37=_0x2c8654+_0x20cbb9;for(let _0x51a171=0x0,_0x59ab43,_0x3867db,_0x355782=0x0;_0x3867db=_0x4df50b['charAt'](_0x355782++);~_0x3867db&&(_0x59ab43=_0x51a171%0x4?_0x59ab43*0x40+_0x3867db:_0x3867db,_0x51a171++%0x4)?_0x2c8654+=_0xd4ee37['charCodeAt'](_0x355782+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x59ab43>>(-0x2*_0x51a171&0x6)):_0x51a171:0x0){_0x3867db=_0x1b726b['indexOf'](_0x3867db);}for(let _0x3512d4=0x0,_0x31a0e2=_0x2c8654['length'];_0x3512d4<_0x31a0e2;_0x3512d4++){_0x53ecc2+='%'+('00'+_0x2c8654['charCodeAt'](_0x3512d4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x53ecc2);};const _0x306a46=function(_0x655f8,_0x31e593){let _0x510873=[],_0x58128b=0x0,_0x4d4296,_0x2dbe6c='';_0x655f8=_0x20cbb9(_0x655f8);let _0x3e4804;for(_0x3e4804=0x0;_0x3e4804<0x100;_0x3e4804++){_0x510873[_0x3e4804]=_0x3e4804;}for(_0x3e4804=0x0;_0x3e4804<0x100;_0x3e4804++){_0x58128b=(_0x58128b+_0x510873[_0x3e4804]+_0x31e593['charCodeAt'](_0x3e4804%_0x31e593['length']))%0x100,_0x4d4296=_0x510873[_0x3e4804],_0x510873[_0x3e4804]=_0x510873[_0x58128b],_0x510873[_0x58128b]=_0x4d4296;}_0x3e4804=0x0,_0x58128b=0x0;for(let _0x1e1598=0x0;_0x1e1598<_0x655f8['length'];_0x1e1598++){_0x3e4804=(_0x3e4804+0x1)%0x100,_0x58128b=(_0x58128b+_0x510873[_0x3e4804])%0x100,_0x4d4296=_0x510873[_0x3e4804],_0x510873[_0x3e4804]=_0x510873[_0x58128b],_0x510873[_0x58128b]=_0x4d4296,_0x2dbe6c+=String['fromCharCode'](_0x655f8['charCodeAt'](_0x1e1598)^_0x510873[(_0x510873[_0x3e4804]+_0x510873[_0x58128b])%0x100]);}return _0x2dbe6c;};a0_0x306a['ZMoWMP']=_0x306a46,_0x57a780=arguments,a0_0x306a['POwMHD']=!![];}const _0x50e67c=_0x3cfaa6[0x0],_0x4f2074=_0x4e5fda+_0x50e67c,_0x17541c=_0x57a780[_0x4f2074];if(!_0x17541c){if(a0_0x306a['xTBTAt']===undefined){const _0x22e25f=function(_0x1bc4d9){this['VJvQFr']=_0x1bc4d9,this['glPSZH']=[0x1,0x0,0x0],this['enddEK']=function(){return'newState';},this['vQRmWj']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['CdPjSK']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x22e25f['prototype']['fjFPtF']=function(){const _0x273fc4=new RegExp(this['vQRmWj']+this['CdPjSK']),_0x5841c3=_0x273fc4['test'](this['enddEK']['toString']())?--this['glPSZH'][0x1]:--this['glPSZH'][0x0];return this['AzknVF'](_0x5841c3);},_0x22e25f['prototype']['AzknVF']=function(_0x1596be){if(!Boolean(~_0x1596be))return _0x1596be;return this['wXkiKT'](this['VJvQFr']);},_0x22e25f['prototype']['wXkiKT']=function(_0x50539d){for(let _0x45292d=0x0,_0x1b81f3=this['glPSZH']['length'];_0x45292d<_0x1b81f3;_0x45292d++){this['glPSZH']['push'](Math['round'](Math['random']())),_0x1b81f3=this['glPSZH']['length'];}return _0x50539d(this['glPSZH'][0x0]);},new _0x22e25f(a0_0x306a)['fjFPtF'](),a0_0x306a['xTBTAt']=!![];}_0x325fe1=a0_0x306a['ZMoWMP'](_0x325fe1,_0x5809ff),_0x57a780[_0x4f2074]=_0x325fe1;}else _0x325fe1=_0x17541c;return _0x325fe1;},a0_0x306a(_0x57a780,_0x50719a);}((async()=>{const _0x493a70=a0_0x306a,_0x2473f0={'OIClo':'11|12|7|2|3|0|1|9|10|8|6|4|5','IEKMD':'Follow\x20On\x20:\x20https://github.com/Widiskel','EYzbf':'TENEO\x20NODE\x20BOT','npdrU':'Dont\x20forget\x20to\x20run\x20git\x20pull\x20to\x20keep\x20up\x20to\x20date'};try{const _0x3abf1e=_0x2473f0['OIClo']['split']('|');let _0x2ab744=0x0;while(!![]){switch(_0x3abf1e[_0x2ab744++]){case'0':console[_0x493a70(0x150,'Pzcq')]('By\x20:\x20Widiskel');continue;case'1':console[_0x493a70(0x150,'Pzcq')](_0x2473f0[_0x493a70(0x159,'r#uW')]);continue;case'2':console['log'](_0x2473f0['EYzbf']);continue;case'3':console['log']();continue;case'4':Helper['showSkelLogo']();continue;case'5':await startBot();continue;case'6':console['log']();continue;case'7':a0_0x2d7569['info'](_0x493a70(0x15e,'Wts1'));continue;case'8':console['log']();continue;case'9':console['log']('Join\x20Channel\x20:\x20https://t.me/skeldrophunt');continue;case'10':console['log'](_0x2473f0['npdrU']);continue;case'11':a0_0x2d7569['clear']();continue;case'12':a0_0x2d7569['info']('');continue;}break;}}catch(_0x306231){console['log']('Error\x20During\x20executing\x20bot',_0x306231),await startBot();}})());