#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库
DROP DATABASE IF EXISTS goodlive;
#创建数据库
CREATE DATABASE goodlive CHARSET=UTF8;
#进入该数据库
USE goodlive;
#保存家具分类列表
CREATE TABLE product_family(
  fid INT PRIMARY KEY,
  fname VARCHAR(15)
);
  #插入家具分类数据
INSERT INTO product_family VALUES(10,'沙发');
INSERT INTO product_family VALUES(20,'床');
INSERT INTO product_family VALUES(30,'桌子');
INSERT INTO product_family VALUES(40,'柜子');
INSERT INTO product_family VALUES(50,'架子');
INSERT INTO product_family VALUES(60,'椅子');
INSERT INTO product_family VALUES(70,'凳子');
INSERT INTO product_family VALUES(80,'屏风');

#创建保存商品详情数据的表
CREATE TABLE product_list( 
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(32) UNIQUE, 
  price DECIMAL(7,2),
  brand VARCHAR(200), 
  spec VARCHAR(200) NOT NULL,
  detail VARCHAR(200),
  img VARCHAR(32),
  imgs VARCHAR(200),
  familyId INT,
  FOREIGN KEY(familyId) REFERENCES product_family(fid)
);
#插入数据
INSERT INTO product_list VALUES(NULL,"皮沙发",999.00,"","百搭小户型布艺沙发","美式沙发乡村复古真皮皮艺组合沙发客厅整装实木转角大小户型头层","s1","s1,s2,s3,s4",10);
INSERT INTO product_list VALUES(NULL,"百搭小户型布艺沙发",999.00,"","百搭小户型布艺沙发","户外沙发藤编沙发设计师样板房藤沙发酒店软装地产休闲编藤绳沙发","s3","s3,s2,s3,s4",10);
INSERT INTO product_list VALUES(NULL,"意大利现代时尚三人沙发",999.00,"","意大利现代时尚三人沙发","简约现代北欧客厅三人转角租房可拆洗乳胶科技布艺沙发小户型套装","s4","s4,s2,s3,s4",10);
INSERT INTO product_list VALUES(NULL,"多功能沙发床",999.00,"","多功能沙发床","真皮沙发头层牛皮客厅整装1+2+3组合 北欧小户型三人现代简约皮艺","s2","s2,s4,s3,s4",10);
INSERT INTO product_list VALUES(NULL,"现代沙发床",999.00,"","现代沙发床","林氏木业北欧贵妃布艺沙发后现代简约小户型客厅组合家具套装2040","s1","s3,s2,s3,s4",10);
INSERT INTO product_list VALUES(NULL,"简约布艺沙发",999.00,"","简约布艺沙发","意式简约现代乳胶布艺沙发客厅小户型可拆洗三人四人位北欧风沙发","s2","s1,s2,s3,s4",10);
INSERT INTO product_list VALUES(NULL,"百搭小户型布艺沙发",999.00,"","百搭小户型布艺沙发","轻奢北欧沙发现代简约小户型客厅米兰羽绒真皮沙发意大利布艺沙发","s3","s4,s2,s3,s4",10);

INSERT INTO product_list VALUES(NULL,"实木床双人床",999.00,"","实木床双人床","北欧全实木床双人床1.5米 1.8米主卧室床现代简约1.2米松木单人床","c1","c1,c2,c3,c4",20);
INSERT INTO product_list VALUES(NULL,"北欧轻奢床",999.00,"","北欧轻奢床","实木床1.5米现代简约1.8米双人床简易出租房床架单人床1.2m经济型","c1","c3,c2,c3,c4",20);
INSERT INTO product_list VALUES(NULL,"纯实木床",999.00,"","纯实木床","床现代简约高箱储物收纳床单双人床小户型出租房经济主卧室北欧床","c3","c4,c2,c3,c4",20);
INSERT INTO product_list VALUES(NULL,"现代简约双人床",999.00,"","现代简约双人床","艾莲娜美式床欧式床双人床主卧现代简约婚床实木家具公主床1.8米","c2","c2,c2,c3,c4",20);
INSERT INTO product_list VALUES(NULL,"布艺床榻榻米",999.00,"","布艺床榻榻米","北欧全实木床双人床1.5米 1.8米主卧室床现代简约1.2米松木单人床","c4","c1,c2,c3,c4",20);
