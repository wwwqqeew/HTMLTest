//医疗专区规划
var datafqgh = [{"name":"一期","line":[{"lng":113.331056,"lat":22.046329},{"lng":113.328339,"lat":22.04528},{"lng":113.327758,"lat":22.045897},{"lng":113.328167,"lat":22.046449},{"lng":113.328551,"lat":22.046442},{"lng":113.330503,"lat":22.047305},{"lng":113.331056,"lat":22.046329}]},{"name":"二期（孵化、研发区）","line":[{"lng":113.330477,"lat":22.047351},{"lng":113.328046,"lat":22.046447},{"lng":113.327722,"lat":22.045943},{"lng":113.327052,"lat":22.046804},{"lng":113.32727,"lat":22.047586},{"lng":113.328399,"lat":22.047268},{"lng":113.330104,"lat":22.048009},{"lng":113.330477,"lat":22.047351}]},{"name":"二期（生产、物流区）","line":[{"lng":113.330067,"lat":22.048074},{"lng":113.328373,"lat":22.047348},{"lng":113.327285,"lat":22.04764},{"lng":113.32795,"lat":22.050032},{"lng":113.328011,"lat":22.050126},{"lng":113.328798,"lat":22.050313},{"lng":113.330067,"lat":22.048074}]}];

//功能分区
var datagnfq = [{"name":"生活配套区","line":[{"lng":113.328663,"lat":22.046095},{"lng":113.328682,"lat":22.046092},{"lng":113.328702,"lat":22.046089},{"lng":113.328721,"lat":22.046084},{"lng":113.328739,"lat":22.046079},{"lng":113.328757,"lat":22.046072},{"lng":113.328775,"lat":22.046064},{"lng":113.328792,"lat":22.046056},{"lng":113.328809,"lat":22.046046},{"lng":113.328824,"lat":22.046036},{"lng":113.328839,"lat":22.046025},{"lng":113.328854,"lat":22.046013},{"lng":113.328867,"lat":22.046},{"lng":113.328879,"lat":22.045986},{"lng":113.328891,"lat":22.045972},{"lng":113.328901,"lat":22.045957},{"lng":113.328911,"lat":22.045942},{"lng":113.328919,"lat":22.045926},{"lng":113.328926,"lat":22.04591},{"lng":113.328932,"lat":22.045893},{"lng":113.328937,"lat":22.045876},{"lng":113.328941,"lat":22.045859},{"lng":113.328943,"lat":22.045842},{"lng":113.328944,"lat":22.045824},{"lng":113.328944,"lat":22.045807},{"lng":113.328943,"lat":22.045789},{"lng":113.328941,"lat":22.045772},{"lng":113.328937,"lat":22.045755},{"lng":113.328932,"lat":22.045738},{"lng":113.328926,"lat":22.045721},{"lng":113.328919,"lat":22.045705},{"lng":113.328911,"lat":22.045689},{"lng":113.328901,"lat":22.045674},{"lng":113.328891,"lat":22.045659},{"lng":113.328879,"lat":22.045645},{"lng":113.328867,"lat":22.045631},{"lng":113.328854,"lat":22.045618},{"lng":113.328839,"lat":22.045606},{"lng":113.328824,"lat":22.045595},{"lng":113.328809,"lat":22.045585},{"lng":113.328792,"lat":22.045575},{"lng":113.328775,"lat":22.045567},{"lng":113.328757,"lat":22.045559},{"lng":113.328739,"lat":22.045552},{"lng":113.328721,"lat":22.045547},{"lng":113.328702,"lat":22.045542},{"lng":113.328682,"lat":22.045539},{"lng":113.328663,"lat":22.045536},{"lng":113.328643,"lat":22.045535},{"lng":113.328624,"lat":22.045535},{"lng":113.328604,"lat":22.045535},{"lng":113.328584,"lat":22.045537},{"lng":113.328565,"lat":22.04554},{"lng":113.328546,"lat":22.045544},{"lng":113.328527,"lat":22.045549},{"lng":113.328509,"lat":22.045555},{"lng":113.328491,"lat":22.045563},{"lng":113.328473,"lat":22.045571},{"lng":113.328457,"lat":22.04558},{"lng":113.32844,"lat":22.04559},{"lng":113.328425,"lat":22.045601},{"lng":113.32841,"lat":22.045612},{"lng":113.328397,"lat":22.045625},{"lng":113.328384,"lat":22.045638},{"lng":113.328372,"lat":22.045652},{"lng":113.328361,"lat":22.045666},{"lng":113.328351,"lat":22.045681},{"lng":113.328342,"lat":22.045697},{"lng":113.328334,"lat":22.045713},{"lng":113.328328,"lat":22.045729},{"lng":113.328322,"lat":22.045746},{"lng":113.328318,"lat":22.045763},{"lng":113.328315,"lat":22.045781},{"lng":113.328313,"lat":22.045798},{"lng":113.328313,"lat":22.045816},{"lng":113.328313,"lat":22.045833},{"lng":113.328315,"lat":22.04585},{"lng":113.328318,"lat":22.045868},{"lng":113.328322,"lat":22.045885},{"lng":113.328328,"lat":22.045902},{"lng":113.328334,"lat":22.045918},{"lng":113.328342,"lat":22.045934},{"lng":113.328351,"lat":22.04595},{"lng":113.328361,"lat":22.045965},{"lng":113.328372,"lat":22.045979},{"lng":113.328384,"lat":22.045993},{"lng":113.328397,"lat":22.046006},{"lng":113.32841,"lat":22.046019},{"lng":113.328425,"lat":22.04603},{"lng":113.32844,"lat":22.046041},{"lng":113.328457,"lat":22.046051},{"lng":113.328473,"lat":22.04606},{"lng":113.328491,"lat":22.046068},{"lng":113.328509,"lat":22.046076},{"lng":113.328527,"lat":22.046082},{"lng":113.328546,"lat":22.046087},{"lng":113.328565,"lat":22.046091},{"lng":113.328584,"lat":22.046094},{"lng":113.328604,"lat":22.046096},{"lng":113.328624,"lat":22.046096},{"lng":113.328643,"lat":22.046096},{"lng":113.328663,"lat":22.046095}]},{"name":"政务服务平台去","line":[{"lng":113.330304,"lat":22.046863},{"lng":113.330341,"lat":22.046854},{"lng":113.330377,"lat":22.046849},{"lng":113.330411,"lat":22.04684},{"lng":113.330441,"lat":22.04683},{"lng":113.330469,"lat":22.046818},{"lng":113.330496,"lat":22.046804},{"lng":113.330518,"lat":22.046788},{"lng":113.330539,"lat":22.046772},{"lng":113.330557,"lat":22.04675},{"lng":113.33057,"lat":22.046731},{"lng":113.330582,"lat":22.04671},{"lng":113.330591,"lat":22.046685},{"lng":113.330597,"lat":22.04666},{"lng":113.330599,"lat":22.046634},{"lng":113.330598,"lat":22.046607},{"lng":113.330594,"lat":22.046579},{"lng":113.330586,"lat":22.046552},{"lng":113.330577,"lat":22.046523},{"lng":113.330564,"lat":22.046493},{"lng":113.330548,"lat":22.046462},{"lng":113.33053,"lat":22.046431},{"lng":113.330508,"lat":22.0464},{"lng":113.330484,"lat":22.046368},{"lng":113.330457,"lat":22.046337},{"lng":113.330428,"lat":22.046306},{"lng":113.330394,"lat":22.046275},{"lng":113.330359,"lat":22.046243},{"lng":113.330323,"lat":22.046212},{"lng":113.330286,"lat":22.046183},{"lng":113.330246,"lat":22.046153},{"lng":113.330202,"lat":22.046125},{"lng":113.33016,"lat":22.046098},{"lng":113.330115,"lat":22.046071},{"lng":113.330068,"lat":22.046045},{"lng":113.330022,"lat":22.046022},{"lng":113.329973,"lat":22.045999},{"lng":113.329923,"lat":22.045979},{"lng":113.329874,"lat":22.045957},{"lng":113.329824,"lat":22.04594},{"lng":113.329774,"lat":22.045921},{"lng":113.329726,"lat":22.045908},{"lng":113.329676,"lat":22.045895},{"lng":113.329628,"lat":22.045882},{"lng":113.329579,"lat":22.045874},{"lng":113.329532,"lat":22.045865},{"lng":113.329486,"lat":22.045858},{"lng":113.329441,"lat":22.045857},{"lng":113.329396,"lat":22.045853},{"lng":113.329354,"lat":22.045854},{"lng":113.329313,"lat":22.045855},{"lng":113.329276,"lat":22.04586},{"lng":113.329239,"lat":22.045866},{"lng":113.329205,"lat":22.045873},{"lng":113.329172,"lat":22.045881},{"lng":113.329142,"lat":22.045895},{"lng":113.329116,"lat":22.045908},{"lng":113.32909,"lat":22.045922},{"lng":113.329069,"lat":22.04594},{"lng":113.329049,"lat":22.045957},{"lng":113.329034,"lat":22.045977},{"lng":113.329021,"lat":22.045998},{"lng":113.329012,"lat":22.046022},{"lng":113.329005,"lat":22.046045},{"lng":113.329,"lat":22.046071},{"lng":113.329001,"lat":22.046096},{"lng":113.329002,"lat":22.046124},{"lng":113.329007,"lat":22.046153},{"lng":113.329016,"lat":22.04618},{"lng":113.329027,"lat":22.04621},{"lng":113.329041,"lat":22.046241},{"lng":113.329058,"lat":22.046271},{"lng":113.329079,"lat":22.046303},{"lng":113.329103,"lat":22.046335},{"lng":113.329127,"lat":22.046366},{"lng":113.329156,"lat":22.046399},{"lng":113.329187,"lat":22.046427},{"lng":113.329221,"lat":22.046459},{"lng":113.329257,"lat":22.04649},{"lng":113.329294,"lat":22.04652},{"lng":113.329333,"lat":22.046551},{"lng":113.329375,"lat":22.046579},{"lng":113.329417,"lat":22.046607},{"lng":113.32946,"lat":22.046633},{"lng":113.329507,"lat":22.04666},{"lng":113.329553,"lat":22.046685},{"lng":113.329601,"lat":22.046708},{"lng":113.32965,"lat":22.04673},{"lng":113.329699,"lat":22.046749},{"lng":113.32975,"lat":22.046769},{"lng":113.329799,"lat":22.046787},{"lng":113.329849,"lat":22.046803},{"lng":113.329897,"lat":22.046817},{"lng":113.329947,"lat":22.046829},{"lng":113.329995,"lat":22.04684},{"lng":113.330042,"lat":22.046849},{"lng":113.33009,"lat":22.046856},{"lng":113.330137,"lat":22.046861},{"lng":113.33018,"lat":22.046864},{"lng":113.330223,"lat":22.046864},{"lng":113.330264,"lat":22.046864},{"lng":113.330304,"lat":22.046863}]},{"name":"中心景观区","line":[{"lng":113.330333,"lat":22.047386},{"lng":113.330421,"lat":22.047329},{"lng":113.330491,"lat":22.047201},{"lng":113.330621,"lat":22.046942},{"lng":113.330652,"lat":22.04687},{"lng":113.330634,"lat":22.046835},{"lng":113.330603,"lat":22.046819},{"lng":113.330527,"lat":22.046828},{"lng":113.330431,"lat":22.046889},{"lng":113.330254,"lat":22.046922},{"lng":113.329967,"lat":22.046898},{"lng":113.329597,"lat":22.046775},{"lng":113.329055,"lat":22.046502},{"lng":113.328632,"lat":22.046258},{"lng":113.328329,"lat":22.046055},{"lng":113.328173,"lat":22.045926},{"lng":113.328066,"lat":22.0459},{"lng":113.327929,"lat":22.045937},{"lng":113.327821,"lat":22.046002},{"lng":113.327659,"lat":22.046162},{"lng":113.327503,"lat":22.046346},{"lng":113.327114,"lat":22.046854},{"lng":113.327101,"lat":22.046942},{"lng":113.32715,"lat":22.047036},{"lng":113.327199,"lat":22.047064},{"lng":113.327239,"lat":22.047083},{"lng":113.32728,"lat":22.047079},{"lng":113.327434,"lat":22.046986},{"lng":113.327611,"lat":22.046932},{"lng":113.327872,"lat":22.046897},{"lng":113.328273,"lat":22.046853},{"lng":113.328549,"lat":22.046786},{"lng":113.328943,"lat":22.046874},{"lng":113.329223,"lat":22.046918},{"lng":113.329458,"lat":22.046975},{"lng":113.329639,"lat":22.04704},{"lng":113.329861,"lat":22.047137},{"lng":113.330053,"lat":22.047274},{"lng":113.33016,"lat":22.047352},{"lng":113.330253,"lat":22.04739},{"lng":113.330333,"lat":22.047386}]},{"name":"生物孵化研发区","line":[{"lng":113.32927,"lat":22.047581},{"lng":113.329336,"lat":22.047578},{"lng":113.329402,"lat":22.047573},{"lng":113.329464,"lat":22.047568},{"lng":113.329524,"lat":22.047561},{"lng":113.329582,"lat":22.047553},{"lng":113.329636,"lat":22.047544},{"lng":113.329688,"lat":22.047535},{"lng":113.329736,"lat":22.047522},{"lng":113.32978,"lat":22.04751},{"lng":113.329821,"lat":22.047496},{"lng":113.329857,"lat":22.047482},{"lng":113.32989,"lat":22.047466},{"lng":113.329918,"lat":22.04745},{"lng":113.329942,"lat":22.047432},{"lng":113.329963,"lat":22.047415},{"lng":113.329978,"lat":22.047396},{"lng":113.329988,"lat":22.047378},{"lng":113.329995,"lat":22.047359},{"lng":113.329997,"lat":22.047339},{"lng":113.329994,"lat":22.047319},{"lng":113.329987,"lat":22.047298},{"lng":113.329975,"lat":22.047277},{"lng":113.329959,"lat":22.047256},{"lng":113.329938,"lat":22.047235},{"lng":113.329913,"lat":22.047215},{"lng":113.329883,"lat":22.047194},{"lng":113.32985,"lat":22.047173},{"lng":113.329813,"lat":22.047152},{"lng":113.329772,"lat":22.047133},{"lng":113.329726,"lat":22.047113},{"lng":113.329678,"lat":22.047095},{"lng":113.329626,"lat":22.047076},{"lng":113.329571,"lat":22.047059},{"lng":113.329513,"lat":22.047042},{"lng":113.329452,"lat":22.047026},{"lng":113.329389,"lat":22.04701},{"lng":113.329325,"lat":22.046995},{"lng":113.329257,"lat":22.046982},{"lng":113.329188,"lat":22.04697},{"lng":113.329117,"lat":22.046958},{"lng":113.329046,"lat":22.046948},{"lng":113.328973,"lat":22.04694},{"lng":113.3289,"lat":22.046932},{"lng":113.328827,"lat":22.046925},{"lng":113.328753,"lat":22.04692},{"lng":113.32868,"lat":22.046915},{"lng":113.328608,"lat":22.046912},{"lng":113.328535,"lat":22.04691},{"lng":113.328465,"lat":22.04691},{"lng":113.328395,"lat":22.046912},{"lng":113.328327,"lat":22.046913},{"lng":113.328261,"lat":22.046917},{"lng":113.328198,"lat":22.046923},{"lng":113.328136,"lat":22.046928},{"lng":113.328077,"lat":22.046936},{"lng":113.328022,"lat":22.046945},{"lng":113.327969,"lat":22.046955},{"lng":113.327919,"lat":22.046965},{"lng":113.327874,"lat":22.046976},{"lng":113.327831,"lat":22.046991},{"lng":113.327793,"lat":22.047004},{"lng":113.327757,"lat":22.047019},{"lng":113.327726,"lat":22.047035},{"lng":113.327701,"lat":22.047051},{"lng":113.327678,"lat":22.047069},{"lng":113.327661,"lat":22.047087},{"lng":113.327648,"lat":22.047105},{"lng":113.327639,"lat":22.047125},{"lng":113.327635,"lat":22.047145},{"lng":113.327635,"lat":22.047166},{"lng":113.32764,"lat":22.047186},{"lng":113.32765,"lat":22.047206},{"lng":113.327663,"lat":22.047226},{"lng":113.327682,"lat":22.047248},{"lng":113.327706,"lat":22.047268},{"lng":113.327733,"lat":22.04729},{"lng":113.327764,"lat":22.04731},{"lng":113.327799,"lat":22.04733},{"lng":113.327839,"lat":22.047351},{"lng":113.327882,"lat":22.04737},{"lng":113.327929,"lat":22.047389},{"lng":113.327979,"lat":22.047408},{"lng":113.328032,"lat":22.047427},{"lng":113.328089,"lat":22.047444},{"lng":113.328148,"lat":22.04746},{"lng":113.328209,"lat":22.047476},{"lng":113.328274,"lat":22.047491},{"lng":113.32834,"lat":22.047504},{"lng":113.328409,"lat":22.047518},{"lng":113.328478,"lat":22.04753},{"lng":113.328549,"lat":22.04754},{"lng":113.328621,"lat":22.04755},{"lng":113.328694,"lat":22.047557},{"lng":113.328768,"lat":22.047565},{"lng":113.328841,"lat":22.047571},{"lng":113.328915,"lat":22.047575},{"lng":113.328987,"lat":22.04758},{"lng":113.329061,"lat":22.047582},{"lng":113.329131,"lat":22.047583},{"lng":113.329201,"lat":22.047583},{"lng":113.32927,"lat":22.047581}]},{"name":"生物制造生产区","line":[{"lng":113.328749,"lat":22.049185},{"lng":113.328801,"lat":22.049178},{"lng":113.328853,"lat":22.049168},{"lng":113.328903,"lat":22.049156},{"lng":113.328953,"lat":22.04914},{"lng":113.329002,"lat":22.049122},{"lng":113.329049,"lat":22.0491},{"lng":113.329095,"lat":22.049076},{"lng":113.329139,"lat":22.04905},{"lng":113.329181,"lat":22.049021},{"lng":113.329221,"lat":22.04899},{"lng":113.329259,"lat":22.048956},{"lng":113.329295,"lat":22.04892},{"lng":113.329328,"lat":22.048883},{"lng":113.329358,"lat":22.048843},{"lng":113.329386,"lat":22.048802},{"lng":113.329411,"lat":22.048759},{"lng":113.329433,"lat":22.048715},{"lng":113.329453,"lat":22.04867},{"lng":113.329469,"lat":22.048624},{"lng":113.329482,"lat":22.048576},{"lng":113.329491,"lat":22.048529},{"lng":113.329498,"lat":22.04848},{"lng":113.329501,"lat":22.048432},{"lng":113.329501,"lat":22.048383},{"lng":113.329498,"lat":22.048335},{"lng":113.329491,"lat":22.048286},{"lng":113.329482,"lat":22.048239},{"lng":113.329469,"lat":22.048191},{"lng":113.329453,"lat":22.048145},{"lng":113.329433,"lat":22.0481},{"lng":113.329411,"lat":22.048056},{"lng":113.329386,"lat":22.048013},{"lng":113.329358,"lat":22.047972},{"lng":113.329328,"lat":22.047932},{"lng":113.329295,"lat":22.047895},{"lng":113.329259,"lat":22.047859},{"lng":113.329221,"lat":22.047825},{"lng":113.329181,"lat":22.047794},{"lng":113.329139,"lat":22.047765},{"lng":113.329095,"lat":22.047739},{"lng":113.329049,"lat":22.047715},{"lng":113.329002,"lat":22.047693},{"lng":113.328953,"lat":22.047675},{"lng":113.328903,"lat":22.047659},{"lng":113.328853,"lat":22.047647},{"lng":113.328801,"lat":22.047637},{"lng":113.328749,"lat":22.04763},{"lng":113.328697,"lat":22.047626},{"lng":113.328644,"lat":22.047626},{"lng":113.328592,"lat":22.047628},{"lng":113.32854,"lat":22.047633},{"lng":113.328488,"lat":22.047641},{"lng":113.328437,"lat":22.047653},{"lng":113.328387,"lat":22.047667},{"lng":113.328338,"lat":22.047684},{"lng":113.32829,"lat":22.047704},{"lng":113.328243,"lat":22.047726},{"lng":113.328198,"lat":22.047751},{"lng":113.328155,"lat":22.047779},{"lng":113.328114,"lat":22.047809},{"lng":113.328075,"lat":22.047842},{"lng":113.328038,"lat":22.047876},{"lng":113.328004,"lat":22.047913},{"lng":113.327972,"lat":22.047952},{"lng":113.327942,"lat":22.047992},{"lng":113.327916,"lat":22.048034},{"lng":113.327892,"lat":22.048078},{"lng":113.327872,"lat":22.048122},{"lng":113.327854,"lat":22.048168},{"lng":113.327839,"lat":22.048215},{"lng":113.327828,"lat":22.048262},{"lng":113.32782,"lat":22.04831},{"lng":113.327815,"lat":22.048359},{"lng":113.327814,"lat":22.048408},{"lng":113.327815,"lat":22.048456},{"lng":113.32782,"lat":22.048505},{"lng":113.327828,"lat":22.048553},{"lng":113.327839,"lat":22.0486},{"lng":113.327854,"lat":22.048647},{"lng":113.327872,"lat":22.048693},{"lng":113.327892,"lat":22.048737},{"lng":113.327916,"lat":22.048781},{"lng":113.327942,"lat":22.048823},{"lng":113.327972,"lat":22.048863},{"lng":113.328004,"lat":22.048902},{"lng":113.328038,"lat":22.048939},{"lng":113.328075,"lat":22.048973},{"lng":113.328114,"lat":22.049006},{"lng":113.328155,"lat":22.049036},{"lng":113.328198,"lat":22.049064},{"lng":113.328243,"lat":22.049089},{"lng":113.32829,"lat":22.049111},{"lng":113.328338,"lat":22.049131},{"lng":113.328387,"lat":22.049148},{"lng":113.328437,"lat":22.049162},{"lng":113.328488,"lat":22.049174},{"lng":113.32854,"lat":22.049182},{"lng":113.328592,"lat":22.049187},{"lng":113.328644,"lat":22.049189},{"lng":113.328697,"lat":22.049189},{"lng":113.328749,"lat":22.049185}]},{"name":"医药物流区","line":[{"lng":113.328557,"lat":22.050291},{"lng":113.328594,"lat":22.050286},{"lng":113.328631,"lat":22.050279},{"lng":113.328665,"lat":22.05027},{"lng":113.3287,"lat":22.05026},{"lng":113.328734,"lat":22.050249},{"lng":113.328767,"lat":22.050236},{"lng":113.328798,"lat":22.05022},{"lng":113.328828,"lat":22.050203},{"lng":113.328857,"lat":22.050184},{"lng":113.328886,"lat":22.050163},{"lng":113.328912,"lat":22.050141},{"lng":113.328937,"lat":22.050119},{"lng":113.32896,"lat":22.050095},{"lng":113.32898,"lat":22.050069},{"lng":113.329,"lat":22.050042},{"lng":113.329018,"lat":22.050014},{"lng":113.329033,"lat":22.049987},{"lng":113.329045,"lat":22.049958},{"lng":113.329057,"lat":22.049928},{"lng":113.329065,"lat":22.049898},{"lng":113.329072,"lat":22.049868},{"lng":113.329076,"lat":22.049837},{"lng":113.329078,"lat":22.049806},{"lng":113.329078,"lat":22.049774},{"lng":113.329076,"lat":22.049744},{"lng":113.32907,"lat":22.049713},{"lng":113.329063,"lat":22.049682},{"lng":113.329055,"lat":22.049653},{"lng":113.329043,"lat":22.049623},{"lng":113.32903,"lat":22.049594},{"lng":113.329014,"lat":22.049567},{"lng":113.328996,"lat":22.049539},{"lng":113.328977,"lat":22.049513},{"lng":113.328954,"lat":22.049488},{"lng":113.328931,"lat":22.049464},{"lng":113.328906,"lat":22.049442},{"lng":113.32888,"lat":22.049421},{"lng":113.328851,"lat":22.049401},{"lng":113.328821,"lat":22.049382},{"lng":113.328791,"lat":22.049365},{"lng":113.328759,"lat":22.049351},{"lng":113.328726,"lat":22.049338},{"lng":113.328692,"lat":22.049327},{"lng":113.328658,"lat":22.049317},{"lng":113.328623,"lat":22.049309},{"lng":113.328586,"lat":22.049303},{"lng":113.32855,"lat":22.049298},{"lng":113.328514,"lat":22.049297},{"lng":113.328476,"lat":22.049297},{"lng":113.32844,"lat":22.049298},{"lng":113.328404,"lat":22.049302},{"lng":113.328369,"lat":22.049308},{"lng":113.328332,"lat":22.049316},{"lng":113.328297,"lat":22.049325},{"lng":113.328263,"lat":22.049336},{"lng":113.32823,"lat":22.049349},{"lng":113.328197,"lat":22.049364},{"lng":113.328166,"lat":22.04938},{"lng":113.328137,"lat":22.049398},{"lng":113.328108,"lat":22.049417},{"lng":113.32808,"lat":22.049438},{"lng":113.328055,"lat":22.049461},{"lng":113.328031,"lat":22.049484},{"lng":113.32801,"lat":22.049508},{"lng":113.32799,"lat":22.049536},{"lng":113.327971,"lat":22.049562},{"lng":113.327954,"lat":22.04959},{"lng":113.32794,"lat":22.049618},{"lng":113.327929,"lat":22.049647},{"lng":113.327918,"lat":22.049678},{"lng":113.327911,"lat":22.049708},{"lng":113.327905,"lat":22.049739},{"lng":113.327903,"lat":22.049769},{"lng":113.327902,"lat":22.049801},{"lng":113.327903,"lat":22.049832},{"lng":113.327907,"lat":22.049862},{"lng":113.327913,"lat":22.049893},{"lng":113.32792,"lat":22.049923},{"lng":113.327931,"lat":22.049954},{"lng":113.327943,"lat":22.049983},{"lng":113.327958,"lat":22.050011},{"lng":113.327975,"lat":22.050039},{"lng":113.327994,"lat":22.050064},{"lng":113.328015,"lat":22.050091},{"lng":113.328037,"lat":22.050115},{"lng":113.328061,"lat":22.050138},{"lng":113.328086,"lat":22.050161},{"lng":113.328114,"lat":22.05018},{"lng":113.328143,"lat":22.0502},{"lng":113.328174,"lat":22.050217},{"lng":113.328205,"lat":22.050233},{"lng":113.328237,"lat":22.050246},{"lng":113.328271,"lat":22.050259},{"lng":113.328305,"lat":22.05027},{"lng":113.32834,"lat":22.050277},{"lng":113.328376,"lat":22.050285},{"lng":113.328412,"lat":22.050291},{"lng":113.328448,"lat":22.050293},{"lng":113.328484,"lat":22.050294},{"lng":113.328522,"lat":22.050294},{"lng":113.328557,"lat":22.050291}]}];

