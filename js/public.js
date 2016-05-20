var mycookie = document.cookie;
var addr = new Array("公司", "政府机关", "请选择", "家庭", "大学", "网吧", "事业单位", "高中", "初中", "小学", "其它");
var prompt = new Array("请填入公司名称", "请填入政府机关名称", "请选择地点", "请填小区名称", "请填入大学名称", "请填入网吧名称", "请填入单位名称", "请填入学校名称", "请填入学校名称", "请填入学校名称", "请填入详细信息");

var arrProvince = new Array('北京市', '天津市', '河北省', '山西省', '内蒙古', '江苏省', '安徽省', '山东省', '辽宁省', '吉林省', '黑龙江省', '上海市', '浙江省', '江西省', '福建省', '湖北省', '湖南省', '河南省', '广东省', '广西', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏', '陕西省', '甘肃省', '宁夏', '青海省', '新疆', '香港', '澳门', '台湾省');

var arrCollege = new Array(new Array('清华大学', '中国科学院', '中国农业科学院', '北京大学', '北京航空航天大学', '中国人民大学', '中国政法大学', '北京邮电大学', '北京师范大学', '北京理工大学', '北京外国语大学', '北京交通大学', '对外经济贸易大学', '北京人民警察学院', '中央财经大学', '北京科技大学', '中央民族大学', '首都师范大学', '北京林业大学', '中国农业大学', '北京语言大学', '首都经济贸易大学', '北方工业大学', '中央广播电视大学', '北京化工大学', '北京工商大学', '北京中医药大学', '中国人民公安大学', '首都医科大学', '北京工业大学', '北京联合大学', '北京体育大学', '中国青年政治学院', '外交学院', '北京信息工程学院', '北京电影学院', '中央音乐学院', '北京广播学院', '中央戏剧学院', '首钢工学院', '北京物资学院', '北京印刷学院', '北京石油化工学院', '华北科技学院', '中国防卫科技学院', '北京服装学院', '中国协和医科大学', '北京建筑工程学院', '北京第二外国语学院', '北京农学院', '北京舞蹈学院', '中国音乐学院', '北京青年政治学院', '国际关系学院', '北京机械工业学院', '防灾技术高等专科学校', '中国劳动关系学院', '北京电子科技学院', '北京现代职业学校', '中国社会科学院研究生院', '军事医学科学院', '中华女子学院', '吉利大学', '北京信息科技大学', '北京工业职业技术学院', '北京科技职业学院', '北京科技经营管理学院', '北京经贸大学', '北京计算机应用学院'),
    new Array('天津大学', '南开大学', '天津师范大学', '天津工业大学', '天津医科大学', '天津广播电视大学', '天津外国语学院', '中国民用航空学院', '天津财经学院', '天津理工学院', '天津音乐学院', '天津科技大学', '天津农学院', '天津城建设学院', '天津商学院', '天津职业技术师范学院', '天津美术学院', '天津体育学院', '天津中医学院', '天津企业管理培训中心', '天津轻工职业技术学院', '天津商学院宝德职业技术学院', '天狮职业技术学院'),
    new Array('河北大学', '华北电力大学', '河北师范大学', '河北经贸大学', '燕山大学', '河北科技大学', '河北工业大学', '河北农业大学', '河北医科大学', '河北广播电视大学', '中国人民武装警察部队学院', '华北航天工业学院', '华北煤炭医学院', '河北理工学院', '河北科技师范学院', '河北建筑工程学院', '河北建筑科技学院', '河北承德石油高等专科学校', '河北体育学院', '河北政法职业学院', '河北石油职业技术学院', '石家庄铁道学院', '石家庄经济学院', '石家庄邮政高等专科学校', '石家庄职业技术学院', '石家庄师范专科学校', '保定师范专科学校', '张家口医学院', '邯郸职业技术学院', '张家口农业高等专科学校', '邯郸农业高等专科学校', '邢台学院', '承德医学院', '邢台职业技术学院', '东北大学秦皇岛分校', '唐山师范学院', '河北能源职业技术学院', '廊坊师范学院', '河北省职工医学院', '沧州职业技术学院', '唐山学院', '河北北方学院', '河北交通职业技术学院', '沧州师范专科学校', '衡水师范专科学校', '承德民族师范高等专科学校', '保定金融高等专科学校', '保定职业技术学院', '石家庄铁路职业技术学院'),
    new Array('山西大学', '太原理工大学', '山西医科大学', '山西师范大学', '山西财经大学', '山西农业大学', '太原广播电视大学', '山西广播电视大学', '中北大学', '华北工学院分校', '山西忻州师范学院', '山西长治医学院', '运城学院', '雁北师范学院', '太原重型机械学院', '吕梁高专', '晋东南师范专科学校', '山西省财政税务专科学校', '山西交通职业技术学院', '山西中医学院', '晋中师范高等专科学校', '晋城职业技术学院', '山西生物应用职业技术学院', '太原科技大学'),
    new Array('内蒙古大学', '内蒙古师范大学', '内蒙古工业大学', '内蒙古农业大学', '内蒙古民族大学', '内蒙古财经学院', '内蒙古医学院', '内蒙古电力学院', '包头钢铁学院', '包头师范学院', '包头职业技术学院', '包头医学院', '包头职工大学', '包头铁道学院', '呼伦贝尔学院'),
    new Array('江苏大学', '中国药科大学', '中国矿业大学', '江苏广播电视大学', '南京大学', '江苏食品职业技术学院', '南京航空航天大学', '南京邮电大学', '南京理工大学', '南京师范大学', '南京医科大学', '南京农业大学', '南京林业大学', '南京经济学院南京财经大学', '南京中医药大学', '南京工业大学', '金陵科技学院', '苏州大学', '江苏畜牧兽医职业技术学院', '扬州大学', '扬州广播电视大学', '徐州师范大学', '徐州工程学院', '东南大学', '河海大学', '江南大学', '江苏教育学院', '江苏工业学院', '江苏省邮电学校', '南京气象学院', '南京人口学院', '南京晓庄学院', '南京艺术学院', '南京工业职业技术学院', '南京审计学院', '南京建筑工程学院', '南京工程学院', '苏州铁道师范学院', '苏州城建环保学院', '徐州医学院', '徐州建筑职业技术学院', '江苏技术师范学院', '常州工学院', '常州纺织服装职业技术学院', '常州信息职业技术学院', '淮阴工学院', '盐城师范学院', '淮海工学院', '南通工学院', '南通师范学院', '南通医学院', '华东船舶工业学院', '淮阴师范学院', '镇江师范专科学校', '南通纺织职业技术学院', '常熟高等专科学校', '镇江医学院', '镇江高等专科学校', '泰州职业技术学院', '南通航运职业技术学院', '南京化工职业技术学院', '南通职业大学', '淮安信息职业技术学院', '盐城工学院', '江苏信息职业技术学院', '宿迁学院', '南京广播电视大学', '南京陆军指挥学院', '南京钟山外国语专修学院', '苏州职业大学', '江苏职工医科大学', '徐州工业职业技术学院', '硅湖职业技术学院', '金肯学院', '金山学院', '南京三江学院', '南通农业职业技术学院', '连云港化工高等专科学校', '连云港职业技术学院', '无锡轻工大学设计学院', '江苏海事职业技术学院', '苏州农业职业技术学院', '常州轻工职业技术学院', '苏州工业园区职业技术学院', '无锡职业技术学院', '南京邮电学院', '扬州职业大学', '江苏科技大学', '苏州经贸职业技术学院', '江苏省运河师范学校', '南京交通职业技术学院', '苏州科技大学', '南京化工大学'),
    new Array('安徽大学', '中国科学技术大学', '安徽师范大学', '安徽工业大学', '安徽医科大学', '安徽农业大学', '安徽理工大学', '合肥工业大学', '合肥联合大学', '中国计算机函授学院', '华东冶金学院', '安徽财贸学院', '安徽中医学院', '安徽合肥三联学院', '安徽商业高等专科学校', '安徽技术师范学院', '合肥电子工程学院', '安庆师范学院', '皖西学院', '皖南医学院', '阜阳师范学院', '淮北煤炭师范学院', '淮南师范学院', '蚌埠医学院', '巢湖学院', '安徽工程科技学院', '滁州师范专科学校', '安徽建筑工业学院', '淮南联合大学', '安徽电子信息职业技术学院', '黄山学院', '安徽经济管理学院', '池州师范专科学校', '铜陵学院', '安徽财经大学'),
    new Array('山东大学', '山东科技大学', '山东师范大学', '山东理工大学', '山东农业大学', '山东中医药大学', '济南大学', '青岛大学', '中国海洋大学', '烟台大学', '烟台教育学院烟台电视大学', '曲阜师范大学', '中国石油大学', '山东工商学院', '山东莱阳农学院', '山东建筑工程学院', '山东轻工业学院', '山东财政学院', '山东经济学院', '山东教育学院', '山东工程学院', '山东大学威海分校', '山东艺术学院', '山东工艺美术学院', '青岛建筑工程学院', '青岛科技大学', '烟台师范学院', '临沂师范学院', '泰山医学院', '聊城师范学院', '山东体育学院', '滨州学院', '潍坊学院', '山东交通学院', '德州学院', '泰山学院', '滨州医学院', '济宁医学院', '山东省农业管理干部学院', '山东广播电视大学', '山东南山职业技术学院', '济宁师范专科学校', '潍坊医学院', '枣庄师范专科学校', '山东服装职业学院', '山东建工学院'),
    new Array('辽宁大学', '中国医科大学', '东北大学', '渤海大学', '东北财经大学', '辽宁石油化工大学', '辽宁师范大学', '辽宁工程技术大学', '沈阳大学', '沈阳农业大学', '沈阳工业大学', '沈阳药科大学', '大连理工大学', '大连医科大学', '大连海事大学', '大连大学', '中国刑事警察学院', '大连水产学院', '辽宁工学院', '辽宁省交通高等专科学校', '沈阳工业学院', '沈阳航空工业学院', '沈阳建筑大学', '沈阳师范大学', '沈阳电力高等专科学校', '大连外国语学院', '大连铁道学院', '沈阳化工学院', '大连职业技术学院', '本溪冶金高等专科学校', '沈阳体育学院', '鲁迅美术学院', '大连民族学院', '鞍山师范学院', '大连轻工业学院', '鞍山科技大学', '锦州医学院', '东软信息技术学院', '大连广播电视大学', '大连商务职业技术学院', '大连铁道学院软件学院', '辽宁对外经贸职业学院', '沈阳医学院', '辽宁中医学院', '大连东软信息技术职业学院', '辽宁朝鲜族师范学校', '辽宁信息职业学院'),
    new Array('吉林大学', '东北师范大学', '吉林师范大学', '吉林农业大学', '长春理工大学', '吉林化工学院', '空军第二航空学院', '长春工程学院', '延边大学', '延边科学技术大学', '北华大学', '东北电力学院', '吉林建筑工程学院', '长春汽车工业高等专科学校', '吉林电子信息职业技术学院', '四平师范学院分院', '长春师范学院', '长春金融高等专科学校', '吉林工业职业技术学院', '长春工业大学', '中国人民解放军军需大学', '长春大学', '长春税务学院国际交流学院', '吉林特产高等专科学校', '长春税务学院', '吉林省财税高等专科学校', '吉林省粮食高等专科学校', '吉林省商业高等专科学校', '长春中医学院', '吉林省体育学院', '通化师范学院', '吉林省华侨外语职业学院', '吉林省交通职业技术学院', '吉林省经济管理干部学院', '吉林对外经贸职业学院', '吉林艺术学院', '吉林工程技术师范学院', '白城师范学院', '长春职业技术学院'),
    new Array('黑龙江大学', '东北农业大学', '东北林业大学', '八一农垦大学', '哈尔滨商业大学', '黑龙江科技学院', '黑龙江中医药大学', '哈尔滨工程大学', '哈尔滨工业大学', '哈尔滨医科大学', '哈尔滨理工大学', '哈尔滨师范大学', '齐齐哈尔大学', '哈尔滨广播电视大学', '黑龙江广播电视大学', '哈尔滨学院', '大庆石油学院', '哈尔滨金融高等专科学校', '哈尔滨体育学院', '黑龙江工程学院', '黑龙江东方学院', '佳木斯大学', '牡丹江医学院', '牡丹江师范学院', '鹤岗师范高等专科学校', '黑龙江商学院', '大庆职工大学', '哈尔滨工程高等专科学校', '哈尔滨大学', '齐齐哈尔医学院', '黑龙江交通高等专科学校', '哈尔滨林业大学'),
    new Array('上海交通大学', '复旦大学', '同济大学', '上海水产大学', '第二军医大学', '上海外国语大学', '上海财经大学', '东华大学', '华东师范大学', '华东理工大学', '上海中医药大学', '上海师范大学', '上海大学', '上海工程技术大学', '上海第二医科大学', '上海第二工业大学', '上海理工大学', '上海电视大学', '上海海事大学', '上海应用技术学院', '上海电力学院', '上海音乐学院', '上海对外贸易学院', '上海纺织高等专科学校', '华东政法学院', '上海商业职业技术学院', '上海经济管理干部学院', '上海思博职业技术学院', '上海立信会计学院', '中欧国际工商学院', '上海国家会计学院', '上海体育学院', '上海交通职业技术学院', '上海工商外国语学院', '上海金融学院', '上海医疗器械高等专科学校', '上海医药大学', '上海第二医药大学', '上海公安高等专科学校', '上海工程大学', '上海松江大学'),
    new Array('浙江大学', '浙江师范大学', '浙江工业大学', '浙江广播电视大学', '宁波大学', '温州大学', '台州广播电视大学', '中国计量学院', '浙江理工大学', '浙江林学院', '浙江教育学院', '浙江交通职业技术学院', '浙江科技学院', '浙江财经学院', '杭州电子工业学院', '杭州商学院', '杭州师范学院', '杭州金融管理干部学院', '绍兴文理学院', '嘉兴学院', '台州学院', '浙江机电职业技术学院', '浙江传媒学院', '金华职业技术学院', '浙江海洋学院', '浙江万里学院', '浙江医药职业技术学院', '浙江工商职业技术学院', '浙江工贸职业技术学院', '浙江旅游职业学院', '浙江中医学院', '温州医学院', '温州师范学院', '宁波高等专科学校', '宁波服装职业技术学院', '湖州师范学院', '丽水职业技术学院', '杭州职业技术学院', '中国美术学院', '浙江轻纺学院', '浙江经济职业技术学院', '浙江医药高等专科学校', '杭州电子科技大学'),
    new Array('江西财经大学', '江西农业大学', '江西师范大学', '南昌大学', '江西医学院', '江西公安专科学校', '江西教育学院', '东华理工学院', '江西科技师范学院', '九江学院', '井冈山师范学院', '南昌工程学院', '赣南师范学院', '华东交通大学', '江西工业职业技术学院工业贸易分院', '南昌高等专科学校', '南昌航空工业学院', '景德镇陶瓷学院', '上饶师范学院', '赣南医学院', '南方冶金学院', '萍乡高等专科学校', '江西理工大学', '江西航天科技大学'),
    new Array('福建师范大学', '福建农业大学', '福建医科大学', '福州大学', '厦门大学', '国立华侨大学', '集美大学', '仰恩大学', '鹭江职业大学', '福建漳州师范学院', '福建职业技术学院', '福建中医学院', '福建建筑专科学校', '福建交通职业技术学院', '福建公安高等专科学校', '福建工程学院', '泉州师范学院', '莆田高等专科学校', '闽江职业大学', '福建师范大学福清校区', '三明高等专科学校', '厦门南洋学院', '龙岩学院', '黎明职业大学', '漳州职业技术学院', '福建水利电力学校'),
    new Array('湖北大学', '中国地质大学', '华中科技大学', '华中农业大学', '华中师范大学', '武汉理工大学', '武汉大学', '武汉科技大学', '武汉广播电视大学', '江汉大学', '三峡大学', '中南财经政法大学', '中南民族大学', '海军工程大学', '湖北民族学院', '湖北工业大学', '湖北教育学院', '湖北经济学院', '湖北警官学院', '湖北交通职业技术学院', '湖北师范学院', '武汉科技学院', '武汉化工学院', '武汉职业技术学院', '咸宁师范高等专科学校', '郧阳医学院', '襄樊学院', '随州职业技术学院', '武汉工业学院', '湖北广播电视大学', '鄂州大学', '武汉船舶职业技术学院', '咸宁学院', '湖北经济管理干部学院', '荆门职业技术学院', '武汉体育学院', '湖北中医学院', '孝感学院', '长江职业学院', '中南汽车科技大学', '黄冈师范学院', '襄樊职业技术学院', '武汉生物工程职业技术学院', '湖北开放职业学院', '长江大学', '恩施职业技术学院', '武汉工交职业学院', '荆州职业技术学院', '武汉通讯指挥学校'),
    new Array('湖南大学', '湖南师范大学', '湖南农业大学', '湖南广播电视大学', '中南大学', '湘潭大学', '吉首大学', '国防科技大学', '南华大学', '湖南工程学院', '湖南计算机高等专科学校', '怀化医学高等专科学校', '湖南商学院', '怀化学院', '湖南中医学院', '湖南第一师范', '湖南医科高等专科学校', '湖南环境生物职业技术学院', '中南林学院', '长沙航空职业技术学院', '邵阳高等专科学校', '邵阳学院', '湖南科技大学', '湖南文理学院', '湖南建材高等专科学校', '湖南理工学院', '湘南学院', '株洲工学院', '衡阳师范学院', '湖南铁道职业技术学院', '湖南生物机电学院', '湖南冶金职业技术学院', '湖南经济管理干部学院', '长沙理工大学', '长沙大学', '湖南工业大学', '长沙交通学院', '湖南科技职业学院', '长沙电力职业技术学院', '湖南长沙财院'),
    new Array('河南大学', '中国人民解放军信息工程大学', '河南师范大学', '河南农业大学', '郑州大学', '洛阳大学', '开封大学', '焦作大学', '中州大学', '黄河科技大学', '华北水利水电学院', '河南职业技术师范学院', '河南财经学院', '河南纺织高等专科学校', '河南机电高等专科学校', '平顶山工学院', '河南公安高等专科学校', '河南中医学院', '河南商业高等专科学校', '郑州牧业工程高等专科学校', '郑州航空工业管理学院', '河南工业大学', '郑州粮食学院', '郑州工业高等专科学校', '郑州纺织工学院', '郑州轻工业学院', '河南科技大学', '洛阳师范学院', '洛阳工业高等专科学校', '洛阳农业高等专科学校', '河南理工大学', '焦作师范高等专科学校', '平顶山学院', '平顶山工业职业技术学院', '安阳师范学院', '信阳师范学院', '新乡医学院', '周口师范学院', '驻马店师范高等专科学校', '中原工学院', '濮阳教育学院', '黄河水利职业技术学院', '许昌学院', '新乡师范高等专科学校', '郑州电力高等专科学校', '商丘师范学院', '河南财政税务高等专科学校', '洛阳医学高等专科学校', '南阳师范学院', '南阳理工学院', '河南工程技术学校', '中国烟草总公司郑州中等专业学校', '平原大学', '河南省新乡工业贸易学校', '宿州师范专科学校', '信阳农业高等专科学校', '鹤壁职业技术学院', '河南教育学院', '商丘卫生学校', '郑州经贸职业学院', '中国人民解放军外国语学院'),
    new Array('广东工业大学', '广东外语外贸大学', '广东广播电视大学', '广州大学', '广州中医药大学', '深圳大学', '华南理工大学', '华南农业大学', '华南师范大学', '中山大学', '中山医科大学', '惠州大学', '汕头大学', '湛江海洋大学', '暨南大学', '佛山大学', '韶关大学', '南方医科大学', '西江大学', '嘉应大学', '五邑大学', '广东商学院', '广东教育学院', '广东轻工职业技术学院', '广东石油化工高等专科学校', '广东技术师范学院', '广东医学院', '广东白云职业技术学院', '广东农工商职业技术学院', '广东水利电力职业技术学院', '广州师范学院', '广州航海高等专科学校', '广州医学院', '广州金融高等专科学校', '深圳职业技术学院', '湛江师范学院', '东莞理工学院', '茂名学院', '肇庆学院', '私立华联学院', '番禺职业技术学院', '广州轻工业学校', '广东药学院', '仲恺农业技术学院', '广州每国人国际学校', '韩山师范学院', '广东交通职业技术学院', '广东行知学院', '广州民航职业技术学院', '星海音乐学院', '广州广播电视大学', '广州美术学院', '广东外语艺术职业学院', '广州体育学院', '广东金融学院', '广东科学技术职业学院', '南海东软信息技术职业学院', '广东工贸职业技术学院', '深圳广播电视大学', '广东建设职业技术学院', '广东机电学院', '中山电子科技大学'),
    new Array('广西大学', '广西师范大学', '广西民族大学', '广西医科大学', '广西师范学院', '广西工学院', '广西中医学院', '广西大学梧州分校', '桂林电子工业学院', '桂林工学院', '广西机电职业技术学院', '桂林旅游高等专科学校', '桂林高等师范专科学校', '桂林医学院', '桂林航天工业高等专科学校', '右江民族医学院', '广西财经学院', '河池师范高等专科学校', '玉林师范学院'),
    new Array('海南大学', '琼州大学', '华南热带农业大学', '海南省师范学院', '海南医学院', '海口经济职业技术学院', '海南职业技术学院'),
    new Array('重庆大学', '重庆医科大学', '重庆工商大学', '重庆邮电学院', '西南政法大学', '西南师范大学', '西南农业大学', '第三军医大学', '重庆交通学院', '重庆师范大学', '重庆三峡学院', '重庆社会工作职业学院', '四川外语学院', '四川美术学院', '重庆工学院', '重庆石油高等专科学校', '重庆教育学院', '重庆职业技术学院', '渝西学院', '重庆邮电学院高职二分院', '重庆海联学院', '涪陵师范学院', '重庆工程职业技术学院', '重庆石油高等学校', '重庆大华信息工程专修学院', '重庆通信学院', '重庆工程学院'),
    new Array('四川大学', '四川师范大学', '四川农业大学', '成都理工大学', '成都中医药大学', '西南交通大学', '西南财经大学', '西南科技大学', '华西医科大学', '电子科技大学', '攀枝花学院', '中国民航飞行学院', '西华大学', '西华师范大学', '四川理工学院', '四川烹饪高等专科学校', '成都电子机械高等专科学校', '成都信息工程学院', '成都纺织高等专科学校', '西南民族大学', '西南石油学院', '乐山师范学院', '绵阳师范学院', '绵阳经济技术高等专科学校', '川北医学院', '自贡师范高等专科学校', '宜宾学院', '内江师范学院', '泸州医学院', '达县师范高等专科学校', '康定民族师范高等专科学校', '成都大学', '成都航空职业技术学院', '西昌师范高等专科学校', '四川音乐学院成都美术学院', '绵阳职业技术学院', '四川电力职业技术学院', '四川音乐学院国际演艺学院', '四川职业技术学院', '西昌农业高等专科学校', '成都东软信息技术职业学院', '成都气象学院', '成都工业学院', '四川行政学院', '成都信息产业学院', '第三军医大学成都军医学院'),
    new Array('贵州大学', '贵州工业大学', '贵州师范大学', '贵州财经学院', '贵州民族学院', '贵阳中医学院', '贵阳医学院', '贵州遵义医学院', '铜仁师范高等专科学校', '黔南民族师范学院', '贵阳金筑大学', '贵州交通职业技术学院', '贵州电子信息职业技术学院'),
    new Array('云南大学', '云南师范大学', '云南农业大学', '云南工业大学', '昆明理工大学', '云南财贸学院', '云南民族学院', '云南玉溪师范学院', '云南公安高等专科学校', '昆明医学院', '西南林学院', '大理医学院', '楚雄师范学院', '曲靖师范学院', '昆明铁路机械学校', '大理学院', '昆明冶金高等专科学校', '云南科技信息职业学院', '昆明师范高等专科学校', '昆明大学', '云南中医学院', '云南艺术学院', '红河学院', '昭通师范高等专科学校', '云南交通职业技术学院', '云南警官学院', '云南医学高等专科学校', '云南农业职业技术学院', '云南能源职业技术学院', '保山师范高等专科学校', '文山师范高等专科学校', '昆明艺术职业学院', '云南国土资源职业学院', '西双版纳职业技术学院', '昆明工业职业技术学院'),
    new Array('西藏大学'),
    new Array('陕西师范大学', '西北大学', '西安交通大学', '长安大学', '西安电子科技大学', '西安理工大学', '西安医科大学', '西安建筑科技大学', '西北工业大学', '西北农林科技大学', '第四军医大学', '陕西财经学院', '陕西理工学院', '西安科技大学', '西安邮电学院', '西安工业学院', '西安石油大学', '西安工程科技学院', '西北政法学院', '宝鸡文理学院', '西安财经学院', '陕西教育学院', '渭南师范学院', '空军工程大学', '陕西工业职业技术学院', '榆林高等专科学校', '延安大学', '杨陵职业技术学院', '陕西中医学院', '咸阳师范学院', '西安外国语学院', '西安体育学院', '西安美术学院', '西安音乐学院', '西安电力高等专科学校', '陕西科技大学', '榆林学院', '西安文理学院', '西安航空技术高等专科学校', '陕西医学高等专科学校', '安康师范专科学校', '商洛师范专科学校', '陕西国际商贸职业学院', '陕西服装艺术职业学院', '西安航空职业技术学院', '陕西铁路工程职业技术学院', '陕西职业技术学院', '陕西交通职业技术学院', '陕西财经职业技术学院', '陕西国防工业职业技术学院', '陕西电子信息职业技术学院', '陕西航空职业技术学院', '宝鸡职业技术学院', '陕西能源职业技术学院', '汉中理工学院', '西安欧亚学院', '西安思源学院', '第二炮兵工程学院', '西安统计学院', '西安电力学院', '西安联合大学', '西安外事学院'),
    new Array('甘肃农业大学', '兰州理工大学', '兰州大学', '西北师范大学', '甘肃政法学院', '兰州商学院', '兰州交通大学', '兰州工业高等专科学校', '张掖师范高等专科学校', '甘肃联合大学', '西北民族学院', '天水师范学院', '河西学院', '甘肃中医学院', '兰州医学院', '合作民族师范高等专科学校', '西北民族大学', '兰州师范高等专科学校', '陇南师范高等专科学校', '庆阳师范高等专科学校'),
    new Array('宁夏大学', '宁夏医学院', '西北第二民族学院', '宁夏广播电视大学', '宁夏财经职业技术学院', '宁夏电力科技教育工程院', '宁夏人民警察学校'),
    new Array('青海大学', '青海师范大学', '青海广播电视大学', '青海民族学院', '青海医学院', '青海建筑职业技术学院'),
    new Array('新疆大学', '新疆农业大学', '新疆医科大学', '新疆师范大学', '乌鲁木齐职业大学', '塔里木大学', '石河子大学', '新疆农业职业技术学院', '新疆机电职业技术学院', '新疆工学院', '新疆财经学院', '新疆石油学院', '新疆教育学院', '新疆警官高等专科学校', '昌吉学院', '新疆轻工职业技术学院', '新疆广播电视大学', '新疆艺术学院', '喀什师范学院'),
    new Array('香港大学', '香港中文大学', '香港理工大学', '香港科技大学', '香港城市大学', '香港浸会大学', '岭南大学', '美国犹他州立大学香港分校', '伯克莱大学香港分校', '香港艺术中心艺术学院', '香港树仁学院', '香港教育学院', '珠海书院', '能仁书院'),
    new Array('澳门大学', '澳门科技大学', '亚洲国际公开大学', '澳门理工学院', '旅游学院'),
    new Array('国立台湾大学', '中国文化大学', '国立成功大学', '国立台北艺术大学', '台湾中央大学', '台湾师范大学', '台湾海洋大学', '台湾科技大学', '台北大学', '台北科技大学', '台北医学大学', '高雄大学', '高雄师范大学', '高雄医学大学', '彰化师范大学', '慈济大学', '中央警察大学', '台湾清华大学', '台湾南华大学', '台湾东华大学', '中正大学', '逢甲大学', '台湾交通大学', '台湾中山大学', '东吴大学', '东海大学', '大同大学', '淡江大学', '私立元智大学', '私立义守大学', '真理大学', '暨南国际大学', '大叶大学', '阳明大学', '实践大学', '国立嘉义大学', '世新大学', '政治大学', '朝阳科技大学', '南台科技大学', '昆山科技大学', '嘉南药理科技大学', '中原大学', '华梵大学', '长庚大学', '铭传大学', '屏东科技大学', '云林科技大学', '静宜大学', '中兴大学', '中华大学', '中国医药学院', '中华医事学院', '国立台北师范学院', '国立体育学院', '国立政治大学传播学院', '台湾中华工学院', '台湾体育学院', '台北立体育学院', '台北立师范学院', '高雄海洋技术学院', '台南师范学院', '台南艺术学院', '台中师范学院', '台东师范学院', '中山医学院', '海军军官学校', '空军军官学校', '文藻外语学院', '花莲师范学院', '虎尾技术学院', '屏东师范学院', '长荣管理学院', '新竹师范学院', '佛光人文社会学院', '玄奘人文社会学院', '稻江科技暨管理学院', '弘光技术学院', '辅英技术学院', '明新技术学院', '高苑技术学院', '屏东商业技术学院', '中正理工学院', '国防管理学院', '陆军军官学校'));

function PreSelet() {

}
function trim(str) {
    return str.replace(/\s/g, "");
}

function SelectCollege(flag) {
    var strHtml;
    if (flag == 1) // college
    {
        strHtml = "<select name=\"prompt\" id=\"prompt\">" + "<option selected value=\"请选择地点\">请选择大学</option>";

        var province = document.getElementById('s1').value;
        var country = document.getElementById('s0').value;
        if (province == "省份" && country == "中国") {
            alert("请选择学校所在的省份");
            strHtml += "</select>";
            return;
        }

        for (i = 0; i < arrProvince.length; ++i) {
            if (arrProvince[i] == province) {
                for (j = 0; j < arrCollege[i].length; ++j) {
                    strHtml += "<option value=\"" + arrCollege[i][j] + "\">"
                        + arrCollege[i][j] + "</option>";
                }
                break;
            }
        }

        strHtml += "</select>";
        strHtml += "<span > <a href=\"#\" style=\"cursor:pointer;font-weight:bold; text-decoration:underline; \"; onclick=\"SchoollistChange('text');\">"
            + "<label class=\"thickbox\">其他</label></a></span>";
        if (province != "省份" && country == "中国")
            document.getElementById('place').innerHTML = strHtml;
        else {
            strHtml = "<input type=\"text\" name=\"prompt\" id=\"prompt\" maxlength=\"50\""
                + "class=\"online-area\" value=\"请填入大学名称\""
                + "onFocus=\"javascript:clearinfo(this);\""
                + "onBlur=\"javascript:if(this.value==''){ reloadinfo(document.all.addr,this);}\""
                + "onkeyup=\"javascript:if(this.value.length==50)alert('已达最大输入长度50字符!')\" "
                + "onkeydown=\"javascript:if(this.value.length==50)alert('已达最大输入长度50字符!')\"/>";
            document.getElementById('place').innerHTML = strHtml;
        }
    }
    else  // other place
    {
        strHtml = "<input type=\"text\" name=\"prompt\" id=\"prompt\" maxlength=\"50\""
            + "class=\"b\" value=\"请选择地点\""
            + "onFocus=\"javascript:clearinfo(this);\""
            + "onBlur=\"javascript:if(this.value==''){ reloadinfo(document.all.addr,this);}\""
            + "onkeyup=\"javascript:if(this.value.length==50)alert('已达最大输入长度50字符!')\" "
            + "onkeydown=\"javascript:if(this.value.length==50)alert('已达最大输入长度50字符!')\"/>";
        document.getElementById('place').innerHTML = strHtml;
    }
}

function SchoollistChange(change) {
    if (change == "text") {
        strHtml = "<input type=\"text\" name=\"prompt\" id=\"prompt\" maxlength=\"50\""
            + "class=\"b\" value=\"请填入大学名称\""
            + "onFocus=\"javascript:clearinfo(this);\""
            + "onBlur=\"javascript:if(this.value==''){ reloadinfo(document.all.addr,this);}\""
            + "onkeyup=\"javascript:if(this.value.length==50)alert('已达最大输入长度50字符!')\" "
            + "onkeydown=\"javascript:if(this.value.length==50)alert('已达最大输入长度50字符!')\"/>"
        strHtml += "<span > <a href=\"#\" font-weight:bold; text-decoration:underline; onclick=\"SchoollistChange('list');\" style=\"cursor:pointer\";>"
            + "<label class=\"thickbox\">学校列表</label></a></span>";
        document.getElementById('place').innerHTML = strHtml;
    }
    else if (change == "list") {
        SelectCollege(1);
    }
}
function getclipboard() {
    var content = clipboardData.getData("Text");
    if (content != null) {

        if (content.match(/(\d)/g)) {
            return content;
        }

        if (content.match(/(\d+)\.(\d+)\.(\d+)\.(\d+)/g)) {
            return content;
        } else {
            return null;
        }
    }
    else {
        return null;
    }
}
function doSharePaste() {
    //  alert('begin');
    var ip;
    if ((ip = getclipboard()) != null) {
        ip = ip.split(".");
        if (ip[0] > 255 || ip[0] < 0 || ip[1] > 255 || ip[1] < 0 || ip[2] > 255 || ip[2] < 0 || ip[3] > 255 || ip[3] < 0) {
            window.clipboardData.setData("Text", "");
            document.shareip.ip1.value = "";
            document.shareip.ip2.value = "";
            document.shareip.ip3.value = "";
            document.shareip.ip4.value = "";
        } else {
            //window.clipboardData.setData("Text",ip[0]);
            if (ip[0] != null) document.shareip.ip1.value = ip[0];
            if (ip[1] != null) document.shareip.ip2.value = ip[1];
            if (ip[2] != null) document.shareip.ip3.value = ip[2];
            if (ip[3] != null) document.shareip.ip4.value = ip[3];
            //window.clipboardData.setData("Text",ip[0]+"."+ip[1]+"."+ip[2]+"."+ip[3]);
        }
    }
    else {
        window.clipboardData.setData("Text", "");
        document.shareip.ip1.value = "";
        document.shareip.ip2.value = "";
        document.shareip.ip3.value = "";
        document.shareip.ip4.value = "";
    }
}

function doSearchPaste() {
    //  alert('begin');
    var ip;
    if ((ip = getclipboard()) != null) {
        ip = ip.split(".");
        if (ip[0] > 255 || ip[0] < 0 || ip[1] > 255 || ip[1] < 0 || ip[2] > 255 || ip[2] < 0 || ip[3] > 255 || ip[3] < 0) {
            window.clipboardData.setData("Text", "");
            document.searchip.searchip1.value = "";
            document.searchip.searchip2.value = "";
            document.searchip.searchip3.value = "";
            document.searchip.searchip4.value = "";
        } else {
            // window.clipboardData.setData("Text",ip[0]);
            if (ip[0] != null) document.searchip.searchip1.value = ip[0];
            if (ip[1] != null) document.searchip.searchip2.value = ip[1];
            if (ip[2] != null) document.searchip.searchip3.value = ip[2];
            if (ip[3] != null) document.searchip.searchip4.value = ip[3];
            //window.clipboardData.setData("Text",ip[0]+"."+ip[1]+"."+ip[2]+"."+ip[3]);
        }
    }
    else {
        window.clipboardData.setData("Text", "");
        document.searchip.searchip1.value = "";
        document.searchip.searchip2.value = "";
        document.searchip.searchip3.value = "";
        document.searchip.searchip4.value = "";
    }
}
function promptinfo() {

    var i;
    if (document.getElementById("addr").value == "大学")
        SelectCollege(1);
    else {
        SelectCollege(0);

        for (i = 0; i < addr.length; i++) {
            if (document.getElementById("addr").value == addr[i]) {
                document.getElementById("prompt").value = prompt[i];
            }
        }
    }
}

function ClearInfo(obj) {
    if (obj.value == "请输入查询的ip")
        obj.value = "";
    return false;
}

function clearinfo(obj) {
    var i;
    for (i = 0; i < prompt.length; i++) {
        if (obj.value == prompt[i]) obj.value = "";
    }
}
function reloadinfo(obj, obj1) {
    var i;
    for (i = 0; i < prompt.length; i++) {
        if (obj.value == addr[i]) obj1.value = prompt[i];
    }
}
function splitip(ip) {
    //var ip=readcookie("IP");
    //alert(ip);
    var e_ip
    if (ip != null && ip != "") {
        e_ip = ip.split(".");
        document.shareip.ip1.value = e_ip[0];
        document.shareip.ip2.value = e_ip[1];
        document.shareip.ip3.value = e_ip[2];
        document.shareip.ip4.value = e_ip[3];

    } else {
        document.shareip.ip1.value = "";
        document.shareip.ip2.value = "";
        document.shareip.ip3.value = "";
        document.shareip.ip4.value = "";
    }

}
function truncateip(obj) {
    document.shareip.ip1.value = "";
    document.shareip.ip2.value = "";
    document.shareip.ip3.value = "";
    document.shareip.ip4.value = "";
}
function iptypechange() {
    document.getElementById('radio').checked = 'true';
}
function readcookie(name) {
    var start1 = mycookie.indexOf("; " + name + "=");
    if (start1 == -1)
//alert("cookies not found");
        return false;
    else {
        start = mycookie.indexOf("=", start1) + 1;
        var end = mycookie.indexOf(";", start);
        if (end == -1) {
            end = mycookie.length;
        }
        var value = unescape(mycookie.substring(start, end));
        if (value == null) {
//	   alert("No cookies found!");
            return false;
        }
        else {
// alert("cookie变量:"+name+" 的值是 :"+value);
            return value;
        }
    }
}
function setValue(name, value, hours, path, domain, secure) {
    var str = new String();
    var nextTime = new Date();
    nextTime.setHours(nextTime.getHours() + hours);
    str = name + "=" + escape(value);
    if (hours)
        str += ";expires=" + nextTime.toGMTString();
    if (path)
        str += ";path=" + path;
    if (domain)
        str += ";domain=" + domain;
    if (secure)
        str += ";secure";
    document.cookie = str;
}
function delCookie() {
    setValue("uin", "", -1, "/", "qq.com", "1");
    //	document.getElementById('log_off').innerHTML="";
    //	document.getElementById('login_uin').innerHTML="";
    window.location.reload();
//	alert("delCookie()");
}
function getUin() {
    var uin = "";
    uin = readcookie("uin");
    if (uin == false) {
        return "";
    } else if (uin.match(/o(\d)/g)) {
        uin = uin.replace(/o0*/g, "");
        return uin;
    } else {
        return uin;
    }
}
function status() {
    if (getUin() != "" && getUin() != 'undefined') {
        //	alert(getUin());
        document.getElementById('log_off').innerHTML = "<a class=\"exit\" style=\"cursor:pointer\" onclick='javascript:if(confirm(\"确实要取消登陆吗?\")){delCookie();}' href='#'>[退出]</a>";
        document.getElementById('login_uin').innerHTML = "您登录的QQ号码：" + getUin();
        //	alert("status() on");
    }
    //else
    //{
    //	document.getElementById('log_off').innerHTML="<a style=\"cursor:pointer\" href=\"http://ip.qq.com/sign-in.shtml?TB_iframe=true&height=270&width=350\"title=\"ip.qq.com\" class=\"thickbox\">[请登录]</a></span><span>|";
    //	document.getElementById('login_uin').innerHTML="";
    //	alert("status() off");
    //}
    return false;
}
function mask(obj) {
    var key1, nextip;
    obj.value = obj.value.replace(/[^\d]/g, '')
    key1 = event.keyCode
    if (key1 == 190 || key1 == 110)//按.换输入框
    {
        obj.blur();
        if (obj.name.substr(0, 1) == "s")//searchip输入框
        {
            nextip = parseInt(obj.name.substr(8, 1)) + 1;
            nextip = nextip >= 5 ? 1 : nextip;
            nextip = nextip <= 0 ? 4 : nextip;
            eval("document.searchip.searchip" + nextip + ".focus()");
        } else if (obj.name.substr(0, 1) == "i")//shareip输入框
        {
            nextip = parseInt(obj.name.substr(2, 1)) + 1;
            nextip = nextip >= 5 ? 1 : nextip;
            nextip = nextip <= 0 ? 4 : nextip;
            eval("document.shareip.ip" + nextip + ".focus()");
        }
    }

    if (key1 == 39)//光标右移一个框
    {
        obj.blur();
        if (obj.name.substr(0, 1) == "s")//searchip输入框
        {
            nextip = parseInt(obj.name.substr(8, 1)) + 1;
            nextip = nextip >= 5 ? 1 : nextip;
            nextip = nextip <= 0 ? 4 : nextip;
            eval("document.searchip.searchip" + nextip + ".focus()");
        } else if (obj.name.substr(0, 1) == "i")//shareip输入框
        {
            nextip = parseInt(obj.name.substr(2, 1)) + 1;
            nextip = nextip >= 5 ? 1 : nextip;
            nextip = nextip <= 0 ? 4 : nextip;
            eval("document.shareip.ip" + nextip + ".focus()");
        }
    }
    if (key1 == 37)//光标左移一个框
    {
        obj.blur();
        if (obj.name.substr(0, 1) == "s")//searchip输入框
        {
            nextip = parseInt(obj.name.substr(8, 1)) - 1;
            nextip = nextip >= 5 ? 1 : nextip;
            nextip = nextip <= 0 ? 4 : nextip;
            eval("document.searchip.searchip" + nextip + ".focus()");
        } else if (obj.name.substr(0, 1) == "i")//shareip输入框
        {
            nextip = parseInt(obj.name.substr(2, 1)) - 1;
            nextip = nextip >= 5 ? 1 : nextip;
            nextip = nextip <= 0 ? 4 : nextip;
            eval("document.shareip.ip" + nextip + ".focus()");
        }
    }

    if (obj.value.length >= 3 && obj.value.match(/\d*/g) && ( (key1 >= 48 && key1 <= 57) || ( key1 >= 96 && key1 <= 105 ) )) {
        if (parseInt(obj.value) >= 256 || parseInt(obj.value) <= 0) {
            alert("您输入的数值超过了IP地址的范围（0~255），请重新输入!");
            obj.value = "";
            obj.focus();
            return  false;
        }
        else {
            obj.blur();
            if (obj.name.substr(0, 1) == "s")//searchip输入框
            {
                nextip = parseInt(obj.name.substr(8, 1)) + 1;
                nextip = nextip >= 5 ? 1 : nextip;
                nextip = nextip <= 0 ? 4 : nextip;
                eval("document.searchip.searchip" + nextip + ".focus()");
            } else if (obj.name.substr(0, 1) == "i")//shareip输入框
            {
                nextip = parseInt(obj.name.substr(2, 1)) + 1;
                nextip = nextip >= 5 ? 1 : nextip;
                nextip = nextip <= 0 ? 4 : nextip;
                eval("document.shareip.ip" + nextip + ".focus()");
            }
        }
    }
}
function slctCountry(obj) {
    if (obj.value != "中国") {
        document.shareip.province.style.visibility = "hidden";
        document.shareip.city.style.visibility = "hidden";
        document.shareip.town.style.visibility = "hidden";
    } else {
        document.shareip.province.style.visibility = "visible";
        document.shareip.city.style.visibility = "visible";
        document.shareip.town.style.visibility = "visible";
    }
    //SelectCollege(0);
}
function Checkip(obj, value) {
    if (value != "") {
        var pattern = /^\d{1,3}(\.\d{1,3}){3}$/;
        if (!pattern.exec(value)) {
            alert('请输入正确的地址\n');
            obj.value = "";
            obj.focus();
            return false
        }

        var ary = value.split('.');
        for (key in ary) {
            if (parseInt(ary[key]) > 255) {
                alert('请输入正确的地址\n');
                obj.value = "";
                obj.focus();
                return false
            }
        }
    }
}

function showrs(st) {
    if (st == "change") {
        if (document.getElementById("showreason").style.display == "") {
            document.getElementById("showreason").style.display = "none";
        } else {
            document.getElementById("showreason").style.display = "";
        }
    } else {
        document.getElementById("showreason").style.display = st;
    }
}
function killErrors() {
    return true;
}
window.onerror = killErrors;
var IE4 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) >= 4);
var NN4 = (navigator.appName == "Netscape" && parseInt(navigator.appVersion) >= 4);
//if (NN4) alert("您使用的浏览器可能无法正常浏览本站!\n请使用TT或IE浏览,谢谢!");
