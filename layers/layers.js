var wms_layers = [];


        var lyr_VWorldStreet_0 = new ol.layer.Tile({
            'title': 'VWorld Street',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "영주시 읍면동 경계",
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 영주시 읍면동 경계'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "공공기관",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 공공기관'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "관광지",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 관광지'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "기존 자전거 대여소",
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 기존 자전거 대여소'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: "버스 정류장",
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 버스 정류장'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: "격자별 입지 점수",
                interactive: true,
    title: '격자별 입지 점수<br />\
    <img src="styles/legend/_6_0.png" /> 1.44 - 1.84<br />\
    <img src="styles/legend/_6_1.png" /> 1.84 - 2.23<br />\
    <img src="styles/legend/_6_2.png" /> 2.23 - 2.63<br />\
    <img src="styles/legend/_6_3.png" /> 2.63 - 3.03<br />\
    <img src="styles/legend/_6_4.png" /> 3.03 - 3.43<br />'
        });

lyr_VWorldStreet_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr_VWorldStreet_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6];
lyr__1.set('fieldAliases', {'BASE_DATE': 'BASE_DATE', 'ADM_NM': 'ADM_NM', 'ADM_CD': 'ADM_CD', });
lyr__2.set('fieldAliases', {'name': 'name', 'address1': 'address1', '위도': '위도', '경도': '경도', });
lyr__3.set('fieldAliases', {'관광지�': '관광지�', '도로명�': '도로명�', '위도': '위도', '경도': '경도', });
lyr__4.set('fieldAliases', {'자전거�': '자전거�', '자전��_1': '자전��_1', '소재지�': '소재지�', '소재지�_1': '소재지�_1', '위도': '위도', '경도': '경도', '운영시�': '운영시�', '운영종�': '운영종�', '휴무일': '휴무일', '요금구�': '요금구�', '자전거�_1': '자전거�_1', '자전��_2': '자전��_2', '거치대�': '거치대�', '공기주�': '공기주�', '공기��_1': '공기��_1', '수리대�': '수리대�', '관리기�': '관리기�', '관리��_1': '관리��_1', '데이터�': '데이터�', });
lyr__5.set('fieldAliases', {'정류장ID': '정류장ID', '정류장명': '정류장명', '위도': '위도', '경도': '경도', });
lyr__6.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'office50M': 'office50M', 'office100M': 'office100M', 'office150M': 'office150M', 'trip100M': 'trip100M', 'trip200M': 'trip200M', 'trip300M': 'trip300M', 'trip': 'trip', 'office': 'office', 'trip_1': 'trip_1', 'bike': 'bike', '300M': '300M', 'bke300M': 'bke300M', 'robust_rank (1)_left': 'robust_rank (1)_left', 'robust_rank (1)_top': 'robust_rank (1)_top', 'robust_rank (1)_right': 'robust_rank (1)_right', 'robust_rank (1)_bottom': 'robust_rank (1)_bottom', 'robust_rank (1)_row_index': 'robust_rank (1)_row_index', 'robust_rank (1)_col_index': 'robust_rank (1)_col_index', 'robust_rank (1)_public_point': 'robust_rank (1)_public_point', 'robust_rank (1)_attractions_point': 'robust_rank (1)_attractions_point', 'robust_rank (1)_terminal_point': 'robust_rank (1)_terminal_point', 'robust_rank (1)_school_point': 'robust_rank (1)_school_point', 'robust_rank (1)_park_point': 'robust_rank (1)_park_point', 'robust_rank (1)_bus_point': 'robust_rank (1)_bus_point', 'robust_rank (1)_sen_point': 'robust_rank (1)_sen_point', 'robust_rank (1)_teen_point': 'robust_rank (1)_teen_point', 'robust_rank (1)_traffic': 'robust_rank (1)_traffic', 'robust_rank (1)_workers': 'robust_rank (1)_workers', 'robust_rank (1)_business': 'robust_rank (1)_business', 'robust_rank (1)_population': 'robust_rank (1)_population', 'robust_rank (1)_mid_point': 'robust_rank (1)_mid_point', 'robust_rank (1)_young_point': 'robust_rank (1)_young_point', 'robust_rank (1)_fix': 'robust_rank (1)_fix', 'robust_rank (1)_rent': 'robust_rank (1)_rent', 'robust_rank (1)_stay': 'robust_rank (1)_stay', 'robust_rank (1)_sci': 'robust_rank (1)_sci', 'robust_rank (1)_edu': 'robust_rank (1)_edu', 'robust_rank (1)_healthcare': 'robust_rank (1)_healthcare', 'robust_rank (1)_real_estate': 'robust_rank (1)_real_estate', 'robust_rank (1)_retail': 'robust_rank (1)_retail', 'robust_rank (1)_artssports': 'robust_rank (1)_artssports', 'robust_rank (1)_restaurants': 'robust_rank (1)_restaurants', 'robust_rank (1)_bke300M': 'robust_rank (1)_bke300M', 'robust_rank (1)_score': 'robust_rank (1)_score', });
lyr__1.set('fieldImages', {'BASE_DATE': 'TextEdit', 'ADM_NM': 'TextEdit', 'ADM_CD': 'TextEdit', });
lyr__2.set('fieldImages', {'name': 'TextEdit', 'address1': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', });
lyr__3.set('fieldImages', {'관광지�': 'TextEdit', '도로명�': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', });
lyr__4.set('fieldImages', {'자전거�': 'TextEdit', '자전��_1': 'TextEdit', '소재지�': 'TextEdit', '소재지�_1': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', '운영시�': 'TextEdit', '운영종�': 'TextEdit', '휴무일': 'TextEdit', '요금구�': 'TextEdit', '자전거�_1': 'TextEdit', '자전��_2': 'TextEdit', '거치대�': 'TextEdit', '공기주�': 'TextEdit', '공기��_1': 'TextEdit', '수리대�': 'TextEdit', '관리기�': 'TextEdit', '관리��_1': 'TextEdit', '데이터�': 'DateTime', });
lyr__5.set('fieldImages', {'정류장ID': 'Range', '정류장명': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', });
lyr__6.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'office50M': 'TextEdit', 'office100M': 'TextEdit', 'office150M': 'TextEdit', 'trip100M': 'TextEdit', 'trip200M': 'TextEdit', 'trip300M': 'TextEdit', 'trip': 'TextEdit', 'office': 'TextEdit', 'trip_1': 'TextEdit', 'bike': 'TextEdit', '300M': 'TextEdit', 'bke300M': 'TextEdit', 'robust_rank (1)_left': 'TextEdit', 'robust_rank (1)_top': 'TextEdit', 'robust_rank (1)_right': 'TextEdit', 'robust_rank (1)_bottom': 'TextEdit', 'robust_rank (1)_row_index': 'TextEdit', 'robust_rank (1)_col_index': 'TextEdit', 'robust_rank (1)_public_point': 'TextEdit', 'robust_rank (1)_attractions_point': 'TextEdit', 'robust_rank (1)_terminal_point': 'TextEdit', 'robust_rank (1)_school_point': 'TextEdit', 'robust_rank (1)_park_point': 'TextEdit', 'robust_rank (1)_bus_point': 'TextEdit', 'robust_rank (1)_sen_point': 'TextEdit', 'robust_rank (1)_teen_point': 'TextEdit', 'robust_rank (1)_traffic': 'TextEdit', 'robust_rank (1)_workers': 'TextEdit', 'robust_rank (1)_business': 'TextEdit', 'robust_rank (1)_population': 'TextEdit', 'robust_rank (1)_mid_point': 'TextEdit', 'robust_rank (1)_young_point': 'TextEdit', 'robust_rank (1)_fix': 'TextEdit', 'robust_rank (1)_rent': 'TextEdit', 'robust_rank (1)_stay': 'TextEdit', 'robust_rank (1)_sci': 'TextEdit', 'robust_rank (1)_edu': 'TextEdit', 'robust_rank (1)_healthcare': 'TextEdit', 'robust_rank (1)_real_estate': 'TextEdit', 'robust_rank (1)_retail': 'TextEdit', 'robust_rank (1)_artssports': 'TextEdit', 'robust_rank (1)_restaurants': 'TextEdit', 'robust_rank (1)_bke300M': 'TextEdit', 'robust_rank (1)_score': 'TextEdit', });
lyr__1.set('fieldLabels', {'BASE_DATE': 'no label', 'ADM_NM': 'no label', 'ADM_CD': 'no label', });
lyr__2.set('fieldLabels', {'name': 'no label', 'address1': 'no label', '위도': 'no label', '경도': 'no label', });
lyr__3.set('fieldLabels', {'관광지�': 'no label', '도로명�': 'no label', '위도': 'no label', '경도': 'no label', });
lyr__4.set('fieldLabels', {'자전거�': 'no label', '자전��_1': 'no label', '소재지�': 'no label', '소재지�_1': 'no label', '위도': 'no label', '경도': 'no label', '운영시�': 'no label', '운영종�': 'no label', '휴무일': 'no label', '요금구�': 'no label', '자전거�_1': 'no label', '자전��_2': 'no label', '거치대�': 'no label', '공기주�': 'no label', '공기��_1': 'no label', '수리대�': 'no label', '관리기�': 'no label', '관리��_1': 'no label', '데이터�': 'no label', });
lyr__5.set('fieldLabels', {'정류장ID': 'no label', '정류장명': 'no label', '위도': 'no label', '경도': 'no label', });
lyr__6.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'office50M': 'no label', 'office100M': 'no label', 'office150M': 'no label', 'trip100M': 'no label', 'trip200M': 'no label', 'trip300M': 'no label', 'trip': 'no label', 'office': 'no label', 'trip_1': 'no label', 'bike': 'no label', '300M': 'no label', 'bke300M': 'no label', 'robust_rank (1)_left': 'no label', 'robust_rank (1)_top': 'no label', 'robust_rank (1)_right': 'no label', 'robust_rank (1)_bottom': 'no label', 'robust_rank (1)_row_index': 'no label', 'robust_rank (1)_col_index': 'no label', 'robust_rank (1)_public_point': 'no label', 'robust_rank (1)_attractions_point': 'no label', 'robust_rank (1)_terminal_point': 'no label', 'robust_rank (1)_school_point': 'no label', 'robust_rank (1)_park_point': 'no label', 'robust_rank (1)_bus_point': 'no label', 'robust_rank (1)_sen_point': 'no label', 'robust_rank (1)_teen_point': 'no label', 'robust_rank (1)_traffic': 'no label', 'robust_rank (1)_workers': 'no label', 'robust_rank (1)_business': 'no label', 'robust_rank (1)_population': 'no label', 'robust_rank (1)_mid_point': 'no label', 'robust_rank (1)_young_point': 'no label', 'robust_rank (1)_fix': 'no label', 'robust_rank (1)_rent': 'no label', 'robust_rank (1)_stay': 'no label', 'robust_rank (1)_sci': 'no label', 'robust_rank (1)_edu': 'no label', 'robust_rank (1)_healthcare': 'no label', 'robust_rank (1)_real_estate': 'no label', 'robust_rank (1)_retail': 'no label', 'robust_rank (1)_artssports': 'no label', 'robust_rank (1)_restaurants': 'no label', 'robust_rank (1)_bke300M': 'no label', 'robust_rank (1)_score': 'no label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});