//生物医药交通规划
var datajtgh = [{"name":"政务平台及生活配套区交通流","type":1,"line":[{"lng":113.329972,"lat":22.045975},{"lng":113.330223,"lat":22.045397}]},{"name":"政务平台及生活配套区交通流","type":1,"line":[{"lng":113.329972,"lat":22.045975},{"lng":113.330008,"lat":22.04601},{"lng":113.330027,"lat":22.046026},{"lng":113.330042,"lat":22.046038},{"lng":113.330057,"lat":22.046048},{"lng":113.330084,"lat":22.046062},{"lng":113.330111,"lat":22.046073},{"lng":113.330138,"lat":22.046079},{"lng":113.330165,"lat":22.046084},{"lng":113.330192,"lat":22.046087},{"lng":113.33026,"lat":22.046092}]},{"name":"政务平台及生活配套区交通流","type":1,"line":[{"lng":113.33026,"lat":22.046092},{"lng":113.330509,"lat":22.045498}]},{"name":"生物孵化研发区交通流","type":2,"line":[{"lng":113.328777,"lat":22.046447},{"lng":113.328415,"lat":22.046296},{"lng":113.328094,"lat":22.046359},{"lng":113.327875,"lat":22.046844}]},{"name":"政务平台及生活配套区交通流","type":1,"line":[{"lng":113.328777,"lat":22.046447},{"lng":113.329141,"lat":22.045637},{"lng":113.329972,"lat":22.045975}]},{"name":"政务平台及生活配套区交通流","type":1,"line":[{"lng":113.33026,"lat":22.046092},{"lng":113.330528,"lat":22.04621},{"lng":113.330615,"lat":22.046279},{"lng":113.330697,"lat":22.046401},{"lng":113.330734,"lat":22.046532},{"lng":113.33072,"lat":22.046669},{"lng":113.33044,"lat":22.047142}]},{"name":"生物孵化研发区交通流","type":2,"line":[{"lng":113.33044,"lat":22.047142},{"lng":113.329974,"lat":22.047985}]},{"name":"生物孵化研发区交通流","type":2,"line":[{"lng":113.33044,"lat":22.047142},{"lng":113.328777,"lat":22.046447}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.329083,"lat":22.049572},{"lng":113.329379,"lat":22.049052}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.329379,"lat":22.049052},{"lng":113.329974,"lat":22.047985}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.329083,"lat":22.049572},{"lng":113.328509,"lat":22.049277}]},{"name":"医药物流区交通流","type":4,"line":[{"lng":113.328509,"lat":22.049277},{"lng":113.328671,"lat":22.049833}]},{"name":"医药物流区交通流","type":4,"line":[{"lng":113.328547,"lat":22.049866},{"lng":113.328671,"lat":22.049833}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.328066,"lat":22.047557},{"lng":113.327413,"lat":22.047726}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.327413,"lat":22.047726},{"lng":113.326663,"lat":22.047927}]},{"name":"生物孵化研发区交通流","type":2,"line":[{"lng":113.326596,"lat":22.047725},{"lng":113.327355,"lat":22.047512}]},{"name":"生物孵化研发区交通流","type":2,"line":[{"lng":113.327355,"lat":22.047512},{"lng":113.327413,"lat":22.047726}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.328033,"lat":22.047432},{"lng":113.328066,"lat":22.047557}]},{"name":"生物孵化研发区交通流","type":2,"line":[{"lng":113.327355,"lat":22.047512},{"lng":113.328003,"lat":22.047321}]},{"name":"生物孵化研发区交通流","type":2,"line":[{"lng":113.328033,"lat":22.047432},{"lng":113.328003,"lat":22.047321}]},{"name":"生物孵化研发区交通流","type":2,"line":[{"lng":113.328003,"lat":22.047321},{"lng":113.327875,"lat":22.046844},{"lng":113.327225,"lat":22.047032},{"lng":113.327355,"lat":22.047512}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.328727,"lat":22.048667},{"lng":113.329284,"lat":22.047695}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.329974,"lat":22.047985},{"lng":113.329284,"lat":22.047695}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.329284,"lat":22.047695},{"lng":113.32845,"lat":22.047344},{"lng":113.328033,"lat":22.047432}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.329379,"lat":22.049052},{"lng":113.328727,"lat":22.048667}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.328066,"lat":22.047557},{"lng":113.328369,"lat":22.048734}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.328369,"lat":22.048734},{"lng":113.328509,"lat":22.049277}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.328727,"lat":22.048667},{"lng":113.328369,"lat":22.048734}]},{"name":"其他","type":5,"line":[{"lng":113.327382,"lat":22.050074},{"lng":113.328529,"lat":22.050363}]},{"name":"其他","type":5,"line":[{"lng":113.328529,"lat":22.050363},{"lng":113.332063,"lat":22.051247}]},{"name":"医药物流区交通流","type":4,"line":[{"lng":113.328671,"lat":22.049833},{"lng":113.328712,"lat":22.049972},{"lng":113.328529,"lat":22.050363}]},{"name":"医药物流区交通流","type":4,"line":[{"lng":113.327874,"lat":22.049429},{"lng":113.328025,"lat":22.049989},{"lng":113.328073,"lat":22.050009},{"lng":113.328547,"lat":22.049866}]},{"name":"生物制造生产区交通流","type":3,"line":[{"lng":113.327413,"lat":22.047726},{"lng":113.327657,"lat":22.048629},{"lng":113.327874,"lat":22.049429}]}];