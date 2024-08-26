function FindProxyForURL(t, e) {
  var n = JSON.parse(
      '{"com":{"12":["10minutemail","afcs.dellcdn","auth0.openai","cdninstagram","digitalocean","e1v-h.phncdn","gllto.glpals","golosameriki","malwarebytes","my.atlassian","open.spotify","singlekey-id","wunderground","www.qualcomm","www.stalker2","xhamsterlive"],"10":["ab.chatgpt","api.github","api.openai","aplawrence","boosteroid","bosch-home","deviantart","docs.redis","event.on24","macvendors","mattermost","metacritic","protonmail","skyscanner","soundcloud","timberland","watchguard","wetransfer","www.analog","www.citrix","www.lenovo","www.mouser"],"11":["abs-0.twimg","api.twitter","app.zerossl","auth.openai","bard.google","chat.openai","crunchyroll","googlevideo","news.google","rpm.grafana","ru.euronews","sydney.bing","tools.cisco","velocidrone","video.twimg","www.hetzner","www.kavkazr"],"14":["abs-zero.twimg","aftermarket.zf","cloudflare-dns","edge.microsoft","onlineradiobox","radarr.servarr","s3-1.amazonaws","support.huawei","www.smashwords"],"9":["abs.twimg","arc.intel","atlassian","ehorussia","grammarly","instagram","login.amd","oaistatic","pbs.twimg","refinitiv","skladchik","tr.anidub","www.cisco","www.intel","www.jabra"],"22":["account-api.protonmail","aftermarket.schaeffler","apt.releases.hashicorp","support.ruckuswireless","unfiltered.adguard-dns"],"18":["account.protonmail","download.jetbrains","forum.voynaplemyon","releases.hashicorp"],"16":["accounts.spotify","api.home-connect","googletagmanager","platform.twitter","ru.depositphotos","secure-web.cisco","www.digitalocean","www.wunderground"],"7":["adguard","bradyid","chatgpt","forklog","navalny","netflix","nordvpn","os.mbed","patreon","redtube","spotify","twitter","weather","www.bbc","xvideos","znanija"],"17":["api.githubcopilot","edgeservices.bing","tcr9i.chat.openai","www.support.xerox"],"3":["bbc"],"5":["canva","chess","cisco","fbsbx","fluke","intel","quora","redis","tidal","wixmp","ytimg"],"13":["cdn.oaistatic","certifytheweb","cloud.mongodb","localbitcoins","pandasecurity","ru.bellingcat","www.grammarly","www.microchip"],"6":["citrix","deezer","devops","genius","lenovo","macpaw","medium","mouser","openai","paypal","pcbway","strava","sysdig","tiktok","www.dw","www.ti"],"15":["community.cisco","download.lenovo","ios.chat.openai","mail.protonmail","packages.gitlab"],"31":["copilot-proxy.githubusercontent","myworld-portal.leica-geosystems"],"4":["dell","etsy","habr","xnxx"],"20":["documentation.meraki","files.oaiusercontent"],"19":["download.wetransfer","static.cdninstagram"],"2":["dw","fb"],"8":["euronews","facebook","formula1","gordonua","linkedin","linuxiac","m.strava","ru.iherb","ru.krymr","rustorka","serpstat","tutanota","wheather","www.dell","xhamster","zohomail"],"23":["helm.releases.hashicorp","support.cambiumnetworks"],"21":["marketplace.atlassian","scontent.cdninstagram","static-ss.xvideos-cdn","tokenized.play.google"],"28":["mobile.events.data.microsoft"],"1":["x"]},"to":{"5":["1337x"],"3":["czx"],"7":["nnmclub"]},"ru":{"4":["4pda"],"10":["abook-club","paperpaper","sobesednik"],"8":["agentura","kasparov","megapeer","newtimes","republic","tjournal"],"11":["appstorrent","doxajournal"],"5":["colta","exler","polit"],"2":["ej"],"14":["nasvsehtoshnit"],"12":["novayagazeta"],"9":["onlinesim","rutracker"],"6":["pcbway","theins","tvrain"],"15":["www.moscowtimes","www.the-village"]},"media":{"6":["agents","cherta","proekt"],"5":["holod"],"8":["istories"],"7":["verstka"],"4":["zona"]},"ca":{"7":["alberta"],"9":["mediazona"]},"tv":{"9":["anilibria","newstudio","uniongang"],"7":["kinozal","vot-tak"],"8":["lostfilm"],"15":["www.currenttime"],"12":["www.lostfilm"]},"org":{"20":["antizapret.prostovpn"],"14":["api.themoviedb","www.themoviedb","www.torproject"],"5":["aqicn","bitru","rutor"],"9":["bitbucket","rus-media","rutracker"],"7":["bitcoin","bt.t-ru","memohrc","ovdinfo","svoboda","www.hrw"],"11":["booktracker","searchfloor","www.postfix","www.wikiart"],"8":["bt2.t-ru","bt3.t-ru","bt4.t-ru","kinobase","semnasem"],"15":["dist.torproject"],"19":["gallery.zetalliance"],"10":["gnome-look","image.tmdb","omv-extras","themoviedb","torproject"],"12":["radiosvoboda","repo.mongodb","thepiratebay"],"6":["soapui"],"4":["svtv","tmdb"],"18":["tracker.opentrackr"]},"net":{"32":["api.app.prod.grazie.aws.intellij"],"6":["clamav","gulagu"],"11":["d.docs.live","vectorworks"],"15":["database.clamav","path3.xtracloud"],"20":["dual-a-0001.a-msedge"],"5":["fbcdn","pixiv","unian"],"3":["fex"],"23":["holod.global.ssl.fastly"],"27":["instagram.fhrk1-1.fna.fbcdn","instagram.fkun2-1.fna.fbcdn","instagram.frix7-1.fna.fbcdn","instagram.fvno2-1.fna.fbcdn"],"7":["kinovod"],"13":["korrespondent","portal.bgpmon"],"14":["meteo.paraplan"],"10":["mrakopedia","slideshare","st.kinovod"],"8":["pornolab","stulchik","vipdrive"]},"ch":{"14":["api.protonmail"]},"video":{"10":["api.radarr"]},"in":{"7":["app.m3u"]},"io":{"12":["app.paraswap"],"16":["firefly-ps.adobe"],"6":["gitlab","meduza"],"9":["master.qt","terraform"],"4":["mdza","vyos"],"15":["raw-data.gitlab"],"18":["registry.terraform"],"7":["swagger"],"5":["ufile"]},"co":{"17":["artifacts.elastic"],"14":["docker.elastic"],"1":["t"],"3":["vrv"]},"ai":{"11":["auth.grazie"],"6":["grazie"]},"uk":{"6":["bbc.co"],"7":["bbci.co"],"25":["download.screamingfrog.co"],"13":["ichef.bbci.co"],"20":["static.files.bbci.co"]},"app":{"13":["builds.parsec"],"5":["oasis"],"4":["resp"]},"nl":{"17":["checkout.buckaroo"],"12":["pay.buckaroo"]},"biz":{"6":["filmix"]},"is":{"8":["flibusta"],"5":["rutor"]},"pet":{"4":["fork"]},"us":{"4":["geni"]},"online":{"9":["hd.zetfix","mediazona"],"8":["sebeanus"],"11":["vhd.zetflix"],"7":["zetflix"]},"ua":{"9":["hyperhost"],"12":["weblance.com"]},"hk":{"6":["iichan"]},"site":{"18":["island-of-pleasure"],"4":["plab"],"15":["www.lostfilmtv5"]},"eu":{"11":["kavkaz-uzel"],"12":["novayagazeta"]},"party":{"6":["kemono"],"3":["ntc"]},"pub":{"4":["kino"]},"pro":{"11":["kinokopilka"]},"me":{"7":["kinozal"]},"link":{"5":["kpapp"]},"ec":{"7":["lib.rus"]},"rs":{"6":["libgen"]},"run":{"8":["lostfilm"]},"win":{"8":["lostfilm"]},"ie":{"7":["monster"]},"gov":{"3":["nih"]},"si":{"4":["nyaa"]},"wf":{"12":["nyaa.tracker"]},"cz":{"10":["openwrt.wk"],"8":["windguru"]},"wtf":{"2":["pb"]},"su":{"3":["php"]},"info":{"5":["piccy","rutor","tayga"],"10":["saverudata"]},"guru":{"11":["refactoring"]},"lv":{"9":["rus.delfi"]},"top":{"13":["seedoff.zannn"]},"cc":{"16":["static.rutracker"]},"press":{"6":["theins"]},"by":{"7":["torrent"]},"se":{"8":["underver"]},"de":{"4":["welt"]}}'
    ),
    r = e.match(/((?:.+\.)*(.+))\.([^.]+)$/);
  if (
    r &&
    n.hasOwnProperty(r[3]) &&
    ((n[r[3]].hasOwnProperty(r[1].length) &&
      -1 !== n[r[3]][r[1].length].indexOf(r[1])) ||
      (n[r[3]].hasOwnProperty(r[2].length) &&
        -1 !== n[r[3]][r[2].length].indexOf(r[2])))
  ) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }
  return "DIRECT";
}
